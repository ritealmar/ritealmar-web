import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import TurnstileWidget from './TurnstileWidget';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  submitText?: string;
}

export const ModalController: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose,
  title = "Solicitar demo o presupuesto",
  subtitle = "Cuéntanos sobre tu negocio para ofrecerte la solución más adecuada.",
  submitText = "Solicitar información"
}) => {
  const [form, setForm] = useState({ 
    'Nombre Completo': '', 
    'Empresa': '', 
    'Email': '', 
    'Teléfono': '', 
    'Servicio de interés': '',
    'Sector': '',
    'Urgencia': '',
    'Mensaje': '' 
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      trackEvent('contact_modal_open', { source: 'floating_button_or_nav' });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    
    // Validaciones Frontend
    if (!form['Nombre Completo'].trim()) { setValidationError('El nombre es obligatorio.'); return; }
    if (!form['Email'].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setValidationError('Introduce un email válido.'); return; }
    if (form['Mensaje'].trim().length < 10) { setValidationError('El mensaje es demasiado corto.'); return; }
    if (!privacyAccepted) { setValidationError('Debes aceptar la política de privacidad.'); return; }
    if (!turnstileToken) { setValidationError('Por favor, completa la validación de seguridad.'); return; }
    
    setStatus('sending');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@ritealmar.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: `Nueva solicitud de demo - ${form.Empresa}`,
          _template: 'table',
          cf_turnstile_response: turnstileToken
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('sent');
        trackEvent('submit_contacto', {
          event_label: 'Formulario contacto',
          service_interest: form['Servicio de interés'],
          sector: form.Sector
        });
        setTimeout(() => {
          setStatus('idle');
          setForm({
            'Nombre Completo': '', 'Empresa': '', 'Email': '', 'Teléfono': '', 
            'Servicio de interés': '', 'Sector': '', 'Urgencia': '', 'Mensaje': ''
          });
          setPrivacyAccepted(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setStatus('error');
      trackEvent('contact_form_error', {
        form_name: 'modal_demo_form',
        error_message: String(error)
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A1628]/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-[#0F172A] p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 my-auto max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 p-2 rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {status === 'sent' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} className="ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Solicitud recibida</h3>
                <p className="text-slate-400">
                  Revisaremos tu caso y te responderemos lo antes posible.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 id="contact-modal-title" className="text-white text-2xl md:text-3xl font-bold mb-2">{title}</h2>
                  <p className="text-slate-400 text-sm">{subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_nombre" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Nombre</label>
                      <input id="modal_nombre" name="Nombre Completo" value={form['Nombre Completo']} onChange={handleChange} type="text" required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_empresa" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Empresa</label>
                      <input id="modal_empresa" name="Empresa" value={form.Empresa} onChange={handleChange} type="text" required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_email" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Email</label>
                      <input id="modal_email" name="Email" value={form.Email} onChange={handleChange} type="email" required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_telefono" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Teléfono</label>
                      <input id="modal_telefono" name="Teléfono" value={form['Teléfono']} onChange={handleChange} type="tel" required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_servicio" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Servicio</label>
                      <select id="modal_servicio" name="Servicio de interés" value={form['Servicio de interés']} onChange={handleChange} required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none">
                        <option value="" disabled>Selecciona...</option>
                        <option value="Web profesional">Web profesional</option>
                        <option value="Automatización IA">Automatización IA</option>
                        <option value="Chatbot / Agente IA">Chatbot / Agente IA</option>
                        <option value="App o CRM a medida">App o CRM a medida</option>
                        <option value="SEO / captación">SEO / captación</option>
                        <option value="No lo tengo claro">No lo tengo claro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_sector" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Sector</label>
                      <select id="modal_sector" name="Sector" value={form.Sector} onChange={handleChange} required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none">
                        <option value="" disabled>Selecciona...</option>
                        <option value="Clínica">Clínica</option>
                        <option value="Inmobiliaria">Inmobiliaria</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Servicios profesionales">Servicios</option>
                        <option value="Otra empresa">Otra empresa</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal_urgencia" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Urgencia</label>
                      <select id="modal_urgencia" name="Urgencia" value={form.Urgencia} onChange={handleChange} required className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none">
                        <option value="" disabled>Selecciona...</option>
                        <option value="Esta semana">Esta semana</option>
                        <option value="Este mes">Este mes</option>
                        <option value="Más adelante">Más adelante</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal_mensaje" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1">Problema principal</label>
                    <textarea 
                      id="modal_mensaje"
                      name="Mensaje" value={form.Mensaje} onChange={handleChange}
                      required rows={3}
                      placeholder="Describe qué necesitas resolver..."
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <input 
                      type="checkbox" 
                      id="privacy_modal"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 shrink-0 w-4 h-4 rounded border-white/10 bg-[#030712] text-[#00D4FF] focus:ring-[#00D4FF] cursor-pointer"
                      required
                    />
                    <label htmlFor="privacy_modal" className="text-xs text-slate-400 cursor-pointer">
                      He leído y acepto la <a href="/privacidad" onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.history.pushState({}, '', '/privacidad');
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }} className="text-[#00D4FF] hover:underline">política de privacidad</a>.
                    </label>
                  </div>

                  {validationError && (
                    <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-xs text-center font-bold">
                      {validationError}
                    </div>
                  )}
                  {status === 'error' && !validationError && (
                    <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-xs text-center">
                      No se ha podido enviar el formulario. Inténtalo de nuevo.
                    </div>
                  )}

                  <TurnstileWidget 
                    onVerify={(token) => setTurnstileToken(token)}
                    onError={() => setStatus('error')}
                  />

                  <div className="flex justify-end pt-2">
                    <button 
                      disabled={status === 'sending' || !privacyAccepted || !turnstileToken}
                      className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                        status === 'sending' || !privacyAccepted || !turnstileToken
                          ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02]'
                      }`}
                    >
                      {status === 'idle' && <>{submitText} <ArrowRight size={16} /></>}
                      {status === 'sending' && <>Enviando...</>}
                      {status === 'error' && <>Reintentar</>}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
