import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: "¿Qué puede hacer la IA en mi empresa?",
      a: "Puede automatizar tareas repetitivas (como lectura de facturas), atender a clientes 24/7 mediante chatbots, organizar tu inventario o extraer datos para tomar decisiones más rápidas."
    },
    {
      q: "¿Necesito conocimientos técnicos?",
      a: "No. Nosotros nos encargamos de todo el desarrollo, la integración y el mantenimiento. Tú solo disfrutas de los resultados en tu panel de control."
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Depende del proyecto. Empezamos con un diagnóstico gratuito para ver dónde pierdes dinero. Creamos soluciones adaptadas al bolsillo y la realidad de una PYME, con un ROI muy claro."
    },
    {
      q: "¿Cuánto tarda?",
      a: "Las automatizaciones simples (como chatbots básicos) pueden estar listas en días. Proyectos de desarrollo web o apps internas suelen llevar entre 2 y 6 semanas."
    },
    {
      q: "¿Se puede empezar poco a poco?",
      a: "Por supuesto. Nuestra recomendación siempre es empezar por el cuello de botella que más tiempo te roba, validar el ahorro y escalar a partir de ahí."
    },
    {
      q: "¿Incluye desarrollo web?",
      a: "Sí. No solo automatizamos, también diseñamos y desarrollamos webs corporativas y aplicaciones a medida preparadas para integrar sistemas de IA de forma nativa."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-spacing bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="label-text block mb-4 text-[#0F62FE]">Dudas comunes</span>
          <h2 className="text-[#0A0F24]">Preguntas Frecuentes</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-[#0F62FE]/30 transition-colors"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 px-6 md:px-8 flex justify-between items-center text-left"
              >
                <span className="text-lg font-bold text-[#0A0F24] pr-8">{faq.q}</span>
                <span className="shrink-0 text-[#0F62FE] bg-[#0F62FE]/10 w-8 h-8 flex items-center justify-center rounded-full">
                  {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 px-6 md:px-8 text-gray-600 leading-relaxed">{faq.a}</p>
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
