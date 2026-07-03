import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Clock, Zap } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      cat: "Web corporativa",
      title: "Portal B2B de servicios",
      result: "+40% conversiones",
      resultDesc: "Captación de leads automatizada",
      icon: TrendingUp,
      bg: "bg-gradient-to-br from-[#111827] to-[#3B82F6]/20"
    },
    {
      cat: "Chatbot IA",
      title: "Asistente E-commerce",
      result: "–70% tiempo",
      resultDesc: "En soporte y devoluciones",
      icon: Clock,
      bg: "bg-gradient-to-br from-[#111827] to-[#22D3EE]/20"
    },
    {
      cat: "Automatización",
      title: "Clasificador de Emails",
      result: "0 tareas manuales",
      resultDesc: "Gestión de bandeja a cero",
      icon: Zap,
      bg: "bg-gradient-to-br from-[#111827] to-purple-500/20"
    }
  ];

  return (
    <section id="portafolio" className="section-spacing bg-[#EFF6FF] border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#3B82F6] uppercase mb-4 block">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#020617] mb-4">
            Proyectos y Resultados
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-[700px] mx-auto">
            Ejemplos de cómo transformamos horas perdidas en facturación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-[#F8FAFC] hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Visual mockup */}
              <div className={`h-40 ${proj.bg.replace('#111827', 'white')} relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-200`}>
                <div className="w-full h-full bg-white/80 backdrop-blur-md rounded-t-xl border-t border-x border-gray-200 shadow-xl translate-y-6 group-hover:translate-y-2 transition-transform duration-500 flex flex-col justify-center items-center">
                   <proj.icon size={32} className="text-[#3B82F6] mb-2" />
                   <span className="text-[#020617] font-bold text-xl">{proj.result}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold text-[#3B82F6] uppercase mb-2 block">{proj.cat}</span>
                <h3 className="text-xl font-bold text-[#020617] mb-3">{proj.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">{proj.resultDesc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-600 group-hover:text-[#3B82F6] transition-colors">
                  Ver caso completo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
