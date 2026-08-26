# RITEALMAR — AUDITORÍA SEO REAL
> Fecha: 2026-08-26 | Basada en evidencia del código fuente y comprobaciones en producción

---

## 1. RESUMEN EJECUTIVO

**Estado actual:** RITEALMAR es una SPA (Single Page Application) construida con React + Vite. El dominio https://ritealmar.es está activo y responde correctamente. Sin embargo, se detecta un **problema crítico de SEO técnico**: el servidor entrega el mismo `index.html` estático para TODAS las rutas, lo que significa que Google no puede leer el title ni la description específica de ninguna página interior en el momento del crawl. Los metadatos dinámicos (title, description, canonical, OG) son inyectados por JavaScript en el cliente, y Googlebot necesita renderizar JS para verlos — proceso que puede tardar días o semanas y no está garantizado para todas las URLs.

**Hallazgo confirmado con evidencia:** Al solicitar https://ritealmar.es/casos-de-exito via HTTP directo, el servidor devuelve el `<title>` y `<meta description>` de la Home, no de la página "Casos de Uso". Esto es comprobable en el archivo de respuesta guardado.

**Indexación en Google:** No se detectan resultados para `site:ritealmar.es` ni menciones públicas del dominio en buscadores. Esto indica que el sitio **todavía no está indexado o tiene una presencia orgánica mínima.** No se puede confirmar sin acceso a Google Search Console.

---

## 2. ESTADO REAL DE INDEXACIÓN

| Estado | Evidencia |
|--------|-----------|
| Google `site:ritealmar.es` | Sin resultados |
| Menciones públicas de "ritealmar" | Solo como usuario de red social, no como empresa |
| Dominio activo en producción | ✅ Confirmado |
| HTTPS funcional | ✅ Confirmado |
| HTML base servido correctamente | ✅ Confirmado |
| Metadatos específicos por ruta | ❌ NO (problema SPA) |

---

## 3. DATOS DE GOOGLE SEARCH CONSOLE

**No hay acceso actual a GSC.** Para obtener datos reales el propietario debe:

1. Ir a https://search.google.com/search-console/
2. Verificar propiedad de `ritealmar.es` (ya existe `google58d106d7cd83385d.html` en `/public`, lo que sugiere que la verificación HTML ya se realizó anteriormente).
3. Compartir acceso como "Propietario completo" con la cuenta que se desee.
4. Comprobar en GSC:
   - **Rendimiento → Búsqueda web**: clics, impresiones, CTR, posición media
   - **Indexación → Páginas**: páginas indexadas vs. no indexadas y motivo
   - **Sitemaps**: confirmar que el sitemap fue enviado y procesado
   - **Experiencia → Core Web Vitals**
   - **Inspección de URLs**: comprobar cómo ve Google cada URL importante

---

## 4. URLS INDEXADAS (Estimación basada en evidencia)

Sin GSC, clasificación conservadora por probabilidad de indexación:

| URL | Estado Estimado | Motivo |
|-----|-----------------|--------|
| https://ritealmar.es/ | DUDOSA | SPA: Googlebot ve HTML genérico de fallback |
| https://ritealmar.es/casos-de-exito | PROBABLEMENTE NO INDEXADA | HTML servido = mismo que Home |
| https://ritealmar.es/blog | PROBABLEMENTE NO INDEXADA | HTML servido = mismo que Home |
| https://ritealmar.es/sobre-ritealmar | PROBABLEMENTE NO INDEXADA | HTML servido = mismo que Home |
| https://ritealmar.es/chatbots-ia | PROBABLEMENTE NO INDEXADA | HTML servido = mismo que Home |
| Todas las demás rutas internas | PROBABLEMENTE NO INDEXADAS | Mismo problema SPA |

**Nota:** El Sitemap está correctamente declarado en robots.txt, por lo que Google conoce las URLs. El problema es que el HTML estático no contiene el contenido correcto por ruta.

---

## 5. PROBLEMAS TÉCNICOS CONFIRMADOS

