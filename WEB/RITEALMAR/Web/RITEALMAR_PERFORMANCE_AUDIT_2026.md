# RITEALMAR — Auditoría de Rendimiento Mobile 2026

## Contexto

Análisis externo inicial (26/08/2026):

| Métrica | Valor |
|---|---|
| LCP Mobile | 4.9 s |
| FCP Mobile | 3.2 s |
| TBT Mobile | 558 ms |
| Speed Index | 3.8 s |
| Performance | 61 / 100 |

---

## FASE P0 — OPTIMIZACIÓN DE CARGA INICIAL

### 1. Baseline Original

| Métrica | Valor |
|---|---|
| JS Principal Minificado | 691.64 kB |
| JS Principal Gzip | 196.17 kB |
| CSS Principal | 30.16 kB |
| Chunks | 3 |

### 2. Fuente Inter

- Se eliminó el `@import` de Google Fonts en `src/index.css` (render-blocking por cadena de descubrimiento tardío).
- Se añadió `<link rel="preconnect">` a `fonts.googleapis.com` y `fonts.gstatic.com` en `index.html`.
- Se añadió `<link rel="stylesheet">` directo en `index.html` para Inter y JetBrains Mono con `display=swap`.
- **Nota técnica:** El traslado desde `@import` a `index.html` elimina una cadena de descubrimiento tardío y permite iniciar antes la petición de Google Fonts, aunque la hoja de estilos de fuentes sigue participando en el camino de renderizado.

### 3. Code Splitting Agresivo

- Se convirtieron todas las páginas de servicios, blog e industria a `lazyWithRetry` en `App.tsx`.
- `Home` se mantiene como import síncrono para no impactar el LCP.

### 4. Resultado P0

| Métrica | Antes | Después | Δ |
|---|---|---|---|
| JS Principal Min | 691.64 kB | **490.35 kB** | -201.29 kB (-29.1%) |
| JS Principal Gzip | 196.17 kB | **147.50 kB** | -48.67 kB (-24.8%) |
| Chunks | 3 | 37 | +34 (esperado) |

### 5. QA y Deploy P0

- Build: Exit Code 0.
- **Commit:** `perf: reduce initial bundle and improve font loading`
- **Deploy:** Cloudflare Pages → `ritealmar`
- Sin regresiones funcionales ni visuales.
- Pendientes: Fase P1 (ROICalculator, BlogBanner, framer-motion diferido).

---

## FASE P1 — OPTIMIZACIÓN JAVASCRIPT Y RENDER BLOCKING

### 1. Bundle P0 vs P1

| Métrica | P0 | P1 | Δ |
|---|---|---|---|
| JS Principal Min | 490.35 kB | **475.59 kB** | -14.76 kB |
| JS Principal Gzip | 147.50 kB | **143.82 kB** | -3.68 kB |

### 2. ROICalculator y BlogBanner

- Ambos componentes convertidos a `React.lazy()` en `Home.tsx` dentro de `<Suspense>` con `min-h-[800px]` para mitigar CLS.
- **Resultado:** ~15 kB de lógica extraída del bundle inicial.

### 3. Estado de Framer-Motion

- **¿Sigue en el bundle inicial?** SÍ.
- **Origen:** `ModalController` (global en `App.tsx`) y componentes below-the-fold de `Home.tsx`.
- No se migró framer-motion a lazy en esta fase para evitar riesgo de pérdida de animación.

### 4. Recursos Render-Blocking (Ahorro Estimado Lighthouse: 990ms)

- CSS principal (`index-XXXXX.css`) — comportamiento normal.
- Google Fonts CSS — sigue bloqueando FCP.
- `display=swap` ya aplicado.

### 5. Origen de los 363 KiB de JS Sin Usar

- Componentes below-the-fold de Home empaquetados en `index.js`.
- Core de `framer-motion` contribuye sustancialmente.

### 6. Tareas Largas en el Main Thread (6 tareas)

- Evaluación del Script (`index.js`), reconciliación React, cálculos de framer-motion.

---

## FASE P1B — LAZY LOAD HOME BELOW THE FOLD

