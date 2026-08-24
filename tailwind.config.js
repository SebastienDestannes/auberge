/**
 * tailwind.config.js
 * 
 * Ce fichier configure Tailwind CSS pour le projet
 * 
 * Tailwind = framework CSS qui fournit des classes toutes faites
 * Exemple: bg-white = background: white
 *          text-gray-900 = color: #111827
 *          rounded-lg = border-radius: 0.5rem
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Fichiers à analyser pour les classes utilisées
  content: [
    './app/**/*.{js,ts,jsx,tsx}',           // Tous les fichiers dans /app
    './components/**/*.{js,ts,jsx,tsx}',    // Tous les fichiers dans /components
    './lib/**/*.{js,ts,jsx,tsx}',          // Tous les fichiers dans /lib
  ],

  theme: {
    // Étendre les thème par défaut de Tailwind
    extend: {
      /**
       * COULEURS PERSONNALISÉES
       * 
       * On définit ici les couleurs du gîte
       * Cela permet de les utiliser partout avec:
       * - bg-primary = fond vert
       * - text-primary = texte vert
       * - hover:bg-primary-dark = fond vert foncé au survol
       */
      colors: {
        // Vert naturel (montagne) = couleur primaire
        primary: {
          DEFAULT: '#1a7e5c',      // Vert principal
          dark: '#0f5439',         // Vert foncé (survol)
          light: '#2a9f7a',        // Vert clair
          50: '#f0f8f4',           // Très pâle
        },

        // Marron naturel (pierre, bois) = couleur secondaire
        secondary: {
          DEFAULT: '#8b7355',
          dark: '#6b5444',
          light: '#a88f6d',
        },

        // Doré (accent, lumière)
        accent: {
          DEFAULT: '#d4a574',
          dark: '#b88a54',
          light: '#ddb892',
        },

        // Beige clair (fond)
        neutral: '#f5f5f0',

        // Grises (texte, borders)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },

      /**
       * TYPOGRAPHIE
       * 
       * Définit les polices du site
       */
      fontFamily: {
        // Sans-serif = texte normal (navigation, paragraphes)
        sans: [
          '"Inter"',
          '"Segoe UI"',
          'sans-serif',
        ],

        // Serif = titres élégants (accueil, h1, h2)
        serif: [
          '"Playfair Display"',
          'serif',
        ],

        // Monospace = code
        mono: [
          '"Fira Code"',
          'monospace',
        ],
      },

      /**
       * TAILLES DE POLICE
       * 
       * Permet d'utiliser text-xs, text-sm, text-base, text-lg, etc.
       */
      fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        base: '1rem',       // 16px
        lg: '1.125rem',     // 18px
        xl: '1.25rem',      // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
      },

      /**
       * ESPACEMENTS (padding, margin, gap)
       * 
       * p-4 = padding: 1rem (16px)
       * m-6 = margin: 1.5rem (24px)
       * gap-8 = gap: 2rem (32px)
       */
      spacing: {
        // Valeurs ajoutées aux espacements par défaut
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
      },

      /**
       * RAYONS DE BORDURE (border-radius)
       * 
       * rounded-lg = border-radius: 0.5rem
       * rounded-xl = border-radius: 0.75rem
       */
      borderRadius: {
        sm: '0.25rem',      // 4px
        DEFAULT: '0.375rem', // 6px
        md: '0.375rem',     // 6px
        lg: '0.5rem',       // 8px
        xl: '0.75rem',      // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
      },

      /**
       * OMBRES (shadow)
       * 
       * shadow-md = ombre moyenne
       * shadow-lg = grosse ombre
       */
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },

      /**
       * ANIMATIONS
       * 
       * Permet des animations fluides (futur)
       */
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-out',
      },

      /**
       * KEYFRAMES
       * 
       * Définit les animations personnalisées
       */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },

  /**
   * PLUGINS
   * 
   * Extensions Tailwind
   */
  plugins: [],

  /**
   * MODE SOMBRE (optionnel)
   * 
   * Si tu veux un mode sombre plus tard
   */
  darkMode: 'class', // ou 'media'
};

/**
 * ⭐ COMMENT UTILISER
 * 
 * Classes Tailwind courantes:
 * 
 * === COULEURS ===
 * bg-primary = fond vert
 * text-primary = texte vert
 * border-primary = bordure verte
 * hover:bg-primary-dark = fond vert foncé au survol
 * 
 * === ESPACEMENTS ===
 * p-4 = padding 16px de tous les côtés
 * m-6 = margin 24px de tous les côtés
 * py-8 = padding vertical (haut/bas) 32px
 * px-6 = padding horizontal (gauche/droite) 24px
 * gap-4 = espace entre enfants 16px
 * 
 * === DISPOSITION ===
 * flex = affichage flexible (côte à côte)
 * grid = grille
 * hidden = invisible
 * md:flex = flex sur medium écrans+
 * 
 * === TEXTE ===
 * text-lg = police 18px
 * font-semibold = gras moyen
 * text-center = centré
 * 
 * === RAYONS ===
 * rounded-lg = coins arrondis
 * 
 * === OMBRES ===
 * shadow-md = ombre moyenne
 * 
 * Tous ces éléments s'écrivent directement dans className=""
 * Exemple: className="bg-primary text-white px-6 py-3 rounded-lg"
 */