### 🔴 CRÍTICO — HTML estático idéntico en todas las rutas (SPA sin prerender)
- **Evidencia directa:** `GET https://ritealmar.es/casos-de-exito` devuelve `<title>Empresa de Inteligencia Artificial y Automatización para PYMEs | RITEALMAR</title>` — el título de la Home.
- **Impacto:** Google indexa todas las rutas con el mismo title y description. Riesgo de contenido duplicado y pérdida de relevancia por keyword en páginas interiores.

### 🔴 CRÍTICO — OG Image inexistente
- `index.html` y el componente SEO.tsx usan `og:image = https://ritealmar.es/og-image.jpg`.
- Este archivo **no existe** en `public/`. Al solicitar la URL, el servidor redirige a la Home.
- **Impacto:** Al compartir cualquier URL en LinkedIn, WhatsApp o Twitter, no aparece ninguna imagen de preview. Daño directo a la conversión social y credibilidad.

### 🟠 ALTO — Canonical hardcoded en index.html apunta siempre a `/`
- El `index.html` tiene `<link rel="canonical" href="https://ritealmar.es/" />`.
- El componente SEO.tsx intenta sobreescribirlo vía JS, pero los crawlers pueden leer el HTML estático antes del render.
- **Impacto:** Google puede interpretar que todas las páginas son duplicadas de la Home.

### 🟠 ALTO — favicon declarado como WebP
- `<link rel="icon" type="image/svg+xml" href="/logo.webp" />` — el `type` dice SVG pero el archivo es WebP.
- No todos los navegadores soportan WebP como favicon; el correcto sería `type="image/webp"` o usar un `.ico`/`.png`.

### 🟡 MEDIO — `<meta name="keywords">` en index.html
- Las keywords en meta tags son ignoradas por Google desde 2009. No causa daño, pero es ruido.

### 🟡 MEDIO — Schema.org en index.html usa `ProfessionalService` sin dirección física
- El schema `LocalBusiness/ProfessionalService` sin `address` es un schema incompleto. No causa penalización, pero reduce su valor para SEO local.

### 🟡 MEDIO — `og:url` fijo en `https://ritealmar.es/` para todas las rutas
- En el HTML estático, el og:url apunta siempre a la raíz, no a la URL de la página actual.

---

## 6. HIPÓTESIS NO CONFIRMADAS (Requieren GSC)

- Si Google ya indexó alguna página y con qué metadatos.
- Si existe un problema de redirección o crawl budget.
- Velocidad real de indexación tras el despliegue.
- Core Web Vitals reales en campo (no solo lab).
- Keywords que ya generan impresiones aunque no conversiones.

---

## 7. SITEMAP — ANÁLISIS

**Archivo:** `/public/sitemap.xml` (300 líneas) | **URL de producción:** https://ritealmar.es/sitemap.xml ✅ (accesible)

**Declarado en robots.txt:** ✅

### Problemas detectados en el Sitemap:

| Problema | Detalle |
|----------|---------|
| URLs sin ruta real en App.tsx | `/casos-de-uso-ia`, `/herramientas-ia`, `/recursos-ia`, `/academia-ia` están en el sitemap pero no aparecen con ese path exacto en App.tsx o tienen rutas distintas |
| Prioridad inflada | 17 URLs con `priority=1.0`. Google ignora priority relativa cuando casi todo es 1.0 |
| Páginas de herramientas incluidas | `/generador-prompts-ia`, `/evaluador-madurez-ia`, etc. son herramientas interactivas, no páginas SEO de contenido. Tenerlas en el sitemap puede diluir el crawl budget |
| `/estado-plataforma` en sitemap | Página técnica/interna, no aporta valor SEO |
| `/plan-captacion` no está en sitemap | Existe en App.tsx pero no en sitemap.xml |
| Rutas `/servicios/` en sitemap pero no como rutas fijas | Son dinámicas via `GenericServicePage`, pueden no tener metadata propia |

---

## 8. ROBOTS.TXT — ANÁLISIS

