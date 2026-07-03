import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onOpenCalendly }: { onOpenCalendly?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Qué Hacemos', id: 'que-hacemos' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Soluciones IA', id: 'soluciones' },
    { label: 'Webs & Apps', id: 'webs-apps' },
    { label: 'Portafolio', id: 'portafolio' },
    { label: 'Proceso', id: 'proceso' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="cursor-pointer flex items-center" onClick={() => scrollTo('inicio')}>
          <img src="/logo.png" alt="Ritealmar IA Soluciones" className="h-10 md:h-12 object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          {navItems.slice(1, -1).map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollTo(item.id)} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="hidden xl:flex">
          <button onClick={onOpenCalendly} className="btn-primary text-sm gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            Solicitar diagnóstico <Rocket size={16} />
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050816] border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollTo(item.id)} 
                  className="text-left font-medium text-white text-lg py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => { setIsMenuOpen(false); onOpenCalendly?.(); }} className="btn-primary w-full mt-4 py-3 flex items-center justify-center gap-2">
                Solicitar diagnóstico <Rocket size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
