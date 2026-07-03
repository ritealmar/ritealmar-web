import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Zap, HeartHandshake, Puzzle } from 'lucide-react';

export const WhyUsSection = () => {
  const points = [
    {
      title: 'Soluciones prácticas, no teoría',
      desc: 'No vendemos consultoría vacía. Construimos sistemas reales que funcionan desde el primer día.',
      icon: <Target size={24} className="text-cyan" />
    },
    {
      title: 'Sistemas adaptados a cada empresa',
      desc: 'No creemos en el software "talla única". Tu operativa dicta cómo construimos la solución.',
      icon: <Puzzle size={24} className="text-emerald" />
    },
    {
      title: 'Integración real con tus herramientas',
      desc: 'Conectamos lo que ya usas hoy (Office, CRMs, Maquinaria) para que no tengas que cambiar tu forma de trabajar.',
      icon: <Zap size={24} className="text-violet" />
    },
    {
      title: 'Acompañamiento en todo el proceso',
      desc: 'Desde el análisis inicial hasta la implantación y optimización continua. Somos tus socios técnicos.',
      icon: <HeartHandshake size={24} className="text-cyan" />
    }
  ];

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="grid-precision">
        
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-cyan/30" />
            <span className="text-[10px] font-bold text-cyan tracking-[0.3em] uppercase">Por qué elegirnos</span>
            <div className="w-12 h-px bg-cyan/30" />
          </motion.div>
          
          <h2 className="text-text-primary text-4xl md:text-5xl tracking-tight font-display max-w-4xl mx-auto leading-tight">
            Posicionamos tu empresa como <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">referente en eficiencia operativa</span>
          </h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 p-10 bg-surface border border-white/5 group hover:border-cyan/20 transition-all duration-500"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-display font-medium text-text-primary tracking-tight">
                  {point.title}
                </h3>
                <p className="text-text-tertiary text-base leading-relaxed leading-relaxed opacity-70">
                  {point.desc}
                </p>
                <div className="flex items-center gap-3 text-cyan text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-6 h-px bg-cyan" /> Enfoque a resultados
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 mt-24 text-center">
          <div className="p-12 glass-subtle border border-emerald/20 flex flex-col items-center gap-8 max-w-4xl mx-auto rounded-sm">
            <div className="flex flex-col gap-2">
              <span className="text-emerald text-xs font-bold uppercase tracking-[0.3em]">Nuestra Garantía</span>
              <h3 className="text-2xl font-display font-medium text-text-primary">Software escalable, robusto e integrado</h3>
            </div>
            <p className="text-text-secondary opacity-60 leading-relaxed text-center">
              No nos conformamos con una "digitalización" estética. Buscamos el ahorro real de tiempo y la eliminación definitiva de errores manuales en tu estructura de negocio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
