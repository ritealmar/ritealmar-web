import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ 
    'Nombre Completo': '', 
    'Empresa': '', 
    'Email': '', 
    'Teléfono': '', 
    'Mensaje': '' 
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          _template: 'table'
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('sent');
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Impulsa tu <span className="text-gradient">Crecimiento</span></h2>
          <p className="text-xl font-medium text-slate-200">Déjanos tus datos y diseñaremos una estrategia de IA a medida para tu empresa.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 md:p-12 shadow-2xl relative overflow-hidden"
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
                <h3 className="text-3xl font-bold mb-4 text-white">¡Solicitud Enviada!</h3>
                <p className="text-slate-400 text-lg">
                  Hemos recibido tus datos correctamente.<br/>Nos pondremos en contacto contigo en las próximas 24 horas.
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
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Nombre Completo</label>
                    <input name="Nombre Completo" value={form['Nombre Completo']} onChange={handleChange} type="text" className="input-dark" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Empresa</label>
                    <input name="Empresa" value={form.Empresa} onChange={handleChange} type="text" className="input-dark" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Email Corporativo</label>
                    <input name="Email" value={form.Email} onChange={handleChange} type="email" className="input-dark" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Teléfono</label>
                    <input name="Teléfono" value={form['Teléfono']} onChange={handleChange} type="tel" className="input-dark" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2">Mensaje</label>
                  <textarea name="Mensaje" value={form.Mensaje} onChange={handleChange} rows={4} className="input-dark resize-none" placeholder="Cuéntanos brevemente tu necesidad..." required></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-sm text-center">
                    Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo o escríbenos a info@ritealmar.es.
                  </div>
                )}

                <button 
                  disabled={status === 'sending'}
                  type="submit" 
                  className="btn-primary w-full mt-4 py-5 text-lg"
                >
                  {status === 'sending' ? (
                    <>Enviando solicitud... <Loader2 className="animate-spin" size={20} /></>
                  ) : (
                    <>Quiero mi Auditoría Gratuita <Send size={20} /></>
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
