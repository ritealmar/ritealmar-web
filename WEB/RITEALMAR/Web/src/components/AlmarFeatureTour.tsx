import React from 'react';
import { motion } from 'framer-motion';
import { Box, MessageSquare, BarChart3, Clock } from 'lucide-react';

export const AlmarFeatureTour = () => {
  const features = [
    {
      title: "Control de stock en tiempo real",
      desc: "Monitorización constante de cada unidad en tu almacén con actualizaciones instantáneas.",
      icon: <Box size={24} />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chatbot integrado para operarios",
      desc: "Tus trabajadores pueden consultar stock o reportar incidencias mediante lenguaje natural.",
      icon: <MessageSquare size={24} />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section-padding bg-slate-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-32">
          {features.map((feature, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 flex flex-col gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-12 h-12 rounded-2xl bg-electric-cyan/10 flex items-center justify-center text-electric-cyan"
                >
                  {feature.icon}
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white"
                >
                  {feature.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-slate-400 text-lg leading-relaxed"
                >
                  {feature.desc}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">99.9%</span>
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Uptime</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">&lt; 200ms</span>
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Latencia</span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="lg:w-1/2 relative group"
              >
                <div className="absolute inset-0 bg-electric-cyan/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="rounded-3xl border border-white/10 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
