<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- 
INSTRUCTIONS : 
1. Copier le contenu <body> depuis index.html de Replit
2. Remplacer tous les chemins :
   - href="/assets/ → href="<?php echo get_template_directory_uri(); ?>/assets/
   - src="/assets/ → src="<?php echo get_template_directory_uri(); ?>/assets/
3. Supprimer les balises <script> React (Vite, modules)
-->

<div id="root">
  <!-- TON CONTENU HTML REPLIT VA ICI -->
  
  <!-- Exemple de conversion : -->
  <!-- 
  AVANT (Replit) :
  <img src="/assets/logo.png" alt="Logo">
  
  APRÈS (WordPress) :
  <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Logo">
  -->
</div>

<?php wp_footer(); ?>
</body>
</html>