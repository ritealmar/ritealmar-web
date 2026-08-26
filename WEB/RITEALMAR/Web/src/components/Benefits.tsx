import React from 'react';
import { motion } from 'motion/react';
import { Clock, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Recupera tu tiempo",
      desc: "Automatiza tareas rutinarias y recupera horas de trabajo cada semana."
    },
    {
      icon: TrendingUp,
      title: "Escala sin contratar",
      desc: "Multiplica tu capacidad operativa y atiende a más clientes sin aumentar tus costes fijos."
    },
    {
      icon: ShieldCheck,
      title: "Cero errores humanos",
      desc: "Los sistemas automatizados no se cansan ni se equivocan. Precisión absoluta 24/7."
    },
    {
      icon: Zap,
      title: "Resultados inmediatos",
      desc: "Implementamos soluciones rápidas que generan retorno de inversión desde el primer mes."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A1628]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00D4FF]/10 to-[#FF006E]/10 blur-[120px] pointer-events-none rounded-[100%] rotate-45 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            ¿Por qué elegir la automatización?
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Transforma la forma en que opera tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {benefits.map((ben, i) => {
            const Icon = ben.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center mb-6 text-[#00D4FF] group-hover:text-[#FF006E] transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">{ben.title}</h3>
                <p className="font-medium text-slate-200 leading-relaxed text-base">{ben.desc}</p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/0 via-[#00D4FF]/0 to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
