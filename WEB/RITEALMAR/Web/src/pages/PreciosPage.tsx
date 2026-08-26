import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, HelpCircle, ArrowRight, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

interface PreciosPageProps {
  onOpenForm: () => void;
}

export default function PreciosPage({ onOpenForm }: PreciosPageProps) {
  const planes = [
    {
      name: "Web profesional orientada a ventas",
      price: "Desde 690€",
      features: [
        "Diseño responsive",
        "Textos orientados a conversión",
        "Formulario de contacto",
        "SEO básico",
        "Analítica instalada",
        "Publicación en dominio"
      ],
      accent: "border-slate-800 bg-slate-900/20",
      buttonColor: "bg-white/5 border border-white/10 text-white hover:bg-white/10"
    },
    {
      name: "Automatización IA para empresas",
      price: "Desde 490€",
      subprice: "setup",
      features: [
        "Análisis del proceso",
        "Automatización de tareas repetitivas",
        "Conexión con herramientas existentes",
        "Formularios inteligentes",
        "Envío de datos a CRM/Sheets/email"
      ],
      accent: "border-cyan-500/50 bg-slate-900/60 shadow-[0_0_30px_rgba(6,182,212,0.1)]",
      buttonColor: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
      popular: true
    },
    {
      name: "Chatbot o Agente IA",
      price: "Desde 390€",
      subprice: "setup",
      features: [
        "Entrenamiento con información del negocio",
        "Integración en web",
        "Respuestas automáticas",
        "Captura de leads",
        "Escalado a contacto humano"
      ],
      accent: "border-purple-500/40 bg-slate-900/40 shadow-[0_0_30px_rgba(168,85,247,0.1)]",
      buttonColor: "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    },
    {
      name: "App, CRM o SaaS a medida",
      price: "Desde 2.500€",
      features: [
        "Análisis funcional",
        "Diseño UX/UI",
        "Desarrollo a medida",
        "Panel privado",
        "Automatizaciones",
        "Escalabilidad"
      ],
      accent: "border-slate-800 bg-slate-900/20",
      buttonColor: "bg-white/5 border border-white/10 text-white hover:bg-white/10"
    }
  ];

  const faqs = [
    {
      q: "¿Hay cuota mensual?",
      a: "Depende del proyecto. Las webs suelen ser de pago único. Las automatizaciones y agentes de IA pueden requerir un setup inicial y una pequeña cuota de mantenimiento mensual para cubrir costes de servidores y tokens de IA, pero siempre lo informamos con total transparencia antes de empezar."
    },
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Una web corporativa o un chatbot puede estar listo en 2-3 semanas. Las automatizaciones complejas y los desarrollos a medida de CRM/SaaS suelen requerir entre 1 y 3 meses, dependiendo de los requisitos técnicos."
    },
    {
      q: "¿Puedo empezar con algo pequeño?",
      a: "¡Por supuesto! De hecho, recomendamos nuestra metodología de 'Sprint Piloto'. Empezamos solucionando un cuello de botella específico de tu empresa para que veas el ROI inmediato, y luego escalamos el sistema progresivamente."
    },
    {
      q: "¿Trabajáis con empresas de toda España?",
      a: "Sí. Todo nuestro proceso está digitalizado. Nos reunimos por videollamada y mantenemos una comunicación fluida a lo largo de todo el ciclo de vida del proyecto para cualquier empresa de habla hispana."
    },
    {
      q: "¿Incluye mantenimiento?",
      a: "Ofrecemos planes de soporte y mantenimiento opcionales tras el lanzamiento. Para agentes de IA y automatizaciones, sugerimos nuestro paquete de mantenimiento para monitorizar el rendimiento y hacer ajustes basados en datos reales."
    },
    {
      q: "¿Puedo pagar por fases?",
      a: "Sí, todos nuestros proyectos se estructuran por hitos. Normalmente solicitamos un 50% al inicio para el setup y diseño, y el 50% restante contra entrega y validación del proyecto funcionando."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden relative pb-32">
      <SEO 
        title="Precios y Planes de Servicios Digitales | RITEALMAR" 
        description="Conoce nuestros precios orientativos para diseño web, desarrollo de apps, chatbots y automatización con inteligencia artificial. Soluciones escalables para empresas." 
      />
      <JsonLd data={faqSchema} />
      {/* Sistema Lumínico Dark Neon */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/10 via-[#030712] to-[#030712] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Comercial */}
        <div className="text-center mb-16 max-w-3xl mx-auto pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
              Transparencia y Retorno de Inversión
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-6 text-white">
              Soluciones tecnológicas <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                diseñadas para escalar
              </span>
            </h1>
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              Descubre nuestras áreas de especialidad. Mostramos precios base orientativos para ayudarte a tomar la mejor decisión sin perder tu tiempo.
            </p>
          </motion.div>
        </div>

        {/* Grid de Tarjetas de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
          {planes.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${plan.accent} hover:-translate-y-1 hover:border-slate-600`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-cyan-500/20">
                  Más Solicitado
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white leading-tight mb-6 min-h-[56px]">{plan.name}</h3>
                
                <div className="flex flex-col mb-8 border-b border-white/10 pb-6">
                  <span className="text-3xl font-black text-white tracking-tighter">{plan.price}</span>
                  {plan.subprice && <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">+ {plan.subprice}</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <Check size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button 
                  onClick={() => {
                    trackEvent('pricing_click', { cta_text: 'Consultar', plan_name: plan.name });
                    onOpenForm();
                  }}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${plan.buttonColor}`}
                >
                  Consultar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aviso Legal */}
        <div className="text-center mb-24">
          <p className="text-sm text-slate-500 italic flex items-center justify-center gap-2">
            <HelpCircle size={14} />
            Los precios son orientativos. Cada proyecto se presupuesta según alcance, integraciones, funcionalidades y nivel de soporte necesario.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-400">Resolvemos tus dudas principales sobre cómo trabajamos y los costes asociados.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-[#0F172A] border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  <ChevronDown 
                    className={`text-cyan-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-slate-900/40 border border-white/10 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/10 to-[#FF006E]/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">¿Preparado para transformar tu empresa?</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu reto. Diseñaremos una solución tecnológica a medida y te daremos un presupuesto cerrado sin compromiso.
            </p>
            <button 
              onClick={() => {
                trackEvent('cta_click', { cta_text: 'Solicitar presupuesto personalizado', location: 'precios_footer' });
                onOpenForm();
              }}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-10 md:py-5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-105 transition-all group w-full sm:w-auto"
            >
              Solicitar presupuesto personalizado <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
