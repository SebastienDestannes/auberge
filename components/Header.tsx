/**
 * components/Header.tsx
 *
 * Navigation fixe en haut de page.
 * Les classes visuelles viennent de app/styles/components.css
 * (voir .logo, .nav-link, .btn-header, etc.) — le JSX ne contient
 * plus de longues chaînes Tailwind.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Adapte l'ombre du header une fois qu'on a scrollé
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Randonnées', href: '/randonnees' },
    { label: 'Hébergements', href: '/hebergements' },
    { label: 'Activités', href: '/activites' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const socials = [
    {
      icon: '👍',
      label: 'Facebook',
      url: 'https://www.facebook.com/marieetalexis/',
      title: 'Suivez-nous sur Facebook',
    },
    {
      icon: '📸',
      label: 'Instagram',
      url: 'https://www.instagram.com/gite_l_escolan/',
      title: 'Suivez-nous sur Instagram',
    },
    {
      icon: '⭐',
      label: 'TripAdvisor',
      url: 'https://www.tripadvisor.fr/Hotel_Review-g1080534-d2521552-Reviews-Gite_l_Escolan-Ustou_Ariege_Occitanie.html',
      title: 'Lisez nos avis TripAdvisor',
    },
    {
      icon: '🗺️',
      label: 'Google Maps',
      url: 'https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA',
      title: 'Localisez-nous sur Google Maps',
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md dark:shadow-dark-md' : 'shadow-sm dark:shadow-dark-sm'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="logo group">
            <div className="logo-icon">🌿</div>
            <div className="logo-text">
              <h1 className="logo-title">L'Escolan</h1>
              <p className="logo-subtitle">Gîte & Séjour nature</p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Réseaux sociaux desktop */}
          <div className="hidden lg:flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Bouton réservation desktop */}
          <Link href="/hebergements" className="hidden lg:inline-flex btn-header ml-4">
            Réserver
          </Link>

          {/* Menu burger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-burger"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 divider">
          <div className="container py-4 space-y-3">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link-mobile ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="divider my-3" />

            <Link
              href="/hebergements"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Réserver un séjour
            </Link>

            <div className="divider pt-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
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
                    className="social-icon-mobile"
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