### 1. Componentes Convertidos a Lazy

| Componente | Usa framer-motion | Motivo |
|---|---|---|
| `BlogBanner` | No | Below-the-fold (ya lazy desde P1) |
| `ROICalculator` | Sí | Below-the-fold (ya lazy desde P1) |
| `TargetAudienceSection` | Sí | Below-the-fold, no crítico para conversión |
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
| `Benefits` | Ligero, sin framer-motion |
| `ContactForm` | Formulario principal con Turnstile |
| `Navbar` | Global, interacción inicial |
| `ModalController` | Global, conversión |

### 3. Bundle P1 vs P1B

| Métrica | P1 | P1B | Δ | % |
|---|---|---|---|---|
| JS Min | 475.59 kB | **432.02 kB** | -43.57 kB | **-9.16%** |
| JS Gzip | 143.82 kB | **135.02 kB** | -8.80 kB | **-6.12%** |
| **Total vs. original** | 691.64 kB | **432.02 kB** | **-259.62 kB** | **-37.54%** |

### 4. Estado de Framer-Motion

- **¿Sigue en el bundle inicial?** Sí.
- **Origen:** `ModalController` y `ContactForm` (ambos `import { motion, AnimatePresence } from 'framer-motion'`).

### 5. Deploy P1B

- **Commit:** `perf: lazy load below-fold home sections`
- **Hash:** `e3cd27389f999555d504957a5883d381f8a0784e`
- **Preview:** https://ce5ddc79.ritealmar.pages.dev
- **Producción:** https://ritealmar.es
- HTTP 200 en Home y rutas lazy. Sin errores de chunk.

---

## AUDITORÍA FINAL — TERCEROS Y RUTA CRÍTICA

**Métricas PageSpeed Mobile post-P1B:**

| Métrica | Valor |
|---|---|
| Performance | **89** |
| FCP | 2.7 s |
| LCP | 3.1 s |
| TBT | 60 ms |
| Speed Index | 2.7 s |
| CLS | 0 |

### 1. Google Analytics / GTM — Configuración Actual

**Mecanismo A — GTM (index.html, línea 10-15):**
- Contenedor: `GTM-WTLQDFS8`
- Se carga síncronamente en el `<head>` con `j.async=true`
- Recurso: `https://www.googletagmanager.com/gtm.js?id=GTM-WTLQDFS8` (~115 KiB)

**Mecanismo B — gtag.js directo (analytics.ts, línea 42):**
- Measurement ID: `G-ZGB3DG38K5`
- Se inyecta dinámicamente vía `initAnalytics()` llamado desde `main.tsx` al arrancar la SPA
- Recurso: `https://www.googletagmanager.com/gtag/js?id=G-ZGB3DG38K5` (~162 KiB)

> [!WARNING]
> **SÍ existe doble carga.** GTM se inyecta desde el HTML estático. gtag.js se inyecta desde JavaScript al iniciar React. Si GTM contiene internamente una etiqueta GA4 para el mismo `G-ZGB3DG38K5`, se produciría un segundo `config` y potencialmente `page_view` duplicados.

El código de `analytics.ts` envía `send_page_view: false` en su `config`, y los `page_view` manuales solo se disparan tras consentimiento. Sin embargo, si GTM tiene una etiqueta GA4 con trigger `All Pages`, se enviaría un `page_view` adicional automático.

**Treemap de recursos Google:**

| Recurso | Tamaño aprox. | Origen |
|---|---|---|
| `gtag/js?id=G-ZGB3DG38K5` | ~162 KiB | analytics.ts (SPA) |
| `analytics.js` / collect | ~151 KiB | Descargado por gtag.js |
| `gtm.js?id=GTM-WTLQDFS8` | ~115 KiB | index.html (estático) |
| JS propio (index.js) | ~132 KiB | Bundle Vite (gzip) |

**Total Google terceros:** ~428 KiB de JS descargado solo por tracking.

### 2. Recursos Render-Blocking (~900ms estimados)

