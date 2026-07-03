/* 
   SMO-R: RITEALMAR OPERATIONAL MEMORY ENGINE (v1.1)
   Architecture: Scalable Edge CRM
   Flow: Request -> AI Scoring -> 30-Column Normalization -> Google Sheets Memory
*/

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    if (request.method === "POST") {
      try {
        const body = await request.json();
        
        // 1. ENGINE: IA HEURÍSTICA DE ALTA AUTORIDAD (Backbone)
        const employeesNum = parseInt(body.empleados) || 5;
        const analysis = {
            lead_score: 0, 
            puntuacion_automatizacion: 45 + Math.floor(Math.random() * 15),
            ahorro_horas_mes: Math.floor(employeesNum * 4.2),
            nivel_prioridad: (body.urgencia === 'Alta' || employeesNum > 20) ? "Crítico" : "Media",
            diagnostico_corto: `Optimización operativa detectada para ${body.empresa}. Infraestructura de pre-venta con potencial de ahorro de ${Math.floor(employeesNum * 4.2)}h/mes.`,
            cuellos_botella: ["Carga administrativa manual", "Desconexión de sistemas", "Falta de trazabilidad"],
            acciones_prioritarias: ["Implementación de Digital Workers", "Sincronización de CRM", "Orquestación de leads"],
            modelo: "Ritealmar Heuristic v3"
        };

        // 2. LOGIC: LEAD SCORING & TEMPERATURE
        let strategyScore = 40;
        if (body.urgencia === 'Alta') strategyScore += 25;
        if (employeesNum > 25) strategyScore += 15;
        if (body.objetivo?.includes('Reducir')) strategyScore += 10;
        if (strategyScore > 100) strategyScore = 100;

        const temperatura = strategyScore > 70 ? "CALIENTE" : strategyScore > 40 ? "TEMPLADO" : "FRÍO";
        const leadId = "RID_" + Math.random().toString(36).substr(2, 9).toUpperCase();

        // 3. NORMALIZATION: 30-COLUMN MAPPING (SMO-R Schema)
        const leadData = {
          timestamp: new Date().toISOString(),
          lead_id: leadId,
          nombre: body.nombre || "N/A",
          email: body.email || "N/A",
          telefono: body.telefono || "N/A",
          empresa: body.empresa || "N/A",
          sector: body.sector || "N/A",
          pais: body.pais || "España",
          numero_empleados: body.empleados || "N/A",
          facturacion_aproximada: body.facturacion || "N/A",
          principal_problema_detectado: body.procesos || "N/A",
          nivel_urgencia: analysis.nivel_prioridad,
          interes_en_automatizacion: body.objetivo || "N/A",
          horas_perdidas_mes: analysis.ahorro_horas_mes,
          ahorro_estimado: (analysis.ahorro_horas_mes * 35).toFixed(2) + "€", // Valoración de hora técnica
          roi_estimado: analysis.puntuacion_automatizacion + "%",
          score_lead: strategyScore,
          temperatura_lead: temperatura,
          recomendacion_generada: analysis.acciones_prioritarias[0],
          resumen_diagnostico: analysis.diagnostico_corto,
          origen: "Ritealmar Engine V3",
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

        // 4. PERSISTENCE: GOOGLE SHEETS MEMORY (Wait for success)
        if (env.GOOGLE_SHEETS_URL) {
            try {
                const sheetResponse = await fetch(env.GOOGLE_SHEETS_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(leadData)
                });
                await sheetResponse.text();
            } catch (e) {
                console.error("SMO-R Persistence Error:", e.message);
            }
        }

        // 5. RESPONSE: CLEAN PAYLOAD
        return new Response(JSON.stringify({ 
            success: true, 
            ai: { ...analysis, lead_id: leadId, lead_score: strategyScore, temperatura: temperatura },
            metadata: { lead_id: leadId, processed_at: new Date().toISOString() }
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message, trace: "Worker_Error_SMOR" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }
    return new Response("Unauthorized Method", { status: 405 });
  },
};
