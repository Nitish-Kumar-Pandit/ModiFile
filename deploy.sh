#!/bin/bash

# ModiFile Deployment Script for Vercel
echo "🚀 Starting ModiFile deployment to Vercel..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
    if [ $? -eq 0 ]; then
        print_success "Vercel CLI installed successfully!"
    else
        print_error "Failed to install Vercel CLI. Please install manually: npm install -g vercel"
        exit 1
    fi
fi

# Pre-deployment checks
print_status "Running pre-deployment checks..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Run linting
print_status "Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    print_warning "Linting issues found. Attempting to fix..."
    npm run lint:fix
fi

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check
if [ $? -ne 0 ]; then
    print_error "TypeScript errors found. Please fix them before deploying."
    exit 1
fi

# Test build locally
print_status "Testing local build..."
npm run build
if [ $? -ne 0 ]; then
    print_error "Build failed. Please fix build errors before deploying."
    exit 1
fi

print_success "All pre-deployment checks passed!"

# Deploy to Vercel
print_status "Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    print_success "🎉 ModiFile deployed successfully to Vercel!"
    print_status "Your application should be available at the URL shown above."
    print_status "Don't forget to:"
    print_status "  1. Set up custom domain (if needed)"
    print_status "  2. Configure environment variables"
    print_status "  3. Set up analytics"
else
    print_error "Deployment failed. Please check the error messages above."
    exit 1
fi
