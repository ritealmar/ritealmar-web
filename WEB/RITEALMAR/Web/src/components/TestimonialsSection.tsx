import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, ArrowRight, Info } from 'lucide-react';

export default function TestimonialsSection() {
  const cards = [
    {
      icon: Zap,
      title: "Automatización de captación",
      desc: "Sistemas preparados para recibir, clasificar y priorizar leads desde formularios, WhatsApp o campañas.",
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/20"
    },
    {
      icon: Target,
      title: "Web orientada a conversión",
      desc: "Diseño, estructura y llamadas a la acción pensadas para transformar visitas en oportunidades comerciales.",
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20"
    },
    {
      icon: ShieldCheck,
      title: "IA aplicada a procesos reales",
      desc: "Agentes, chatbots y automatizaciones conectadas con herramientas de trabajo del día a día.",
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/20"
    }
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden border-t border-white/5">
      {/* Luces de Fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Confianza, resultados y tecnología aplicada
          </motion.h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Creamos soluciones digitales para empresas que necesitan captar mejor, automatizar procesos y profesionalizar su presencia online.
          </p>
        </div>

        {/* Tarjetas de Resultado/Proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#030712]/50 backdrop-blur-xl border border-white/10 hover:border-white/20 p-10 rounded-[2rem] transition-all group relative overflow-hidden flex flex-col items-start"
              >
                {/* Glow de la tarjeta */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 blur-[50px] group-hover:opacity-40 transition-opacity rounded-full`}></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} p-[1px] mb-8 shadow-lg ${card.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-[#030712] rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Nota Discreta */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/5 text-sm font-medium text-slate-400">
            <Info size={14} className="text-slate-400" />
            Próximamente incorporaremos testimonios y casos detallados de clientes.
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-105 transition-all group"
          >
            Quiero ver qué se puede automatizar en mi empresa <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
