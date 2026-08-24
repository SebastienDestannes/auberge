/**
 * tailwind.config.js - NOUVELLE PALETTE DE COULEURS
 * 
 * Couleurs inspirées de: https://www.colorz.live/213016-2ed5c0-e3efde-126700-5e722c
 * 
 * 🎨 Palette:
 * - #213016 Vert très foncé (montagne profonde)
 * - #2ed5c0 Turquoise/Cyan (accent moderne, eau)
 * - #e3efde Beige clair (fond naturel)
 * - #126700 Vert forestier (principal)
 * - #5e722c Olive/Kaki (secondaire, terre)
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      /**
       * ========================================
       * COULEURS PERSONNALISÉES
       * ========================================
       * 
       * Palette naturelle + moderne
       * Light mode + Dark mode variants
       */
      colors: {
        
        /**
         * PRIMARY - Vert forestier principal
         * #126700 (vert profond)
         * Usage: Boutons, links, accents
         */
        primary: {
          50: '#f0f7f3',
          100: '#d9f0e8',
          200: '#b3e1d4',
          300: '#7bc9b8',
          400: '#52b39e',
          500: '#2e9e86',
          600: '#1e8b72',
          DEFAULT: '#126700',      // Vert forestier principal
          700: '#0f5a3d',
          800: '#0a3d27',
          900: '#052616',
          
          // Dark mode variants
          'dark-50': '#052616',
          'dark-100': '#0a3d27',
          'dark-200': '#0f5a3d',
          'dark-light': '#52b39e',
        },

        /**
         * SECONDARY - Olive/Kaki
         * #5e722c (terre, nature)
         * Usage: Texte secondaire, backgrounds
         */
        secondary: {
          50: '#f9faf4',
          100: '#f1f4e6',
          200: '#e3e9ce',
          300: '#c9d499',
          DEFAULT: '#5e722c',      // Olive principal
          600: '#4a5a23',
          700: '#3a461a',
          800: '#2a3412',
          900: '#1a220a',
          
          'dark-light': '#c9d499',
        },

        /**
         * ACCENT - Turquoise/Cyan moderne
         * #2ed5c0 (eau, fraîcheur, moderne)
         * Usage: Highlights, CTAs, special elements
         */
        accent: {
          50: '#f0fdfb',
          100: '#ccfaf4',
          200: '#99f5eb',
          300: '#66f0e0',
          400: '#33ebd5',
          DEFAULT: '#2ed5c0',      // Turquoise principal
          600: '#1ba88f',
          700: '#0d7a5f',
          800: '#054d40',
          900: '#022620',
        },

        /**
         * DARK FOREST - Vert très foncé
         * #213016 (fond sombre, nuit)
         * Usage: Dark mode backgrounds
         */
        'dark-forest': {
          50: '#f6f8f5',
          100: '#e8eee5',
          200: '#d1ddd0',
          300: '#b5c8b0',
          400: '#94a885',
          500: '#7a8d6a',
          600: '#5e722c',
          DEFAULT: '#213016',      // Très foncé
          800: '#182410',
          900: '#0f1609',
        },

        /**
         * NEUTRAL - Beige clair
         * #e3efde (fond lumière, naturel)
         * Usage: Page backgrounds, cards
         */
        neutral: {
          50: '#fafbf9',
          100: '#f5f8f2',
          200: '#ecf1e9',
          300: '#e3efde',
          DEFAULT: '#e3efde',
          400: '#d0dcc8',
          500: '#bcc8b8',
          600: '#a8b49a',
        },

        /**
         * GRAYS - Nuances de gris
         */
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
          950: '#030712',
        },
      },

      /**
       * TYPOGRAPHIE
       */
      fontFamily: {
        sans: [
          '"Inter"',
          '"Segoe UI"',
          'sans-serif',
        ],
        serif: [
          '"Playfair Display"',
          'serif',
        ],
        mono: [
          '"Fira Code"',
          'monospace',
        ],
      },

      /**
       * TAILLES DE POLICE
       */
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },

      /**
       * ESPACEMENTS
       */
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
      },

      /**
       * RAYONS DE BORDURE
       */
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      /**
       * OMBRES
       */
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      },

      /**
       * ANIMATIONS
       */
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-out',
      },

      /**
       * KEYFRAMES
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

  plugins: [],
};

/**
 * ⭐ PALETTE DÉTAILLÉE
 * 
 * 🎨 PRIMAIRE (Vert forestier)
 * #126700 - Boutons, liens, accents principaux
 * Usage: CTA, hover states, active states
 * 
 * 🌿 SECONDAIRE (Olive/Kaki)
 * #5e722c - Texte secondaire, backgrounds subtils
 * Usage: Descriptions, sous-titres, nuances
 * 
 * 💎 ACCENT (Turquoise/Cyan)
 * #2ed5c0 - Highlights, éléments spéciaux
 * Usage: Badges, special CTAs, modern touches
 * 
 * 🌲 DARK FOREST (Vert très foncé)
 * #213016 - Fonds sombres, dark mode
 * Usage: Dark backgrounds, header footer
 * 
 * 🍃 NEUTRAL (Beige clair)
 * #e3efde - Fonds clairs, naturels
 * Usage: Page backgrounds, cards light
 * 
 * ========================================
 * COMMENT UTILISER
 * ========================================
 * 
 * === BOUTONS PRIMAIRES ===
 * bg-primary hover:bg-primary-700
 * dark:bg-primary-dark-light dark:hover:bg-primary
 * 
 * === TEXTE SECONDAIRE ===
 * text-secondary-600
 * dark:text-secondary-light
 * 
 * === HIGHLIGHTS ===
 * bg-accent text-white
 * dark:bg-accent-600
 * 
 * === FONDS ===
 * Light: bg-neutral
 * Dark: dark:bg-dark-forest
 * 
 * === EXEMPLE COMPLET ===
 * className="
 *   bg-neutral dark:bg-dark-forest
 *   text-primary dark:text-accent-400
 *   border border-secondary-200 dark:border-primary-800
 *   hover:bg-primary-50 dark:hover:bg-primary-900
 * "
 * 
 * ========================================
 * DARK MODE STRATEGY
 * ========================================
 * 
 * Light Mode:
 * - Fond: neutral (#e3efde) ou white
 * - Texte: primary ou secondary
 * - Accents: accent (turquoise)
 * 
 * Dark Mode:
 * - Fond: dark-forest (#213016) ou gray-900
 * - Texte: white ou accent-300
 * - Accents: accent (turquoise shine)
 */