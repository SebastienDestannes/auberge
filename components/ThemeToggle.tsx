/**
 * components/ThemeToggle.tsx
 * 
 * Bouton pour basculer entre mode clair et mode sombre
 * ✅ Détecte préférence système
 * ✅ Sauvegarde choix en localStorage
 * ✅ Ajoute/retire classe 'dark' sur <html>
 */

'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  /**
   * Au chargement du composant:
   * 1. Récupère préférence système OU localStorage
   * 2. Applique le thème
   * 3. Marque comme monté (évite hydration mismatch)
   */
  useEffect(() => {
    // Vérifie localStorage d'abord
    const savedTheme = localStorage.getItem('theme');
    
    let isDarkMode: boolean;
    
    if (savedTheme) {
      // Utilise le thème sauvegardé
      isDarkMode = savedTheme === 'dark';
    } else {
      // Utilise la préférence système
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);
    setIsMounted(true);
  }, []);

  /**
   * Applique le thème au <html>
   * - dark mode = ajoute classe 'dark'
   * - light mode = retire classe 'dark'
   */
  const applyTheme = (dark: boolean) => {
    const htmlElement = document.documentElement;
    
    if (dark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Sauvegarde le choix
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  /**
   * Toggle: bascule entre clair et sombre
   */
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  };

  // Évite hydration mismatch en attendant le montage
  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded-lg 
        bg-gray-100 dark:bg-gray-800
        text-gray-900 dark:text-white
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary
      "
      aria-label="Basculer thème clair/sombre"
      title={isDark ? 'Mode clair' : 'Mode sombre'}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-gray-700" />
      )}
    </button>
  );
}

/**
 * ⭐ COMMENT L'UTILISER
 * 
 * 1. Importe dans ton Header:
 *    import ThemeToggle from '@/components/ThemeToggle';
 * 
 * 2. Ajoute le bouton:
 *    <ThemeToggle />
 * 
 * 3. Prêt! Le bouton bascule le thème automatiquement
 * 
 * === FONCTIONNEMENT ===
 * 
 * ✅ Clique 1: Ajoute 'dark' à <html> → mode sombre
 * ✅ Clique 2: Retire 'dark' de <html> → mode clair
 * ✅ Sauvegarde en localStorage
 * ✅ Récupère au rechargement
 * 
 * === PERSONNALISATION ===
 * 
 * Couleurs du bouton:
 * - Clair: bg-gray-100 text-gray-900
 * - Sombre: dark:bg-gray-800 dark:text-white
 * 
 * Au survol:
 * - Clair: hover:bg-gray-200
 * - Sombre: dark:hover:bg-gray-700
 * 
 * À adapter selon tes couleurs!
 */