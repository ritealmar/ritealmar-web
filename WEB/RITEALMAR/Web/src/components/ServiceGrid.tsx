import React from 'react';
import { motion } from 'motion/react';
import { Settings2, Diamond, LayoutGrid, ArrowRight } from 'lucide-react';

export default function ServiceGrid() {
  const services = [
    {
      icon: Settings2,
      title: "Automatización Operativa",
      desc: "Flujos de trabajo inteligentes, integración con tus herramientas actuales y eliminación de cuellos de botella.",
      link: "/automatizacion-pymes",
      accent: "#7B5EA7",
      bgHover: "hover:border-[#7B5EA7]/30"
    },
    {
      icon: Diamond,
      title: "IA Aplicada al Negocio",
      desc: "Soporte 24/7, análisis predictivo, y modelos de lenguaje entrenados específicamente en tu sector.",
      link: "/atencion-cliente-ia",
      accent: "#3BBFCC",
      bgHover: "hover:border-[#3BBFCC]/30"
    },
    {
      icon: LayoutGrid,
      title: "Arquitectura de Datos",
      desc: "Control absoluto, dashboards en tiempo real, y zero dependencia de sistemas cerrados de terceros.",
      link: "/procesos-administrativos",
      accent: "#C9A96E",
      bgHover: "hover:border-[#C9A96E]/30"
    }
  ];

  return (
    <section id="servicios" className="section-spacing-lg bg-[#0E0E1A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="label-tech block mb-4">Especialización</span>
          <h2>Tres áreas.<br/>Un sistema integrado.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <a 
                href={svc.link}
                className={`block h-full glass-card p-10 flex flex-col transition-all duration-500 ${svc.bgHover} group cursor-pointer`}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-colors duration-500"
                  style={{ backgroundColor: `${svc.accent}15` }}
                >
                  <svc.icon size={28} color={svc.accent} />
                </div>
                
                <h3 className="text-2xl mb-4 text-[#F0EDE8]">{svc.title}</h3>
                <p className="text-[#9A97A8] mb-10 flex-1 leading-relaxed">{svc.desc}</p>
                
                <div 
                  className="flex items-center gap-2 font-medium text-sm transition-colors duration-300"
                  style={{ color: svc.accent }}
                >
                  Ver servicio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
