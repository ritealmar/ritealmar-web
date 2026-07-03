import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Link2, Code, Cloud, Database, FileText, Layout, MessageSquare, Terminal, Package, Globe } from 'lucide-react';

export const CapabilitiesSection = () => {
  const capabilities = [
    { name: 'Inteligencia artificial aplicada', icon: <Cpu size={18} /> },
    { name: 'Gestión de Inventarios (ALMAR)', icon: <Package size={18} /> },
    { name: 'Automatización de procesos', icon: <Workflow size={18} /> },
    { name: 'APIs e integraciones', icon: <Link2 size={18} /> },
    { name: 'Portales B2B / Extranets', icon: <Globe size={18} /> },
    { name: 'Desarrollo a medida', icon: <Code size={18} /> },
    { name: 'Sistemas cloud', icon: <Cloud size={18} /> },
    { name: 'Gestión documental', icon: <FileText size={18} /> },
    { name: 'Paneles y bases de datos', icon: <Database size={18} /> },
    { name: 'Chatbots y asistentes IA', icon: <MessageSquare size={18} /> },
    { name: 'Software operativo e industrial', icon: <Terminal size={18} /> },
    { name: 'Dashboards de control', icon: <Layout size={18} /> }
  ];

  return (
    <section className="py-24 bg-background relative border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-10">
        
        <div className="col-span-12 mb-16 text-center flex flex-col items-center max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary/30" />
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">¿Por qué Rite Almar?</span>
            <div className="w-8 h-px bg-primary/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight mb-6">
            Porque la IA no es una herramienta, es el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">nuevo motor de crecimiento.</span>
          </h2>
          <p className="text-text-secondary text-xl font-sans font-medium">
            Unimos la consultoría estratégica con el desarrollo técnico más puntero.
          </p>
        </div>

        <div className="col-span-12 flex flex-wrap justify-center gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-6 py-3 glass border border-white/5 rounded-full hover:border-primary/30 transition-all cursor-default group"
            >
              <span className="text-primary group-hover:scale-110 group-hover:text-accent transition-all">{cap.icon}</span>
              <span className="text-[12px] font-bold text-text-secondary uppercase tracking-widest group-hover:text-white transition-colors">
                {cap.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
