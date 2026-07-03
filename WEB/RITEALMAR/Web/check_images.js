import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/Usuario/.gemini/antigravity/brain/dc5251aa-1036-4692-8a07-92b95a1b614a';

const files = fs.readdirSync(brainDir);
for (const file of files) {
  if (file.endsWith('.png') || file.endsWith('.jpg')) {
    const stats = fs.statSync(path.join(brainDir, file));
    console.log(`${file}: ${stats.size} bytes`);
  }
}
