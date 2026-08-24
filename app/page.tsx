/**
 * app/page.tsx - ACCUEIL REFACTORISÉ
 * 
 * ✅ Importe le composant Hero
 * ✅ Version courte (Scénario C)
 * ✅ Focus: randonneurs + présentation rapide
 * 
 * Sections:
 * 1. Hero (composant séparé) ← APPEL À Hero.tsx
 * 2. Features (3 points clés)
 * 3. Formules aperçu (2 cards)
 * 4. CTA Randonneurs
 */

'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * ========================================
 * 2. FEATURES (3 points clés)
 * ========================================
 * 
 * Rapide, simple, impactant
 * Focus sur ce qui différencie L'Escolan
 */
function FeaturesSection() {
  const features = [
    {
      icon: '🥾',
      title: 'Carrefour de randonnée',
      description: 'GR10, Hexatrek, HRP, Muntanya de la libertat',
      bgLight: 'bg-blue-100',
      textLight: 'text-blue-700',
      bgDark: 'dark:bg-blue-900',
      textDark: 'dark:text-blue-300',
    },
    {
      icon: '🏘️',
      title: 'Authenticité',
      description: 'Ancienne école restaurée avec charme en cœur de montagne',
      bgLight: 'bg-amber-100',
      textLight: 'text-amber-700',
      bgDark: 'dark:bg-amber-900',
      textDark: 'dark:text-amber-300',
    },
    {
      icon: '🍷',
      title: 'Table d\'hôtes',
      description: 'Cuisine locale et produits du terroir ariégeois',
      bgLight: 'bg-red-100',
      textLight: 'text-red-700',
      bgDark: 'dark:bg-red-900',
      textDark: 'dark:text-red-300',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Pourquoi L'Escolan?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Trois raisons de nous découvrir
          </p>
        </div>

        {/* Grille des features */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all p-6 sm:p-8 text-center"
            >
              {/* Icone avec fond coloré */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 ${feature.bgLight} ${feature.bgDark} ${feature.textLight} ${feature.textDark} rounded-2xl flex items-center justify-center mb-4 text-4xl mx-auto shadow-lg`}>
                {feature.icon}
              </div>

              {/* Titre */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 3. FORMULES APERÇU (2 cards)
 * ========================================
 * 
 * Sans tarifs (clique pour les voir)
 * Présentation simple et claire
 */
function FormulesSection() {
  const formules = [
    {
      id: 1,
      titre: 'Demi-pension',
      icone: '🛏️',
      description: 'Séjour en petit groupe avec repas inclus',
      points: [
        'Chambre ou dortoir',
        'Petit-déj & dîner maison',
        'Accès complet au gîte',
      ],
    },
    {
      id: 2,
      titre: 'Gestion libre',
      icone: '👥',
      description: 'Location complète pour votre groupe',
      points: [
        'Maison entière privatisée',
        'Cuisine équipée',
        'Idéal familles & événements',
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Nos formules
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Deux façons de vivre L'Escolan
          </p>
        </div>

        {/* Grille des formules */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {formules.map((formule) => (
            <div
              key={formule.id}
              className="bg-gradient-to-br from-white dark:from-gray-800 to-gray-50 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl transition-all p-6 sm:p-8"
            >
              {/* Icone */}
              <div className="text-4xl mb-4">{formule.icone}</div>

              {/* Titre */}
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {formule.titre}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                {formule.description}
              </p>

              {/* Points clés */}
              <div className="space-y-3 mb-8">
                {formule.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bouton */}
              <Link
                href="/hebergements"
                className="block w-full text-center 
                  bg-green-600 hover:bg-green-700
                  dark:bg-green-600 dark:hover:bg-green-700
                  text-white font-semibold 
                  py-3 rounded-lg transition text-sm sm:text-base"
              >
                Voir les détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 4. CTA RANDONNEURS
 * ========================================
 * 
 * Encourage à explorer la page randos
 */
function CTARandoSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Titre */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          🥾 Randonneurs?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg mb-8 text-white/90 max-w-xl mx-auto">
          L'Escolan est carrefour de 4 grands sentiers pyrénéens.
          Découvrez nos tracés et planifiez votre rando.
        </p>

        {/* Bouton CTA */}
        <Link
          href="/randonnees"
          className="inline-flex items-center justify-center 
            bg-white hover:bg-gray-50
            dark:bg-white dark:hover:bg-gray-100
            text-green-700 dark:text-green-900
            font-semibold 
            py-3 sm:py-4 px-8 rounded-lg 
            transition shadow-lg hover:shadow-xl
            text-sm sm:text-base"
        >
          Explorer nos sentiers
          <ChevronRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
}

/**
 * ========================================
 * COMPOSANT PRINCIPAL
 * ========================================
 * 
 * Structure:
 * 1. Hero (← IMPORTE depuis Hero.tsx)
 * 2. Features
 * 3. Formules
 * 4. CTA Rando
 */
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      
      {/* 1. HERO - Composant séparé */}
      <Hero />

      {/* 2. FEATURES */}
      <FeaturesSection />

      {/* 3. FORMULES */}
      <FormulesSection />

      {/* 4. CTA RANDO */}
      <CTARandoSection />
    </div>
  );
}

/**
 * ⭐ AMÉLIORATIONS APPORTÉES
 * 
 * ✅ Hero maintenant en composant séparé (Hero.tsx)
 * ✅ page.tsx importe et utilise le composant
 * ✅ Code plus propre et maintenable
 * ✅ Dark mode intégré partout
 * ✅ Features/Formules/CTA restent dans page.tsx
 * 
 * 📝 STRUCTURE FINALE
 * 
 * app/
 * ├── page.tsx ← Importe Hero
 * └── (pages)/
 * 
 * components/
 * └── Hero.tsx ← Composant réutilisable
 * 
 * 🎯 Avantages:
 * - Réutilisable sur d'autres pages
 * - Modification centralisée (un seul fichier)
 * - Séparation des responsabilités
 * - Plus lisible et professionnel
 */