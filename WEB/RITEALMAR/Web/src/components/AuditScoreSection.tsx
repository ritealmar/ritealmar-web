import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Search, Layout, MousePointerClick, CheckCircle, Target } from 'lucide-react';

export default function AuditScoreSection() {
  const scores = [
    { label: 'Diseño/UI', score: 9.0, icon: Layout, color: 'text-cyan-400', bg: 'bg-cyan-400' },
    { label: 'Conversión', score: 8.5, icon: MousePointerClick, color: 'text-pink-400', bg: 'bg-pink-400' },
    { label: 'SEO Técnico', score: 8.0, icon: Search, color: 'text-emerald-400', bg: 'bg-emerald-400' },
    { label: 'Legal/RGPD', score: 7.5, icon: Shield, color: 'text-orange-400', bg: 'bg-orange-400' },
    { label: 'Rendimiento', score: 8.5, icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400' },
    { label: 'Seguridad Docs', score: 8.0, icon: CheckCircle, color: 'text-blue-400', bg: 'bg-blue-400' },
    { label: 'Prep. Comercial', score: 8.5, icon: Target, color: 'text-purple-400', bg: 'bg-purple-400' }
  ];

  const globalScore = 8.8;

  return (
    <section className="px-6 py-20 bg-[#030712] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Valoración por áreas</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Evaluación estimada del estado actual de la plataforma tras las mejoras técnicas, comerciales y de conversión.
            </p>
            
            {/* Global Score Card */}
            <div className="inline-flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#0A1628] to-[#030712] border border-cyan-500/30 rounded-3xl shadow-[0_0_40px_rgba(0,212,255,0.1)] mb-4">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                {globalScore}/10
              </div>
              <div className="text-slate-300 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Star className="text-yellow-400" size={16} fill="currentColor" />
                Valoración Global
                <Star className="text-yellow-400" size={16} fill="currentColor" />
              </div>
            </div>

            <div className="text-xs text-slate-500 max-w-lg mx-auto p-4 opacity-80">
              Nota sobre las valoraciones: Las puntuaciones son estimaciones internas basadas en revisión técnica y estratégica. Deben validarse con métricas reales de producción, datos de conversión y resultados de campañas.
            </div>
          </motion.div>
        </div>

        {/* Score Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scores.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <item.icon className={item.color} size={20} />
                  <span className="text-slate-200 font-bold text-sm">{item.label}</span>
                </div>
                <span className={`font-black ${item.color}`}>{item.score}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#030712] h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.score / 10) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${item.bg} shadow-[0_0_10px_currentColor]`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
