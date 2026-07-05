import React, { useEffect } from 'react';

import { 
  Bot, MessageSquare, Zap, Users, Calendar, ShieldCheck, FileText, 
  TrendingUp, Headphones, Target, ArrowRight, Building2, ShoppingCart, 
  Stethoscope, HardHat, CheckCircle2, ChevronRight, BookOpen, Presentation, Database
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function CasosUsoIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const useCases = [
    { title: "Atención al cliente", icon: Headphones, link: "/chatbots-ia" },
    { title: "Captación de leads", icon: Target, link: "/blog/automatizar-captacion-clientes-ia-pyme" },
    { title: "WhatsApp Business", icon: MessageSquare, link: "/blog/automatizar-whatsapp-pyme" },
    { title: "Gestión comercial", icon: TrendingUp, link: "/agentes-ia" },
    { title: "Sincronización CRM", icon: Database, link: "/servicios/automatizacion-procesos" },
    { title: "Agenda y reservas", icon: Calendar, link: "/clinicas" },
    { title: "Soporte Técnico", icon: ShieldCheck, link: "/ecommerce" },
    { title: "Ventas cruzadas", icon: Zap, link: "/ecommerce" },
    { title: "Documentación", icon: FileText, link: "/constructoras" },
    { title: "Seguimiento automático", icon: Users, link: "/inmobiliarias" }
  ];

  const sectors = [
    { title: "Clínicas y Salud", icon: Stethoscope, link: "/clinicas", desc: "Automatización de citas y reducción de llamadas." },
    { title: "Inmobiliarias", icon: Building2, link: "/inmobiliarias", desc: "Captación instantánea y clasificación de compradores." },
    { title: "Ecommerce", icon: ShoppingCart, link: "/ecommerce", desc: "Recuperación de carritos y soporte omnicanal." },
    { title: "Constructoras", icon: HardHat, link: "/constructoras", desc: "Gestión documental y generación de presupuestos." }
  ];

  const successStories = [
    { title: "Clínica: Reducción 70% llamadas", link: "/casos-de-exito/clinica-reduccion-llamadas-ia", label: "Salud" },
    { title: "Inmobiliaria: +275% Conversión", link: "/casos-de-exito/inmobiliaria-captacion-ia", label: "Real Estate" },
    { title: "Ecommerce: +42% Facturación", link: "/casos-de-exito/ecommerce-recuperacion-carritos-ia", label: "Retail" }
  ];

  const articles = [
    { title: "Automatizar captación con IA", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
    { title: "Automatizar WhatsApp", link: "/blog/automatizar-whatsapp-pyme" },
    { title: "IA para inmobiliarias", link: "/blog/ia-inmobiliarias-captacion-ventas" },
    { title: "IA para clínicas y citas", link: "/blog/automatizacion-citas-clinicas-ia" }
  ];

  const services = [
    { title: "Automatización de Procesos", link: "/servicios/automatizacion-procesos" },
    { title: "Agentes de Inteligencia Artificial", link: "/agentes-ia" },
    { title: "Chatbots para WhatsApp y Web", link: "/chatbots-ia" },
    { title: "Desarrollo Web SEO", link: "/desarrollo-web" },
    { title: "Auditoría IA Gratuita", link: "/auditoria-ia-gratis" }
  ];

  const faqs = [
    { q: "¿Cuáles son los casos de uso más rentables de la IA en PYMEs?", a: "La atención al cliente por WhatsApp (chatbots), la captación y cualificación de leads automáticos y la sincronización entre CRMs y ERPs son las soluciones que mayor Retorno de Inversión (ROI) presentan de forma inmediata." },
    { q: "¿Es necesario saber programar para utilizar estos sistemas?", a: "No. En RITEALMAR implementamos soluciones 'llave en mano'. Diseñamos, entrenamos y conectamos a tus agentes de IA para que tu equipo solo tenga que interactuar de manera habitual con la herramienta (ej. recibir notificaciones en su correo o CRM)." },
    { q: "¿Cómo mejora la IA la captación de leads?", a: "Un agente conversacional entrenado contacta al lead (o responde cuando el lead escribe) en segundos, en cualquier momento del día, hace preguntas cualificadoras y lo agenda en tu calendario solo si cumple con los criterios de tu negocio." },
    { q: "¿Se puede integrar la IA con WhatsApp Business?", a: "Sí, a través de WhatsApp Business API, logramos que un agente de IA pueda mantener conversaciones naturales, procesar imágenes, enviar audios y cerrar citas de forma completamente autónoma." },
    { q: "¿La IA funciona en negocios tradicionales como clínicas o inmobiliarias?", a: "Absolutamente. De hecho, son de los sectores que más se benefician eliminando cuellos de botella: gestionando ausencias médicas, recuperando consultas de Idealista, y documentando proyectos de construcción o reformas de forma instantánea." },
    { q: "¿Puede un Chatbot recuperar carritos abandonados?", a: "Sí, mediante flujos omnicanales. Si un cliente no completa la compra, el agente de IA puede contactarle proactivamente por WhatsApp ofreciéndole ayuda para resolver sus dudas sobre pagos o envíos, lo que aumenta la facturación de los E-commerce." },
    { q: "¿Qué diferencia hay entre una automatización simple y un Agente IA?", a: "Una automatización simple sigue reglas estrictas ('Si X, entonces Y'). Un Agente IA entiende el lenguaje natural, el contexto de la conversación y puede tomar decisiones o realizar búsquedas en tiempo real para resolver problemas que no estaban pre-programados paso a paso." },
    { q: "¿Cuánto tarda en implementarse una solución de Inteligencia Artificial?", a: "Un caso de uso inicial (como un chatbot para atención al cliente y reserva de citas conectado al CRM) puede estar operativo e implementado entre 3 y 5 semanas, dependiendo de la infraestructura tecnológica actual de la empresa." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Casos de Uso IA", "item": "https://ritealmar.es/casos-de-uso-ia" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <SEO 
        title="Casos de Uso de IA para Empresas | Automatización Empresarial | RITEALMAR"
        description="Descubre los principales casos de uso de Inteligencia Artificial para empresas: automatización, agentes IA, chatbots, captación de clientes, WhatsApp y mucho más."
        canonical="https://ritealmar.es/casos-de-uso-ia"
        ogType="article"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />


      {/* Glow Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
          Hub de Automatización B2B
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-8 leading-tight">
          Casos de Uso de Inteligencia Artificial para Empresas
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Descubre cómo la Inteligencia Artificial está transformando empresas mediante automatización, agentes IA, chatbots inteligentes y sistemas conectados con WhatsApp, CRM y software empresarial.
        </p>
        <a 
          href="/auditoria-ia-gratis"
          onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          Solicitar Auditoría Gratuita <ArrowRight size={18} />
        </a>
      </section>

      {/* 1. Casos Genéricos (Grid) */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">¿Qué puede automatizar la IA en tu empresa?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">La capacidad de delegar procesos lógicos y tareas mecánicas a sistemas inteligentes permite liberar a tu equipo humano.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {useCases.map((uc, i) => (
              <a 
                key={i} 
                href={uc.link}
                onClick={(e) => handleNavigation(e, uc.link)}
                className="bg-[#0A1628] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
              >
                <uc.icon size={28} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{uc.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Sectores */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Building2 className="text-purple-400" /> Soluciones IA por Sector
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <a 
                key={i}
                href={s.link}
                onClick={(e) => handleNavigation(e, s.link)}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <s.icon size={24} className="text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{s.desc}</p>
                <span className="inline-flex items-center text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  Ver solución <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. y 4. Layout 2 Columnas (Casos de Éxito y Blog) */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Casos de Éxito */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Presentation className="text-[#FF006E]" /> Proyectos Reales de IA
            </h2>
            <div className="space-y-4">
              {successStories.map((cs, i) => (
                <a 
                  key={i} 
                  href={cs.link}
                  onClick={(e) => handleNavigation(e, cs.link)}
                  className="block p-5 bg-[#0A1628] border border-white/5 rounded-xl hover:border-[#FF006E]/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#FF006E] uppercase tracking-wider mb-1 block">{cs.label}</span>
                      <h3 className="text-white font-bold group-hover:text-[#FF006E] transition-colors">{cs.title}</h3>
                    </div>
                    <ArrowRight size={20} className="text-slate-500 group-hover:text-[#FF006E] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
            <a 
              href="/casos-de-exito"
              onClick={(e) => handleNavigation(e, '/casos-de-exito')}
              className="inline-block mt-6 text-sm font-bold text-cyan-400 hover:underline"
            >
              Ver todos los proyectos →
            </a>
          </div>

          {/* Artículos Recomendados */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="text-cyan-400" /> Formación e Insights
            </h2>
            <div className="space-y-4">
              {articles.map((art, i) => (
                <a 
                  key={i} 
                  href={art.link}
                  onClick={(e) => handleNavigation(e, art.link)}
                  className="block p-5 bg-[#0A1628] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{art.title}</h3>
                    <ArrowRight size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
            <a 
              href="/blog"
              onClick={(e) => handleNavigation(e, '/blog')}
              className="inline-block mt-6 text-sm font-bold text-cyan-400 hover:underline"
            >
              Explorar el Blog Tecnológico →
            </a>
          </div>

        </div>
      </section>

      {/* 5. Servicios Relacionados */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Servicios Clave de RITEALMAR</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((srv, i) => (
              <a 
                key={i}
                href={srv.link}
                onClick={(e) => handleNavigation(e, srv.link)}
                className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 font-medium hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                {srv.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes sobre Casos de Uso IA</h2>
            <p className="text-slate-400">Todo lo que necesitas saber antes de implementar Inteligencia Artificial en tus procesos.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#0A1628] rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white">
                  <span className="pr-6">{faq.q}</span>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                    <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="relative z-10 py-32 px-6 text-center border-t border-white/5 bg-[#030712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Desbloquea el potencial de tu empresa</h2>
          <p className="text-slate-400 mb-10 text-lg">Solicita un análisis gratuito y descubre exactamente en qué puntos operativos tu negocio puede integrar IA para multiplicar resultados.</p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors"
          >
            Reservar Auditoría <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
