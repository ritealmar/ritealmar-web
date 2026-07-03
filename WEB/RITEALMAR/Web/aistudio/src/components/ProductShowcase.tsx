import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Smartphone, MessageCircle, BarChart2 } from 'lucide-react';

export const ProductShowcase = () => {
  const cases = [
    {
      title: 'Automatización de Facturación',
      desc: 'Eliminación del trabajo manual en el procesamiento de +1000 facturas mensuales.',
      impact: 'Ahorro de 12h/semana',
      icon: <FileText size={20} />
    },
    {
      title: 'App Interna de Gestión',
      desc: 'Control total de operarios y partes de trabajo desde una interfaz móvil a medida.',
      impact: '0% pérdida de datos',
      icon: <Smartphone size={20} />
    },
    {
      title: 'Chatbot IA Especializado',
      desc: 'Atención automática de consultas técnicas y agendamiento de citas sin intervención.',
      impact: 'Atención 24/7',
      icon: <MessageCircle size={20} />
    }
  ];

  return (
    <section id="casos" className="section-padding bg-slate-900 border-b border-white/5">
      <div className="grid-precision">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-2 tracking-tight">
            Casos de éxito
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        {/* Compact Case Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-white/5 p-8 rounded-lg flex flex-col gap-5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[14px] text-text-tertiary leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                <BarChart2 size={14} className="text-secondary" />
                <span className="text-[12px] font-bold text-secondary uppercase tracking-widest">
                  {item.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
