import React from 'react';
import { motion } from 'motion/react';
import { Clock, LayoutDashboard, Rocket, Cpu } from 'lucide-react';

export default function ImpactSection() {
  const metrics = [
    { 
      icon: Clock,
      title: "Ahorro de tiempo", 
      desc: "Libera horas valiosas cada semana eliminando trabajo manual." 
    },
    { 
      icon: LayoutDashboard,
      title: "Reducción de tareas manuales", 
      desc: "Minimiza errores delegando tareas repetitivas al software." 
    },
    { 
      icon: Rocket,
      title: "Mejora en productividad", 
      desc: "Equipos centrados en aportar valor y vender más." 
    },
    { 
      icon: Cpu,
      title: "Automatización de procesos", 
      desc: "Sistemas conectados que trabajan solos 24/7." 
    }
  ];

  return (
    <section className="section-spacing dark-section-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 bg-[#060913] rounded-2xl border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-[#0F62FE]/10 rounded-full flex items-center justify-center mb-6">
                <m.icon className="text-[#00E5FF]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