| Recurso | Tipo | Bloquea FCP | Motivo |
|---|---|---|---|
| `index-XXXXX.css` | CSS | Sí | Hoja de estilos principal — inevitable |
| `fonts.googleapis.com/css2?family=Inter...` | CSS | Sí | Mapa de fuentes externo |

La hoja de fuentes de Google es el **único recurso externo render-blocking eliminable**.

### 3. Fuentes

**URL CSS:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap
```

**Pesos solicitados:**
- Inter: 400, 500, 600, 700, 800 (5 pesos)
- JetBrains Mono: 400, 700 (2 pesos)

**Uso real verificado:**
- Inter 800 (`font-extrabold`): solo 2 componentes (`ServicesGrid.tsx`, `LegalFooter.tsx`), ninguno en Home inicial.
- JetBrains Mono: solo en componentes below-the-fold o páginas secundarias. **NO se usa en Hero ni primer viewport.**
- `display=swap` ya aplicado (evita FOIT).

**Self-hosting — análisis:**
- Eliminaría RTT a Google Fonts (~100-300ms FCP).
- Beneficio: marginal-moderado. El `preconnect` ya mitiga parte del coste.
- Riesgo: bajo si se incluyen solo los pesos necesarios.

### 4. Contraste (Accesibilidad)

| Componente | Clase | Texto afectado | Fondo aprox. | Ratio |
|---|---|---|---|---|
| `Hero.tsx` | `text-slate-400` | Subtítulo / descripción | #030712 | ~4.2:1 ❌ |
| `LegalFooter.tsx` | `text-slate-400` | Links de navegación | #0F172A | ~4.5:1 ⚠️ |
| `Home.tsx` | `text-slate-400` | Descripciones de artículos | #0F172A | ~4.5:1 ⚠️ |
| `Benefits.tsx` | `text-slate-400` | Subtítulo principal | #030712 | ~4.2:1 ❌ |

Para WCAG AA (4.5:1 texto normal): `text-slate-300` (#CBD5E1) → ~7:1 sobre #030712.

### 5. Recomendaciones P2

**P2-A — Alto beneficio / Bajo riesgo:**

1. **Eliminar JetBrains Mono de Google Fonts.** No se usa en Home. Usar monospace del sistema o cargar bajo demanda.
2. **Eliminar Inter peso 800.** Solo 2 componentes secundarios. Reducir a `wght@400;500;600;700`.

**P2-B — Beneficio medio:**

3. **Self-hosting de Inter.** WOFF2 local (pesos 400-700). Elimina RTT a Google Fonts (~100-300ms FCP).
4. **Corregir contraste slate-400 → slate-300.** Mejora WCAG AA sin alterar diseño.

**NO RECOMENDADO — Riesgo > Beneficio:**

- **ModalController a lazy.** Riesgo de modal no disponible al primer clic → pérdida de conversión.
- **Migrar framer-motion a API `m`.** Refactorizar decenas de componentes, ahorro mínimo por cada uno.

---

## ELIMINACIÓN GTM ANTIGUO DEL CÓDIGO

### Resumen
Se ha retirado del código de la web el contenedor GTM antiguo (`GTM-WTLQDFS8`). Tras verificación manual se determinó que la única etiqueta existente (`G-2FOJV1XCZL`) no corresponde al flujo GA4 activo actual de RITEALMAR.

### Detalles de la Implementación
- **GA4 correcto preservado**: `G-ZGB3DG38K5`.
- **GTM retirado del código**: `GTM-WTLQDFS8`.
- **Etiqueta antigua ignorada**: `G-2FOJV1XCZL`.
- **analytics.ts preservado**: Toda la lógica de consentimiento, inicialización y eventos sigue dependiendo de este archivo.
- **Archivos Modificados**: 
  - `index.html`: Eliminación del snippet síncrono del `<head>` y del iframe/noscript asociado.
- **Build**: Exit code 0, sin errores de inicialización.
- **QA**: Verificado funcionalmente que el `page_view` y los eventos se gestionan a través de la instalación directa nativa (vía `analytics.ts`). No hay errores en consola por `gtag is not defined`.
