const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { GoogleGenerativeAI } = require("@google/generative-ai");

admin.initializeApp();
const db = admin.firestore();

// 1. Endpoint Seguro para Gemini (Chatbot)
exports.chatWithGemini = functions.https.onCall(async (data, context) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "Eres el asistente experto de Ritealmar IA. Tu objetivo es vender servicios de automatización e IA. Responde de forma profesional y persuasiva. Debes cualificar al usuario preguntando por su negocio, qué quiere automatizar, presupuesto y urgencia. Si detectas un lead caliente, recomiéndales el formulario de contacto."
  });

  const chat = model.startChat({
    history: data.history || [],
  });

  try {
    const result = await chat.sendMessage(data.message);
    const response = await result.response;
    return { text: response.text() };
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new functions.https.HttpsError("internal", "Error al procesar con Gemini");
  }
});

// 2. Automatización de Leads (Clasificación)
exports.onLeadCreated = functions.firestore
  .document("leads/{leadId}")
  .onCreate(async (snap, context) => {
    const lead = snap.data();
    const leadId = context.params.leadId;

    let classification = "templado";
    
    // Lógica de clasificación
    const hasHighUrgency = lead.message.toLowerCase().includes("urgente") || lead.message.toLowerCase().includes("cuanto antes");
    const hasPhone = !!lead.phone;
    const wantsBudget = lead.message.toLowerCase().includes("presupuesto") || lead.message.toLowerCase().includes("cuánto cuesta");

    if (hasHighUrgency && hasPhone && wantsBudget) {
      classification = "caliente";
    } else if (!wantsBudget && !hasHighUrgency) {
      classification = "frío";
    }

    // Actualizar el lead con la clasificación
    await snap.ref.update({ classification });

    // Crear notificación para aviso automático
    await db.collection("lead_notifications").add({
      leadId,
      email: lead.email,
      name: lead.name,
      classification,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      sent: false
    });

    console.log(`Lead ${leadId} clasificado como ${classification}`);
  });
