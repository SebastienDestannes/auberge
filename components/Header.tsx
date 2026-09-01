'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import TripAdvisorIcon from '@/components/icons/TripAdvisorIcon'; // ← Import!

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <header
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow duration-300 ${isScrolled ? 'shadow-md dark:shadow-dark-md' : 'shadow-sm dark:shadow-dark-sm'
        }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="logo group">
            <div className="logo-icon">🌿</div>
            <div className="logo-text">
              <h1 className="logo-title">L'Escolan</h1>
              <p className="logo-subtitle">Gîte & Séjour nature</p>
            </div>
          </Link>

          {/* NAVIGATION DESKTOP */}
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

          {/* RÉSEAUX SOCIAUX DESKTOP */}
          <div className="hidden lg:flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/marieetalexis/"
              target="_blank"
              rel="noopener noreferrer"
              title="Suivez-nous sur Facebook"
              className="social-icon"
            >
              <FaFacebook size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gite_l_escolan/"
              target="_blank"
              rel="noopener noreferrer"
              title="Suivez-nous sur Instagram"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </a>

            {/* TripAdvisor - NOTRE ICONE SVG */}
            <a
              href="https://www.tripadvisor.fr/Hotel_Review-g1080534-d2521552-Reviews-Gite_l_Escolan-Ustou_Ariege_Occitanie.html"
              target="_blank"
              rel="noopener noreferrer"
              title="Lisez nos avis TripAdvisor"
              className="social-icon"
            >
              <TripAdvisorIcon size={20} />
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA"
              target="_blank"
              rel="noopener noreferrer"
              title="Localisez-nous sur Google Maps"
              className="social-icon"
            >
              <FaMapMarkerAlt size={20} />
            </a>
          </div>

          {/* BOUTON RÉSERVATION DESKTOP */}
          <Link href="/hebergements" className="hidden lg:inline-flex btn-header ml-4">
            Réserver
          </Link>

          {/* MENU BURGER MOBILE */}
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

      {/* MENU MOBILE */}
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

            {/* Réseaux sociaux mobile */}
            <div className="divider pt-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
                Nous suivre
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.facebook.com/marieetalexis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Suivez-nous sur Facebook"
                  className="social-icon-mobile"
                >
                  <FaFacebook size={20} />
                  <span className="hidden sm:inline">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/gite_l_escolan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Suivez-nous sur Instagram"
                  className="social-icon-mobile"
                >
                  <FaInstagram size={20} />
                  <span className="hidden sm:inline">Instagram</span>
                </a>

                {/* TripAdvisor SVG mobile */}
                <a
                  href="https://www.tripadvisor.fr/Hotel_Review-g1080534-d2521552-Reviews-Gite_l_Escolan-Ustou_Ariege_Occitanie.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Lisez nos avis TripAdvisor"
                  className="social-icon-mobile"
                >
                  <TripAdvisorIcon size={20} />
                  <span className="hidden sm:inline">TripAdvisor</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Localisez-nous sur Google Maps"
                  className="social-icon-mobile"
                >
                  <FaMapMarkerAlt size={20} />
                  <span className="hidden sm:inline">Google Maps</span>
                </a>
              </div>
            </div >
          </div >
        </div >
      )
      }
    </header >
  );
}