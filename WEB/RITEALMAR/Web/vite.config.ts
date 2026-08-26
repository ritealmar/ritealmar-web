import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import {defineConfig, loadEnv} from 'vite';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
    return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': projectDir,
      },
    },
    build: {
      rollupOptions: {
        external: [/functions/],
      },
    },
    optimizeDeps: {
      exclude: ['firebase/functions', 'functions'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
