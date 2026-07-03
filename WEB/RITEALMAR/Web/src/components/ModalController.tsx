import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalController: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ entity: '', email: '', mission: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

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
          Empresa: form.entity,
          Email: form.email,
          Mensaje: form.mission,
          _subject: `Nueva solicitud de demo - ${form.entity}`,
          _template: 'table'
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setForm({ entity: '', email: '', mission: '' });
          onClose();
        }, 2500);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setStatus('idle');
      // Fallback: abrir cliente de correo con datos pre-rellenados
      const subject = encodeURIComponent(`Solicitud de demo - ${form.entity}`);
      const body = encodeURIComponent(
        `Empresa: ${form.entity}\nEmail: ${form.email}\nMensaje: ${form.mission}`
      );
      window.location.href = `mailto:info@ritealmar.es?subject=${subject}&body=${body}`;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A1628]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg glass-card bg-[#0F172A] p-8 shadow-2xl border border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h2 className="text-white text-2xl font-bold mb-2">Solicitar demo</h2>
              <p className="text-slate-400 text-sm">Rellena el formulario y te contactaremos en menos de 24h.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-slate-400 pl-1">Empresa</label>
                <input 
                  type="text" 
                  required
                  placeholder="Nombre de tu empresa"
                  className="input-dark w-full"
                  value={form.entity}
                  onChange={e => setForm({...form, entity: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-slate-400 pl-1">Email corporativo</label>
                <input 
                  type="email" 
                  required
                  placeholder="tu@empresa.com"
                  className="input-dark w-full"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-slate-400 pl-1">¿Qué necesitas?</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Describe brevemente tu proyecto..."
                  className="input-dark w-full resize-none"
                  value={form.mission}
                  onChange={e => setForm({...form, mission: e.target.value})}
                />
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  disabled={status !== 'idle'}
                  className={`btn-primary w-full ${status === 'sent' ? '!bg-emerald-500' : ''}`}
                >
                  {status === 'idle' && <>Solicitar demo <ArrowRight size={18} /></>}
                  {status === 'sending' && <>Enviando...</>}
                  {status === 'sent' && <>Solicitud enviada ✓</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
