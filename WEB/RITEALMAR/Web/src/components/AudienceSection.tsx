import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudienceSection = () => {
  const profiles = [
    'Empresas con procesos manuales',
    'Pymes en fase de crecimiento',
    'Equipos operativos saturados',
    'Negocios que buscan automatizar'
  ];

  return (
    <section className="section-padding bg-midnight">
      <div className="grid-precision">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 bg-surface border border-white/5 p-12 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-8 tracking-tight">
            Para quién es RITEALMAR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {profiles.map((profile, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 py-2"
              >
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span className="text-[15px] font-medium text-text-secondary">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
