const fs = require('fs');
const path = require('path');

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
    console.log(`✅ Removed ${dir}`);
  }
}

const dirsToRemove = [
  path.join(process.cwd(), '.next'),
  path.join(process.cwd(), 'out'),
  path.join(process.cwd(), 'dist'),
];

dirsToRemove.forEach(dir => removeDir(dir));
console.log('🧹 Cleanup complete!');
