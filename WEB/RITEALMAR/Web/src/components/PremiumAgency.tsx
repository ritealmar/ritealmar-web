import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Bot, Cpu, Zap, BarChart3, Globe, ShieldCheck, 
  ChevronDown, MessageSquare, Workflow, Users, Sparkles,
  Search, CheckCircle2, Menu, X, Rocket, Database, Layers
} from 'lucide-react';

// --- UI SIMULATIONS COMPONENTS ---

const DashboardSimulation = () => (
  <div className="relative w-full max-w-2xl bg-neutral-900/80 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Ritealmar Intelligence</div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { label: 'Leads IA', value: '+42%', color: 'text-emerald-400' },
        { label: 'Tiempo Ahorrado', value: '-70%', color: 'text-blue-400' },
        { label: 'Coste Op.', value: '-35%', color: 'text-purple-400' }
      ].map((stat, i) => (
        <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl">
          <p className="text-[10px] text-white/40 mb-1 uppercase tracking-wider">{stat.label}</p>
          <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      {[
        { t: 'Analizando Lead: Dr. Smith', s: 'Cualificado - Alta Prioridad', w: 'w-[90%]', c: 'bg-emerald-500' },
        { t: 'Automatizando Facturación', s: 'Sincronizando con CRM...', w: 'w-[45%]', c: 'bg-blue-500' },
        { t: 'Chatbot WhatsApp', s: '12 conversaciones activas', w: 'w-[70%]', c: 'bg-purple-500' }
      ].map((task, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/80 font-medium">{task.t}</span>
            <span className="text-white/40 italic">{task.s}</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: task.w }} 
              transition={{ duration: 1.5, delay: i * 0.2 }}
              className={`h-full ${task.c}`} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export default function PremiumAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const sections = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'casos', label: 'Casos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const services = [
    {
      icon: Workflow,
      title: 'Automatización Inteligente',
      desc: 'Eliminamos las tareas repetitivas conectando tus herramientas actuales con IA para que tu equipo se centre en lo que importa.',
      benefit: 'Ahorro de hasta 15h semanales por empleado.'
    },
    {
      icon: MessageSquare,
      title: 'Agentes de IA & Chatbots',
      desc: 'Sistemas que no solo responden dudas, sino que venden, cualifican y agendan citas de forma autónoma 24/7.',
      benefit: 'Incremento del 40% en captación de leads.'
    },
    {
      icon: Globe,
      title: 'Webs Orientadas a Conversión',
      desc: 'Desarrollamos interfaces modernas integradas con IA para ofrecer experiencias personalizadas a cada visitante.',
      benefit: 'Mejora del 25% en la tasa de retención.'
    }
  ];

  const sectors = [
    { name: 'Clínicas & Salud', solution: 'Gestión de citas y seguimiento de pacientes automatizado.' },
    { name: 'Ecommerce', solution: 'Asistentes de compra y personalización de catálogo en tiempo real.' },
    { name: 'Inmobiliarias', solution: 'Cualificación automática de leads y tours virtuales guiados por IA.' },
    { name: 'Servicios B2B', solution: 'Automatización de prospección y respuesta a licitaciones.' }
  ];

  const faqs = [
    { q: '¿La IA sustituirá a mi equipo?', a: 'No, la IA es un multiplicador de capacidades. Nuestro enfoque es liberar a tu equipo de tareas administrativas para que aporten valor creativo y estratégico.' },
    { q: '¿Cuánto tiempo tarda la implementación?', a: 'Depende del proyecto, pero típicamente verás resultados tangibles en las primeras 4 semanas de implementación.' },
    { q: '¿Es segura la privacidad de mis datos?', a: 'Absolutamente. Implementamos soluciones locales o privadas que garantizan que tu información nunca se use para entrenar modelos públicos.' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white font-sans antialiased">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Cpu size={22} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Ritealmar</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest">{s.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contacto" className="hidden sm:flex px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all">
              Diagnóstico Gratuito
            </a>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-32 px-12 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="text-4xl font-bold" onClick={() => setIsMenuOpen(false)}>{s.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
          
          <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-8">
                <Sparkles size={14} /> Ingeniería de IA para el mundo real
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
                La IA no es el futuro. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Es tu ventaja hoy.</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-xl">
                Ayudamos a empresas a implementar soluciones de IA que automatizan operaciones, captan clientes y reducen costes. Resultados tangibles, sin tecnicismos innecesarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#contacto" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all group">
                  Diagnóstico Gratuito <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#servicios" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all">
                  Ver Soluciones
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-12"
            >
              <DashboardSimulation />
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 hidden xl:block bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Automatización Live</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Sincronizando Leads...</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-700" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-purple-600 flex items-center justify-center text-[10px] font-bold">+12</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOGOS / SOCIAL PROOF */}
        <section className="py-20 border-y border-white/5">
          <div className="container mx-auto max-w-7xl px-6 flex flex-wrap justify-center gap-x-20 gap-y-10 opacity-30 grayscale invert">
            <span className="text-2xl font-black italic tracking-tighter">TECH_CORP</span>
            <span className="text-2xl font-black italic tracking-tighter">GLOBAL_LOGISTICS</span>
            <span className="text-2xl font-black italic tracking-tighter">SAAS_PLATFORM</span>
            <span className="text-2xl font-black italic tracking-tighter">MED_CENTER</span>
            <span className="text-2xl font-black italic tracking-tighter">FINANCE_HUB</span>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="py-32 lg:py-48 bg-white/[0.01]">
          <div className="container mx-auto max-w-7xl px-6 text-center mb-24">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6">Lo que hacemos</p>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Implementación de IA de Extremo a Extremo</h2>
          </div>

          <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <s.icon size={30} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8">{s.desc}</p>
                <div className="pt-8 border-t border-white/5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  ROI: {s.benefit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOLUTIONS BY SECTOR */}
        <section id="soluciones" className="py-32 lg:py-48">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6">Soluciones Verticales</p>
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-10">IA adaptada a <br /> tu industria.</h2>
                <p className="text-xl text-white/50 leading-relaxed mb-12">
                  No creemos en soluciones de "talla única". Entendemos los retos específicos de cada sector para construir herramientas que realmente marquen la diferencia.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {sectors.map((s, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-lg mb-2">{s.name}</h4>
                      <p className="text-sm text-white/40">{s.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Visual Simulation of a Sector Solution */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Bot size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="font-bold">Asistente Clínico IA</p>
                      <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Cualificando Cita...</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-neutral-800/50 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Hola, me gustaría agendar una limpieza dental para la semana que viene.</p>
                    </div>
                    <div className="bg-purple-600/20 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] border border-purple-500/20">
                      <p className="text-sm">¡Perfecto! Tengo disponibilidad el martes a las 10:00 o el jueves a las 16:00. ¿Cuál prefieres?</p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest">Martes 10:00</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest">Jueves 16:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="proceso" className="py-32 lg:py-48 bg-white/[0.01]">
          <div className="container mx-auto max-w-7xl px-6 text-center mb-24">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6">El Método</p>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">De la Idea al ROI en 4 Pasos</h2>
          </div>

          <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Auditoría', d: 'Analizamos tus flujos actuales e identificamos fugas de tiempo y dinero.' },
              { n: '02', t: 'Diseño', d: 'Creamos la arquitectura de IA que mejor se adapta a tus necesidades.' },
              { n: '03', t: 'Despliegue', d: 'Implementamos la solución y la conectamos con tus herramientas.' },
              { n: '04', t: 'Escalado', d: 'Monitorizamos resultados y optimizamos para máximo rendimiento.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-black text-white/5 mb-6">{step.n}</div>
                <h4 className="text-xl font-bold mb-4">{step.t}</h4>
                <p className="text-white/40 leading-relaxed text-sm">{step.d}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute top-12 -right-4 text-white/10" />}
              </div>
            ))}
          </div>
        </section>

        {/* METRICS / RESULTS */}
        <section id="casos" className="py-32 lg:py-48">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
              
              <div className="grid lg:grid-cols-3 gap-16 text-center lg:text-left relative z-10">
                <div className="lg:col-span-1">
                  <h2 className="text-5xl font-bold tracking-tight mb-8">Resultados que se pueden medir.</h2>
                  <p className="text-white/40">No instalamos IA por moda. Instalamos IA para mejorar el balance de tu empresa.</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12 lg:pl-12 lg:border-l border-white/5">
                  {[
                    { v: '+42%', l: 'Conversión de Leads', d: 'Logrado en empresas de servicios inmobiliarios.' },
                    { v: '-70%', l: 'Tiempo Administrativo', d: 'Automatizando procesamiento de facturas y pedidos.' },
                    { v: '24/7', l: 'Disponibilidad de Atención', d: 'Con agentes de IA que resuelven el 85% de dudas.' },
                    { v: '-35%', l: 'Coste por Adquisición', d: 'Optimizando el flujo de ventas con cualificación IA.' }
                  ].map((m, i) => (
                    <div key={i}>
                      <p className="text-5xl font-black text-purple-400 mb-2 tracking-tighter">{m.v}</p>
                      <p className="text-xl font-bold mb-4">{m.l}</p>
                      <p className="text-sm text-white/40">{m.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 lg:py-48">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6">Preguntas Comunes</p>
              <h2 className="text-5xl font-bold tracking-tight">Resolviendo dudas</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-8 pb-8 text-white/50 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="py-32 lg:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.05),_transparent_70%)] -z-10" />
          
          <div className="container mx-auto max-w-7xl px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 italic">¿Hablamos de tu <br /> próximo sistema?</h2>
              <p className="text-2xl text-white/50">Cuéntanos tu reto operativo y te daremos una visión honesta de cómo la IA puede resolverlo.</p>
            </div>

            <div className="max-w-xl mx-auto">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Nombre</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:bg-white/10 transition-all" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Empresa</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:bg-white/10 transition-all" placeholder="Mi Empresa S.L." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:bg-white/10 transition-all" placeholder="juan@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Reto de IA</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:bg-white/10 transition-all min-h-32" placeholder="Descríbenos brevemente qué proceso quieres mejorar..." />
                </div>
                <button className="w-full py-6 rounded-full bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-black/20">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Cpu size={24} className="text-purple-500" />
            <span className="text-xl font-bold tracking-tight">Ritealmar</span>
          </div>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">© 2026 Ritealmar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
