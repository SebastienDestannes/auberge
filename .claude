# .claude

## 🎯 Projet: Gîte L'Escolan - Refonte Next.js 14

**Objectif:** Site moderne, performant, responsive pour gîte pyrénéen.
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS 3 + CSS Variables
**Deployment:** Vercel
**Contact:** lescolan@gmail.com | 05 61 96 58 72

---

## 🎨 Palette de couleurs

```
PRIMARY (Vert forestier):       #126700
ACCENT (Turquoise/Cyan):        #2ed5c0
SECONDARY (Olive/Kaki):         #5e722c
DARK FOREST (Très foncé):       #213016
NEUTRAL (Beige clair):          #e3efde
```

**En Tailwind:** `bg-primary`, `text-accent`, `dark:bg-dark-forest`
**En CSS:** `var(--color-primary)`, `var(--color-accent)`

---

## 📁 Architecture CSS

### Structure des fichiers

```
app/
├── globals.css              ← Imports + reset global
├── styles/
│   ├── theme.css            ← Variables de couleur
│   └── components.css       ← Classes réutilisables
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Footer.tsx
    └── ThemeToggle.tsx
```

### Principes

✅ **Classes CSS centralisées** - Les styles dans `components.css`, pas inline dans TSX
✅ **Variables de thème** - Une seule source de vérité pour les couleurs
✅ **Dark mode partout** - Tous les composants supportent dark/light
✅ **Tailwind pour le layout** - Flex, grid, spacing avec Tailwind si nécessaire
✅ **@apply pour les composants** - Boutons, cartes, etc combinant Tailwind

### Exemple

```tsx
// ❌ MAUVAIS - Tailwind long
<button className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg">

// ✅ BON - Classe CSS
<button className="btn-primary">
```

---

## 🎯 Conventions de code

### Langue

- **Commentaires:** Français (`/** ... */`)
- **Noms de variables:** Anglais (standard JavaScript)
- **Fichiers:** kebab-case (`Header.tsx`, `Hero.tsx`)
- **Classes CSS:** kebab-case (`.btn-primary`, `.nav-link`)

### Commentaires obligatoires

```tsx
/**
 * Chaque composant doit avoir un commentaire de bloc:
 * - Description courte
 * - Propriétés (si applicable)
 * - Utilisation
 */
```

### Annotations pour débutants

✅ **Toujours expliquer:**
- Classes Tailwind complexes
- Hooks React
- Logique métier
- Concepts difficiles

```tsx
// ✅ BON - Explique le concept
// useCallback mémoïse la fonction pour éviter les re-renders
const handleClick = useCallback(() => { ... }, []);

// ❌ MAUVAIS - Juste du code
const handleClick = useCallback(() => { ... }, []);
```

---

## 🎨 Classes CSS standards

### Boutons

```tsx
.btn-primary    // Vert, CTA principaux
.btn-accent     // Turquoise, CTAs secondaires
.btn-header     // Petit, pour header
.btn-secondary  // Bordure
```

### Navigation

```tsx
.nav-link           // Desktop
.nav-link-mobile    // Mobile dropdown
.nav-link.active    // État actif
```

### Conteneurs

```tsx
.container       // Largeur limitée (max 1200px)
.section         // Padding standard (py-12 sm:py-16)
.section-compact // Compact (py-8 sm:py-12)
.section-light   // Fond blanc
.section-accent  // Fond vert
```

### Texte

```tsx
.title          // Titre serif
.title-lg       // Grand titre
.text-body      // Corps de texte
.link           // Lien standard
```

---

## 📱 Responsive

**Mobile-first obligatoire**

```tsx
// ✅ BON - Mobile d'abord
<div className="text-sm sm:text-base md:text-lg">

// ❌ MAUVAIS - Desktop d'abord
<div className="text-lg md:text-base sm:text-sm">
```

**Breakpoints Tailwind:**
- `sm: 640px`
- `md: 768px`
- `lg: 1024px`
- `xl: 1280px`

---

## 🌙 Dark Mode

**Toujours incluire les variantes `dark:`**

```tsx
// ✅ BON
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"

// ❌ MAUVAIS
className="bg-white text-gray-900"  // Aucun support dark
```

**Dark mode activé avec classe `dark` sur `<html>`**

---

## 📋 Checklist avant commit

- [ ] Code annoté (commentaires français)
- [ ] Classes CSS utilisées (pas de Tailwind long)
- [ ] Dark mode testé (bouton ThemeToggle)
- [ ] Responsive testé (mobile 375px+)
- [ ] `npm run dev` sans erreurs
- [ ] Pas d'erreurs TypeScript
- [ ] Pas de warnings Tailwind

---

## 🚀 Commandes utiles

```bash
# Développement
npm run dev              # http://localhost:3000

# Build
npm run build            # Production build
npm run start            # Serveur prod local

# Nettoyage
rm -rf .next            # Réinitialise cache

# Commit
git add .
git commit -m "feat: description courte"
git push
```

