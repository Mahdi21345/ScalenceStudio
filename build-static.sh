#!/bin/bash

# Build script for static deployment
# This script ensures the build outputs index.html directly in dist/ for static deployment

echo "Building application for static deployment..."

# Run the standard build process
npm run build

# Check if dist/public exists (from vite build)
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist/ for static deployment..."
    
    # Move all files from dist/public to dist/
    cp -r dist/public/* dist/
    
    # Remove the now-empty public directory
    rm -rf dist/public
    
    echo "✅ Build completed successfully!"
    echo "Files are now correctly positioned for static deployment:"
    echo "  - index.html is at dist/index.html"
    echo "  - Assets are directly in dist/"
else
    echo "❌ Error: dist/public directory not found after build"
    exit 1
fi