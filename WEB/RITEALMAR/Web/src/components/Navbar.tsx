import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Navbar({ onOpenCalendly }: { onOpenCalendly: (config?: any) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isMobile: boolean = false) => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
    if (path.startsWith('/') && !path.includes('#')) {
      e.preventDefault();
      trackEvent('internal_link', { link: path });
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
    { label: "Auditoría Gratuita", href: "/auditoria-ia-gratis", onClick: (e: any) => handleNavClick(e, '/auditoria-ia-gratis') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 🚫 REFACTORIZACIÓN LOGO: De contenedor rígido a integración limpia */}
        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="relative z-50 flex items-center gap-3 group">
          <div className="relative p-1 transition-all duration-300">
            <img 
              src="/logo-fondo.webp" 
              alt="Ritealmar IA"
              width="200"
              height="48"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              style={{ aspectRatio: "200/48" }}
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
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-300 hover:text-[#00D4FF] font-medium text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => {
              trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita' });
              handleNavClick(e, '/auditoria-ia-gratis');
            }}
            className="px-6 py-2.5 bg-[#FF006E]/10 border border-[#FF006E]/30 text-[#FF006E] hover:bg-[#FF006E] hover:text-white rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,0,110,0.2)] hover:shadow-[0_0_25px_rgba(255,0,110,0.5)]"
          >
            Auditoría Gratuita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-[#0A1628]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center animate-fade-in"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {menuItems.slice(0, 3).map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, true)}
                  className="text-2xl font-bold text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/auditoria-ia-gratis"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita' });
                  handleNavClick(e as any, '/auditoria-ia-gratis', true);
                }}
                className="w-full mt-4 bg-gradient-to-r from-[#FF006E] to-[#00D4FF] text-white py-3 rounded-lg font-bold text-xl flex items-center justify-center"
              >
                Auditoría Gratuita
              </a>
            </div>
          </div>
        )}
      </>
    </nav>
  );
}
