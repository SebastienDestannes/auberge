# 📖 Bonnes Pratiques - Développement L'Escolan

## 🎯 Principes clés

### 1. **Code lisible pour les débutants**
- ✅ Annotations en français dans les commentaires
- ✅ Noms de variables clairs: `heroTitle` et pas `ht`
- ✅ Structurer le code: une fonction = une responsabilité
- ✅ Éviter le "code magique": expliquer le pourquoi

### 2. **Performance d'abord**
```javascript
// ❌ MAUVAIS: image non optimisée
<img src="/image.jpg" width="800" />

// ✅ BON: utilise le composant Image de Next.js
<Image 
  src="/image.jpg" 
  width={800} 
  height={600}
  priority={true}  // pour les images au-dessus du pli
/>
```

### 3. **Mobile-first responsive**
```javascript
// ❌ MAUVAIS: ordre aléatoire
className="md:flex hidden sm:p-4 p-8"

// ✅ BON: petit écran d'abord, puis élargir
className="p-4 md:p-8 flex"
```

### 4. **Accessibilité (a11y)**
```javascript
// ✅ Toujours avoir alt-text
<Image alt="Vue du gîte" src="/images/gite.jpg" />

// ✅ Avoir aria-label sur les boutons icons
<button aria-label="Ouvrir le menu">☰</button>

// ✅ Hiérarchie HTML correcte (h1 > h2 > h3)
<h1>Titre principal</h1>
<h2>Sous-titre</h2>

// ✅ Labels associés aux inputs
<label htmlFor="email">Email:</label>
<input id="email" type="email" />
```

## 🏗️ Structure des fichiers

```
app/
├── (pages)/          # Pages groupées
│   ├── [slug]/       # URL dynamique (futur: blog posts)
│   └── ...
├── api/              # Routes API
│   ├── contact/      # POST /api/contact
│   ├── reservations/ # POST /api/reservations
│   └── ...
└── layout.js         # Layout global

components/
├── Header.js
├── Footer.js
├── HeroSection.js    # Réutilisable
├── Card.js           # Réutilisable
└── ...

lib/
├── data.js           # Constantes, données statiques
├── api.js            # Appels API
└── utils.js          # Fonctions utilitaires

public/
├── images/
├── icons/
└── ...
```

## 💾 Gestion des données

### Données statiques (actuellement)
```javascript
// lib/data.js
export const hebergements = [
  { id: 1, titre: 'Chambre simple', prix: 60 },
  { id: 2, titre: 'Chambre double', prix: 80 },
];

// Utilisation:
import { hebergements } from '@/lib/data';
hebergements.map(h => <Card key={h.id} {...h} />)
```

### Données dynamiques (futur: API)
```javascript
// Utiliser une API au lieu de fichiers statiques

// Option 1: API propre (meilleur)
export async function getHebergements() {
  const res = await fetch('https://api.lescolan.com/hebergements');
  return res.json();
}

// Option 2: Strapi (CMS léger)
// Installer Strapi, structurer les contenus
// Interroger via API
```

## 🎨 Tailwind CSS: patterns courants

```javascript
// === CONTAINER & SPACING ===
<div className="max-w-4xl mx-auto px-6 py-12">
  // mx-auto = centré horizontalement
  // px-6 = padding horizontal 24px
  // py-12 = padding vertical 48px
</div>

// === GRILLES RESPONSIVE ===
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // 1 colonne par défaut
  // 2 colonnes sur medium écrans
  // 3 colonnes sur large écrans
  // Espacement 24px entre éléments
</div>

// === FLEXBOX ===
<div className="flex items-center justify-between gap-4">
  // Flexbox horizontal, centré verticalement
  // Espacement entre = justify-between
  // Espace de 16px entre enfants = gap-4
</div>

// === TEXTE ===
<p className="text-gray-600 text-lg leading-relaxed">
  // Couleur gris moyen, taille 18px, espacement ligne 1.625
</p>

// === ÉTATS ===
<button className="bg-primary hover:bg-primary-dark active:scale-95 transition-all">
  // Survoler = changement de couleur
  // Clic = rétréci
  // Transition lisse = transition-all
</button>

// === RESPONSIVE VISIBILITY ===
<nav className="hidden md:flex">
  // Invisible par défaut (mobile)
  // Visible à partir de medium écrans
</nav>

<button className="md:hidden">Menu</button>
// Visible par défaut (mobile)
// Invisible à partir de medium écrans
```

