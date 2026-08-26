# Validación de Analítica en Producción - RITEALMAR

**Fecha de publicación:** 2026-08-26
**Commit desplegado:** `feat: improve conversion flow and analytics tracking`
**Hash corto del commit:** `491f51a`
**Versión publicada:** Producción (Main)
**URL Pages:** https://b2ed679e.ritealmar.pages.dev
**URL Principal:** https://ritealmar.es

### 📂 Archivos Principales de Analítica y Conversión Incluidos
* `src/components/ContactForm.tsx`
* `src/components/Hero.tsx`
* `src/components/Navbar.tsx`
* `src/components/ServicesBentoGrid.tsx`
* `src/components/WhatsAppFloatingButton.tsx`
* `src/components/CalendlyModal.tsx`
* `src/pages/Home.tsx`
* Informes de auditoría y QA (`.md`)

---

### 🔍 PASOS PARA VALIDAR GA4 (Verificación Manual)

Para asegurar la recolección correcta de datos sin romper la privacidad (PII), se requiere realizar el siguiente procedimiento interactivo desde la cuenta propietaria:

1. **Abrir Consola GA4**: Iniciar sesión en [Google Analytics 4](https://analytics.google.com).
2. **Modo Debug**: Entrar a **Administrar > DebugView** (o usar la extensión de Chrome de GA Debugger).
3. **Navegación Activa**: Abrir en paralelo la URL de producción: https://ritealmar.es.
4. **Interacción Paso a Paso**: Realizar las siguientes acciones en la web y observar si llegan los eventos correspondientes a la línea temporal de DebugView.

#### Eventos Pendientes de Comprobación Manual

* 🔲 **`cta_primary_click`**: Haz clic en el botón principal del Hero ("Auditoría de IA Gratuita") y botones similares. Comprueba que el evento llega a GA4 y verifica el parámetro `location` y `page_path`.
* 🔲 **`whatsapp_click`**: Haz clic en el botón flotante verde de WhatsApp. Comprueba que llega el evento.
* 🔲 **`calendly_click`**: Abre el modal de Calendly desde un botón de llamada a la acción (ej. Navbar). Verifica que el evento llega solo al abrirlo.
* 🔲 **`calendly_booking_completed`**: Sigue el flujo del modal, selecciona un día, hora, rellena los datos (ficticios) y haz la reserva real de prueba. Confirma que el evento llega **sólo al confirmarse la reserva** (y no al seleccionar fecha u horario).
* 🔲 **`form_start`**: Dirígete al formulario de contacto e interactúa con el primer campo. Este evento debe saltar inmediatamente (1 sola vez por recarga).
* 🔲 **`form_submit`**: Pulsa el botón enviar (incluso si hay errores). Comprueba que salta al hacer el intento de envío inicial.
* 🔲 **`form_error`**: Intenta enviar el formulario con datos inválidos (ej: email sin arroba) y verifica que se envía este evento con el parámetro indicando la causa del error.
* 🔲 **`form_success`**: Envía un lead válido de prueba. Verifica que este evento salta al aparecer el mensaje de éxito (respuesta HTTP OK) y que **no contiene** nombres ni emails reales, solo los parámetros de `form_name` y validaciones.

Si todos los checks funcionan en DebugView de GA4, la implementación de rastreo en todo el embudo está validada con éxito.
