import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ROICalculator from '../components/ROICalculator';
import Benefits from '../components/Benefits';
import ServicesBentoGrid from '../components/ServicesBentoGrid';
import IndustrySolutions from '../components/IndustrySolutions';
import HowWeWork from '../components/HowWeWork';
import PortfolioSection from '../components/PortfolioSection';
import ContactForm from '../components/ContactForm';
import { ModalController } from '../components/ModalController';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar onOpenCalendly={() => setIsModalOpen(true)} />
      <Hero onOpenCalendly={() => setIsModalOpen(true)} />
      <ROICalculator />
      <Integrations />
      
      {/* Nuevas secciones de la Home rediseñada */}
      <Benefits />
      <ServicesBentoGrid onOpenForm={() => setIsModalOpen(true)} />
      <IndustrySolutions />
      <HowWeWork />
      <PortfolioSection />
      <Testimonials />
      <FAQ />
      
      <ContactForm />
      
      <ModalController 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
