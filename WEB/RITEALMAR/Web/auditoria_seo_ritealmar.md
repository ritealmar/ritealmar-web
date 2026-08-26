# Auditoría SEO Integral y Estratégica - RITEALMAR

Esta auditoría ha sido elaborada bajo la premisa comercial principal: posicionar a **RITEALMAR** de forma transversal como una empresa española de **IA, automatización, software y soluciones digitales para empresas y PYMEs**, utilizando los sectores (clínicas, inmobiliarias, abogados) únicamente como estrategias de captación *long-tail*.

---

## 1. Resumen ejecutivo

1.  **Arquitectura ambigua:** Actualmente, la web presenta una arquitectura muy plana en el enrutamiento (ej. `App.tsx`), donde páginas pilar de servicios, landing pages específicas para Ads y artículos de blog están al mismo nivel sin una jerarquía clara en las carpetas.
2.  **Canibalización semántica:** Existen diversas URLs compitiendo por términos idénticos o muy similares, diluyendo la autoridad de página (ej. `/chatbots-ia` vs `/servicios/agentes-ia` vs `/automatizacion-whatsapp-empresas`).
3.  **Indexación saludable pero optimizable:** Los datos de Search Console (32 indexadas, 3 no indexadas, 0 con error de rastreo) confirman que no hay bloqueos técnicos severos, pero la baja posición media (66,9) y bajo CTR (0,7%) indican que Google indexa el contenido pero no lo considera la respuesta más relevante, probablemente por falta de E-E-A-T o autoridad de clúster.
4.  **Tensión entre nicho y generalista:** Google empieza a reconocer URLs transaccionales sectoriales (abogados, clínicas), pero la Home y las páginas de servicios principales carecen de la fuerza y el enlazado interno para traspasar autoridad general.
5.  **Titles y metas inconsistentes:** Varios Títulos SEO están sobre-optimizados, mientras que otros no atacan correctamente la intención de búsqueda B2B (empresas/pymes).
6.  **Pérdida de fuerza en páginas de sector:** Las páginas como `/ia-para-despachos-abogados` o `/clinicas` están actuando como silos estancos en lugar de páginas satélite que enlacen hacia los servicios núcleo (CRM, Desarrollo Web, Automatización).
7.  **Preparación para Inteligencia Artificial (AEO):** Las páginas adolecen de estructuras de datos tipo *Pregunta-Respuesta* y marcado Schema avanzado que facilite a ChatGPT o Gemini citar a RITEALMAR de manera directa.
8.  **Enlazado interno pobre:** Ausencia de un "Hub and Spoke" (Clúster de contenidos). Las entradas de blog (ej. `/blog/automatizacion-citas-clinicas-ia`) no dirigen fluidamente autoridad y usuarios hacia las landings de servicio comercial.
9.  **Falta de "Trust Signals" (E-E-A-T):** La web está muy orientada al beneficio tecnológico, pero carece de señales de confianza empresarial (Quiénes somos, metodología clara, herramientas tecnológicas utilizadas, soporte español real).
10. **CTAs dispersos:** Aunque se han unificado recientemente, el diseño de la conversión necesita concentrarse en un flujo predecible: Contenido -> Servicio -> `/auditoria-ia-gratis`.
11. **Rutas duplicadas:** Varias rutas en el Router redirigen al mismo componente (ej. `/soluciones/ia-clinicas-medicas`, `/soluciones/clinicas`, `/clinicas`), lo que puede generar contenido duplicado si no se maneja estrictamente con `canonical`.
12. **Contenido genérico:** En ciertas landings generadas dinámicamente, el texto peca de ser excesivamente general en lugar de atacar puntos de dolor específicos de la pyme española.
13. **Falta Schema B2B:** No se aprovechan schemas como `B2BBusiness`, `ProfessionalService` o `FAQPage` integrados en el código.
14. **Quick Wins disponibles:** Con unas simples redirecciones 301, limpieza del Sitemap y optimización de etiquetas H1 y Títulos, se podría subir la posición media rápidamente.
15. **Conclusión comercial:** RITEALMAR tiene la base tecnológica perfecta. El reto SEO no es técnico, es puramente de **arquitectura de la información e intención de búsqueda**.

