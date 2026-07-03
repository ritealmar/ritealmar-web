import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, Headphones } from 'lucide-react';

export default function AuthoritySection() {
  const points = [
    {
      icon: Target,
      title: "Resultados medibles desde semana 1",
      desc: "No vendemos humo ni promesas a largo plazo. Ves el retorno en horas ahorradas casi de inmediato."
    },
    {
      icon: Zap,
      title: "Integración sin fricción",
      desc: "Nos conectamos a tu ERP, CRM o herramientas actuales sin que tu equipo tenga que aprender software nuevo."
    },
    {
      icon: ShieldCheck,
      title: "Sin dependencia técnica",
      desc: "Creamos sistemas para ti, no te atamos a nosotros. Tendrás el control absoluto de tu operativa."
    },
    {
      icon: Headphones,
      title: "Optimización continua incluida",
      desc: "Monitorizamos los modelos y ajustamos los flujos proactivamente para maximizar la rentabilidad."
    }
  ];

  return (
    <section id="nosotros" className="section-spacing-lg bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <span className="label-tech block mb-4">Por qué Ritealmar</span>
          <h2>Ingeniería aplicada a la rentabilidad real de tu negocio.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7B5EA7]/20 to-transparent border border-[#7B5EA7]/30 flex items-center justify-center">
                  <pt.icon className="text-[#9B7BDB]" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#F0EDE8] mb-3">{pt.title}</h3>
                <p className="text-[#9A97A8] leading-relaxed">{pt.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/5 text-center"
        >
          <span className="text-xs font-mono text-[#5A5770] uppercase tracking-widest mb-8 block">Empresas que confían en nuestros sistemas</span>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Logos placeholder - ideally replace with actual SVGs */}
            <div className="font-display font-bold text-xl">Lumina Corp</div>
            <div className="font-display font-bold text-xl">Nexus Logistics</div>
            <div className="font-display font-bold text-xl">Elevate Real Estate</div>
            <div className="font-display font-bold text-xl">NovaHealth</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
