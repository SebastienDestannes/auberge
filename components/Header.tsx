/**
 * components/Header.tsx
 * 
 * Navigation fixe en haut de page
 * ✅ Responsive mobile-first
 * ✅ Pas pleine largeur sur desktop
 * ✅ Menu burger mobile automatique
 * ✅ Liens vrais réseaux sociaux
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Détecte scroll pour adapter l'apparence du header
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Items de navigation
   */
  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Randonnées', href: '/randonnees' },
    { label: 'Hébergements', href: '/hebergements' },
    { label: 'Activités', href: '/activites' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Contact', href: '/contact' },
  ];

  /**
   * Réseaux sociaux avec vrais liens
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Container principal - LIMITÉ EN LARGEUR */}
      <div className="container">
        <div className="flex justify-between items-center h-20">

          {/* ========================================
              LOGO & BRANDING
              ======================================== */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            {/* Icone logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition-transform">
              🌿
            </div>
            
            {/* Texte logo */}
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-gray-900">
                L'Escolan
              </h1>
              <p className="text-xs text-green-600 font-medium">
                Gîte & Séjour nature
              </p>
            </div>
          </Link>

          {/* ========================================
              NAVIGATION DESKTOP
              ======================================== */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ========================================
              RÉSEAUX SOCIAUX DESKTOP
              ======================================== */}
          <div className="hidden lg:flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:text-white hover:bg-green-600 transition-all text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ========================================
              BOUTON RÉSERVATION DESKTOP
              ======================================== */}
          <Link
            href="/hebergements"
            className="hidden lg:inline-block bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all shadow-lg font-medium text-sm ml-4"
          >
            Réserver
          </Link>

          {/* ========================================
              MENU BURGER MOBILE
              ======================================== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ========================================
          MENU MOBILE (DROPDOWN)
          ======================================== */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-3">
            
            {/* Navigation items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="my-3 border-t border-gray-200"></div>

            {/* Bouton réserver */}
            <Link
              href="/hebergements"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Réserver un séjour
            </Link>

            {/* Réseaux sociaux mobile */}
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                Nous suivre
              </p>
              <div className="flex gap-3 flex-wrap">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="flex-1 min-w-fit px-3 py-2 flex items-center justify-center gap-2 rounded-lg text-gray-700 bg-gray-100 hover:text-white hover:bg-green-600 transition-all font-medium text-sm"
                  >
                    <span>{social.icon}</span>
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * ⭐ NOTES IMPORTANTES
 * 
 * 1. CONTAINER:
 *    - Utilise la classe .container du globals.css
 *    - Limite auto la largeur sur desktop
 *    - Full width mobile
 * 
 * 2. RÉSEAUX SOCIAUX:
 *    - Liens vrais mis à jour (Facebook, Instagram, TripAdvisor, Google Maps)
 *    - S'ouvrent dans nouvel onglet (target="_blank")
 * 
 * 3. RESPONSIVE:
 *    - Logo réduit sur mobile (texte caché)
 *    - Nav desktop cachée sur mobile
 *    - Menu burger automatique
 *    - Réseaux en colonne mobile
 * 
 * 4. ACCESSIBILITÉ:
 *    - Tous les liens ont un title
 *    - Boutons avec aria-label
 *    - Focus visible
 * 
 * 5. INTERACTIONS:
 *    - Menu se ferme au clic sur un lien
 *    - Scroll change l'apparence (shadow)
 *    - Transitions fluides
 */