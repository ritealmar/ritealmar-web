import React, { useState } from 'react';
import ServiceLayout from './ServiceLayout';
import { ModalController } from './ModalController';
import RecursosRecomendados from './RecursosRecomendados';
import { CheckCircle2, ArrowRight, HelpCircle, GitCommit } from 'lucide-react';
import SEO from './SEO';
import JsonLd from './JsonLd';

import { trackEvent } from '../utils/analytics';

export interface SeoLandingProps {
  seoTitle: string;
  seoDesc: string;
  h1: string;
  subtitle: string;
  introParagraphs: string[];
  benefitsTitle?: string;
  benefits: { title: string; desc: string }[];
  processTitle?: string;
  process?: { step: string; title: string; desc: string }[];
  includedTitle?: string;
  included: string[];
  faqTitle?: string;
  faq: { q: string; a: string }[];
  ctaText: string;
  whatsappNumber?: string;
  recommendedBlog?: { title: string; url: string; };
}

export default function SeoLandingLayout({ data }: { data: SeoLandingProps }) {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title?: string;
    subtitle?: string;
    submitText?: string;
  }>({ isOpen: false });

  const handleOpenModal = (config?: any) => {
    window.location.href = '/auditoria-ia-gratis';
  };

  const handleWhatsapp = () => {
    trackEvent('click_whatsapp', { event_label: 'Botón WhatsApp Landing SEO' });
    if (data.whatsappNumber) {
      window.open(`https://wa.me/${data.whatsappNumber}`, '_blank');
    } else {
      handleOpenModal();
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.h1,
    "description": data.seoDesc,
    "provider": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "url": "https://ritealmar.es"
    },
    "areaServed": "ES",
    "url": window.location.href
  };

  const faqSchema = data.faq && data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <>
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <ServiceLayout  
        title={data.h1}
        subtitle={data.subtitle}
        onOpenCalendly={handleOpenModal}
        seoTitle={data.seoTitle}
        seoDesc={data.seoDesc}
      >
        {/* Intro / Problem */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300 space-y-6 text-lg">
            {data.introParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}

            {data.recommendedBlog && (
              <div className="mt-8 p-6 bg-[#0F172A] border border-cyan-500/20 rounded-xl">
                <span className="text-cyan-400 font-bold block mb-2 text-sm uppercase tracking-wider">📖 Lectura recomendada:</span>
                <a 
                  href={data.recommendedBlog.url} 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', data.recommendedBlog!.url);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-white hover:text-cyan-400 font-bold text-lg transition-colors flex items-center gap-2"
                >
                  {data.recommendedBlog.title} <ArrowRight size={18} />
                </a>
              </div>
            )}
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

        {/* Process */}
        {data.process && data.process.length > 0 && (
          <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">{data.processTitle || "Nuestro Proceso"}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {data.process.map((p, i) => (
                <div key={i} className="p-6 glass-card border border-white/10 relative">
                  <div className="text-[#00D4FF] font-black text-4xl mb-4 opacity-50">{p.step}</div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-300">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What's Included */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628] border-t border-white/5">
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

        {/* Recursos Recomendados */}
        <RecursosRecomendados />

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#0A1628] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-white">¿Hablamos de tu proyecto?</h2>
            <p className="text-xl text-slate-400 mb-10">Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a mejorar tu presencia y procesos digitales.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => handleOpenModal()} className="btn-primary text-lg">
                Contacto por Formulario <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button onClick={handleWhatsapp} className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold shadow-lg hover:bg-[#128C7E] transition-all text-lg">
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        submitText={modalConfig.submitText}
      />
    </>
  );
}
