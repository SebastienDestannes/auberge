/**
 * app/(pages)/activites/page.tsx
 * 
 * Page activités réduite
 * Focus: résumé des activités à proximité
 * Détails complets sont sur /randonnees
 */

'use client';

import { MapPin, Clock, Users } from 'lucide-react';

/**
 * ========================================
 * DONNÉES DES ACTIVITÉS
 * ========================================
 */
const activites = [
  {
    id: 1,
    titre: 'Randonnées',
    icone: '🥾',
    description: 'GR10, circuits balisés, sentiers de tous niveaux dans la vallée',
    details: 'De 1h à plusieurs jours. Accès direct depuis le gîte.',
    duree: '1h à 8h',
    niveau: 'Tous niveaux',
  },
  {
    id: 2,
    titre: 'VTT & cyclisme',
    icone: '🚴',
    description: 'Pistes VTT, routes de montagne, descentes pour les passionnés',
    details: 'Circuits adaptés du facile à expert. Circuits balisés.',
    duree: '2h à 6h',
    niveau: 'Intermédiaire à expert',
  },
  {
    id: 3,
    titre: 'Canyoning',
    icone: '💧',
    description: 'Descente en rivière, sauts, toboggans naturels',
    details: 'Activité saisonnière (meilleures périodes: été)',
    duree: '2h à 4h',
    niveau: 'Tous niveaux (encadré)',
  },
  {
    id: 4,
    titre: 'Parapente',
    icone: '🪂',
    description: 'Vols au-dessus de la vallée d\'Ustou avec moniteurs locaux',
    details: 'Vols en biplace pour découverte ou perfectionnement',
    duree: '1h à 3h',
    niveau: 'Sportif',
  },
  {
    id: 5,
    titre: 'Table d\'hôtes',
    icone: '🍷',
    description: 'Cuisine locale ariégeoise, produits du terroir, repas collectifs',
    details: 'Repas maison inclus (demi-pension) ou sur devis (gestion libre)',
    duree: 'Selon formule',
    niveau: 'Tous',
  },
  {
    id: 6,
    titre: 'Piscine & détente',
    icone: '☀️',
    description: 'Piscine privée du gîte, terrasse avec vue montagne',
    details: 'Accès gratuit pour nos hôtes. Espace de repos privilégié.',
    duree: 'Libre',
    niveau: 'Détente',
  },
];

/**
 * ========================================
 * 1. HERO
 * ========================================
 */
function HeroSection() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 bg-gradient-to-b from-green-600 to-emerald-700 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Activités & loisirs
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
          Des activités pour tous les goûts, directement accessibles depuis L'Escolan
        </p>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 2. INTRO RAPIDE
 * ========================================
 */
function IntroSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-50 border-l-4 border-green-600 p-6 sm:p-8 rounded-r-lg">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Plus qu'une base de rando
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            L'Escolan n'est pas seulement un carrefour de randonnée. C'est aussi un point de 
            départ pour découvrir la nature ariégeoise sous tous ses formes.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Que vous cherchiez l'adrénaline ou la détente, vous trouverez votre bonheur dans 
            la vallée d'Ustou!
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 3. GRILLE ACTIVITÉS
 * ========================================
 * 
 * 6 cartes simples, pas de galeries énormes
 */
function ActivitesGrid() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
          Nos activités
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activites.map((activite) => (
            <div 
              key={activite.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              {/* En-tête avec icone */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <div className="text-5xl mb-3">{activite.icone}</div>
                <h3 className="font-serif text-xl font-bold">
                  {activite.titre}
                </h3>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                  {activite.description}
                </p>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4 italic border-l-2 border-gray-300 pl-3">
                  {activite.details}
                </p>
                
                {/* Infos rapides */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Clock size={16} className="text-green-600" />
                    <span><strong>Durée:</strong> {activite.duree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Users size={16} className="text-green-600" />
                    <span><strong>Niveau:</strong> {activite.niveau}</span>
                  </div>
                </div>
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
 * 4. SECTION RANDOS (CTA)
 * ========================================
 * 
 * Lien vers page /randonnees pour détails complets
 */
function RandosCTASection() {
  return (
    <section className="py-12 sm:py-16 bg-blue-50 border-t-4 border-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          🥾 Randonnées: notre spécialité
        </h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          L'Escolan est un carrefour unique pour la randonnée pyrénéenne. 
          <strong> 4 grands sentiers</strong> passent par ou partent d'ici: 
          GR10, Hexatrek, HRP et Muntanya de la libertat.
        </p>
        <p className="text-gray-700 mb-8 text-sm sm:text-base leading-relaxed">
          Découvrez tous les détails sur nos sentiers, consultez les tracés interactifs 
          et planifiez votre prochaine aventure!
        </p>
        <a
          href="/randonnees"
          className="inline-block bg-blue-600 text-white font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Explorer les 5 sentiers pyrénéens →
        </a>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 5. INFORMATIONS PRATIQUES
 * ========================================
 */
function InfoPratiquesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Informations pratiques
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Localisation */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-green-600" />
              Localisation
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              Vallée d'Ustou, Ariège, Pyrénées
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              Accès facile via Aulus-les-Bains (15 min) ou depuis Foix (45 min)
            </p>
          </div>
          
          {/* Saisons */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">📅 Meilleures périodes</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2">
              <li><strong>Été (juin-sept):</strong> Tout est ouvert</li>
              <li><strong>Printemps/Automne:</strong> Randos parfaites</li>
              <li><strong>Hiver:</strong> Calme, nature sauvage</li>
            </ul>
          </div>
          
          {/* Équipement */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">🎒 À prévoir</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2">
              <li>Vêtements adaptés à l'altitude</li>
              <li>Chaussures de rando robustes</li>
              <li>Eau et snacks</li>
              <li>Protection solaire</li>
            </ul>
          </div>
          
          {/* Contacts */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">📞 Nous contacter</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2">
              <li>Tél: <strong>05 61 96 58 72</strong></li>
              <li>Email: <strong>lescolan@gmail.com</strong></li>
              <li>Visite sur RDV</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 6. CTA FINAL
 * ========================================
 */
function CTAFinalSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Prêt à découvrir?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-green-100 max-w-xl mx-auto">
          Réservez votre séjour dès maintenant et profitez de toutes les activités!
        </p>
        <a
          href="/hebergements"
          className="inline-block bg-white text-green-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
        >
          Consulter nos tarifs
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
export default function ActivitesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <IntroSection />
      <ActivitesGrid />
      <RandosCTASection />
      <InfoPratiquesSection />
      <CTAFinalSection />
    </div>
  );
}

/**
 * ⭐ NOTES
 * 
 * 1. DESIGN COURT:
 *    - Page rapide à scroller
 *    - Info essentielles uniquement
 *    - CTA clairs vers autres pages
 * 
 * 2. ORGANISATION:
 *    - Randos en avant (c'est la spécialité)
 *    - Autres activités en grille simple
 *    - Infos pratiques au bas
 * 
 * 3. À AJOUTER PLUS TARD:
 *    - Photos des activités
 *    - Liens vers prestataires locaux
 *    - Tarifs des activités guidées
 * 
 * 4. MOBILE-FRIENDLY:
 *    - Grille 1 colonne mobile, 3 desktop
 *    - Texte adapté
 *    - Boutons cliquables
 */