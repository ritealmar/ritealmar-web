import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ShieldCheck, UserCheck, Activity, Users, Clock, ArrowRight } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';

export default function ClinicasV2({ onOpenForm }: { onOpenForm: () => void }) {
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
      desc: "Un Agente de IA coordinado con tu software médico que agenda, cancela y mueve citas por WhatsApp 24/7 de forma humana.",
      icon: CalendarCheck
    },
    {
      title: "Cualificación de Pacientes Nuevos",
      desc: "Filtra de manera automática los tratamientos solicitados antes de agendar, asegurando consultas de alto valor para tus especialistas.",
      icon: Users
    },
    {
      title: "Atención Post-Tratamiento Autónoma",
      desc: "Seguimiento automatizado tras intervenciones para asegurar el bienestar del paciente y capturar reseñas positivas en Google.",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden relative">
      {/* Luces de Neón Ambientales (Estilo Dark Neon) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-950/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-44 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
            Ritealmar Healthcare Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6 uppercase">
            Automatiza la agenda de tu clínica. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
              Multiplica tus pacientes.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-medium">
            Sustituye las tareas mecánicas de recepción por un sistema inteligente que gestiona citas, optimiza huecos libres y atiende 24/7 sin saturar a tu equipo humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={onOpenForm}
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
    </div>
  );
}
