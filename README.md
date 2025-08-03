# ProLanding - Landing Page Service

Une plateforme de création de landing pages qui aide les entrepreneurs à tripler leur taux de conversion.

## 🚀 Déploiement

### Déploiement automatique sur Netlify

1. **Fork ou clone ce repository**
2. **Connecte ton repo à Netlify :**
   - Va sur [netlify.com](https://netlify.com)
   - "New site from Git"
   - Sélectionne ton repository GitHub
   - Branch: `main`
   - Build command: `npm run build && node scripts/build-deploy.js`
   - Publish directory: `dist`

3. **Le site sera automatiquement déployé** à chaque push sur main

### Build local

```bash
# Installation
npm install

# Développement
npm run dev

# Build pour production
npm run build
node scripts/build-deploy.js
```

## 📁 Structure

- `client/` - Application React frontend
- `server/` - Backend Express.js
- `scripts/` - Scripts de build et déploiement
- `dist/` - Fichiers buildés pour déploiement

## ⚙️ Configuration

Le fichier `netlify.toml` configure automatiquement :
- Command de build
- Redirections SPA
- Variables d'environnement

## 🔧 Technologies

- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Express.js backend
- Vite build tool
- Netlify déploiement