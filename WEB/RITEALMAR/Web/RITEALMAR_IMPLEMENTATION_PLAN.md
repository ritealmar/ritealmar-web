# PLAN DE IMPLEMENTACIÓN TÉCNICO Y COMERCIAL - RITEALMAR

## 1. RESUMEN EJECUTIVO
Este plan detalla las acciones comerciales y técnicas para optimizar la web de RITEALMAR, priorizando la conversión, la generación de confianza B2B y la claridad del mensaje para PYMES. Se ha descartado la refactorización profunda inmediata (como SSR o cambiar el routing) hasta no tener datos analíticos que lo justifiquen. El enfoque actual se centra en "Quick Wins" de copy, reducción de fricción en formularios y humanización de la marca.

## 2. CAMBIOS QUE RECOMIENDAS HACER YA
- Simplificación extrema del formulario de contacto (de 9 campos a 3).
- Sustitución de terminología técnica abstracta ("LLM", "end-to-end") por beneficios tangibles para la PYME.
- Reformulación de los CTAs para que respondan a la intención del usuario.
- Cambio de copy en la sección de Precios para enmarcar el coste frente al ahorro de horas (ROI).
- Solucionar backend de email y CAPTCHA (RGPD y Spam).

## 3. CAMBIOS QUE RECOMIENDAS HACER DESPUÉS
- Creación de sección "Nosotros/Equipo" con sesión de fotos reales.
- Adición de páginas específicas de casos de éxito completos (cuando haya datos y aprobación).
- Lazy loading de componentes pesados (Performance).
- Prerendering para SEO si es necesario.

## 4. CAMBIOS QUE NECESITAN MEDICIÓN
- Decisión sobre migrar a SSR/Next.js (medir indexabilidad actual en GSC y tiempos de renderizado orgánico).
- Efectividad del "DashboardSimulation" en el Hero (hacer A/B testing para ver si distrae o ayuda).
- Tracking de eventos de scroll y rebote para ver si el usuario llega a leer todo el contenido.

## 5. CAMBIOS QUE NO RECOMIENDAS
- Eliminar la arquitectura SPA o refactorizar el enrutamiento (`react-router`) ahora mismo sin datos (esfuerzo alto, ROI incierto a corto plazo).
- Inventar testimonios, métricas o "casos de éxito" falsos.
- Eliminar la protección de Turnstile.

---

## 6. HERO

**Análisis Actual (Primeros 5 segundos):**
- **¿Qué entiende un empresario?** Entiende que es una empresa muy técnica ("Soluciones tecnológicas diseñadas para escalar"), pero quizá no qué problema exacto le van a resolver hoy en su PYME.
- **¿Para quién trabajamos?** No queda del todo claro de inmediato si es para grandes corporaciones o PYMES.
- **¿Qué problema resolvemos?** Genérico.
- **CTA Principal:** "Solicitar auditoría gratuita". Es bueno, pero exige mucho compromiso mental inicial sin saber antes qué van a ganar.
- **DashboardSimulation:** Es muy visual y "premium", pero sus animaciones constantes pueden distraer de leer el texto principal (conversión).
- **Lenguaje:** Ligeramente abstracto.

**Propuesta:**
- **H1 Recomendado:** "Automatizamos las tareas repetitivas de tu empresa para que vuelvas a vender."
- **Subtítulo:** "Diseño web, CRMs y asistentes de IA que ahorran horas a tu equipo cada semana. Implementación rápida, sin tecnicismos y con retorno desde el primer mes."
- **CTA Principal:** "Solicitar auditoría gratuita" (Mantenerlo, pero rodeado de confianza).
- **CTA Secundario:** "Ver casos de ahorro real" (solo si tenemos los casos listos, si no, omitir).
- **Elementos de Confianza:** Justo debajo del CTA: "✓ Sin cuotas ocultas | ✓ Proyectos llave en mano | ✓ Implementado en +[X] empresas".

