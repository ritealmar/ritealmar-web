import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Clock, Cpu, BarChart3, Calendar, ShieldAlert, Loader2, Sparkles } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';

export default function ROICalculator() {
  // Estados del Formulario de Entrada
  const [empresa, setEmpresa] = useState('');
  const [empleados, setEmpleados] = useState(5);
  const [horasPerdidas, setHorasPerdidas] = useState(2);
  const [urgencia, setUrgencia] = useState('Media');
  const [email, setEmail] = useState('');

  // Estados de la Petición y Respuesta del Worker (SMO-R Engine)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [aiResult, setAiResult] = useState<any>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !empresa) return;
    
    setStatus('loading');

    // Registrar interacción final con sliders antes de enviar
    AnalyticsTracker.trackRoiSliders(empleados, horasPerdidas);

    try {
      // 🚀 CONEXIÓN ASÍNCRONA ENRIQUECIDA CON ANALYTICS
      const response = await fetch('/api/leads', { // Cambiar por tu URL de Cloudflare en producción
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: "Lead Web",
          email: email,
          empresa: empresa,
          empleados: empleados,
          urgencia: urgencia,
          procesos: `Pérdida de ${horasPerdidas}h al día por empleado en procesos manuales.`,
          objetivo: "Reducir costes y automatizar gestión operativa",
          ...AnalyticsTracker.getPayloadForWorker()
        })
      });

      const data = await response.json();

      if (data.success) {
        setAiResult(data.ai);
        setStatus('success');
      } else {
        throw new Error('Worker Error');
      }
    } catch (error) {
      console.error("Error en SMO-R Engine:", error);
      // Fallback (Simulación) para que siempre veas la UI aunque la API falle localmente
      setTimeout(() => {
        setAiResult({
          lead_id: "RITE-" + Math.floor(Math.random() * 10000),
          temperatura: urgencia === 'Alta' ? 'CALIENTE' : 'TEMPLADO',
          ahorro_horas_mes: empleados * horasPerdidas * 20,
          puntuacion_automatizacion: urgencia === 'Alta' ? 95 : 78,
          nivel_prioridad: urgencia,
          diagnostico_corto: `Se ha detectado una fuga operativa masiva en ${empresa} debido a tareas repetitivas no mecanizadas.`,
          cuellos_botella: [
            `Pérdida de ${horasPerdidas * empleados} horas diarias globales`,
            "Sobrecarga del personal en tareas manuales",
            "Gestión ineficiente de datos"
          ],
          acciones_prioritarias: [
            "Implementar RPA para data entry",
            "Desplegar asistente IA para consultas internas"
          ]
        });
        setStatus('success');
      }, 1500);
    }
  };

  return (
    <section id="auditoria-ia" className="py-32 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-6">
            <Cpu size={12} className="animate-pulse" /> Auditoría de Procesos en Tiempo Real
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase mb-6">
            Calcula el ROI de tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400">
              Infraestructura Operativa
            </span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Introduce los parámetros de tu organización. Nuestro motor heurístico analizará tus cuellos de botella y generará un informe de impacto inmediato.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.form 
              key="form-input"
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleCalculate}
              className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            >
              {/* Bloque Izquierdo: Deslizados Técnicos */}
              <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-xl space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Calculator size={18} className="text-cyan-400" /> Personal operativo en plantilla
                    </label>
                    <span className="text-3xl font-black text-cyan-400">{empleados}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" value={empleados} 
                    onChange={(e) => setEmpleados(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Clock size={18} className="text-purple-400" /> Horas diarias perdidas por empleado
                    </label>
                    <span className="text-3xl font-black text-purple-400">{horasPerdidas}h</span>
                  </div>
                  <input 
                    type="range" min="1" max="8" value={horasPerdidas} 
                    onChange={(e) => setHorasPeridas(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                  <span className="text-[10px] text-slate-500 font-medium mt-2 block">(Picar datos, correos manuales, actualizar CRM, facturas escaneadas)</span>
                </div>
              </div>

              {/* Bloque Derecho: Inputs Corporativos de Captación */}
              <div className="bg-slate-900/10 border border-slate-800/40 rounded-3xl p-8 md:p-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Nombre de la Empresa</label>
                  <input 
                    type="text" required placeholder="Ej. Clínicas Fuenlabrada S.L." value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Email Corporativo</label>
                  <input 
                    type="email" required placeholder="direccion@tuempresa.com" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Prioridad de Implementación</label>
                  <select 
                    value={urgencia} onChange={(e) => setUrgencia(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-cyan-400 transition-all"
                  >
                    <option value="Baja">Baja - Solo explorando tecnología</option>
                    <option value="Media">Media - Optimizar este trimestre</option>
                    <option value="Alta">Alta - Cuello de botella crítico inmediato</option>
                  </select>
                </div>

                <button 
                  type="submit" disabled={status === 'loading'}
                  className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={16} /> Procesando con Heurística IA...</>
                  ) : (
                    <>Ejecutar Diagnóstico Operativo <Sparkles size={16} /></>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            /* 📊 DASHBOARD DE DIAGNÓSTICO EN TIEMPO REAL TRAS RESPUESTA DEL WORKER */
            <motion.div 
              key="form-results"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-slate-900/40 border border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative"
            >
              {/* ID de Operación Único generado por worker.ts */}
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-6 mb-8">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">Informe de Eficiencia: {empresa}</h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">ID PROCESO: {aiResult?.lead_id}</p>
                </div>
                <div className={`px-4 py-2 rounded-full border text-[10px] font-black tracking-widest uppercase ${
                  aiResult?.temperatura === 'CALIENTE' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                }`}>
                  ESTADO: {aiResult?.temperatura}
                </div>
              </div>

              {/* Grid de Métricas Devueltas Directamente por tu Algoritmo */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-950/60 border border-slate-900 p-6 rounded-2xl text-center">
                  <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Ahorro Estimado</p>
                  <p className="text-4xl font-black text-cyan-400">+{aiResult?.ahorro_horas_mes}h<span className="text-xs text-slate-400 block mt-1">recuperadas al mes</span></p>
                </div>
                <div className="bg-slate-950/60 border border-slate-900 p-6 rounded-2xl text-center">
                  <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Potencial de ROI</p>
                  <p className="text-4xl font-black text-purple-400">{aiResult?.puntuacion_automatizacion}%<span className="text-xs text-slate-400 block mt-1">índice de automatización</span></p>
                </div>
                <div className="bg-slate-950/60 border border-slate-900 p-6 rounded-2xl text-center">
                  <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Nivel de Alerta</p>
                  <p className="text-4xl font-black text-amber-400 uppercase tracking-tighter">{aiResult?.nivel_prioridad}</p>
                </div>
              </div>

              {/* Cuellos de Botella e Ineficiencias Mapeadas */}
              <div className="bg-slate-950/40 border border-slate-900/60 rounded-2xl p-6 mb-10">
                <h4 className="text-xs font-mono font-black text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ShieldAlert size={14} /> Diagnóstico Técnico Detectado:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-medium mb-4">{aiResult?.diagnostico_corto}</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-900">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Puntos Críticos</span>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                      {aiResult?.cuellos_botella?.map((cb: string, i: number) => <li key={i}>{cb}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Acciones Inmediatas</span>
                    <ul className="text-xs text-cyan-400/80 space-y-1.5 list-disc pl-4 font-bold">
                      {aiResult?.acciones_prioritarias?.map((ap: string, i: number) => <li key={i}>{ap}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Agresivo hacia la Conversión (Calendly) */}
              <div className="text-center pt-4 border-t border-slate-800/60">
                <p className="text-base text-slate-200 font-medium mb-6">Hemos sincronizado este informe con nuestro departamento de ingeniería de sistemas.</p>
                <button 
                  onClick={() => window.open('https://calendly.com/ritealmar', '_blank')}
                  className="px-10 py-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all flex items-center gap-3 mx-auto"
                >
                  Agendar Sesión de Solución Gratuita (15 Min) <Calendar size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
