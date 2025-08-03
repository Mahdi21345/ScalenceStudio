<?php
/**
 * ProLanding Theme - Functions
 * Créé avec Replit pour WordPress + Elementor
 */

// Enqueue des styles et scripts
function prolanding_enqueue_assets() {
    // CSS principal du thème
    wp_enqueue_style('prolanding-style', get_stylesheet_uri(), array(), '1.0');
    
    // Fonts Google
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', array(), null);
    
    // CSS généré par Replit (optionnel si tout est dans style.css)
    if (file_exists(get_template_directory() . '/assets/index.css')) {
        wp_enqueue_style('prolanding-replit', get_template_directory_uri() . '/assets/index.css', array(), '1.0');
    }
    
    // JS personnalisé si nécessaire
    wp_enqueue_script('prolanding-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true);
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
            'color' => '#3b82f6',
        ),
        array(
            'name'  => 'Bleu foncé',
            'slug'  => 'dark-blue',
            'color' => '#1e3a8a',
        ),
        array(
            'name'  => 'Gris foncé',
            'slug'  => 'dark-gray',
            'color' => '#111827',
        ),
        array(
            'name'  => 'Blanc',
            'slug'  => 'white',
            'color' => '#ffffff',
        ),
    ));
    
    // Support des menus
    register_nav_menus(array(
        'primary' => 'Menu principal',
        'footer'  => 'Menu footer',
    ));
    
    // Tailles d'images personnalisées
    add_image_size('hero-image', 1200, 600, true);
    add_image_size('card-image', 400, 300, true);
}
add_action('after_setup_theme', 'prolanding_theme_setup');

// Support Elementor
function prolanding_elementor_support() {
    // Ajouter des locations Elementor
    add_theme_support('elementor');
    
    // Support des modèles Elementor
    add_theme_support('elementor-pro');
}
add_action('elementor/init', 'prolanding_elementor_support');

// Customizer - Options du thème
function prolanding_customize_register($wp_customize) {
    // Section Contact
    $wp_customize->add_section('prolanding_contact', array(
        'title'    => 'Informations de Contact',
        'priority' => 30,
    ));
    
    // Email
    $wp_customize->add_setting('prolanding_email', array(
        'default'           => 'contact@prolanding.fr',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('prolanding_email', array(
        'label'   => 'Email de contact',
        'section' => 'prolanding_contact',
        'type'    => 'email',
    ));
    
    // Téléphone
    $wp_customize->add_setting('prolanding_phone', array(
        'default'           => '+33 6 27 59 63 76',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('prolanding_phone', array(
        'label'   => 'Numéro de téléphone',
        'section' => 'prolanding_contact',
        'type'    => 'text',
    ));
    
    // WhatsApp
    $wp_customize->add_setting('prolanding_whatsapp', array(
        'default'           => 'https://wa.me/33627596376',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('prolanding_whatsapp', array(
        'label'   => 'Lien WhatsApp',
        'section' => 'prolanding_contact',
        'type'    => 'url',
    ));
    
    // Section Pricing
    $wp_customize->add_section('prolanding_pricing', array(
        'title'    => 'Tarification',
        'priority' => 31,
    ));
    
    // Prix
    $wp_customize->add_setting('prolanding_price', array(
        'default'           => '499',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('prolanding_price', array(
        'label'   => 'Prix (sans le symbole €)',
        'section' => 'prolanding_pricing',
        'type'    => 'number',
    ));
    
    // Description du prix
    $wp_customize->add_setting('prolanding_price_description', array(
        'default'           => 'Landing page complète • Livraison 24h',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('prolanding_price_description', array(
        'label'   => 'Description du prix',
        'section' => 'prolanding_pricing',
        'type'    => 'text',
    ));
}
add_action('customize_register', 'prolanding_customize_register');

// Fonctions utilitaires pour récupérer les options
function prolanding_get_contact_email() {
    return get_theme_mod('prolanding_email', 'contact@prolanding.fr');
}

function prolanding_get_contact_phone() {
    return get_theme_mod('prolanding_phone', '+33 6 27 59 63 76');
}

function prolanding_get_whatsapp_link() {
    return get_theme_mod('prolanding_whatsapp', 'https://wa.me/33627596376');
}

function prolanding_get_price() {
    return get_theme_mod('prolanding_price', '499');
}

function prolanding_get_price_description() {
    return get_theme_mod('prolanding_price_description', 'Landing page complète • Livraison 24h');
}

// Optimisations pour les landing pages
function prolanding_optimizations() {
    // Supprimer les styles/scripts WordPress inutiles pour une landing page
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Supprimer l'API REST sur le frontend (optionnel)
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    
    // Supprimer les feeds RSS (optionnel pour une landing page)
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
}
add_action('init', 'prolanding_optimizations');

// Ajouter une classe body personnalisée
function prolanding_body_classes($classes) {
    $classes[] = 'prolanding-theme';
    
    if (is_front_page()) {
        $classes[] = 'landing-page';
    }
    
    return $classes;
}
add_filter('body_class', 'prolanding_body_classes');

// Personnaliser le titre de la page
function prolanding_wp_title($title, $sep) {
    if (is_front_page()) {
        return get_bloginfo('name') . ' ' . $sep . ' Landing Pages Professionnelles en 24h';
    }
    return $title;
}
add_filter('wp_title', 'prolanding_wp_title', 10, 2);

// Gestion des formulaires de contact (basique)
function prolanding_handle_contact_form() {
    if (isset($_POST['prolanding_contact_submit'])) {
        $name = sanitize_text_field($_POST['contact_name']);
        $email = sanitize_email($_POST['contact_email']);
        $message = sanitize_textarea_field($_POST['contact_message']);
        
        if (!empty($name) && !empty($email) && !empty($message)) {
            // Envoyer l'email
            $to = prolanding_get_contact_email();
            $subject = 'Nouveau contact depuis ' . get_bloginfo('name');
            $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
            $headers = array('Content-Type: text/html; charset=UTF-8');
            
            if (wp_mail($to, $subject, nl2br($body), $headers)) {
                wp_redirect(add_query_arg('contact', 'success', home_url()));
                exit;
            }
        }
        
        wp_redirect(add_query_arg('contact', 'error', home_url()));
        exit;
    }
}
add_action('init', 'prolanding_handle_contact_form');

// Widget Areas (optionnel)
function prolanding_widgets_init() {
    register_sidebar(array(
        'name'          => 'Footer',
        'id'            => 'footer-1',
        'description'   => 'Widgets du footer',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'prolanding_widgets_init');

// Désactiver les commentaires par défaut sur une landing page
function prolanding_disable_comments() {
    // Fermer les commentaires sur les nouvelles publications
    update_option('default_comment_status', 'closed');
    
    // Supprimer le support des commentaires
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');
}
add_action('init', 'prolanding_disable_comments');
?>