---

## 2. Estado SEO actual

*   **SEO técnico:** 8/10 (Renderización limpia, SPA rápida mediante Vite/React, lazy loading implementado, no hay bloqueos de robots).
*   **Contenido:** 6/10 (Textos persuasivos pero algo genéricos en algunas secciones, falta especialización B2B y semántica profunda).
*   **Arquitectura:** 4/10 (Rutas dispersas, falta de carpetas lógicas `/servicios/`, `/sectores/`).
*   **Autoridad temática:** 5/10 (Poca densidad de contenidos pilar; los artículos del blog están desconectados de las ventas).
*   **Enlazado interno:** 3/10 (Faltan menús contextuales, breadcrumbs (migas de pan) y enlaces en el cuerpo del texto).
*   **Conversión:** 7/10 (Puntos de contacto claros con WhatsApp y Calendly, pero flujo mejorable).
*   **Preparación para IA (AEO):** 4/10 (Estructuras visuales bonitas, pero difíciles de parsear sin semántica de tablas, listas o schemas de preguntas/respuestas claros).

---

## 3. Problemas críticos

1.  **Falta de Jerarquía URL:** Al tener páginas comerciales colgadas de la raíz (ej. `/chatbots-ia`, `/diseno-web`, `/automatizacion-whatsapp-empresas`), Google no entiende cuál es la relación de pertenencia. La estructura actual es plana.
2.  **Canibalización de Servicios de IA Conversacional:** Las páginas `/chatbots-ia`, `/servicios/agentes-ia` y `/automatizacion-whatsapp-empresas` luchan por el mismo espacio semántico.
3.  **URLs duplicadas o redundantes en Router:** Las rutas múltiples (`/clinicas`, `/soluciones/clinicas`, `/soluciones/ia-clinicas-medicas`) renderizan el mismo componente. Si las tres se indexan sin canonical estricta, Google penalizará por contenido duplicado.
4.  **Carencia de Contexto de Marca (E-E-A-T):** No hay suficiente respaldo visible (página de "Sobre nosotros", datos de empresa física/fiscal, stack tecnológico, metodología) que consolide a RITEALMAR como una empresa de software española B2B fiable.

---

## 4. Quick wins

1.  **Añadir Breadcrumbs (Migas de Pan):** Implementar navegación estructural para mejorar el enlazado interno y el entendimiento semántico (Ej: Inicio > Servicios > Automatización de Procesos).
2.  **Limpieza de H1:** Asegurar que cada URL tiene un único y potente H1 enfocado a "Servicio + Empresa/Pyme".
3.  **Integrar JSON-LD:** Añadir schema `Organization` y `ProfessionalService` en la Home.
4.  **Canonicalización:** Confirmar que todas las rutas redundantes apuntan hacia la ruta oficial vía `<link rel="canonical">`.
5.  **Ajuste de Meta Títulos:** Cambiar los títulos actuales por estructuras B2B de alta intención comercial (ver punto 8).

---

## 5. Arquitectura SEO recomendada

La web debe transmitir la especialización transversal, utilizando subdirectorios (carpetas) virtuales para estructurar la autoridad:

*   `https://ritealmar.es/` (Home: Empresa IA y Software para PYMEs)
    *   `/servicios/` (Hub principal)
        *   `/servicios/automatizacion-ia-empresas`
        *   `/servicios/agentes-chatbots-ia` (Consolidado)
        *   `/servicios/desarrollo-software-medida`
        *   `/servicios/desarrollo-web-pymes`
        *   `/servicios/seo-empresas`
    *   `/sectores/` (Casos de uso Long-Tail)
        *   `/sectores/ia-para-clinicas`
        *   `/sectores/ia-inmobiliarias`
        *   `/sectores/ia-despachos-abogados`
        *   `/sectores/ia-ecommerce`
    *   `/blog/` (Contenido Informacional para nutrir a Servicios)
    *   `/auditoria-ia-gratis` (Conversión)

Esta estructura comunica a Google: *"Somos una agencia de servicios tecnológicos, y aplicamos esos servicios a estos sectores específicos."*

---

