import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, 'dist_clean_temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
const tempAssetsDir = path.join(tempDir, 'assets');
if (!fs.existsSync(tempAssetsDir)) fs.mkdirSync(tempAssetsDir);

const jsUrl = 'https://ritealmar.es/assets/index-j_g2zOjG.js';
const jsPath = path.join(tempAssetsDir, 'index-j_g2zOjG.js');

https.get(jsUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync(jsPath, data);
    
    // Find the array
    const idx = data.indexOf("App Inventario Altri");
    if (idx !== -1) {
      let startIdx = idx;
      while (startIdx > 0 && data[startIdx] !== '[') {
        startIdx--;
      }
      let endIdx = startIdx + 1;
      let bracketCount = 1;
      while (endIdx < data.length && bracketCount > 0) {
        if (data[endIdx] === '[') bracketCount++;
        else if (data[endIdx] === ']') bracketCount--;
        endIdx++;
      }
      
      const originalArray = data.substring(startIdx, endIdx);
      console.log("ORIGINAL ARRAY:", originalArray);
      fs.writeFileSync(path.join(__dirname, 'original_array.txt'), originalArray);
    }
  });
});
