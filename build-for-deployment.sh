#!/bin/bash

# Build script for static deployment
# This script ensures the build outputs index.html directly in dist/ for static deployment

echo "🚀 Building ProLanding for static deployment..."

# Clean any existing build
if [ -d "dist" ]; then
    echo "🧹 Cleaning existing build..."
    rm -rf dist
fi

# Run the standard build process
echo "📦 Running build process..."
npm run build

# Check if dist/public exists (from vite build)
if [ -d "dist/public" ]; then
    echo "📁 Moving files from dist/public to dist/ for static deployment..."
    
    # Move all files from dist/public to dist/
    cp -r dist/public/* dist/
    
    # Remove the now-empty public directory
    rm -rf dist/public
    
    echo "✅ Build completed successfully!"
    echo ""
    echo "📋 Deployment structure:"
    echo "  ✓ index.html is at dist/index.html"
    echo "  ✓ Assets are in dist/assets/"
    echo "  ✓ Server bundle is at dist/index.js"
    echo ""
    echo "🎯 Ready for static deployment!"
    echo "The dist/ directory now contains the correct structure for deployment."
else
    echo "❌ Error: dist/public directory not found after build"
    exit 1
fi