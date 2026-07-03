import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: "ALMAR FSM",
      category: "SaaS",
      description: "Control logístico 24/7 automatizado con agentes IA.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/almar-fsm"
    },
    {
      title: "Aurentia App",
      category: "App",
      description: "Centraliza IA con consultas y automatización de procesos.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/aurentia-app"
    },
    {
      title: "RITECORE",
      category: "Cloud",
      description: "Soporte técnico 24/7 mediante asistentes inteligentes.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/ritecore"
    },
    {
      title: "Panel Central",
      category: "Dashboard",
      description: "Control centralizado total para gestión empresarial.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/panel-central"
    },
    {
      title: "STYLIO",
      category: "SaaS",
      description: "SaaS All-in-one para gestión y reservas automatizadas.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/stylio"
    },
    {
      title: "Facade AI Pro",
      category: "SaaS Enterprise",
      description: "Plataforma inteligente para análisis de fachadas y edificios.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/facade-ai-pro"
    },
    {
      title: "Rehab-IA Web",
      category: "Portal Web",
      description: "Ecosistema digital corporativo para captación B2B.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/rehab-ia-web"
    }
  ];

  return (
    <section id="casos" className="py-32 bg-[#0F172A] border-y border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF006E]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00D4FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Casos de Éxito y Proyectos
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sistemas reales operando en producción, multiplicando el rendimiento de empresas líderes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00D4FF] border border-[#00D4FF]/30">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="font-medium text-slate-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="space-y-3 mb-8 bg-[#0A1628] p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Antes</span>
                    <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                      <ArrowDownRight size={14} /> Tareas manuales
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Después</span>
                    <span className="text-sm font-mono text-[#00FF9D] flex items-center gap-1">
                      <ArrowUpRight size={14} /> 100% Automatizado
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', project.link);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#00D4FF] font-bold text-sm uppercase tracking-wider hover:text-[#FF006E] transition-colors mt-auto w-fit"
                >
                  Abrir Proyecto <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
