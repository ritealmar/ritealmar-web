const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outputFile = path.join(rootDir, 'codigo_completo_para_auditoria.txt');

const includeExtensions = ['.ts', '.tsx', '.css', '.html', '.json', '.toml', '.js'];
const excludeDirs = ['node_modules', 'dist', 'dist_clean', '.wrangler', '.git', 'aistudio', 'firebase-functions', 'public', 'assets'];
const importantRootFiles = ['package.json', 'index.html', 'vite.config.ts', 'worker.ts', 'wrangler.toml', 'firebase.ts', '.env.example'];

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && !excludeDirs.includes(name)) {
            walkSync(filePath, callback);
        }
    });
}

let output = '';

// Add root files
importantRootFiles.forEach(file => {
    const fullPath = path.join(rootDir, file);
    if (fs.existsSync(fullPath)) {
        output += `\n\n==========================================================\n`;
        output += `FILE: ${file}\n`;
        output += `==========================================================\n\n`;
        output += fs.readFileSync(fullPath, 'utf8');
    }
});

// Add src files
const srcDir = path.join(rootDir, 'src');
if (fs.existsSync(srcDir)) {
    walkSync(srcDir, function (filePath, stat) {
        const ext = path.extname(filePath);
        if (includeExtensions.includes(ext)) {
            const relPath = path.relative(rootDir, filePath);
            output += `\n\n==========================================================\n`;
            output += `FILE: ${relPath}\n`;
            output += `==========================================================\n\n`;
            output += fs.readFileSync(filePath, 'utf8');
        }
    });
}

fs.writeFileSync(outputFile, output);
console.log(`\n✅ ¡Éxito! Todo el código se ha guardado en el archivo:\n${outputFile}\n`);
