import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const js = fs.readFileSync(p, 'utf8');

const idx = js.indexOf('nA.map(');
const start = Math.max(0, idx + 400); // skip the first part we already saw
const end = Math.min(js.length, idx + 1400);
console.log(js.substring(start, end));
