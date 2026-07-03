import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-YVDsNPvx.js');
const js = fs.readFileSync(p, 'utf8');

const idx = js.indexOf('Así ayudamos a negocios como el tuyo');
if (idx !== -1) {
  let startIdx = Math.max(0, idx - 50);
  let endIdx = Math.min(js.length, idx + 1500); // look ahead for the array
  console.log("=== CODE AROUND 'Así ayudamos...' ===");
  console.log(js.substring(startIdx, endIdx));
  console.log("=====================================");
} else {
  console.log("NO SE ENCONTRÓ.");
}
