# Gîte L'Escolan - Refonte Next.js 14

## 📁 Structure du projet

```
escolan-website/
├── app/                          # Dossier principal (Next.js App Router)
│   ├── layout.js                # Mise en page générale (navbar, footer)
│   ├── page.js                  # Page d'accueil
│   ├── (pages)/                 # Groupe de pages
│   │   ├── qui-sommes-nous/     
│   │   │   └── page.js
│   │   ├── hebergements/
│   │   │   └── page.js
│   │   ├── activites/
│   │   │   └── page.js
│   │   ├── tarifs/
│   │   │   └── page.js
│   │   └── contact/
│   │       └── page.js
│   └── api/                     # Routes API (futur: réservations, emails)
│       └── reservations/
│           └── route.js
│
├── components/                  # Composants réutilisables
│   ├── Header.js               # Navigation
│   ├── Footer.js               # Pied de page
│   ├── HeroSection.js          # Section héros
│   ├── Cards.js                # Cartes (hébergements, activités)
│   └── Gallery.js              # Galerie d'images
│
├── public/                      # Images, fonts statiques
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── gite-*.jpg
│   │   └── activities/
│   └── fonts/
│
├── styles/                      # Fichiers CSS Tailwind
│   └── globals.css
│
├── lib/                         # Code utilitaire
│   ├── data.js                 # Données du gîte (hardcodées ou API)
│   └── utils.js                # Fonctions utiles
│
├── .env.local                  # Variables d'environnement (secret)
├── next.config.js              # Config Next.js
├── tailwind.config.js          # Config Tailwind CSS
├── package.json                # Dépendances npm
└── README.md                   # Documentation
```

## 🚀 Installation rapide

```bash
# 1. Créer le projet
npx create-next-app@latest escolan-website --typescript --tailwind

# 2. Lancer le serveur développement
cd escolan-website
npm run dev

# 3. Accéder à http://localhost:3000
```

## 📋 Dépendances à ajouter

```bash
npm install react-icons                # Icônes
npm install next-image-export-optimizer # Optimisation images
npm install resend                     # Emails (réservations)
npm install zod                        # Validation formulaires
```

## 🎨 Couleurs & Typography

```javascript
// tailwind.config.js
export default {
  theme: {
    colors: {
      primary: '#1a7e5c',      // Vert naturel (montagne)
      secondary: '#8b7355',    // Marron naturel (pierre)
      accent: '#d4a574',       // Doré (lumière)
      neutral: '#f5f5f0',      // Beige clair
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
}
```

## ⚡ Performance attendue

- **Lighthouse Score**: 95+/100
- **Time to First Byte**: < 100ms
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

**Prochaine étape** : Crée un repo GitHub et je te pousse le template complet !
