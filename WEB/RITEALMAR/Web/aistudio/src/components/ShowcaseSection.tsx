import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Network, Cpu, CheckCircle2 } from 'lucide-react';

export const ShowcaseSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "RECOPILACIÓN", icon: <Database size={20} />, status: "Ingesta de datos...", color: "text-blue-400" },
    { title: "ANÁLISIS NEURONAL", icon: <Network size={20} />, status: "Análisis semántico...", color: "text-brand-cyan" },
    { title: "EJECUCIÓN", icon: <Cpu size={20} />, status: "Optimización...", color: "text-brand-violet" },
    { title: "DESPLIEGE", icon: <CheckCircle2 size={20} />, status: "Protocolo activo...", color: "text-emerald-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none">Cómo funciona el motor Ritealmar</h2>
          <p className="text-slate-400 text-lg">Sistemas inteligentes que evolucionan y aprenden de tus procesos operativos.</p>
        </div>
        
        <div className="space-y-4">
           {steps.map((step, i) => (
             <div key={i} className={`p-6 rounded-2xl border transition-all duration-700 flex items-center gap-6 ${
               activeStep === i ? `bg-white/5 border-white/10 opacity-100` : 'bg-transparent border-transparent opacity-20'
             }`}>
                <div className={`p-4 rounded-xl ${activeStep === i ? step.color : 'text-slate-500'}`}>
                  {step.icon}
                </div>
                <div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-white">{step.title}</h4>
                   <p className="text-[10px] text-slate-500 font-mono mt-1">{step.status}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="glass-card w-[400px] h-[400px] flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-brand-cyan/5 to-transparent">
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeStep}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               className="text-center space-y-8 relative z-10"
             >
                <div className={`p-8 rounded-3xl bg-white/5 mx-auto w-fit mb-6 ${steps[activeStep].color}`}>
                  {steps[activeStep].icon}
                </div>
                <h3 className="text-white text-2xl font-bold tracking-tight">{steps[activeStep].title}</h3>
                <div className="text-xs font-mono text-slate-500 tracking-widest">{steps[activeStep].status}</div>
             </motion.div>
           </AnimatePresence>
           
           {/* Scan line animated */}
           <motion.div 
             animate={{ y: [-150, 150] }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             className="absolute inset-x-0 h-px bg-brand-cyan/20 z-0" 
           />
        </div>
      </div>
    </div>
  );
};
