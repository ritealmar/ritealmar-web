import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://f55bed3d.ritealmar.pages.dev';
const outDir = path.join(__dirname, 'dist_clean');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
const assetsDir = path.join(outDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const fixedProjects = [
  `{n:"ALMAR",u:"https://almar-fsm.llargo34.workers.dev",img:"https://image.thum.io/get/width/800/crop/600/https://almar-fsm.llargo34.workers.dev",d:"Sistema FSM para gestión de técnicos, almacenes y traspasos.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📦"}),h:"Gestión 360"}`,
  
  `{n:"Aurenta App",u:"https://aurenta-app.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://aurenta-app.pages.dev/",d:"Centralita inteligente y gestión de llamadas con IA.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📞"}),h:"IA Vocal"}`,
  
  `{n:"RITECORE",u:"https://altri-pro.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://altri-pro.pages.dev/",d:"Chatbot avanzado para automatización de atención al cliente.",i:()=>f.jsx("span",{style:{fontSize:24},children:"🤖"}),h:"Soporte 24/7"}`,
  
  `{n:"Panel Central",u:"https://53b7d556.web-altri.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://53b7d556.web-altri.pages.dev/",d:"Panel de control centralizado para analítica y gestión.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📊"}),h:"Analítica"}`
];

const replacement = "[" + fixedProjects.join(",") + "]";

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
        const fullUrl = url + (fileUrl.startsWith('/') ? '' : '/') + fileUrl;
        
        console.log('Downloading', fullUrl);
        https.get(fullUrl, (res2) => {
          let fileData = '';
          res2.on('data', (c) => fileData += c);
          res2.on('end', () => {
            if (fileName.endsWith('.js')) {
              // Find the array to replace
              const idx = fileData.indexOf('App Inventario Altri');
              if (idx !== -1) {
                let startIdx = idx;
                while (startIdx > 0 && fileData[startIdx] !== '[') startIdx--;
                
                let endIdx = startIdx + 1;
                let bracketCount = 1;
                while (endIdx < fileData.length && bracketCount > 0) {
                  if (fileData[endIdx] === '[') bracketCount++;
                  else if (fileData[endIdx] === ']') bracketCount--;
                  endIdx++;
                }
                
                const originalArray = fileData.substring(startIdx, endIdx);
                fileData = fileData.replace(originalArray, replacement);
                console.log("¡Reemplazo exitoso en", fileName, "!");
              } else {
                console.log("No se encontró 'App Inventario Altri' en", fileName);
              }
            }
            fs.writeFileSync(path.join(assetsDir, fileName), fileData);
            console.log('Saved', fileName);
          });
        });
      });
    }
  });
}).on('error', (e) => {
  console.error(e);
});
