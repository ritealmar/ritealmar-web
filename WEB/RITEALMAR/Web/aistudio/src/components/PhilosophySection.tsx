import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, HeartHandshake } from 'lucide-react';

export default function PhilosophySection() {
  const columns = [
    {
      icon: Search,
      title: "Diagnóstico",
      desc: "Auditamos tu forma de trabajar actual sin compromisos para identificar exactamente dónde se pierde tiempo y dinero."
    },
    {
      icon: PenTool,
      title: "Implementación",
      desc: "Desplegamos la tecnología sin fricción, conectando la IA a las herramientas y procesos que ya usa tu equipo."
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento",
      desc: "No te dejamos solo con el software. Te formamos y optimizamos los modelos para asegurar que el ahorro es real."
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="label-text block mb-4">No vendemos IA, creamos soluciones</span>
          <h2 className="text-gray-900 leading-tight">
            La inteligencia artificial solo tiene valor cuando resuelve problemas concretos. Por eso en Ritealmar analizamos cómo trabaja tu empresa, detectamos tareas repetitivas y diseñamos soluciones prácticas que ahorran tiempo desde el primer uso.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          {columns.map((col, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#0F62FE]/10 rounded-2xl flex items-center justify-center text-[#0F62FE] mb-6">
                <col.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{col.title}</h3>
              <p className="text-gray-600 leading-relaxed">{col.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
