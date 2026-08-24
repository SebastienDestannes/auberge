/**
 * components/Hero.tsx - EXEMPLE avec NOUVEAU THÈME
 * 
 * Utilise la nouvelle palette de couleurs:
 * - Primary: Vert #126700
 * - Accent: Turquoise #2ed5c0
 * - Dark Forest: #213016
 * - Olive: #5e722c
 * 
 * ✅ Cet exemple montre comment adapter tes composants
 */

'use client';

import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-dark-forest">
      {/* Image de fond avec overlay */}
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 103, 0, 0.4), rgba(18, 103, 0, 0.3)), url('/images/hero/vue-panoramique-600-337.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Contenu hero */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Badge localisation */}
        <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm font-medium hover:bg-white/30 transition-colors">
          <MapPin className="mr-2" size={16} />
          Vallée d'Ustou, Ariège
        </span>

        {/* Titre principal */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-8 leading-tight">
          Ici, le temps<br />
          <span className="text-accent-300 dark:text-accent-400">dure longtemps</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
          Carrefour de randonnée pyrénéenne • Base de repos • Table d'hôtes authentique
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          
          {/* Bouton PRIMARY - Réserver */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center 
              bg-primary hover:bg-primary-700
              dark:bg-primary-dark-light dark:hover:bg-primary
              text-white font-semibold 
              py-3 sm:py-4 px-6 sm:px-8 rounded-lg 
              transition-all shadow-lg hover:shadow-xl
              text-sm sm:text-base"
          >
            Réserver un séjour
            <ChevronRight className="ml-2" size={20} />
          </Link>

          {/* Bouton ACCENT - Sentiers */}
          <Link
            href="/randonnees"
            className="inline-flex items-center justify-center 
              bg-accent hover:bg-accent-600
              dark:bg-accent-500 dark:hover:bg-accent-400
              text-white font-semibold 
              py-3 sm:py-4 px-6 sm:px-8 rounded-lg 
              transition-all shadow-lg hover:shadow-xl
              text-sm sm:text-base"
          >
            Nos sentiers
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

/**
 * ⭐ MAPPINGS COULEURS UTILISÉES
 * 
 * === LIGHT MODE ===
 * - Overlay fond: primary (#126700) 40% opacity
 * - Accent texte: accent-300 (#99f5eb turquoise clair)
 * - Bouton primaire: primary (#126700 vert)
 * - Bouton accent: accent (#2ed5c0 turquoise)
 * 
 * === DARK MODE ===
 * - Section: dark-forest (#213016)
 * - Accent texte: accent-400 (#33ebd5 turquoise)
 * - Bouton primaire: primary-dark-light (#52b39e cyan)
 * - Bouton accent: accent-500 (#1ba88f turquoise foncé)
 * 
 * === AUTRES VARIANTES À TESTER ===
 * 
 * Option 1: Boutons échangés
 * <Link className="bg-accent dark:bg-primary">Réserver</Link>
 * <Link className="bg-primary dark:bg-accent">Sentiers</Link>
 * 
 * Option 2: Texte comme couleur
 * <h1 className="text-primary dark:text-accent-300">...</h1>
 * 
 * Option 3: Fonds colorés
 * <section className="bg-neutral dark:bg-dark-forest">...</section>
 */