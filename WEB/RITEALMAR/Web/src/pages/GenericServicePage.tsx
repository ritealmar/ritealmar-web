import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { Zap, CheckCircle2 } from 'lucide-react';

interface ServiceData {
  title: string;
  subtitle: string;
  whatIsIt: string;
  description1: string;
  description2: string;
  problemsResolvedTitle: string;
  problems: string[];
  steps: { title: string; desc: string; }[];
  benefits: { title: string; desc: string; }[];
}

export default function GenericServicePage({ data }: { data: ServiceData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ServiceLayout 
        title={data.title}
        subtitle={data.subtitle}
        onOpenCalendly={() => setIsModalOpen(true)}
      >
        
        {/* Intro Section */}
        <section className="py-32 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-4xl font-bold mb-8 text-white">{data.whatIsIt}</h2>
            <p className="font-medium mb-6 leading-relaxed text-lg">{data.description1}</p>
            <p className="font-medium leading-relaxed text-lg">{data.description2}</p>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-32 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">{data.problemsResolvedTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#FF006E]/20 p-2 rounded-full group-hover:bg-[#FF006E]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF006E]" />
                  </div>
                  <span className="font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-32 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">¿Cómo funciona el proceso?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {data.steps.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-glow-blue transition-colors">{step.title}</h3>
                <p className="font-medium text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-32 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Beneficios para tu empresa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 glass-card border border-white/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">{benefit.title}</h3>
                  </div>
                  <p className="font-medium text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
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
