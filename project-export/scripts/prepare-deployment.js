#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readdir, copyFile, mkdir, rm, stat } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyDir(src, dest) {
  try {
    await mkdir(dest, { recursive: true });
    
    const entries = await readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = resolve(src, entry.name);
      const destPath = resolve(dest, entry.name);
      
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    console.error(`Error copying directory ${src} to ${dest}:`, error);
    throw error;
  }
}

async function prepareDeployment() {
  const projectRoot = resolve(__dirname, '..');
  const distPublicPath = resolve(projectRoot, 'dist', 'public');
  const distPath = resolve(projectRoot, 'dist');
  
  console.log('🚀 Preparing deployment...');
  console.log(`Source: ${distPublicPath}`);
  console.log(`Destination: ${distPath}`);
  
  try {
    // Check if dist/public exists
    const distPublicStat = await stat(distPublicPath);
    if (!distPublicStat.isDirectory()) {
      throw new Error('dist/public is not a directory');
    }
    
    console.log('📁 Found dist/public directory');
    
    // Copy all files from dist/public to dist root
    const entries = await readdir(distPublicPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = resolve(distPublicPath, entry.name);
      const destPath = resolve(distPath, entry.name);
      
      console.log(`📋 Copying ${entry.name}...`);
      
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await copyFile(srcPath, destPath);
      }
    }
    
    // Remove the public directory after copying
    console.log('🗑️  Removing dist/public directory...');
    await rm(distPublicPath, { recursive: true, force: true });
    
    console.log('✅ Deployment preparation complete!');
    console.log('Files are now in the correct structure for static deployment');
    
  } catch (error) {
    console.error('❌ Error preparing deployment:', error.message);
    process.exit(1);
  }
}

prepareDeployment();