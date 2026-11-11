/* 
   SMO-R: RITEALMAR OPERATIONAL MEMORY ENGINE (v1.2)
   Architecture: Scalable Edge CRM
   Flow: Request -> Security -> Validation -> AI Scoring -> Google Sheets Memory -> Response
*/

const ALLOWED_PRODUCTION_ORIGINS = [
  "https://ritealmar.es",
  "https://www.ritealmar.es"
];

const isPreviewOrigin = (origin) => {
  if (!origin.startsWith("https://")) return false;
  try {
    const hostname = new URL(origin).hostname;
    // Strict exact suffix matching (prevents https://fake-ritealmar.pages.dev.attacker.example)
    return hostname.endsWith(".ritealmar.pages.dev");
  } catch {
    return false;
  }
};

const checkAllowedOrigin = (origin, env) => {
  if (ALLOWED_PRODUCTION_ORIGINS.includes(origin)) return true;
  if (env.ALLOW_LOCALHOST && origin.startsWith("http://localhost")) return true;
  return isPreviewOrigin(origin);
};

const MAX_FIELD_LENGTH = {
  nombre: 100,
  email: 150,
  empresa: 150,
  telefono: 50,
  mensaje: 2000
};

// Expresión regular básica para emails
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URGENCIA_ESPERADA = ["Esta semana", "Este mes", "Más adelante", "Alta", "Media", "Baja"];

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const isAllowedOrigin = checkAllowedOrigin(origin, env);
    
    // Si no es un origen permitido, denegamos CORS inmediatamente (fail-closed CORS)
    const corsOrigin = isAllowedOrigin ? origin : "https://ritealmar.es";
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (!isAllowedOrigin && origin !== "") {
       return new Response(JSON.stringify({ success: false, error: "Origen no autorizado." }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
       });
    }

    if (request.method === "POST") {

      try {
        const body = await request.json();

        // --- 1. SEGURIDAD Y ANTI-SPAM ---
        // Honeypot: Campo oculto que los bots suelen rellenar
        if (body._gotcha || body.honeypot || body.bot_field) {
          console.warn("Posible bot detectado mediante honeypot.");
          return new Response(JSON.stringify({ success: false, error: "Solicitud no válida." }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // --- 1.B VERIFICACIÓN CLOUDFLARE TURNSTILE ---
        if (!env.TURNSTILE_SECRET_KEY) {
           console.warn("TURNSTILE_SECRET_KEY no configurada en worker. Denegando petición segura.");
           return new Response(JSON.stringify({ success: false, error: "El servidor no está configurado de forma segura." }), {
              status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
           });
        }

        const token = body.cf_turnstile_response;
        if (typeof token !== "string" || token.length === 0 || token.length > 2048 || token === "dev_no_token") {
          return new Response(JSON.stringify({ success: false, error: "Validación anti-spam requerida." }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        try {
          const formData = new FormData();
          formData.append("secret", env.TURNSTILE_SECRET_KEY);
          formData.append("response", token);
          const cfConnectingIp = request.headers.get("CF-Connecting-IP");
          if (cfConnectingIp) {
            formData.append("remoteip", cfConnectingIp);
          }

          const cfResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body: formData,
            signal: AbortSignal.timeout(10_000)
          });
          if (!cfResponse.ok) throw new Error(`Siteverify respondió ${cfResponse.status}`);

          const outcome = await cfResponse.json();
          if (!outcome.success) {
            console.error("Fallo validación Turnstile:", outcome['error-codes']);
            return new Response(JSON.stringify({ success: false, error: "No se pudo verificar que eres humano." }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }
          
          const expectedHostnames = new Set([
            'ritealmar.es',
            'www.ritealmar.es',
            ...(env.TURNSTILE_HOSTNAMES || '').split(',').map((value) => value.trim()).filter(Boolean)
          ]);
          if (env.TURNSTILE_TEST_MODE === 'true') {
            expectedHostnames.add('dummy-domain.com');
            expectedHostnames.add('example.com');
          }

          if (outcome.action !== 'contact') {
            return new Response(JSON.stringify({ success: false, error: "Acción de seguridad inválida." }), {
              status: 403,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          if (typeof outcome.hostname !== 'string' || !expectedHostnames.has(outcome.hostname)) {
            return new Response(JSON.stringify({ success: false, error: "Origen del token inválido." }), {
              status: 403,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }
        } catch (e) {
          console.error("Error contactando API Turnstile:", e.message);
          return new Response(JSON.stringify({ success: false, error: "Error temporal validando anti-spam." }), {
             status: 502,
             headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // --- 2. VALIDACIÓN DE DATOS ---
        const errors = [];

        if (!body.nombre || body.nombre.trim() === "" || body.nombre.length > MAX_FIELD_LENGTH.nombre) {
          errors.push("El nombre es obligatorio y debe tener menos de 100 caracteres.");
        }

        if (!body.email || !EMAIL_REGEX.test(body.email) || body.email.length > MAX_FIELD_LENGTH.email) {
          errors.push("El email es obligatorio y debe ser un formato válido.");
        }

        if (body.empresa && body.empresa.length > MAX_FIELD_LENGTH.empresa) {
          errors.push(`La empresa no puede exceder ${MAX_FIELD_LENGTH.empresa} caracteres.`);
        }

        if (body.telefono && body.telefono.length > MAX_FIELD_LENGTH.telefono) {
          errors.push(`El teléfono no puede exceder ${MAX_FIELD_LENGTH.telefono} caracteres.`);
        }

        if (body.mensaje && body.mensaje.length > MAX_FIELD_LENGTH.mensaje) {
          errors.push(`El mensaje no puede exceder los ${MAX_FIELD_LENGTH.mensaje} caracteres.`);
        }

        if (body.urgencia && !URGENCIA_ESPERADA.includes(body.urgencia)) {
          // No bloqueamos estrictamente, pero registramos o sanitizamos
          body.urgencia = "No especificada";
        }

        if (body.privacidad !== undefined && body.privacidad !== true && body.privacidad !== "true" && body.privacidad !== "on") {
            errors.push("Debe aceptar la política de privacidad.");
        }

        if (errors.length > 0) {
          return new Response(JSON.stringify({ success: false, error: "Datos inválidos", details: errors }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // --- 3. ENGINE: IA HEURÍSTICA DE ALTA AUTORIDAD ---
        const employeesNum = parseInt(body.empleados) || 5;
        const urgenciaStr = body.urgencia || "Media";
        const analysis = {
            lead_score: 0, 
            puntuacion_automatizacion: 45 + Math.floor(Math.random() * 15),
            ahorro_horas_mes: Math.floor(employeesNum * 4.2),
            nivel_prioridad: (urgenciaStr.includes('Alta') || urgenciaStr.includes('Esta semana') || employeesNum > 20) ? "Crítico" : "Media",
            diagnostico_corto: `Optimización operativa detectada para ${body.empresa || "la empresa"}. Potencial de ahorro de ${Math.floor(employeesNum * 4.2)}h/mes.`,
            cuellos_botella: ["Carga administrativa manual", "Desconexión de sistemas", "Falta de trazabilidad"],
            acciones_prioritarias: ["Implementación de Digital Workers", "Sincronización de CRM", "Orquestación de leads"],
            modelo: "Ritealmar Heuristic v4"
        };

        // --- 4. LOGIC: LEAD SCORING & TEMPERATURE ---
        let strategyScore = 40;
        if (urgenciaStr.includes('Alta') || urgenciaStr.includes('Esta semana')) strategyScore += 25;
        if (employeesNum > 25) strategyScore += 15;
        if (body.objetivo?.includes('Reducir') || body.servicio?.includes('IA')) strategyScore += 10;
        if (strategyScore > 100) strategyScore = 100;

        const temperatura = strategyScore > 70 ? "CALIENTE" : strategyScore > 40 ? "TEMPLADO" : "FRÍO";
        const leadId = "RID_" + Math.random().toString(36).substring(2, 11).toUpperCase();

        // --- 5. NORMALIZATION: 30-COLUMN MAPPING (SMO-R Schema) ---
        const leadData = {
          timestamp: new Date().toISOString(),
          lead_id: leadId,
          nombre: body.nombre || "N/A",
          email: body.email || "N/A",
          telefono: body.telefono || "N/A",
          empresa: body.empresa || "N/A",
          sector: body.sector || "N/A",
          servicio_interes: body.servicio || "N/A",
          pais: body.pais || "España",
          numero_empleados: body.empleados || "N/A",
          principal_problema_detectado: body.mensaje || body.procesos || "N/A",
          nivel_urgencia: analysis.nivel_prioridad,
          horas_perdidas_mes: analysis.ahorro_horas_mes,
          ahorro_estimado: (analysis.ahorro_horas_mes * 35).toFixed(2) + "€",
          roi_estimado: analysis.puntuacion_automatizacion + "%",
          score_lead: strategyScore,
          temperatura_lead: temperatura,
          recomendacion_generada: analysis.acciones_prioritarias[0],
          resumen_diagnostico: analysis.diagnostico_corto,
          origen: "Ritealmar Engine V4",
          url_origen: request.headers.get("Referer") || "https://ritealmar.es",
          user_agent: request.headers.get("User-Agent")?.substring(0, 100) || "Unknown",
          idioma: request.headers.get("Accept-Language")?.split(',')[0] || "es",
          acepta_politica: "Sí",
          fecha_contacto: new Date().toLocaleDateString(),
          estado_comercial: "Pendiente",
          notas_internas: `Lead ${temperatura} detectado por lógica de arquitectura.`,
          modelo_ia_usado: analysis.modelo,
          fallback_activado: true
        };

        // --- 6. PERSISTENCE: GOOGLE SHEETS MEMORY ---
        if (env.GOOGLE_SHEETS_URL) {
            try {
                const sheetResponse = await fetch(env.GOOGLE_SHEETS_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(leadData)
                });
                if (!sheetResponse.ok) {
                    console.error(`Error en Google Sheets: ${sheetResponse.status}`);
                }
            } catch (e) {
                console.error("SMO-R Persistence Error:", e.message);
            }
        }

        // --- 6.B ENTREGA DE CORREO (Resend con fallback a Formsubmit) ---
        let emailSent = false;

        // 1. Envío profesional primario mediante Resend API (si está configurada RESEND_API_KEY)
        if (env.RESEND_API_KEY) {
          try {
            const resendPayload: Record<string, any> = {
              from: "RITEALMAR <onboarding@resend.dev>",
              to: ["info@ritealmar.es"],
              cc: ["llargo34@gmail.com"],
              reply_to: body.email,
              subject: `Solicitud de Contacto Web - ${body.nombre}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
                  <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">Nueva Solicitud de Contacto - RITEALMAR</h2>
                  <p><strong>Nombre:</strong> ${body.nombre}</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Empresa:</strong> ${body.empresa || 'No especificada'}</p>
                  <p><strong>Teléfono:</strong> ${body.telefono || 'No especificado'}</p>
                  <p><strong>Urgencia:</strong> ${body.urgencia || 'Media'}</p>
                  <div style="margin-top: 15px; padding: 12px; background: #f8fafc; border-left: 4px solid #0284c7;">
                    <strong>Mensaje:</strong><br>
                    <p style="white-space: pre-wrap; margin-top: 5px;">${body.mensaje}</p>
                  </div>
                  <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
                  <p style="font-size: 12px; color: #64748b;">
                    Lead ID: ${leadId} | Score: ${strategyScore}/100 | Temperatura: ${temperatura}
                  </p>
                </div>
              `
            };

            const resendRes = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(resendPayload)
            });

            if (resendRes.ok) {
              emailSent = true;
            } else {
              const resendErrorText = await resendRes.text().catch(() => '');
              console.warn("Resend API warning, activando fallback a Formsubmit:", resendRes.status, resendErrorText);
            }
          } catch (resendError) {
            console.warn("Resend exception, activando fallback a Formsubmit:", resendError.message);
          }
        }

        // 2. Fallback a Formsubmit con headers Referer y Origin válidos
        if (!emailSent) {
          try {
            const formSubmitUrl = "https://formsubmit.co/ajax/info@ritealmar.es";
            const emailResponse = await fetch(formSubmitUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Referer": "https://ritealmar.es/",
                "Origin": "https://ritealmar.es"
              },
              body: JSON.stringify({
                'Nombre Completo': body.nombre,
                Email: body.email,
                Empresa: body.empresa,
                Mensaje: body.mensaje,
                _subject: `Solicitud de Contacto - ${body.nombre}`,
                _template: 'table',
                _cc: 'llargo34@gmail.com'
              })
            });

            if (emailResponse.ok) {
              const resData: any = await emailResponse.json().catch(() => null);
              if (resData && resData.success === 'false') {
                console.error("Formsubmit devolvió error:", resData.message);
              } else {
                emailSent = true;
              }
            } else {
              console.error("Error enviando a formsubmit", emailResponse.status);
            }
          } catch (e) {
            console.error("Proxy Formsubmit error:", e.message);
          }
        }

        // --- 7. RESPONSE: CLEAN PAYLOAD ---
        if (!emailSent) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "El servicio de entrega de correo no está disponible. Por favor, inténtalo más tarde." 
            }), {
              status: 502,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ 
            success: true, 
            message: "Solicitud recibida correctamente." 
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });

      } catch (err) {
        console.error("Worker processing error:", err.message);
        // Respuesta segura, sin exponer el error interno
        return new Response(JSON.stringify({ success: false, error: "Ha ocurrido un error inesperado al procesar la solicitud." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }
    
    return new Response("Method Not Allowed", { 
        status: 405, 
        headers: corsHeaders 
    });
  },
};
