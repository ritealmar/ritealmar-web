import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, BarChart3, Repeat } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Reducción de costes operativos',
      desc: 'Optimizamos el uso de recursos y energía mediante algoritmos de IA de alta precisión.',
      icon: <TrendingDown size={32} strokeWidth={1} />,
    },
    {
      title: 'Automatización de tareas repetitivas',
      desc: 'Liberamos a tu equipo de procesos mecánicos para que se enfoquen en el valor estratégico.',
      icon: <Repeat size={32} strokeWidth={1} />,
    },
    {
      title: 'Mejora de la eficiencia',
      desc: 'Aumentamos el throughput de producción y reducimos los cuellos de botella operativos.',
      icon: <Zap size={32} strokeWidth={1} />,
    },
    {
      title: 'Toma de decisiones basada en datos',
      desc: 'Transformamos la incertidumbre en predicciones exactas mediante análisis masivo de datos.',
      icon: <BarChart3 size={32} strokeWidth={1} />,
    },
  ];

  return (
    <section className="py-32 bg-[#080809] border-y border-gold/5 relative overflow-hidden">
      <div className="grid-precision">
        
        <div className="col-span-12 mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-[12px] font-bold text-gold tracking-[0.25em] uppercase">Impacto Tangible</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-text-primary tracking-tight">Beneficios <span className="text-gold">Directos.</span></h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="text-gold opacity-80 mb-2">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-medium text-text-primary tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-text-tertiary text-[15px] leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
