const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const jsContent = fs.readFileSync(jsPath, 'utf8');

const index = jsContent.indexOf('App Inventario');
if (index !== -1) {
  // Extract 1000 characters around it
  const start = Math.max(0, index - 500);
  const end = Math.min(jsContent.length, index + 500);
  const snippet = jsContent.substring(start, end);
  
  fs.writeFileSync(path.join(__dirname, 'snippet.txt'), snippet);
  console.log('Snippet saved to snippet.txt');
} else {
  console.log('Not found');
}
