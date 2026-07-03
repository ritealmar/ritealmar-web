import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, BookOpen, ArrowRight } from 'lucide-react';

export const LeadMagnet = () => {
  return (
    <section className="section-padding bg-mesh-violet relative">
      <div className="grid-precision">
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <div className="bg-surface border border-white/5 p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16 rounded-sm relative overflow-hidden">
            
            <div className="flex flex-col gap-8 w-full lg:w-3/5 relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-px bg-cyan/30" />
                <span className="text-[10px] font-bold text-cyan tracking-[0.3em] uppercase">Recurso Gratuito</span>
              </motion.div>
              
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl tracking-tight font-display text-text-primary leading-[1.2]">
                  Guía práctica para <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">automatizar tu empresa</span> con Inteligencia Artificial
                </h2>
                <p className="text-text-secondary text-lg opacity-60 max-w-xl">
                  Aprende a detectar tareas que roban tiempo a tu equipo y cómo implementar sistemas de IA que funcionen de verdad.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen size={20} className="text-violet" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Estrategias reales para Pymes y empresas industriales</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative z-10">
              <div className="flex flex-col gap-6 p-8 glass-subtle border border-white/5 rounded-sm shadow-2xl relative">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-bold text-text-primary uppercase tracking-widest leading-none">Acceso Instantáneo Solo con Email</span>
                  <p className="text-xs text-text-tertiary">Recibe el PDF directamente en tu bandeja de entrada.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input 
                      type="email" 
                      placeholder="Tu correo electrónico" 
                      className="w-full bg-white/5 border border-white/10 py-5 pl-12 pr-6 rounded-sm text-text-primary focus:border-violet outline-none transition-all"
                    />
                  </div>
                  <button className="btn-primary py-5 bg-violet hover:bg-violet/90 group w-full">
                    Descargar Guía Gratis <Download size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <p className="text-[9px] text-text-tertiary text-center opacity-40 uppercase tracking-[0.2em]">Cero spam. Solo valor técnico real.</p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet/10 rounded-full blur-[60px] pointer-events-none" />
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
