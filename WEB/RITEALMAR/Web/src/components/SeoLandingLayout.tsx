import React, { useState } from 'react';
import ServiceLayout from './ServiceLayout';
import { ModalController } from './ModalController';
import RecursosRecomendados from './RecursosRecomendados';
import BeforeAfterSection from './BeforeAfterSection';
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
  faq?: { q: string; a: string }[];
  problemTitle?: string;
  problems?: { title: string; desc: string }[];
  solutionTitle?: string;
  solutions?: { title: string; desc: string }[];
  visualTitle?: string;
  visualPoints?: { title: string; desc: string }[];
  beforeAfterTitle?: string;
  ctaTitle?: string;
  ctaText: string;
  ctaFinalPrimary?: string;
  ctaFinalSecondary?: string;
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

        {/* Problemas del cliente */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">{data.problemTitle || 'Los desafíos antes de un sitio web efectivo'}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {(data.problems || [
                { title: 'Pierde leads valiosos', desc: 'Tu web recibe visitas, pero no las convierte en contactos reales.' },
                { title: 'Atiende tarde o con respuestas estándar', desc: 'Los clientes quieren soluciones rápidas y se van si no las reciben al instante.' },
                { title: 'No mide conversiones', desc: 'Si no sabes qué funciona, no puedes optimizar ni vender mejor.' }
              ]).map((item, i) => (
                <div key={i} className="glass-card border border-white/10 p-8 bg-[#09111F] transition-all">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-4">Problema</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solución RITEALMAR */}
        <section className="py-20 px-6 bg-[#0A1628]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">{data.solutionTitle || 'Cómo RITEALMAR resuelve el problema'}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(data.solutions || [
                { title: 'IA aplicada al marketing', desc: 'Sistemas que interpretan la intención del usuario y generan respuestas comerciales relevantes.' },
                { title: 'Web optimizada para conversión', desc: 'Estructura, copies y formularios diseñados para capturar leads y reducir la fricción.' },
                { title: 'Formularios conectados', desc: 'Cada envío llega directo a tu CRM o Google Sheets con seguimiento automático.' },
                { title: 'Seguimiento comercial', desc: 'Los leads no se pierden en el email, se gestionan desde un flujo ordenado y automatizado.' }
              ]).map((item, i) => (
                <div key={i} className="glass-card border border-white/10 p-8 bg-[#081221] transition-all">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7DD3FC] mb-4">Solución</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
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

        {/* Visual IA / Automatización */}
        <section className="py-20 px-6 bg-[#030712] border-y border-white/5 overflow-hidden">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Visualización del sistema</p>
              <h2 className="text-4xl font-bold text-white">{data.visualTitle || 'Un sistema que conecta tu web, formularios y CRM'}</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                Muestra cómo un flujo inteligente genera contactos de valor, sincroniza datos y envía alertas al equipo comercial sin intervención manual.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {(data.visualPoints || [
                  { title: 'Formulario conectado', desc: 'Cada lead llega directo al seguimiento.' },
                  { title: 'Panel comercial', desc: 'Visualiza el estado de cada cliente potencial en un solo lugar.' },
                  { title: 'Automatización IA', desc: 'El sistema actúa en segundo plano para calificar y priorizar contactos.' },
                  { title: 'Entrega de datos', desc: 'Tus métricas llegan a Analytics y a tu CRM en tiempo real.' }
                ]).map((item, i) => (
                  <div key={i} className="glass-card border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-[#08131F] p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)] overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/15 to-transparent" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between text-slate-300 text-sm uppercase tracking-[0.3em]">
                  <span>Dashboard</span>
                  <span className="text-cyan-300">IA en tiempo real</span>
                </div>
                <div className="rounded-3xl bg-[#0B1726] p-5 border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-[0.3em]">Conversiones</p>
                      <p className="text-3xl font-bold text-white">+38%</p>
                    </div>
                    <div className="text-cyan-300 font-semibold">Estable</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[72%] bg-cyan-400" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#0B1726] p-5 border border-white/5">
                    <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-2">Lead</p>
                    <p className="text-xl font-semibold text-white">Nuevo contacto</p>
                  </div>
                  <div className="rounded-3xl bg-[#0B1726] p-5 border border-white/5">
                    <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-2">Seguimiento</p>
                    <p className="text-xl font-semibold text-white">Email + WhatsApp</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-[#0C1928] p-4 border border-white/5">
                  <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-2">Actividad reciente</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>Lead calificado automáticamente</li>
                    <li>Formulario conectado a CRM</li>
                    <li>Alertas enviadas al comercial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Antes / Después */}
        <BeforeAfterSection />

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
            <h2 className="text-4xl font-bold mb-8 text-white">{data.ctaTitle || '¿Quieres saber qué puede mejorar tu empresa?'}</h2>
            <p className="text-xl text-slate-400 mb-10">{data.ctaText}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => handleOpenModal()} className="btn-primary text-lg">
                {data.ctaFinalPrimary || 'Solicitar auditoría gratuita'}
              </button>
              <button onClick={handleWhatsapp} className="btn-secondary text-lg">
                {data.ctaFinalSecondary || 'Hablar por WhatsApp'}
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
