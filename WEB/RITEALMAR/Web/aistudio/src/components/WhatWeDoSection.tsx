import React from 'react';
import { motion } from 'motion/react';
import { Brain, Zap, Globe, Smartphone } from 'lucide-react';

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Inteligencia artificial para empresas",
      desc: "Asistentes IA, chatbots, análisis documental y soluciones adaptadas a tu negocio.",
      icon: Brain,
      color: "text-[#8B5CF6]",
      bg: "bg-[#8B5CF6]/10",
      border: "hover:border-[#8B5CF6]"
    },
    {
      title: "Automatización de procesos",
      desc: "Automatizamos tareas repetitivas para ahorrar tiempo y reducir errores.",
      icon: Zap,
      color: "text-[#22D3EE]",
      bg: "bg-[#22D3EE]/10",
      border: "hover:border-[#22D3EE]"
    },
    {
      title: "Desarrollo web profesional",
      desc: "Creamos webs modernas, rápidas y orientadas a captar clientes.",
      icon: Globe,
      color: "text-[#2563EB]",
      bg: "bg-[#2563EB]/10",
      border: "hover:border-[#2563EB]"
    },
    {
      title: "Desarrollo de apps",
      desc: "Desarrollamos aplicaciones internas, paneles y herramientas a medida.",
      icon: Smartphone,
      color: "text-white",
      bg: "bg-white/10",
      border: "hover:border-white"
    }
  ];

  return (
    <section id="que-hacemos" className="section-spacing bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto leading-tight mb-4">
            Servicios Principales
          </h2>
          <p className="text-lg md:text-xl text-[#9CA3AF] max-w-[700px] mx-auto">
            Creamos el ecosistema digital completo para que tu negocio funcione en piloto automático.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-[#111827] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#3B82F6] flex flex-col cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center`}>
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
