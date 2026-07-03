import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import WhatWeDoSection from './WhatWeDoSection';
import DifferentiationSection from './DifferentiationSection';
import UseCasesSection from './UseCasesSection';
import ServicesGrid from './ServicesGrid';
import WebDevSection from './WebDevSection';
import ProcessSection from './ProcessSection';
import PortfolioSection from './PortfolioSection';
import FinalCTA from './FinalCTA';
import ContactForm from './ContactForm';
import LegalFooter from './LegalFooter';
import ChatWidget from './ChatWidget';
import CalendlyModal from './CalendlyModal';

export default function AgencyLanding({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-[#E5E7EB] font-sans">
      <Navbar onOpenCalendly={() => setIsCalendlyOpen(true)} />
      
      <main>
        <Hero onOpenCalendly={() => setIsCalendlyOpen(true)} />
        <ProblemSection />
        <WhatWeDoSection />
        <DifferentiationSection />
        <UseCasesSection />
        <ServicesGrid />
        <WebDevSection />
        <ProcessSection />
        <PortfolioSection />
        <FinalCTA onOpenCalendly={() => setIsCalendlyOpen(true)} />
        <ContactForm />
      </main>

      <LegalFooter />
      
      {/* Elementos Flotantes / Modales */}
      <ChatWidget />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}
