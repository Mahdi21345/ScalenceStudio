#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'dist', 'public');
const targetDir = path.join(projectRoot, 'dist');

/**
 * Recursively move files from source to target directory, merging directories
 */
function moveDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    return false;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively handle subdirectories
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      moveDir(srcPath, destPath);
    } else {
      // Move the file, overwriting if it exists
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
      }
      fs.renameSync(srcPath, destPath);
    }
  }

  // Remove source directory if it's empty
  try {
    fs.rmdirSync(src);
  } catch (error) {
    // Directory might not be empty, that's okay
  }

  return true;
}

/**
 * Remove directory recursively
 */
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

console.log('🚀 Preparing build for deployment...');

// Check if the build output exists
if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Build output not found at: ${sourceDir}`);
  console.error('Make sure to run "npm run build" first');
  process.exit(1);
}

console.log('📁 Moving build files from dist/public/ to dist/...');

// Move all files from dist/public to dist root
if (moveDir(sourceDir, targetDir)) {
  console.log('✅ Successfully moved build files');
  
  // Remove the public subdirectory after successful move
  console.log('🧹 Cleaning up dist/public/ directory...');
  removeDir(sourceDir);
  
  console.log('✅ Build prepared for deployment!');
  console.log('📦 Static files are now available directly in dist/');
} else {
  console.error('❌ Failed to move build files');
  process.exit(1);
}