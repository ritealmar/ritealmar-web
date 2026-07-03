import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onOpenCalendly }: { onOpenCalendly?: () => void }) {
  return (
    <section className="section-spacing relative overflow-hidden bg-[#020617] flex items-center justify-center border-y border-white/5 py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#020617] to-[#111827] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3B82F6]/10 to-[#22D3EE]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-bold leading-tight uppercase">
          ¿Listo para <br /> <span className="text-[#AF5AE1]">Escalar?</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Solicita una consultoría gratuita y descubre cómo la IA puede transformar tu empresa hoy mismo.
        </p>
        <button 
          onClick={onOpenCalendly}
          className="btn-primary"
        >
          Solicitar Presupuesto
        </button>
      </motion.div>
    </section>
  );
}
