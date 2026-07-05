import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { MessageSquare, Clock, Globe, ShieldCheck, Zap } from 'lucide-react';

import { trackEvent } from '../utils/analytics';

export default function ChatbotsInteligentes() {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title?: string; subtitle?: string; submitText?: string }>({ isOpen: false });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ritealmar.es/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://ritealmar.es/servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Chatbots Inteligentes",
        "item": "https://ritealmar.es/servicios/chatbots-inteligentes"
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceLayout 
        title="Chatbots IA Conversacionales"
        subtitle="Sustituimos los menús rígidos por asistentes que entienden el contexto, resuelven dudas complejas al instante y cierran ventas."
        onOpenCalendly={(config) => setModalConfig({ isOpen: true, ...(config || {}) })}
        seoTitle="Chatbots con IA para Empresas | Atención y Ventas 24/7"
        seoDesc="Implementa chatbots inteligentes que entienden lenguaje natural, cualifican leads y cierran ventas en automático. Mejora tu atención al cliente hoy."
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es un Chatbot Inteligente?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              A diferencia de los antiguos chatbots de respuestas predefinidas que frustraban a los usuarios, nuestros Chatbots Inteligentes utilizan Procesamiento de Lenguaje Natural (NLP) avanzado. Son capaces de mantener conversaciones reales, entender el contexto y aprender de tu negocio.
            </p>
            <p className="font-medium leading-relaxed">
              En Ritealmar entrenamos a tu asistente virtual con toda la información de tu empresa para que funcione como tu mejor empleado de atención al cliente, disponible a cualquier hora y en cualquier idioma. Esta tecnología es el corazón de nuestra <a href="/blog/automatizar-captacion-clientes-ia-pyme" onClick={() => trackEvent('internal_link', { link: 'blog-captacion' })} className="text-[#00D4FF] hover:underline">metodología de captación automatizada</a>.
            </p>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">¿Qué problemas resolvemos?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Soporte lento o fuera de horario comercial.",
                "Pérdida de clientes por no contestar rápido.",
                "Empleados saturados respondiendo siempre las mismas dudas.",
                "Leads fríos que abandonan la web sin dejar sus datos."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#FF006E]/20 p-2 rounded-full group-hover:bg-[#FF006E]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF006E]" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 px-6 bg-[#0A1628]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Beneficios Principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Clock, title: "Disponibilidad 24/7", desc: "Nunca dejes a un cliente sin respuesta, sin importar la hora." },
                { icon: Globe, title: "Multidioma", desc: "Atiende a clientes en su idioma nativo automáticamente." },
                { icon: ShieldCheck, title: "Respuestas Precisas", desc: "El bot solo responde con la información que le hemos enseñado." },
                { icon: MessageSquare, title: "Captación de Leads", desc: "Convierte conversaciones en contactos cualificados." }
              ].map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                <div key={idx} className="p-8 rounded-2xl glass-card border border-white/10 group text-center">
                  <div className="mx-auto w-16 h-16 bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors">{benefit.title}</h3>
                  <p className="font-medium text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              )})}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 px-6 max-w-3xl mx-auto bg-[#0F172A] border-y border-white/5">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Puede responder preguntas complejas?</h3>
              <p className="font-medium text-slate-300">Sí. A diferencia de los bots antiguos, la IA entiende contextos complejos. Si no sabe la respuesta, puede derivar la conversación automáticamente a un humano.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Habla de forma natural o suena robótico?</h3>
              <p className="font-medium text-slate-300">Suena 100% natural e indistinguible de un operador humano. Le enseñamos a usar emojis, el tono de tu marca e incluso a ser empático.</p>
            </div>
          </div>
        </section>

        {/* Casos de éxito relacionados */}
        <section className="py-20 px-6 bg-[#0A1628] border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ejemplos Reales de Chatbots en Acción</h2>
            <p className="font-medium text-slate-300 mb-10 text-lg">
              Mira cómo un chatbot entrenado puede aumentar reservas, resolver dudas y derivar urgencias en negocios reales.
            </p>
            <a 
              href="/casos-de-exito" 
              onClick={() => trackEvent('internal_link', { link: 'casos-de-exito' })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:bg-white/10 text-white font-bold rounded-xl transition-all"
            >
              Ver Casos de Éxito
            </a>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))} 
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        submitText={modalConfig.submitText}
      />
    </>
  );
}
