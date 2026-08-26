# Auditoría Técnica y Funcional — Sitio Web RITEALMAR

Fecha: 2026-07-22

---

**Resumen ejecutivo:**
- **Qué es:** Aplicación web corporativa de RITEALMAR orientada a servicios IA, automatizaciones, consultoría y productos SaaS.
- **Objetivo del documento:** Describir estructura, tecnologías, funcionalidades, diseño, integraciones y buenas prácticas para que otra IA pueda evaluar y emitir opinión.

**1) Información general y metadatos**
- Proyecto (package.json): [package.json](package.json#L1-L120)
- Readme con instrucciones de ejecución y mención de GEMINI API key: [README.md](README.md#L1-L60)
- Build: Vite (`npm run build`) y despliegue con Cloudflare Pages/Wrangler (`npx wrangler pages deploy dist`). Configuración en [wrangler.toml](wrangler.toml#L1-L20).

**2) Stack tecnológico**
- Framework front: React 19 + TypeScript (entrada en [src/index.tsx](src/index.tsx#L1-L40)).
- Bundler / Dev server: Vite (ver `vite` en [package.json](package.json#L1-L120)).
- Estilos: TailwindCSS con utilidades personalizadas en [src/index.css](src/index.css#L1-L220).
- Motion/animaciones: `framer-motion` (importado como `motion` en componentes como `CapabilitiesSection`).
- Iconografía: `lucide-react`.
- Procesado de imágenes / utilidades: `sharp` (devDependency).
- Cloud / Backend:
  - Cloudflare Pages + Workers (wrangler.toml, `worker.ts`).
  - Firebase Cloud Functions en `firebase-functions` (usa `@google/generative-ai`, `firebase-admin`) — ver [firebase-functions/package.json](firebase-functions/package.json#L1-L80).
- Analítica: Google Analytics 4 (GA4) implementada en [src/utils/analytics.ts](src/utils/analytics.ts#L1-L200).
- Otras dependencias observadas: `@tailwindcss/vite`, `@vitejs/plugin-react`, `wrangler`.

**3) Estructura de páginas / rutas (lista principal)**
Fuente: enrutador manual de [src/App.tsx](src/App.tsx#L1-L320).
- Home: `/`
- Servicios (rutas fijas y dinámicas): `/servicios/agentes-ia`, `/servicios/automatizacion-procesos`, etc. Además existe enrutamiento dinámico para `servicesData` (ver [src/data/servicesData.ts](src/data/servicesData.ts#L1-L200)).
- Páginas SEO y productos: `/diseno-web`, `/apps-para-empresas`, `/chatbots-ia`, `/seo-posicionamiento-web`, etc.
- Verticales y soluciones: `/clinicas`, `/inmobiliarias`, `/ecommerce`, `/constructoras`.
- Blog y casos de éxito: `/blog`, `/casos-de-exito` y sub-rutas.
- Páginas legales: `/aviso-legal`, `/privacidad`, `/cookies` (cargadas con lazy loading).
- Herramientas y recursos: `/generador-prompts-ia`, `/evaluador-madurez-ia`, `/analizador-procesos-ia`, `/calculadora-ahorro-ia`.
- Páginas dinámicas de proyectos: rutas `/proyectos/<slug>` con datos en [src/data/projectsData.ts](src/data/projectsData.ts#L1-L240).

**4) Componentes y responsabilidades clave (no exhaustivo)**
- `Navbar` — navegación principal y CTA (abre modal Calendly).
- `ModalController` / `CalendlyModal` — manejo de modales y reserva de citas via Calendly.
- `CookieBanner` — manejo de consentimiento; persiste en `localStorage` y actualiza Google Consent Mode ([src/components/CookieBanner.tsx](src/components/CookieBanner.tsx#L1-L200)).
- `AnalyticsPageTracker` — envia `page_view` si el usuario aceptó analítica ([src/utils/analytics.ts](src/utils/analytics.ts#L1-L200)).
- `WhatsAppFloatingButton` — contacto directo por WhatsApp con tracking de eventos.
- Componentes de contenido: `CapabilitiesSection`, `ServicesSection`, `Hero`, `FinalCTA`, `ROICalculator`, `LegalFooter`, `ResponsibleIASection`.
- Páginas modulares para servicios, sectores y casos de éxito (muchas cargadas con `React.lazy` y `Suspense`).

**5) Diseño, estilos y paleta**
- Sistema: TailwindCSS con utilidades personalizadas en [src/index.css](src/index.css#L1-L220).
- Fuentes: `Inter` y `JetBrains Mono` (importadas en [src/index.css](src/index.css#L1-L20)).
- Paleta principal observada:
  - Fondo oscuro: #0A1628 (html body)
  - Fondo alternativo: #030712 (usado en App root)
  - Cian principal: #00D4FF (accent/cyan)
  - Magenta / Rosa: #FF006E (btn primary / acento)
  - WhatsApp verde: #25D366 (botón flotante)
  - Textos: blancos / slate (ej. #F8FAFC / #cbd5e1)
- Estética: estilo "dark neon" con degradados cian→magenta, glass panels (blur + borders), glows y micro-interacciones (pulse, hover scale).

**6) Integraciones y servicios externos**
- Google Analytics 4 (ID: `G-ZGB3DG38K5` en el código).
- Calendly (iframe modal y enlaces `calendly.com/ritealmar`).
- WhatsApp (wa.me link) para contacto directo.
- Cloudflare (Pages + Workers) — `wrangler.toml` y `worker.ts` para funciones serverless y proxies; se recomienda usar `npx wrangler secret put` para variables sensibles.
- Firebase Cloud Functions con `@google/generative-ai` (posible uso de Google Generative API o Gemini en servidor).
- Variables/Secretos esperados: `GEMINI_API_KEY`, `RESEND_API_KEY` (comentarios en código), y configuración de Cloudflare secrets.

**7) Scripts, construcción y despliegue**
- Scripts principales en [package.json](package.json#L1-L120): `dev`, `build`, `preview`, `lint`, `publish` (utiliza `wrangler pages deploy dist`).
- Build output: `dist` o `dist_clean` (en repo hay `dist_clean/` con assets construidos).
- Despliegue: Cloudflare Pages (wrangler) + posible Worker para endpoints AI y tareas (ver `wrangler.worker.toml`).

**8) Privacidad, seguridad y cumplimiento**
- Consentimiento: Implementado con `CookieBanner` y `updateConsentMode` que ajusta `gtag('consent', ...)` — buena práctica.
- Datos expuestos: GA Measurement ID aparece en el repo (no sensible). Keys reales deben mantenerse fuera del repo y usarse en secretos en Cloudflare / variables de entorno.
- Riesgos detectados rápidamente:
  - Si los endpoints del worker o funciones usan claves en el código, mover a secretos. (Revisar `worker.ts` y funciones servidora.)
  - Revisar CORS y validación en endpoints que ejecutan llamadas a APIs generativas para evitar abusos.

**9) Calidad y performance**
- Lazy loading de páginas y chunks con `React.lazy` + `Suspense` mejora tiempo de carga inicial.
- Uso de `sharp` sugiere optimización de imágenes en build o scripts.
- Tailwind + Vite + build moderno favorecen rendimiento, pero conviene auditar imágenes, fuentes y third-party scripts (GA, Calendly) para medir impacto en LCP y CLS.

**10) Observaciones de accesibilidad**
- Existe enlace "Saltar al contenido" (`a href="#main-content"`), roles y labels en modal/cookie — indicios positivos.
- Recomendación: ejecutar Lighthouse / axe para comprobar contraste de colores, foco en modales y navegación por teclado.

**11) Recomendaciones y pautas para la IA que analizará el proyecto**
- Verificar coherencia de rutas listadas en [src/App.tsx](src/App.tsx#L1-L320) con el sitemap generado (`public/sitemap.xml`).
- Revisar `servicesData` y `projectsData` para asegurar que las páginas dinámicas están indexables y tienen metadatos SEO (titles/meta, JSON-LD).
- Revisar endpoints serverless (`worker.ts`, `firebase-functions/index.js`) para asegurar manejo de cuotas y claves.
- Pedir a la IA que evalúe: seguridad (exposición de secrets), privacidad (consent flow correcto), rendimiento (imágenes y third-party scripts), y coherencia UX (formularios, CTAs, procesos de conversión).

**12) Archivos clave para revisar manualmente**
- [src/App.tsx](src/App.tsx#L1-L320) — enrutamiento y páginas.
- [src/index.css](src/index.css#L1-L220) — paleta y utilidades.
- [package.json](package.json#L1-L120) — deps y scripts.
- [wrangler.toml](wrangler.toml#L1-L20) — despliegue Cloudflare.
- [firebase-functions/package.json](firebase-functions/package.json#L1-L80) — funciones servidoras.
- [src/data/servicesData.ts](src/data/servicesData.ts#L1-L200) y [src/data/projectsData.ts](src/data/projectsData.ts#L1-L240) — contenido dinámico.
- [src/components/CookieBanner.tsx](src/components/CookieBanner.tsx#L1-L200) y [src/utils/analytics.ts](src/utils/analytics.ts#L1-L200) — privacidad y analítica.

---

Si quieres, puedo:
- Generar una checklist JSON/CSV para pasar a otra IA automáticamente.
- Ejecutar un análisis automático con Lighthouse o recomendaciones concretas (necesitaría que ejecutes localmente o me des acceso a una URL pública).
- Expandir cualquier sección con más detalle (por ejemplo: árbol de componentes o mapa de dependencias).

¿Qué quieres que haga ahora? (Puedo crear la checklist para la IA).