#!/bin/bash

# Vercel Quick Start Script
# This script helps you prepare your project for Vercel deployment

set -e

echo "=== Learn and Grab - Vercel Deployment Setup ==="
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed"
    echo "Install pnpm: npm install -g pnpm"
    exit 1
fi

echo "✅ pnpm found"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
pnpm install

# Run type checks
echo ""
echo "🔍 Running type checks..."
pnpm run typecheck

# Build the project
echo ""
echo "🔨 Building project..."
pnpm run build

echo ""
echo "✅ Build successful!"
echo ""
echo "=== Next Steps ==="
echo "1. Commit your changes:"
echo "   git add ."
echo "   git commit -m 'Configure for Vercel deployment'"
echo ""
echo "2. Push to GitHub:"
echo "   git push origin main"
echo ""
echo "3. Go to https://vercel.com and import your GitHub repository"
echo ""
echo "4. Vercel will automatically detect the configuration and deploy!"
echo ""
echo "For more details, see VERCEL_DEPLOYMENT.md"
