import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imagesToProcess = [
  'public/logo-fondo.jpg',
  'public/almar.jpg',
  'src/assets/almar.jpg',
  'public/aurenta.jpg',
  'src/assets/aurenta.jpg',
  'public/panel.jpg',
  'src/assets/panel.jpg',
  'public/ritecore.jpg',
  'src/assets/ritecore.jpg',
  'public/assets/logo ritealmar.jpg'
];

async function convertToWebp() {
  console.log('🔄 Iniciando conversión a WebP...\n');
  let totalSavings = 0;

  for (const imgPath of imagesToProcess) {
    const fullPath = path.join(rootDir, imgPath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  No encontrado: ${imgPath} (saltando)`);
      continue;
    }

    const ext = path.extname(fullPath);
    const webpPath = fullPath.replace(ext, '.webp');
    
    try {
      const origSize = fs.statSync(fullPath).size;
      
      // Convertir a WebP
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const newSize = fs.statSync(webpPath).size;
      const saved = origSize - newSize;
      totalSavings += saved;
      
      console.log(`✅ Convertido: ${imgPath}`);
      console.log(`   Peso original: ${(origSize / 1024).toFixed(2)} KB`);
      console.log(`   Nuevo peso: ${(newSize / 1024).toFixed(2)} KB`);
      console.log(`   Ahorro: ${(saved / 1024).toFixed(2)} KB (${((saved/origSize)*100).toFixed(1)}%)\n`);
    } catch (err) {
      console.error(`❌ Error al convertir ${imgPath}:`, err.message);
    }
  }

  console.log('🎉 Proceso finalizado.');
  console.log(`💾 Ahorro total estimado: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
}

convertToWebp();
