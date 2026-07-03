import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { MessageSquare, Clock, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function ChatbotsInteligentes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ServiceLayout 
        title="Chatbots Inteligentes"
        subtitle="Atención al cliente 24/7 que entiende, aprende y vende. Transforma cada conversación en una oportunidad de negocio."
        onOpenCalendly={() => setIsModalOpen(true)}
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es un Chatbot Inteligente?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              A diferencia de los antiguos chatbots de respuestas predefinidas que frustraban a los usuarios, nuestros Chatbots Inteligentes utilizan Procesamiento de Lenguaje Natural (NLP) avanzado. Son capaces de mantener conversaciones reales, entender el contexto y aprender de tu negocio.
            </p>
            <p className="font-medium leading-relaxed">
              En Ritealmar entrenamos a tu asistente virtual con toda la información de tu empresa para que funcione como tu mejor empleado de atención al cliente, disponible a cualquier hora y en cualquier idioma.
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
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Puede responder preguntas complejas?</h3>
              <p className="font-medium text-slate-300">Sí. A diferencia de los bots antiguos, la IA entiende contextos complejos. Si no sabe la respuesta, puede derivar la conversación automáticamente a un humano.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Habla de forma natural o suena robótico?</h3>
              <p className="font-medium text-slate-300">Suena 100% natural e indistinguible de un operador humano. Le enseñamos a usar emojis, el tono de tu marca e incluso a ser empático.</p>
            </div>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
