const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const js = fs.readFileSync(p, 'utf8');

// Find the component that maps over the array
const idx = js.indexOf('ALMAR');
const start = Math.max(0, idx - 1000);
const end = Math.min(js.length, idx + 1000);
fs.writeFileSync(path.join(__dirname, 'snippet.txt'), js.substring(start, end));
