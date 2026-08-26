import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function TargetAudienceSection() {
  const idealPara = [
    "Clínicas que quieren automatizar citas y seguimiento de pacientes.",
    "Inmobiliarias que quieren responder leads al instante.",
    "E-commerce que quieren mejorar soporte, carritos y postventa.",
    "Empresas de servicios que trabajan con formularios, WhatsApp, Excel o CRM.",
    "Negocios que quieren una web profesional orientada a captar clientes.",
    "PYMEs que quieren implantar IA sin complicaciones técnicas."
  ];

  const noSomosPara = [
    "Quien busca una web barata sin estrategia.",
    "Proyectos sin objetivos claros de negocio.",
    "Empresas que no quieren medir resultados.",
    "Negocios que solo quieren diseño bonito pero no conversión.",
    "Proyectos que no valoran automatización, datos o procesos."
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Para empresas que quieren vender más y trabajar menos en tareas manuales
          </motion.h2>
          <p className="text-xl text-slate-400 font-medium">
            Nuestro objetivo es que recuperes tu tiempo y multipliques tus resultados comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Ideal para */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#030712]/60 backdrop-blur-xl border border-emerald-500/20 rounded-[2rem] p-8 md:p-12 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400 w-8 h-8" />
              Ideal para ti si...
            </h3>
            <ul className="space-y-6">
              {idealPara.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <span className="text-slate-300 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* No somos para */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#030712]/60 backdrop-blur-xl border border-rose-500/20 rounded-[2rem] p-8 md:p-12 shadow-[0_0_30px_rgba(244,63,94,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <XCircle className="text-rose-400 w-8 h-8" />
              No somos para ti si...
            </h3>
            <ul className="space-y-6">
              {noSomosPara.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-rose-500/50"></div>
                  <span className="text-slate-400 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-slate-900/40 border border-white/5 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/5 to-[#FF006E]/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">Si te identificas con alguno de estos casos, podemos ayudarte.</h3>
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-105 transition-all group"
            >
              Pedir diagnóstico <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
