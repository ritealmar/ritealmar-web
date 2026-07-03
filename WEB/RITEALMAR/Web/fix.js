import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsPath = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

// The new PERFECT array structure based on the snippet.
// w.n = name (title)
// w.u = url (link)
// w.img = background image
// w.d = description
// w.i = icon component -> we will use a safe functional component returning an emoji
// w.h = highlight stat (text bottom left)

const fixedProjects = [
  `{n:"ALMAR",u:"https://almar-fsm.llargo34.workers.dev",img:"https://image.thum.io/get/width/800/crop/600/https://almar-fsm.llargo34.workers.dev",d:"Sistema FSM para gestión de técnicos, almacenes y traspasos.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📦"}),h:"Gestión 360"}`,
  
  `{n:"Aurenta App",u:"https://aurenta-app.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://aurenta-app.pages.dev/",d:"Centralita inteligente y gestión de llamadas con IA.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📞"}),h:"IA Vocal"}`,
  
  `{n:"RITECORE",u:"https://altri-pro.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://altri-pro.pages.dev/",d:"Chatbot avanzado para automatización de atención al cliente.",i:()=>f.jsx("span",{style:{fontSize:24},children:"🤖"}),h:"Soporte 24/7"}`,
  
  `{n:"Panel Central",u:"https://53b7d556.web-altri.pages.dev/",img:"https://image.thum.io/get/width/800/crop/600/https://53b7d556.web-altri.pages.dev/",d:"Panel de control centralizado para analítica y gestión.",i:()=>f.jsx("span",{style:{fontSize:24},children:"📊"}),h:"Analítica"}`
];

const replacement = "[" + fixedProjects.join(",") + "]";

// We need to replace the old broken array we inserted earlier:
const brokenArray = `[{title:"ALMAR",category:"Gestión de Almacén",description:"Sistema FSM para gestión de técnicos, almacenes y traspasos.",link:"https://almar-fsm.llargo34.workers.dev"},{title:"Aurenta App",category:"Callcenter",description:"Centralita inteligente y gestión de llamadas con IA.",link:"https://aurenta-app.pages.dev/"},{title:"RITECORE",category:"Chatbox",description:"Chatbot avanzado para automatización de atención al cliente.",link:"https://altri-pro.pages.dev/"},{title:"Panel Central",category:"Dashboard",description:"Panel de control centralizado para analítica y gestión.",link:"https://53b7d556.web-altri.pages.dev/"}]`;

if (jsContent.includes(brokenArray)) {
  jsContent = jsContent.replace(brokenArray, replacement);
  fs.writeFileSync(jsPath, jsContent);
  console.log("¡CÓDIGO ARREGLADO CON ÉXITO! La web ya no explotará.");
} else {
  // Try dynamic find if exact match fails
  const idx = jsContent.indexOf('ALMAR');
  if (idx !== -1) {
    let startIdx = idx;
    while (startIdx > 0 && jsContent[startIdx] !== '[') startIdx--;
    
    let endIdx = startIdx + 1;
    let bracketCount = 1;
    while (endIdx < jsContent.length && bracketCount > 0) {
      if (jsContent[endIdx] === '[') bracketCount++;
      else if (jsContent[endIdx] === ']') bracketCount--;
      endIdx++;
    }
    const originalArray = jsContent.substring(startIdx, endIdx);
    jsContent = jsContent.replace(originalArray, replacement);
    fs.writeFileSync(jsPath, jsContent);
    console.log("¡CÓDIGO ARREGLADO (BÚSQUEDA DINÁMICA)! La web ya no explotará.");
  } else {
    console.log("Error: No se ha podido encontrar el código roto para reemplazar.");
  }
}
