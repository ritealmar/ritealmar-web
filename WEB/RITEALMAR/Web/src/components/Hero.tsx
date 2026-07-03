import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Zap, ArrowRight, Bot } from 'lucide-react';

interface HeroProps {
  onOpenCalendly: () => void;
}

const AnimatedText = () => {
  const phrases = [
    "automatizar",
    "escalar",
    "optimizar",
    "crecer"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] relative inline-block w-full">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-full origin-left text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E] whitespace-nowrap"
          style={{ transformStyle: "preserve-3d" }}
        >
          {phrases[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const DashboardSimulation = () => (
  <div className="relative w-full max-w-2xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="text-[10px] uppercase tracking-widest text-[#00D4FF]/70 font-bold">RITEALMAR CORE</div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { label: 'Tiempo Ahorrado', value: '+15h', color: 'text-[#00D4FF]' },
        { label: 'Eficiencia', value: '99.9%', color: 'text-[#00FF9D]' },
        { label: 'Coste Op.', value: '-45%', color: 'text-[#FF006E]' }
      ].map((stat, i) => (
        <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl">
          <p className="text-[10px] text-white/40 mb-1 uppercase tracking-wider">{stat.label}</p>
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
            <span className="text-white/40 italic">{task.s}</span>
          </div>
          <div className="w-full h-1.5 bg-[#0A1628] rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: task.w }} 
              transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
              className={`h-full ${task.c} shadow-[0_0_10px_currentColor]`} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Hero({ onOpenCalendly }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-24 pb-20">
      
      {/* 🚀 HERO CONTAINER V2: Sistema de iluminación Neon y Grid Digital */}
      <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Malla de Rejilla Tecnológica (Estructura de Ingeniería) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 mt-10 lg:mt-0">
        
        {/* Left Typography Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/20 text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-8">
            <Sparkles size={14} /> Ingeniería Operativa IA
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-white">
            Quiero <br />
            <AnimatedText /> <br />
            <span className="text-white">con IA.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
            Diseñamos e implementamos sistemas inteligentes para que tu negocio crezca sin errores, sin estrés y sin contratar más personal. Expertos en automatización empresarial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={onOpenCalendly} 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF006E] to-[#D946EF] text-white font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(255,0,110,0.4)] hover:scale-105 transition-all group"
            >
              Calcula tu ahorro <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#servicios" 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              Ver Soluciones
            </a>
          </div>
        </motion.div>

        {/* Right UI Simulation Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-8 mt-10 lg:mt-0"
        >
          <DashboardSimulation />
          
          {/* Floating Action Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 hidden md:flex bg-[#0A1628] border border-white/10 p-5 rounded-2xl shadow-2xl items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/30">
              <Bot size={24} className="text-[#00D4FF]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Agente Activo</p>
              <p className="text-[10px] text-[#00FF9D] uppercase tracking-widest font-bold">Optimizando 24/7</p>
            </div>
          </motion.div>
          
          {/* Decorative Glowing Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00D4FF]/5 to-[#FF006E]/5 rounded-full blur-[40px] -z-10"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