```
User-agent: *
Allow: /
Sitemap: https://ritealmar.es/sitemap.xml
```

**Estado:** ✅ Correcto y minimalista. No bloquea ninguna ruta útil.
**Sin problemas activos.** No hay Disallow accidental.

---

## 9. METADATA POR PÁGINA PRINCIPAL

| URL | Title (en código) | Description | Canonical en JS | H1 |
|-----|--------------------|-------------|-----------------|-----|
| `/` | Agencia de Inteligencia Artificial y Automatización \| RITEALMAR | Transformamos PYMES con automatización... | https://ritealmar.es | En componente Hero |
| `/servicios/automatizacion-procesos` | Automatización de Procesos para PYMES \| Ahorra Tiempo y Costes | Presente | Presente | En ProcessAutomation |
| `/chatbots-ia` | Chatbots con IA para Empresas \| Atención y Ventas 24/7 | Presente | — | En ChatbotsInteligentes |
| `/clinicas` | IA para Clínicas \| Ritealmar | Presente | — | En ClinicasV2 |
| `/casos-de-exito` | Casos de Uso: Automatización e IA para PYMES \| RITEALMAR | Presente | https://ritealmar.es/casos-de-exito | En CasosExito |
| `/blog` | Blog de IA y automatización para PYMES \| RITEALMAR | Presente | Presente | En BlogIndex |
| `/sobre-ritealmar` | Sobre RITEALMAR \| Agencia de IA para Empresas | Presente | Presente | En SobreRitealmar |
| `/precios` | Precios y Planes de Servicios Digitales \| Ritealmar | Presente | — | En PreciosPage |
| `/auditoria-ia-gratis` | Presente | Presente | — | En AuditoriaIaGratis |

**Problema transversal:** Todos estos titles/descriptions son inyectados por JS en cliente. El HTML estático servido por Cloudflare es siempre el mismo.

---

## 10. OPEN GRAPH — ANÁLISIS

| Campo | Valor en HTML estático | Valor tras JS (correcto) | Problema |
|-------|------------------------|--------------------------|----------|
| `og:title` | "Empresa de IA y Automatización..." (Home) | Título de la página actual | ❌ Crawlers sociales ven siempre la Home |
| `og:description` | Descripción genérica de la Home | Descripción de la página actual | ❌ Mismo problema |
| `og:image` | https://ritealmar.es/og-image.jpg | Idem | ❌ El archivo no existe |
| `og:url` | https://ritealmar.es/ | URL de la página actual | ❌ Siempre apunta a la Home |

**Resultado práctico:** Compartir cualquier URL de RITEALMAR en LinkedIn o WhatsApp mostrará el título genérico de la Home, sin imagen. Esto reduce drásticamente el CTR social.

---

## 11. SCHEMA.ORG — ESTADO ACTUAL

| Schema | Dónde | Estado |
|--------|-------|--------|
| `ProfessionalService` | `index.html` estático | ✅ Presente, sin dirección |
| `Organization` | `Home.tsx` (via JS) | ✅ Presente en Home |
| `WebSite` | `Home.tsx` (via JS) | ✅ Presente |
| `BreadcrumbList` | Páginas de casos de uso (via JS) | ⚠️ Solo en JS, no visible al crawler sin render |
| `Article` | Páginas de blog (via JS) | ⚠️ Solo en JS |
| `FAQPage` | No detectado | ❌ Falta — el componente FAQ.tsx existe pero sin schema |
| `Service` | No detectado | ❌ Falta en páginas de servicios |
| `LocalBusiness` | No detectado | ❌ Falta dirección, teléfono en schema moderno |

---

## 12. SEO DE SERVICIOS — INTENCIÓN COMERCIAL

