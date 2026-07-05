import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Code2, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Diagnóstico inicial",
      desc: "Analizamos tu negocio, tus procesos actuales y los puntos donde pierdes tiempo, dinero o clientes."
    },
    {
      icon: FileText,
      title: "Propuesta técnica y comercial",
      desc: "Te presentamos una solución concreta, con alcance, precio orientativo, fases y objetivos medibles."
    },
    {
      icon: Code2,
      title: "Diseño y desarrollo",
      desc: "Creamos la web, automatización, agente IA, app o sistema necesario manteniendo comunicación continua."
    },
    {
      icon: Rocket,
      title: "Implementación y medición",
      desc: "Publicamos, conectamos herramientas, medimos conversiones y revisamos mejoras tras el lanzamiento."
    },
    {
      icon: RefreshCw,
      title: "Soporte y evolución",
      desc: "Podemos seguir optimizando el sistema, añadir nuevas funciones o automatizar más áreas de tu empresa."
    }
  ];

  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF006E]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Un proceso claro, sin tecnicismos y enfocado a resultados
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora central (solo visible en tablet/desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-20"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Contenido (Tarjeta) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-[#0A1628]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 p-8 rounded-3xl shadow-2xl transition-all group w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-5xl font-black text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 font-medium leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Nodo Central */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#030712] border-4 border-[#0A1628] items-center justify-center z-10 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Espacio Vacío para balancear */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] hover:scale-105 transition-all group"
          >
            Empezar con diagnóstico gratuito <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
