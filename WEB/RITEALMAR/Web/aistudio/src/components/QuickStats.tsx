import React from 'react';
import { Clock, ShieldAlert, Cpu, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuickStats = () => {
  const stats = [
    { title: 'Ahorro de tiempo', desc: 'Automatización de tareas repetitivas.', icon: <Clock size={18} /> },
    { title: 'Menos errores', desc: 'Validación técnica y procesos exactos.', icon: <ShieldAlert size={18} /> },
    { title: 'Más control', desc: 'Centralización de datos operativos.', icon: <Cpu size={18} /> },
    { title: 'Más eficiencia', desc: 'Optimización de recursos y equipos.', icon: <BarChart3 size={18} /> },
  ];

  return (
    <section className="py-12 bg-surface-elevated border-y border-white/5 relative z-20">
      <div className="grid-precision">
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">{stat.title}</h4>
                <p className="text-[12px] text-text-tertiary leading-tight">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
