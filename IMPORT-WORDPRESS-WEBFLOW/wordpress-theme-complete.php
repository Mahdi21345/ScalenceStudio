<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <!-- Fonts Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- SECTION HERO -->
<section class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"%3E%3Cpath fill="%23ffffff" fill-opacity="0.05" d="M0 0h16v16H0zM16 16h16v16H16z"/%3E%3C/svg%3E')] opacity-20"></div>
    
    <div class="relative z-10 container mx-auto px-6 py-20">
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Passe au niveau supérieur avec une Landing Page qui fait <span class="text-blue-400">tripler ton taux de conversion</span>
            </h1>
            <p class="text-xl md:text-2xl mb-4 text-blue-300 font-medium">Livrée en 24h</p>
            <p class="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Ton offre est géniale mais personne ne l'achète ? Vends plus avec une landing page qui explique clairement ta valeur et pousse à l'action. Au prix le moins cher du marché.
            </p>
            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                COMMANDER MON SITE
            </a>
        </div>
    </div>
</section>

<!-- SECTION POURQUOI -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tu perds <span class="text-blue-600">90% de tes prospects</span> à cause de ta page actuelle
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Ton expertise est au top, mais ton site ne convertit pas. Voici pourquoi tes visiteurs partent sans acheter.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-red-600 text-2xl">❌</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Message confus</h3>
                <p class="text-gray-600">Tes visiteurs ne comprennent pas ce que tu vends en 5 secondes</p>
            </div>
            
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-red-600 text-2xl">📱</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Pas responsive</h3>
                <p class="text-gray-600">70% de tes prospects consultent sur mobile, ton site est illisible</p>
            </div>
            
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-red-600 text-2xl">🐌</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Site trop lent</h3>
                <p class="text-gray-600">3 secondes de chargement = 40% d'abandon. Tes prospects partent avant de voir ton offre</p>
            </div>
        </div>
    </div>
</section>

<!-- SECTION SOLUTION -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                La solution : <span class="text-blue-600">une landing page qui convertit</span>
            </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 text-2xl">✅</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Message clair</h3>
                <p class="text-gray-600">Copywriting optimisé qui explique ta valeur en 5 secondes</p>
            </div>
            
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 text-2xl">⚡</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Ultra rapide</h3>
                <p class="text-gray-600">Chargement en moins de 2 secondes sur tous les appareils</p>
            </div>
            
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 text-2xl">🎯</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Conversion optimisée</h3>
                <p class="text-gray-600">Design UX qui pousse naturellement à l'action</p>
            </div>
        </div>
    </div>
</section>

<!-- SECTION PRIX -->
<section class="py-20 bg-gray-50" id="pricing">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span class="text-blue-600">Un prix unique</span>, sans surprise
            </h2>
        </div>
        
        <div class="max-w-lg mx-auto">
            <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600">
                <div class="text-center mb-6">
                    <div class="text-5xl font-bold text-gray-900 mb-2">499€</div>
                    <div class="text-gray-600">Landing page complète • Livraison 24h</div>
                </div>
                
                <ul class="space-y-4 mb-8">
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Maquette gratuite avant production
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Copywriting optimisé par IA
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Design UX/UI professionnel
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Formulaires de contact inclus
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Méthode nom de domaine 1€/an
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Optimisation mobile automatique
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        SEO de base inclus
                    </li>
                    <li class="flex items-center">
                        <span class="text-blue-600 mr-3">✓</span>
                        Livraison garantie en 24h
                    </li>
                </ul>
                
                <a href="#contact" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors block text-center">
                    COMMANDER MAINTENANT
                </a>
            </div>
        </div>
    </div>
</section>

<!-- SECTION CONTACT -->
<section class="py-20 bg-blue-900 text-white" id="contact">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Prêt à <span class="text-blue-300">scaler ton business</span> ?
            </h2>
            <p class="text-lg text-blue-100 max-w-3xl mx-auto">
                Parle-nous de ton projet en visioconférence. Notre équipe se charge de transformer ton offre en page qui convertit.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
                <h3 class="text-xl font-semibold mb-6">Contacte-nous directement :</h3>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <span class="text-blue-300 mr-3">📧</span>
                        <a href="mailto:contact@prolanding.fr" class="text-blue-100 hover:text-white">
                            contact@prolanding.fr
                        </a>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-300 mr-3">📞</span>
                        <a href="tel:+33627596376" class="text-blue-100 hover:text-white">
                            +33 6 27 59 63 76
                        </a>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-300 mr-3">💬</span>
                        <a href="https://wa.me/33627596376?text=Salut, je veux commander une landing page" 
                           target="_blank" class="text-blue-100 hover:text-white">
                            WhatsApp Direct
                        </a>
                    </div>
                </div>
            </div>
            
            <div>
                <form class="space-y-4">
                    <input type="text" placeholder="Ton nom" 
                           class="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:border-blue-500">
                    <input type="email" placeholder="Ton email" 
                           class="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:border-blue-500">
                    <textarea placeholder="Décris ton projet en quelques mots" rows="4"
                              class="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:border-blue-500"></textarea>
                    <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        ENVOYER MON PROJET
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- SECTION FAQ -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions <span class="text-blue-600">fréquentes</span>
            </h2>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-6">
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Combien de temps pour créer ma landing page ?
                </h3>
                <p class="text-gray-600">
                    24h chrono ! Dès réception de tes informations (logo, textes, couleurs), on livre ta landing page en moins de 24h. C'est notre promesse.
                </p>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Que se passe-t-il si je ne suis pas satisfait ?
                </h3>
                <p class="text-gray-600">
                    Impossible avec notre maquette gratuite ! Tu valides le design avant qu'on commence la production. Si ça ne te plaît pas, tu paies rien.
                </p>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Est-ce que je peux modifier le site après ?
                </h3>
                <p class="text-gray-600">
                    Bien sûr ! Tu auras accès à une interface simple pour modifier tes textes, prix et informations sans toucher au code.
                </p>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Combien ça coûte l'hébergement ?
                </h3>
                <p class="text-gray-600">
                    ~5€/mois sur Netlify (tu paies directement). On configure tout pour toi. Plus notre méthode domaine à 1€/an.
                </p>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    C'est adapté à tous les secteurs ?
                </h3>
                <p class="text-gray-600">
                    Oui ! E-commerce, consulting, coaching, SaaS, formations... On adapte le copywriting et design à ton secteur spécifique.
                </p>
            </div>
            
            <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Je récupère les fichiers du site ?
                </h3>
                <p class="text-gray-600">
                    Oui, tu es propriétaire à 100%. Code source, fichiers, tout t'appartient. Liberté totale.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold mb-4">ProLanding</h3>
        <p class="text-gray-400 mb-6">Landing pages qui convertissent • Livrées en 24h</p>
        <div class="flex justify-center space-x-6">
            <a href="mailto:contact@prolanding.fr" class="text-gray-400 hover:text-white">Email</a>
            <a href="tel:+33627596376" class="text-gray-400 hover:text-white">Téléphone</a>
            <a href="https://wa.me/33627596376" target="_blank" class="text-gray-400 hover:text-white">WhatsApp</a>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>