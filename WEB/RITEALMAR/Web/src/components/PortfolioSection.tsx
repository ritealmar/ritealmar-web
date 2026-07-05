import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: "ALMAR FSM",
      category: "SaaS",
      tag: "Caso real",
      description: "Control logístico automatizado con agentes IA.",
      problema: "Descoordinación en rutas y gestión manual de operarios.",
      solucion: "Sistema inteligente para asignar rutas en tiempo real.",
      resultado: "Mejora la trazabilidad operativa y reduce los tiempos de gestión diarios.",
      tecnologia: "React, Node.js, IA Generativa",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/almar-fsm"
    },
    {
      title: "Aurentia App",
      category: "App",
      tag: "Solución propia",
      description: "Centraliza IA con consultas y automatización de procesos.",
      problema: "Fragmentación de herramientas y pérdida de contexto en tareas.",
      solucion: "Hub único con agentes de IA integrados para consultas internas.",
      resultado: "Unifica la operativa diaria y agiliza la búsqueda de información corporativa.",
      tecnologia: "React Native, Cloudflare, OpenAI",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/aurentia-app"
    },
    {
      title: "RITECORE",
      category: "Cloud",
      tag: "Solución propia",
      description: "Soporte técnico 24/7 mediante asistentes inteligentes.",
      problema: "Sobrecarga del equipo de soporte con tickets repetitivos.",
      solucion: "Asistente virtual conversacional entrenado con la base de conocimientos.",
      resultado: "Permite filtrar y resolver incidencias básicas sin intervención humana.",
      tecnologia: "Voiceflow, Vercel, Supabase",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/ritecore"
    },
    {
      title: "Panel Central",
      category: "Dashboard",
      tag: "Demo funcional",
      description: "Control centralizado para gestión empresarial.",
      problema: "Datos de negocio dispersos en múltiples plataformas.",
      solucion: "Panel de control visual que integra distintas APIs en tiempo real.",
      resultado: "Facilita la toma de decisiones con métricas unificadas y claras.",
      tecnologia: "Next.js, Tailwind CSS, REST APIs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/panel-central"
    },
    {
      title: "STYLIO",
      category: "SaaS",
      tag: "Demo funcional",
      description: "SaaS All-in-one para gestión y reservas automatizadas.",
      problema: "Pérdida de clientes por procesos de reserva manuales o telefónicos.",
      solucion: "Portal de autogestión de citas con recordatorios automáticos.",
      resultado: "Optimiza la agenda y ayuda a reducir cancelaciones de última hora.",
      tecnologia: "Vite, TypeScript, PostgreSQL",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/stylio"
    },
    {
      title: "Facade AI Pro",
      category: "SaaS Enterprise",
      tag: "Prototipo",
      description: "Plataforma inteligente para análisis de fachadas.",
      problema: "Evaluación lenta y subjetiva de patologías en edificios.",
      solucion: "Sistema de visión artificial para detectar fisuras a partir de imágenes.",
      resultado: "Aporta precisión técnica y agiliza los informes de rehabilitación.",
      tecnologia: "Python, PyTorch, AWS",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/facade-ai-pro"
    },
    {
      title: "Rehab-IA Web",
      category: "Portal Web",
      tag: "Demo funcional",
      description: "Ecosistema digital corporativo para captación B2B.",
      problema: "Escasa captación de leads cualificados a través del entorno web.",
      solucion: "Landing pages optimizadas (SEO) con formularios dinámicos y chatbots.",
      resultado: "Mejora la conversión y profesionaliza la imagen corporativa.",
      tecnologia: "React, Framer Motion, Cloudflare",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/proyectos/rehab-ia-web"
    }
  ];

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'Caso real': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Solución propia': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Prototipo': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'; // Demo funcional
    }
  };

  return (
    <section id="casos" className="py-32 bg-[#0F172A] border-y border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF006E]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00D4FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40, backgroundPosition: '200% center' }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: '0% center' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
          >
            Sistemas, demos y soluciones que muestran lo que podemos construir
          </motion.h2>
          
          <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-8">
            <p className="text-sm md:text-base text-slate-400 italic">
              Algunos ejemplos son demos funcionales o soluciones internas creadas para mostrar capacidades técnicas. Los casos reales se presentan con contexto cuando el cliente autoriza su publicación.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col md:flex-row h-full"
            >
              <div className="relative md:w-2/5 aspect-video md:aspect-auto overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-transparent opacity-40 md:opacity-80" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getTagColor(project.tag)}`}>
                    {project.tag}
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col md:w-3/5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider border border-slate-700 px-2 py-1 rounded shrink-0">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-slate-300 font-medium mb-6 pb-4 border-b border-white/5">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <Target size={16} className="text-[#FF006E] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Problema</span>
                      <p className="text-xs text-slate-400">{project.problema}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Lightbulb size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Solución</span>
                      <p className="text-xs text-slate-400">{project.solucion}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Resultado Esperado</span>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.resultado}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Code size={14} />
                    <span className="text-[10px] font-mono tracking-widest uppercase truncate max-w-[120px] sm:max-w-[180px]">
                      {project.tecnologia}
                    </span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', project.link);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-[#00D4FF] font-bold text-xs uppercase tracking-wider hover:text-[#FF006E] transition-colors shrink-0"
                  >
                    Ver detalles <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
