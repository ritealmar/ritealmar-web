import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ComparisonSection = () => {
  const before = [
    'Tareas manuales y repetitivas diarias',
    'Dependencia de Excel, WhatsApp y correo',
    'Errores humanos y pérdida de información',
    'Falta de control real sobre los procesos',
    'Estrés por plazos y carga administrativa'
  ];

  const after = [
    'Sistemas automatizados que trabajan solos',
    'Procesos conectados y centralizados',
    'Reducción de errores y datos íntegros',
    'Control total y visibilidad en tiempo real',
    'Foco en tareas de valor y crecimiento'
  ];

  return (
    <section className="section-padding bg-mesh-violet relative overflow-hidden">
      <div className="grid-precision relative z-10">
        <div className="col-span-12 text-center mb-20">
          <h2 className="text-text-primary text-4xl md:text-5xl mb-6 tracking-tight font-display">
            La transformación <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">de tu operativa diaria</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto opacity-60">
            Dejamos atrás el caos de las tareas manuales para implementar sistemas de control absoluto.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-11 items-center gap-8 md:gap-4">
          
          {/* Situation: BEFORE */}
          <div className="md:col-span-5 aspect-square md:aspect-auto bg-surface-elevated border border-white/5 p-10 rounded-sm group hover:border-red-500/20 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-text-primary">Situación Actual</h3>
            </div>
            <ul className="flex flex-col gap-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary opacity-50 group-hover:opacity-80 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow / Transition */}
          <div className="md:col-span-1 flex justify-center py-4 md:py-0">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-tertiary">
              <ArrowRight className="rotate-90 md:rotate-0" />
            </div>
          </div>

          {/* Situation: AFTER */}
          <div className="md:col-span-5 aspect-square md:aspect-auto bg-cyan/5 border border-cyan/20 p-10 rounded-sm group hover:border-cyan/40 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-cyan">Con RITEALMAR</h3>
            </div>
            <ul className="flex flex-col gap-6">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-text-primary">
                  <CheckCircle2 size={18} className="text-emerald shrink-0 mt-1" />
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="col-span-12 mt-20 text-center">
          <p className="text-text-secondary text-sm italic opacity-50">
            "La diferencia entre una empresa que sobrevive y una que escala está en sus procesos."
          </p>
        </div>
      </div>
    </section>
  );
};
