import React from 'react';
import { motion } from 'framer-motion';

export const TrustSection = () => {
  const partners = [
    { name: 'ALMAR Logística', sector: 'Operaciones Globales' },
    { name: 'Nexus Cloud', sector: 'Infraestructura' },
    { name: 'Sentinel Corp', sector: 'Ciberseguridad' },
    { name: 'Velocity IO', sector: 'Data Intelligence' },
    { name: 'Orbital Edge', sector: 'Edge Computing' },
    { name: 'Grupo RITEALMAR', sector: 'Manufactura' }
  ];

  const testimonials = [
    { text: "La IA de RITEALMAR ha reducido nuestros tiempos de carga en un 30%. Inmejorable.", author: "Director Logística, Grupo RITEALMAR" },
    { text: "Un equipo técnico de primer nivel que entiende el negocio industrial.", author: "CTO, Sentinel Corp" }
  ];

  return (
    <div className="py-24 section-divider relative z-10 bg-[#050505]">
      <div className="grid-precision items-start">
        
        {/* Testimonials */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8 mb-16 lg:mb-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-gold/30" />
            <span className="text-[11px] font-bold text-gold tracking-widest uppercase">Opiniones de Éxito</span>
          </div>
          <div className="flex flex-col gap-10 pr-10">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col gap-3"
              >
                <p className="text-[15px] text-text-secondary leading-relaxed italic">"{t.text}"</p>
                <span className="text-[11px] font-bold text-gold uppercase tracking-widest">{t.author}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-10">
          <div className="flex items-center gap-4 lg:justify-end">
            <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase">Ecosistema de Confianza / Sectores</span>
            <div className="w-10 h-px bg-gold/30" />
          </div>
          
          <div className="flex flex-wrap items-center gap-8 lg:gap-16 justify-start lg:justify-end opacity-50">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-1 cursor-default group"
              >
                <span className="text-xl font-display font-medium text-text-primary group-hover:text-gold transition-colors">{p.name}</span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{p.sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
