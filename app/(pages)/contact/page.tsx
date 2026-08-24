/**
 * app/(pages)/contact/page.tsx
 * 
 * Page contact simple
 * Sans formulaire - juste les infos de contact (mail, tél, adresse)
 */

'use client';

import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

/**
 * ========================================
 * 1. HERO
 * ========================================
 */
function HeroSection() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 bg-gradient-to-b from-amber-600 to-amber-700 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Nous contacter
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl mx-auto">
          Une question? Une demande de réservation? Écrivez-nous!
        </p>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 2. SECTION CONTACT PRINCIPALE
 * ========================================
 * 
 * Infos de contact en cards cliquables
 */
function ContactMainSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille 2 colonnes sur desktop, 1 sur mobile */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          
          {/* TÉLÉPHONE */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Phone size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-4">
              Téléphone
            </h3>
            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
              Appelez-nous pour une question rapide ou une réservation
            </p>
            <a
              href="tel:+33561965872"
              className="block text-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition text-lg"
            >
              05 61 96 58 72
            </a>
            <p className="text-gray-600 text-center mt-4 text-xs sm:text-sm">
              Lun-Ven: 9h-19h | Sam: 10h-18h | Dim: Sur RDV
            </p>
          </div>
          
          {/* EMAIL */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Mail size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-4">
              Email
            </h3>
            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
              Écrivez-nous vos questions ou votre demande de réservation
            </p>
            <a
              href="mailto:lescolan@gmail.com"
              className="block text-center bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition text-base sm:text-lg break-all"
            >
              lescolan@gmail.com
            </a>
            <p className="text-gray-600 text-center mt-4 text-xs sm:text-sm">
              Réponse sous 24-48h
            </p>
          </div>
          
          {/* ADRESSE */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200 p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-4">
              Adresse
            </h3>
            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
              Visite sur rendez-vous. Route depuis Aulus-les-Bains
            </p>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                Le Escolan
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-1">
                Lieu-dit Bidous
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-1">
                09140 Ustou
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Ariège, France
              </p>
            </div>
          </div>
          
          {/* HORAIRES */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Clock size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-4">
              Horaires
            </h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Lundi - Vendredi</span>
                <span className="font-bold text-purple-700">9h - 19h</span>
              </div>
              <div className="flex justify-between items-center border-t border-purple-200 pt-3">
                <span className="text-gray-700">Samedi</span>
                <span className="font-bold text-purple-700">10h - 18h</span>
              </div>
              <div className="flex justify-between items-center border-t border-purple-200 pt-3">
                <span className="text-gray-700">Dimanche</span>
                <span className="font-bold text-purple-700">Sur RDV</span>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-4 text-center italic">
              (Ouvert sur rendez-vous en haute saison)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 3. SECTION RÉSEAUX SOCIAUX
 * ========================================
 * 
 * Liens vers pages Facebook, Instagram, etc
 */
function ReseauxSection() {
  const reseaux = [
    {
      nom: 'Facebook',
      icone: '👍',
      description: 'Suivez nos actualités et photos',
      pages: ['@lescolan', '@marieetalexis'],
    },
    {
      nom: 'Instagram',
      icone: '📸',
      description: 'Découvrez nos plus belles photos',
      pages: ['@gite_l_escolan'],
    },
    {
      nom: 'TripAdvisor',
      icone: '⭐',
      description: 'Consultez les avis de nos hôtes',
      pages: ['L\'Escolan, Ustou'],
    },
    {
      nom: 'Google',
      icone: '🔍',
      description: 'Localisez-nous et lisez les avis',
      pages: ['L\'Escolan, Bidous'],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Suivez-nous sur les réseaux
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {reseaux.map((reseau, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{reseau.icone}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {reseau.nom}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {reseau.description}
                  </p>
                  <div className="space-y-1">
                    {reseau.pages.map((page, i) => (
                      <p key={i} className="text-xs sm:text-sm text-gray-600 italic">
                        {page}
                      </p>
                    ))}
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

// Coordonnées du gîte (Bidous, 09140 Ustou, Ariège) — mêmes que sur /randonnees
const GITE_LAT = 42.7827177;
const GITE_LNG = 1.2695034;
const GITE_MAPS_LINK = 'https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA';

/**
 * ========================================
 * 4. SECTION CARTE
 * ========================================
 *
 * Carte Google Maps interactive (iframe, sans clé API)
 */
function MapSection() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${GITE_LAT},${GITE_LNG}(${encodeURIComponent("Gîte L'Escolan")})&z=15&output=embed`;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Localisation
        </h2>

        {/* Carte Google Maps interactive */}
        <div className="bg-gray-100 rounded-2xl border-2 border-gray-300 overflow-hidden h-96 sm:h-[500px]">
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du Gîte L'Escolan sur Google Maps"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={GITE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <MapPin size={14} />
            Ouvrir dans Google Maps (itinéraire)
          </a>
        </div>

        {/* Info pratiques accès */}
        <div className="mt-8 sm:mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">
            Comment nous rejoindre?
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            <p>
              <strong>Depuis Aulus-les-Bains:</strong> Direction Ustou, puis suivre fléchage L'Escolan (15 min)
            </p>
            <p>
              <strong>Depuis Foix:</strong> D117 direction Aulus-les-Bains (45 min)
            </p>
            <p>
              <strong>Depuis Toulouse:</strong> A61 jusqu'à Pamiers, puis D117 (1h30)
            </p>
            <p>
              <strong>Parking gratuit</strong> à disposition sur le terrain du gîte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * 5. SECTION FAQ RAPIDE
 * ========================================
 */
function FAQSection() {
  const faqs = [
    {
      q: 'Quels sont vos délais de réponse?',
      r: 'Nous répondons généralement sous 24-48h. En haute saison, peut être plus rapide.',
    },
    {
      q: 'Pouvez-vous faire des réservations directes?',
      r: 'Oui, contactez-nous par mail ou téléphone. Nous confirmez les dates et tarifs.',
    },
    {
      q: 'Acceptez-vous les chèques vacances?',
      r: 'Oui! Nous acceptons: Cartes bancaires, Espèces, Chèques, Chèques Vacances.',
    },
    {
      q: 'Peut-on visiter le gîte avant de réserver?',
      r: 'Bien sûr! Visite sur rendez-vous. Appelez-nous pour convenir d\'un créneau.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Questions fréquentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
            >
              <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between text-sm sm:text-base">
                {faq.q}
                <span className="text-2xl group-open:rotate-180 transition-transform">▶</span>
              </summary>
              <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
                {faq.r}
              </p>
            </details>
          ))}
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
    <section className="py-12 sm:py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Une dernière question?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-amber-100 max-w-xl mx-auto">
          N'hésitez pas à nous contacter. Nous sommes là pour vous aider!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:lescolan@gmail.com"
            className="inline-block bg-white text-amber-700 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
          >
            Envoyer un email
          </a>
          <a
            href="tel:+33561965872"
            className="inline-block bg-white/20 text-white font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-white/30 transition text-sm sm:text-base border border-white"
          >
            Nous appeler
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
export default function ContactPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactMainSection />
      <ReseauxSection />
      <MapSection />
      <FAQSection />
      <CTAFinalSection />
    </div>
  );
}

/**
 * ⭐ NOTES
 * 
 * 1. SANS FORMULAIRE:
 *    - Simple, direct, efficace
 *    - Utilisateurs contactent par mail/tél
 *    - Pas de complexité inutile
 * 
 * 2. INFOS COMPLÈTES:
 *    - Tous les contacts (mail, tél, adresse)
 *    - Horaires clairs
 *    - Réseaux sociaux
 *    - Carte Google Maps interactive (iframe embed, sans clé API)
 *
 * 3. À AJOUTER PLUS TARD:
 *    - Liens réseaux sociaux actifs
 *    - Webcam en direct (si disponible)
 * 
 * 4. MOBILE-FRIENDLY:
 *    - Liens téléphone cliquables
 *    - Liens email cliquables
 *    - Responsive cards
 */