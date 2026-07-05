import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Database,
  FileSearch,
  Globe2,
  Mail,
  Menu,
  MessageSquareText,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-4 group">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white transition-transform group-hover:rotate-12">
        <BrainCircuit size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tighter leading-none">Ritealmar</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mt-1">IA Aplicada</span>
      </div>
    </a>
  );
}

function FloatingAutomation() {
  const items = [
    [MessageSquareText, "Cliente pregunta", "La IA responde y cualifica"],
    [MousePointerClick, "Formulario enviado", "Lead guardado y clasificado"],
    [Mail, "Aviso automático", "El equipo recibe la oportunidad"],
  ];

  return (
    <div className="relative w-full max-w-lg">
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-lime-400/20 blur-3xl rounded-[3rem] opacity-50"></div>
      
      <div className="relative rounded-[2.5rem] border border-neutral-200 bg-white p-4 shadow-2xl">
        <div className="rounded-[2.2rem] bg-black p-8 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Sistema Activo</p>
              <p className="text-2xl font-black tracking-tight">Automatización</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 ring-1 ring-lime-400/20">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse"></span>
              <span className="text-[10px] font-black text-lime-400 uppercase tracking-widest">Live Now</span>
            </div>
          </div>

          <div className="space-y-4">
            {items.map(([Icon, title, desc]) => (
              <div key={title as string} className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.07]">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-400 text-black shadow-lg shadow-lime-400/20">
                  <Icon size={20} />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-sm leading-none">{title as string}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{desc as string}</p>
                </div>
                <CheckCircle2 className="ml-auto h-5 w-5 text-lime-400" />
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-lime-300 to-lime-400 p-8 text-black shadow-xl shadow-lime-400/20">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Tiempo recuperado / mes</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-6xl font-black tracking-tighter">64,5</span>
              <span className="text-2xl font-black opacity-60 uppercase tracking-tighter">horas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-2xl border border-neutral-100 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center">
            <Zap className="text-black" size={24} />
          </div>
          <div>
            <p className="text-3xl font-black tracking-tighter leading-none">+ leads</p>
            <p className="text-xs font-bold text-neutral-400 mt-1 uppercase tracking-widest">Escalabilidad real</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  { icon: Workflow, title: "Automatización & CRM", desc: "Elimina tareas manuales y conecta tus procesos comerciales en un solo flujo." },
  { icon: Bot, title: "Chatbots IA Avanzados", desc: "Asistentes que no solo responden, sino que venden y cualifican leads 24/7." },
  { icon: FileSearch, title: "Análisis de Documentos", desc: "Procesa facturas, PDFs y contratos extrayendo información clave al instante." },
  { icon: Globe2, title: "Ecosistemas Web IA", desc: "Landings optimizadas con formularios inteligentes que aprenden de tus clientes." },
  { icon: Database, title: "Integración de Datos", desc: "Unificamos tus herramientas para que tomes decisiones basadas en información limpia." },
  { icon: Target, title: "Consultoría Estratégica", desc: "Analizamos dónde la IA genera el máximo retorno para tu modelo de negocio." },
];

export default function BrutalLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-black selection:bg-lime-400 selection:text-black font-sans antialiased overflow-x-hidden">
      
      {/* HEADER - Increased Padding and Transparency */}
      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-black/5 bg-[#f8f7f3]/80 backdrop-blur-2xl">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 py-8 flex items-center justify-between">
          <Logo />
          
          <nav className="hidden lg:flex items-center gap-12">
            {["IA", "Servicios", "Casos", "Método", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#contacto" className="hidden sm:flex rounded-full bg-black px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-lime-400 hover:text-black transition-all shadow-xl shadow-black/5 hover:scale-105 active:scale-95">
              Solicitar Proyecto
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-3 rounded-full hover:bg-neutral-200 transition-colors">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#f8f7f3] pt-32 px-12 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-5xl font-black tracking-tighter">
              {["IA", "Servicios", "Casos", "Método", "Contacto"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-32">
        {/* HERO - Massive Vertical Padding, Improved Breathing Room */}
        <section id="ia" className="relative py-24 lg:py-48 flex items-center min-h-[80vh]">
          <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/50 px-6 py-3 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
                <Sparkles size={14} className="text-lime-500" /> IA Aplicada a Resultados Reales
              </div>
              
              <h1 className="text-[5rem] sm:text-[7rem] lg:text-[8.5rem] font-black leading-[0.85] tracking-[-0.07em]">
                Escala tu <br />
                <span className="text-lime-500">Negocio</span> con <br />
                Inteligencia.
              </h1>
              
              <p className="text-2xl font-medium text-neutral-500 leading-relaxed max-w-xl">
                Automatizamos los procesos que te frenan. Conectamos tus herramientas y creamos sistemas de IA que trabajan por ti.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a href="#contacto" className="flex items-center justify-center gap-4 rounded-full bg-black px-12 py-6 text-xl font-black text-white hover:bg-lime-400 hover:text-black transition-all hover:scale-105 shadow-2xl shadow-black/10">
                  Empezar ahora <ArrowRight size={24} />
                </a>
                <a href="#servicios" className="flex items-center justify-center gap-4 rounded-full border-2 border-black px-12 py-6 text-xl font-black hover:bg-white transition-all">
                  Explorar Servicios
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }} 
              animate={{ opacity: 1, scale: 1, x: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <FloatingAutomation />
            </motion.div>
          </div>
        </section>

        {/* LOGOS - More whitespace and subtler */}
        <section className="bg-black py-16">
          <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 text-[11px] font-black uppercase tracking-[0.4em] text-neutral-600">
              {["Pymes", "Clínicas", "Asesorías", "Ecommerce", "Ventas", "Soporte"].map((l) => (
                <span key={l} className="hover:text-white transition-colors cursor-default">{l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES - Clean Grid, High Spacing */}
        <section id="servicios" className="py-32 lg:py-56 bg-white">
          <div className="container mx-auto max-w-[1400px] px-8 lg:px-16">
            <div className="max-w-3xl mb-32 space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Nuestro Expertise</p>
              <h2 className="text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9]">
                Tecnología que <br /> <span className="text-neutral-300">crece contigo.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100 overflow-hidden rounded-[3rem]">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-16 group hover:bg-lime-300 transition-all duration-500 cursor-default">
                  <div className="h-16 w-16 rounded-2xl bg-neutral-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                    <s.icon size={28} className="text-black" />
                  </div>
                  <h3 className="mt-12 text-4xl font-black tracking-tighter leading-none">{s.title}</h3>
                  <p className="mt-6 text-xl text-neutral-500 group-hover:text-black/80 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                  <div className="mt-12 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300">
                    Saber más <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION - Full Impact */}
        <section id="contacto" className="py-24 lg:pb-48 px-8 lg:px-16">
          <div className="container mx-auto max-w-[1400px] bg-lime-300 rounded-[4rem] overflow-hidden grid lg:grid-cols-2 shadow-[0_50px_100px_-20px_rgba(163,230,53,0.3)]">
            
            <div className="p-16 lg:p-32 flex flex-col justify-center space-y-12">
              <div className="h-20 w-20 bg-black rounded-3xl flex items-center justify-center text-lime-400">
                <Rocket size={36} />
              </div>
              <h2 className="text-6xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] text-black">
                ¿Listo para <br /> automatizar <br /> tu éxito?
              </h2>
              <div className="space-y-6">
                {["Diagnóstico Gratuito", "Soluciones a Medida", "Resultados Medibles"].map((t) => (
                  <div key={t} className="flex items-center gap-5 text-2xl font-black text-black/70">
                    <CheckCircle2 size={28} className="text-black" /> {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black p-16 lg:p-32 flex items-center">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center space-y-8"
                  >
                    <div className="h-24 w-24 bg-lime-300 rounded-full flex items-center justify-center mx-auto text-black shadow-2xl shadow-lime-300/30">
                      <CheckCircle2 size={56} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-5xl font-black text-white tracking-tighter italic">RECIBIDO</h3>
                      <p className="text-xl text-neutral-400">Estamos analizando tu caso. Te contactamos en breve.</p>
                    </div>
                    <button onClick={() => setFormStatus('idle')} className="text-lime-300 font-bold uppercase tracking-widest text-[10px] hover:underline underline-offset-8">Enviar otro mensaje</button>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormStatus('sending'); setTimeout(() => setFormStatus('success'), 1500); }} className="w-full grid gap-6 sm:grid-cols-2">
                    <input className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-lime-300 focus:bg-white/10 transition-all placeholder:text-neutral-600" placeholder="Tu Nombre" required />
                    <input className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-lime-300 focus:bg-white/10 transition-all placeholder:text-neutral-600" placeholder="Tu Empresa" required />
                    <input className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-lime-300 focus:bg-white/10 transition-all placeholder:text-neutral-600 sm:col-span-2" placeholder="Tu Email" type="email" required />
                    <textarea className="bg-white/5 border border-white/10 rounded-3xl px-8 py-8 text-white outline-none focus:border-lime-300 focus:bg-white/10 transition-all placeholder:text-neutral-600 sm:col-span-2 min-h-48" placeholder="¿En qué podemos ayudarte?" required />
                    <button className="bg-lime-300 rounded-full py-6 text-xl font-black text-black hover:bg-white transition-all sm:col-span-2 hover:scale-105 active:scale-95 shadow-xl shadow-lime-300/10">
                      Solicitar Consultoría <Zap size={20} className="inline ml-2" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-20 border-t border-black/5 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center gap-12">
          <Logo />
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
            <a href="#" className="hover:text-black transition-colors">Privacidad</a>
            <a href="#" className="hover:text-black transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">© 2026 Ritealmar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