| Página | Keyword Principal | Intención | Calidad Title | Calidad H1 | Contenido | Problema SEO |
|--------|-------------------|-----------|---------------|------------|-----------|--------------|
| `/servicios/automatizacion-procesos` | automatización procesos pymes | Comercial | ✅ Bueno | ✅ | ✅ Denso | Solo accesible vía JS |
| `/chatbots-ia` | chatbot empresas whatsapp | Comercial | ✅ Bueno | ✅ | ✅ | Idem |
| `/servicios/agentes-ia` | agentes ia empresas | Comercial | A revisar | A revisar | A revisar | Idem |
| `/clinicas` | ia para clinicas | Comercial sector | ✅ | ✅ | ✅ | Idem |
| `/inmobiliarias` | ia inmobiliarias | Comercial sector | ✅ | ✅ | ✅ | Idem |
| `/auditoria-ia-gratis` | auditoria ia gratis pymes | Captación | ✅ | ✅ | ✅ | Idem |
| `/precios` | precios automatizacion ia | Transaccional | ⚠️ "Ritealmar" en minúscula | A revisar | ✅ | Idem |

---

## 13. SEO DE BLOG — ESTADO

| Artículo | URL | Clasificación |
|----------|-----|---------------|
| Cómo automatizar WhatsApp en una PYME | `/blog/automatizar-whatsapp-pyme` | **MANTENER** — intención clara, keyword long-tail |
| Automatizar captación de clientes con IA | `/blog/automatizar-captacion-clientes-ia-pyme` | **MANTENER** — intención comercial alta |
| Automatización de citas en clínicas | `/blog/automatizacion-citas-clinicas-ia` | **MANTENER** — sector específico |
| IA para inmobiliarias | `/blog/ia-inmobiliarias-captacion-ventas` | **MANTENER** — sector específico |
| Automatización de procesos para PYMES | `/blog/automatizacion-procesos-pymes` | **MANTENER** — keyword pilar |

**Diagnóstico blog:** El blog es pequeño pero coherente. No hay thin content obvio ni canibalización grave entre artículos. El problema es que Google probablemente no está leyendo los titles/descriptions correctos debido al problema de SPA.

**Oportunidades:** Faltan artículos sobre: agentes IA, CRM a medida, automatización ecommerce, IA para despachos de abogados (ya hay página pero no artículo de blog asociado).

---

## 14. MAPA DE KEYWORDS

### Cluster: AUTOMATIZACIÓN
| Keyword | Volumen Est. | Dificultad | Prioridad | Página actual |
|---------|--------------|------------|-----------|---------------|
| automatización de procesos para pymes | Media | Media | 🔴 Alta | `/servicios/automatizacion-procesos` |
| automatización tareas repetitivas empresa | Baja | Baja | 🟡 Media | Misma |
| automatizar whatsapp empresa | Baja-Media | Baja | 🔴 Alta | `/blog/automatizar-whatsapp-pyme` |
| herramientas automatización pymes | Baja | Baja | 🟡 Media | Sin página dedicada |

### Cluster: INTELIGENCIA ARTIFICIAL
| Keyword | Volumen Est. | Dificultad | Prioridad | Página actual |
|---------|--------------|------------|-----------|---------------|
| inteligencia artificial para empresas | Alta | Alta | 🟡 Media | Home |
| ia para pymes | Media | Media | 🔴 Alta | Home / varios |
| consultoría ia empresas | Baja | Baja | 🔴 Alta | Sin página dedicada |
| agentes ia para empresas | Baja | Baja | 🔴 Alta | `/servicios/agentes-ia` |

### Cluster: CHATBOTS
| Keyword | Volumen Est. | Dificultad | Prioridad | Página actual |
|---------|--------------|------------|-----------|---------------|
| chatbot para empresas | Media | Media | 🔴 Alta | `/chatbots-ia` |
| chatbot whatsapp empresas | Media | Media | 🔴 Alta | `/chatbots-ia` + blog |
| asistente virtual ia | Baja | Baja | 🟡 Media | No dedicada |

