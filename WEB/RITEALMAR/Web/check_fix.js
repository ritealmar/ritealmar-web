import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-j_g2zOjG.js');
const js = fs.readFileSync(p, 'utf8');

const idx = js.indexOf('ALMAR');
if (idx !== -1) {
  let startIdx = Math.max(0, idx - 100);
  let endIdx = Math.min(js.length, idx + 400);
  console.log("=== CURRENT CODE AROUND ALMAR ===");
  console.log(js.substring(startIdx, endIdx));
  console.log("=================================");
} else {
  console.log("NO SE ENCONTRÓ ALMAR.");
}
