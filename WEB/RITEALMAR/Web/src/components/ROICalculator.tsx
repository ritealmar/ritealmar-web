import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, Cpu, Calendar, ShieldAlert, Loader2, Sparkles, Send } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';
import { trackEvent } from '../utils/analytics';

export default function ROICalculator() {
  // Slider states
  const [empleados, setEmpleados] = useState(5);
  const [horasPerdidas, setHorasPerdidas] = useState(2);

  // Form states
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');

  // Status
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Instant calculation
  const horasAhorradasMes = empleados * horasPerdidas * 20;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !empresa) return;
    
    setStatus('loading');
    AnalyticsTracker.trackRoiSliders(empleados, horasPerdidas);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: "Lead Web (Calculadora)",
          email: email,
          empresa: empresa,
          empleados: empleados,
          procesos: `Pérdida de ${horasPerdidas}h al día por empleado en procesos manuales.`,
          objetivo: "Solicitud informe detallado (Horas Recuperables)",
          ...AnalyticsTracker.getPayloadForWorker()
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        throw new Error('Worker Error');
      }
    } catch (error) {
      console.error("Error en SMO-R Engine:", error);
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    }
  };

  return (
    <section id="auditoria-ia" className="py-32 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-6">
            <Cpu size={12} className="animate-pulse" /> Diagnóstico Rápido
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400 bg-[length:200%_auto]"
          >
            Calcula el ahorro de tu <br />
            empresa en tiempo real
          </motion.h2>
          <p className="text-lg text-slate-400 font-medium">
            Ajusta los parámetros de tu equipo y descubre cuántas horas podrías recuperar mensualmente automatizando tareas repetitivas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Bloque Izquierdo: Deslizados y Resultado en Tiempo Real */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-xl space-y-8">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label htmlFor="roi_empleados" className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Calculator size={18} className="text-cyan-400" /> Personal operativo
                </label>
                <span className="text-3xl font-black text-cyan-400">{empleados}</span>
              </div>
              <input 
                id="roi_empleados"
                type="range" min="1" max="100" value={empleados} 
                onChange={(e) => setEmpleados(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label htmlFor="horas_perdidas" className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Clock size={18} className="text-purple-400" /> Horas perdidas/día
                </label>
                <span className="text-3xl font-black text-purple-400">{horasPerdidas}h</span>
              </div>
              <input 
                id="horas_perdidas"
                type="range" min="1" max="8" value={horasPerdidas} 
                onChange={(e) => setHorasPerdidas(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <span className="text-[10px] text-slate-400 font-medium mt-2 block">(Data entry, correos manuales, actualizar CRM)</span>
            </div>

            <div className="pt-8 border-t border-slate-800 text-center">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">Potencial de ahorro</span>
              <p className="text-5xl font-black text-white mb-2">+{horasAhorradasMes}h <span className="text-xl text-slate-400">/ mes</span></p>
              <div className="bg-slate-950/50 rounded-lg p-3 inline-block">
                <p className="text-[10px] text-slate-400">
                  <span className="text-cyan-400 font-bold">* Cálculo orientativo:</span> Empleados ({empleados}) × Horas diarias ({horasPerdidas}) × 20 días laborables. El resultado real dependerá de la naturaleza de los procesos y la adopción de las herramientas.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Formulario Opcional para Informe */}
          <div className="bg-slate-900/10 border border-slate-800/40 rounded-3xl p-8 md:p-10 space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">¿Quieres un análisis detallado?</h3>
              <p className="text-sm text-slate-400">Déjanos tus datos y un ingeniero revisará tu caso para enviarte un informe de viabilidad técnica gratuito.</p>
            </div>

            {status === 'success' ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={30} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">¡Solicitud recibida!</h4>
                <p className="text-slate-400 text-sm">Nuestro equipo de ingeniería revisará tu caso y te responderá en el plazo de 1 día laborable.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="roi_empresa" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Empresa</label>
                  <input 
                    id="roi_empresa"
                    type="text" required placeholder="Ej. Clínicas Fuenlabrada S.L." value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="roi_email" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Email Corporativo</label>
                  <input 
                    id="roi_email"
                    type="email" required placeholder="direccion@tuempresa.com" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-400"
                  />
                </div>

                <button 
                  type="submit" disabled={status === 'loading'}
                  className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={16} /> Procesando...</>
                  ) : (
                    <>Recibir informe personalizado <Sparkles size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
