# RITEALMAR: Prospección B2B, Objeciones y Analytics

## 1. Sistema de Prospección B2B
- **Regla Principal:** No hacer spam. Enviar correos solo en tandas pequeñas (20-30 al día) a empresas que de verdad puedan beneficiarse.
- **Gestión de Respuestas:** Si hay interés, ofrecer videollamada y enviar Calendly. Si no hay interés, agradecer educadamente y no insistir.
- **Seguimientos Comerciales:** Enviar un máximo de un recordatorio a los 4-5 días ("Solo quería asegurar que viste mi correo...").
- **Mensajes Comerciales:** Directos al punto de dolor del sector. 
  - *Clínicas:* "¿Cuántas citas pierdes por falta de confirmación?"
  - *Inmobiliarias:* "Si tardas en responder leads de Idealista, los pierdes."
  - *Asesorías:* "Automatiza la reclamación de facturas trimestrales."
  - *Reformas:* "Filtra presupuestos antes de perder el tiempo en visitas."

## 2. Manejo de Objeciones Frecuentes
- **"Ya tenemos CRM/Software":** "Perfecto. RITEALMAR no lo sustituye, lo conectamos con WhatsApp o tu web para que los datos entren solos y no piquéis a mano."
- **"No necesitamos IA":** "A veces la palabra asusta. Solo automatizamos tareas repetitivas, como que un Excel se rellene solo."
- **"No tenemos tiempo ahora":** "Precisamente lo hacemos nosotros. Inviertes 15 min iniciales para ganar horas semanales."
- **"Eso será caro":** "Usamos tecnología No-Code que baja mucho los costes. Se paga solo con el tiempo ahorrado."
- **"¿Esto sustituye empleados?":** "No, quita el trabajo aburrido para que el equipo se centre en atender bien y vender."

## 3. CRM y Gestión de Leads (Google Sheets)
Toda la prospección debe registrarse. La estructura de columnas es:
`Fecha | Empresa | Sector | Web | Teléfono | Email | Ciudad | Contactado (Sí/No) | Respuesta (Sí/No) | Notas | Código tracking | Campaña UTM | Enlace enviado | Clic detectado | Fecha clic`

## 4. Tracking UTM y Analytics
- **Qué son los UTM:** Etiquetas en la URL para saber si una visita web viene de un email frío, un post de LinkedIn, etc.
- **Estructura Recomendada:**
  `https://ritealmar.es/auditoria-ia-gratis?utm_source=email&utm_medium=email&utm_campaign=SECTOR_TANDA&utm_content=CODIGO_EMPRESA`
- **Ejemplo:** `utm_campaign=clinicas_tanda1`, `utm_content=clin_v3_001`.
- **Cómo Medir en Google Analytics 4:**
  Ir a *Adquisición de tráfico*, mirar dimensión principal *Campaña de la sesión* y secundaria *Contenido del anuncio de la sesión* (para ver el utm_content exacto de la empresa).
- **"Clic Detectado":** Si aparece en Analytics, marcamos en el CRM que la empresa hizo clic.
- **Limitaciones del Email en frío normal:** No se puede saber si lo abrieron, leyeron o borraron. Solo podemos saber (con Analytics) si hicieron clic en el enlace parametrizado.
