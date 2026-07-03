import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, 'functions');
const newPath = path.join(__dirname, 'firebase-functions');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('Carpeta "functions" renombrada a "firebase-functions" exitosamente.');
} else {
  console.log('La carpeta "functions" ya no existe o ya fue renombrada.');
}
