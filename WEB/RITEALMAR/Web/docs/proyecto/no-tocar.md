# Archivos y Funcionalidades Intocables

Para mantener la estabilidad actual en producción y evitar regresiones de compilación, existe una **lista clara de cosas que no deben tocarse salvo necesidad real comprobada**:

- `src/App.tsx` (Rutas estables).
- `src/main.tsx` (Punto de entrada de la app).
- `vite.config.ts` (Configuración de build).
- Configuraciones de **Cloudflare**.
- La lógica de `lazyWithRetry`.
- Componentes envoltorios de `Suspense`.
- Las **rutas funcionando** actualmente en el router.
- El **formulario de auditoría** (lógica de envío).
- La **lógica matemática y de estado** de las 5 herramientas de IA.
- El sistema de generación de **PDF (debe permanecer eliminado temporalmente)**.
- El **sitemap y robots.txt** (a no ser que se desplieguen nuevas rutas finales).
- Los trackers de **analítica básica**.
- El **diseño Dark Neon** (no alterar paletas, sombras o estructura de Tailwind).

> **IMPORTANTE:** No reactivar el PDF hasta tener una solución probada visualmente en navegador.
