const fs = require('fs');
const path = require('path');

/**
 * Script de déploiement rapide vers Webflow
 * Génère le code HTML + CSS prêt à copier-coller dans Webflow
 */

// Lire le contenu HTML généré
const distPath = path.join(__dirname, '../dist/public');
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
const cssFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(f => f.endsWith('.css'));
const mainCss = fs.readFileSync(path.join(distPath, 'assets', cssFiles[0]), 'utf8');

// Template Webflow optimisé
const webflowTemplate = `<!DOCTYPE html>
<html data-wf-page="prolanding-home" data-wf-site="prolanding">
<head>
    <meta charset="utf-8">
    <title>ProLanding - Landing Pages Professionnelles</title>
    <meta content="Créez votre landing page professionnelle en 24h. Design optimisé, copywriting IA, livraison garantie." name="description">
    <meta content="ProLanding - Landing Pages Professionnelles" property="og:title">
    <meta content="Créez votre landing page professionnelle en 24h. Design optimisé, copywriting IA, livraison garantie." property="og:description">
    <meta content="ProLanding - Landing Pages Professionnelles" property="twitter:title">
    <meta content="Créez votre landing page professionnelle en 24h. Design optimisé, copywriting IA, livraison garantie." property="twitter:description">
    <meta property="og:type" content="website">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    
    <!-- Fonts Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- CSS intégré Webflow -->
    <style>
        /* Reset et base */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Container Webflow */
        .w-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Sections */
        .section {
            padding: 80px 0;
        }

        /* Hero Webflow */
        .hero-section {
            background: linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #000000 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .hero-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"%3E%3Cpath fill="%23ffffff" fill-opacity="0.05" d="M0 0h16v16H0zM16 16h16v16H16z"/%3E%3C/svg%3E');
            opacity: 0.2;
        }

        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero-heading {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #93c5fd;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .hero-description {
            font-size: 1.2rem;
            color: #d1d5db;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .highlight-blue {
            color: #60a5fa;
        }

        /* Buttons Webflow */
        .btn {
            display: inline-block;
            padding: 16px 32px;
            background: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background: #2563eb;
            transform: translateY(-2px);
        }

        /* Grid Webflow */
        .w-row {
            display: flex;
            margin-left: -10px;
            margin-right: -10px;
        }

        .w-col-4 {
            flex: 0 0 33.333%;
            padding-left: 10px;
            padding-right: 10px;
        }

        .w-col-6 {
            flex: 0 0 50%;
            padding-left: 10px;
            padding-right: 10px;
        }

        .w-col-12 {
            flex: 0 0 100%;
            padding-left: 10px;
            padding-right: 10px;
        }

        @media (max-width: 768px) {
            .w-col-4,
            .w-col-6 {
                flex: 0 0 100%;
                margin-bottom: 2rem;
            }
        }

        /* Cards */
        .card {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-4px);
        }

        .card-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }

        .icon-red {
            background: #fee2e2;
            color: #dc2626;
        }

        .icon-blue {
            background: #dbeafe;
            color: #3b82f6;
        }

        .card-heading {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #111827;
        }

        .card-text {
            color: #6b7280;
            line-height: 1.6;
        }

        /* Sections de couleur */
        .section-gray {
            background-color: #f9fafb;
        }

        .section-white {
            background-color: white;
        }

        .section-blue {
            background: #1e3a8a;
            color: white;
        }

        .section-dark {
            background: #111827;
            color: white;
        }

        /* Pricing */
        .pricing-card {
            background: white;
            border: 2px solid #3b82f6;
            border-radius: 16px;
            padding: 2rem;
            text-align: center;
            max-width: 400px;
            margin: 0 auto;
            box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
        }

        .price-amount {
            font-size: 3rem;
            font-weight: 900;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .price-description {
            color: #6b7280;
            margin-bottom: 2rem;
        }

        .feature-list {
            list-style: none;
            margin-bottom: 2rem;
            text-align: left;
        }

        .feature-list li {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            padding: 0.5rem 0;
        }

        .feature-list li::before {
            content: '✓';
            color: #3b82f6;
            font-weight: bold;
            margin-right: 0.75rem;
            font-size: 1.1rem;
        }

        /* Contact */
        .contact-info {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }

        .contact-info span {
            margin-right: 0.75rem;
            font-size: 1.2rem;
        }

        .contact-info a {
            color: #bfdbfe;
            text-decoration: none;
        }

        .contact-info a:hover {
            color: white;
        }

        /* Forms Webflow */
        .w-form {
            margin-bottom: 0;
        }

        .field-label {
            display: block;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .text-field {
            width: 100%;
            padding: 0.75rem 1rem;
            margin-bottom: 1rem;
            border: 1px solid #3b82f6;
            border-radius: 8px;
            font-size: 1rem;
            background: #1e40af;
            color: white;
        }

        .text-field::placeholder {
            color: #93c5fd;
        }

        .textarea {
            width: 100%;
            min-height: 120px;
            padding: 0.75rem 1rem;
            margin-bottom: 1rem;
            border: 1px solid #3b82f6;
            border-radius: 8px;
            font-size: 1rem;
            background: #1e40af;
            color: white;
            resize: vertical;
        }

        /* FAQ */
        .faq-item {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .faq-question {
            font-size: 1.1rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .faq-answer {
            color: #6b7280;
            line-height: 1.6;
        }

        /* Footer */
        .footer {
            text-align: center;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .footer-links a {
            color: #9ca3af;
            text-decoration: none;
        }

        .footer-links a:hover {
            color: white;
        }

        /* Typography Webflow */
        .heading-xlarge {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.2;
        }

        .heading-large {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin-bottom: 1rem;
        }

        .heading-medium {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .text-large {
            font-size: 1.2rem;
            line-height: 1.6;
        }

        .text-center {
            text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-heading,
            .heading-xlarge {
                font-size: 2rem;
            }
            
            .heading-large {
                font-size: 1.8rem;
            }
            
            .section {
                padding: 3rem 0;
            }
            
            .w-container {
                padding: 0 1rem;
            }
            
            .footer-links {
                flex-direction: column;
            }
        }

        /* Animations Webflow */
        .w-animation-fade {
            opacity: 0;
            animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
    </style>
    
    <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon">
</head>

<body>
    <!-- HERO SECTION -->
    <div class="hero-section">
        <div class="w-container">
            <div class="hero-content">
                <h1 class="hero-heading">
                    Passe au niveau supérieur avec une Landing Page qui fait 
                    <span class="highlight-blue">tripler ton taux de conversion</span>
                </h1>
                <div class="hero-subtitle">Livrée en 24h</div>
                <div class="hero-description">
                    Ton offre est géniale mais personne ne l'achète ? Vends plus avec une landing page qui explique clairement ta valeur et pousse à l'action. Au prix le moins cher du marché.
                </div>
                <a href="#contact" class="btn w-button">COMMANDER MON SITE</a>
            </div>
        </div>
    </div>

    <!-- SECTION PROBLÈMES -->
    <div class="section section-gray">
        <div class="w-container">
            <h2 class="heading-large">Tu perds <span class="highlight-blue">90% de tes prospects</span> à cause de ta page actuelle</h2>
            <div class="text-large text-center">
                Ton expertise est au top, mais ton site ne convertit pas. Voici pourquoi tes visiteurs partent sans acheter.
            </div>
            
            <div class="w-row">
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-red">❌</div>
                        <h3 class="card-heading">Message confus</h3>
                        <div class="card-text">Tes visiteurs ne comprennent pas ce que tu vends en 5 secondes</div>
                    </div>
                </div>
                
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-red">📱</div>
                        <h3 class="card-heading">Pas responsive</h3>
                        <div class="card-text">70% de tes prospects consultent sur mobile, ton site est illisible</div>
                    </div>
                </div>
                
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-red">🐌</div>
                        <h3 class="card-heading">Site trop lent</h3>
                        <div class="card-text">3 secondes de chargement = 40% d'abandon. Tes prospects partent avant de voir ton offre</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SECTION SOLUTIONS -->
    <div class="section section-white">
        <div class="w-container">
            <h2 class="heading-large">La solution : <span class="highlight-blue">une landing page qui convertit</span></h2>
            
            <div class="w-row">
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-blue">✅</div>
                        <h3 class="card-heading">Message clair</h3>
                        <div class="card-text">Copywriting optimisé qui explique ta valeur en 5 secondes</div>
                    </div>
                </div>
                
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-blue">⚡</div>
                        <h3 class="card-heading">Ultra rapide</h3>
                        <div class="card-text">Chargement en moins de 2 secondes sur tous les appareils</div>
                    </div>
                </div>
                
                <div class="w-col-4">
                    <div class="card">
                        <div class="card-icon icon-blue">🎯</div>
                        <h3 class="card-heading">Conversion optimisée</h3>
                        <div class="card-text">Design UX qui pousse naturellement à l'action</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SECTION PRICING -->
    <div class="section section-gray" id="pricing">
        <div class="w-container">
            <h2 class="heading-large"><span class="highlight-blue">Un prix unique</span>, sans surprise</h2>
            
            <div class="pricing-card">
                <div class="price-amount">499€</div>
                <div class="price-description">Landing page complète • Livraison 24h</div>
                
                <ul class="feature-list">
                    <li>Maquette gratuite avant production</li>
                    <li>Copywriting optimisé par IA</li>
                    <li>Design UX/UI professionnel</li>
                    <li>Formulaires de contact inclus</li>
                    <li>Méthode nom de domaine 1€/an</li>
                    <li>Optimisation mobile automatique</li>
                    <li>SEO de base inclus</li>
                    <li>Livraison garantie en 24h</li>
                </ul>
                
                <a href="#contact" class="btn w-button">COMMANDER MAINTENANT</a>
            </div>
        </div>
    </div>

    <!-- SECTION CONTACT -->
    <div class="section section-blue" id="contact">
        <div class="w-container">
            <h2 class="heading-large">Prêt à <span class="highlight-blue">scaler ton business</span> ?</h2>
            <div class="text-large text-center">
                Parle-nous de ton projet en visioconférence. Notre équipe se charge de transformer ton offre en page qui convertit.
            </div>
            
            <div class="w-row">
                <div class="w-col-6">
                    <h3 class="heading-medium">Contacte-nous directement :</h3>
                    <div class="contact-info">
                        <span>📧</span>
                        <a href="mailto:contact@prolanding.fr">contact@prolanding.fr</a>
                    </div>
                    <div class="contact-info">
                        <span>📞</span>
                        <a href="tel:+33627596376">+33 6 27 59 63 76</a>
                    </div>
                    <div class="contact-info">
                        <span>💬</span>
                        <a href="https://wa.me/33627596376?text=Salut, je veux commander une landing page" target="_blank">WhatsApp Direct</a>
                    </div>
                </div>
                
                <div class="w-col-6">
                    <div class="w-form">
                        <form name="contact-form" data-name="Contact Form" method="post" class="form">
                            <input type="text" class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Ton nom" required="">
                            <input type="email" class="text-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Ton email" required="">
                            <textarea placeholder="Décris ton projet en quelques mots" maxlength="5000" name="message" data-name="Message" required="" class="textarea w-input"></textarea>
                            <input type="submit" value="ENVOYER MON PROJET" data-wait="Please wait..." class="btn w-button">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SECTION FAQ -->
    <div class="section section-white">
        <div class="w-container">
            <h2 class="heading-large">Questions <span class="highlight-blue">fréquentes</span></h2>
            
            <div class="faq-item">
                <h3 class="faq-question">Combien de temps pour créer ma landing page ?</h3>
                <div class="faq-answer">24h chrono ! Dès réception de tes informations (logo, textes, couleurs), on livre ta landing page en moins de 24h. C'est notre promesse.</div>
            </div>
            
            <div class="faq-item">
                <h3 class="faq-question">Que se passe-t-il si je ne suis pas satisfait ?</h3>
                <div class="faq-answer">Impossible avec notre maquette gratuite ! Tu valides le design avant qu'on commence la production. Si ça ne te plaît pas, tu paies rien.</div>
            </div>
            
            <div class="faq-item">
                <h3 class="faq-question">Est-ce que je peux modifier le site après ?</h3>
                <div class="faq-answer">Bien sûr ! Tu auras accès à une interface simple pour modifier tes textes, prix et informations sans toucher au code.</div>
            </div>
            
            <div class="faq-item">
                <h3 class="faq-question">Combien ça coûte l'hébergement ?</h3>
                <div class="faq-answer">~5€/mois sur Netlify (tu paies directement). On configure tout pour toi. Plus notre méthode domaine à 1€/an.</div>
            </div>
            
            <div class="faq-item">
                <h3 class="faq-question">C'est adapté à tous les secteurs ?</h3>
                <div class="faq-answer">Oui ! E-commerce, consulting, coaching, SaaS, formations... On adapte le copywriting et design à ton secteur spécifique.</div>
            </div>
            
            <div class="faq-item">
                <h3 class="faq-question">Je récupère les fichiers du site ?</h3>
                <div class="faq-answer">Oui, tu es propriétaire à 100%. Code source, fichiers, tout t'appartient. Liberté totale.</div>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <div class="section section-dark footer">
        <div class="w-container">
            <h3 class="heading-medium">ProLanding</h3>
            <div>Landing pages qui convertissent • Livrées en 24h</div>
            <div class="footer-links">
                <a href="mailto:contact@prolanding.fr">Email</a>
                <a href="tel:+33627596376">Téléphone</a>
                <a href="https://wa.me/33627596376" target="_blank">WhatsApp</a>
            </div>
        </div>
    </div>

    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67890"></script>
    <script src="https://uploads-ssl.webflow.com/67890/js/webflow.js" type="text/javascript"></script>
</body>
</html>`;

// Créer le fichier de sortie
const outputPath = path.join(__dirname, '../IMPORT-WORDPRESS-WEBFLOW/webflow-ready.html');
fs.writeFileSync(outputPath, webflowTemplate);

console.log('✅ Fichier Webflow généré : webflow-ready.html');
console.log('');
console.log('📋 ÉTAPES RAPIDES POUR WEBFLOW :');
console.log('');
console.log('1. Créer un nouveau projet Webflow');
console.log('2. Copier le contenu de webflow-ready.html');
console.log('3. Dans Webflow Designer :');
console.log('   - Settings > Custom Code > Head Code');
console.log('   - Coller le CSS (entre les balises <style>)');
console.log('4. Recréer la structure HTML dans le Designer');
console.log('5. Publier !');
console.log('');
console.log('🎯 RÉSULTAT : Site Webflow en 30 minutes max');