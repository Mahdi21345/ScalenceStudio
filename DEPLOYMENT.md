# Deployment Guide

## Issue Resolved
The deployment issue has been fixed where the build system was outputting static files to `dist/public/` but the deployment system expected them directly in `dist/`.

## Build Process
1. **Standard Build**: `npm run build`
   - Builds the React frontend using Vite
   - Compiles the Express server
   - Outputs frontend files to `dist/public/`

2. **Deployment Preparation**: `node scripts/build-deploy.js`
   - Moves all files from `dist/public/` to `dist/`
   - Ensures `index.html` is at `dist/index.html`
   - Merges asset directories properly
   - Cleans up the temporary `public/` directory

## Complete Deployment Workflow
```bash
# Build the application
npm run build

# Prepare for deployment (move files to correct location)
node scripts/build-deploy.js

# Deploy (using Replit's deployment system)
# The deploy button will now find index.html at dist/index.html as expected
```

## Files Structure After Deployment Preparation
```
dist/
├── index.html          # Main HTML file (required at root for static deployment)
├── index.js           # Compiled server code
└── assets/            # CSS, JS, and font assets
    ├── index-[hash].css
    ├── index-[hash].js
    └── font files...
```

## Scripts Available
- `scripts/build-deploy.js` - Node.js script to prepare build for deployment
- `scripts/prepare-deployment.sh` - Alternative bash script (if needed)

## Notes
- The Vite configuration outputs to `dist/public/` and cannot be modified
- The deployment preparation script handles the file restructuring
- All assets maintain their proper relative paths after the move
- The server configuration works with both development and production builds