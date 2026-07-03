import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import LegalFooter from './LegalFooter';
import ContactForm from './ContactForm';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  children: React.ReactNode;
  onOpenCalendly: () => void;
}

export default function ServiceLayout({ 
  title, 
  subtitle, 
  children, 
  onOpenCalendly 
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <Navbar onOpenCalendly={onOpenCalendly} />
      
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl font-medium text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <button 
              onClick={onOpenCalendly} 
              className="btn-primary"
            >
              Solicitar Auditoría Gratuita
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Global CTA */}
      <section className="py-32 bg-gradient-to-br from-[#0F172A] to-[#0A1628] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF006E]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Empieza a escalar <span className="text-gradient">desde hoy</span></h2>
          <p className="text-xl font-medium text-slate-300 mb-10">
            Analizamos tu empresa y te mostramos qué procesos pueden automatizarse y cuánto tiempo podrías ahorrar.
          </p>
          <button 
            onClick={onOpenCalendly} 
            className="btn-primary"
          >
            Reservar Sesión Gratuita
          </button>
        </div>
      </section>

      <ContactForm />
      <LegalFooter />
    </div>
  );
}
