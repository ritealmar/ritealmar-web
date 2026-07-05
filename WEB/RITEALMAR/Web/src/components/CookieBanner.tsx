import React, { useState, useEffect } from 'react';
import { X, Settings, ShieldCheck } from 'lucide-react';
import { setConsent, initializeConsent } from '../utils/consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    // 1. Inicializamos siempre el estado por defecto (Consent Mode) y cargamos si ya hay permisos
    initializeConsent();

    const consent = localStorage.getItem('ritealmar_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.analytics) window.dispatchEvent(new CustomEvent('cookies_analytics_accepted'));
        if (parsed.marketing) window.dispatchEvent(new CustomEvent('cookies_marketing_accepted'));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showConfig) {
        setShowConfig(false);
      }
    };
    if (showConfig) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showConfig]);

  const handleSaveConsent = (prefs: { analytics: boolean, marketing: boolean }) => {
    // Guarda en localStorage e inyecta los scripts si hay analítica
    setConsent(prefs);
    setIsVisible(false);
    setShowConfig(false);
    
    // Dispara eventos custom para listeners externos
    if (prefs.analytics) {
      window.dispatchEvent(new CustomEvent('cookies_analytics_accepted'));
    }
    if (prefs.marketing) {
      window.dispatchEvent(new CustomEvent('cookies_marketing_accepted'));
    }
  };

  const handleAcceptAll = () => {
    console.info('[RITEALMAR Cookies] Accept all clicked');
    handleSaveConsent({ analytics: true, marketing: true });
  };
  const handleRejectAll = () => handleSaveConsent({ analytics: false, marketing: false });
  const handleSavePreferences = () => handleSaveConsent(preferences);

  return (
      <>
        {isVisible && !showConfig && (
          <div 
            className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl md:w-[calc(100%-48px)] md:p-0 pointer-events-none animate-fade-in"
          >
            <div className="pointer-events-auto bg-[#0A1628]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-4 md:px-6 md:py-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 relative overflow-hidden">
              {/* Glowing Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              
              <div className="flex-1 w-full lg:w-auto text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="text-cyan-400" size={18} />
                  <h3 className="text-base font-bold text-white">Privacidad y Cookies</h3>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Utilizamos cookies propias y de terceros para analizar el uso y mejorar nuestros servicios. <a href="/cookies" onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/cookies');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }} className="text-cyan-400 hover:underline font-bold transition-colors">Política de Cookies</a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 shrink-0">
                <button 
                  onClick={() => setShowConfig(true)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 font-bold text-xs transition-all flex items-center justify-center gap-1.5 flex-1 lg:flex-none"
                >
                  <Settings size={14} /> Configurar
                </button>
                <button 
                  onClick={handleRejectAll}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-white hover:bg-slate-700 font-bold text-xs transition-all flex items-center justify-center flex-1 lg:flex-none"
                >
                  Rechazar
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5 flex-1 lg:flex-none"
                >
                  <ShieldCheck size={14} /> Aceptar todas
                </button>
              </div>
            </div>
          </div>
        )}

        {showConfig && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#030712]/80 backdrop-blur-sm animate-fade-in">
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-config-title"
              className="bg-[#0A1628] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden relative"
            >
              {/* Decoración Superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>

              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/50">
                <h2 id="cookie-config-title" className="text-xl font-bold text-white flex items-center gap-3">
                  <Settings className="text-cyan-400" />
                  Configuración de Cookies
                </h2>
                <button aria-label="Cerrar configuración" onClick={() => setShowConfig(false)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto space-y-4 bg-[#030712]/30 flex-1">
                {/* Cookies Necesarias */}
                <div className="bg-[#0F172A] border border-white/5 p-5 rounded-xl flex flex-col sm:flex-row items-start justify-between gap-4 opacity-80 shadow-inner">
                  <div>
                    <h4 className="text-white font-bold mb-1 text-base">Cookies Necesarias</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Garantizan el funcionamiento técnico y la seguridad de la web. No pueden desactivarse ya que son esenciales.</p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-lg border border-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]">Siempre Activas</span>
                  </div>
                </div>

                {/* Cookies de Analítica */}
                <div className="bg-[#0F172A] border border-cyan-500/10 hover:border-cyan-500/30 transition-colors p-5 rounded-xl flex flex-col sm:flex-row items-start justify-between gap-4 shadow-lg">
                  <div>
                    <h3 className="text-white font-bold mb-1 text-base">Analítica y Rendimiento</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Nos permiten cuantificar el número de usuarios y medir el uso de la web para mejorar nuestros servicios y herramientas.</p>
                  </div>
                  <div className="shrink-0 pt-1 flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        aria-label="Activar cookies de analítica y rendimiento"
                        className="sr-only peer" 
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      />
                      <div className="w-12 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>

                {/* Cookies de Marketing */}
                <div className="bg-[#0F172A] border border-purple-500/10 hover:border-purple-500/30 transition-colors p-5 rounded-xl flex flex-col sm:flex-row items-start justify-between gap-4 shadow-lg">
                  <div>
                    <h3 className="text-white font-bold mb-1 text-base">Marketing y Publicidad</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Se utilizan para rastrear a los visitantes en las páginas web y mostrar anuncios relevantes para tu empresa.</p>
                  </div>
                  <div className="shrink-0 pt-1 flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        aria-label="Activar cookies de marketing y publicidad"
                        className="sr-only peer" 
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      />
                      <div className="w-12 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-slate-900/80 flex flex-col-reverse sm:flex-row justify-end gap-3 rounded-b-2xl">
                <button 
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 font-bold text-sm transition-all"
                >
                  Aceptar Todas
                </button>
                <button 
                  onClick={handleSavePreferences}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-sm transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
                >
                  Guardar Preferencias
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
