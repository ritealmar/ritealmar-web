import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';

export default function PilotPlanCard({ onOpenForm }: { onOpenForm: () => void }) {
  
  const handleSelectPilot = () => {
    // 📊 RESTRICCIÓN Y TRACKING V2: Registra la intención antes de abrir el modal
    AnalyticsTracker.trackPlanSelection('Plan Piloto Validation Sprint');
    onOpenForm();
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto relative z-10">
      {/* Efecto de brillo de fondo para capturar la atención */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-[2.5rem] blur-2xl pointer-events-none" />

      <div className="relative border-2 border-purple-500/40 bg-slate-950/80 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center overflow-hidden">
        
        {/* Esquina de disponibilidad limitada */}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 text-slate-950 text-[9px] font-black uppercase tracking-widest px-6 py-1.5 rotate-45 translate-x-5 translate-y-3 shadow-md">
          Solo 3 Cupos/Mes
        </div>

        {/* Columna Izquierda: Propuesta de Valor y Condiciones */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-pink-400">
            <AlertTriangle size={16} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest font-mono">Sprint de Validación de Riesgo Cero</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
            ¿Miedo a invertir a ciegas? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Prueba el Plan Piloto de 5 Días.
            </span>
          </h3>
          
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Selecciona el peor cuello de botella administrativo o de atención de tu empresa. Diseñamos, programamos y desplegamos un prototipo funcional (MVP) conectado a tu negocio en 120 horas. Si ves el impacto, escalamos; si no, te devolvemos el dinero. Sin preguntas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-900 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-purple-400" />
              <span>Despliegue garantizado en 5 días</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Garantía de reembolso del 100%</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Precio de Impacto y Cierre */}
        <div className="w-full bg-slate-950/60 border border-slate-900 p-8 rounded-2xl text-center flex flex-col justify-center h-full relative z-10">
          <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Precio Cerrado Sprint</p>
          
          <div className="flex items-baseline justify-center gap-1 mb-6">
            <span className="text-5xl font-black text-white tracking-tighter">650€</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pago Único</span>
          </div>

          <ul className="text-left space-y-2.5 text-xs font-medium text-slate-400 mb-8 border-y border-slate-900 py-4">
            <li className="flex items-center gap-2"><Zap size={12} className="text-purple-400" /> 1 Automatización o Bot Core funcional</li>
            <li className="flex items-center gap-2"><Zap size={12} className="text-purple-400" /> Integración con tus herramientas</li>
            <li className="flex items-center gap-2"><Zap size={12} className="text-purple-400" /> Auditoría de código e infraestructura</li>
          </ul>

          <button 
            onClick={handleSelectPilot}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-102 transition-all flex items-center justify-center gap-2 group"
          >
            Reservar Sprint Piloto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
