import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import JsonLd from './JsonLd';

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
    },
    {
      q: "¿La IA cumple con la normativa de protección de datos (RGPD)?",
      a: "Sí. Todas nuestras implementaciones están diseñadas bajo los más estrictos estándares de privacidad europeos. Los datos de tus clientes no se utilizan para entrenar modelos públicos y toda la información sensible se cifra."
    },
    {
      q: "¿Puedo ver los resultados antes de comprometerme?",
      a: "Por supuesto. Ofrecemos pruebas de concepto (Proof of Concept) rápidas donde desplegamos un agente básico en un entorno controlado para que veas exactamente cómo interactúa y cuánto tiempo ahorra antes de la integración total."
    },
    {
      q: "¿Qué pasa si mis clientes prefieren hablar con una persona?",
      a: "Nuestros agentes están programados con inteligencia emocional. Si detectan frustración, o si el cliente lo solicita explícitamente, la conversación se transfiere de inmediato y sin fricción al equipo humano correspondiente con todo el contexto previo."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <section className="py-32 bg-[#0F172A] border-y border-white/5 relative">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Preguntas Frecuentes
          </motion.h2>
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
