import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import TurnstileWidget from './TurnstileWidget';
import { trackEvent } from '../utils/analytics';
interface ContactFormProps {
  eventName?: string;
  eventLabel?: string;
  submitText?: string;
}

export default function ContactForm(props: ContactFormProps) {
  const eventName = props.eventName || 'submit_contacto';
  const eventLabel = props.eventLabel || 'Formulario contacto';
  const submitText = props.submitText || 'Solicitar Diagnóstico';
  const [form, setForm] = useState({ 
    'Nombre Completo': '', 
    'Empresa': '', 
    'Web actual': '',
    'Email': '', 
    'Teléfono': '', 
    'Servicio de interés': '',
    'Sector': '',
    'Urgencia': '',
    'Mensaje': '' 
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');

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
          _subject: `Solicitud Auditoría - ${form.Empresa}`,
          _template: 'table',
          cf_turnstile_response: turnstileToken
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('sent');
        trackEvent(eventName, {
          event_label: eventLabel,
          service_interest: form['Servicio de interés'],
          sector: form.Sector
        });
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setStatus('error');
      trackEvent('contact_form_error', {
        form_name: 'contact_page_form',
        error_message: String(error)
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-32 relative bg-[#0A1628] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] to-[#1a0a2e]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#FF006E]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Impulsa tu <span className="text-white">Crecimiento</span>
          </motion.h2>
          <p className="text-xl font-medium text-slate-200 max-w-2xl mx-auto">Déjanos tus datos y diseñaremos una estrategia tecnológica a medida para tu empresa.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-10 md:p-12 shadow-2xl relative overflow-hidden rounded-3xl"
        >
          {/* Subtle Border Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF006E] to-transparent opacity-50"></div>

          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <div className="w-24 h-24 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} className="ml-2" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">¡Solicitud recibida!</h3>
                <p className="text-slate-400 text-lg">
                  Revisaremos tu caso y te responderemos lo antes posible.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[#00D4FF] hover:text-white font-bold underline transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col gap-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre_completo" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Nombre Completo</label>
                    <input id="nombre_completo" name="Nombre Completo" value={form['Nombre Completo']} onChange={handleChange} type="text" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Empresa</label>
                    <input id="empresa" name="Empresa" value={form.Empresa} onChange={handleChange} type="text" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Email Corporativo</label>
                    <input id="email" name="Email" value={form.Email} onChange={handleChange} type="email" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Teléfono</label>
                    <input id="telefono" name="Teléfono" value={form['Teléfono']} onChange={handleChange} type="tel" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="web_actual" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Web actual (Opcional)</label>
                  <input id="web_actual" name="Web actual" value={form['Web actual']} onChange={handleChange} type="url" placeholder="https://" className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="servicio" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Servicio de interés</label>
                    <select id="servicio" name="Servicio de interés" value={form['Servicio de interés']} onChange={handleChange} className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer" required>
                      <option value="" disabled>Selecciona un servicio</option>
                      <option value="Web profesional">Web profesional</option>
                      <option value="Automatización IA">Automatización IA</option>
                      <option value="Chatbot / Agente IA">Chatbot / Agente IA</option>
                      <option value="App o CRM a medida">App o CRM a medida</option>
                      <option value="SEO / captación">SEO / captación</option>
                      <option value="No lo tengo claro">No lo tengo claro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="sector" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Sector</label>
                    <select id="sector" name="Sector" value={form['Sector']} onChange={handleChange} className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer" required>
                      <option value="" disabled>Selecciona tu sector</option>
                      <option value="Clínica">Clínica</option>
                      <option value="Inmobiliaria">Inmobiliaria</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Servicios profesionales">Servicios profesionales</option>
                      <option value="Otra empresa">Otra empresa</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="urgencia" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Urgencia</label>
                  <select id="urgencia" name="Urgencia" value={form['Urgencia']} onChange={handleChange} className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer" required>
                    <option value="" disabled>¿Cuándo necesitas empezar?</option>
                    <option value="Esta semana">Esta semana</option>
                    <option value="Este mes">Este mes</option>
                    <option value="Más adelante">Más adelante</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Mensaje o problema principal</label>
                  <textarea id="mensaje" name="Mensaje" value={form.Mensaje} onChange={handleChange} rows={4} className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none" placeholder="Cuéntanos brevemente qué necesitas resolver..." required></textarea>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 shrink-0 w-4 h-4 rounded border-white/10 bg-[#030712] text-[#00D4FF] focus:ring-[#00D4FF] cursor-pointer"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-400 cursor-pointer">
                    He leído y acepto la <a href="/privacidad" onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/privacidad');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }} className="text-[#00D4FF] hover:underline">política de privacidad</a>.
                  </label>
                </div>

                {validationError && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-sm text-center font-bold">
                    {validationError}
                  </div>
                )}
                {status === 'error' && !validationError && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-sm text-center">
                    No se ha podido enviar el formulario. Inténtalo de nuevo.
                  </div>
                )}

                <TurnstileWidget 
                  onVerify={(token) => setTurnstileToken(token)}
                  onError={() => setStatus('error')}
                />

                <button 
                  disabled={status === 'sending' || !privacyAccepted || !turnstileToken}
                  type="submit" 
                  className={`w-full mt-4 py-5 rounded-xl font-bold text-lg tracking-wider transition-all flex items-center justify-center gap-3 ${
                    status === 'sending' || !privacyAccepted || !turnstileToken
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02]'
                  }`}
                >
                  {status === 'sending' ? (
                    <>Enviando solicitud... <Loader2 className="animate-spin" size={20} /></>
                  ) : (
                    <>{submitText} <Send size={20} /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
