import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Building, ArrowRight } from 'lucide-react';

export default function WhoIsBehind() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Quién está detrás de RITEALMAR
          </h2>
          <p className="text-lg text-slate-400">
            Personas reales resolviendo problemas corporativos reales. Trato directo y tecnología enfocada en tu negocio, no al revés.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center bg-[#0A1628] border border-white/5 rounded-3xl p-8 md:p-12">
          {/* Foto - Placeholder */}
          <div className="w-full md:w-1/3 aspect-[4/5] bg-[#0F172A] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
            <User size={64} className="text-slate-600 mb-4 group-hover:text-cyan-500 transition-colors" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center px-4">
              [PENDIENTE: FOTO REAL]
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
          </div>

          {/* Biografía y Datos - Placeholders */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                [PENDIENTE: NOMBRE REAL]
              </h3>
              <p className="text-cyan-400 font-medium uppercase tracking-wider text-sm mb-4">
                Fundador / Dirección de Proyectos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-sm font-medium">[PENDIENTE: UBICACIÓN]</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Building size={16} className="text-cyan-400" />
                <span className="text-sm font-medium">Trato 100% Directo</span>
              </div>
            </div>

            <div className="prose prose-invert prose-slate">
              <p className="text-slate-400 leading-relaxed text-lg">
                [PENDIENTE: HISTORIA BREVE]
              </p>
              <p className="text-slate-400 leading-relaxed">
                Nuestra filosofía es clara: la tecnología es solo un medio para alcanzar un fin. Entendemos los problemas del día a día de las PYMES porque hemos estado ahí. No buscamos implementar la última moda en inteligencia artificial, sino identificar cuellos de botella y aplicar soluciones técnicas que ahorren tiempo y aumenten la rentabilidad de tu empresa desde el primer momento.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-sm text-slate-500 italic">
                Cero intermediarios. Cero jerga técnica innecesaria.
              </p>
              <a 
                href="/sobre-ritealmar" 
                className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
              >
                Nuestra Filosofía <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
