/**
 * app/(pages)/randonnees/page.tsx
 * 
 * Page présentation des 5 grands sentiers pyrénéens
 * Avec carte Leaflet interactive + fiches détaillées
 * 
 * Sentiers:
 * 1. Hexatrek (3034km, L'Escolan sur le tracé)
 * 2. GR10 (point de passage)
 * 3. Muntanya de la libertat (POINT DE DÉPART)
 * 4. GRP (certaines courses passent par là)
 * 5. HRP (811km, elite)
 */

'use client';

import { useState, useEffect } from 'react';
import { MapPin, Clock, TrendingUp, Users } from 'lucide-react';

/**
 * ========================================
 * DONNÉES DES 5 SENTIERS
 * ========================================
 * 
 * À compléter avec fichiers GPX plus tard
 */
const sentiers = [
  {
    id: 1,
    nom: 'Hexatrek',
    couleur: 'bg-green-500',
    couleurText: 'text-green-600',
    badge: 'Tour des Pyrénées',
    description: 'Boucle autour des Pyrénées. L\'Escolan est un point de repos sur le tracé.',
    distance: '3034 km',
    denivele: '+13600 m / -13600 m',
    difficulte: '⭐⭐⭐⭐⭐ Très élevé',
    duree: '45-60 jours',
    saison: 'Juin à septembre',
    role: '🛑 Point de passage',
    gpxUrl: '/gpx/hexatrek.gpx', // À ajouter
    lien: 'https://www.hexatrek.com',
    icone: '🔄',
  },
  {
    id: 2,
    nom: 'GR10',
    couleur: 'bg-blue-500',
    couleurText: 'text-blue-600',
    badge: 'Traversée classique',
    description: 'Le sentier des Pyrénées par excellence. De l\'Atlantique à la Méditerranée.',
    distance: '868 km',
    denivele: 'Variable selon sections',
    difficulte: '⭐⭐⭐ Moyen-élevé',
    duree: '30-45 jours',
    saison: 'Juin à septembre',
    role: '🛑 Point de passage',
    gpxUrl: '/gpx/gr10.gpx',
    lien: 'https://www.gr-infos.com/gr10',
    icone: '🥾',
  },
  {
    id: 3,
    nom: 'Muntanya de la libertat',
    couleur: 'bg-purple-500',
    couleurText: 'text-purple-600',
    badge: '⭐ POINT DE DÉPART',
    description: 'Circuit de 4 jours partant de L\'Escolan (Bidous). Voie directe vers les sommets ariégeois.',
    distance: '62 km cumulés',
    denivele: '+4690 m / -4655 m',
    difficulte: '⭐⭐⭐⭐ Élevé',
    duree: '4 jours',
    saison: 'Juin à septembre',
    role: '🚀 DÉPART D\'ICI',
    gpxUrl: '/gpx/muntanya-libertat.gpx',
    lien: '#',
    icone: '🏔️',
    details: [
      'Jour 1: Bidous → Camping Bordes de Graus (17,3km, 7h)',
      'Jour 2: Graus → Refuge Certascan (12,5km, 6h20)',
      'Jour 3: Certascan → Presbytère Aulus (17km, 9h)',
      'Jour 4: Presbytère → L\'Escolan (16,6km, 5h30)',
    ],
  },
  {
    id: 4,
    nom: 'GRP (Grand Raid des Pyrénées)',
    couleur: 'bg-red-500',
    couleurText: 'text-red-600',
    badge: 'Multi-courses',
    description: 'Ensemble de courses de randonnée variées. Certaines passent par L\'Escolan.',
    distance: 'Variable',
    denivele: 'Variable selon les courses',
    difficulte: '⭐⭐⭐⭐ Élevé',
    duree: 'Week-ends à plusieurs jours',
    saison: 'Juin à septembre',
    role: '🎯 Points de passage',
    gpxUrl: '/gpx/grp.gpx',
    lien: 'https://www.grp.fr',
    icone: '🏃',
  },
  {
    id: 5,
    nom: 'HRP (Haute Randonnée Pyrénéenne)',
    couleur: 'bg-orange-500',
    couleurText: 'text-orange-600',
    badge: 'Pour les experts',
    description: 'Traversée alpine des Pyrénées sans refuges. Pour randonneurs expérimentés uniquement.',
    distance: '811 km',
    denivele: '+53000 m / -53000 m',
    difficulte: '⭐⭐⭐⭐⭐ Très difficile',
    duree: '35-55 jours',
    saison: 'Juillet à septembre',
    role: '🛑 Point de passage',
    gpxUrl: '/gpx/hrp.gpx',
    lien: 'https://www.gr-infos.com/hrp',
    icone: '⛰️',
  },
];

/**
 * ========================================
 * 1. HERO COURT
 * ========================================
 */
function HeroSection() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-600 to-green-600 text-white">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Carrefour de randonnée pyrénéenne
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 text-white/90 max-w-2xl mx-auto">
          5 grands sentiers passent par ou partent de L'Escolan
        </p>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 2. SECTION INTRO
 * ========================================
 */
function IntroSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-lg">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Une base idéale pour tous les randonneurs
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            L'Escolan est situé à un carrefour unique de randonnée. Que vous fassiez un circuit court, 
            une traversée classique ou une expédition alpine, vous trouverez votre sentier ici.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <strong>Point de départ, point de passage, ou base de repos ?</strong> 
            Explorez nos sentiers et planifiez votre prochaine aventure!
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 3. CARTE LEAFLET (structure)
 * ========================================
 * 
 * NOTE: Leaflet doit être installé:
 * npm install leaflet leaflet-gpx
 * 
 * Cette section charge la carte
 * Les GPX seront ajoutés plus tard dans public/gpx/
 */
function MapSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Localisation des sentiers
        </h2>
        
        {/* Placeholder pour la carte Leaflet */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <div id="map" className="w-full h-96 sm:h-[500px] bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm sm:text-base mb-4">
                🗺️ Carte interactive Leaflet
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                (Les tracés GPX seront affichés ici)
              </p>
            </div>
          </div>
        </div>
        
        {/* Légende des couleurs */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sentiers.map((sentier) => (
            <div key={sentier.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
              <div className={`w-4 h-4 rounded-full ${sentier.couleur}`}></div>
              <span className="text-sm font-medium text-gray-900">{sentier.nom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 4. FICHES SENTIERS DÉTAILLÉES
 * ========================================
 * 
 * 5 cards avec info complète sur chaque sentier
 */
function SentiersGrid() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
          Les 5 sentiers
        </h2>
        
        <div className="space-y-8">
          {sentiers.map((sentier) => (
            <div 
              key={sentier.id}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* En-tête avec couleur */}
              <div className={`${sentier.couleur} text-white p-6 sm:p-8`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-4xl mb-3">{sentier.icone}</div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                      {sentier.nom}
                    </h3>
                    <span className="inline-block bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
                      {sentier.badge}
                    </span>
                  </div>
                  <div className="text-5xl opacity-20">{sentier.icone}</div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6 sm:p-8">
                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  {sentier.description}
                </p>
                
                {/* Grille infos */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="flex gap-3">
                    <MapPin className={`flex-shrink-0 ${sentier.couleurText}`} size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Distance</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.distance}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <TrendingUp className={`flex-shrink-0 ${sentier.couleurText}`} size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Dénivelé</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.denivele}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock className={`flex-shrink-0 ${sentier.couleurText}`} size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Durée</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.duree}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Users className={`flex-shrink-0 ${sentier.couleurText}`} size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Difficulté</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.difficulte}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className={`flex-shrink-0 text-2xl`}>📅</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Saison</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.saison}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className={`flex-shrink-0 text-2xl`}>{sentier.role.split(' ')[0]}</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Rôle</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">{sentier.role.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Détails spécifiques (Muntanya) */}
                {sentier.details && (
                  <div className="bg-purple-50 rounded-lg p-6 mb-6 border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
                      Étapes détaillées:
                    </h4>
                    <div className="space-y-3">
                      {sentier.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Bouton lien externe */}
                {sentier.lien !== '#' && (
                  <a
                    href={sentier.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${sentier.couleur} text-white font-semibold py-2 sm:py-3 px-6 rounded-lg hover:opacity-90 transition text-sm sm:text-base`}
                  >
                    En savoir plus →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 5. CTA RÉSERVATION
 * ========================================
 */
function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Prêt à découvrir ces sentiers?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-white/90 max-w-xl mx-auto">
          L'Escolan vous accueille comme base de repos, point de départ ou simplement refuge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/hebergements"
            className="inline-block bg-white text-green-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
          >
            Voir nos formules
          </a>
          <a
            href="/contact"
            className="inline-block bg-white/20 text-white font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-white/30 transition text-sm sm:text-base border border-white"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * COMPOSANT PRINCIPAL
 * ========================================
 */
export default function RandoneesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <IntroSection />
      <MapSection />
      <SentiersGrid />
      <CTASection />
    </div>
  );
}

/**
 * ⭐ NOTES IMPORTANTES
 * 
 * 1. CARTE LEAFLET (à installer):
 *    npm install leaflet leaflet-gpx
 *    npm install @types/leaflet (pour TypeScript)
 * 
 * 2. AJOUTER LES GPX:
 *    - Mets les fichiers dans public/gpx/
 *    - Noms: hexatrek.gpx, gr10.gpx, etc.
 *    - Puis active le code Leaflet dans MapSection
 * 
 * 3. STRUCTURE PRÊTE POUR:
 *    - Ajouter des tracés en couleurs
 *    - Zoomer sur sentiers
 *    - Afficher L'Escolan au centre
 * 
 * 4. À COMPLÉTER:
 *    - Vrais liens externes pour sentiers
 *    - Images des sentiers
 *    - Témoignages de randonneurs
 */