import React, { useEffect } from 'react';

import { CalendarCheck, ShieldCheck, UserCheck, Activity, Users, Clock, ArrowRight } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import RecursosRecomendados from '../components/RecursosRecomendados';

export default function ClinicasV2({ onOpenForm }: { onOpenForm: (config?: any) => void }) {
  useEffect(() => {
    AnalyticsTracker.trackSectorView('clinicas');
  }, []);

  const metrics = [
    { value: "-21%", label: "Absentismo (No-Shows)", desc: "Recordatorios inteligentes vía WhatsApp." },
    { value: "85%", label: "Consultas Automatizadas", desc: "Resolución de dudas frecuentes sin recepcionista." },
    { value: "+31%", label: "Facturación Mensual", desc: "Lista de espera automática para cubrir cancelaciones." },
  ];

  const blocks = [
    {
      title: "Automatización de Agenda y Citas",
      desc: "Un Agente de IA coordinado con tu software médico que agenda, cancela y mueve citas por WhatsApp 24/7 de forma humana. Aprende más sobre nuestros asistentes en la página de chatbots de IA.",
      icon: CalendarCheck
    },
    {
      title: "Cualificación de Pacientes Nuevos",
      desc: "Filtra de manera automática los tratamientos solicitados antes de agendar, asegurando consultas de alto valor para tus especialistas.",
      icon: Users
    },
    {
      title: "Atención Post-Tratamiento Autónoma",
      desc: "Envío automático de mensajes recordatorios tras las intervenciones para confirmar la satisfacción del paciente y facilitar la captación de reseñas en Google.",
      icon: Activity
    }
  ];

  const faqs = [
    { q: "¿Cuánto cuesta automatizar la gestión de mi clínica?", a: "Depende del volumen de pacientes y la profundidad de la integración con tu software actual. Diseñamos sistemas ajustados para que la reducción de citas fallidas (no-shows) amortice la inversión rápidamente. Evaluamos el presupuesto en una auditoría gratuita." },
    { q: "¿Se integra con las herramientas existentes que ya usamos?", a: "Sí. Si tu software médico (ej. Clinic Cloud, Archivex) dispone de API, nuestra Inteligencia Artificial se conecta para agendar citas directamente en el calendario del especialista." },
    { q: "¿Cuánto tiempo se tarda en implantar?", a: "Habitualmente entre 3 y 5 semanas. Realizamos pruebas exhaustivas antes de lanzar para asegurar que la agenda se mantiene organizada y los pacientes reciben la mejor atención." },
    { q: "¿Es seguro para la privacidad de los datos médicos?", a: "Diseñamos nuestras integraciones priorizando la privacidad y facilitando el cumplimiento de la RGPD/LOPD. Los datos viajan encriptados (TLS/SSL) y los asistentes IA no retienen las conversaciones de pacientes para entrenar modelos públicos." },
    { q: "¿Es difícil de usar para nuestro equipo de recepción?", a: "No. La automatización actúa de forma transparente, gestionando el volumen por WhatsApp. Tu equipo de recepción solo interviene si la IA detecta una urgencia clínica o una petición que requiera empatía humana." },
    { q: "¿Qué incluye el mantenimiento técnico?", a: "Nos encargamos de monitorizar que la conexión entre WhatsApp y tu sistema médico siga siendo estable. Si tu software actualiza su versión, nosotros adaptamos la integración sin coste de desarrollo adicional." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IA para clínicas: más citas, mejor seguimiento y menos tareas manuales",
    "description": "Agentes de IA para clínicas. Multiplica tus pacientes, automatiza tu agenda y mejora el seguimiento post-tratamiento.",
    "provider": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "url": "https://ritealmar.es"
    },
    "areaServed": "ES",
    "url": window.location.href
  };

  // FAQ Schema temporalmente desactivado para SEO P0

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden relative">
      <SEO 
        title="IA para Clínicas | Ritealmar" 
        description="Agentes de IA para clínicas. Multiplica tus pacientes, automatiza tu agenda y mejora el seguimiento post-tratamiento." 
      />
      <JsonLd data={serviceSchema} />
      {/* Luces de Neón Ambientales (Estilo Dark Neon) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-950/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-44 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
            Ritealmar Healthcare Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
            IA para clínicas: más citas, mejor seguimiento y menos tareas manuales
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-medium">
            Sustituye las tareas mecánicas de recepción por un sistema inteligente que gestiona citas, optimiza huecos libres y atiende 24/7 sin saturar a tu equipo humano, integrando una potente <a href="/blog/automatizar-whatsapp-pyme" className="text-cyan-400 hover:underline">automatización de WhatsApp</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => onOpenForm({
                title: "Solicitar auditoría IA gratuita",
                subtitle: "Cuéntanos brevemente tu negocio y revisaremos qué procesos puedes automatizar para ahorrar tiempo, captar más clientes o mejorar tu atención comercial.",
                submitText: "Solicitar auditoría gratuita"
              })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              Auditar Agenda Gratis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Simulación Interactiva UX */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4 mb-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-500">LIVE AGENT ENGINE</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-950/60 p-4 rounded-xl rounded-tl-none max-w-[85%] border border-slate-900">
              <p className="text-xs font-bold text-cyan-400 mb-1">Paciente (WhatsApp)</p>
              <p className="text-sm text-slate-300">"Hola, tengo que cancelar mi cita de ortodoncia de mañana a las 11:00 porque me ha surgido un viaje."</p>
            </div>
            <div className="bg-cyan-950/20 p-4 rounded-xl rounded-tr-none max-w-[85%] ml-auto border border-cyan-500/20">
              <p className="text-xs font-bold text-purple-400 mb-1">Ritealmar Health AI</p>
              <p className="text-sm text-slate-300">"Cita cancelada correctamente, no te preocupes. Acabo de ofrecer tu hueco a la lista de espera y ya ha sido cubierto de forma automática."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="relative z-10 py-20 border-y border-slate-900 bg-slate-950/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-2">
              <p className="text-5xl font-black text-cyan-400 tracking-tight">{m.value}</p>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-200">{m.label}</p>
              <p className="text-xs text-slate-400 font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Características del Ecosistema */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">Eficiencia clínica sin esfuerzo manual</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">Diseñamos sistemas que se adaptan a tus doctores y flujos, no al revés.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((b, i) => (
            <div key={i} className="bg-slate-900/20 border border-slate-800/40 p-8 rounded-2xl hover:border-cyan-500/20 transition-all group relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <b.icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Visibles */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-3xl font-bold uppercase mb-10 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/60">
              <h3 className="font-bold text-lg text-white mb-2">{f.q}</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos Recomendados Sector Salud */}
      <RecursosRecomendados type="clinicas" />

    </div>
  );
}
