import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ShieldCheck, Target, Zap, HeartHandshake } from 'lucide-react';

export const TeamSection = () => {
  const values = [
    { title: 'Transparencia total', desc: 'Comunicación honesta sobre las capacidades y límites de la tecnología.' },
    { title: 'Foco en resultados', desc: 'No implementamos por moda, sino por impacto en tu margen de beneficio.' },
    { title: 'Sistemas robustos', desc: 'Software escalable diseñado para durar y crecer con tu empresa.' },
    { title: 'Soporte directo', desc: 'Trato de ingeniero a ingeniero, sin intermediarios comerciales.' }
  ];

  const highlights = [
    { title: 'Soluciones prácticas', desc: 'Sistemas reales que funcionan desde el primer día, sin consultoría vacía.', icon: <Target size={16} /> },
    { title: 'Sistemas adaptados', desc: 'Tu operativa dicta el diseño del software, no al revés.', icon: <Zap size={16} /> },
    { title: 'Integración real', desc: 'Conexión total con tus herramientas actuales (Office, CRMs, ERPs).', icon: <HeartHandshake size={16} /> },
    { title: 'Acompañamiento', desc: 'Desde el análisis inicial hasta la optimización continua en producción.', icon: <Linkedin size={16} /> }
  ];

  return (
    <section id="sobre-nosotros" className="section-padding bg-midnight relative overflow-hidden">
      <div className="grid-precision">
        
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-cyan/30" />
            <span className="text-[10px] font-bold text-cyan tracking-[0.3em] uppercase leading-none">Nuestro ADN e Ingeniería</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl tracking-tight font-display text-text-primary mb-12 leading-tight">
            Diseñamos sistemas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">optimizan tu rentabilidad</span> operativa.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 border-y border-white/5 py-16">
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-cyan opacity-40">{h.icon}</div>
                <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">{h.title}</h4>
                <p className="text-[13px] text-text-tertiary leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-4">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-3 group"
              >
                <h4 className="text-[11px] font-bold text-text-secondary group-hover:text-cyan uppercase tracking-widest transition-colors mb-1">{v.title}</h4>
                <p className="text-sm text-text-tertiary leading-relaxed opacity-70">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 glass-subtle border border-emerald/10 rounded-sm flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Compromiso RITEALMAR</span>
                <span className="text-xs text-text-muted">Realismo técnico y optimización continua.</span>
              </div>
            </div>
            <div className="w-full md:w-px h-px md:h-12 bg-white/5" />
            <div className="text-center md:text-right">
              <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest block mb-1">Estatus del sistema</span>
              <span className="text-[10px] font-bold text-emerald uppercase tracking-widest flex items-center justify-center md:justify-end gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" /> Operativo en Producción
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
