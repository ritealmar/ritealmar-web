import React from 'react';
import { motion } from 'motion/react';
import { Brain, Zap, Globe, Smartphone } from 'lucide-react';

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Inteligencia Artificial",
      desc: "Desplegamos agentes inteligentes que razonan y ejecutan procesos complejos, no simples bots de respuesta.",
      icon: Brain,
      color: "text-blue-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Hiper-Automatización",
      desc: "Conectamos todas tus herramientas para que el flujo de trabajo sea 100% autónomo y sin fricciones.",
      icon: Zap,
      color: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
      border: "group-hover:border-cyan-500/50"
    },
    {
      title: "Desarrollo Web de Élite",
      desc: "Páginas diseñadas para convertir visitas en clientes con una velocidad de carga y experiencia premium.",
      icon: Globe,
      color: "text-indigo-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
      border: "group-hover:border-indigo-500/50"
    },
    {
      title: "Apps de Alta Densidad",
      desc: "Sistemas internos y paneles de control robustos para gestionar toda tu operativa desde un solo lugar.",
      icon: Smartphone,
      color: "text-emerald-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      border: "group-hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="que-hacemos" className="section-spacing bg-[#020617] relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestras Capacidades</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto leading-tight mb-4">
            Construimos el futuro de tu operativa
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] mx-auto">
            Combinamos tecnología de vanguardia con estrategia de negocio para crear resultados que puedes medir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white/5 border border-white/10 rounded-3xl p-10 transition-all duration-500 ${card.glow} ${card.border} backdrop-blur-xl overflow-hidden`}
            >
              {/* Inner gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-black/40 ${card.color} flex items-center justify-center mb-8 shadow-lg border border-white/5`}>
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
