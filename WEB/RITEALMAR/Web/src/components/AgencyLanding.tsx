import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Bot, Cpu, Zap, BarChart3, Globe, ShieldCheck, 
  ChevronDown, MessageSquare, Workflow, Users, Sparkles,
  Search, CheckCircle2, Menu, X, Rocket, Database, Layers,
  Terminal, Code2, LineChart, ExternalLink
} from 'lucide-react';

// --- UI SIMULATIONS (CSS-ONLY / NO IMAGES) ---

const AIProcessSimulation = () => (
  <div className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
    
    <div className="flex items-center gap-3 mb-10">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
      </div>
      <div className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-black">Core Engine v2.4</div>
    </div>

    <div className="space-y-6">
      <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Terminal size={18} /></div>
        <div className="flex-1 space-y-2">
          <p className="text-xs font-bold text-white/80">Analizando Datos de Cliente</p>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-purple-500" />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Code2 size={18} /></div>
        <div className="flex-1 space-y-2">
          <p className="text-xs font-bold text-white/80">Generando Flujo de Automatización</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }} className="h-1 w-4 bg-blue-500 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 p-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
        <div className="p-3 bg-white/10 rounded-xl text-white"><Rocket size={18} /></div>
        <div className="flex-1">
          <p className="text-xs font-black text-white uppercase tracking-widest mb-1">Resultado Optimizado</p>
          <p className="text-[10px] text-purple-200">Eficiencia incrementada en un 84%</p>
        </div>
        <CheckCircle2 size={18} className="text-lime-400" />
      </div>
    </div>
  </div>
);

