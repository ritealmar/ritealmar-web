import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';
import PilotPlanCard from '../components/PilotPlanCard';

export default function PreciosPage({ onOpenForm }: { onOpenForm: () => void }) {
  const planes = [
    {
      name: "Plan Active",
      price: "1.490€",
      desc: "Ideal para pymes, autónomos y clínicas locales que necesitan presencia premium y captación automatizada básica.",
      features: [
        "Sitio Web Profesional o Landing de Alta Conversión",
        "Diseño Premium Exclusivo 'Dark Neon' a medida",
        "Estructura 100% Optimizada para SEO Local",
        "Formularios de Captación Inteligentes conectados a Email",
        "Integración básica con WhatsApp Business",
        "Soporte técnico inicial (30 días)"
      ],
      notIncluded: "No incluye agentes autónomos conversacionales ni lectura de PDFs.",
      cta: "Empezar Digitalización",
      popular: false,
      accent: "border-slate-800 bg-slate-900/20"
    },
    {
      name: "Plan Automate",
      price: "3.250€",
      desc: "El plan definitivo para clínicas e inmobiliarias. Automatiza tu operativa, tu agenda y tu atención al cliente.",
      features: [
        "Todo lo incluido en el Plan Active",
        "1 Agente de IA Conversacional (WhatsApp o Web) activo 24/7",
        "Entrenamiento de la IA con tus documentos y políticas",
        "Sistema de Automatización de Citas sincronizado con tu Calendario",
        "Pipeline de Datos Edge (Conexión automática de formularios a Google Sheets/CRM)",
        "Dashboard básico de rendimiento y Lead Scoring",
        "Garantía de Optimización de Procesos (ROI desde mes 1)"
      ],
      notIncluded: "No incluye integraciones con ERPs propietarios cerrados.",
      cta: "Automatizar Mi Negocio",
      popular: true,
      accent: "border-cyan-500/50 bg-slate-900/60 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
    },
    {
      name: "Plan Enterprise",
      price: "A medida",
      desc: "Para organizaciones con alto volumen de operaciones que requieren software a medida e infraestructura dedicada.",
      features: [
        "Desarrollo Full-Stack de CRMs o Plataformas SaaS personalizadas",
        "Múltiples Digital Workers y Agentes de IA interconectados",
        "Sistemas de Gestión Documental Inteligente (Lectura automática de facturas y PDFs)",
        "Integraciones complejas vía API / Webhooks con ERPs propietarios",
        "Arquitectura Cloud Dedicada e Infraestructura Escalable",
        "Cumplimiento garantizado EU AI Act y RGPD Avanzado",
        "Consultoría Estratégica Trimestral incluida"
      ],
      notIncluded: "Sujeto a toma de requisitos técnicos específicos.",
      cta: "Solicitar Consultoría Técnica",
      popular: false,
      accent: "border-purple-500/30 bg-slate-900/20"
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Cabecera Comercial */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-6">
          Tarifas Transparentes orientadas al ROI
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase mb-6">
          Inversión clara. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Resultados medibles.
          </span>
        </h1>
        <p className="text-lg text-slate-400 font-medium">
          Sin cuotas ocultas ni sorpresas. Elige el motor de crecimiento que necesita tu organización hoy mismo.
        </p>
      </div>

      {/* Grid de Tarjetas de Precios */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
        {planes.map((plan, i) => (
          <div 
            key={i} 
            className={`border rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${plan.accent}`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/20">
                <Sparkles size={10} /> El más recomendado
              </span>
            )}

            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{plan.name}</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 min-h-[48px]">{plan.desc}</p>
              
              <div className="flex items-baseline gap-2 mb-8 border-b border-slate-800/60 pb-6">
                <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                {plan.price !== "A medida" && <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">pago único</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                    <Check size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6 border-t border-slate-800/40 pt-4 italic">
                * {plan.notIncluded}
              </p>
              <button 
                onClick={() => {
                  AnalyticsTracker.trackPlanSelection(plan.name);
                  onOpenForm();
                }}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {plan.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bloque Gancho: Proof of Concept (Sprint Piloto) */}
      <PilotPlanCard onOpenForm={onOpenForm} />

      {/* Bloque Informativo sobre el Mantenimiento Mensual */}
      <div className="mt-20 bg-slate-900/20 border border-slate-800/80 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
            <Shield size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-tight">Soporte, Optimización y Mantenimiento Evolutivo</h4>
            <p className="text-sm text-slate-400 font-medium mt-1">Garantiza que tus sistemas estén operativos, tus prompts actualizados y tus integraciones blindadas desde 99€/mes.</p>
          </div>
        </div>
        <div className="w-full md:w-auto text-center md:text-right shrink-0">
          <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block mb-1">Mantenimiento Cloud</span>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Uptime e Infraestructura Asegurada</span>
        </div>
      </div>

    </div>
  );
}
