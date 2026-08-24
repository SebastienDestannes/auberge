/**
 * app/layout.tsx
 * 
 * Layout global du site
 * Contient: Header fixe, Footer, structure HTML/CSS
 * 
 * Charges les polices, les styles Tailwind, les composants principaux
 */

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * ========================================
 * CONFIGURATION DES POLICES
 * ========================================
 * 
 * Inter: Utilisée pour le corps du texte (lisible, moderne)
 * Playfair Display: Utilisée pour les titres (élégante, premium)
 */

// Police Inter (texte normal)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // Affiche le texte pendant le chargement
});

// Police Playfair (titres)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: 'swap',
});

/**
 * ========================================
 * MÉTADONNÉES SEO
 * ========================================
 * 
 * Informations qui s'affichent dans les résultats Google
 * et quand on partage le site sur les réseaux
 */
export const metadata: Metadata = {
  title: "L'Escolan - Gîte de montagne & Carrefour de randonnée en Ariège",
  description: "L'Escolan est un gîte authentique en vallée d'Ustou. Point de départ de 5 grands sentiers pyrénéens. Demi-pension ou location en gestion libre.",
  keywords: "gîte ariège, randonnée pyrénées, GR10, Hexatrek, HRP, vallée ustou",
  openGraph: {
    title: "L'Escolan - Gîte & Carrefour de randonnée",
    description: "Ancienne école restaurée au cœur des Pyrénées",
    type: "website",
  },
};

/**
 * ========================================
 * INTERFACE PROPS
 * ========================================
 * 
 * TypeScript: définit la structure des props du composant
 */
interface RootLayoutProps {
  children: React.ReactNode; // Les pages/composants enfants
}

/**
 * ========================================
 * COMPOSANT PRINCIPAL
 * ========================================
 * 
 * Structure HTML globale du site
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      {/* <head>: Métadonnées du site (géré par Next.js automatiquement) */}
      <head>
        {/* Favicon emoji */}
        <meta name="theme-color" content="#1a7e5c" />
      </head>
      
      <body className="font-sans antialiased bg-white">
        {/* 
          HEADER FIXE
          Position fixe en haut, z-index élevé pour rester au-dessus du contenu
        */}
        <Header />
        
        {/* 
          CONTENU PRINCIPAL
          pt-20 = padding-top pour laisser de l'espace pour le header fixe
          min-h-screen = hauteur minimum écran (améliore UX)
        */}
        <main className="min-h-screen pt-20">
          {children}
        </main>
        
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

/**
 * ⭐ NOTES DE STRUCTURE
 * 
 * 1. POLICES:
 *    - Google Fonts charge automatiquement via next/font
 *    - display: 'swap' = affiche texte immédiatement (meilleure UX)
 * 
 * 2. CLASSES TAILWIND:
 *    - font-sans = utilise Inter (défaut)
 *    - font-serif = utilise Playfair (pour titres)
 *    - antialiased = lisse les bords du texte (plus lisible)
 * 
 * 3. STRUCTURE HTML:
 *    - Header: navigation fixe
 *    - Main: contenu des pages
 *    - Footer: infos + contact
 * 
 * 4. RESPONSIVE:
 *    - pt-20 adapt la hauteur du header sur mobil/desktop
 *    - Font size adapté via next/font
 */