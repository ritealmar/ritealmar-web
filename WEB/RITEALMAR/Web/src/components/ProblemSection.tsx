import React from 'react';
import { motion } from 'motion/react';
import { Clock, MessageSquare, Hand } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: "Ineficiencia Operativa",
      desc: "Procesos manuales que frenan el crecimiento y aumentan los costes innecesariamente.",
      icon: Clock,
      color: "from-purple-500/10 to-[#AF5AE1]/10",
      accent: "text-[#AF5AE1]"
    },
    {
      title: "Respuesta Lenta",
      desc: "La falta de inmediatez en el servicio al cliente se traduce directamente en ventas perdidas.",
      icon: MessageSquare,
      color: "from-[#AF5AE1]/10 to-blue-500/10",
      accent: "text-[#AF5AE1]"
    },
    {
      title: "Falta de Datos",
      desc: "Tomar decisiones sin analítica real es navegar a ciegas en un mercado competitivo.",
      icon: Hand,
      color: "from-blue-500/10 to-purple-500/10",
      accent: "text-blue-400"
    }
  ];

  return (
    <section className="section-spacing bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AF5AE1]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#AF5AE1] uppercase mb-4 block">El Desafío</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
            Identifica tus puntos críticos
          </h2>
          <p className="text-lg text-gray-400 max-w-[700px] mx-auto">
            Muchas empresas operan bajo modelos obsoletos que limitan su potencial. Nosotros desbloqueamos tu crecimiento con IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, i) => {
            const problemAnims = [
              { initial: { opacity: 0, scale: 0.8, rotate: -5 }, whileHover: { scale: 1.05, rotate: 2, y: -10 } },
              { initial: { opacity: 0, y: 100 }, whileHover: { scale: 1.1, z: 50, y: -20 } },
              { initial: { opacity: 0, scale: 0.8, rotate: 5 }, whileHover: { scale: 1.05, rotate: -2, y: -10 } },
            ];
            const pAnim = problemAnims[i % problemAnims.length];

            return (
              <motion.div
                key={i}
                initial={pAnim.initial}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                whileHover={pAnim.whileHover}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
                className={`relative group bg-gradient-to-br ${prob.color} border-2 border-white/5 rounded-[40px] p-10 hover:border-[#AF5AE1] transition-all duration-500 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#AF5AE1] to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                
                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-white/5 ${prob.accent} flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#AF5AE1] group-hover:text-white transition-all duration-500 shadow-2xl`}>
                  <prob.icon size={30} />
                </div>
                <h3 className="relative z-10 text-2xl font-black text-white mb-4 uppercase tracking-tighter">{prob.title}</h3>
                <p className="relative z-10 text-gray-300 leading-relaxed font-light">{prob.desc}</p>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#AF5AE1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
