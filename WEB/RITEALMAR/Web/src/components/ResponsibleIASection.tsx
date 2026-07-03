import React from 'react';
import { ShieldCheck, Eye, Lock, FileSpreadsheet, Scale } from 'lucide-react';

export default function ResponsibleIASection() {
  const compliancePoints = [
    {
      title: "Garantía EU AI Act",
      desc: "Nuestros agentes y algoritmos heurísticos están clasificados bajo 'Riesgo Mínimo', cumpliendo estrictamente con las obligaciones de transparencia de la nueva normativa europea.",
      icon: Scale,
      badge: "Cumplimiento 2026"
    },
    {
      title: "Privacidad de Datos Blindada (RGPD)",
      desc: "Los datos de tus clientes y pacientes se procesan mediante modelos con infraestructura privada. La información empresarial jamás se utiliza para entrenar modelos públicos externos.",
      icon: Lock,
      badge: "Encriptado AES-256"
    },
    {
      title: "Trazabilidad Operativa y Logs",
      desc: "Cada decisión tomada por el pipeline automatizado (SMO-R) queda registrada en un historial de auditoría inmutable, permitiendo la supervisión humana total en cualquier segundo.",
      icon: Eye,
      badge: "100% Auditable"
    }
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 block mb-3">
              // SEGURIDAD Y NORMATIVA EUROPEA
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Inteligencia artificial aplicada con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                criterio, ética y cumplimiento legal.
              </span>
            </h3>
          </div>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Implementar automatizaciones sin un marco legal robusto es un riesgo crítico para tu pyme. En Ritealmar diseñamos la infraestructura tecnológica alineada con los estándares de seguridad más exigentes, garantizando tu tranquilidad operativa y jurídica.
          </p>
        </div>

        {/* Grid de Puntos de Cumplimiento */}
        <div className="grid md:grid-cols-3 gap-8">
          {compliancePoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className="bg-slate-900/10 border border-slate-800/40 p-8 rounded-2xl backdrop-blur-md relative flex flex-col justify-between group hover:border-emerald-500/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded-full border border-slate-800/60">
                      {point.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sello de Confianza Final */}
        <div className="mt-12 bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl flex items-center gap-4 max-w-2xl mx-auto justify-center">
          <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest text-center">
            Garantía de Blindaje Jurídico en Procesamiento de Datos Críticos
          </span>
        </div>

      </div>
    </section>
  );
}
