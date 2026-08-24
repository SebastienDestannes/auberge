# 🚀 Guide de Démarrage - Refonte Gîte L'Escolan

## 📋 Prérequis

Avant de commencer, il faut installer **Node.js** (qui inclut npm).

```bash
# 1. Télécharger Node.js depuis nodejs.org (version LTS)
# 2. Vérifier que c'est bien installé:
node --version  # Doit afficher v18.x.x ou +
npm --version   # Doit afficher 9.x.x ou +
```

## 🎯 Étape 1: Créer le projet

```bash
# Va dans un dossier où tu veux mettre le projet
cd ~/Projets/

# Crée un nouveau projet Next.js
npx create-next-app@latest escolan-website \
  --typescript \
  --tailwind \
  --eslint \
  --app

# Réponds aux questions comme ça:
# ? Would you like to use ESLint? → Yes
# ? Would you like to use Tailwind CSS? → Yes
# ? Would you like your code inside a `src/` directory? → No
# ? Would you like to use App Router? → Yes
# ? Would you like to use Turbopack for `next dev`? → No
# ? Would you like to customize the import alias? → No
```

## 📁 Étape 2: Copier les fichiers

Prends les fichiers que je t'ai créés et mets-les au bon endroit:

```bash
cd escolan-website

# Structure finale:
escolan-website/
├── app/
│   ├── layout.js          ← (remplace le fichier existant)
│   ├── page.js            ← (remplace le fichier existant)
│   ├── globals.css        ← (remplace le fichier existant)
│   └── (pages)/           ← crée ce dossier
│       ├── qui-sommes-nous/page.js
│       ├── hebergements/page.js
│       ├── activites/page.js
│       ├── tarifs/page.js
│       └── contact/page.js
│
├── components/
│   ├── Header.js          ← (nouveau)
│   └── Footer.js          ← (nouveau)
│
├── tailwind.config.js     ← (remplace le fichier existant)
├── package.json           ← (mets à jour les dépendances)
└── next.config.js         ← (garder le fichier existant)
```

## 💾 Étape 3: Installer les dépendances

```bash
# Télécharge toutes les librairies nécessaires
npm install

# Ou avec yarn:
yarn install
```

## 🎨 Étape 4: Configurer Tailwind

Ouvre `app/globals.css` et mets ça:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Couleurs personnalisées */
:root {
  --color-primary: #1a7e5c;
  --color-secondary: #8b7355;
  --color-accent: #d4a574;
}

/* Police par défaut */
body {
  font-family: 'Inter', sans-serif;
}

/* Titres */
h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

## ▶️ Étape 5: Lancer le serveur

```bash
# Démarre le serveur de développement
npm run dev

# Ou:
yarn dev
```

**Résultat:**
```
> Local:        http://localhost:3000
```

Ouvre ton navigateur et va sur: **http://localhost:3000** 🎉

## 🔄 Étape 6: Modifier et voir les changements

Le serveur de développement rechargera automatiquement quand tu modifies un fichier.

```bash
# Par exemple, modifie app/page.js
# Sauvegarde (Ctrl+S)
# La page se met à jour automatiquement dans le navigateur
```

## 📸 Étape 7: Ajouter tes images

```bash
# Crée un dossier pour les images
mkdir public/images

# Mets tes photos du gîte dans ce dossier:
public/images/
├── hero.jpg
├── gite-chambre1.jpg
├── gite-chambre2.jpg
├── gite-salon.jpg
├── gite-cuisine.jpg
└── activites/
    ├── rando1.jpg
    ├── rando2.jpg
    └── vtt.jpg
```

Puis dans `app/page.js`, remplace le placeholder par:

```javascript
import Image from 'next/image';

// Dans la section HeroSection:
<Image 
  src="/images/hero.jpg" 
  alt="Vue du gîte"
  width={800}
  height={450}
  priority={true}
  className="rounded-xl shadow-lg"
/>
```

## 🌐 Étape 8: Créer les autres pages

Crée un dossier pour chaque page:

```bash
# Page "Qui sommes nous"
mkdir -p app/\(pages\)/qui-sommes-nous
touch app/\(pages\)/qui-sommes-nous/page.js
```

Contenu simple pour commencer (`page.js`):

```javascript
export default function QuiSommesNous() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-bold mb-6">
        Qui sommes nous?
      </h1>
      <p className="text-gray-600 text-lg">
        Bienvenue au gîte l'Escolan...
      </p>
    </div>
  );
}
```

Répète pour chaque page:
- `/hebergements`
- `/activites`
- `/tarifs`
- `/contact`

## 🚀 Étape 9: Build pour production

Quand tu es prêt à déployer:

```bash
# Crée une version optimisée
npm run build

# Teste-la localement
npm start

# Si tout va bien, tu peux déployer!
```

## 📦 Étape 10: Déployer sur Vercel (gratuit + rapide)

```bash
# 1. Va sur https://vercel.com
# 2. Clique "Sign up with GitHub"
# 3. Connecte ton repo GitHub
# 4. Clique "Deploy"
# 5. C'est fait! Ton site est en ligne 🚀
```

Vercel va automatiquement:
- Compiler le code
- Optimiser les images
- Mettre en cache
- Donner un URL public

Chaque fois que tu pushs sur GitHub, le site se met à jour automatiquement.

## 🔧 Commandes utiles

```bash
# Démarrer le développement
npm run dev

# Lancer les tests
npm run test

# Vérifier la qualité du code
npm run lint

# Formater le code
npm run format

# Build pour production
npm run build

# Démarrer en production
npm start
```

## ⚠️ Erreurs courantes

### "Cannot find module 'next'"
→ Lance: `npm install`

### "Port 3000 est déjà utilisé"
→ Utilise un autre port: `npm run dev -- -p 3001`

### Les images ne s'affichent pas
→ Mets-les dans `public/images/` et utilise le chemin `/images/...`

### Tailwind CSS ne fonctionne pas
→ Redémarre le serveur: Ctrl+C, puis `npm run dev`

## 📚 Ressources

- **Next.js docs**: https://nextjs.org/docs
- **Tailwind docs**: https://tailwindcss.com/docs
- **React docs**: https://react.dev
- **Déployer sur Vercel**: https://vercel.com/docs

## ✅ Checklist finale

- [ ] Node.js installé
- [ ] Projet créé avec `create-next-app`
- [ ] Fichiers copiés au bon endroit
- [ ] `npm install` lancé
- [ ] `npm run dev` fonctionne
- [ ] Accueil s'affiche sur localhost:3000
- [ ] Images ajoutées
- [ ] Autres pages créées
- [ ] Testé sur mobile (responsive)
- [ ] Prêt à déployer sur Vercel

---

**Besoin d'aide?** 
- Ouvre la console JavaScript (F12) pour voir les erreurs
- Check les logs du terminal où tu as lancé `npm run dev`
- Relis les annotations dans les fichiers pour comprendre le code

**Tu es maintenant prêt pour coder!** 🚀
