import React from 'react';
import { motion } from 'motion/react';
import { Search, Map, PenTool, Rocket, GraduationCap, RefreshCw } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    { num: "01", icon: Search, title: "Analizamos tu negocio", desc: "Detectamos cuellos de botella." },
    { num: "02", icon: Map, title: "Detectamos oportunidades", desc: "Buscamos el mayor ROI." },
    { num: "03", icon: PenTool, title: "Diseñamos la solución", desc: "Arquitectura tecnológica a medida." },
    { num: "04", icon: Rocket, title: "Desarrollamos e implementamos", desc: "Despliegue sin interrumpir tu día a día." },
    { num: "05", icon: GraduationCap, title: "Formamos a tu equipo", desc: "Capacitación total." },
    { num: "06", icon: RefreshCw, title: "Optimizamos resultados", desc: "Mejora continua mensual." }
  ];

  return (
    <section id="proceso" className="section-spacing bg-[#F1F5F9] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#3B82F6] uppercase mb-4 block">Nuestra metodología</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#020617] mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-[700px] mx-auto">
            Un proceso claro diseñado para minimizar riesgos y maximizar el retorno de inversión.
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora desktop */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gray-200">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#3B82F6]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Línea conectora móvil */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-[31px] w-0.5 bg-gray-200">
             <motion.div 
              className="absolute top-0 left-0 w-full bg-[#3B82F6]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10 pl-16 lg:pl-0">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center relative"
              >
                {/* En móvil el icono se mueve a la línea lateral */}
                <div className="absolute lg:relative -left-[4.5rem] lg:left-0 top-6 lg:top-0 w-16 h-16 bg-white border-2 border-[#3B82F6] rounded-full flex items-center justify-center text-[#3B82F6] mb-4 z-10 shadow-md">
                  <step.icon size={24} strokeWidth={1.5} />
                  <span className="absolute -bottom-3 bg-[#020617] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#020617] mt-4 lg:mt-0 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
