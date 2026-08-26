import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import TurnstileWidget from './TurnstileWidget';
import { trackEvent } from '../utils/analytics';

interface ContactFormProps {
  eventName?: string;
  eventLabel?: string;
  submitText?: string;
}

type ContactFormState = {
  'Nombre Completo': string;
  Email: string;
  Empresa: string;
  Mensaje: string;
};

const initialFormState: ContactFormState = {
  'Nombre Completo': '',
  Email: '',
  Empresa: '',
  Mensaje: ''
};

export default function ContactForm(props: ContactFormProps) {
  const eventName = props.eventName || 'submit_contacto';
  const eventLabel = props.eventLabel || 'Formulario contacto';
  const submitText = props.submitText || 'Solicitar Diagnóstico';
  
  const formStartedRef = useRef(false);

  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    trackEvent('form_submit', { form_name: eventName, page_path: window.location.pathname });

    if (!form['Nombre Completo'].trim()) {
      setValidationError('El nombre es obligatorio.');
      trackEvent('form_error', { form_name: eventName, error_type: 'validation_nombre', page_path: window.location.pathname });
      return;
    }

    if (!form.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setValidationError('Introduce un email válido.');
      trackEvent('form_error', { form_name: eventName, error_type: 'validation_email', page_path: window.location.pathname });
      return;
    }

    if (form.Mensaje.trim().length < 10) {
      setValidationError('El mensaje es demasiado corto.');
      trackEvent('form_error', { form_name: eventName, error_type: 'validation_mensaje', page_path: window.location.pathname });
      return;
    }

    if (!privacyAccepted) {
      setValidationError('Debes aceptar la política de privacidad.');
      trackEvent('form_error', { form_name: eventName, error_type: 'validation_privacy', page_path: window.location.pathname });
      return;
    }

    if (!turnstileToken) {
      setValidationError('Por favor, completa la validación de seguridad.');
      trackEvent('form_error', { form_name: eventName, error_type: 'validation_turnstile', page_path: window.location.pathname });
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@ritealmar.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: `Solicitud de Contacto - ${form['Nombre Completo']}`,
          _template: 'table',
          _cc: 'llargo34@gmail.com',
          cf_turnstile_response: turnstileToken
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('sent');

        trackEvent('form_success', {
          form_name: eventName,
          page_path: window.location.pathname
        });

        setForm(initialFormState);
        setPrivacyAccepted(false);
        setTurnstileToken('');
      } else {
        throw new Error('Error al enviar el formulario.');
      }
    } catch (error) {
      setStatus('error');

      trackEvent('form_error', {
        form_name: eventName,
        error_type: 'submission_failed',
        error_message: String(error),
        page_path: window.location.pathname
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent('form_start', { form_name: eventName, page_path: window.location.pathname });
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative bg-[#030712] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#0A1628]"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight text-white"
          >
            ¿Hablamos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">proyecto?</span>
          </motion.h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Déjanos tus datos y un ingeniero revisará tu caso para proponerte una solución técnica sin compromiso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-[2.5rem]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-50"></div>

          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <div className="w-24 h-24 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} className="ml-2" />
                </div>

                <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">
                  ¡Mensaje enviado con éxito!
                </h3>

                <p className="text-slate-400 text-lg font-medium">
                  Revisaremos tu consulta y te contactaremos en un plazo de 24 horas.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-cyan-400 hover:text-white font-bold transition-colors underline underline-offset-4"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="nombre_completo"
                      className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2"
                    >
                      Nombre y Apellidos
                    </label>
                    <input
                      id="nombre_completo"
                      name="Nombre Completo"
                      value={form['Nombre Completo']}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                      placeholder="Ej. Laura García"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2"
                    >
                      Email Corporativo
                    </label>
                    <input
                      id="email"
                      name="Email"
                      value={form.Email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                      placeholder="direccion@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="empresa"
                    className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2"
                  >
                    Empresa <span className="text-slate-600 normal-case">(Opcional)</span>
                  </label>
                  <input
                    id="empresa"
                    name="Empresa"
                    value={form.Empresa}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                    placeholder="Ej. Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mensaje"
                    className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2"
                  >
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    id="mensaje"
                    name="Mensaje"
                    value={form.Mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all resize-none placeholder:text-slate-600"
                    placeholder="Cuéntanos sobre tu negocio y qué procesos te gustaría optimizar..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 shrink-0 w-5 h-5 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-400 cursor-pointer select-none">
                    He leído y acepto la{' '}
                    <a
                      href="/privacidad"
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', '/privacidad');
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline"
                    >
                      política de privacidad
                    </a>
                    .
                  </label>
                </div>

                {validationError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold text-center">
                    {validationError}
                  </div>
                )}

                {status === 'error' && !validationError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold text-center">
                    Ocurrió un error al enviar. Por favor, inténtalo de nuevo.
                  </div>
                )}

                <div className="mt-2">
                  <TurnstileWidget
                    onVerify={(token) => setTurnstileToken(token)}
                    onError={() => setStatus('error')}
                  />
                </div>

                <button
                  disabled={status === 'sending' || !privacyAccepted || !turnstileToken}
                  type="submit"
                  className={`w-full mt-2 py-5 rounded-xl font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                    status === 'sending' || !privacyAccepted || !turnstileToken
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Procesando envío...
                    </>
                  ) : (
                    <>
                      {submitText} <Send size={20} />
                    </>
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