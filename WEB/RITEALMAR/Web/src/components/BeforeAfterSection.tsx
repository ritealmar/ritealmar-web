import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Frown, Sparkles, X, Check, ArrowRightCircle } from 'lucide-react';

export default function BeforeAfterSection() {
  const comparisons = [
    {
      before: "Leads perdidos por tardar en responder",
      after: "Respuesta automática 24/7 por web o WhatsApp"
    },
    {
      before: "Datos en Excel dispersos o duplicados",
      after: "CRM unificado y panel de control centralizado"
    },
    {
      before: "Citas perdidas y sin seguimiento previo",
      after: "Recordatorios y confirmaciones automáticas"
    },
    {
      before: "Formularios que llegan al email saturando la bandeja",
      after: "Leads clasificados, cualificados y priorizados"
    },
    {
      before: "Atención al cliente manual y repetitiva",
      after: "Agente IA resolviendo preguntas frecuentes al instante"
    },
    {
      before: "Web 'bonita' pero inerte y sin estrategia",
      after: "Web viva enfocada 100% en conversión y medición"
    }
  ];

  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/5">
      {/* Luces decorativas */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto] tracking-tight"
          >
            De procesos lentos a sistemas automatizados
          </motion.h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Transformamos tareas repetitivas en flujos inteligentes que ahorran tiempo, reducen errores y mejoran drásticamente la captación de clientes.
          </p>
        </div>

        {/* Tabla / Tarjetas Comparativas */}
        <div className="space-y-4 mb-16">
          {/* Header Oculto en Móvil, visible en Desktop */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-center px-8 pb-4 border-b border-white/10 text-sm font-bold uppercase tracking-widest text-slate-400">
            <div>El Problema (Antes)</div>
            <div className="w-8"></div>
            <div>La Solución (Después)</div>
          </div>

          {/* Filas */}
          {comparisons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center bg-[#0A1628]/50 hover:bg-[#0A1628] border border-white/5 hover:border-white/10 p-6 md:px-8 md:py-6 rounded-2xl transition-all"
            >
              {/* Antes */}
              <div className="w-full flex items-center gap-4 text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20">
                  <X className="text-rose-400 w-5 h-5" />
                </div>
                <span className="font-medium text-[15px] md:text-lg">{item.before}</span>
              </div>

              {/* Conector */}
              <div className="shrink-0 flex items-center justify-center rotate-90 md:rotate-0 my-2 md:my-0">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all shadow-[0_0_15px_rgba(0,212,255,0)] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Después */}
              <div className="w-full flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,212,255,0.15)] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                  <Check className="text-cyan-400 w-5 h-5" />
                </div>
                <span className="font-bold text-[15px] md:text-lg text-slate-100 group-hover:text-white transition-colors">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] hover:scale-105 transition-all group"
          >
            Quiero pasar de manual a automático <ArrowRightCircle size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
