import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenCalendly }: { onOpenCalendly: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Auditoría Gratuita", href: "#contacto", onClick: onOpenCalendly }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 🚫 REFACTORIZACIÓN LOGO: De contenedor rígido a integración limpia */}
        <a href="#inicio" className="relative z-50 flex items-center gap-3 group">
          <div className="relative p-1 transition-all duration-300">
            <img 
              src="/logo-fondo.jpg" 
              alt="Ritealmar IA" 
              className="h-10 md:h-12 w-auto object-contain rounded-lg mix-blend-screen opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tighter leading-none uppercase">Ritealmar</span>
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-cyan-400 mt-1">Sistemas IA</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.slice(0, 3).map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              className="text-slate-300 hover:text-[#00D4FF] font-medium text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onOpenCalendly}
            className="px-6 py-2.5 bg-[#FF006E]/10 border border-[#FF006E]/30 text-[#FF006E] hover:bg-[#FF006E] hover:text-white rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,0,110,0.2)] hover:shadow-[0_0_25px_rgba(255,0,110,0.5)]"
          >
            Auditoría Gratuita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0A1628]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className={`text-2xl font-bold ${i === menuItems.length - 1 ? 'text-[#FF006E]' : 'text-white'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
