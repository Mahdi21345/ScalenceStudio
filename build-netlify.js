#!/usr/bin/env node

// Script de build spécifique pour Netlify
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Netlify deployment...');

try {
  // Build le frontend
  console.log('📦 Building frontend...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Utilise le script existant pour préparer le déploiement
  console.log('📂 Preparing deployment structure...');
  execSync('node scripts/build-deploy.js', { stdio: 'inherit' });
  
  // Copie les fichiers CMS vers dist
  console.log('🎛️ Copying CMS files...');
  if (fs.existsSync('public/admin')) {
    execSync('cp -r public/admin dist/', { stdio: 'inherit' });
  }
  if (fs.existsSync('content')) {
    execSync('cp -r content dist/', { stdio: 'inherit' });
  }
  
  // Vérifie que index.html existe à la racine de dist
  if (fs.existsSync('dist/index.html')) {
    console.log('✅ Build completed successfully!');
    console.log('📁 Files ready for deployment in ./dist/');
    console.log('🎛️ CMS accessible at: /admin/');
  } else {
    throw new Error('index.html not found in dist directory');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}