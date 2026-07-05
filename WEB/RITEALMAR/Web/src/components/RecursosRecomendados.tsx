import React from 'react';
import { ArrowRight, BookOpen, Presentation } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecursosRecomendadosProps {
  type?: 'clinicas' | 'inmobiliarias' | 'ecommerce' | 'constructoras' | 'general';
}

export default function RecursosRecomendados({ type = 'general' }: RecursosRecomendadosProps) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const data = {
    clinicas: {
      blog1: { title: "Automatización de citas con IA", desc: "Elimina ausencias y libera recepción.", link: "/blog/automatizacion-citas-clinicas-ia" },
      blog2: { title: "IA para captación de pacientes", desc: "Convierte leads automáticamente 24/7.", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
      caso: { title: "Clínica: Reducción 70% llamadas", desc: "Asistente IA para reservas de WhatsApp.", link: "/casos-de-exito/clinica-reduccion-llamadas-ia" }
    },
    inmobiliarias: {
      blog1: { title: "IA para Inmobiliarias", desc: "Captación automática en portales.", link: "/blog/ia-inmobiliarias-captacion-ventas" },
      blog2: { title: "Automatizar WhatsApp Inmobiliario", desc: "Escala las comunicaciones de tu agencia.", link: "/blog/automatizar-whatsapp-pyme" },
      caso: { title: "Inmobiliaria: +275% Conversión", desc: "Respuesta en <1min desde Idealista.", link: "/casos-de-exito/inmobiliaria-captacion-ia" }
    },
    ecommerce: {
      blog1: { title: "Recuperación de carritos con IA", desc: "Aumenta facturación sin tocar publicidad.", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
      blog2: { title: "Automatizar WhatsApp B2B/B2C", desc: "Guía completa para conectar APIs.", link: "/blog/automatizar-whatsapp-pyme" },
      caso: { title: "Ecommerce: +42% Facturación", desc: "Recuperación de carritos en WhatsApp.", link: "/casos-de-exito/ecommerce-recuperacion-carritos-ia" }
    },
    general: {
      blog1: { title: "Cómo automatizar WhatsApp Business", desc: "Guía completa sobre el canal B2B.", link: "/blog/automatizar-whatsapp-pyme" },
      blog2: { title: "Automatizar captación de clientes", desc: "Cualifica leads automáticamente.", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
      caso: { title: "Captación Inmobiliaria IA", desc: "Filtrado automático de leads 24/7.", link: "/casos-de-exito/inmobiliaria-captacion-ia" }
    },
    constructoras: {
      blog1: { title: "Inteligencia Artificial para Inmobiliarias", desc: "Optimiza la captación y venta de inmuebles.", link: "/blog/ia-inmobiliarias-captacion-ventas" },
      blog2: { title: "Automatizar captación B2B", desc: "Sistemas autónomos de cualificación.", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
      caso: { title: "Facade AI Pro", desc: "Generación automática de presupuestos con Visión Artificial.", link: "/proyectos/facade-ai-pro" }
    }
  };

  const content = data[type];

  return (
    <section className="py-20 px-6 bg-[#0F172A] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Recursos Recomendados</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Continúa explorando casos reales y contenido técnico para maximizar la automatización en tu negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Blog 1 */}
          <motion.a 
            href={content.blog1.link}
            onClick={(e) => handleNavigation(e, content.blog1.link)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D4FF] mb-4 uppercase tracking-wider">
                <BookOpen size={14} /> Artículo Blog
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                {content.blog1.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                {content.blog1.desc}
              </p>
              <div className="flex items-center text-[#00D4FF] font-bold text-sm mt-auto">
                Leer Artículo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Blog 2 */}
          <motion.a 
            href={content.blog2.link}
            onClick={(e) => handleNavigation(e, content.blog2.link)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#FF006E]/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF006E] mb-4 uppercase tracking-wider">
                <BookOpen size={14} /> Artículo Blog
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors line-clamp-2">
                {content.blog2.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                {content.blog2.desc}
              </p>
              <div className="flex items-center text-[#FF006E] font-bold text-sm mt-auto">
                Leer Artículo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Caso de Éxito */}
          <motion.a 
            href={content.caso.link}
            onClick={(e) => handleNavigation(e, content.caso.link)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#1a0a2e] to-[#0A1628] rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group block relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">
                <Presentation size={14} /> Caso de Éxito
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                {content.caso.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                {content.caso.desc}
              </p>
              <div className="flex items-center text-purple-400 font-bold text-sm mt-auto">
                Ver Resultados <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
