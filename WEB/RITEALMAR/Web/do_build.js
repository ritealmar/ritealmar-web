import { exec } from 'child_process';
import fs from 'fs';

console.log("Ejecutando build local, por favor espera...");

exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error("=== ERROR DURANTE EL BUILD ===");
    console.error(error.message);
    console.error(stdout);
    console.error(stderr);
    fs.writeFileSync('build_log.txt', error.message + '\n' + stdout + '\n' + stderr);
    console.log("Se guardó el error en build_log.txt. Por favor, avisa al asistente.");
    return;
  }
  console.log("=== BUILD EXITOSO ===");
  console.log(stdout);
  console.log("¡Todo listo! Ahora ejecuta: npx wrangler pages deploy dist --branch main");
});
