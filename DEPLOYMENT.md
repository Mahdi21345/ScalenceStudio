# Deployment Instructions

## Static Deployment Fix

The build process creates files in `dist/public/` but static deployment expects `index.html` directly in `dist/`. This has been resolved with deployment preparation scripts.

## How to Deploy

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Prepare for static deployment:**
   ```bash
   ./scripts/prepare-deployment.sh
   ```
   
   Or alternatively, using Node.js:
   ```bash
   node scripts/prepare-deployment.js
   ```

3. **Deploy:**
   The `dist/` directory now contains the properly structured files for static deployment with `index.html` at the root level.

## What the Script Does

- Copies all files from `dist/public/` to `dist/`
- Removes the empty `dist/public/` directory
- Ensures `index.html` is at `dist/index.html` as expected by static deployment

## File Structure After Preparation

```
dist/
├── index.html          # Main HTML file (moved from dist/public/)
├── assets/             # Static assets (CSS, JS, images)
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── index.js            # Server file (for non-static deployments)
```

This structure is compatible with Replit's static deployment requirements.