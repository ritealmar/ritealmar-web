import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle2, ArrowRight, Clock, Users, Database } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { trackEvent } from '../utils/analytics';

export default function IaAbogadosPage() {
  const seoData = {
    title: "IA para Despachos de Abogados | Automatización | RITEALMAR",
    description: "Automatización e inteligencia artificial para despachos de abogados. Mejora la gestión de consultas, seguimiento, tareas administrativas y atención al cliente."
  };

  const handleOpenModal = () => {
    trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita Abogados' });
    window.location.href = '/auditoria-ia-gratis';
  };

  const handleWhatsapp = () => {
    trackEvent('click_whatsapp', { event_label: 'Botón WhatsApp Abogados' });
    window.open(`https://wa.me/34611155415`, '_blank');
  };

  return (
    <ServiceLayout 
      title="Inteligencia Artificial y Automatización para Despachos de Abogados"
      subtitle="Automatiza consultas iniciales, formularios, seguimiento de clientes y tareas administrativas sin perder el trato profesional."
      seoTitle={seoData.title}
      seoDesc={seoData.description}
      onOpenCalendly={handleOpenModal}
    >
      
      {/* Botones Hero Extra */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 mb-20 relative z-20 flex flex-wrap justify-center gap-4">
        <button 
          onClick={handleOpenModal}
          className="btn-primary w-full sm:w-auto"
        >
          Solicitar auditoría gratuita
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={handleWhatsapp}
          className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold shadow-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          Hablar por WhatsApp
        </button>
      </div>

      {/* Sección Problema */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex flex-col items-center gap-4">
          <Clock className="text-[#FF006E]" size={40} />
          Muchos despachos pierden tiempo en tareas que se pueden automatizar
        </h2>
        <div className="prose prose-invert prose-lg text-slate-300 mx-auto text-left">
          <p>
            El tiempo de un abogado es su activo más valioso. Sin embargo, gran parte de la jornada laboral en los despachos y bufetes se consume en tareas administrativas de poco valor añadido.
          </p>
          <ul className="list-none space-y-4 my-8 pl-0">
            <li className="flex gap-3"><CheckCircle2 className="text-[#FF006E] shrink-0 mt-1" /> Consultas repetitivas sobre tarifas o disponibilidad.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#FF006E] shrink-0 mt-1" /> Leads que llegan por web o email y no se responden lo suficientemente rápido.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#FF006E] shrink-0 mt-1" /> Formularios incompletos previos a la primera visita.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#FF006E] shrink-0 mt-1" /> Seguimiento manual de potenciales clientes.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#FF006E] shrink-0 mt-1" /> Organización de documentación inicial dispersa.</li>
          </ul>
          <p>
            Toda esa carga administrativa resta foco al trabajo jurídico real. Mediante la <a href="/servicios/automatizacion-procesos" className="text-cyan-400 hover:underline">automatización de procesos</a>, logramos que la tecnología se encargue de la criba inicial y el seguimiento, para que los abogados solo dediquen tiempo a los casos viables y rentables.
          </p>
        </div>
      </section>

      {/* Sección Soluciones */}
      <section className="py-24 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            Qué puede automatizar la IA en un despacho
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: Users, title: "Recepción de consultas iniciales", desc: "Sistemas conversacionales y chatbots para capturar la solicitud del cliente 24/7." },
              { icon: FileText, title: "Formularios inteligentes", desc: "Recogida de datos previos estructurada para abrir el expediente sin intervención manual." },
              { icon: Scale, title: "Clasificación de asuntos", desc: "La IA deriva automáticamente las consultas al especialista correcto (laboral, penal, familia)." },
              { icon: ShieldCheck, title: "Seguimiento de leads", desc: "Campañas automáticas para recordar a los interesados que envíen la documentación." },
              { icon: Clock, title: "Recordatorios de citas", desc: "Sistemas automatizados por WhatsApp o SMS para reducir el absentismo en las reuniones." },
              { icon: Database, title: "Integración con software", desc: "Conexión directa con tu CRM legal, correo electrónico o herramientas de gestión." }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-[#0A1628] border border-white/5 hover:border-cyan-500/50 rounded-2xl transition-all group">
                <card.icon className="text-cyan-400 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Casos de uso habituales</h2>
          <p className="text-xl text-slate-400">Cómo se aplica en diferentes especialidades jurídicas</p>
        </div>
        <div className="space-y-6">
          <div className="p-8 bg-[#0A1628] rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
              <Users className="text-cyan-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Despacho de Familia</h3>
              <p className="text-slate-400">Recogida inicial de datos y documentación sensible mediante formularios conversacionales privados y encriptados, mucho antes de la primera llamada, reduciendo el tiempo de la consulta inicial a la mitad.</p>
            </div>
          </div>
          <div className="p-8 bg-[#0A1628] rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
              <Scale className="text-purple-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Despacho Laboral</h3>
              <p className="text-slate-400">Clasificación automática de consultas masivas de trabajadores (despidos, ERTEs) o empresas, utilizando <a href="/chatbots-ia" className="text-purple-400 hover:underline">chatbots inteligentes</a> que filtran viabilidad antes de pasarlo a un abogado.</p>
            </div>
          </div>
          <div className="p-8 bg-[#0A1628] rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-[#FF006E]/10 flex items-center justify-center shrink-0">
              <FileText className="text-[#FF006E]" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Asesoría Jurídica y Mercantil</h3>
              <p className="text-slate-400">Automatización de solicitudes de presupuesto corporativo y seguimiento de contactos B2B, conectando directamente con un <a href="/servicios/crm-a-medida" className="text-[#FF006E] hover:underline">CRM a medida</a> o estándar para cerrar reuniones altamente cualificadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad y Límites */}
      <section className="py-24 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-cyan-400 mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-8 text-white">IA útil, pero con control profesional</h2>
          <div className="text-left text-slate-300 space-y-6 text-lg bg-[#0A1628] p-8 rounded-2xl border border-white/5">
            <p>
              Entendemos que el sector legal requiere la máxima rigurosidad. Por ello, diseñamos nuestras soluciones bajo una premisa fundamental:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3"><ArrowRight className="text-cyan-400 shrink-0 mt-1" /> <strong>La IA no sustituye el criterio jurídico.</strong> Nunca.</li>
              <li className="flex gap-3"><ArrowRight className="text-cyan-400 shrink-0 mt-1" /> No da asesoramiento legal definitivo sin revisión humana previa.</li>
              <li className="flex gap-3"><ArrowRight className="text-cyan-400 shrink-0 mt-1" /> Su objetivo es ayudar en la atención inicial, la clasificación de casos y los procesos administrativos, no redactar demandas finales de forma autónoma.</li>
              <li className="flex gap-3"><ArrowRight className="text-cyan-400 shrink-0 mt-1" /> El despacho mantiene siempre el control total y la confidencialidad de la información.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso RITEALMAR */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">Cómo lo implementamos</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Revisamos cómo llegan actualmente las consultas a tu despacho.",
            "Detectamos tareas repetitivas y cuellos de botella.",
            "Diseñamos un flujo seguro y respetuoso con la LOPD.",
            "Conectamos formularios, email, WhatsApp y CRM.",
            "Medimos resultados y optimizamos la conversión."
          ].map((step, i) => (
            <div key={i} className="bg-[#0F172A] p-6 rounded-xl border border-white/5 relative flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center mb-4 text-xl">
                {i + 1}
              </div>
              <p className="text-sm text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preguntas Frecuentes (FAQs) */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">Preguntas Frecuentes sobre IA y Automatización para Despachos</h2>
        <div className="space-y-6">
          {[
            {
              q: "¿Qué tareas puede automatizar un despacho de abogados?",
              a: "Principalmente tareas administrativas: clasificación de consultas iniciales, reserva de citas, envío de recordatorios, recogida de documentación previa y conexión de datos con el software de gestión."
            },
            {
              q: "¿La IA puede sustituir al abogado?",
              a: "No. La inteligencia artificial no toma decisiones jurídicas ni asesora legalmente. Su función es descargar al equipo de tareas repetitivas para que los profesionales puedan centrarse en el trabajo de alto valor."
            },
            {
              q: "¿Se puede conectar con el CRM del despacho?",
              a: "Sí, es posible integrar la automatización y los asistentes virtuales con herramientas de mercado o con un sistema desarrollado a medida, facilitando el seguimiento de los expedientes."
            },
            {
              q: "¿Puede integrarse con WhatsApp o email?",
              a: "Por supuesto. Es uno de los canales más demandados para responder consultas iniciales rápidas o enviar recordatorios automáticos de reuniones o documentación faltante."
            },
            {
              q: "¿Cómo se protege la información?",
              a: "Se utilizan entornos seguros y privados. La IA se configura para procesar información sin entrenar modelos públicos, asegurando que los datos sensibles del despacho y de los clientes permanezcan confidenciales."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-[#0F172A] p-6 rounded-xl border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-[#0A1628] to-[#0A1628] text-center border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">¿Quieres saber qué puede automatizar tu despacho?</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Analizamos los procesos de tu despacho y detectamos oportunidades de automatización orientadas a reducir tareas administrativas repetitivas y mejorar la organización comercial.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => {
              // Permitir navegación normal al clickear href
            }}
            className="btn-primary w-full sm:w-auto"
          >
            Solicitar Auditoría IA Gratuita
          </a>
        </div>
      </section>
      
    </ServiceLayout>
  );
}