### Cluster: SECTORES
| Keyword | Volumen Est. | Dificultad | Prioridad | Página actual |
|---------|--------------|------------|-----------|---------------|
| ia para clinicas | Baja | Baja | 🔴 Alta | `/clinicas` |
| ia para inmobiliarias | Baja | Baja | 🔴 Alta | `/inmobiliarias` |
| ia para despachos abogados | Muy baja | Muy baja | 🟡 Media | `/ia-para-despachos-abogados` |
| automatizacion ecommerce | Baja | Baja | 🟡 Media | `/ecommerce` |

### Cluster: DESARROLLO / CRM
| Keyword | Prioridad | Página actual |
|---------|-----------|---------------|
| crm a medida para pymes | 🟡 Media | `/servicios/crm-saas` (dinámica, sin SEO propio) |
| desarrollo software a medida | 🟢 Baja | Sin página principal |

---

## 15. SEO LOCAL

**Ubicación pública disponible:** El schema en `index.html` incluye `"areaServed": "ES"` pero no ciudad concreta.

**Recomendación:** Si RITEALMAR opera principalmente en una ciudad concreta (Madrid, Valencia, etc.), añadir esa ubicación al schema y crear contenido local específico (ej: "automatización de procesos para pymes en Madrid") puede capturar tráfico de menor dificultad.

**DATO REAL NECESARIO:** Ciudad o provincia de operación principal. Sin este dato no se puede implementar estrategia de SEO local.

---

## 16. ENLAZADO INTERNO

**Páginas huérfanas detectadas (sin enlaces desde la Home):**
- `/sobre-ritealmar` — Solo accesible desde el Navbar
- `/como-trabajamos` — Solo accesible desde el Navbar
- `/estado-plataforma` — No enlazada desde contenido principal
- `/sectores` — Solo accesible desde Navbar

**Servicios sin enlaces desde el blog:**
- Ningún artículo de blog enlaza explícitamente a `/servicios/agentes-ia`
- Ningún artículo enlaza a `/auditoria-ia-gratis` con texto ancla descriptivo

**Oportunidad:** Los artículos de blog deben terminar con un CTA y enlace a la página de servicio más relacionada.

---

## 17. THIN CONTENT

No se detecta thin content en las páginas actuales revisadas. Los artículos de blog son extensos (>1500 palabras). Las páginas de servicios tienen estructura sólida.

**Excepción potencial:** Las páginas de proyectos dinámicas (`/proyectos/almar-fsm`, etc.) — si tienen muy poco texto y dependen de datos de `projectsData.ts`, pueden ser thin.

---

## 18. CANIBALIZACIÓN

**Riesgo detectado:** Las páginas `/casos-de-exito`, `/casos-de-uso-ia` y los tres casos individuales compiten por keywords similares ("casos ia empresas", "ejemplos automatizacion"). Convendría diferenciar claramente su intención y hacer que una sea la pilar page enlazando a las otras como "spoke pages".

---

## 19. QUICK WINS (Sin implementar — solo diagnóstico)

| # | Acción | Impacto | Riesgo | Esfuerzo |
|---|--------|---------|--------|----------|
| 1 | **Crear `og-image.jpg` real** (o renombrar `logo-fondo.webp`) | 🔴 Alto | Muy bajo | 30 min |
| 2 | **Corregir favicon**: cambiar `type="image/svg+xml"` a `type="image/webp"` | 🟡 Medio | Muy bajo | 5 min |
| 3 | **Añadir FAQPage schema** al componente FAQ.tsx | 🟡 Medio | Bajo | 2h |
| 4 | **Limpiar sitemap**: eliminar URLs de herramientas interactivas y páginas técnicas | 🟡 Medio | Bajo | 1h |
| 5 | **Corregir title de Precios**: "Ritealmar" → "RITEALMAR" | 🟢 Bajo | Muy bajo | 5 min |
| 6 | **Añadir canonical explícito** en páginas de servicios que no lo tienen | 🟡 Medio | Bajo | 2h |

---

## 20. CAMBIOS DE IMPACTO MEDIO