## 6. Mapa de palabras clave

### General (Servicios CORE transversales)
*   empresa de inteligencia artificial para pymes
*   agencia de automatización de procesos
*   soluciones IA para empresas
*   desarrollo de software a medida empresas
*   agentes de IA para atención al cliente
*   automatización WhatsApp empresas
*   desarrollo y diseño web corporativo

### Sectores (Long-Tail Satélites)
*   inteligencia artificial para despachos de abogados
*   automatización de citas clínicas dentales
*   chatbots inmobiliarias
*   software a medida para inmobiliarias
*   automatización captación ecommerce

---

## 7. Canibalizaciones

| Consulta/Intención | URL A | URL B | Riesgo | Recomendación |
| :--- | :--- | :--- | :--- | :--- |
| **Inteligencia Conversacional** | `/chatbots-ia` | `/servicios/agentes-ia` | **ALTO** | Consolidar ambas bajo `/servicios/agentes-chatbots-ia` o diferenciar claramente la intención de búsqueda (Chatbot = Reglas/Atención; Agente IA = Procesos complejos). |
| **Diseño Web Sectorial** | `/diseno-web` | `/diseno-web-clinicas-dentales` y `/diseno-web-inmobiliarias` | **MEDIO** | Mantener `/diseno-web` como página CORE transaccional B2B, y asegurar que las sectoriales apunten a la principal. |
| **Automatización General** | `/servicios/automatizacion-procesos` | `/automatizaciones-ia` (Data) y `/plan-automatizacion-ia` | **MEDIO** | Definir `/servicios/automatizacion-procesos` como Pilar (Hub). Las demás deben ser eliminadas, redirigidas o convertidas en guías informativas. |

---

## 8. Titles y metas

*Nota: Actualmente hay títulos demasiado genéricos o que parecen enfocados al usuario B2C en lugar del B2B.*

| URL | Title Recomendado | Meta Recomendada |
| :--- | :--- | :--- |
| **Home (`/`)** | Empresa de Inteligencia Artificial y Automatización para PYMEs \| RITEALMAR | Soluciones de Inteligencia Artificial, software a medida y automatización para empresas españolas. Optimiza procesos y aumenta tu rentabilidad. |
| **Agentes IA** | Agentes de IA y Chatbots Inteligentes para Empresas \| RITEALMAR | Desarrollo e integración de Agentes IA y Chatbots para atención al cliente y ventas. Automatiza tu comunicación 24/7. |
| **Desarrollo Web** | Diseño y Desarrollo Web a Medida para Empresas \| RITEALMAR | Creación de páginas web corporativas de alto rendimiento. Diseños rápidos, seguros y enfocados en la captación B2B. |
| **WhatsApp IA** | Automatización de WhatsApp Business API con IA para Empresas | Transforma tu WhatsApp en una máquina de atención al cliente y ventas con Inteligencia Artificial. Conexión directa a CRM. |
| **IA Abogados** | Inteligencia Artificial para Despachos de Abogados \| RITEALMAR | Automatización administrativa, clasificación de documentos y chatbots especializados para despachos legales. |

---

## 9. Enlazado interno

| Página origen | Anchor recomendado | Página destino | Motivo |
| :--- | :--- | :--- | :--- |
| `/ia-para-despachos-abogados` | automatizar procesos administrativos | `/servicios/automatizacion-procesos` | Empujar autoridad de sector (Long tail) hacia el servicio principal. |
| `/blog/automatizacion-citas-clinicas-ia` | agente inteligente de WhatsApp | `/automatizacion-whatsapp-empresas` | Convertir tráfico informativo del blog en leads cualificados de servicio. |
| `/servicios/automatizacion-procesos` | soluciones específicas para clínicas | `/soluciones/ia-clinicas-medicas` | Demostrar capilaridad y experiencia a Google. |
| **(Todas)** | Auditoría tecnológica gratuita | `/auditoria-ia-gratis` | Concentrar el "link juice" en la página de conversión principal. |

---

## 10. Contenidos (Mejoras en páginas existentes)

