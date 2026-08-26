import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code, Headphones } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Auditoría Gratuita",
      desc: "Analizamos tus procesos actuales y calculamos exactamente cuántas horas y dinero puedes ahorrar."
    },
    {
      icon: PenTool,
      title: "Diseño de la Solución",
      desc: "Creamos un mapa visual de cómo funcionará tu empresa de forma autónoma con nuestras soluciones IA."
    },
    {
      icon: Code,
      title: "Desarrollo e Integración",
      desc: "Implementamos la IA en tus herramientas (WhatsApp, Excel, CRM) sin que tengas que aprender programas nuevos."
    },
    {
      icon: Headphones,
      title: "Soporte y Optimización",
      desc: "No te dejamos solo. Supervisamos que todo funcione y optimizamos a medida que creces."
    }
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00D4FF]/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Cómo Trabajamos
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Un proceso claro, ágil y enfocado en resultados desde el primer día.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#00D4FF] via-[#FF006E] to-[#00D4FF] opacity-30 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center group"
              >
                {/* Number/Icon Node */}
                <div className="mx-auto w-24 h-24 bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex flex-col items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,0,110,0.4)] group-hover:border-[#FF006E]">
                  <span className="text-[#00D4FF] font-mono text-sm mb-1 group-hover:text-[#FF006E] transition-colors">0{i + 1}</span>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-glow-blue transition-all">{step.title}</h3>
                <p className="font-medium text-slate-200 leading-relaxed text-base max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
