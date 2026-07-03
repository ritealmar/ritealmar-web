import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function TailoredAISection() {
  return (
    <section className="section-spacing dark-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="label-text block mb-4 text-[#4DD9E8]">IA para tu empresa</span>
          <h2 className="mb-6">Adaptado a tus procesos reales, no IA genérica.</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            No vendemos software empaquetado. Analizamos cómo opera tu negocio hoy y construimos flujos de automatización específicos que se integran en las herramientas que ya utilizas.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 bg-[#0F62FE] rounded-full" /> Funciona con tu CRM y ERP actuales
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 bg-[#0F62FE] rounded-full" /> Resuelve cuellos de botella reales e identificados
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 bg-[#0F62FE] rounded-full" /> Infraestructura escalable diseñada para la seguridad
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0E0E1A] border border-white/10 rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F62FE] opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="flex items-center justify-center w-16 h-16 bg-[#1A1A2E] rounded-xl mb-8 border border-white/5">
            <Briefcase className="text-[#0F62FE]" size={32} />
          </div>
          <h3 className="text-2xl mb-4">Un enfoque a medida</h3>
          <p className="text-gray-400">
            Cada PYME es única. Nuestro proceso asegura que los modelos de IA que desplegamos entiendan la lógica, el vocabulario y los objetivos de tu negocio desde el primer día.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
