import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brainDir = 'C:/Users/Usuario/.gemini/antigravity/brain/dc5251aa-1036-4692-8a07-92b95a1b614a';
const targetDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

try {
  // Copiamos las imágenes actualizadas con sus nuevos IDs
  fs.copyFileSync(path.join(brainDir, 'media__1780251213023.png'), path.join(targetDir, 'stylio.png'));
  fs.copyFileSync(path.join(brainDir, 'media__1780251218097.jpg'), path.join(targetDir, 'ritecore.jpg'));
  fs.copyFileSync(path.join(brainDir, 'media__1780254531840.jpg'), path.join(targetDir, 'aurenta.jpg')); // NUEVA AURENTA
  fs.copyFileSync(path.join(brainDir, 'media__1780254524269.jpg'), path.join(targetDir, 'almar.jpg')); // NUEVO ALMAR
  
  // Copiamos la nueva imagen de Altri Telecom para el Panel Central
  fs.copyFileSync(path.join(brainDir, 'media__1780254043357.png'), path.join(targetDir, 'panel.png'));

  console.log('✅ Imágenes copiadas a src/assets/. ¡Listo para importar!');
} catch (e) {
  console.error('Error al copiar las imágenes:', e);
}
