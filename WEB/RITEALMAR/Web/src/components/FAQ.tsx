import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Es la inteligencia artificial adecuada para mi PYME?",
      a: "Absolutamente. La IA no es exclusiva de las grandes corporaciones. Adaptamos soluciones a tu escala y presupuesto, empezando por los procesos que generan un retorno de inversión inmediato para tu tamaño de negocio."
    },
    {
      q: "¿Necesito conocimientos técnicos para usar esto?",
      a: "No. En RITEALMAR nos encargamos de todo el desarrollo técnico y la integración. Entregamos soluciones 'llave en mano' que son tan fáciles de usar como enviar un mensaje por WhatsApp."
    },
    {
      q: "¿Tengo que cambiar los programas que ya uso?",
      a: "En la mayoría de casos, no. Integramos la IA directamente en tus herramientas actuales (Excel, Google Workspace, tu CRM, WhatsApp, etc.) a través de automatizaciones invisibles en segundo plano."
    },
    {
      q: "¿Cuánto tiempo se tarda en implementar?",
      a: "Depende de la complejidad. Un chatbot básico o una automatización de correos puede estar funcionando en 3 a 5 días. Desarrollos a medida más complejos pueden llevar de 2 a 4 semanas."
    },
    {
      q: "¿Cuánto cuesta automatizar mi empresa?",
      a: "Mucho menos que contratar a un empleado extra para hacer tareas mecánicas. Realizamos una auditoría gratuita donde analizamos tus necesidades y te damos un presupuesto cerrado basado en el ahorro garantizado que vas a obtener."
    }
  ];

  return (
    <section className="py-32 bg-[#0F172A] border-y border-white/5 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Preguntas Frecuentes</h2>
          <p className="text-slate-400">Resolvemos tus principales dudas sobre la implementación de IA.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center bg-transparent border-none focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-[#00D4FF]' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#00D4FF]' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 font-medium text-slate-200 leading-relaxed">
                      {faq.a}
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
