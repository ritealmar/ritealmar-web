import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Key, ShoppingBag, ShoppingCart, RefreshCw, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { AnalyticsTracker } from '../utils/analyticsTracker';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import RecursosRecomendados from '../components/RecursosRecomendados';

interface IndustryPageProps {
  type: 'inmobiliarias' | 'ecommerce' | 'constructoras';
  onOpenForm: (config?: any) => void;
}

export default function VerticalesIndustria({ type, onOpenForm }: IndustryPageProps) {
  useEffect(() => {
    AnalyticsTracker.trackSectorView(type);
  }, [type]);
  
  // Inyección de Branding y Copywriting Segmentado según el dolor del sector
  const content = {
    inmobiliarias: {
      seoTitle: "IA para Inmobiliarias | Ritealmar",
      seoDesc: "Implementamos IA para agencias inmobiliarias. Consigue más leads cualificados y automatiza respuestas para organizar visitas más rápido.",
      tag: "Ritealmar Real Estate Automation",
      h1: "IA para inmobiliarias: más leads, respuestas rápidas y visitas organizadas",
      subtitle: (
        <>
          Implementamos agentes de IA que responden en menos de 60 segundos a los leads de portales inmobiliarios, cualifican compradores y agendan visitas de forma autónoma, apoyándose en la <a href="/blog/automatizar-captacion-clientes-ia-pyme" className="text-cyan-400 hover:underline">captación avanzada con IA</a>.
        </>
      ),
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
      faqs: [
        { q: "¿Puede el agente IA agendar directamente en el calendario de mis comerciales?", a: "Sí, integramos la IA con calendarios de Google, Outlook o tu CRM inmobiliario para que las visitas se agenden solo cuando haya disponibilidad real." },
        { q: "¿En qué portales funciona la captura automática de leads?", a: "Nuestra infraestructura se conecta con los principales portales como Idealista, Fotocasa y Habitaclia, así como con campañas propias de Facebook Ads y Google Ads." }
      ],
      cta: "Automatizar Mi Inmobiliaria"
    },
    ecommerce: {
      seoTitle: "IA para E-commerce | Ritealmar",
      seoDesc: "Inteligencia artificial aplicada a E-commerce. Automatiza el soporte, la recuperación de carritos y la gestión postventa.",
      tag: "Ritealmar E-commerce AI Infrastructure",
      h1: "IA para e-commerce: soporte, carritos y postventa automatizada",
      subtitle: (
        <>
          Sustituye los chatbots rígidos de botones por verdaderos agentes expertos que recomiendan productos, resuelven incidencias de envío y recuperan carritos mediante <a href="/blog/automatizar-whatsapp-pyme" className="text-cyan-400 hover:underline">automatización de WhatsApp</a>.
        </>
      ),
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
      faqs: [
        { q: "¿Es necesario cambiar nuestro software ERP (Shopify, WooCommerce)?", a: "No, nuestras soluciones de Inteligencia Artificial se integran vía API directamente con tu plataforma actual sin necesidad de migraciones costosas." },
        { q: "¿Cómo recupera carritos abandonados la IA?", a: "El sistema detecta el abandono y, si el usuario dio su consentimiento, le envía un mensaje personalizado por WhatsApp resolviendo posibles dudas o ofreciendo incentivos para cerrar la venta." }
      ],
      cta: "Optimizar Mi E-commerce"
    },
    constructoras: {
      seoTitle: "IA para Constructoras y Reformas | Ritealmar",
      seoDesc: "Automatización y soluciones de IA para constructoras, empresas de reformas y despachos de arquitectura. Presupuestos y mediciones automáticas.",
      tag: "Ritealmar Construction Automation",
      h1: "IA para Constructoras: Presupuestos, Mediciones y Gestión Automatizada",
      subtitle: (
        <>
          Optimiza la gestión documental, automatiza la creación de presupuestos y clasifica solicitudes de reformas con agentes de IA diseñados para la <a href="/servicios/automatizacion-procesos" className="text-cyan-400 hover:underline">automatización industrial</a>.
        </>
      ),
      metrics: [
        { value: "-70%", label: "Tiempo en Presupuestos", desc: "Generación automática basada en planos y descripciones." },
        { value: "100%", label: "Clasificación de Leads", desc: "Filtrado automático de solicitudes de reforma no viables." },
        { value: "+45%", label: "Eficiencia Documental", desc: "Extracción automática de datos de proveedores y facturas." }
      ],
      blocks: [
        { title: "Mediciones Automáticas con IA", desc: "Sistemas de visión artificial que analizan planos y fotografías para pre-calcular mediciones de fachadas y espacios interiores.", icon: Home },
        { title: "Gestor Comercial Autónomo", desc: "Asistentes de WhatsApp que responden a clientes pidiendo reformas, cualifican su presupuesto y agenda visitas técnicas.", icon: Users },
        { title: "Clasificación Centralizada en CRM", desc: "Sincronización de todas las solicitudes, facturas y correos de proveedores directamente en tu software de gestión.", icon: Zap }
      ],
      faqs: [
        { q: "¿Puede la IA leer planos y hacer presupuestos sola?", a: "Nuestros sistemas pueden extraer datos de planos (PDF/CAD) y fotos para generar pre-mediciones y borradores de presupuestos, que luego valida un técnico, ahorrando un 70% del trabajo manual." },
        { q: "¿Cómo filtra la IA a los clientes que piden reformas?", a: "A través de un agente conversacional de WhatsApp o web que solicita al cliente datos clave (presupuesto estimado, metros cuadrados, urgencia) antes de pasarlo al equipo de ventas." },
        { q: "¿Es compatible con nuestro software de gestión actual?", a: "Sí, desarrollamos conectores API a medida para integrar las automatizaciones con tu ERP o CRM actual, garantizando que no haya duplicidad de datos." },
        { q: "¿Qué pasa con la privacidad de los documentos y facturas?", a: "Cumplimos estrictamente con el marco legal europeo (GDPR y AI Act) utilizando infraestructuras cloud blindadas para el procesamiento documental privado." },
        { q: "¿Necesitamos conocimientos técnicos para usarlo?", a: "En absoluto. Entregamos el sistema 'llave en mano'. Tu equipo simplemente interactúa con su WhatsApp, correo electrónico o CRM como lo hace habitualmente." },
        { q: "¿Cuánto tiempo lleva implementar la IA en nuestra constructora?", a: "Depende del volumen, pero un sistema de clasificación comercial inicial (Chatbots + CRM) puede estar operativo en menos de 4 semanas." }
      ],
      cta: "Automatizar mi Constructora"
    }
  };

  const data = content[type];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.h1,
    "description": data.seoDesc,
    "provider": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "url": "https://ritealmar.es"
    },
    "areaServed": "ES",
    "url": window.location.href
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs ? data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    })) : []
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden relative">
      <SEO title={data.seoTitle} description={data.seoDesc} />
      <JsonLd data={serviceSchema} />
      {data.faqs && <JsonLd data={faqSchema} />}
      {/* Sistema Lumínico Dark Neon */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/10 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-44 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
            {data.tag}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400">
            {data.h1}
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
            {data.subtitle}
          </p>
          <button 
            onClick={() => onOpenForm({
              title: "Solicitar auditoría IA gratuita",
              subtitle: "Cuéntanos brevemente tu negocio y revisaremos qué procesos puedes automatizar para ahorrar tiempo, captar más clientes o mejorar tu atención comercial.",
              submitText: "Solicitar auditoría gratuita"
            })}
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
                {type === 'inmobiliarias' && "Lead de Idealista clasificado: Propietario - C/ Velázquez - Prioridad Alta. Registrado en CRM."}
                {type === 'ecommerce' && "Carrito abandonado #4092 recuperado vía WhatsApp. Descuento de retención aplicado automáticamente."}
                {type === 'constructoras' && "Plano de fachada procesado: 450m2 calculados. Borrador de presupuesto #104 generado e insertado en Holded."}
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

      {/* Recursos Recomendados Sectorial */}
      <RecursosRecomendados type={type} />

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
