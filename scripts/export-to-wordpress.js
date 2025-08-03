import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script pour exporter la landing page vers WordPress/Elementor/Webflow
 * Génère HTML/CSS clean et assets optimisés
 */

function exportToWordPress() {
  console.log('🚀 Export vers WordPress/Elementor...');
  
  // 1. Build du projet React
  console.log('📦 Build du projet React...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 2. Créer le dossier d'export WordPress
  const exportDir = 'wordpress-export';
  if (fs.existsSync(exportDir)) {
    fs.rmSync(exportDir, { recursive: true });
  }
  fs.mkdirSync(exportDir, { recursive: true });
  
  // 3. Copier et nettoyer le HTML
  console.log('🧹 Nettoyage du HTML pour WordPress...');
  const htmlContent = fs.readFileSync('dist/index.html', 'utf8');
  
  // Nettoyer le HTML pour WordPress
  const cleanHtml = htmlContent
    // Retirer les imports React spécifiques
    .replace(/<script[^>]*type="module"[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<script[^>]*crossorigin[^>]*><\/script>/gi, '')
    // Convertir les chemins relatifs
    .replace(/href="\/assets\//g, 'href="<?php echo get_template_directory_uri(); ?>/assets/')
    .replace(/src="\/assets\//g, 'src="<?php echo get_template_directory_uri(); ?>/assets/')
    // Ajouter les hooks WordPress
    .replace(/<head>/, '<head>\n  <?php wp_head(); ?>')
    .replace(/<\/body>/, '  <?php wp_footer(); ?>\n</body>');
  
  // Sauvegarder le template WordPress
  fs.writeFileSync(path.join(exportDir, 'index.php'), cleanHtml);
  
  // 4. Copier les assets CSS/JS
  console.log('📁 Copie des assets...');
  if (fs.existsSync('dist/assets')) {
    fs.cpSync('dist/assets', path.join(exportDir, 'assets'), { recursive: true });
  }
  
  // 5. Créer le fichier style.css pour WordPress
  const themeInfo = `/*
Theme Name: ProLanding Custom
Description: Landing page générée par Replit pour WordPress
Version: 1.0
Author: ProLanding
*/

/* Styles générés automatiquement */
`;
  
  let mainCss = '';
  const cssFiles = fs.readdirSync(path.join(exportDir, 'assets')).filter(f => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    mainCss = fs.readFileSync(path.join(exportDir, 'assets', cssFiles[0]), 'utf8');
  }
  
  fs.writeFileSync(path.join(exportDir, 'style.css'), themeInfo + mainCss);
  
  // 6. Créer functions.php
  const functionsPhp = `<?php
// Enqueue styles et scripts
function prolanding_enqueue_assets() {
    wp_enqueue_style('prolanding-style', get_stylesheet_uri());
    
    // Enqueue les assets générés
    $css_files = glob(get_template_directory() . '/assets/*.css');
    foreach($css_files as $css_file) {
        $filename = basename($css_file, '.css');
        wp_enqueue_style('prolanding-' . $filename, get_template_directory_uri() . '/assets/' . basename($css_file));
    }
    
    $js_files = glob(get_template_directory() . '/assets/*.js');
    foreach($js_files as $js_file) {
        $filename = basename($js_file, '.js');
        wp_enqueue_script('prolanding-' . $filename, get_template_directory_uri() . '/assets/' . basename($js_file), array(), '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'prolanding_enqueue_assets');

// Support des fonctionnalités WordPress
function prolanding_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'prolanding_setup');
?>`;
  
  fs.writeFileSync(path.join(exportDir, 'functions.php'), functionsPhp);
  
  // 7. Instructions d'installation
  const readme = `# Installation WordPress

## 📁 Contenu du thème généré :
- index.php (template principal)
- style.css (styles WordPress)
- functions.php (fonctionnalités WordPress)
- assets/ (CSS/JS/images)

## 🚀 Installation :

1. **Upload du thème :**
   - Zipper le dossier wordpress-export
   - WordPress Admin > Apparence > Thèmes > Ajouter > Téléverser
   - Activer le thème

2. **Pour Elementor :**
   - Installer Elementor Pro
   - Créer une nouvelle page
   - Importer le contenu depuis l'HTML
   - Convertir en blocs Elementor

3. **Pour Webflow :**
   - Copier le HTML/CSS
   - Créer un nouveau projet Webflow
   - Coller dans l'éditeur de code personnalisé

## ✨ Modifications client :

- **WordPress natif :** Gutenberg + CSS personnalisé
- **Elementor :** Drag & drop complet
- **Webflow :** Designer visuel avancé

## 🎯 Avantages :
- Design pixel-perfect depuis Replit
- Conversion automatique WordPress
- Client autonome sur modifications
- Maintenance simplifiée
`;
  
  fs.writeFileSync(path.join(exportDir, 'README.md'), readme);
  
  console.log('✅ Export terminé !');
  console.log(`📦 Thème WordPress créé dans : ${exportDir}/`);
  console.log('🔧 Prêt pour installation WordPress/Elementor');
  
  return exportDir;
}

// Export pour Webflow
function exportToWebflow() {
  console.log('🌊 Export vers Webflow...');
  
  const webflowDir = 'webflow-export';
  if (fs.existsSync(webflowDir)) {
    fs.rmSync(webflowDir, { recursive: true });
  }
  fs.mkdirSync(webflowDir, { recursive: true });
  
  // Copier les fichiers build
  fs.cpSync('dist', webflowDir, { recursive: true });
  
  // Instructions Webflow
  const webflowReadme = `# Import Webflow

## 📁 Fichiers pour Webflow :
- index.html (structure)  
- assets/ (styles et scripts)

## 🚀 Import dans Webflow :

1. **Nouveau projet Webflow**
2. **Settings > Custom Code**
3. **Head Code :** Copier le contenu de <head> depuis index.html
4. **Body Code :** Copier le contenu de <body>
5. **Assets :** Upload des images et fonts

## ✨ Édition client :
- Designer visuel Webflow
- Responsive automatique
- Animations avancées
- CMS intégré

Le client peut modifier directement dans Webflow Designer !
`;
  
  fs.writeFileSync(path.join(webflowDir, 'WEBFLOW-IMPORT.md'), webflowReadme);
  
  console.log('✅ Export Webflow terminé !');
  console.log(`📦 Fichiers Webflow dans : ${webflowDir}/`);
}

// Exécution
const args = process.argv.slice(2);

if (args.includes('--webflow')) {
  exportToWebflow();
} else if (args.includes('--both')) {
  exportToWordPress();
  exportToWebflow();
} else {
  exportToWordPress();
}

export { exportToWordPress, exportToWebflow };