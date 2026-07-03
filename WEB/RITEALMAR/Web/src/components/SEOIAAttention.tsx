import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Users, 
  Target, 
  Clock,
  Phone
} from 'lucide-react';

const THEME = {
  primary: '#F9AE07',
  dark: '#111827',
  light: '#F9FAFB',
  white: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
  border: '#E5E7EB',
};

export default function SEOIAAttention({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: THEME.dark }}>
      
      {/* NAVBAR SIMPLIFICADO */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b" style={{ borderColor: THEME.border }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <img src="/assets/logo ritealmar.jpg" alt="Ritealmar Logo" className="h-9 w-auto rounded" />
            <span className="text-xl font-black tracking-tighter">RITEALMAR</span>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-black uppercase hover:bg-[#F9AE07] hover:text-black transition-all"
          >
            <ArrowLeft size={14} /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* HERO DE SERVICIO */}
      <section className="pt-40 pb-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-black/10 bg-white"
          >
            Ventas y Soporte Inteligente
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            IA para <br />
            <span style={{ color: THEME.primary }}>Atención al Cliente</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            No dejes que ningún lead se enfríe. Implementamos agentes de IA que venden, resuelven dudas y agendan citas las 24 horas del día.
          </motion.p>
        </div>
      </section>

      {/* EXPLICACIÓN DETALLADA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <h3 className="text-2xl font-black mb-6 tracking-tight">Capacidades del Sistema</h3>
                <ul className="space-y-6">
                  {[
                    'Respuesta inmediata en WhatsApp, Instagram y Web.',
                    'Cualificación automática de clientes potenciales.',
                    'Agendamiento de citas en Google Calendar o Calendly.',
                    'Soporte multi-idioma con tono de marca personalizado.',
                    'Escalado a humano solo cuando es estrictamente necesario.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-bold text-gray-600">
                      <CheckCircle2 size={20} color={THEME.primary} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => window.location.href = 'mailto:info@ritealmar.es'}
                  className="w-full mt-12 bg-black text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#F9AE07] hover:text-black transition-all"
                >
                  Probar Demo de Agente
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-black tracking-tighter mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Convierte cada consulta en una oportunidad
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: 'Disponibilidad 24/7', 
                    desc: 'Tus clientes no esperan. La IA responde en segundos, incluso a las 3 de la mañana, asegurando que no se vayan a la competencia.',
                    icon: Clock
                  },
                  { 
                    title: 'Consistencia de Marca', 
                    desc: 'Cada respuesta sigue los valores y el tono de tu empresa, garantizando una experiencia de usuario impecable.',
                    icon: MessageSquare
                  },
                  { 
                    title: 'Cierre de Ventas Activo', 
                    desc: 'Nuestros agentes no solo informan, guían al usuario hacia la conversión o la reserva de presupuesto.',
                    icon: Target
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-[#F9FAFB] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F9AE07] transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-12 px-6 border-t border-gray-100 text-center">
        <p className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">
          © 2026 RITEALMAR ENGINEERING. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </footer>

    </div>
  );
}
