import React from 'react';
import { motion } from 'motion/react';
import { Clock, MessageSquare, Hand } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: "Tareas repetitivas",
      desc: "Copiar datos, enviar emails iguales y cuadrar excel que consumen el 40% de la jornada.",
      icon: Clock
    },
    {
      title: "Atención al cliente lenta",
      desc: "Mensajes de WhatsApp sin leer, clientes esperando y ventas perdidas por no contestar a tiempo.",
      icon: MessageSquare
    },
    {
      title: "Procesos manuales",
      desc: "Presupuestos que tardan días en salir, citas desorganizadas y falta de control real.",
      icon: Hand
    }
  ];

  return (
    <section className="section-spacing bg-[#111827] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#22D3EE] uppercase mb-4 block">El Problema</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            ¿Dónde estás perdiendo tiempo en tu empresa?
          </h2>
          <p className="text-lg md:text-xl text-[#9CA3AF] max-w-[700px] mx-auto">
            La mayoría de las PYMEs están estancadas haciendo trabajo de "robot" en lugar de trabajo humano. Nosotros automatizamos todo esto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#020617] border border-gray-800 rounded-2xl p-8 hover:border-[#3B82F6] transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-6">
                <prob.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
              <p className="text-[#9CA3AF] leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
