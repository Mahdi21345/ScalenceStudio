#!/bin/bash

# Prepare build for static deployment
# This script moves files from dist/public to dist/ to match deployment expectations

echo "🚀 Preparing build for deployment..."

# Check if dist/public exists
if [ ! -d "dist/public" ]; then
    echo "❌ Build output not found at dist/public/"
    echo "Make sure to run 'npm run build' first"
    exit 1
fi

echo "📁 Moving build files from dist/public/ to dist/..."

# Use rsync to merge directories and files properly
rsync -av dist/public/ dist/ --remove-source-files

# Remove the now-empty public directory structure
find dist/public -type d -empty -delete 2>/dev/null || true
rmdir dist/public 2>/dev/null || true

echo "✅ Build prepared for deployment!"
echo "📦 Static files are now available directly in dist/"
echo "🌐 index.html is now at dist/index.html as expected by deployment"