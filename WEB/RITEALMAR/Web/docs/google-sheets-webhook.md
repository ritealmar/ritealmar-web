# Integración de Google Sheets Webhook

Este documento explica cómo crear el script (Google Apps Script) para recibir los datos de los negocios desde la página `/plan-captacion` de RITEALMAR y guardarlos en una hoja de cálculo.

## Código del Webhook

A continuación se muestra el código que debes pegar en Google Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Negocios a contactar");
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.fecha || new Date(),
      data.empresa || "",
      data.sector || "",
      data.web || "",
      data.telefono || "",
      data.email || "",
      data.ciudad || "",
      data.contactado || "No",
      data.respuesta || "Sin respuesta",
      data.notas || "",
      data.servicioRecomendado || "",
      data.observacion || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Pasos para implementar

1. Abre **Google Sheets** y crea una pestaña llamada `Negocios a contactar`.
2. Ve al menú superior y haz clic en **Extensiones → Apps Script**.
3. Pega el código de arriba en el editor.
4. Haz clic en el icono de **Guardar**.
5. En la esquina superior derecha, haz clic en **Implementar → Nueva implementación**.
6. En "Seleccionar tipo", elige el icono del engranaje y selecciona **Aplicación web**.
7. En la configuración:
   - **Ejecutar como:** yo.
   - **Quién tiene acceso:** cualquiera con el enlace (o "Cualquier usuario").
8. Haz clic en **Implementar** y autoriza los permisos de Google si te los pide.
9. **Copia la URL de la aplicación web** que aparecerá en la pantalla final.
10. Pon esa URL en tu proyecto (por ejemplo, en Cloudflare Pages o en un `.env`) usando la variable:
    `VITE_GOOGLE_SHEETS_WEBHOOK_URL`
