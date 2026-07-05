import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, MessageSquare, Link as LinkIcon, Users, Target, FileText, DollarSign, CheckSquare, Rocket, Mail } from 'lucide-react';
import CopyBox from '../components/CopyBox';
import LeadEmailGenerator from '../components/LeadEmailGenerator';

export default function PlanCaptacion() {
  useEffect(() => {
    document.title = "Plan de Captación Interno | RITEALMAR";
    window.scrollTo(0, 0);
  }, []);

  const openSheet = () => {
    window.open('https://docs.google.com/spreadsheets/u/0/', '_blank', 'noopener noreferrer');
  };

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="px-6 py-16 md:py-24 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Página de uso interno. No es una landing comercial principal.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Plan de Captación RITEALMAR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Guía interna para organizar leads, responder rápido y convertir solicitudes de auditoría gratuita en reuniones y presupuestos.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-16">
        
        {/* Sección 1 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <Table className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">1. Hoja de control de leads</h2>
          </div>
          <div className="bg-[#0A1628]/50 border border-white/5 rounded-2xl p-6 md:p-8">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Cada solicitud recibida por formulario, WhatsApp o Calendly debe registrarse en una hoja de control para evitar perder oportunidades.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-sm text-slate-400 border-collapse">
                <thead className="text-xs uppercase bg-white/5 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Columnas Obligatorias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-white/[0.02]">
                    <td className="px-4 py-2">Fecha | Nombre | Empresa | Email | Teléfono | Servicio de interés | Origen | Estado | Próxima acción | Notas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Estados Recomendados:</h4>
              <div className="flex flex-wrap gap-2">
                {['Nuevo', 'Contactado', 'Reunión agendada', 'Presupuesto enviado', 'Ganado', 'Perdido'].map(status => (
                  <span key={status} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                    {status}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={openSheet}
              className="px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg font-bold hover:bg-cyan-500/20 transition-all flex items-center gap-2"
            >
              <Table size={18} />
              Crear hoja en Google Sheets
            </button>
          </div>
        </motion.div>

        {/* Sección 2 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <MessageSquare className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">2. Respuesta rápida al lead</h2>
          </div>
          <CopyBox 
            title="Plantilla de respuesta rápida"
            buttonLabel="Copiar respuesta"
            text={`Hola, soy Ricardo de RITEALMAR.

Gracias por solicitar la auditoría gratuita. He recibido tu solicitud correctamente.

Voy a revisar tu caso y te diré qué puntos se pueden mejorar en tu web, captación o procesos digitales.

Si quieres, puedes reservar directamente una llamada aquí:
https://calendly.com/ritealmar/30min

Un saludo,
Ricardo
RITEALMAR
https://ritealmar.es`}
          />
        </motion.div>

        {/* Sección 3 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <LinkIcon className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">3. Enlace principal para captar</h2>
          </div>
          <div className="bg-[#0A1628]/50 border border-white/5 rounded-2xl p-6 md:p-8">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Este es el enlace principal para compartir en WhatsApp, Facebook, LinkedIn, Google Business, Instagram, emails y mensajes directos.
            </p>
            <div className="bg-[#030712] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-cyan-400 font-mono text-sm break-all font-bold">
                https://ritealmar.es/auditoria-ia-gratis
              </span>
              <div className="shrink-0 w-full sm:w-auto">
                <CopyBox 
                  text="https://ritealmar.es/auditoria-ia-gratis"
                  buttonLabel="Copiar enlace"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sección 4 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <MessageSquare className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">4. Mensaje corto para WhatsApp o LinkedIn</h2>
          </div>
          <CopyBox 
            title="Plantilla mensaje corto"
            buttonLabel="Copiar mensaje"
            text={`Hola, soy Ricardo de RITEALMAR.

Estamos ofreciendo una auditoría gratuita para empresas que quieren mejorar su web, captar más clientes o automatizar tareas con IA.

Revisamos web, formularios, atención al cliente, procesos manuales y oportunidades de automatización.

Puedes solicitarla aquí:
https://ritealmar.es/auditoria-ia-gratis`}
          />
        </motion.div>

        {/* Sección 5 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <Users className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">5. Sectores recomendados para contactar</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Clínicas dentales', 'Inmobiliarias', 'Academias', 'Asesorías', 'Empresas de reformas', 'Centros de estética', 'Gimnasios', 'E-commerce', 'Empresas de servicios', 'Autónomos con web antigua'].map((sector, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center">
                <span className="text-sm font-bold text-slate-300">{sector}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sección 6 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <Target className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">6. Mensaje directo para negocios</h2>
          </div>
          <CopyBox 
            title="Plantilla acercamiento en frío (Cold DM)"
            buttonLabel="Copiar mensaje directo"
            text={`Hola, soy Ricardo de RITEALMAR.

He visto vuestra empresa y creo que podríais mejorar la captación de clientes y automatizar parte de la atención o seguimiento comercial.

Estamos ofreciendo una auditoría gratuita donde revisamos web, formularios, WhatsApp, procesos manuales y oportunidades de IA.

La podéis solicitar aquí:
https://ritealmar.es/auditoria-ia-gratis`}
          />
        </motion.div>

        {/* Sección 7 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <FileText className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">7. Plantilla de mini auditoría</h2>
          </div>
          <CopyBox 
            title="Plantilla respuesta de auditoría"
            buttonLabel="Copiar mini auditoría"
            text={`Hola, he revisado vuestra presencia digital y veo estas oportunidades:

1. Mejorar el mensaje principal de la web.
2. Añadir llamadas a la acción más claras.
3. Automatizar respuestas a consultas frecuentes.
4. Conectar formularios con email, CRM o Google Sheets.
5. Añadir seguimiento automático por WhatsApp o correo.
6. Mejorar SEO local y páginas por servicio.

Mi recomendación inicial sería empezar por:
[explicar 1-2 acciones concretas]

Si queréis, lo vemos en una llamada:
https://calendly.com/ritealmar/30min`}
          />
        </motion.div>

        {/* Sección 8 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <DollarSign className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">8. Precios de referencia</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { t: 'Web profesional orientada a ventas', p: 'desde 690€' },
              { t: 'Automatización IA', p: 'desde 490€ setup' },
              { t: 'Chatbot / Agente IA', p: 'desde 390€ setup' },
              { t: 'App, CRM o SaaS a medida', p: 'desde 2.500€' }
            ].map((price, i) => (
              <div key={i} className="bg-[#0A1628]/50 border border-white/5 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-sm text-slate-400">{price.t}</span>
                <span className="text-lg font-bold text-cyan-400">{price.p}</span>
              </div>
            ))}
          </div>

          <CopyBox 
            title="Plantilla de respuesta para precios"
            buttonLabel="Copiar respuesta de precios"
            text={`Depende del alcance, pero para que tengas una referencia:

- Web profesional desde 690€
- Automatización IA desde 490€ setup
- Chatbot IA desde 390€ setup
- App o CRM a medida desde 2.500€

Lo ideal es revisar primero tu caso y decirte qué opción tiene más sentido.`}
          />
        </motion.div>

        {/* Sección 9 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <CheckSquare className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">9. Checklist diario</h2>
          </div>
          <div className="bg-[#0A1628]/50 border border-white/5 rounded-2xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "Revisar correos de formularios.",
                "Revisar WhatsApp.",
                "Registrar nuevos leads en la hoja.",
                "Responder leads en menos de 10 minutos si es posible.",
                "Contactar al menos 20 negocios.",
                "Publicar enlace de auditoría en una red social.",
                "Revisar Calendly.",
                "Actualizar estado de cada lead.",
                "Preparar presupuestos pendientes."
              ].map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckSquare className="text-purple-400 shrink-0 mt-0.5" size={18} />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Sección 10 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
              <Mail className="text-cyan-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold">10. Generador seguro de emails comerciales</h2>
          </div>
          <LeadEmailGenerator />
        </motion.div>

        {/* OBJETIVO SEMANA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0A1628] to-[#120B29] border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(0,212,255,0.1)] mt-12"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Rocket className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Objetivo de la semana</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Conseguir las primeras reuniones reales usando la auditoría gratuita como puerta de entrada.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "100", l: "negocios contactados" },
              { v: "10", l: "respuestas" },
              { v: "3", l: "reuniones" },
              { v: "1", l: "presupuesto enviado" }
            ].map((metric, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">{metric.v}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold text-center">{metric.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </section>
    </div>
  );
}
