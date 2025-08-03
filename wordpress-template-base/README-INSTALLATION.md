# 🚀 Installation Thème WordPress ProLanding

## 📋 Contenu du package

- `style.css` - Fichier thème WordPress (obligatoire)
- `index.php` - Template principal
- `functions.php` - Fonctionnalités WordPress
- `assets/` - CSS, JS et fonts depuis Replit
- Ce fichier d'instructions

## ⚡ Installation rapide

### 1. Préparation du thème
1. **Copier le HTML** depuis `index.html` vers `index.php` (instructions dans le fichier)
2. **Copier le CSS** depuis `assets/index-*.css` vers `style.css`
3. **Ajuster les chemins** des assets (remplacer `/assets/` par `<?php echo get_template_directory_uri(); ?>/assets/`)

### 2. Installation WordPress
1. **Zipper tout le dossier** `wordpress-template-base`
2. **WordPress Admin** → Apparence → Thèmes → Ajouter nouveau → Téléverser un thème
3. **Sélectionner le fichier ZIP** et installer
4. **Activer le thème**

### 3. Optimisation Elementor (Optionnel)
1. **Installer Elementor Pro**
2. **Créer une nouvelle page**
3. **Éditer avec Elementor**
4. **Importer/recréer les sections** de la landing page
5. **Donner accès au client** pour modifications

## 💰 Avantages commerciaux

### Pour toi :
- ✅ **Design parfait** créé dans Replit
- ✅ **Export automatisé** vers WordPress
- ✅ **Prix premium** : 899€ au lieu de 499€
- ✅ **Zéro maintenance** après livraison

### Pour le client :
- ✅ **Éditeur visuel** Elementor (drag & drop)
- ✅ **Modification autonome** des textes/images
- ✅ **Responsive automatique**
- ✅ **Extensions WordPress** disponibles

## 🎯 Formation client (30 min)

1. **Connexion WordPress** admin
2. **Utilisation Elementor** (bases)
3. **Modification des sections** principales
4. **Upload d'images**
5. **Publication des changements**

## 🔧 Dépannage courant

### CSS ne s'affiche pas :
- Vérifier les chemins dans `functions.php`
- Modifier le nom du fichier CSS dans `wp_enqueue_style`

### Images manquantes :
- Vérifier les chemins dans `index.php`
- S'assurer que les images sont dans `/assets/`

### Elementor ne fonctionne pas :
- Installer Elementor Pro (pas la version gratuite)
- Créer une nouvelle page (pas modifier l'accueil)

## 📞 Support

Ce thème a été généré automatiquement depuis Replit. Pour toute personnalisation supplémentaire, contacter l'équipe ProLanding.

**Thème testé avec :**
- WordPress 6.0+
- Elementor Pro 3.0+
- PHP 8.0+