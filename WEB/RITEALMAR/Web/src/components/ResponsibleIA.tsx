import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Eye, UserCheck, Lock } from 'lucide-react';

export const ResponsibleIA = () => {
  const principles = [
    { label: 'Aviso claro de uso de IA', icon: <Eye size={16} /> },
    { label: 'Supervisión humana total', icon: <UserCheck size={16} /> },
    { label: 'Privacidad & Seguridad de Datos', icon: <Lock size={16} /> },
    { label: 'Límites & Validación técnica', icon: <Scale size={16} /> }
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] border-y border-gold/10 overflow-hidden">
      <div className="grid-precision items-center">
        
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-emerald/30" />
            <span className="text-[11px] font-bold text-emerald tracking-widest uppercase">Cumplimiento & Ética</span>
          </div>
          <h2 className="text-3xl font-display font-medium text-text-primary tracking-tight leading-tight">
            IA aplicada con criterio y <span className="text-emerald">transparencia legal.</span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed opacity-70">
            Diseñamos soluciones alineadas con los requisitos de transparencia y operación responsable de la normativa europea (EU AI Act). Tu tranquilidad legal es nuestra prioridad técnica.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-wrap gap-4 mt-12 lg:mt-0 lg:justify-end">
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-4 bg-emerald/5 border border-emerald/10 rounded-sm flex items-center gap-3"
            >
              <div className="text-emerald">{p.icon}</div>
              <span className="text-[13px] font-medium text-text-primary">{p.label}</span>
            </motion.div>
          ))}
          
          <div className="w-full h-px bg-emerald/5 mt-4" />
          
          <div className="flex items-center gap-4 py-4 px-6 bg-transparent border border-white/5 rounded-sm lg:mr-0 mr-auto">
            <ShieldCheck size={20} className="text-emerald" />
            <span className="text-[11px] text-text-muted font-bold uppercase tracking-widest leading-none">Protección Activa de Procesos Críticos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