**Ficha de Implementación:**
CAMBIO: Copy y estructura del Hero.
PROBLEMA ACTUAL: Mensaje muy técnico, falta de beneficios directos para PYMES.
ARCHIVO: `src/components/Hero.tsx`
COMPONENTE: `Hero`
LÍNEAS O ZONA APROXIMADA: 130-150
QUÉ PROPONES: Cambiar H1, P y añadir insignias de confianza debajo del botón.
POR QUÉ: Aumenta la claridad en los primeros 5 segundos. Un decisor no compra "tecnología", compra "ahorro de costes" o "aumento de ventas".
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Ninguna
DATOS REALES NECESARIOS: Número de empresas clientes (si aplica).
¿REQUIERE APROBACIÓN?: SÍ

---

## 7. FORMULARIOS

**Análisis Actual (`ContactForm.tsx`):**
- **Campos:** Nombre, Empresa, Email, Teléfono, Servicio, Sector, Urgencia, Mensaje, Privacidad. (9 campos)
- **Obligatorios:** Casi todos.
- **Validación:** Bien implementada en frontend.
- **Flujo:** Un solo paso.
- **Turnstile:** Integrado, pero el env key `VITE_TURNSTILE_SITE_KEY` parece no estar definido.
- **Servicio de envío:** `formsubmit.co`.
- **Mensajes:** Claros (Éxito y Error).

**Opción Recomendada: OPCIÓN A (Nombre + Email + Qué necesitas)**
Para B2B, es mejor generar volumen de leads cualificables que asustar al 80% del tráfico con formularios largos. Los detalles como "Sector", "Urgencia", "Servicio" y "Teléfono" deben obtenerse posteriormente durante la primera llamada (Discovery call) de cualificación. 

**Ficha de Implementación:**
CAMBIO: Simplificación extrema del Formulario de Contacto.
PROBLEMA ACTUAL: 8 campos obligatorios disuaden la conversión (alta fricción de entrada).
ARCHIVO: `src/components/ContactForm.tsx`
COMPONENTE: `ContactForm`
LÍNEAS O ZONA APROXIMADA: 250-450 (Mapeo de inputs)
QUÉ PROPONES: Reducir campos únicamente a: Nombre, Email Corporativo, y un textarea de Mensaje. Ocultar el resto.
POR QUÉ: Incrementará la tasa de solicitudes de contacto inmediatamente al bajar la barrera cognitiva.
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Ninguna.
DATOS REALES NECESARIOS: N/A.
¿REQUIERE APROBACIÓN?: SÍ

---

## 8. CONFIANZA

**Análisis Actual:**
- **Testimonios:** En `TestimonialsSection.tsx` hay un texto de "próximamente".
- **Casos de éxito:** En `PortfolioSection.tsx` abundan las menciones a "demo", "prototipo" o "caso de estudio técnico".
- **Logos/Clientes/Equipo:** Ausentes o poco destacados.

**Propuesta Honesta:**
Es preferible NO tener testimonios a tener un bloque que dice "próximamente". Los proyectos deben separarse claramente:

1. **PROYECTOS REALES:** Si los hay, deben dominar la página.
2. **SOLUCIONES DEMOSTRATIVAS / CAPACIDADES:** Renombrar el portfolio de "Demos" a "Soluciones Listas para Integrar". No decir "esto es un cliente falso", sino "Así es como RITEALMAR optimiza procesos".

**Ficha de Implementación:**
CAMBIO: Reenfoque de Portfolio y Ocultación de Testimonios Vacíos.
PROBLEMA ACTUAL: La falta de prueba social y la palabra "demo" destruyen la confianza y el aura premium.
ARCHIVO: `src/components/TestimonialsSection.tsx`, `src/components/PortfolioSection.tsx`
COMPONENTE: `TestimonialsSection`, `PortfolioSection`
LÍNEAS O ZONA APROXIMADA: Textos descriptivos.
QUÉ PROPONES: Ocultar `TestimonialsSection` hasta tener al menos 2 testimonios. En Portfolio, cambiar la etiqueta "Demo funcional" por "Solución Modular" o "Capacidad Técnica".
POR QUÉ: La honestidad comercial vende más. Eliminar las barreras que gritan "no tenemos suficientes clientes aún".
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Conseguir prueba social.
DATOS REALES NECESARIOS: Nombres, cargos y métricas de clientes reales.
¿REQUIERE APROBACIÓN?: SÍ

