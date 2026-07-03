import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function CaseStudySection() {
  const cases = [
    {
      sector: "Distribuidora logística, 45 empleados",
      problem: "Gestión manual de 300+ pedidos diarios, errores en albaranes y atención al cliente colapsada.",
      solution: "IA para lectura automática de pedidos, integración con ERP y asistente virtual 24/7 para seguimiento.",
      result: "−68% tiempo en gestión / +210% velocidad de respuesta a clientes"
    },
    {
      sector: "Agencia inmobiliaria, 12 agentes",
      problem: "Agentes perdiendo 4h/día en cualificar leads fríos y subir propiedades a portales.",
      solution: "Asistente IA por WhatsApp para pre-cualificar y agendar visitas automáticamente + automatización de CRM.",
      result: "+45h recuperadas por agente al mes / 3x tasa de conversión de leads"
    },
    {
      sector: "Clínica médica privada, 28 especialistas",
      problem: "Caos en citas, cancelaciones no cubiertas y facturación manual a aseguradoras.",
      solution: "Bot telefónico y WhatsApp de gestión inteligente de huecos + automatización de cobros.",
      result: "99.5% ocupación de agenda / −80% tareas administrativas en recepción"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="casos" className="section-spacing-lg bg-[#0E0E1A]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="label-tech block mb-4">Casos de éxito</span>
          <h2>Empresas que ya operan en modo autónomo</h2>
        </div>

        <div className="flex flex-col gap-6">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#C9A96E' }}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center"
              >
                <h3 className="text-xl md:text-2xl text-[#F0EDE8]">{c.sector}</h3>
                <ChevronDown 
                  className={`text-[#9A97A8] transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 md:px-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <span className="text-xs font-mono text-[#5A5770] uppercase tracking-widest mb-2 block">El Problema</span>
                        <p className="text-[#9A97A8]">{c.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#3BBFCC] uppercase tracking-widest mb-2 block">La Solución</span>
                        <p className="text-[#F0EDE8]">{c.solution}</p>
                      </div>
                      <div className="md:col-span-2 pt-6 border-t border-white/5">
                        <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-widest mb-2 block">El Resultado</span>
                        <p className="text-2xl font-display font-semibold text-[#C9A96E]">{c.result}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
