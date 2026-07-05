import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const pillars = [
    { label: 'Foco en resultados de negocio', desc: 'Priorizamos el retorno de la inversión y la eficiencia sobre la estética vacía.' },
    { label: 'Pragmatismo técnico', desc: 'Implementamos soluciones útiles hoy, escalables para el mañana.' },
    { label: 'Sistemas robustos', desc: 'Construimos herramientas que funcionan bajo presión operativa real.' },
  ];

  return (
    <section id="sobre-nosotros" className="py-40 bg-surface relative overflow-hidden">
      <div className="grid-precision">
        
        {/* Left Side: Text Content */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-cyan/30" />
              <span className="text-[10px] font-bold text-cyan tracking-[0.25em] uppercase">Nuestra Filosofía</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-text-primary tracking-tight leading-tight">
              Ingeniería aplicada a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">realidad del negocio</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed opacity-60">
              En RITEALMAR no somos una agencia de diseño web corporativo. Somos ingenieros que resuelven cuellos de botella operativos mediante automatización, software a medida e IA aplicada.
            </p>
            <p className="text-text-tertiary text-base leading-relaxed">
              No buscamos crear webs corporativas genéricas. Buscamos posicionar a tu empresa como un referente de eficiencia mediante herramientas que eliminen el trabajo manual y devuelvan el control total de la gestión.
            </p>
          </div>

          {/* Pillars List */}
          <div className="flex flex-col gap-8 pt-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-px h-12 bg-cyan/20 group-hover:bg-cyan transition-colors" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-display font-medium text-text-primary uppercase tracking-wider">{pillar.label}</h3>
                  <p className="text-sm text-text-tertiary leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-20 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-sm overflow-hidden border border-white/5 shadow-2xl bg-midnight group"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Ingeniería y automatización RITEALMAR" 
              loading="lazy"
              decoding="async"
              width="800"
              height="1000"
              className="w-full aspect-[4/5] object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-cyan font-bold text-[9px] uppercase tracking-[0.3em] block mb-2">Compromiso Técnico</span>
              <p className="text-text-primary text-lg font-display italic leading-snug">
                "La ingeniería real no añade complejidad, la elimina para que el negocio pueda escalar."
              </p>
            </div>
          </motion.div>

          {/* Decorative Accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald/5 blur-[80px] rounded-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
