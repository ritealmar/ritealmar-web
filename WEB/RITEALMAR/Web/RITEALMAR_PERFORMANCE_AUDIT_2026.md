# Auditoría Técnica de Rendimiento Mobile - RITEALMAR (2026)

**Fecha de Auditoría:** Agosto 2026
**Métricas de Referencia:** LCP Mobile: 4.9s | FCP Mobile: 3.2s | TBT Mobile: 558ms | Mobile Performance: 61/100

Este documento detalla las causas reales de los problemas de rendimiento detectados en la plataforma web RITEALMAR (SPA basada en React/Vite), obtenidos tras una auditoría profunda del código fuente (`App.tsx`, `index.html`, `index.css` y estructura de componentes). No se han encontrado indicios de páginas spam o hackeos, descartando falsos positivos de herramientas de auditoría externas.

---

## 1. Análisis del LCP (Largest Contentful Paint) - 4.9s

El elemento que dispara el evento LCP en la vista móvil de la Home es el texto principal (el tag `<h1>` del componente `Hero.tsx`):
`"Automatizamos las tareas repetitivas de tu empresa para que vuelvas a vender"`

### Causa Raíz del Retraso LCP
El cuello de botella no son las imágenes, sino la **carga de las fuentes web**.
- En `src/index.css` (línea 1), la fuente `Inter` de Google Fonts se está importando mediante la regla CSS `@import url(...)`.
- **Efecto Render-Blocking:** El navegador descarga el HTML, luego descarga el CSS compilado (`index.css`), y sólo cuando lee el `@import`, inicia la resolución y descarga del archivo de fuente desde los servidores de Google.
- Aunque `index.html` incluye `<link rel="preconnect">` hacia Google Fonts, le falta la etiqueta `<link rel="stylesheet">` principal, por lo que no se produce la precarga concurrente.

---

## 2. Análisis de JavaScript y TBT (Total Blocking Time) - 558ms

El elevado tiempo de bloqueo en el hilo principal (TBT) de 558ms y el primer pintado (FCP) lento se deben a un problema crítico de **tamaño de bundle inicial** (el archivo `index.js` pesa cerca de ~700 kB minificado).

### Causa Raíz 1: Ausencia de Code Splitting en `App.tsx`
- En el archivo `src/App.tsx`, todas las landing pages corporativas (ej. `AgentesIA`, `ProcessAutomation`, `CrmAMedida`, `ClinicasV2`, `IaAbogadosPage`, etc.) están **importadas de forma estática** en la cabecera (líneas 37-63).
- **Impacto:** Vite y Rollup compilan todas estas páginas en el chunk inicial (`index.js`). Cuando un usuario carga la Home en su móvil, está descargando y parseando innecesariamente todo el código de todas las verticales de la agencia.

### Causa Raíz 2: Carga Síncrona de Librerías Pesadas (Framer Motion)
- En `src/pages/Home.tsx`, el componente `ROICalculator` se renderiza de forma estática fuera de los límites del `Suspense` (línea 66).
- Este componente (así como `ModalController.tsx` en `App.tsx`) utiliza la librería `framer-motion`.
- **Impacto:** Al estar en el árbol de renderizado inicial (aunque sea por debajo de la pantalla visible), el motor de JavaScript en móviles de gama media debe parsear más de ~100kb adicionales de lógica de animaciones antes de que la pantalla sea interactiva.

---

## 3. Terceros, CSS y Falsos Positivos

- **Falsos Positivos SEO (10 Páginas Sospechosas):** Los archivos de enrutamiento (`_redirects`) y el mapa del sitio (`sitemap.xml`) son totalmente limpios. No hay inyección de código ni páginas no autorizadas.
- **Turnstile / Captchas:** La implementación de Cloudflare Turnstile en `TurnstileWidget.tsx` es correcta y diferida. Solo se inyecta en el DOM cuando se abre el modal, evitando impacto en la carga inicial.
- **Animaciones CSS:** Las clases en `index.css` utilizan keyframes basados en `transform` y `opacity` (animados por GPU). No suponen carga de TBT.

---

## 4. Plan de Acción de Optimización (Prioridades)

Se proponen las siguientes correcciones arquitectónicas, de más a menos urgentes:

### Prioridad P0 (Impacto Crítico Inmediato)
1. **Eliminar el `@import` del CSS:** Borrar el `@import` de `src/index.css` y mover la carga de Google Fonts al archivo `index.html` utilizando `<link rel="preload" as="style">` y `<link rel="stylesheet">`. Esto reducirá drásticamente el LCP.
2. **Aplicar Lazy Loading a `App.tsx`:** Sustituir todos los import estáticos de las páginas (`import Page from './pages/Page';`) por la utilidad `lazyWithRetry` ya existente en `App.tsx`. Solo `Home.tsx` debe ser síncrona. Esto reducirá el bundle inicial en un ~60%.

