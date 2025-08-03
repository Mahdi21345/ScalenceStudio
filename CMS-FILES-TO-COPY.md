# 📋 Fichiers CMS à copier sur GitHub

## 🎯 Dossiers et fichiers à ajouter à ton repo GitHub

### 1. Dossier `public/admin/`
```
public/admin/index.html
public/admin/config.yml
```

### 2. Dossier `content/`
```
content/hero.json
content/pricing.json
content/contact.json
content/faq.json
```

## 📝 Contenu des fichiers

### public/admin/index.html
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  <script>
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  </script>
</body>
</html>
```

### public/admin/config.yml
Voir le fichier dans public/admin/config.yml de ce projet

### content/*.json
Voir les fichiers dans le dossier content/ de ce projet

## 🚀 Une fois copié sur GitHub :

1. **Netlify rebuild automatiquement**
2. **Va sur : `https://scalencez.netlify.app/admin/`**
3. **Interface CMS disponible !**

## 👤 Accès client :

1. **Netlify Identity > Invite users**
2. **Email du client**
3. **Il se connecte sur `scalencez.netlify.app/admin/`**
4. **Peut modifier :**
   - Titre et description
   - Prix 499€
   - Contact info
   - FAQ