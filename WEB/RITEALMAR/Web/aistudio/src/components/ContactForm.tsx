import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contacto" className="section-spacing bg-[#111827] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg md:text-xl text-[#9CA3AF]">
            Rellena el formulario y te contactaremos en menos de 24 horas.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#020617] border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-300">Nombre</label>
                <input type="text" className="input-field" placeholder="Tu nombre" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-300">Empresa</label>
                <input type="text" className="input-field" placeholder="Nombre de tu empresa" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-300">Email corporativo</label>
                <input type="email" className="input-field" placeholder="email@empresa.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-300">Teléfono</label>
                <input type="tel" className="input-field" placeholder="+34" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300">Servicio que te interesa</label>
              <select className="input-field text-white" required defaultValue="">
                <option value="" disabled className="text-gray-500">Selecciona una opción...</option>
                <option value="automatizacion" className="text-white">Automatización de procesos</option>
                <option value="chatbots" className="text-white">Chatbots y Asistentes IA</option>
                <option value="web" className="text-white">Desarrollo Web</option>
                <option value="apps" className="text-white">Desarrollo de Apps Internas</option>
                <option value="consultoria" className="text-white">Consultoría / Formación</option>
                <option value="otro" className="text-white">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300">Mensaje</label>
              <textarea rows={4} className="input-field resize-none" placeholder="Cuéntanos más sobre tu negocio y qué te gustaría mejorar..." required></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 mt-4">
              Enviar solicitud <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          background-color: #111827;
          border: 1px solid #374151;
          color: #fff;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-field::placeholder {
          color: #6B7280;
        }
        .input-field:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246, 0.1);
        }
      `}</style>
    </section>
  );
}
