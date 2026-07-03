import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WebDevSection() {
  const webFeatures = [
    "Webs corporativas",
    "Landing pages",
    "Webs comerciales",
    "Optimización SEO",
    "Diseño responsive"
  ];

  const appFeatures = [
    "Apps internas",
    "Paneles de gestión",
    "Automatizaciones conectadas",
    "Herramientas a medida",
    "Integraciones con IA"
  ];

  return (
    <section id="webs-apps" className="section-spacing bg-[#020617] relative overflow-hidden text-white border-y border-white/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold max-w-3xl mx-auto mb-4">
            Webs y aplicaciones que trabajan para tu negocio
          </h2>
          <p className="text-lg md:text-xl text-[#9CA3AF] max-w-[700px] mx-auto">
            Desarrollo a medida para digitalizar operaciones y escalar ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#22D3EE] mb-6">Desarrollo web</h3>
              <ul className="space-y-4">
                {webFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-[#3B82F6]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#111827] border border-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-6">Desarrollo de apps</h3>
              <ul className="space-y-4">
                {appFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-[#3B82F6]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mockup visual de dashboard */}
            <div className="bg-[#0B1026] border border-white/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <div className="bg-[#050816] px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="col-span-3 h-32 bg-gradient-to-r from-[#2563EB]/20 to-[#22D3EE]/20 rounded-lg flex items-center justify-center border border-white/5">
                  <div className="w-16 h-16 rounded-full border-4 border-[#22D3EE] border-t-transparent animate-spin"></div>
                </div>
                <div className="col-span-2 h-40 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col gap-2">
                  <div className="w-full h-4 bg-white/10 rounded"></div>
                  <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                  <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                </div>
                <div className="col-span-1 h-40 bg-[#8B5CF6]/20 rounded-lg border border-[#8B5CF6]/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
