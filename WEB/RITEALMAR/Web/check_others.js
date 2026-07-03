import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const js = fs.readFileSync(p, 'utf8');

console.log("Includes Aurenta:", js.includes("Aurenta App"));
console.log("Includes RITECORE:", js.includes("RITECORE"));
console.log("Includes Panel Central:", js.includes("Panel Central"));
