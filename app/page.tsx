/**
 * app/page.tsx - ACCUEIL RESTRUCTURÉ
 * 
 * Version courte et efficace (Scénario C)
 * Focus: randonneurs + présentation rapide
 * 
 * Sections:
 * 1. Hero (70vh) - Image montagne/gîte
 * 2. Features (3 points clés)
 * 3. Formules aperçu (2 cards, sans tarifs)
 * 4. CTA Randonneurs
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, Utensils, ChevronRight } from 'lucide-react';

/**
 * ========================================
 * 1. SECTION HERO (70vh)
 * ========================================
 * 
 * Utilise ton image vue-panoramique.jpg
 * Overlay pour lisibilité du texte
 */
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Image de fond avec overlay */}
      <div
        className="absolute"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/images/hero/vue-panoramique-600-337.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Contenu hero */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Badge localisation */}
        <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm font-medium">
          <MapPin className="mr-2" size={16} />
          Vallée d'Ustou, Ariège
        </span>

        {/* Titre principal */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-8 leading-tight">
          Ici, le temps<br />
          <span className="text-green-300">dure longtemps</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
          Carrefour de randonnée pyrénéenne • Base de repos • Table d'hôtes authentique
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-green-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-green-700 transition-all shadow-lg text-sm sm:text-base"
          >
            Réserver un séjour
            <ChevronRight className="ml-2" size={20} />
          </Link>

          <Link
            href="/randonnees"
            className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-50 transition-all shadow-lg text-sm sm:text-base"
          >
            Nos sentiers
          </Link>
        </div>
      </div>

      {/* Scroll indicator (sur desktop uniquement) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

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
      description: 'GR10, Hexatrek, HRP, GRP, Muntanya de la libertat',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: '🏘️',
      title: 'Authenticité',
      description: 'Ancienne école restaurée avec charme en cœur de montagne',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: '🍷',
      title: 'Table d\'hôtes',
      description: 'Cuisine locale et produits du terroir ariégeois',
      color: 'bg-red-100 text-red-700',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 text-center"
            >
              {/* Icone */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 ${feature.color} rounded-2xl flex items-center justify-center mb-4 text-4xl mx-auto shadow-lg`}>
                {feature.icon}
              </div>

              {/* Titre */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Nos formules
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
            Deux façons de vivre L'Escolan
          </p>
        </div>

        {/* Cards formules */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {formules.map((formule) => (
            <div
              key={formule.id}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-6 sm:p-8"
            >
              {/* Icone */}
              <div className="text-4xl mb-4">{formule.icone}</div>

              {/* Titre */}
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                {formule.titre}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {formule.description}
              </p>

              {/* Points clés */}
              <div className="space-y-3 mb-8">
                {formule.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bouton */}
              <Link
                href="/hebergements"
                className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
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
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          🥾 Randonneurs?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-white/90 max-w-xl mx-auto">
          L'Escolan est carrefour de 5 grands sentiers pyrénéens.
          Découvrez nos tracés et planifiez votre rando.
        </p>
        <Link
          href="/randonnees"
          className="inline-flex items-center justify-center bg-white text-green-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition shadow-lg text-sm sm:text-base"
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
 */
export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <FeaturesSection />

      {/* Formules */}
      <FormulesSection />

      {/* CTA Rando */}
      <CTARandoSection />
    </div>
  );
}

/**
 * ⭐ STRUCTURE FINALE
 * 
 * Total accueil: ~60-80 secondes de scroll
 * Mobile-friendly: images réduites, texte adapté
 * Focus: randonneurs + formules simples
 * 
 * À AJOUTER PLUS TARD:
 * - Images optimisées (compressées)
 * - Témoignages réduits
 * - Lien vers page /randonnees bien visible
 */