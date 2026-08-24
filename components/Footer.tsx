/**
 * components/Footer.tsx
 * 
 * Pied de page du site L'Escolan
 * ✅ Responsive mobile-first
 * ✅ Pas pleine largeur desktop
 * ✅ Liens réseaux sociaux VRAIS
 * ✅ Contact complet + horaires
 */

'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  /**
   * Infos réseaux sociaux
   */
  const socials = [
    { 
      icon: '👍', 
      label: 'Facebook',
      url: 'https://www.facebook.com/marieetalexis/',
      title: 'Suivez-nous sur Facebook'
    },
    { 
      icon: '📸', 
      label: 'Instagram',
      url: 'https://www.instagram.com/gite_l_escolan/',
      title: 'Suivez-nous sur Instagram'
    },
    { 
      icon: '⭐', 
      label: 'TripAdvisor',
      url: 'https://www.tripadvisor.fr/Hotel_Review-g1080534-d2521552-Reviews-Gite_l_Escolan-Ustou_Ariege_Occitanie.html',
      title: 'Lisez nos avis TripAdvisor'
    },
    { 
      icon: '🗺️', 
      label: 'Google Maps',
      url: 'https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA',
      title: 'Localisez-nous sur Google Maps'
    },
  ];

  /**
   * Navigation footer
   */
  const footerLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Randonnées', href: '/randonnees' },
    { label: 'Hébergements', href: '/hebergements' },
    { label: 'Activités', href: '/activites' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* ========================================
          BARRE CTA SUPÉRIEURE
          ======================================== */}
      <div className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="container">
          <div className="py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
                Prêt pour votre prochaine aventure?
              </h3>
              <p className="text-green-100 text-sm sm:text-base">
                Réservez votre séjour dès maintenant
              </p>
            </div>
            <Link
              href="/hebergements"
              className="bg-white text-green-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg whitespace-nowrap"
            >
              Réserver →
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================
          CONTENU PRINCIPAL FOOTER
          ======================================== */}
      <div className="container py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* ========================================
              1. À PROPOS
              ======================================== */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl">🌿</span>
              <h3 className="font-serif text-xl font-bold">L'Escolan</h3>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Un refuge authentique au cœur de la vallée d'Ustou. L'ancienne école du hameau 
              a été restaurée avec passion pour vous offrir un séjour nature inoubliable.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="pt-4 border-t border-gray-800">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                Nous suivre
              </p>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-green-600 transition text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================
              2. NAVIGATION
              ======================================== */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================
              3. CONTACT
              ======================================== */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              
              {/* Adresse */}
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <div className="text-gray-400">
                  <p>Le Escolan</p>
                  <p>Lieu-dit Bidous</p>
                  <p>09140 Ustou, Ariège</p>
                  <p>France</p>
                </div>
              </li>

              {/* Téléphone */}
              <li className="flex items-center gap-3">
                <Phone className="text-green-500 flex-shrink-0" size={18} />
                <a
                  href="tel:+33561965872"
                  className="text-gray-400 hover:text-white transition"
                >
                  05 61 96 58 72
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="text-green-500 flex-shrink-0" size={18} />
                <a
                  href="mailto:lescolan@gmail.com"
                  className="text-gray-400 hover:text-white transition break-all"
                >
                  lescolan@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* ========================================
              4. HORAIRES
              ======================================== */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horaires</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Clock className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-medium text-white">Lun-Ven</p>
                  <p>9h - 19h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-medium text-white">Samedi</p>
                  <p>10h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-medium text-white">Dimanche</p>
                  <p>Sur réservation</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================
            BARRE INFÉRIEURE - LEGALS
            ======================================== */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} L'Escolan. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-xs sm:text-sm">
              <a 
                href="#" 
                className="text-gray-500 hover:text-white transition"
              >
                Mentions légales
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-white transition"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-white transition"
              >
                Conditions générales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          CRÉDITS
          ======================================== */}
      <div className="bg-gray-950 py-4 text-center text-gray-600 text-xs">
        <p>
          Conçu avec ❤️ pour L'Escolan | 
          <span className="ml-1">
            Hébergé sur Vercel
          </span>
        </p>
      </div>
    </footer>
  );
}

/**
 * ⭐ NOTES IMPORTANTES
 * 
 * 1. CONTAINER:
 *    - Limite largeur desktop (1200px max)
 *    - Full width mobile
 * 
 * 2. RÉSEAUX SOCIAUX:
 *    - Liens vrais à jour (Facebook, Instagram, TripAdvisor, Google Maps)
 *    - S'ouvrent dans nouvel onglet
 * 
 * 3. CONTACT:
 *    - Tél cliquable (tel:)
 *    - Email cliquable (mailto:)
 *    - Horaires affichées
 * 
 * 4. RESPONSIVE:
 *    - Grid 2 colonnes mobile
 *    - Grid 4 colonnes desktop
 *    - Bouton "Réserver" responsive
 * 
 * 5. À COMPLÉTER:
 *    - Liens légaux (mentions-legales, politique-confidentialite, CGV)
 *    - Éventuellement newsletter
 *    - Intégration Google Maps (optionnel)
 */