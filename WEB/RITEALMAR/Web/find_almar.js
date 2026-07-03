import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const js = fs.readFileSync(p, 'utf8');

let idx = 0;
while ((idx = js.indexOf('ALMAR', idx)) !== -1) {
  console.log("=== MATCH ===");
  console.log(js.substring(Math.max(0, idx - 50), Math.min(js.length, idx + 200)));
  idx += 5;
}