---

## 9. HUMANIZACIÓN

**Análisis Actual:**
La web es estéticamente perfecta pero gélida. No se puede descubrir quién está detrás de RITEALMAR, si son humanos en España o una IA.

**Propuesta:**
Crear un bloque en Home o una pequeña sección "El Equipo" que muestre quién dirige los proyectos.

**Ficha de Implementación:**
CAMBIO: Añadir sección de "Conoce a tu equipo".
PROBLEMA ACTUAL: Falta de conexión emocional. B2B va de confianza en personas.
ARCHIVO: `src/pages/Home.tsx`
COMPONENTE: Nuevo componente `AboutTeaser`
LÍNEAS O ZONA APROXIMADA: Antes del bloque final de contacto.
QUÉ PROPONES: Añadir una fotografía profesional (bien iluminada, no selfie) del líder/fundador de RITEALMAR con una cita: "Nos obsesiona que la tecnología sirva para hacer crecer tu empresa, no para darte dolores de cabeza." y una firma.
POR QUÉ: Muestra que hay profesionales de carne y hueso, responsables de los miles de euros de inversión del cliente.
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER DESPUÉS
DEPENDENCIAS: Sesión de fotos.
DATOS REALES NECESARIOS: [DATOS REALES NECESARIOS DEL PROPIETARIO: Foto, historia breve, ubicación].
¿REQUIERE APROBACIÓN?: SÍ

---

## 10. COPY

**Identificación de jerga vs negocio:**

- **TEXTO ACTUAL:** "Agentes de IA autónomos"
- **PROBLEMA:** Una pyme local no sabe qué es un agente autónomo ni qué le soluciona.
- **NUEVO ENFOQUE RECOMENDADO:** "Asistentes virtuales 24/7 que atienden a tus clientes por WhatsApp y agendan citas automáticamente."

- **TEXTO ACTUAL:** "Automatización end-to-end"
- **PROBLEMA:** Jerga técnica incomprensible fuera de IT.
- **NUEVO ENFOQUE RECOMENDADO:** "Conectamos tu web, tu CRM y tu facturación para que todo fluya sin intervención manual."

- **TEXTO ACTUAL:** "Desarrollo de CRMs y SaaS"
- **PROBLEMA:** Foco en la herramienta, no en el resultado.
- **NUEVO ENFOQUE RECOMENDADO:** "Plataformas a medida para gestionar todos los datos de tu empresa en un solo lugar y tomar mejores decisiones."

**Ficha de Implementación:**
CAMBIO: Traducción de copy técnico a "Copy de Negocio".
PROBLEMA ACTUAL: Lenguaje alienante para el decisor final (CEO, Dueño).
ARCHIVO: Múltiples (`ServicesBentoGrid.tsx`, Home, etc.)
COMPONENTE: Descripciones de servicios.
LÍNEAS O ZONA APROXIMADA: Párrafos descriptivos.
QUÉ PROPONES: Reescribir textos enfocándose en: ahorrar horas, eliminar errores humanos, vender más.
POR QUÉ: Es lo único que le importa al cliente que paga.
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Ninguno
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Aprobación del tono de voz.
DATOS REALES NECESARIOS: N/A
¿REQUIERE APROBACIÓN?: SÍ

---

## 11. PRECIOS

**Análisis Actual (`PreciosPage.tsx`):**
- Precios presentados desnudos ("Desde 490€", "Desde 2.500€").
- Generan objeción inmediata si no se acompañan del valor devuelto (ROI).

**Propuesta:**
Los precios B2B visibles son buenos como filtro de leads de baja calidad, pero deben estar contextualizados.

