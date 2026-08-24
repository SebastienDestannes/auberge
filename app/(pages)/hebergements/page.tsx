/**
 * app/(pages)/hebergements/page.tsx
 * 
 * Page hébergements complète
 * Deux sections:
 * 1. Demi-pension (par personne)
 * 2. Gestion libre (prix groupe)
 * 
 * Avec tarifs détaillés, options, et conditions
 */

'use client';

import { Check, X, Info } from 'lucide-react';

/**
 * ========================================
 * 1. SECTION HERO
 * ========================================
 */
function HeroSection() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 bg-gradient-to-b from-green-600 to-green-700 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Nos formules d'hébergement
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
          Deux façons de vivre L'Escolan selon vos envies
        </p>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 2. DEMI-PENSION (Par personne)
 * ========================================
 * 
 * Tarifs par personne, chambre ou dortoir
 * Période avril-octobre
 */
function DemiPensionSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            🛏️ Demi-pension
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Séjour en petit groupe avec repas inclus. Hébergement en chambre privée ou dortoir.
          </p>
        </div>
        
        {/* Tableau tarifs */}
        <div className="overflow-x-auto mb-8 sm:mb-12">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-green-50 border-b-2 border-green-200">
                <th className="text-left p-3 sm:p-4 font-bold text-gray-900">Type de lit</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Adulte</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Enfant 8-15 ans</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Enfant 3-7 ans</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Moins de 3 ans</th>
              </tr>
            </thead>
            <tbody>
              {/* Chambre */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">Chambre privée</td>
                <td className="text-center p-3 sm:p-4 text-green-600 font-bold">55€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-green-600 font-bold">40€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-green-600 font-bold">25€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-green-600 font-bold">Gratuit</td>
              </tr>
              
              {/* Dortoir */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">Dortoir</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">45€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">35€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">20€/nuit</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">Gratuit</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Inclusions */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-4">✅ Inclus dans la demi-pension</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Hébergement (chambre ou dortoir)</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Petit-déjeuner maison</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Dîner maison (produits frais & locaux)</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Accès complet au gîte</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Wi-Fi gratuit</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-4">📋 Options & services</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>Machine à laver: <span className="font-bold">5€</span></li>
              <li>Pique-nique repas: <span className="font-bold">9€</span></li>
              <li>Animal de compagnie: <span className="font-bold">5€/séjour</span></li>
              <li>Draps: <span className="font-bold">Inclus</span></li>
              <li>Serviettes: <span className="font-bold">À apporter</span></li>
            </ul>
          </div>
        </div>
        
        {/* Conditions spéciales */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-3">💰 Réductions & conditions</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>-10% à partir de 5 nuits</strong> (cumul possible)</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Taxe de séjour:</strong> 0,85€ par adulte par jour</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Période:</strong> Avril à fin octobre</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Hors saison:</strong> Novembre à mars sur réservation (min. 4 personnes)</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Animaux:</strong> 1 seul animal autorisé par chambre</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 3. GESTION LIBRE (Location groupe)
 * ========================================
 * 
 * Prix pour location complète du gîte
 * Par durée séjour (hors juillet-août)
 */
function GestionLibreSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            👥 Gestion libre
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Location complète du gîte pour votre groupe. Idéal pour les familles, réunions et événements.
          </p>
        </div>
        
        {/* Tableau tarifs */}
        <div className="overflow-x-auto mb-8 sm:mb-12 bg-white rounded-lg border border-gray-200">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-50 border-b-2 border-blue-200">
                <th className="text-left p-3 sm:p-4 font-bold text-gray-900">Durée séjour</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Prix TTC</th>
                <th className="text-center p-3 sm:p-4 font-bold text-gray-900">Prix/jour</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">2 jours</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">650€</td>
                <td className="text-center p-3 sm:p-4 text-gray-600">325€/j</td>
              </tr>
              
              <tr className="border-b border-gray-200 hover:bg-blue-50 bg-green-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">3 jours</td>
                <td className="text-center p-3 sm:p-4 text-green-600 font-bold">1025€</td>
                <td className="text-center p-3 sm:p-4 text-gray-600">~341€/j</td>
              </tr>
              
              <tr className="border-b border-gray-200 hover:bg-blue-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">4 jours</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">1350€</td>
                <td className="text-center p-3 sm:p-4 text-gray-600">~337€/j</td>
              </tr>
              
              <tr className="hover:bg-blue-50">
                <td className="p-3 sm:p-4 font-semibold text-gray-900">5 jours</td>
                <td className="text-center p-3 sm:p-4 text-blue-600 font-bold">1675€</td>
                <td className="text-center p-3 sm:p-4 text-gray-600">~335€/j</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-600 mb-8 sm:mb-12 italic">
          💡 <strong>Tarifs hors juillet-août.</strong> Périodes estivales: nous contacter pour devis
        </p>
        
        {/* Ce qui est inclus */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-4">✅ Inclus dans la location</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Maison entière (20-30 personnes)</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Cuisine équipée</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Salle commune spacieuse</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Terrain privé & parking</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Wi-Fi gratuit</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-4">📋 Options supplémentaires</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li><strong>Draps location:</strong> 5€/personne</li>
              <li><strong>Serviettes location:</strong> 2€/personne</li>
              <li><strong>Bois cheminée:</strong> 1ère flambée offerte + 15€/brouette</li>
              <li><strong>Ménage fin séjour:</strong> 150€ (optionnel)</li>
              <li><strong>Fût bière locale 20L:</strong> 150€ (+ 40€ gaz si plusieurs)</li>
            </ul>
          </div>
        </div>
        
        {/* Conditions */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-3">📝 Conditions & services</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Minimum 3 jours</strong> les week-ends fériés</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Taxe de séjour:</strong> 0,85€/adulte/jour (à ajouter)</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Repas sur devis:</strong> Nous organisons repas collectifs</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Animaux:</strong> 1 maximum, tenu en laisse (7€)</span>
            </li>
            <li className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Paiement:</strong> CB, Espèces, Chèques, Chèques Vacances</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 4. COMPARAISON FORMULES
 * ========================================
 */
function ComparaisonSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Quelle formule vous convient?
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Demi-pension */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border-2 border-green-200">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">🛏️ Demi-pension</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Idéal pour randonneurs solo/couples</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Petit groupe (ambiance conviviale)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Pas de cuisine à gérer</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Repas locaux inclus</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Pas d'intimité complète</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Horaires repas fixes</span>
              </div>
            </div>
            <p className="mt-6 text-green-700 font-bold">À partir de 45€/nuit (dortoir)</p>
          </div>
          
          {/* Gestion libre */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-200">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">👥 Gestion libre</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Maison entière privatisée</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Parfait pour famille nombreuse/groupe</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Liberté complète (horaires, menus)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Événements & réunions possibles</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Cuisine à gérer</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Ménage optionnel (150€)</span>
              </div>
            </div>
            <p className="mt-6 text-blue-700 font-bold">À partir de 325€/jour</p>
          </div>
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
          Prêt à réserver?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-white/90 max-w-xl mx-auto">
          Contactez-nous pour connaître les disponibilités et finaliser votre réservation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
          >
            Nous contacter
          </a>
          <a
            href="/randonnees"
            className="inline-block bg-white/20 text-white font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-white/30 transition text-sm sm:text-base border border-white"
          >
            Découvrir les sentiers
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
export default function HebergementPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DemiPensionSection />
      <GestionLibreSection />
      <ComparaisonSection />
      <CTASection />
    </div>
  );
}

/**
 * ⭐ NOTES
 * 
 * 1. STRUCTURE:
 *    - Page simple et claire (tarifs au-dessus)
 *    - Comparaison pour aider au choix
 *    - Tous les tarifs visibles
 * 
 * 2. TARIFS OFFICIELS (du site actuel):
 *    - Demi-pension: 45-55€/nuit
 *    - Gestion libre: 650-1675€ (2-5 jours)
 * 
 * 3. À AJOUTER PLUS TARD:
 *    - Photos chambres/dortoirs
 *    - Photos cuisine
 *    - Formulaire de réservation (ou lien booking)
 * 
 * 4. RESPONSIVE:
 *    - Tables adaptées au mobile
 *    - Texte redimensionné
 *    - Buttons cliquables sur mobile
 */