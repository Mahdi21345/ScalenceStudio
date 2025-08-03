<?php
/**
 * Thème ProLanding - Functions
 * Généré depuis Replit pour WordPress + Elementor
 */

// Enqueue des styles et scripts
function prolanding_enqueue_assets() {
    // CSS principal du thème
    wp_enqueue_style('prolanding-style', get_stylesheet_uri());
    
    // CSS généré par Replit
    wp_enqueue_style('prolanding-main', get_template_directory_uri() . '/assets/index-BBcY6y5d.css', array(), '1.0');
    
    // JS si nécessaire (optionnel pour une landing page statique)
    // wp_enqueue_script('prolanding-script', get_template_directory_uri() . '/assets/index-HpC3VpY7.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'prolanding_enqueue_assets');

// Support des fonctionnalités WordPress
function prolanding_theme_setup() {
    // Support du titre automatique
    add_theme_support('title-tag');
    
    // Support des images à la une
    add_theme_support('post-thumbnails');
    
    // Support HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Support du logo personnalisé
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Support des couleurs personnalisées (pour Elementor)
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => 'Bleu principal',
            'slug'  => 'primary-blue',
            'color' => '#6366f1',
        ),
        array(
            'name'  => 'Noir',
            'slug'  => 'dark',
            'color' => '#1f2937',
        ),
        array(
            'name'  => 'Blanc',
            'slug'  => 'white',
            'color' => '#ffffff',
        ),
    ));
}
add_action('after_setup_theme', 'prolanding_theme_setup');

// Support Elementor
function prolanding_elementor_support() {
    // Désactiver les styles par défaut d'Elementor si on veut garder nos styles
    // add_action('elementor/frontend/after_enqueue_styles', function() {
    //     wp_dequeue_style('elementor-frontend');
    // });
}
add_action('elementor/init', 'prolanding_elementor_support');

// Optimisations pour les landing pages
function prolanding_optimizations() {
    // Supprimer les styles/scripts WordPress inutiles pour une landing page
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Supprimer jQuery si pas nécessaire (décommenter si besoin)
    // wp_deregister_script('jquery');
}
add_action('init', 'prolanding_optimizations');

// Fonction utilitaire pour afficher le logo
function prolanding_display_logo() {
    if (has_custom_logo()) {
        the_custom_logo();
    } else {
        echo '<h1>' . get_bloginfo('name') . '</h1>';
    }
}

// Fonction pour les couleurs du thème (utilisable dans les templates)
function prolanding_get_theme_colors() {
    return array(
        'primary' => '#6366f1',
        'secondary' => '#1f2937',
        'accent' => '#ffffff',
    );
}
?>