**Ficha de Implementación:**
CAMBIO: Contextualización ROI en precios.
PROBLEMA ACTUAL: Precios "crudos" que parecen un gasto en vez de inversión.
ARCHIVO: `src/pages/PreciosPage.tsx`
COMPONENTE: `PreciosPage`
LÍNEAS O ZONA APROXIMADA: Párrafos bajo los precios de las tarjetas.
QUÉ PROPONES: Añadir etiquetas descriptivas. Ej: (Automatización: "Desde 490€" -> "Amortizado en tu primer mes si te ahorramos 20h de trabajo manual").
POR QUÉ: Transforma el precio en una ecuación matemática donde el cliente gana.
IMPACTO COMERCIAL: Medio
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Ninguna
DATOS REALES NECESARIOS: [NECESITA DATOS REALES: Cifras o estimaciones comprobables de horas ahorradas típicas].
¿REQUIERE APROBACIÓN?: SÍ

---

## 12. PORTFOLIO
*(Tratado en la FASE 8)*

---

## 13. IMÁGENES

**Análisis Actual:**
Uso extensivo de imágenes de stock (Unsplash). Rebaja muchísimo la percepción premium y hace dudar si la agencia ha hecho algún proyecto real.

**Ficha de Implementación:**
CAMBIO: Reemplazo de Stock genérico por assets auténticos.
PROBLEMA ACTUAL: Desconfianza y "efecto plantilla barata".
ARCHIVO: Múltiples.
COMPONENTE: Imágenes de fondo y de tarjetas.
LÍNEAS O ZONA APROXIMADA: Etiquetas `<img>` o `bg-image`.
QUÉ PROPONES: Sustituir stock por: (a) Diagramas de flujo de automatizaciones estilo arquitectónico. (b) Mockups con capturas borrosas o reales de las interfaces hechas por RITEALMAR. (c) Fotos de la oficina/escritorio real.
POR QUÉ: Demuestra capacidades genuinas.
IMPACTO COMERCIAL: Medio
IMPACTO TÉCNICO: Bajo (Requiere optimizar JPG/WebP).
RIESGO: Bajo
DIFICULTAD: Media
PRIORIDAD: HACER DESPUÉS
DEPENDENCIAS: Diseño gráfico/Producción.
DATOS REALES NECESARIOS: Screenshots de proyectos reales o diagramas técnicos propios.
¿REQUIERE APROBACIÓN?: SÍ

---

## 14. MOBILE

**Análisis Actual:**
Responsive bien implementado en código. Sin embargo, hay un riesgo UX con el Navbar al redimensionar (algo poco común en móvil real).

**Ficha de Implementación:**
CAMBIO: Fijar comportamiento del menú móvil.
PROBLEMA ACTUAL: Menú puede quedar abierto si se pasa a versión de escritorio inesperadamente.
ARCHIVO: `src/components/Navbar.tsx`
COMPONENTE: `Navbar`
LÍNEAS O ZONA APROXIMADA: 100-140 (clases condicionales).
QUÉ PROPONES: Asegurar que el overlay del menú móvil tenga un `md:hidden` defensivo estricto.
POR QUÉ: UX sin errores.
IMPACTO COMERCIAL: Bajo
IMPACTO TÉCNICO: Bajo
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: OPCIONAL
DEPENDENCIAS: Ninguna
DATOS REALES NECESARIOS: N/A
¿REQUIERE APROBACIÓN?: SÍ

---

## 15. SEO

**Análisis Actual:**
Es una SPA (React/Vite). `index.html` está vacío y el contenido se renderiza por JS. Las etiquetas `<SEO />` no se verán en WhatsApp, LinkedIn (Open Graph roto sin SSR) y Google tardará más en indexar el JS (Second Wave of Indexing). 

**DECISIÓN SSR / SSG / PRERENDER:**
NO DECIDIR TODAVÍA. (Evaluar datos antes de reconstruir todo).