---

## 🔗 Liens importants

- **Site actuell:** https://lescolan.com
- **Repo GitHub:** [À remplir]
- **Vercel:** [À remplir]
- **Emails:**
  - Contact: lescolan@gmail.com
  - Admin: [À remplir]

---

## 📞 Contacts réels

```
L'Escolan
Lieu-dit Bidous
09140 Ustou, Ariège

Tél: 05 61 96 58 72
Email: lescolan@gmail.com

Facebook: https://www.facebook.com/marieetalexis/
Instagram: https://www.instagram.com/gite_l_escolan/
TripAdvisor: https://www.tripadvisor.fr/Hotel_Review-g1080534-d2521552-Reviews-Gite_l_Escolan-Ustou_Ariege_Occitanie.html
Google Maps: https://maps.app.goo.gl/sJW1QAKQxoRv9UZJA
```

---

## 🎯 Phases du projet

### ✅ Phase 1: TERMINÉE
- [x] Architecture CSS centralisée
- [x] Palette de couleurs
- [x] Composants Header/Footer/Hero
- [x] Dark mode
- [x] ThemeToggle

### 🔄 Phase 2: EN COURS
- [ ] Refactoriser composants avec CSS
- [ ] Refactoriser pages
- [ ] Optimiser images
- [ ] Tests responsive

### ⏳ Phase 3: À FAIRE
- [ ] Pages métier complètes
- [ ] Galerie photo
- [ ] Carte interactive (Leaflet)
- [ ] Performance Lighthouse 95+
- [ ] Déploiement Vercel
- [ ] Analytics

---

## 📚 Guides du projet

Lire dans cet ordre:

1. `GUIDE-DEMARRAGE.md` - Setup initial
2. `PALETTE-VISUELLE.md` - Couleurs et utilisation
3. `GUIDE-NOUVEAU-THEME.md` - Adaptation du thème
4. `GUIDE-DARK-MODE-COMPLET.md` - Dark mode
5. `REFACTOR-HERO-COMPOSANT.md` - Architecture composants
6. `GUIDE-FOOTER-COMPACT.md` - Footer optimisé
7. `PROMPT-CLAUDE-CODE.md` - Refactor automatisé

---

## 🎓 Recommandations Claude

Quand tu demandes de l'aide sur ce projet:

### Pour les ajouts

```
"Ajoute [fonctionnalité] en respectant:
- Architecture CSS (pas de Tailwind long)
- Dark mode partout
- Annotations en français
- Responsive mobile-first
"
```

### Pour les refactors

```
"Refactorise [composant] pour:
- Utiliser les classes CSS du système
- Externaliser les styles longs
- Réduire le TSX
- Ajouter des annotations
"
```

### Pour les bugs

```
"J'ai un bug: [description]
Architecture: Next.js 14 + CSS centralisé
Fichiers concernés: [liste]
Comportement attendu: [décrire]
"
```

---

## ✨ Standards de qualité

- **Readabilité:** Code lisible pour débutants
- **Maintenabilité:** Styles centralisés, faciles à modifier
- **Performance:** Images optimisées, Lighthouse 95+
- **Accessibilité:** Focus visible, aria-labels, contrast
- **Responsivité:** Mobile 375px → Desktop 1920px+
- **Dark mode:** Fonctionne partout sans effort
- **Internationalization:** Français pour UX, anglais pour code

---

## 🎨 Exemple de composant idéal

```tsx
/**
 * components/MyComponent.tsx
 * 
 * Description courte du composant
 * ✅ Dark mode
 * ✅ Responsive
 * ✅ Annotations
 */

'use client';

interface Props {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: Props) {
  return (
    <div className="section section-light">
      <div className="container">
        {/* Titre utilisant classe CSS */}
        <h2 className="title title-md">{title}</h2>
        
        {/* Texte utilisant classe CSS */}
        {description && (
          <p className="text-body">{description}</p>
        )}
        
        {/* Bouton utilisant classe CSS */}
        <button className="btn-primary">
          Réserver
        </button>
      </div>
    </div>
  );
}

/**
 * ⭐ NOTES
 * - Classe .section pour padding/spacing
 * - Classe .container pour largeur limitée
 * - Classes CSS au lieu de Tailwind long
 * - Dark mode automatique via CSS
 * - Annotations pour débutants
 */
```

---

## 🆘 Besoin d'aide?

**Pour un refactor:** `PROMPT-CLAUDE-CODE.md`
**Pour une palette:** `PALETTE-VISUELLE.md`
**Pour dark mode:** `GUIDE-DARK-MODE-COMPLET.md`
**Pour composant:** Regarde un exemple existant

---

**Dernière mise à jour:** 24 août 2026
**Mainteneur:** Nours (Sébastien)
