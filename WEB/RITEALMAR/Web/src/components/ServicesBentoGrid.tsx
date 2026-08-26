import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Database, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServicesBentoGrid({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section id="servicios" className="py-32 bg-[#030712] relative overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera con Jerarquía Premium */}
        <div className="mb-20 max-w-3xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 block mb-4">
            // ARQUITECTURA DE SISTEMAS
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Infraestructura digital <br />
            diseñada para escalar.
          </motion.h2>
        </div>

        {/* Estructura Bento Grid Avanzada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bloque Grande 1: Automatización e IA (Ocupa 2 columnas en desktop) */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Workflow size={22} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                Automatización de Procesos y Tareas
              </h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xl">
                Conectamos tu web, tu CRM y tu facturación para que todo fluya sin intervención manual. Eliminamos el "copiar y pegar" de datos, reduciendo los errores humanos a cero.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-800/40 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">ROI: -70% Tiempo administrativo</span>
              <button onClick={onOpenForm} className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                Ver Sistemas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Bloque Pequeño 1: Chatbots Inteligentes */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-slate-950 transition-all">
                <Cpu size={22} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                Asistentes 24/7 (Chatbots)
              </h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                Asistentes de IA que atienden consultas, organizan información y agendan citas automáticamente en tu calendario las 24 horas.
              </p>
            </div>

            <div className="mt-8 text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-2 cursor-pointer" onClick={onOpenForm}>
              Desplegar Agente <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Bloque Pequeño 2: Gestión Documental */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-slate-950 transition-all">
                <Layers size={22} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                Gestión Documental
              </h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                Lectura inteligente y extracción de datos automatizada de facturas, PDFs y contratos mediante visión artificial conectada directo a tu ERP.
              </p>
            </div>

            <div className="mt-8 text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-2 cursor-pointer" onClick={onOpenForm}>
              Escanear Proceso <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Bloque Grande 2: Software y CRM a Medida (Ocupa 2 columnas) */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-slate-900/20 border border-slate-800/60 rounded-[2rem] p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Database size={22} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                Plataformas a medida para tu empresa
              </h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xl">
                Plataformas a medida para gestionar todos los datos de tu empresa en un solo lugar y tomar mejores decisiones, sin dependencias técnicas de terceros ni licencias abusivas.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-wider">
                <ShieldCheck size={14} className="text-emerald-400" /> Propiedad 100% de tu código
              </div>
              <button onClick={onOpenForm} className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2 group-hover:text-white transition-colors">
                Cotizar Software <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
