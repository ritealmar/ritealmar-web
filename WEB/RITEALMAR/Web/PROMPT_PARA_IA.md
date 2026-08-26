Lee primero el archivo `AUDITORIA_WEB.md` y `AUDITORIA_CHECKLIST.json` en la raíz del proyecto.

Tarea: Realiza una auditoría automatizada siguiendo la checklist y devuelve un JSON con el siguiente formato:

{
  "summary": "Resumen ejecutivo breve (3-5 frases)",
  "results": [
    {
      "id": "<task id>",
      "status": "ok|warning|fail|not_applicable",
      "notes": "Texto con evidencias (ficheros y líneas) y recomendaciones concretas",
      "score": 0-100
    }
  ],
  "overall_score": 0-100,
  "top_recommendations": ["Prioridad 1: ...", "Prioridad 2: ..."]
}

Pautas:
- Usa como evidencia enlaces a archivos del repo (rutas relativas). Ej: `src/App.tsx`.
- Prioriza seguridad y exposición de secrets (marcar como `fail` si hay claves en el código).
- Para cada hallazgo incluye comandos o cambios concretos para resolverlo (snippets cortos si aplica).
- No modifiques el repo. Solo produces el JSON estructurado como salida.

Entrega: Devuelve únicamente el JSON válido sin explicaciones adicionales.
