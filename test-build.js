#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing ModiFile build for deployment...\n');

// Colors for output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

try {
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    throw new Error('package.json not found. Run this from the project root.');
  }

  log('blue', '1. Checking dependencies...');
  execSync('npm list --depth=0', { stdio: 'pipe' });
  log('green', '✅ Dependencies OK');

  log('blue', '2. Running type check...');
  execSync('npm run type-check', { stdio: 'pipe' });
  log('green', '✅ TypeScript OK');

  log('blue', '3. Running linter...');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    log('green', '✅ Linting OK');
  } catch (e) {
    log('yellow', '⚠️  Linting warnings (non-blocking)');
  }

  log('blue', '4. Testing build...');
  execSync('npm run build', { stdio: 'inherit' });
  log('green', '✅ Build successful!');

  // Check if .next directory was created
  if (fs.existsSync('.next')) {
    log('green', '✅ Build artifacts created');
  } else {
    throw new Error('Build artifacts not found');
  }

  log('green', '\n🎉 ModiFile is ready for deployment!');
  log('blue', '\nNext steps:');
  log('blue', '  1. Push to GitHub: git push origin main');
  log('blue', '  2. Deploy to Vercel: vercel --prod');

} catch (error) {
  log('red', `\n❌ Build test failed: ${error.message}`);
  process.exit(1);
}