1.  **Home (`/`):** El H1 actual debe ser modificado para incluir "Empresas/PYMEs" e "IA/Software". Necesitamos responder rápidamente: *¿Qué hace Ritealmar? ¿Para quién? ¿Con qué beneficio?*
2.  **Servicios:** Añadir una sección de "Integraciones y Stack Tecnológico" (Ej: *Integramos nuestros Agentes IA con Hubspot, Salesforce, n8n, Make, OpenAI, React...*). Google busca entidades tecnológicas para posicionar servicios de software.
3.  **Metodología:** Las landings necesitan apartados de "Cómo trabajamos" de forma técnica pero accesible (Discovery -> Arquitectura -> Desarrollo -> Despliegue -> Mantenimiento).
4.  **FAQ de Negocio:** Actualizar las preguntas frecuentes para responder miedos B2B (Coste de implantación, Seguridad y Privacidad de los datos de la empresa, Curva de aprendizaje del personal).

---

## 11. Nuevos contenidos (Clusters propuestos)

Propuesta de calendario de contenidos (Top 10) orientados a empresas:

| Título | Intención | Página que apoya | Prioridad |
| :--- | :--- | :--- | :--- |
| ¿Qué es la automatización de procesos empresariales (RPA + IA)? | Educacional | `/servicios/automatizacion-procesos` | 🔴 1 |
| Diferencias entre un Chatbot tradicional y un Agente de Inteligencia Artificial | Transaccional/Educ. | `/servicios/agentes-ia` | 🔴 1 |
| Cómo conectar WhatsApp Business a tu CRM (Guía para Pymes) | Resolutiva | `/automatizacion-whatsapp-empresas` | 🔴 1 |
| Casos de uso de IA en Pymes españolas: Ejemplos reales | Inspiracional | Home / Auditoría | 🟠 2 |
| Cuánto cuesta desarrollar un software a medida para tu empresa | Transaccional (Precio) | `/apps-para-empresas` | 🟠 2 |
| IA Act europea: Cómo afecta a la tecnología en tu empresa | Legal/Confianza (E-E-A-T)| Home / Contacto | 🟡 3 |
| Ventajas de automatizar la captación de leads en B2B | Educacional | `/servicios/automatizacion-procesos` | 🟡 3 |

---

## 12. Visibilidad en IA (AEO: Artificial Engine Optimization)

Para aparecer en Google AI Overviews, ChatGPT Search y Perplexity:
1.  **Definiciones directas:** Usar la estructura semántica de "Pregunta (H2/H3) + Respuesta inmediata (Párrafo corto en negrita)".
    *   *Ejemplo: ¿Qué es un Agente de IA para empresas? Un Agente de IA es un software autónomo que...*
2.  **Tablas comparativas:** Las IAs aman extraer datos tabulares estructurados. Añadir tablas comparativas (Ritealmar vs Agencias Tradicionales / Chatbot vs Agente IA).
3.  **Citar herramientas:** Mencionar claramente qué stacks se utilizan (Python, Node.js, GPT-4, Llama 3, React) ayuda a que los LLMs asocien Ritealmar con empresas de ingeniería y desarrollo real, no revendedores.

---

## 13. SEO técnico

1.  **Redirecciones Innecesarias:** La ruta `/contacto` redirige mediante JavaScript a `/auditoria-ia-gratis` en lugar de una redirección 301 en servidor (o en su defecto un componente `Navigate` o `meta refresh`), lo cual no transmite la autoridad correctamente.
2.  **BreadcrumbList JsonLD:** Inexistente.
3.  **Múltiples renderizados de Rutas:** En `App.tsx`, las rutas de clínicas (`/soluciones/ia-clinicas-medicas`, `/soluciones/clinicas`, `/clinicas`) deben resolverse a **una única URL canónica**; las demás deben ser eliminadas del array de frontend y redirigidas vía servidor (Cloudflare Pages/Vite).

---

## 14. Prioridades