### Prioridad P1 (Reducción de TBT)
3. **Lazy Loading de Componentes "Below the Fold":** En `src/pages/Home.tsx`, mover `<ROICalculator />` y `<BlogBanner />` debajo del componente `<Suspense>`.
4. **Optimizar `ModalController`:** Cargar `ModalController` perezosamente o utilizar la versión "ligera" de framer-motion (`m` en lugar de `motion`) en componentes globales, dado que bloquea la evaluación síncrona de JavaScript al inicio.

### Prioridad P2 (Mejoras Estructurales)
5. **Renderizado Condicional Mobile:** En `Hero.tsx`, la columna derecha (`DashboardSimulation` y grids) solo se oculta mediante CSS (`hidden lg:block`). Aún así, React construye ese VDOM. Considerar renderizar este bloque condicionalmente (ej. `if (!isMobile)`) para aligerar la memoria en móviles.
6. **Optimización de GTM:** Asegurarse de que las etiquetas gestionadas en Google Tag Manager no se disparen inmediatamente con la carga de la página (All Pages), priorizando eventos como DOM Ready o Window Loaded.

---

## FASE P0 — RESULTADOS REALES

**1. Bundle JS Principal Minificado:**
- ANTES (Baseline): **691.64 kB**
- DESPUÉS (Fase P0): **490.35 kB**
- Diferencia Absoluta: **-201.29 kB**
- Diferencia Porcentual: **-29.10%**

**2. Bundle JS Principal Gzip:**
- ANTES (Baseline): **196.17 kB**
- DESPUÉS (Fase P0): **147.50 kB**
- Diferencia Absoluta: **-48.67 kB**
- Diferencia Porcentual: **-24.81%**

**3. CSS Principal:**
- ANTES (Baseline): **212.65 kB**
- DESPUÉS (Fase P0): **212.52 kB**

**4. Número de Chunks & Páginas lazy:**
- ANTES: ~40 chunks de código. `index.js` contenía decenas de páginas estáticas.
- DESPUÉS: ~69 chunks de código tras aplicar lazy loading con `lazyWithRetry`. 
- Se convirtieron a lazy loading las siguientes páginas: `ProcessAutomation`, `CrmAMedida`, `ChatbotsInteligentes`, `AgentesIA`, `GenericServicePage`, `GenericProjectPage`, `GenericIndustryPage`, `ClinicasV2`, `VerticalesIndustria`, `PreciosPage`, `AuditoriaIaGratis`, `EstadoPlataforma`, `IaAbogadosPage`, y todas las rutas exportadas desde `SeoPages` (11 landings B2B adicionales).

**5. Cambios en Carga de Fuentes:**
- Se eliminó el `@import url(...)` restrictivo de `src/index.css`.
- El traslado desde @import a index.html elimina una cadena de descubrimiento tardío y permite iniciar antes la petición de Google Fonts, aunque la hoja de estilos de fuentes sigue participando en el camino de renderizado.
- No hubo doble petición de fuentes web en el DOM.

**6. Build:**
- Completado con Exit Code 0 sin advertencias críticas adicionales. Se verificó que Vite realiza el code-splitting satisfactoriamente.

**7. QA:**
- Acceso directo, carga inicial y re-renders funcionan correctamente en toda la SPA renderizada en cliente (Home, Clínicas, Automatización procesos, Blog, etc).
- Componentes de Modales, WhatsApp, GTM y Calendly permanecen estables.
- Metadatos (componente SEO) se cargan correctamente en el cliente, evaluándose correctamente en el HEAD al montar la ruta en la SPA a través de `lazyWithRetry`.

**8. Errores Encontrados:**
- Ninguno en funcionalidad pura de enrutamiento tras la optimización.

**9. Riesgos:**
- El tamaño del `index.js` ha mejorado significativamente (Minificado: 490.35 kB / Gzip: 147.50 kB), pero sigue acumulando peso debido a la carga inicial de la librería `framer-motion` y los componentes estáticos visuales (Hero / ROICalculator).

**10. Recomendación P1:**
- **Sí merece la pena proceder a la Fase P1**. Haber quitado ~200kb de código inútil de páginas no visitadas reduce memoria y ancho de banda, pero el TBT real dictado por la CPU móvil se ve impactado por el `parseo` de `framer-motion`. Aplicar lazy loading a `ROICalculator` o diferir `framer-motion` proveerá un beneficio enorme en Core Web Vitals (TBT/INP).

---

## DEPLOY FASE P0

