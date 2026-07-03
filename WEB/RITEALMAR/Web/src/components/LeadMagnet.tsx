import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would connect to your email service/CRM
    }
  };

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#0A0A0A] to-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-3/5">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-blue-500/20">
              Recurso Gratuito
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
              5 Automatizaciones IA que toda PYME necesita en 2026
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Descarga nuestra guía práctica y descubre cómo implementar procesos automatizados hoy mismo sin necesidad de saber programar.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Ahorra hasta 15h semanales en tareas repetitivas', 'Mejora tu atención al cliente con agentes 24/7', 'Automatiza facturación y recordatorios de pago'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  required
                  placeholder="Tu mejor correo electrónico" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button 
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                >
                  Descargar Guía <Download size={20} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex items-center gap-4"
              >
                <div className="p-3 bg-green-500/20 rounded-full text-green-400">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">¡Guía enviada!</p>
                  <p className="text-gray-400 text-sm">Revisa tu bandeja de entrada en los próximos minutos.</p>
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            {/* Visual Book Mockup */}
            <div className="relative w-64 h-80 bg-gradient-to-br from-blue-900 to-black border-l-8 border-blue-600 rounded-r-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5),-10px_0_20px_rgba(37,99,235,0.2)] flex flex-col p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-xs font-bold text-blue-400 mb-auto uppercase tracking-widest">Ritealmar E-book</span>
              <h3 className="text-2xl font-black text-white leading-tight mb-4">Guía Práctica IA para PYMEs</h3>
              <div className="w-12 h-1 bg-blue-500 mb-8" />
              <p className="text-xs text-gray-400">Edición 2026</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
