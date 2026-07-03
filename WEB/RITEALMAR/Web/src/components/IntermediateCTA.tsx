import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function IntermediateCTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-br from-[#0A0F24] to-[#0F62FE]/20 flex items-center justify-center">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full bg-neural-net opacity-40 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-display font-black leading-tight">
          ¿Sabes cuántas horas pierde tu empresa en tareas repetitivas?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
          Solicita un diagnóstico IA y descubre qué procesos puedes automatizar esta semana.
        </p>
        <button 
          onClick={scrollToContact}
          className="btn-primary py-5 px-10 text-lg md:text-xl gap-3 shadow-[0_0_30px_rgba(15,98,254,0.6)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)]"
        >
          <Sparkles size={24} /> Quiero mi diagnóstico gratuito
        </button>
      </motion.div>
    </section>
  );
}
