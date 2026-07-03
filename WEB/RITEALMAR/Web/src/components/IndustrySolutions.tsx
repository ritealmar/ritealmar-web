import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Building2, ShoppingCart, ArrowRight } from 'lucide-react';

export default function IndustrySolutions() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Clínicas",
      desc: "Automatiza la captación de pacientes, recordatorios de citas, seguimiento de tratamientos y respuestas frecuentes para llenar tu agenda sin saturar a tu equipo.",
      linkText: "Ver solución para clínicas",
      link: "/soluciones/clinicas"
    },
    {
      icon: Building2,
      title: "Inmobiliarias",
      desc: "Convierte más contactos en visitas, responde automáticamente a interesados, califica compradores y organiza oportunidades comerciales con IA.",
      linkText: "Ver solución para inmobiliarias",
      link: "/soluciones/inmobiliarias"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      desc: "Mejora la atención al cliente, recupera carritos abandonados, recomienda productos y automatiza soporte, pedidos y seguimiento postventa.",
      linkText: "Ver solución para e-commerce",
      link: "/soluciones/ecommerce"
    }
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative border-y border-white/5 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00D4FF]/5 to-[#FF006E]/5 blur-[120px] pointer-events-none rounded-[100%] rotate-45 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Soluciones por Industria
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cada negocio tiene retos distintos. Adaptamos la IA a tu sector para ayudarte a vender más, ahorrar tiempo y automatizar procesos clave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={i}
                onClick={() => {
                  window.history.pushState({}, '', ind.link);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer block relative p-10 glass-card"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-[#0F172A] text-[#00D4FF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF006E] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] border border-white/5">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">{ind.title}</h3>
                  <p className="font-medium text-slate-300 leading-relaxed mb-8 flex-grow">{ind.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[#FF006E] font-bold text-sm mt-auto group-hover:text-[#00D4FF] transition-colors uppercase tracking-wider">
                    {ind.linkText} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF006E]/0 via-transparent to-[#FF006E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
