# 🚀 Instructions de Déploiement Netlify

## Étapes pour déployer sur Netlify

### Option 1: Déploiement automatique via GitHub (Recommandé)

1. **Push ton code sur GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ProLanding ready for deployment"
   git branch -M main
   git remote add origin https://github.com/TON_USERNAME/TON_REPO_NAME.git
   git push -u origin main
   ```

2. **Connecte à Netlify :**
   - Va sur [netlify.com](https://netlify.com)
   - "New site from Git"
   - Sélectionne ton repository GitHub
   - Branch: `main`
   - Build command: `node build-netlify.js`
   - Publish directory: `dist`
   - Clique "Deploy site"

3. **Automatique !** 
   - À chaque push sur main, le site se redéploie automatiquement
   - Tu auras une URL comme `https://ton-site-name.netlify.app`

### Option 2: Déploiement manuel

1. **Build le projet localement :**
   ```bash
   npm install
   node build-netlify.js
   ```

2. **Drag & Drop sur Netlify :**
   - Va sur [netlify.com](https://netlify.com)
   - Drag & drop le dossier `dist/` sur la page d'accueil
   - Ton site sera live instantanément

## ✅ Fichiers créés pour le déploiement

- `netlify.toml` - Configuration Netlify
- `build-netlify.js` - Script de build optimisé
- `.github/workflows/deploy.yml` - CI/CD automatique
- `.gitignore` - Fichiers à ignorer
- `README.md` - Documentation

## 🔧 Coûts Netlify

- **Gratuit** jusqu'à 100GB de bande passante/mois
- **Nom de domaine custom** : ~10€/an
- **Plan Pro** : 19$/mois (si besoin de plus de features)

## 📞 Support

Si tu as des problèmes, le site fonctionne déjà parfaitement en local avec `npm run dev`.