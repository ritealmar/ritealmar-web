import React, { useState, useEffect } from 'react';
import ServiceLayout from './ServiceLayout';
import { ModalController } from './ModalController';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';

export interface SeoLandingProps {
  seoTitle: string;
  seoDesc: string;
  h1: string;
  subtitle: string;
  introParagraphs: string[];
  benefitsTitle?: string;
  benefits: { title: string; desc: string }[];
  includedTitle?: string;
  included: string[];
  faqTitle?: string;
  faq: { q: string; a: string }[];
  ctaText: string;
  whatsappNumber?: string;
}

export default function SeoLandingLayout({ data }: { data: SeoLandingProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = data.seoTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.seoDesc);

    return () => {
      document.title = "Ritealmar | IA para PYMEs — Inteligencia Artificial, Agentes y Automatización";
    };
  }, [data]);

  const handleWhatsapp = () => {
    if (data.whatsappNumber) {
      window.open(`https://wa.me/${data.whatsappNumber}`, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <ServiceLayout 
        title={data.h1}
        subtitle={data.subtitle}
        onOpenCalendly={() => setIsModalOpen(true)}
      >
        {/* Intro */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300 space-y-6 text-lg">
            {data.introParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">{data.benefitsTitle || "Beneficios Principales"}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.benefits.map((b, i) => (
                <div key={i} className="p-8 rounded-2xl glass-card border border-white/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">{b.title}</h3>
                  </div>
                  <p className="font-medium text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{data.includedTitle || "¿Qué incluye este servicio?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.included.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass-card border border-white/10 group">
                <div className="mt-1 bg-[#00FF9D]/10 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#00FF9D]" />
                </div>
                <span className="font-medium text-slate-200 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">{data.faqTitle || "Preguntas Frecuentes"}</h2>
            <div className="space-y-6">
              {data.faq.map((f, i) => (
                <div key={i} className="p-6 rounded-xl glass-card border border-white/10">
                  <h3 className="font-bold text-lg mb-2 text-white flex gap-2 items-center">
                    <HelpCircle className="w-5 h-5 text-[#FF006E]" /> {f.q}
                  </h3>
                  <p className="font-medium text-slate-300">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#0A1628] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-white">¿Hablamos de tu proyecto?</h2>
            <p className="text-xl text-slate-400 mb-10">Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a mejorar tu presencia y procesos digitales.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg">
                Contacto por Formulario <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button onClick={handleWhatsapp} className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold shadow-lg hover:bg-[#128C7E] transition-all text-lg">
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </section>

      </ServiceLayout>

      <ModalController isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
