import React from 'react';
import { ArrowRight, FileText, Cpu, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TambienTePuedeInteresar() {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section className="py-20 px-6 bg-[#0A1628] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">También te puede interesar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1 */}
          <motion.a 
            href="/chatbots-ia"
            onClick={(e) => handleNavigation(e, '/chatbots-ia')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D4FF] mb-4 uppercase tracking-wider">
                <Cpu size={14} /> Servicio IA
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                Chatbots Inteligentes B2B
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                Convierte más visitantes en leads cualificados 24/7 integrando asistentes virtuales con IA en tu web o WhatsApp.
              </p>
              <div className="flex items-center text-[#00D4FF] font-bold text-sm mt-auto">
                Ver Servicio <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Tarjeta 2 */}
          <motion.a 
            href="/blog/ia-inmobiliarias-captacion-ventas"
            onClick={(e) => handleNavigation(e, '/blog/ia-inmobiliarias-captacion-ventas')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0F172A] rounded-2xl p-6 border border-white/5 hover:border-[#FF006E]/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF006E] mb-4 uppercase tracking-wider">
                <FileText size={14} /> Artículo Técnico
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors">
                IA para Inmobiliarias
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                Cómo captar más propietarios y automatizar la respuesta a compradores en portales inmobiliarios.
              </p>
              <div className="flex items-center text-[#FF006E] font-bold text-sm mt-auto">
                Leer Artículo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Tarjeta 3 */}
          <motion.a 
            href="/diseno-web"
            onClick={(e) => handleNavigation(e, '/diseno-web')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0F172A] rounded-2xl p-6 border border-white/5 hover:border-purple-500/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">
                <LayoutTemplate size={14} /> Diseño Web
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Webs de Alto Rendimiento
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                Desarrollamos páginas corporativas optimizadas para el rendimiento y la conversión de clientes B2B.
              </p>
              <div className="flex items-center text-purple-400 font-bold text-sm mt-auto">
                Ver Servicio <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
