import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, HandCoins, ArrowRight } from 'lucide-react';

export const SavingsSection = () => {
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const costsPerHour = 25; // 25€ / hour
  const workDaysPerMonth = 22;

  const monthlySavings = hoursPerDay * costsPerHour * workDaysPerMonth;
  const yearlySavings = monthlySavings * 12;

  return (
    <section id="ahorro" className="section-padding bg-midnight relative overflow-hidden">
      <div className="grid-precision items-center gap-16">
        
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-cyan/30" />
            <span className="text-[10px] font-bold text-cyan tracking-[0.3em] uppercase">Impacto Real en tu Negocio</span>
          </motion.div>
          
          <h2 className="text-text-primary text-4xl md:text-5xl tracking-tight font-display mb-6">
            Si tu empresa pierde 2 horas al día en tareas manuales, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald underline decoration-white/10">estás tirando el 25% de tu tiempo operativo</span>
          </h2>
          
          <div className="flex flex-col gap-6 text-text-secondary text-lg opacity-60">
            <p>Gran parte de ese tiempo se puede automatizar hoy mismo con soluciones de RITEALMAR.</p>
            <p>No se trata solo de ahorrar dinero, se trata de liberar a tu equipo para tareas que generen valor real y crecimiento.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
            <div className="flex flex-col gap-2">
              <span className="text-4xl text-text-primary font-display font-medium tracking-tighter">
                {hoursPerDay * workDaysPerMonth}h
              </span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Horas Libres / Mes</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl text-emerald font-display font-medium tracking-tighter">
                {monthlySavings}€
              </span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Coste Recuperable / Mes</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="bg-surface-elevated border border-white/5 p-10 rounded-sm relative group overflow-hidden">
            {/* Visual Calculator Grid */}
            <div className="flex flex-col gap-12 relative z-10">
              <div className="flex flex-col gap-6">
                <span className="text-sm font-bold uppercase tracking-widest text-text-primary">Estimación de Ahorro para tu Pyme</span>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-text-secondary uppercase tracking-widest">Horas perdidas / día</span>
                      <span className="text-cyan text-xl font-display">{hoursPerDay}h</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="8" 
                      step="1"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 pt-6">
                    <div className="p-6 bg-cyan/5 border border-cyan/20 rounded-sm flex items-center gap-6">
                      <div className="w-12 h-12 rounded bg-cyan/10 flex items-center justify-center text-cyan">
                        <TrendingUp size={24} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Ahorro anual potencial</span>
                        <span className="text-3xl font-display font-bold text-text-primary">{yearlySavings.toLocaleString()}€</span>
                      </div>
                    </div>
                    <p className="text-xs text-text-tertiary text-center leading-relaxed">
                      *Estimación basada en costes operativos estándar. Solicita un diagnóstico para un cálculo exacto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col gap-6 items-center">
                <button className="btn-primary w-full py-6 group">
                  Solicitar diagnóstico exacto <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan/5 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
