import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsPath = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

const newProjects = [
  {
    title: "ALMAR",
    category: "Gestión de Almacén",
    description: "Sistema FSM para gestión de técnicos, almacenes y traspasos.",
    link: "https://almar-fsm.llargo34.workers.dev"
  },
  {
    title: "Aurenta App",
    category: "Callcenter",
    description: "Centralita inteligente y gestión de llamadas con IA.",
    link: "https://aurenta-app.pages.dev/"
  },
  {
    title: "RITECORE",
    category: "Chatbox",
    description: "Chatbot avanzado para automatización de atención al cliente.",
    link: "https://altri-pro.pages.dev/"
  },
  {
    title: "Panel Central",
    category: "Dashboard",
    description: "Panel de control centralizado para analítica y gestión.",
    link: "https://53b7d556.web-altri.pages.dev/"
  }
];

// Reconstruct it using minified-like object format
const replacement = "[" + newProjects.map(p => `{title:"${p.title}",category:"${p.category}",description:"${p.description}",link:"${p.link}"}`).join(",") + "]";

// Find where the array starts and ends.
// Let's search for "App Inventario Altri"
const idx = jsContent.indexOf("App Inventario Altri");
if (idx !== -1) {
  // Find the opening bracket of this array
  let startIdx = idx;
  while (startIdx > 0 && jsContent[startIdx] !== '[') {
    startIdx--;
  }
  
  // Find the closing bracket of this array
  let endIdx = idx;
  let bracketCount = 1; // Since we found '['
  endIdx = startIdx + 1;
  while (endIdx < jsContent.length && bracketCount > 0) {
    if (jsContent[endIdx] === '[') bracketCount++;
    else if (jsContent[endIdx] === ']') bracketCount--;
    endIdx++;
  }
  
  const originalArray = jsContent.substring(startIdx, endIdx);
  
  jsContent = jsContent.replace(originalArray, replacement);
  fs.writeFileSync(jsPath, jsContent);
  console.log("¡Portafolio actualizado correctamente en el archivo JS! Puedes subir a Cloudflare.");
} else {
  console.log("No se pudo encontrar el texto en el JS.");
}
