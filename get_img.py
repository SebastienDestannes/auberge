#!/usr/bin/env python3
# get_img.py

import requests
from bs4 import BeautifulSoup
from PIL import Image
import io
import os
from urllib.parse import urljoin, urlparse
import json

class ImageAnalyzer:
    def __init__(self, base_url):
        self.base_url = base_url
        self.images = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def get_page(self, url):
        """Récupère le contenu d'une page"""
        try:
            response = self.session.get(url)
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            print(f"Erreur lors de la récupération de {url} : {e}")
            return None
    
    def find_images(self, url):
        """Trouve toutes les images d'une page"""
        response = self.get_page(url)
        if not response:
            return
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Trouver les images dans les balises img
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                full_url = urljoin(url, src)
                if full_url.startswith('http'):
                    self.images.append({
                        'url': full_url,
                        'page': url,
                        'alt': img.get('alt', ''),
                        'type': 'img'
                    })
        
        # Trouver les images en fond (CSS)
        for div in soup.find_all(style=True):
            style = div.get('style', '')
            if 'background-image' in style:
                start = style.find('url(') + 4
                end = style.find(')', start)
                if start > 4 and end > start:
                    url = style[start:end].strip('"\'')
                    full_url = urljoin(url, url)
                    if full_url.startswith('http'):
                        self.images.append({
                            'url': full_url,
                            'page': url,
                            'alt': 'background',
                            'type': 'css'
                        })
    
    def analyze_image(self, image_url):
        """Analyse une image : dimensions, poids, qualité"""
        try:
            response = self.session.get(image_url, timeout=10)
            response.raise_for_status()
            
            # Taille du fichier
            size_in_kb = len(response.content) / 1024
            
            # Ouvrir l'image avec Pillow
            try:
                img = Image.open(io.BytesIO(response.content))
                width, height = img.size
                format = img.format
                mode = img.mode
            except:
                width, height = 0, 0
                format = "Inconnu"
                mode = ""
            
            return {
                'url': image_url,
                'size_kb': round(size_in_kb, 1),
                'width': width,
                'height': height,
                'format': format,
                'mode': mode,
                'quality_score': self.calculate_quality(size_in_kb, width, height)
            }
        
        except requests.exceptions.RequestException as e:
            return {
                'url': image_url,
                'error': str(e)
            }
    
    def calculate_quality(self, size_kb, width, height):
        """Calcule un score de qualité pour l'image"""
        if width == 0 or height == 0:
            return 0
        
        # Ratio largeur/hauteur
        ratio = width / height
        
        # Score basé sur la résolution
        resolution_score = 0
        if width >= 1920 and height >= 1080:
            resolution_score = 5  # Excellent
        elif width >= 1280 and height >= 720:
            resolution_score = 4  # Très bon
        elif width >= 800 and height >= 600:
            resolution_score = 3  # Bon
        elif width >= 640 and height >= 480:
            resolution_score = 2  # Moyen
        else:
            resolution_score = 1  # Faible
        
        # Score basé sur le poids
        weight_score = 0
        if size_kb < 100:
            weight_score = 5  # Excellent (léger)
        elif size_kb < 300:
            weight_score = 4  # Très bien
        elif size_kb < 500:
            weight_score = 3  # Bien
        elif size_kb < 1000:
            weight_score = 2  # Lourd
        else:
            weight_score = 1  # Très lourd
        
        # Score final (max 10)
        final_score = min(resolution_score + weight_score, 10)
        
        return final_score
    
    def crawl_site(self, start_url, max_pages=20):
        """Explore le site pour trouver toutes les pages"""
        pages_to_visit = [start_url]
        visited_pages = set()
        all_images = []
        
        while pages_to_visit and len(visited_pages) < max_pages:
            current_url = pages_to_visit.pop(0)
            
            if current_url in visited_pages:
                continue
            
            print(f"Analyse de : {current_url}")
            visited_pages.add(current_url)
            
            response = self.get_page(current_url)
            if response:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Trouver les liens internes
                for link in soup.find_all('a', href=True):
                    href = link['href']
                    if href.startswith('/') or href.startswith(self.base_url):
                        full_url = urljoin(self.base_url, href)
                        if full_url not in visited_pages:
                            pages_to_visit.append(full_url)
                
                # Analyser les images de cette page
                page_images = self.find_images(current_url)
                all_images.extend(page_images)
        
        return all_images
    
    def generate_report(self, images):
        """Génère un rapport détaillé des images"""
        print("\n" + "="*80)
        print("RAPPORT D'ANALYSE DES IMAGES")
        print("="*80 + "\n")
        
        # Trier par qualité
        analyzed_images = []
        for img in images:
            print(f"Analyse de : {img['url']}")
            result = self.analyze_image(img['url'])
            result.update(img)
            analyzed_images.append(result)
        
        # Sauvegarder le rapport
        report = {
            'total_images': len(analyzed_images),
            'images': sorted(analyzed_images, key=lambda x: x.get('quality_score', 0), reverse=True)
        }
        
        # Écrire le rapport JSON
        with open('rapport_images.json', 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        # Afficher un résumé
        self.print_summary(report)
        
        return report
    
    def print_summary(self, report):
        """Affiche un résumé du rapport"""
        print("\n" + "="*80)
        print(f"Total d'images trouvées : {report['total_images']}")
        print("="*80 + "\n")
        
        # Meilleures images
        print("TOP 10 DES MEILLEURES IMAGES :")
        print("-"*40)
        
        for i, img in enumerate(report['images'][:10]):
            if 'quality_score' in img:
                score = img['quality_score']
                stars = '★' * score + '☆' * (10 - score)
                print(f"{i+1}. {img['url']}")
                print(f"   Score: {stars} ({score}/10)")
                print(f"   Dimensions: {img['width']}x{img['height']}")
                print(f"   Poids: {img['size_kb']}KB")
                print(f"   Format: {img['format']}")
                print()
        
        # Images à éviter
        print("\nIMAGES À AMÉLIORER (score < 5) :")
        print("-"*40)
        
        for img in report['images']:
            if 'quality_score' in img and img['quality_score'] < 5:
                print(f"✗ {img['url']}")
                print(f"   Score: {img['quality_score']}/10")
                print(f"   Dimensions: {img['width']}x{img['height']}")
                print(f"   Poids: {img['size_kb']}KB")
                print()

def main():
    # Configuration
    base_url = "https://lescolan.com"
    start_url = base_url
    
    print("🚀 Démarrage de l'analyse des images...")
    print(f"Site à analyser : {base_url}")
    print("-" * 40)
    
    # Créer l'analyseur
    analyzer = ImageAnalyzer(base_url)
    
    # Explorer le site
    print("📁 Exploration du site...")
    images = analyzer.crawl_site(start_url, max_pages=50)
    
    # Analyser les images
    print(f"\n📊 Analyse de {len(images)} images trouvées...")
    report = analyzer.generate_report(images)
    
    print("\n✅ Analyse terminée !")
    print("📄 Rapport sauvegardé dans : rapport_images.json")

if __name__ == "__main__":
    main()