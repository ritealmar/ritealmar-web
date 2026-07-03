import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  AlertCircle, 
  ArrowRight, 
  BarChart3, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Database
} from 'lucide-react';

/* ─────────────────────────────────────────
   DESIGN SYSTEM CONSTANTS
───────────────────────────────────────── */
const THEME = {
  bg: '#050A10',
  card: '#0A1420',
  accent: '#00C897',
  text: '#FFFFFF',
  muted: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.08)',
};

/* ─────────────────────────────────────────
   PORTFOLIO DATA
───────────────────────────────────────── */
const PORTFOLIO = [
  {
    title: 'Plataforma Logística AI',
    description: 'Motor de predicción que optimiza inventarios y traza operaciones en tiempo real.',
    metric: '-80% Errores',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', // Dashboard mockup
    icon: Database
  },
  {
    title: 'Automatización de Facturación',
    description: 'Extracción de datos inteligente con visión artificial conectada directo al ERP.',
    metric: '+40% Eficiencia',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', // Analytics mockup
    icon: BarChart3
  },
  {
    title: 'Infraestructura de Datos',
    description: 'Arquitectura cloud robusta para empresas con alto volumen de operaciones diarias.',
    metric: '99.9% Uptime',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80', // Tech/Cloud mockup
    icon: Globe
  }
];

/* ─────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────── */

export default function RitealmarCorpLanding({ onNavigate }: { onNavigate?: (page: string) => void }) {
  
  return (
    <div style={{ backgroundColor: THEME.bg, color: THEME.text, minHeight: '100vh', fontFamily: 'var(--font-sans)', overflowX: 'hidden' }}>
      
      {/* ─────────────────────────────────────────
         NAVBAR (MINIMAL)
      ───────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b" style={{ borderColor: THEME.border }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#00C897]/10 flex items-center justify-center border" style={{ borderColor: 'rgba(0, 200, 151, 0.3)' }}>
            <Zap size={16} color={THEME.accent} />
          </div>
          <span className="font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>RITEALMAR</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium" style={{ color: THEME.muted }}>
          <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
          <a href="#casos" className="hover:text-white transition-colors">Casos de Uso</a>
          <a href="#metricas" className="hover:text-white transition-colors">Impacto</a>
        </div>
        <button 
          style={{ backgroundColor: THEME.accent, color: THEME.bg }}
          className="px-5 py-2.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          Agendar Sesión <ArrowRight size={16} />
        </button>
      </nav>

      {/* ─────────────────────────────────────────
         1. HERO SECTION
      ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle radial gradient background */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(circle at 50% 0%, rgba(0, 200, 151, 0.08) 0%, transparent 70%)' 
          }} 
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border"
            style={{ borderColor: 'rgba(0, 200, 151, 0.2)', backgroundColor: 'rgba(0, 200, 151, 0.05)', color: THEME.accent }}
          >
            <ShieldCheck size={14} />
            Consultora de Ingeniería Operativa para PYMEs
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ingeniería de IA que <br />
            <span style={{ color: THEME.accent }}>escala tu empresa.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: THEME.muted }}
          >
            Sustituimos el caos manual por ecosistemas inteligentes. Automatizamos procesos administrativos, ventas y atención para que tu equipo se enfoque en el crecimiento real.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              style={{ backgroundColor: THEME.accent, color: THEME.bg }}
              className="px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all flex justify-center items-center gap-2 shadow-[0_0_30px_rgba(0,200,151,0.3)]"
            >
              Calcula tu Ahorro <ArrowRight size={20} />
            </button>
            <button 
              style={{ backgroundColor: 'transparent', color: THEME.text, borderColor: THEME.border }}
              className="px-8 py-4 rounded-full text-lg font-medium border hover:bg-white/5 transition-all"
            >
              Ver Casos de Éxito
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
         2. PAIN GRID (Grid de Dolor)
      ───────────────────────────────────────── */}
      <section className="py-24 px-6 border-t" style={{ borderColor: THEME.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              El costo invisible de la operativa tradicional
            </h2>
            <p className="text-lg max-w-2xl" style={{ color: THEME.muted }}>
              Si tu empresa depende de hojas de cálculo, procesos manuales y comunicación desordenada, la escalabilidad es imposible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Time */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border transition-all"
              style={{ backgroundColor: THEME.card, borderColor: THEME.border }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: `1px solid ${THEME.border}` }}>
                <Clock size={24} color={THEME.text} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Drenaje de tiempo</h3>
              <p style={{ color: THEME.muted, lineHeight: 1.6 }}>
                Tu equipo invierte más de 20 horas semanales en procesar facturas, picar datos y tareas repetitivas que una IA hace en segundos.
              </p>
            </motion.div>

            {/* Card 2: Leads */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border transition-all"
              style={{ backgroundColor: THEME.card, borderColor: THEME.border }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: `1px solid ${THEME.border}` }}>
                <Users size={24} color={THEME.text} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Leads perdidos</h3>
              <p style={{ color: THEME.muted, lineHeight: 1.6 }}>
                Respuestas lentas en WhatsApp y falta de seguimiento estructurado provocan que potenciales clientes se vayan a la competencia.
              </p>
            </motion.div>

            {/* Card 3: Errors */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border transition-all"
              style={{ backgroundColor: THEME.card, borderColor: THEME.border }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: `1px solid ${THEME.border}` }}>
                <AlertCircle size={24} color={THEME.text} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Errores operativos</h3>
              <p style={{ color: THEME.muted, lineHeight: 1.6 }}>
                Descuadres en inventario, olvidos en presupuestos y falta de sincronización entre herramientas te cuestan miles de euros al año.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
         3. METRICS SECTION
      ───────────────────────────────────────── */}
      <section id="metricas" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: THEME.card }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-6" style={{ color: THEME.accent }}>
            El Impacto Ritealmar
          </p>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            -80% <span className="block md:inline text-4xl md:text-7xl font-bold" style={{ color: THEME.muted }}>Carga Operativa</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: THEME.muted }}>
            Transformamos la infraestructura de tu negocio integrando automatización e IA. El resultado es una operativa impecable, escalable y sin fricción.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
         4. PORTFOLIO / CAPABILITIES
      ───────────────────────────────────────── */}
      <section id="casos" className="py-24 px-6 border-t" style={{ borderColor: THEME.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Ingeniería en Acción
              </h2>
              <p className="text-lg max-w-xl" style={{ color: THEME.muted }}>
                Soluciones enterprise diseñadas para la realidad y las exigencias de la pequeña y mediana empresa.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold hover:text-[#00C897] transition-colors">
              Ver todos los casos <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] overflow-hidden border transition-all flex flex-col"
                style={{ 
                  backgroundColor: THEME.card, 
                  borderColor: THEME.border,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)' 
                }}
              >
                {/* Image mockup area */}
                <div className="h-48 md:h-56 w-full relative overflow-hidden bg-[#111E2D]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    {item.metric}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <item.icon size={20} color={THEME.accent} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: THEME.muted }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <button className="text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors" style={{ color: THEME.muted }}>
                      Explorar arquitectura <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
         FOOTER
      ───────────────────────────────────────── */}
      <footer className="border-t py-12 px-6" style={{ borderColor: THEME.border, backgroundColor: THEME.card }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Zap size={20} color={THEME.accent} />
            <span className="font-bold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>RITEALMAR</span>
          </div>
          <div className="text-sm" style={{ color: THEME.muted }}>
            © 2026 Ritealmar. Ingeniería Operativa. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
