import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Instagram, Facebook, Calendar } from 'lucide-react';

export default function RestaurantDemo() {
  // Disable default scroll behavior of the app, just in case
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F9F6F0] font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-black tracking-[0.2em] uppercase text-white">
          YUZU <span className="text-[#D4AF37]">.</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.3em] uppercase text-white/70">
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#carta" className="hover:text-white transition-colors">Carta</a>
          <a href="#locales" className="hover:text-white transition-colors">Locales</a>
        </div>
        <button className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-black tracking-[0.2em] uppercase rounded-none hover:bg-white transition-colors flex items-center gap-2">
          <Calendar size={14} /> Reservar
        </button>
      </header>

      {/* HERO SECTION - Sibuya Style (Dark, Immersive) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000" 
            alt="Sushi background"
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-[10px] md:text-xs font-bold tracking-[1em] text-[#D4AF37] uppercase mb-8 ml-[1em]">
              Auténtico Sushi Urbano
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-white">
              Siente <br />
              <span className="text-transparent text-stroke italic font-light opacity-50">El Umami</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT / EXPERIENCE - Waraku Style (Elegant, Vertical text, Minimal) */}
      <section id="experiencia" className="py-32 md:py-48 relative">
        <div className="container mx-auto px-8 max-w-7xl grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=1000" 
                alt="Sushi Platter"
                className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#111] flex items-center justify-center p-8 border border-white/10 hidden md:flex">
              <span className="text-[#D4AF37] text-2xl font-serif italic text-center leading-relaxed">
                "El arte de la precisión."
              </span>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Filosofía Yuzu</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Una fusión entre lo <strong className="font-black">tradicional</strong> y lo <strong className="font-black">contemporáneo</strong>.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Nacimos con la idea de revolucionar el concepto de sushi bar. No somos solo un restaurante, somos un espacio donde la gastronomía japonesa se encuentra con el ritmo de la ciudad.
            </p>
            <button className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors group pt-8">
              Descubrir nuestra historia 
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <ArrowRight size={14} />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Vertical Japanese Text Decoration */}
        <div className="absolute top-1/4 right-8 hidden xl:block opacity-20 pointer-events-none">
          <p className="text-5xl font-black text-transparent text-stroke-white" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
            寿司の芸術
          </p>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="carta" className="py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Nuestra Carta</h2>
              <p className="text-white/50 tracking-[0.2em] text-xs uppercase">Platos estrella que definen nuestra esencia.</p>
            </div>
            <button className="px-8 py-4 border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase transition-all">
              Ver Carta Completa
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nigiri Flamed", desc: "Salmón flambeado, mayo trufada, cebollino.", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=600" },
              { title: "Yuzu Roll", desc: "Atún rojo, aguacate, coronado con pez mantequilla.", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600" },
              { title: "Bao Panceta", desc: "Panceta glaseada, encurtidos, salsa hoisin.", img: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden h-96 mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold uppercase tracking-widest">{item.title}</h3>
                  <div className="w-6 h-[1px] bg-[#D4AF37]" />
                </div>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS / RESERVATION CTA */}
      <section id="locales" className="py-32 md:py-48">
        <div className="container mx-auto px-8 max-w-7xl text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Tu Mesa <br /> Te Espera
          </h2>
          <div className="flex justify-center mb-16">
            <button className="px-12 py-5 bg-[#D4AF37] text-black text-sm font-black tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all duration-300">
              Hacer Reserva
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto border-t border-white/10 pt-16 text-left">
            <div>
              <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">Local Madrid</h4>
              <p className="text-white/70 font-light mb-2 flex items-center gap-2"><MapPin size={16} /> C. de Velázquez, 45, Madrid</p>
              <p className="text-white/70 font-light flex items-center gap-2"><Phone size={16} /> +34 91 123 45 67</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">Horario</h4>
              <p className="text-white/70 font-light mb-2">Lunes a Domingo</p>
              <p className="text-white/70 font-light">13:30 - 16:30 | 20:30 - 23:30</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-white/5">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-[0.2em] uppercase text-white">
            YUZU <span className="text-[#D4AF37]">.</span>
          </div>
          <div className="flex gap-6">
            <Instagram className="text-white/50 hover:text-white cursor-pointer transition-colors" size={20} />
            <Facebook className="text-white/50 hover:text-white cursor-pointer transition-colors" size={20} />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            © 2026 Yuzu Sushi Bar. Design by Ritealmar.
          </p>
        </div>
      </footer>
    </div>
  );
}