## 📋 Checklist avant push (Git)

```bash
# Avant de faire git push, vérifier:

□ npm run lint       # Pas d'erreur ESLint
□ npm run build      # La production build passe
□ Test mobile        # Ouvrir DevTools (F12), Ctrl+Shift+M
□ Liens fonctionnent # Cliquer sur tous les boutons
□ Images optimisées  # Pas d'images > 500KB
□ Pas de console err # Ouvrir la console JS
□ SEO title/desc    # Vérifier metadata
□ Performance       # Lighthouse 90+/100
```

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# 1. Connecte ton repo GitHub à Vercel
# 2. Vercel détecte automatiquement Next.js
# 3. Configure les variables d'environnement (.env):
NEXT_PUBLIC_API_URL=https://api.lescolan.com
# 4. Chaque push sur main = déploiement automatique
```

### Variables d'environnement
```bash
# .env.local (local, gitignore)
RESEND_API_KEY=re_xxx...

# .env.production.local (production, gitignore)
NEXT_PUBLIC_API_URL=https://api.lescolan.com
```

## 🔐 Sécurité

### Données sensibles
```javascript
// ❌ JAMAIS en public
const API_KEY = 'sk-xxx...';

// ✅ Dans .env.local (gitignore)
const apiKey = process.env.API_KEY;

// ✅ Données publiques: NEXT_PUBLIC_
const publicUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Formulaires
```javascript
// ✅ Valider côté client et serveur
import { z } from 'zod';

const ContactSchema = z.object({
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message trop court'),
});

// Côté serveur (API route)
export async function POST(request) {
  const data = await request.json();
  const validated = ContactSchema.parse(data); // Lance erreur si invalide
  // Traiter...
}
```

## 🧪 Testing (futur)

```bash
# Installer Jest + React Testing Library
npm install --save-dev jest @testing-library/react

# Tester une page
// __tests__/page.test.js
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

test('affiche le titre', () => {
  render(<HomePage />);
  expect(screen.getByText('Ici, le temps dure longtemps')).toBeInTheDocument();
});
```

## 📊 Analytics

```javascript
// app/layout.js
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
`}</script>
```

## 📱 Responsive breakpoints

```javascript
// Tailwind standard
sm: 640px   // Tablette petite
md: 768px   // Tablette moyenne
lg: 1024px  // Desktop petit
xl: 1280px  // Desktop
2xl: 1536px // Desktop large
```

## 🐛 Débogage

```bash
# Console du navigateur (F12)
# Onglet "Network" = vérifier les images, API calls
# Onglet "Performance" = mesurer la vitesse
# Onglet "Lighthouse" = audit automatique

# Terminal (où tu as lancé npm run dev)
# Les erreurs Next.js apparaissent ici
# Les warnings Tailwind aussi
```

## ✅ Maintenance régulière

```bash
# Chaque mois
npm outdated              # Voir les packages à mettre à jour
npm update                # Mettre à jour (safe)

# Chaque trimestre
npm audit                 # Vérifier les vulnérabilités
npm audit fix             # Corriger automatiquement

# Chaque année
# Relire le code
# Refactoriser les parties complexes
# Optimiser les images
# Vérifier la SEO
```

## 🎯 Évolution future

1. **Phase 1** (mois 1-2): Pages statiques + formulaires
2. **Phase 2** (mois 2-3): Panel admin simple
3. **Phase 3** (mois 3-4): Blog / actualités
4. **Phase 4** (mois 4-6): Calendrier réservations en temps réel
5. **Phase 5** (mois 6+): App mobile

---

**Rappel clé:** "Code for the next developer" = code comme si quelqu'un d'autre (ou toi dans 6 mois) devrait le lire. Les commentaires et noms clairs sauvent du temps! 📚