**Ficha de Implementación (Alternativa temporal sin tocar framework):**
CAMBIO: Implementar Cloudflare Prerender / Prerender.io.
PROBLEMA ACTUAL: Bots sociales (Twitter/LinkedIn) y algunos crawlers (IA) no leen contenido.
ARCHIVO: N/A (Se hace a nivel de Cloudflare / Hosting).
COMPONENTE: Infraestructura.
LÍNEAS O ZONA APROXIMADA: Configuración del dominio.
QUÉ PROPONES: Activar una regla en Cloudflare que intercepte peticiones de User-Agents conocidos (Googlebot, twitterbot, ClaudeBot) y les sirva una versión pre-renderizada en HTML del sitio.
POR QUÉ: Salva el SEO técnico de inmediato sin tener que refactorizar todo a Next.js hoy.
IMPACTO COMERCIAL: Alto (Tráfico orgánico fundamental).
IMPACTO TÉCNICO: Medio
RIESGO: Medio (Cuidado con cloaking si se configura mal).
DIFICULTAD: Media
PRIORIDAD: HACER DESPUÉS (Pero monitorear GSC desde YA).
DEPENDENCIAS: Acceso al panel de Cloudflare.
DATOS REALES NECESARIOS: Revisar qué indexa actualmente Google Search Console en `site:ritealmar.es`.
¿REQUIERE APROBACIÓN?: SÍ

---

## 16. PERFORMANCE

**Análisis Actual:**
Uso de librerías grandes y carga total del código en un solo bundle.

**Ficha de Implementación:**
CAMBIO: Lazy Loading de rutas.
PROBLEMA ACTUAL: Carga lenta en primera visita.
ARCHIVO: `src/App.tsx`
COMPONENTE: `App`
LÍNEAS O ZONA APROXIMADA: Líneas 1-20 (imports de páginas).
QUÉ PROPONES: Envolver los componentes de página (Precios, Casos de Uso, etc.) en `React.lazy()` y cargarlos dinámicamente.
POR QUÉ: Mejora drásticamente el TTI (Time to Interactive).
IMPACTO COMERCIAL: Medio
IMPACTO TÉCNICO: Medio
RIESGO: Bajo
DIFICULTAD: Media
PRIORIDAD: HACER DESPUÉS
DEPENDENCIAS: Configuración de Vite.
DATOS REALES NECESARIOS: N/A
¿REQUIERE APROBACIÓN?: SÍ

---

## 17. ROUTING

**Análisis Actual:**
Rutas gestionadas manualmente mediante `switch (window.location.pathname)`. Es deuda técnica.

**Ficha de Implementación:**
CAMBIO: No tocar el routing actualmente.
PROBLEMA ACTUAL: Deuda técnica, pero funcional.
ARCHIVO: `src/App.tsx`
COMPONENTE: `App`
LÍNEAS O ZONA APROXIMADA: General
QUÉ PROPONES: NO migrar a React Router todavía. No aporta beneficio comercial inmediato y frena el resto de iniciativas.
POR QUÉ: El usuario final no nota la diferencia y consume tiempo de desarrollo precioso.
IMPACTO COMERCIAL: Nulo
IMPACTO TÉCNICO: Medio
RIESGO: N/A
DIFICULTAD: N/A
PRIORIDAD: NO RECOMENDADO
DEPENDENCIAS: N/A
DATOS REALES NECESARIOS: N/A
¿REQUIERE APROBACIÓN?: SÍ

---

## 18. ANALÍTICA

**Análisis Actual:**
El código contiene una utilidad básica de tracking, pero en las SPAs caseras, Analytics no detecta los cambios de página automáticamente sin configuraciones extra (History changes).

**Propuesta Mínima:**
- Sesiones totales y tasa de rebote reales (GTM History triggers).
- Clics en "Solicitar auditoría".
- % de inicio de formulario vs finalización de formulario (Embudos).

