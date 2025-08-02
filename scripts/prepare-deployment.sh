#!/bin/bash

echo "🚀 Preparing deployment for static hosting..."

# Check if dist/public exists
if [ ! -d "dist/public" ]; then
    echo "❌ Error: dist/public directory not found. Please run 'npm run build' first."
    exit 1
fi

echo "📁 Found dist/public directory"

# Copy all files from dist/public to dist root
echo "📋 Copying files from dist/public to dist root..."
cp -r dist/public/* dist/

# Remove the public directory after copying
echo "🗑️  Removing dist/public directory..."
rm -rf dist/public

echo "✅ Deployment preparation complete!"
echo "Files are now in the correct structure for static deployment:"
echo "- index.html is now at dist/index.html"
echo "- All assets are properly organized in dist/"