- **Commit:** perf: reduce initial bundle and improve font loading
- **Hash:** ecd78e0b1d27333228416b4ea4bea7787fbfd89a
- **URL Preview:** https://f181ff73.ritealmar.pages.dev
- **Producción:** https://ritealmar.es
- **Bundle final:** 490.35 kB minificado / 147.50 kB gzip.
- **QA:** Sin regresiones funcionales ni visuales en producción. Navegación SPA fluida, hidratación correcta de CSS y correcto funcionamiento de modales/Turnstile tras navegación por rutas lazy.
- **Errores:** Ninguno detectado.
- **Pendientes:** Fase P1 (ROICalculator, BlogBanner, framer-motion diferido) y Fase P2 (optimización render móvil, GTM diferido).

---

## FASE P1 — OPTIMIZACIÓN JAVASCRIPT Y RENDER BLOCKING

### 1. Bundle P0 vs P1 (Diferencia Real)
- **Bundle JS Principal Minificado (P0):** 490.35 kB
- **Bundle JS Principal Minificado (P1):** 475.59 kB
- **Diferencia Absoluta:** -14.76 kB
- **Bundle JS Principal Gzip (P0):** 147.50 kB
- **Bundle JS Principal Gzip (P1):** 143.82 kB
- **Diferencia Absoluta Gzip:** -3.68 kB

### 2. ROICalculator y BlogBanner
- Ambos componentes fueron convertidos a `React.lazy()` en `Home.tsx` y encapsulados en un `<Suspense>` con un `min-h-[800px]` para mitigar un posible CLS (Cumulative Layout Shift) en móviles, dado que ocupan bastante espacio vertical. 
- **Resultado:** Fueron abstraídos del bundle inicial exitosamente, provocando la reducción de ~15 kB de lógica (fórmulas, estado y contenido).

### 3. Estado de Framer-Motion
- **¿Sigue en el bundle inicial?** SÍ.
- **¿Qué componentes lo provocan?** 
  1. `ModalController` (Importado sincrónicamente y de forma global en `App.tsx`).
  2. Componentes importados sincrónicamente en `Home.tsx` que están *below the fold*: `TargetAudienceSection`, `ServicesBentoGrid`, `BeforeAfterSection`, `ContactForm`, `TestimonialsSection` y `WhoIsBehind`.
- **Análisis de `ModalController` a Lazy:** Se podría envolver en un `React.lazy()` en `App.tsx`. No obstante, no eliminaría `framer-motion` del bundle inicial, dado que `Home.tsx` (que no es lazy para no impactar LCP) sigue importando sincrónicamente otras secciones que usan la misma librería de animación.
- **Resolución temporal:** No se ha migrado `framer-motion` a lazy ni a la API `m` en esta fase para evitar riesgos de pérdida de animación inicial en la Home (Hero, Navbar) y porque requeriría refactorizar gran parte del árbol de componentes de la página de inicio.

### 4. Recursos Render-Blocking Identificados (Ahorro Estimado Lighthouse: 990ms)
- **El CSS Principal (`index-XXXXX.css`):** Vite inyecta esta hoja de estilo como render-blocking (comportamiento normal).
- **Google Fonts CSS (`fonts.googleapis.com`):** Al trasladarlo al HTML se adelantó la petición, pero sigue bloqueando el primer pintado visual (FCP) porque el navegador pausa el renderizado hasta descargar el mapa de fuentes.
- **¿Opciones a futuro?** 
  - Usar `&display=swap` ayuda con FOIT (ya aplicado).
  - El *self-hosting* de la fuente `Inter` o un inline CSS crítico podrían mitigar los 990ms, pero requieren refactorizar el proceso de build de Vite o la plantilla estática, por lo cual se descarta en P1 hasta ver su necesidad.

### 5. Origen de los 363 KiB de JS Sin Usar
- Provienen casi exclusivamente de los componentes de la **Home** que están *below the fold* y que Vite empaqueta en `index.js`. Al cargar la página, el navegador descarga la lógica de `Integrations`, `IndustrySolutions`, `ProcessSection`, `FAQ`, etc., pero el usuario no los ve inicialmente.
- Adicionalmente, el core de `framer-motion` contribuye sustancialmente a este aviso, dado que trae mucha lógica de animación de la cual el *Hero* solo usa una pequeña parte.

### 6. Tareas Largas en el Main Thread (6 tareas)
- **Origen:** Evaluación del Script (`index.js`), Reconciliación / Initial Render de React (montar el VDOM de todos los componentes de la Home) y cálculo de layouts/proyecciones de `framer-motion`.

### 7. Cambios Realizados y QA
- **Cambios Realizados:** 
  - `ROICalculator` y `BlogBanner` portados a Code-Splitting / Lazy en `Home.tsx`.
