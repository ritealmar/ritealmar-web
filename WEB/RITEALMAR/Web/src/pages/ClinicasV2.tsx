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

  const casosDeUsoList = [
    { title: "Gestión de Citas", desc: "Confirmar citas, enviar recordatorios y gestionar cancelaciones automáticamente." },
    { title: "Consultas Iniciales", desc: "Responder preguntas frecuentes no clínicas (horarios, seguros, ubicación)." },
    { title: "Seguimiento Administrativo", desc: "Crear tareas de seguimiento y reactivar pacientes inactivos mediante comunicaciones administrativas." },
  ];

  const blocks = [
    {
      title: "Atención y Recepción 24/7",
      desc: "Automatiza la gestión de solicitudes de información y recopila datos administrativos previos conectando tus canales con tu software de clínica dental.",
      icon: Users
    },
    {
      title: "WhatsApp para Clínicas",
      desc: "Utiliza asistentes inteligentes para enviar recordatorios de agenda, evitando ausencias sin requerir que tu equipo llame uno por uno.",
      icon: CalendarCheck
    },
    {
      title: "Sin Tareas Repetitivas",
      desc: "La tecnología se encarga de conectar formularios y gestionar comunicaciones administrativas, mientras el personal humano atiende con empatía lo que realmente importa.",
      icon: Activity
    }
  ];

  const faqs = [
    { q: "¿Qué tareas puede automatizar una clínica dental?", a: "Principalmente tareas administrativas: confirmar citas, enviar recordatorios, recopilar datos previos y responder consultas generales no clínicas." },
    { q: "¿Puede la IA gestionar citas?", a: "Sí, puede coordinarse con la agenda para ofrecer huecos libres, procesar cancelaciones y mover pacientes, todo de forma automática." },
    { q: "¿Puede integrarse con WhatsApp?", a: "Por supuesto. WhatsApp es un canal muy efectivo para que la clínica interactúe rápidamente con los pacientes sin saturar la centralita telefónica." },
    { q: "¿Se conecta con el software de la clínica?", a: "Sí, diseñamos soluciones que se integran con el software de gestión actual de la clínica (si dispone de API) o con sistemas a medida." },
    { q: "¿Cómo se protege la información?", a: "El sistema está diseñado teniendo en cuenta la privacidad y la protección de datos en todo momento. No se emplean los datos para entrenar modelos públicos." },
    { q: "¿Cuánto cuesta automatizar una clínica dental?", a: "El coste depende del volumen de interacciones y de las integraciones necesarias. Analizamos cada caso para proponer una solución ajustada." },
    { q: "¿La IA sustituye al personal de recepción?", a: "En absoluto. La IA no sustituye al profesional sanitario ni a la recepción; los libera de tareas repetitivas para que ofrezcan un trato humano de mayor calidad." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización y IA para Clínicas Dentales",
    "description": "Automatización e inteligencia artificial para clínicas dentales. Gestiona citas, recordatorios por WhatsApp y seguimiento administrativo.",
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
        title="IA para Clínicas Dentales | Automatización de Citas | RITEALMAR" 
        description="Automatización e inteligencia artificial para clínicas dentales. Gestiona citas, recordatorios por WhatsApp y seguimiento administrativo." 
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
            Inteligencia Artificial y Automatización para Clínicas Dentales
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-medium">
            Sustituye tareas mecánicas por un sistema que gestiona citas, optimiza huecos y atiende consultas 24/7. Una solución ideal para <a href="/clinicas" className="text-cyan-400 hover:underline">clínicas</a> que buscan integrar <a href="/servicios/automatizacion-procesos" className="text-cyan-400 hover:underline">automatización de procesos</a>, <a href="/chatbots-ia" className="text-cyan-400 hover:underline">chatbots IA</a> y un <a href="/servicios/crm-a-medida" className="text-cyan-400 hover:underline">CRM a medida</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => onOpenForm({
                title: "Solicitar auditoría IA gratuita",
                subtitle: "Analizamos los procesos de tu clínica dental y detectamos oportunidades de automatización orientadas a reducir tareas repetitivas y mejorar la organización.",
                submitText: "Solicitar auditoría"
              })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              Solicitar Auditoría IA Gratuita <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

      {/* Ejemplos de Casos de Uso */}
      <section className="relative z-10 py-20 border-y border-slate-900 bg-slate-950/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-white mb-4">Ejemplos de Aplicación en la Clínica</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {casosDeUsoList.map((m, i) => (
            <div key={i} className="space-y-4 p-6 bg-slate-900/40 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">{m.title}</h3>
              <p className="text-sm text-slate-400 font-medium">{m.desc}</p>
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

      {/* CTA Final */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-r from-slate-900 to-[#0A1628] border border-cyan-500/20 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Quieres mejorar la organización administrativa?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Revisamos los procesos administrativos de tu clínica dental y detectamos oportunidades de automatización para ahorrar tiempo y optimizar la gestión de citas.
          </p>
          <button 
            onClick={() => onOpenForm({
              title: "Solicitar auditoría IA gratuita",
              subtitle: "Revisamos los procesos administrativos de tu clínica dental y detectamos oportunidades de automatización para ahorrar tiempo y optimizar citas.",
              submitText: "Solicitar auditoría"
            })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-wider transition-all"
          >
            Solicitar Auditoría IA Gratuita <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Recursos Recomendados Sector Salud */}
      <RecursosRecomendados type="clinicas" />

    </div>
  );
}