**Ficha de Implementación:**
CAMBIO: Auditoría y setup de Google Tag Manager para SPA.
PROBLEMA ACTUAL: Volar a ciegas comercialmente.
ARCHIVO: `index.html`, GTM Web Container.
COMPONENTE: Tracking.
LÍNEAS O ZONA APROXIMADA: Head.
QUÉ PROPONES: Configurar un trigger en GTM de "History Change" para que cada vez que cambie la URL en React, dispare un `page_view` en GA4. Trackear el `<form onSubmit>`.
POR QUÉ: Los datos validan o destruyen las suposiciones de diseño.
IMPACTO COMERCIAL: Alto
IMPACTO TÉCNICO: Medio
RIESGO: Bajo
DIFICULTAD: Baja
PRIORIDAD: HACER AHORA
DEPENDENCIAS: Cuentas GTM/GA4 creadas.
DATOS REALES NECESARIOS: Acceso a GTM y GA4 del cliente.
¿REQUIERE APROBACIÓN?: SÍ

---

## 19. SEGURIDAD

**Análisis Actual:**
- CAPTCHA (Turnstile) roto en código (Falta el Key de Cloudflare).
- Enviar leads confidenciales B2B a través de `formsubmit.co` incumple normativas si no está super blindado, y es poco profesional (dependencia de terceros).

**Ficha de Implementación:**
CAMBIO: Backend seguro de formularios y Turnstile funcional.
PROBLEMA ACTUAL: Riesgos legales (RGPD) y pérdida potencial de leads si Turnstile crashea por falta de key.
ARCHIVO: `src/components/ContactForm.tsx`, `wrangler.toml` (a crear).
COMPONENTE: Formulario
LÍNEAS O ZONA APROXIMADA: Funciones de Submit.
QUÉ PROPONES: Añadir las variables de entorno de Turnstile reales. Reemplazar el `action="formsubmit.co"` por una llamada `fetch` a un Cloudflare Worker propio del dominio que consuma la API de Resend (o equivalente).
POR QUÉ: Mantiene los datos privados, cumple RGPD y asegura que el formulario funcione 100% libre de spam.
IMPACTO COMERCIAL: Alto (Garantiza que lleguen los emails).
IMPACTO TÉCNICO: Alto (Requiere Worker sencillo).
RIESGO: Alto (Es el punto de conversión, debe salir perfecto).
DIFICULTAD: Media
PRIORIDAD: HACER AHORA (Crítico).
DEPENDENCIAS: Cloudflare, Servicio de envío Email transaccional (Ej. Resend).
DATOS REALES NECESARIOS: Secret Keys y API keys de los servicios.
¿REQUIERE APROBACIÓN?: SÍ

---

## 20. ROADMAP

### FASE 1 — QUICK WINS (Semanas 1-2)
- Arreglar Formulario: Cambiar a Cloudflare Worker propio, insertar Turnstile key real (SEGURIDAD/CONVERSIÓN).
- Simplificar Formulario: Reducir de 9 a 3 campos (CONVERSIÓN).
- Copywriting: Cambiar Hero y descripciones para enfocarse en ROI y beneficios tangibles de PYMES, no jerga técnica (COPY).

### FASE 2 — CONVERSIÓN Y CONFIANZA (Semanas 2-3)
- Ocultar bloque vacío de Testimonios y renombrar Portfolio ("Demo" -> "Soluciones").
- Añadir ROI explícito a la página de Precios.
- Instalar Google Tag Manager y eventos para SPA para medir todo (ANALÍTICA).

### FASE 3 — HUMANIZACIÓN Y BRANDING (Semanas 4-5)
- Crear sección "Conoce al equipo" con información real y foto del líder del proyecto.
- Reemplazar progresivamente fotos de stock (Unsplash) por assets/gráficos propios.

### FASE 4 — SEO Y PERFORMANCE (Mes 2)
- Analizar datos de GSC y aplicar Prerendering (Cloudflare) si Googlebot tiene problemas de rastreo con la SPA.
- Aplicar `React.lazy()` en el código para mejorar Core Web Vitals.

### FASE 8 — ARQUITECTURA (Sin fecha - Condicionado a escalado masivo)
- Migrar enrutamiento manual a React Router.
- Evaluar reconstrucción en Next.js (Solo si se planifica un gran blog corporativo o portales privados complejos).
