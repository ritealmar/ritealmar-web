import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Key, ShoppingBag, ShoppingCart, RefreshCw, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';

interface IndustryPageProps {
  type: 'inmobiliarias' | 'ecommerce';
  onOpenForm: () => void;
}

export default function VerticalesIndustria({ type, onOpenForm }: IndustryPageProps) {
  useEffect(() => {
    AnalyticsTracker.trackSectorView(type);
  }, [type]);
  
  // Inyección de Branding y Copywriting Segmentado según el dolor del sector
  const content = {
    inmobiliarias: {
      tag: "Ritealmar Real Estate Automation",
      h1: "Captar más propietarios. Automatizar cada visita.",
      subtitle: "Implementamos agentes de IA que responden en menos de 60 segundos a los leads de portales inmobiliarios, cualifican compradores y agendan visitas de forma autónoma.",
      metrics: [
        { value: "+42%", label: "Captación de Exclusivas", desc: "Respuesta inmediata a propietarios interesados." },
        { value: "-4h/día", label: "Gestión por Agente", desc: "Cualificación financiera automática de compradores." },
        { value: "3x", label: "Conversión de Leads", desc: "Sincronización total entre portales y tu CRM." }
      ],
      blocks: [
        { title: "Cualificación Financiera Express", desc: "La IA filtra a los compradores por WhatsApp consultando su capacidad de entrada y estado de hipoteca antes de agendar la visita física.", icon: Key },
        { title: "Auto-Respuesta en Portales 24/7", desc: "Conexión directa con Idealista y Fotocasa. Captura, clasifica e introduce el lead en tu CRM al milisegundo, sin importar la hora.", icon: Users },
        { title: "Seguimiento Automatizado de Propietarios", desc: "Sistemas autónomos que nutren la relación con el propietario mediante reportes de rendimiento de su inmueble, asegurando la firma de la exclusiva.", icon: Home }
      ],
      cta: "Automatizar Mi Inmobiliaria"
    },
    ecommerce: {
      tag: "Ritealmar E-commerce AI Infrastructure",
      h1: "Vender más en tu tienda. Automatizar tu soporte.",
      subtitle: "Sustituye los chatbots rígidos de botones por verdaderos agentes expertos que recomiendan productos, resuelven incidencias de envío y recuperan carritos por WhatsApp.",
      metrics: [
        { value: "+28%", label: "Recuperación de Carritos", desc: "Interacción proactiva mediante agentes de IA conversacionales." },
        { value: "85%", label: "Soporte Automatizado", desc: "Resolución de incidencias de envío (¿Dónde está mi pedido?) sin humanos." },
        { value: "-35%", label: "Costes de Operación", desc: "Sincronización automatizada entre stock, catálogo y facturación." }
      ],
      blocks: [
        { title: "Recuperación Conversacional", desc: "Cuando un usuario abandona un carrito, la IA le contacta de manera humana ofreciendo asistencia personalizada, resolviendo dudas y cerrando la venta.", icon: ShoppingCart },
        { title: "Asistente Experto en Catálogo", desc: "Un clon de tu mejor vendedor capaz de entender la necesidad del usuario y recomendar el producto exacto mediante lenguaje natural avanzado.", icon: ShoppingBag },
        { title: "Sincronización Core ERP", desc: "Conectamos tu Shopify, WooCommerce o Magento con tus sistemas de inventario y Holded. Cero actualizaciones manuales de stock.", icon: RefreshCw }
      ],
      cta: "Optimizar Mi E-commerce"
    }
  };

  const data = content[type];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden relative">
      {/* Sistema Lumínico Dark Neon */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/10 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-44 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
            {data.tag}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6 uppercase">
            {data.h1.split('.')[0]}. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400">
              {data.h1.split('.')[1]}
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
            {data.subtitle}
          </p>
          <button 
            onClick={onOpenForm}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            {data.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Simulación del Pipeline del Worker en Tiempo Real */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4 mb-6">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/40 animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/40 animate-pulse" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-500">SMO-R PIPELINE ENGINE</span>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/80 border border-slate-900 p-4 rounded-xl">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-400 font-bold">Estado de Automatización</span>
                <span className="text-cyan-400 font-mono">Activo</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
              </div>
            </div>

            <div className="p-4 bg-slate-950/40 border border-slate-900 rounded-xl space-y-2">
              <p className="text-[10px] font-mono text-slate-500 uppercase">Última acción del sistema:</p>
              <p className="text-xs text-slate-300 font-medium">
                {type === 'inmobiliarias' 
                  ? "Lead de Idealista clasificado: Propietario - C/ Velázquez - Prioridad Alta. Registrado en CRM."
                  : "Carrito abandonado #4092 recuperado vía WhatsApp. Descuento de retención aplicado automáticamente."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de Métricas de Negocio */}
      <section className="relative z-10 py-20 border-y border-slate-900 bg-slate-950/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {data.metrics.map((m, i) => (
            <div key={i} className="space-y-2">
              <p className="text-5xl font-black text-cyan-400 tracking-tight">{m.value}</p>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-200">{m.label}</p>
              <p className="text-xs text-slate-400 font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos de Características de Infraestructura */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-8">
          {data.blocks.map((b, i) => (
            <div key={i} className="bg-slate-900/20 border border-slate-800/40 p-8 rounded-2xl hover:border-cyan-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <b.icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer de Confianza Corporativa */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-900 bg-slate-950/40 text-center flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-cyan-400" />
          <span className="text-xs font-black tracking-widest text-slate-400 uppercase">Ritealmar Operations v2.0</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Infraestructura blindada bajo cumplimiento legal y normativas de datos europeos.</span>
        </div>
      </footer>
    </div>
  );
}
