import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, ArrowRight, Bot } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenCalendly?: (config?: any) => void;
}

// Removed AnimatedText component as it is no longer used
const DashboardSimulation = () => (
  <div className="relative w-full max-w-2xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[10px] text-slate-400 italic font-medium">Ejemplo de dashboard</span>
        <div className="text-[10px] uppercase tracking-widest text-[#00D4FF] font-bold">RITEALMAR CORE</div>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { label: 'Tiempo Ahorrado', value: '+15h', color: 'text-[#00D4FF]' },
        { label: 'Eficiencia', value: '99.9%', color: 'text-[#00FF9D]' },
        { label: 'Coste Op.', value: '-45%', color: 'text-[#FF006E]' }
      ].map((stat, i) => (
        <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl">
          <p className="text-[10px] text-slate-300 mb-1 uppercase tracking-wider">{stat.label}</p>
          <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      {[
        { t: 'Analizando Procesos', s: 'IA Detectando ineficiencias...', w: 'w-[90%]', c: 'bg-[#00D4FF]' },
        { t: 'Automatizando Flujo', s: 'Sincronizando sistemas...', w: 'w-[65%]', c: 'bg-[#FF006E]' },
        { t: 'Asistente Autónomo', s: '124 tareas resueltas hoy', w: 'w-[100%]', c: 'bg-[#00FF9D]' }
      ].map((task, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/80 font-medium">{task.t}</span>
            <span className="text-slate-300 italic">{task.s}</span>
          </div>
          <div className="w-full h-1.5 bg-[#0A1628] rounded-full overflow-hidden border border-white/5">
            <div 
              className={`h-full ${task.c} ${task.w} shadow-[0_0_10px_currentColor] transition-all duration-[2000ms] ease-out`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Hero({ onOpenCalendly = () => {} }: HeroProps) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section className="relative lg:min-h-screen flex flex-col justify-start overflow-hidden bg-[#030712] pt-28 lg:pt-40 pb-12 lg:pb-20">
      
      {/* 🚀 HERO CONTAINER V2: Sistema de iluminación Neon y Grid Digital */}
      <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none hidden lg:block translate-z-0" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-500/20 blur-[80px] rounded-full pointer-events-none hidden lg:block translate-z-0" />
      
      {/* Malla de Rejilla Tecnológica (Estructura de Ingeniería) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 translate-z-0 hidden lg:block" />

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 mt-0">
        
        {/* Left Typography Column (LCP Critical - No JS animations to prevent blocking) */}
        <div className="w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/20 text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-6">
            <Sparkles size={14} aria-hidden="true" /> Automatización para PYMES
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white lg:min-h-[160px]">
            Automatizamos las tareas repetitivas de tu empresa para que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">vuelvas a vender</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-4 max-w-xl font-medium lg:min-h-[80px]">
            Diseño web, CRMs y asistentes de IA que ahorran horas a tu equipo cada semana. Implementación rápida, sin tecnicismos y con retorno desde el primer mes.
          </p>
          
          <p className="text-sm text-slate-400 font-medium mb-10 max-w-xl border-l-2 border-[#00D4FF]/30 pl-4 lg:min-h-[40px]">
            ✓ Sin cuotas ocultas | ✓ Proyectos llave en mano | ✓ Soporte continuo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <a 
              href="#contacto" 
              onClick={(e) => {
                e.preventDefault();
                trackEvent('cta_primary_click', { cta_text: 'Solicitar auditoría gratuita', cta_location: 'hero', page_path: window.location.pathname });
                window.location.href = '/auditoria-ia-gratis';
              }}
              className="btn-primary group w-full sm:w-auto"
            >
              Solicitar auditoría gratuita <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="btn-secondary w-full sm:w-auto"
            >
              Ver soluciones
            </a>
          </div>
        </div>

        {/* Right UI Simulation Column */}
        <div className="relative lg:ml-8 mt-10 lg:mt-0 hidden lg:block">
          <DashboardSimulation />
          
          {/* Floating Action Element */}
          <div 
            className="absolute -bottom-8 -right-8 hidden md:flex bg-[#0A1628] border border-white/10 p-5 rounded-2xl shadow-2xl items-center gap-4 animate-bounce-slow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/30" aria-hidden="true">
              <Bot size={24} className="text-[#00D4FF]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Agente Activo</p>
              <p className="text-[10px] text-[#00FF9D] uppercase tracking-widest font-bold">Optimizando 24/7</p>
            </div>
          </div>
          
          {/* Decorative Glowing Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00D4FF]/5 to-[#FF006E]/5 rounded-full blur-[40px] -z-10"></div>
        </div>
        
      </div>
    </section>
  );
}
