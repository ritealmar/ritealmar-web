# RITEALMAR - Visual Proof & Credibility Report

## 1. Inventario de Imágenes Actuales
El análisis del repositorio ha detectado los siguientes assets utilizados:
* `almar.webp` (75KB) - Captura real (ALMAR FSM)
* `aurenta.webp` (63KB) - Captura real (Aurentia App)
* `ritecore.webp` (65KB) - Captura real (RITECORE)
* `panel.webp` (65KB) - Captura real (Panel Central)
* `stylio.jpg` (912KB) - Captura real (STYLIO)
* `assets/almar_tecnicos.png` (41KB) - Captura real (App ALMAR técnicos)
* `assets/almar_traspasos.png` (70KB) - Captura real (App ALMAR logística)
* Múltiples URLs remotas apuntando a `images.unsplash.com` en varios componentes.

## 2. Imágenes de Stock (Unsplash) Detectadas
Las siguientes secciones dependían exclusivamente de imágenes de Unsplash:
* `Testimonials.tsx` (Avatares) - Actualmente inactivo/comentado en producción.
* `ServicesSection.tsx` - Imágenes decorativas conceptuales (8 imágenes).
* `RitealmarCorpLanding.tsx` - Demos y mockups.
* `RestaurantDemo.tsx` - Imágenes de platos de sushi.
* `AboutSection.tsx` - Foto conceptual de un ingeniero.
* `PortfolioSection.tsx` - Proyectos mostrados previamente con portadas abstractas.
* `AlmarFeatureTour.tsx` - Capturas genéricas de logística y chat.

## 3. Assets Reales Encontrados y Seguros para Publicar
Se han identificado imágenes propias dentro de `/public` y `/public/assets` aptas para ser mostradas en el portfolio, ya que son aplicaciones demostrativas y no exponen datos sensibles de terceros:
* `/almar.webp`
* `/aurenta.webp`
* `/ritecore.webp`
* `/panel.webp`
* `/stylio.jpg`
* `/assets/almar_tecnicos.png`
* `/assets/almar_traspasos.png`

## 4. Assets que Requieren Ofuscación
Actualmente, los screenshots subidos a `public/` ya han sido sanitizados o generados en modo "demo/sandbox" por el equipo, por lo que no se han detectado imágenes problemáticas en producción con PII (Información Personal Identificable). No obstante, cualquier captura futura del panel real de *ALMAR FSM* requeriría difuminar nombres de operarios y direcciones físicas de clientes antes de integrarse.

## 5. Assets que Faltan (ASSET REAL NECESARIO)
Las siguientes soluciones en el Portfolio siguen dependiendo de Unsplash por no tener assets reales subidos:
* **Facade AI Pro:** Prototipo. *Requiere screenshot del análisis de fachadas.*
* **Rehab-IA Web:** Landing Page Corporativa. *Requiere screenshot ofuscado.*
* **Sección de Automatizaciones:** Se requiere documentar flujos (ej: Make, n8n) para la sección comercial.

## 6. Cambios Realizados
* **`PortfolioSection.tsx`**: Sustituidas 5 URLs de Unsplash por las 5 imágenes reales (`almar.webp`, `aurenta.webp`, `ritecore.webp`, `panel.webp`, `stylio.jpg`). Esto elimina el aspecto artificial del portfolio y subraya la autoría de RITEALMAR.
* **`AlmarFeatureTour.tsx`**: Sustituidas 2 URLs de Unsplash genéricas por los assets reales `almar_traspasos.png` y `almar_tecnicos.png`, mostrando la interfaz real que usan los operarios.

## 7. Portfolio Actualizado
El portafolio expone ahora el trabajo genuino de la agencia:
* ALMAR FSM → Solución interna *(Imagen Real WebP)*
* Aurentia App → Solución propia *(Imagen Real WebP)*
* RITECORE → Solución propia *(Imagen Real WebP)*
* Panel Central → Solución demostrativa *(Imagen Real WebP)*
* STYLIO → Solución demostrativa *(Imagen Real JPG)*
* Facade AI Pro → Prototipo *(Stock - Asset Pendiente)*
* Rehab-IA Web → Solución demostrativa *(Stock - Asset Pendiente)*

## 8. Home Actualizado
La sección `Home.tsx` ya incluye `PortfolioSection` que sirve de escaparate real del tipo "Soluciones que construimos", por lo que no se ha añadido una sección nueva redundante. Esto mantiene un flujo comercial limpio y no incrementa el CLS ni empeora la carga.

## 9. Impacto Estimado en Percepción de Confianza
**ALTO.** Sustituir abstracciones de código o portátiles genéricos de Unsplash por la interfaz visual real de las aplicaciones (`aurenta.webp`, `almar.webp`, etc.) demuestra inmediatamente que RITEALMAR ejecuta y entrega software real y complejo, bajando el riesgo percibido por los prospectos corporativos.

## 10. Peso de Nuevas Imágenes
* `almar.webp` (75KB), `aurenta.webp` (63KB), `ritecore.webp` (65KB), `panel.webp` (65KB) son muy ligeras y están en formato moderno `WebP`.
* `almar_tecnicos.png` (41KB) y `almar_traspasos.png` (70KB) son también extremadamente ligeras.
* *Aviso de QA:* `stylio.jpg` pesa `912KB` y no está en WebP. Al cargarse con `loading="lazy"`, no bloquea el FCP/LCP inicial de la web, pero se recomienda optimizar en el futuro.

## 11. Resultado de QA Automático
* **Comando:** `npm run build`
* **Exit Code:** `0` (Success)
* Las imágenes cargan correctamente en entorno local con los sufijos optimizados de Vite.

## 12. Elementos Pendientes de Aprobación
* Capturar screenshots ofuscados para *Facade AI Pro* y *Rehab-IA Web*.
* Optimización de `stylio.jpg` a formato `WebP`.
* Aprobación para añadir pantallazos de *Flujos de Make/n8n* en páginas de automatización.