| Acción | Descripción |
|--------|-------------|
| Añadir `Service` schema a páginas de servicios | Mejora rich snippets |
| Añadir `Article` schema visible en HTML estático | Actualmente solo en JS |
| Crear página `/contacto` con contenido propio (actualmente redirige) | Keyword "contacto" perdida |
| Mejorar enlazado interno desde blog hacia servicios | Aumenta autoridad de páginas clave |
| Revisar y homogeneizar los H1 en páginas de servicios dinámicas | Consistencia SEO |

---

## 21. CAMBIOS DE IMPACTO ALTO

| Acción | Descripción | Complejidad |
|--------|-------------|-------------|
| **Prerendering de páginas públicas** | Generar HTML estático con metadatos correctos por ruta | Media |
| **Crear og-image por sección** | LinkedIn/WhatsApp previews de calidad por página | Media |
| **Configurar Google Search Console correctamente** | Enviar sitemap, solicitar indexación de URLs clave | Muy baja |
| **Solicitar indexación manual de páginas prioritarias** en GSC | Acelerar indexación inicial | Muy baja |

---

## 22. DECISIÓN ARQUITECTÓNICA SEO

### OPCIÓN RECOMENDADA: B. SPA + Prerender de páginas públicas

**Argumentos:**

- La SPA funciona correctamente. No justifica una migración completa a Next.js o Astro.
- El número de páginas SEO es manejable (<60 URLs importantes).
- Cloudflare Pages soporta Workers que pueden servir HTML prerenderizado por ruta.
- Prerender resuelve el 95% del problema SEO sin tocar la arquitectura React actual.
- Alternativa más ligera: usar `vite-plugin-prerender` o `react-snap` para generar HTML estático de cada ruta en build time.

**Descartado:**
- **Migración a Next.js/Astro**: innecesaria, coste y riesgo desproporcionados al tamaño del sitio.
- **SSR en Cloudflare Workers**: posible pero de mayor complejidad que prerender para este caso.

**La decisión final sobre prerender debe tomarla el propietario**, ya que afecta al proceso de build y deploy.

---

## 23. INFORMACIÓN QUE DEBE APORTAR EL PROPIETARIO

| # | Dato necesario | Para qué |
|---|----------------|----------|
| 1 | **Acceso a Google Search Console** | Ver indexación real, impresiones, keywords, CWV |
| 2 | **Ciudad/provincia de operación principal** | SEO local |
| 3 | **Aprobación para implementar prerender** | Resolver el problema crítico de SPA |
| 4 | **Imagen OG real** (1200×630px) para la Home | Resolver og-image inexistente |
| 5 | **Verificar si se ha enviado el sitemap en GSC** | Confirmar si Google conoce las URLs |

---

## 24. ROADMAP SEO PRIORIZADO

### SPRINT 1 — Inmediato (sin arquitectura, sin riesgo)
1. Crear y subir `og-image.jpg` real (1200×630px) → Resuelve el problema de imagen en todas las redes sociales.
2. Enviar sitemap en Google Search Console y solicitar indexación de las 10 URLs más importantes.
3. Corregir favicon `type`.
4. Eliminar páginas técnicas del sitemap (`/estado-plataforma`).
5. Limpiar sitemap de URLs que no existen o son herramientas.

### SPRINT 2 — Quick Wins SEO código (bajo riesgo)
1. Añadir FAQPage schema al componente FAQ.tsx.
2. Añadir Service schema en páginas de servicios principales.
3. Mejorar canonical en páginas sin él.
4. Añadir enlaces desde artículos de blog hacia páginas de servicio relacionadas.

### SPRINT 3 — Prerender (requiere aprobación)
1. Evaluar `react-snap` o `vite-plugin-prerender` para generar HTML estático por ruta.
2. Probar en 5 páginas prioritarias.
3. Validar con herramienta de inspección de URLs de GSC que Google ve el contenido correcto.

### SPRINT 4 — Contenido y autoridad
1. Crear artículos de blog para keywords sin cobertura: agentes IA, CRM a medida, IA para abogados.
2. Añadir FAQ específica por página de servicio.
3. Considerar SEO local si se confirma ubicación.
