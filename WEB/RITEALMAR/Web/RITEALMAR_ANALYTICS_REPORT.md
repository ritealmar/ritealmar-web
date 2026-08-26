# Informe de Implementación de Analítica - RITEALMAR

Este informe detalla la auditoría e implementación del sistema de analítica web para **RITEALMAR**. El objetivo es proporcionar una visibilidad clara sobre el comportamiento del usuario y el embudo de conversión sin afectar la estabilidad de la plataforma SPA (React).

---

## 1. Auditoría del Sistema Existente

Antes de realizar cambios, se evaluó la infraestructura de tracking actual:

- **Google Analytics 4 (GA4):** Ya existía una integración sólida mediante la etiqueta `G-ZGB3DG38K5` en `src/utils/analytics.ts`. 
- **Privacidad y Consentimiento:** La carga de eventos está condicionada a `localStorage.getItem('ritealmar_cookie_consent')`, lo que cumple con el RGPD. 
- **Métricas Base:** Las páginas vistas (`page_view`) ya están resueltas gracias al componente `AnalyticsPageTracker`, que dispara el evento de forma reactiva al cambio de ruta en la SPA.
- **Nombres de Eventos:** Se detectaron múltiples eventos desordenados (`click_auditoria_gratis`, `click_whatsapp`, etc.). Hacía falta estandarización.

---

## 2. Eventos Implementados (Estandarización)

Se ha creado un diccionario de datos (Data Layer virtual) con eventos semánticos centrados en negocio. Todos incluyen el parámetro base `page_path` para saber desde qué URL ocurren.

### 🎯 2.1. CTA Principal (`cta_primary_click`)
Sustituye a clics dispersos para unificar la intención principal (Solicitar Auditoría / Contacto).
- **Ubicaciones actualizadas:**
  - Botón principal del *Hero*.
  - Botones del *Navbar* (Desktop, Mobile Header, Mobile Menu).
- **Parámetros enviados:**
  - `cta_text`: El texto exacto del botón (ej. "Auditoría Gratuita").
  - `cta_location`: La ubicación (ej. `hero`, `navbar`, `navbar_mobile`).
  - `page_path`: Ruta actual.

### 📱 2.2. WhatsApp (`whatsapp_click`)
Mide la intención de contacto rápido directo.
- **Ubicación:** Componente `WhatsAppFloatingButton`.
- **Parámetros enviados:**
  - `location`: `floating_button`.
  - `page_path`: Ruta actual.

### 📅 2.3. Calendly (`calendly_click` & `calendly_booking_completed`)
Se ha configurado la detección inteligente del modal de Calendly.
- `calendly_click`: Se dispara al abrir el modal.
- `calendly_booking_completed`: Mediante la escucha del evento de postMessage `calendly.event_scheduled` del iframe de Calendly, podemos saber *con total seguridad* si la reserva se ha completado. No es una métrica de vanidad, es una conversión real.
- **Parámetros enviados:**
  - `location`: `modal`.
  - `page_path`: Ruta actual.

### 📝 2.4. Ciclo de Vida del Formulario de Contacto
Se ha implementado un seguimiento completo del embudo dentro del componente `ContactForm`.
- `form_start`: Se dispara *una única vez* en cuanto el usuario toca cualquier campo (empieza a escribir).
- `form_submit`: Se dispara al hacer clic en "Enviar" (intención de envío).
- `form_error`: Se dispara si la validación falla (ej. email incorrecto, mensaje corto) o falla la conexión.
  - Parámetros extra: `error_type` (ej. `validation_email`, `submission_failed`).
- `form_success`: Se dispara únicamente cuando `formsubmit.co` confirma que el email se ha enviado.

---

## 3. Guía de Comprobación en Google Analytics 4

Para validar que los datos están fluyendo correctamente, sigue estos pasos en tu cuenta de GA4 de Ritealmar:

### A. Vista en Tiempo Real (Debug Mode)
1. Ve a **Administrar (Admin) > DebugView**.
2. Abre la web de Ritealmar en tu navegador. Puedes añadir a la URL el parámetro `?debug_mode=true` o usar la extensión de Chrome *Google Analytics Debugger*.
3. Navega, interactúa con el menú, abre el formulario y envíalo. Verás los eventos (`form_start`, `cta_primary_click`, etc.) aparecer en la línea temporal de DebugView.

### B. Informes de Eventos Estándar
1. Ve a **Informes > Interacción > Eventos**.
2. En un plazo de 24 horas, empezarás a ver los nuevos nombres estandarizados:
   - `cta_primary_click`
   - `whatsapp_click`
   - `calendly_booking_completed`
   - `form_start`, `form_success`, etc.
3. Puedes hacer clic en cualquiera de ellos para ver los parámetros personalizados (ej. `cta_location`). Para que GA4 muestre permanentemente estos parámetros en los informes, recuerda ir a **Administrar > Definiciones personalizadas** y registrarlos como "Dimensiones personalizadas".

---

## 4. Consideraciones y Siguientes Pasos

- **Estabilidad Asegurada:** Todos los cambios se han hecho inyectando la analítica en componentes de React mediante llamadas seguras, sin modificar dependencias ni la estructura del enrutamiento.
- **Privacidad:** No se envía PII (Información Personal Identificable) en ningún evento, cumpliendo las normativas.
- **Microsoft Clarity:** Actualmente no está en el código. Si necesitas mapas de calor en el futuro, se puede añadir el script en `index.html` asegurando que respeta el componente de Cookies existente.
