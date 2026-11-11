import React from 'react';
import { motion } from 'motion/react';
import ContactForm from './ContactForm';
import SEO from './SEO';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  children: React.ReactNode;
  onOpenCalendly: (config?: any) => void;
  seoTitle?: string;
  seoDesc?: string;
}

export default function ServiceLayout({ 
  title, 
  subtitle, 
  children, 
  onOpenCalendly,
  seoTitle,
  seoDesc
}: ServiceLayoutProps) {
  // Optimizamos los fallbacks para SEO
  const finalSeoTitle = seoTitle || `${title} | Agencia RITEALMAR`;
  const finalSeoDesc = seoDesc || subtitle.substring(0, 155) + (subtitle.length > 155 ? '...' : '');

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <SEO 
        title={finalSeoTitle}
        description={finalSeoDesc}
        canonical={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : undefined}
      />
      
      {/* Service Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-52 lg:pb-32 overflow-hidden border-b border-white/5 bg-[#0A1628]">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a0a2e] to-[#0A1628]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3 mix-blend-screen"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl font-medium text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <button
                onClick={() => {
                  window.location.href = '/auditoria-ia-gratis';
                }}
                className="btn-primary"
              >
                Solicitar auditoría gratuita
              </button>
              <a
                href="#proceso"
                className="btn-secondary"
              >
                Ver cómo funciona
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Soluciones para pymes, clínicas, inmobiliarias y empresas de servicios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Global CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0F172A] to-[#0A1628] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF006E]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Empieza a escalar <span className="text-gradient">desde hoy</span></h2>
          <p className="text-xl font-medium text-slate-300 mb-10">
            Analizamos tu empresa y te mostramos qué procesos pueden automatizarse y cuánto tiempo podrías ahorrar.
          </p>
          <button 
            onClick={() => {
              window.open("https://calendly.com/ritealmar/30min", "_blank", "noopener,noreferrer");
            }} 
            className="btn-primary"
          >
            Reservar Sesión Gratuita
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
