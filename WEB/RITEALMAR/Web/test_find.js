import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-YVDsNPvx.js');
let js = fs.readFileSync(p, 'utf8');

const idx = js.indexOf('wh=');
const excerpt = js.substring(Math.max(0, idx - 50), idx + 1000);
fs.writeFileSync(path.join(__dirname, 'debug_wh.txt'), excerpt);
