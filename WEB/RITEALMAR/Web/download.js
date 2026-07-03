import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://ritealmar.es';
const outDir = path.join(__dirname, 'dist_clean');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
  fs.mkdirSync(path.join(outDir, 'assets'));
}

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync(path.join(outDir, 'index.html'), data);
    
    // Find JS files
    const jsMatches = data.match(/href="([^"]+\.css)"|src="([^"]+\.js)"/g);
    if (jsMatches) {
      jsMatches.forEach(match => {
        const fileUrl = match.split('"')[1];
        const fileName = fileUrl.split('/').pop();
        const fullUrl = fileUrl.startsWith('http') ? fileUrl : url + (fileUrl.startsWith('/') ? '' : '/') + fileUrl;
        
        console.log('Downloading', fullUrl);
        https.get(fullUrl, (res2) => {
          let fileData = '';
          res2.on('data', (c) => fileData += c);
          res2.on('end', () => {
            fs.writeFileSync(path.join(outDir, 'assets', fileName), fileData);
            console.log('Saved', fileName);
          });
        });
      });
    }
  });
}).on('error', (e) => {
  console.error(e);
});