- **QA & Riesgos:**
  - Build compilado con Exit Code 0.
  - El fallback del Suspense mitiga de forma razonable el layout shift (comprobado en emulación mobile y desktop).
  - Formularios, tracking, modales, y enrutamiento SPA siguen estables (sin regresiones de hidratación).

### 8. Recomendación para Siguiente Fase
- Dado que el "JS sin usar" es culpa de los componentes *below the fold* de `Home.tsx`, la siguiente fase más agresiva sería convertirlos también a `React.lazy` (ej. `ServicesBentoGrid`, `FAQ`, `ProcessSection`). Al hacerlo, `framer-motion` se caería automáticamente del bundle inicial del FCP/LCP de la Home.

---

## FASE P1B — LAZY LOAD HOME BELOW THE FOLD

### 1. Componentes Convertidos a Lazy
Los siguientes componentes de `Home.tsx` fueron convertidos a `React.lazy()` con `<Suspense>` y fallback de altura fija para evitar CLS:

| Componente | Usa framer-motion | Motivo |
|---|---|---|
| `BlogBanner` | No | Below-the-fold (ya lazy desde P1) |
| `ROICalculator` | Sí | Below-the-fold (ya lazy desde P1) |
| `TargetAudienceSection` | Sí | Below-the-fold, no crítico para conversión inicial |
| `ServicesBentoGrid` | Sí | Below-the-fold, CTA secundario |
| `IndustrySolutions` | No | Below-the-fold |
| `BeforeAfterSection` | Sí | Below-the-fold |
| `PortfolioSection` | No | Below-the-fold |
| `ProcessSection` | Sí | Below-the-fold |
| `FAQ` | No | Below-the-fold |
| `Integrations` | No | Below-the-fold |

### 2. Componentes Descartados (siguen síncronos)
| Componente | Motivo |
|---|---|
| `Hero` | Above-the-fold, crítico para LCP |
| `Benefits` | Ligero, sin framer-motion, posición alta en flujo |
| `ContactForm` | Contiene formulario principal con Turnstile; riesgo funcional si es lazy |
| `Navbar` | Global, crítico para interacción inicial |
| `ModalController` | Global, crítico para apertura de modales y conversión |

### 3. Bundle Antes / Después

| Métrica | P1 (Baseline) | P1B (Resultado) | Diferencia | % |
|---|---|---|---|---|
| JS Principal Minificado | 475.59 kB | **432.02 kB** | -43.57 kB | **-9.16%** |
| JS Principal Gzip | 143.82 kB | **135.02 kB** | -8.80 kB | **-6.12%** |
| Reducción total vs. original (691.64 kB) | — | 432.02 kB | **-259.62 kB** | **-37.54%** |

### 4. Estado de Framer-Motion
- **¿Sigue en el bundle inicial?** Sí.
- **Origen confirmado:** `ModalController` (importado de forma global y síncrona en `App.tsx`) y `ContactForm` (mantenido síncrono por seguridad funcional). Ambos contienen `import { motion, AnimatePresence } from 'framer-motion'`.
- Para eliminar `framer-motion` del chunk inicial sería necesario convertir `ModalController` a lazy en `App.tsx`, lo que conlleva riesgo de apertura de modal sin feedback visual si el chunk tarda en cargarse.

### 5. CLS
- Cada sección lazy dispone de un `<Suspense fallback={<div className="min-h-[Xpx] w-full" />}>` con altura estimada según el bloque. Esto reserva espacio en el DOM durante la carga, minimizando el CLS visible.

### 6. QA
- Build: Exit Code 0.
- Scroll progresivo con aparición dinámica de secciones: funcional.
- Hero, CTA principal, Navbar, formulario, modales, WhatsApp y Calendly: sin regresión detectada.
- Consola limpia (sin errores de chunk ni referencias rotas).

### 7. Riesgos
- Los fallbacks de `min-h-[Xpx]` son estimaciones estáticas. Si el tamaño real del componente difiere en móvil, puede haber CLS residual al cargar. Se recomienda medir con Lighthouse post-deploy.
- `ContactForm` sigue síncrono: aporta peso al bundle pero garantiza disponibilidad inmediata del formulario principal.

### 8. Recomendación de Deploy
- **Sí se recomienda hacer commit y deploy.** La reducción acumulada desde el baseline original es de **-259.62 kB minificado / -61.15 kB gzip** (aprox. -37.54% sobre el `index.js` original de 691.64 kB). El siguiente paso para eliminar `framer-motion` del bundle inicial requeriría evaluar el impacto en UX de convertir `ModalController` a lazy loading.

