import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, TrendingUp, Heart } from 'lucide-react';

export const ProblemSolution = () => {
  const benefits = [
    {
      title: "Adiós al desabastecimiento",
      desc: "Nuestra IA predice la demanda antes de que ocurra, asegurando que nunca te quedes sin stock crítico.",
      icon: <ShieldAlert size={28} />,
      color: "text-red-400"
    },
    {
      title: "Automatiza pedidos",
      desc: "Generación automática de órdenes de compra basadas en niveles óptimos calculados por ALMAR.",
      icon: <Zap size={28} />,
      color: "text-electric-cyan"
    },
    {
      title: "Reducción de errores del 90%",
      desc: "Elimina el factor de error humano en la entrada de datos y el conteo de materiales.",
      icon: <TrendingUp size={28} />,
      color: "text-emerald-400"
    }
  ];

  return (
    <section className="section-padding bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading-space text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-brand-cyan font-mono text-xs">// 04</span>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Strategic Value</span>
          </motion.div>
          <h2 className="text-white mb-6">No digas lo que hace, <br /><span className="text-brand-cyan italic">di lo que soluciona.</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Transformamos la gestión de inventario de un dolor de cabeza a una ventaja competitiva automática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col gap-6 group hover:translate-y-[-10px] transition-all"
            >
              <div className={`p-4 rounded-2xl bg-white/5 w-fit ${benefit.color} group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-white text-xl font-bold tracking-tight">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
