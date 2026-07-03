import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code, Zap, Cpu, LayoutTemplate } from 'lucide-react';

export default function Hero({ onOpenCalendly }: { onOpenCalendly?: () => void }) {
  const dynamicTexts = ["Automatiza", "Vende más", "Ahorra tiempo", "Responde mejor", "Crece con IA"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Inicializar particles.js si está disponible en window
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      (window as any).particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 900
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.35,
            "random": true
          },
          "size": {
            "value": 2.2,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 130,
            "color": "#22D3EE",
            "opacity": 0.18,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.4,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 180,
              "line_linked": {
                "opacity": 0.35
              }
            }
          }
        },
        "retina_detect": true
      });
    }

    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingTags = [
    { text: "IA", top: "15%", left: "10%", icon: Cpu },
    { text: "Automatización", top: "25%", right: "12%", icon: Zap },
    { text: "Webs", bottom: "35%", left: "12%", icon: LayoutTemplate },
    { text: "Apps", bottom: "25%", right: "15%", icon: Code },
  ];

  return (
    <section id="inicio" className="hero relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#050816]">
      
      {/* Contenedor para particles.js */}
      <div id="particles-js"></div>
      
      {/* Etiquetas flotantes sutiles */}
      <div className="hero-content absolute inset-0 pointer-events-none">
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            className="hidden xl:flex absolute items-center gap-2 px-3 py-1.5 bg-[#0B1026]/60 backdrop-blur-md border border-white/5 rounded-full shadow-lg pointer-events-auto"
            style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
          >
            <tag.icon size={14} className="text-[#22D3EE]/70" />
            <span className="text-sm font-medium text-gray-400">{tag.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="hero-content relative z-10 w-full max-w-[1000px] mx-auto text-center flex flex-col items-center">
        
        {/* Título Principal */}
        <h1 className="mb-6 text-white leading-tight font-display text-4xl md:text-5xl lg:text-[4.5rem] tracking-tight hero-title">
          <span className="text-[#3B82F6]">Soluciones IA</span>, automatización y desarrollo digital para hacer crecer tu empresa
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-400 max-w-[800px] mx-auto mb-12 leading-relaxed font-light hero-subtitle">
          Automatizamos tareas, mejoramos procesos y creamos sistemas que trabajan por ti.
        </p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto hero-buttons">
          <button 
            onClick={onOpenCalendly} 
            className="w-full sm:w-auto px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
          >
            Solicitar diagnóstico gratuito
          </button>
          <button 
            onClick={() => scrollTo('que-hacemos')} 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-[#3B82F6] text-white rounded-xl font-semibold transition-all"
          >
            Ver servicios
          </button>
        </div>

      </div>
    </section>
  );
}
