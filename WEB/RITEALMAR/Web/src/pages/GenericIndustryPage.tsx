import React, { useState, useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustryData {
  seoTitle: string;
  seoDesc: string;
  title: string;
  subtitle: string;
  benefits: string[];
  cta: string;
}

export default function GenericIndustryPage({ data }: { data: IndustryData }) {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title?: string; subtitle?: string; submitText?: string }>({ isOpen: false });

  useEffect(() => {
    document.title = data.seoTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.seoDesc);

    // Cleanup when component unmounts
    return () => {
      document.title = "Ritealmar | IA para PYMEs — Inteligencia Artificial, Agentes y Automatización";
    };
  }, [data]);

  return (
    <>
      <ServiceLayout 
        title={data.title}
        subtitle={data.subtitle}
        onOpenCalendly={(config) => setModalConfig({ isOpen: true, ...(config || {}) })}
      >
        
        {/* Beneficios Específicos */}
        <section className="py-32 px-6 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">¿Qué solucionamos para tu sector?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#00D4FF]/10 p-2 rounded-full group-hover:bg-[#00D4FF]/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <span className="font-medium text-slate-200 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#0F172A] border-y border-white/5 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FF006E]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-white">Da el siguiente paso</h2>
            <p className="text-xl text-slate-400 mb-10">Descubre cómo podemos adaptar nuestra tecnología a tus procesos actuales sin interrumpir tu operativa diaria.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-lg"
            >
              {data.cta} <ArrowRight size={20} />
            </button>
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
