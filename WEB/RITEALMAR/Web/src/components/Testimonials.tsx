import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Hemos reducido un 40% el tiempo en tareas administrativas diarias.",
      author: "Carlos Mendoza",
      role: "Propietario de Clínica",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Nuestra facturación creció un 35% este trimestre gracias al CRM.",
      author: "Elena Rodríguez",
      role: "Directora Comercial",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Es literalmente como tener 3 empleados más trabajando gratis las 24h.",
      author: "Marcos Silva",
      role: "Dueño de Barbería",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,110,0.05)_0%,_transparent_60%)] pointer-events-none -z-0" />
      <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-[#00D4FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Empresas que ya han <span className="text-white">evolucionado</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-10 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#00D4FF]/20 transition-colors" />
              <p className="text-xl font-medium text-slate-200 leading-relaxed mb-10 relative z-10 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={t.avatar} 
                  alt={`Avatar del cliente ${t.author}`}
                  loading="lazy"
                  decoding="async"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-full border-2 border-[#FF006E] object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-[#00D4FF] text-sm font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