export default function AgencyLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeApp, setActiveApp] = useState<number | null>(null);

  useEffect(() => {
    if (activeApp !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeApp]);

  const PROJECTS_DATA = [
    {
      id: 0,
      title: "ALMAR",
      category: "Gestión de Almacén",
      url: "https://almar-fsm.llargo34.workers.dev",
      image: "https://image.thum.io/get/width/800/crop/600/https://almar-fsm.llargo34.workers.dev",
      description: "Sistema integral de gestión de almacenes (WMS) y Field Service Management. Control de inventario en tiempo real, asignación dinámica de operarios y optimización logística. Interfaz de alto rendimiento para operativa diaria."
    },
    {
      id: 1,
      title: "Aurenta App",
      category: "IA para Call Centers",
      url: "https://aurenta-app.pages.dev/",
      image: "https://image.thum.io/get/width/800/crop/600/https://aurenta-app.pages.dev/",
      description: "Plataforma impulsada por IA para asistencia en tiempo real a agentes. Transcripción automática de llamadas, respuestas sugeridas en vivo y panel de métricas de rendimiento para elevar la retención de clientes."
    },
    {
      id: 2,
      title: "RITECORE",
      category: "Motor Conversacional",
      url: "https://altri-pro.pages.dev/",
      image: "https://image.thum.io/get/width/800/crop/600/https://altri-pro.pages.dev/",
      description: "Chatbot inteligente diseñado para automatizar soporte técnico, cualificar leads y guiar ventas usando procesamiento de lenguaje natural avanzado (NLP). Totalmente autónomo 24/7."
    },
    {
      id: 3,
      title: "Panel Central",
      category: "Dashboard Operativo",
      url: "https://53b7d556.web-altri.pages.dev/",
      image: "https://image.thum.io/get/width/800/crop/600/https://53b7d556.web-altri.pages.dev/",
      description: "Panel de control centralizado y plataforma core. Integra todas las métricas operativas de la empresa, supervisión de agentes de IA, gestión de usuarios, roles y analítica avanzada en un dashboard futurista."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="container mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:scale-105 transition-transform">
              <Cpu size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">Ritealmar</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 mt-1">Sistemas IA</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            {['Servicios', 'Soluciones', 'Proceso', 'Casos'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-white transition-colors">{i}</a>
            ))}
          </nav>

          <a href="#contacto" className="hidden sm:block px-8 py-3.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95">
            Diagnóstico IA
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-56 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] -z-10" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] -z-10" />
          
          <div className="container mx-auto max-w-7xl px-8 grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-purple-400 mb-10">
                <Sparkles size={14} /> Ingeniería de IA Generativa
              </div>
              <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-[-0.07em] mb-12">
                Menos <br /> <span className="text-white/20 italic">Humo.</span> <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Más IA.</span>
              </h1>
              <p className="text-2xl text-white/40 leading-relaxed max-w-xl mb-14 font-medium">
                Implementamos soluciones de inteligencia artificial que realmente impactan en tu cuenta de resultados. Automatización, agentes y datos.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#contacto" className="flex items-center justify-center gap-4 px-12 py-6 rounded-full bg-purple-600 text-white text-lg font-black hover:bg-purple-700 transition-all shadow-2xl shadow-purple-600/20 group">
                  Empezar Proyecto <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#servicios" className="flex items-center justify-center gap-4 px-12 py-6 rounded-full bg-white/5 border border-white/10 text-lg font-black hover:bg-white/10 transition-all">
                  Nuestros Servicios
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              <AIProcessSimulation />
            </motion.div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto max-w-7xl px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center lg:text-left">
            {[
              { v: '+42%', l: 'Leads Cualificados', d: 'En sector inmobiliario' },
              { v: '-70%', l: 'Tiempo de Gestión', d: 'Procesamiento de facturas' },
              { v: '24/7', l: 'Atención Activa', d: 'Agentes conversacionales' },
              { v: '-35%', l: 'Coste Operativo', d: 'Automatización de flujos' }
            ].map((m, i) => (
              <div key={i} className="space-y-3">
                <p className="text-6xl font-black tracking-tighter text-purple-400">{m.v}</p>
                <p className="text-sm font-black uppercase tracking-widest">{m.l}</p>
                <p className="text-xs text-white/30 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="py-32 lg:py-56">
          <div className="container mx-auto max-w-7xl px-8 mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-6">Expertise</p>
            <h2 className="text-6xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9]">
              Sistemas que <br /> <span className="text-white/20">curran por ti.</span>
            </h2>
          </div>

          <div className="container mx-auto max-w-7xl px-8 grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
            {[
              { i: Workflow, t: 'Automatización & CRM', d: 'Eliminamos el "copiar y pegar". Conectamos tus herramientas para que la info fluya sola.' },
              { i: Bot, t: 'Agentes IA 24/7', d: 'Chatbots inteligentes en WhatsApp y Web que venden y resuelven dudas en segundos.' },
              { i: Database, t: 'Inteligencia de Datos', d: 'Convertimos tus PDFs, facturas y excels en información lista para decidir.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-black p-16 group hover:bg-purple-600 transition-all duration-700">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                  <s.i size={28} className="text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-6">{s.t}</h3>
                <p className="text-xl text-white/40 leading-relaxed group-hover:text-white/80 transition-colors">{s.d}</p>
                <div className="mt-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300">
                  <ArrowRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS / CASOS */}
        <section id="casos" className="py-32 lg:py-56 border-t border-white/5 relative">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] -z-10" />
          
          <div className="container mx-auto max-w-7xl px-8 mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-6">Proyectos Activos</p>
            <h2 className="text-6xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] max-w-2xl">
              Nuestras <br /> <span className="text-white/20">Aplicaciones.</span>
            </h2>
          </div>

          <div className="container mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS_DATA.map((proj) => (
              <div 
                key={proj.id} 
                onClick={() => setActiveApp(proj.id)}
                className="group relative bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="h-64 lg:h-80 relative overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-8 left-8 z-20">
                    <span className="px-5 py-2.5 bg-black/80 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.3em] text-white rounded-full border border-white/10">
                      {proj.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 lg:p-12 flex-1 flex flex-col relative z-20">
                  <h3 className="text-4xl font-black tracking-tight mb-4">{proj.title}</h3>
                  <div className="mt-auto flex items-center justify-between text-white/30 group-hover:text-white transition-colors duration-300">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ver detalles del sistema</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL DE PROYECTOS */}
        <AnimatePresence>
          {activeApp !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveApp(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setActiveApp(null)}
                  className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                  <img 
                    src={PROJECTS_DATA[activeApp].image} 
                    alt={PROJECTS_DATA[activeApp].title}
                    className="w-full h-full object-cover object-top opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#050505]" />
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[#050505] overflow-y-auto">
                  <span className="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase mb-4 block">
                    {PROJECTS_DATA[activeApp].category}
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-8">
                    {PROJECTS_DATA[activeApp].title}
                  </h3>
                  
                  <p className="text-lg text-white/50 leading-relaxed mb-12">
                    {PROJECTS_DATA[activeApp].description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={PROJECTS_DATA[activeApp].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-[0.1em] text-[11px] rounded-full transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.5)] hover:-translate-y-1"
                    >
                      Abrir Aplicación <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CONTACT FORM */}
        <section id="contacto" className="py-32 lg:pb-56 px-8">
          <div className="container mx-auto max-w-7xl bg-white rounded-[4rem] p-12 lg:p-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(168,85,247,0.3)]">
            <div className="text-black space-y-12 flex flex-col justify-center">
              <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-purple-400">
                <Zap size={40} />
              </div>
              <h2 className="text-6xl lg:text-8xl font-black tracking-[-0.06em] leading-[0.9]">
                ¿Hablamos de <br /> tu próximo <br /> <span className="italic opacity-30">sistema?</span>
              </h2>
              <div className="space-y-6">
                {['Análisis sin coste', 'Propuesta técnica real', 'IA enfocada a resultados'].map(t => (
                  <div key={t} className="flex items-center gap-4 text-xl font-black opacity-60 italic">
                    <CheckCircle2 size={24} /> {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black p-12 lg:p-16 rounded-[3rem] flex flex-col justify-center">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-purple-500 focus:bg-white/10 transition-all" placeholder="Tu Nombre" />
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-purple-500 focus:bg-white/10 transition-all" placeholder="Tu Empresa" />
                <textarea className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-8 text-white outline-none focus:border-purple-500 focus:bg-white/10 transition-all min-h-40" placeholder="¿Cuál es tu reto?" />
                <button className="w-full py-6 rounded-full bg-purple-600 text-white text-xl font-black hover:bg-white hover:text-black transition-all shadow-2xl shadow-purple-600/30 active:scale-95">
                  Solicitar Consultoría <Zap size={20} className="inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 opacity-40">
        <div className="container mx-auto max-w-7xl px-8 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <Cpu size={24} />
            <span className="text-xl font-black tracking-tighter">Ritealmar</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em]">© 2026 Ritealmar IA Aplicada</p>
        </div>
      </footer>
    </div>
  );
}