| Tarea | Clasificación |
| :--- | :--- |
| Resolver Canibalización (Agentes vs Chatbots) y Rutas duplicadas de Sectores | 🔴 PRIORIDAD 1 |
| Reestructurar H1s, Títulos y Metas de Home y Servicios principales (Foco Empresas) | 🔴 PRIORIDAD 1 |
| Implementar Schema.org (Organization) y mejorar E-E-A-T | 🟠 PRIORIDAD 2 |
| Construir Enlazado Interno desde el Blog y Sectores hacia Servicios | 🟠 PRIORIDAD 2 |
| Redactar nuevos contenidos FAQ B2B y Tablas AEO | 🟡 PRIORIDAD 3 |
| Rediseñar URLs (Si es viable a nivel de negocio migrar a carpetas `/servicios/`) | 🟢 OPCIONAL |

---

## 15. Plan de implementación

1.  **Ajuste Títulos/Metas/H1:** Actualización masiva de los metadatos en las props de `SeoLandingLayout` de todas las páginas de servicio y Home, enfocándolos en B2B.
2.  **Resolución de Duplicados en App.tsx:** Limpieza del `Router` eliminando rutas redundantes como `/soluciones/clinicas` (dejando solo la final definitiva) y configurando redirects a nivel de hosting.
3.  **Fusión Semántica:** Si se aprueba, combinar `/chatbots-ia` y `/servicios/agentes-ia`.
4.  **Inyección de E-E-A-T y Schema:** Creación de un componente `SeoSchema.tsx` que inyecte `JSON-LD` (Organization) en el `<head>`.
5.  **Enlazado interno:** Modificar los textos de las páginas sectoriales y posts de blog actuales para forzar enlaces con "anchor text" exacto hacia las páginas de servicio y la página de "Auditoría IA Gratuita".
6.  **Componente Breadcrumbs:** Desarrollar e integrar un componente de migas de pan para mejorar el rastreo estructural.
7.  **Optimización AEO:** Añadir bloques FAQ claros y directos en todas las *Landing Pages* mediante `FAQPage` schema y H3 estructurados.
8.  **Crear Hubs Virtuales:** Aunque no se cambien las rutas físicas en React, crear bloques visuales en la Home que dividan claramente: "Tecnología Base" vs "Soluciones por Industria".
9.  **Despliegue y Sitemaps:** Generar un nuevo `sitemap.xml` dinámico o estático limpio que refleje la nueva arquitectura y enviarlo a Search Console.
10. **Monitorización Post-Auditoría:** Observar fluctuación en Search Console a 15 y 30 días.

---

## 16. Archivos que habría que modificar (NO MODIFICADOS AÚN)

*   `src/App.tsx` (Limpieza de rutas duplicadas).
*   `src/components/SeoLandingLayout.tsx` (Para inyección de Breadcrumbs y nuevos Schemas JSON-LD).
*   `src/data/seoPagesData1.ts` hasta `seoPagesData4.ts` (Modificación de textos, metadatos, H1 y FAQs).
*   `src/pages/Home.tsx` (Ajustes de H1, copys orientados a B2B transversal).
*   `src/data/servicesData.ts` (Copys de servicios generales).
*   Archivos de Blog (Ej: `src/pages/BlogAutomatizacionCitasClinicas.tsx`) (Para inyectar enlazado interno).

---

## 17. Riesgos

*   **Pérdida temporal de posiciones (Google Dance):** Al cambiar los títulos de las páginas que ya tienen impresiones (ej. `/ia-para-despachos-abogados`), Google revaluará la página. Podría haber un bajón de 1-2 semanas antes de estabilizarse al alza.
*   **Caídas de Analytics / Indexación si se alteran URLs:** Si se decide cambiar las URLs base (ej. migrar `/diseno-web` a `/servicios/diseno-web`) SIN establecer un Redirect 301 a nivel de servidor (Cloudflare Pages `_redirects`), se perderá tráfico, indexación acumulada y se romperán enlaces compartidos en redes/WhatsApp.
*   **Conflictos de SPA (Single Page Application):** Dado que es una web React + Vite (client-side render o static site generation), cualquier cambio de enrutamiento mal gestionado en `App.tsx` puede resultar en páginas 404 o comportamientos anómalos si el servidor no está bien configurado para un fallback al `index.html`. 
*   **Dilución del mensaje en Home:** Si intentamos abarcar demasiadas keywords en la Home, corremos el riesgo de no posicionar bien para ninguna. El balance debe ser quirúrgico.
