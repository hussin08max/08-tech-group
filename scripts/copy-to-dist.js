const fs = require('fs');
const path = require('path');

// Copy Next.js output (out/) to dist/ for Vercel static hosting
const sourceDir = path.join(process.cwd(), 'out');
const destDir = path.join(process.cwd(), 'dist');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // Ensure destination directory exists
    const destParent = path.dirname(dest);
    if (!fs.existsSync(destParent)) {
      fs.mkdirSync(destParent, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

if (fs.existsSync(sourceDir)) {
  // Remove existing dist folder
  if (fs.existsSync(destDir)) {
    removeDir(destDir);
  }
  
  // Copy out to dist
  copyRecursiveSync(sourceDir, destDir);
  console.log('✅ Successfully copied /out to /dist');
  console.log(`📦 Static files ready in /dist for Vercel deployment`);
} else {
  console.error('❌ Error: /out directory not found. Run "next build" first.');
  process.exit(1);
}
