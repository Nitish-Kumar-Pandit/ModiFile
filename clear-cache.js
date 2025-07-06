#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Clearing Next.js cache and build files...\n');

const pathsToDelete = [
  '.next',
  'node_modules/.cache',
  '.turbo',
  'out',
  'dist',
  '.vercel',
  '.swc'
];

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`✅ Deleted: ${folderPath}`);
    return true;
  }
  return false;
}

let deletedCount = 0;

pathsToDelete.forEach(folderPath => {
  if (deleteFolderRecursive(folderPath)) {
    deletedCount++;
  }
});

console.log(`\n🎉 Cache clearing complete! Deleted ${deletedCount} cache directories.`);
console.log('\n📋 Next steps:');
console.log('1. Run: npm install (or yarn install)');
console.log('2. Run: npm run dev (or yarn dev)');
console.log('3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)');
console.log('4. Clear browser cache and cookies for localhost:3000');
