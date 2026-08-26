import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Database, ArrowRight, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function ServicesBentoGrid({ onOpenForm }: { onOpenForm: () => void }) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-32 bg-[#030712] relative overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 max-w-3xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 block mb-4">
            // SOLUCIONES TECNOLÓGICAS
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Tres áreas clave para escalar tu negocio.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Servicio 1 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Workflow size={22} />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                Automatización de Procesos
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target size={16} className="text-[#FF006E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Problema</span>
                    <p className="text-sm text-slate-300 font-medium">El equipo pierde horas copiando datos entre plataformas, generando cuellos de botella y errores.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Resultado</span>
                    <p className="text-sm text-slate-300 font-medium">Flujos de trabajo autónomos que reducen errores manuales y liberan tiempo administrativo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Ejemplo</span>
                    <p className="text-sm text-slate-300 font-medium">Crear facturas automáticamente en tu ERP cuando se cierra un trato en el CRM.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-800/40">
              <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center justify-between group-hover:text-white transition-colors w-full">
                Ver servicio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Servicio 2 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-slate-950 transition-all">
                <Cpu size={22} />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                Asistentes y agentes de IA
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target size={16} className="text-[#FF006E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Problema</span>
                    <p className="text-sm text-slate-300 font-medium">Lentitud al responder consultas repetitivas de clientes o falta de atención fuera de horario.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Resultado</span>
                    <p className="text-sm text-slate-300 font-medium">Soporte y captación 24/7 con agentes inteligentes que entienden tu negocio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Ejemplo</span>
                    <p className="text-sm text-slate-300 font-medium">Un bot en WhatsApp que responde dudas, pre-cualifica clientes y agenda reuniones en tu calendario.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-800/40">
              <a href="/servicios/agentes-ia" onClick={(e) => handleNavigation(e, '/servicios/agentes-ia')} className="text-xs font-black uppercase tracking-widest text-purple-400 flex items-center justify-between group-hover:text-white transition-colors w-full">
                Ver servicio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Servicio 3 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Database size={22} />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                Plataformas y sistemas a medida
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target size={16} className="text-[#FF006E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Problema</span>
                    <p className="text-sm text-slate-300 font-medium">Herramientas estándar que no encajan en tu operativa y licencias que encarecen al escalar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Resultado</span>
                    <p className="text-sm text-slate-300 font-medium">Software en propiedad, diseñado exactamente para tus necesidades operativas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Ejemplo</span>
                    <p className="text-sm text-slate-300 font-medium">Un portal web corporativo conectado a un CRM a medida para gestionar clientes y facturación.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-800/40">
              <a href="/servicios/crm-a-medida" onClick={(e) => handleNavigation(e, '/servicios/crm-a-medida')} className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center justify-between group-hover:text-white transition-colors w-full">
                Ver servicio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
