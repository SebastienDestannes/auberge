/**
 * app/(pages)/galerie/page.tsx
 * 
 * Page galerie photos
 * Grille d'images cliquables avec lightbox modal
 */

'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ========================================
 * DONNÉES DES IMAGES
 * ========================================
 * 
 * À remplacer par les vraies images du gîte
 * Format: public/images/...
 */
const images = [
  { id: 1, src: '/images/hero/gite-principal.jpg', alt: 'Façade principale du gîte L\'Escolan' },
  { id: 2, src: '/images/chambres/chambre-double.jpg', alt: 'Chambre double confortable' },
  { id: 3, src: '/images/chambres/chambre-familiale.jpg', alt: 'Chambre familiale spacieuse' },
  { id: 4, src: '/images/dortoir/dortoir-1.jpg', alt: 'Dortoir avec lits simples' },
  { id: 5, src: '/images/cuisine/cuisine-principale.jpg', alt: 'Cuisine équipée du gîte' },
  { id: 6, src: '/images/salle-commune/salon.jpg', alt: 'Salon & salle commune' },
  { id: 7, src: '/images/exterieur/terrasse.jpg', alt: 'Terrasse avec vue sur la vallée' },
  { id: 8, src: '/images/exterieur/piscine.jpg', alt: 'Piscine privée du gîte' },
  { id: 9, src: '/images/exterieur/jardin.jpg', alt: 'Jardin et terrain privé' },
  { id: 10, src: '/images/paysages/montagnes.jpg', alt: 'Vue sur les montagnes ariégeoise' },
  { id: 11, src: '/images/table-hotes/garbure.jpg', alt: 'Table d\'hôtes - spécialité ariégeoise' },
  { id: 12, src: '/images/paysages/lever-soleil.jpg', alt: 'Lever de soleil depuis le gîte' },
];

/**
 * ========================================
 * 1. HERO
 * ========================================
 */
function HeroSection() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 bg-gradient-to-b from-purple-600 to-pink-600 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Galerie photos
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          Découvrez L'Escolan et ses environs à travers nos images
        </p>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 2. GRILLE GALERIE
 * ========================================
 * 
 * Images cliquables pour ouvrir la lightbox
 */
function GalerieGrid() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  
  // Trouver l'image sélectionnée
  const selectedImage = images.find(img => img.id === selectedImageId);
  
  /**
   * Navigation entre images
   */
  const goToNext = () => {
    if (selectedImageId === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImageId);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImageId(images[nextIndex].id);
  };
  
  const goToPrev = () => {
    if (selectedImageId === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImageId);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImageId(images[prevIndex].id);
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container">
        
        {/* Titre */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Le gîte en images
          </h2>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Cliquez sur une image pour l'agrandir
          </p>
        </div>
        
        {/* Grille responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageId(image.id)}
              className="relative aspect-square overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              
              {/* Loupe icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          
          {/* Bouton fermer (X) */}
          <button
            onClick={() => setSelectedImageId(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          
          {/* Bouton navigation gauche */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition hidden sm:block"
            aria-label="Image précédente"
          >
            <ChevronLeft size={40} />
          </button>
          
          {/* Contenu principal */}
          <div className="max-w-4xl w-full">
            {/* Image agrandie */}
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Description & compteur */}
            <div className="text-center mt-6">
              <p className="text-white text-lg font-medium">
                {selectedImage.alt}
              </p>
              <p className="text-white/70 text-sm mt-2">
                Image {images.findIndex(img => img.id === selectedImage.id) + 1} sur {images.length}
              </p>
            </div>
          </div>
          
          {/* Bouton navigation droite */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition hidden sm:block"
            aria-label="Image suivante"
          >
            <ChevronRight size={40} />
          </button>
          
          {/* Navigation mobile (flèches texte) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 sm:hidden">
            <button
              onClick={goToPrev}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition text-sm"
            >
              ← Précédente
            </button>
            <button
              onClick={goToNext}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition text-sm"
            >
              Suivante →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * ========================================
 * 3. SECTION INFOS
 * ========================================
 */
function InfoSection() {
  return (
    <section className="py-12 sm:py-16 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-purple-200 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            📸 À propos de nos photos
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Les images que vous voyez sont prises régulièrement pour vous montrer l'état réel du gîte. 
            Elles ne sont pas retouchées et reflètent fidèlement l'environnement et les équipements de L'Escolan.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Vous souhaitez voir d'autres photos? N'hésitez pas à nous contacter ou à consulter nos 
            pages de réseaux sociaux (Facebook, Instagram) pour les dernières mises à jour!
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 4. CTA
 * ========================================
 */
function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Prêt à visiter?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-purple-100 max-w-xl mx-auto">
          Ces photos vous ont plu? Réservez maintenant et venez découvrir L'Escolan en personne!
        </p>
        <a
          href="/hebergements"
          className="inline-block bg-white text-purple-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
        >
          Consulter les tarifs
        </a>
      </div>
    </section>
  );
}

/**
 * ========================================
 * COMPOSANT PRINCIPAL
 * ========================================
 */
export default function GaleriePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <GalerieGrid />
      <InfoSection />
      <CTASection />
    </div>
  );
}

/**
 * ⭐ NOTES IMPORTANTES
 * 
 * 1. ORGANISATION IMAGES:
 *    - public/images/
 *    ├─ hero/
 *    ├─ chambres/
 *    ├─ cuisine/
 *    ├─ exterieur/
 *    ├─ paysages/
 *    └─ table-hotes/
 * 
 * 2. LIGHTBOX:
 *    - Clique = ouvre modal
 *    - Navigation gauche/droite
 *    - Ferme au clic sur X
 *    - Loading lazy pour perfs
 * 
 * 3. RESPONSIVE:
 *    - Grille 2 colonnes mobile
 *    - 3-4 colonnes desktop
 *    - Navigation adaptée (buttons mobile)
 * 
 * 4. À AJOUTER:
 *    - Vraies images du gîte
 *    - Plus de photos (20-30)
 *    - Photos saisonnières (4 saisons)
 *    - Photos 360° (optionnel)
 * 
 * 5. OPTIMISATION:
 *    - Utilise next/image pour auto-optimisation
 *    - loading="lazy" pour perfs
 *    - WebP avec fallback JPG
 */