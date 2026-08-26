# Validación de Analítica en Producción - RITEALMAR

**Fecha de intento de deploy:** 2026-08-26
**Commit desplegado:** Pendiente
**Resultado del build:** Éxito (Exit Code 0)
**URL de producción:** https://ritealmar.es

---

### ⚠️ AVISO SOBRE EL DEPLOY A PRODUCCIÓN

Se ha intentado desplegar automáticamente mediante `npx wrangler pages deploy dist --project-name ritealmar`, pero la CLI de Cloudflare ha rechazado la subida por un error de autenticación con el Account ID cacheado para este proyecto:
```
A request to the Cloudflare API (/accounts/0519a285ce1d2fb6b41c4d866e41fc63/pages/projects/ritealmar) failed. Authentication error [code: 10000]
```
Por este motivo, **los cambios se encuentran en local y compilados**, pero aún no son visibles en la URL pública.

---

### 🔍 VALIDACIÓN TÉCNICA (Código local)

Se ha auditado el código para asegurar que una vez publicado funcionará correctamente:

#### Eventos Implementados y Verificados a Nivel Código
* ✅ **`cta_primary_click`**: Configurado correctamente en botones Hero y Navbar.
* ✅ **`whatsapp_click`**: Asociado exclusivamente al clic del botón flotante de WhatsApp.
* ✅ **`calendly_click`**: Se dispara cuando el modal de Calendly se abre.
* ✅ **`calendly_booking_completed`**: Configurado utilizando `window.addEventListener('message')` para capturar específicamente el evento `calendly.event_scheduled` desde el iframe oficial. Se bloquean falsos positivos (como abrir calendario o seleccionar fecha).
* ✅ **`form_start`**: Controlado por un `useRef` para dispararse solo en la primera interacción (evita duplicidad).
* ✅ **`form_submit`**: Atado al `e.preventDefault()` inicial del formulario de contacto.
* ✅ **`form_success`**: Condicionado al bloque lógico que evalúa el response exitoso de la API `formsubmit.co`.
* ✅ **`form_error`**: Integrado en cada bloque de validación local y en el catch final del fetch, con `error_type` diferenciado.

#### Comprobación de Privacidad (PII)
* ✅ Ningún evento implementado transmite los valores de los inputs (Nombre Completo, Email, Mensaje).
* ✅ Solo se mandan parámetros analíticos limpios (`form_name`, `page_path`, `location`, `error_type`, `cta_text`).
* ✅ La carga del script principal sigue condicionada a `getConsent()`, respetando el aviso de cookies.

---

### 🛑 REQUIERE VERIFICACIÓN MANUAL EN GA4

Dado que no tengo acceso directo a la consola en tiempo real de Google Analytics de vuestra propiedad ni se pudo finalizar el deploy por el error de tokens, el propietario de RITEALMAR debe hacer lo siguiente una vez publique los cambios:

1. Iniciar sesión en [Google Analytics 4](https://analytics.google.com).
2. Entrar a **Administrar > DebugView**.
3. Navegar en vivo por https://ritealmar.es.
4. Interactuar con botones, abrir WhatsApp, y completar un formulario ficticio.
5. Comprobar que en la línea temporal de DebugView aparecen de forma nítida los eventos listados, sin duplicidades.
6. Programar una cita de prueba en Calendly y verificar que `calendly_booking_completed` solo salta al confirmar la cita.
