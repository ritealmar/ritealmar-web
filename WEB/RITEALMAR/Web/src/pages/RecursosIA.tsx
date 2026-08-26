import React, { useEffect } from 'react';

import { 
  BookOpen, CheckSquare, FileCode, Presentation, 
  ArrowRight, ShieldCheck, Zap, Download, ChevronRight, CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function RecursosIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const guias = [
    { title: "Guía IA para Clínicas", link: "/clinicas" },
    { title: "Guía IA para Inmobiliarias", link: "/inmobiliarias" },
    { title: "Guía IA para Abogados", link: "/ia-para-despachos-abogados" },
    { title: "Guía IA para Ecommerce", link: "/ecommerce" },
    { title: "Guía Automatización WhatsApp", link: "/blog/automatizar-whatsapp-pyme" },
    { title: "Guía Captación con IA", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
    { title: "Guía Agentes IA", link: "/agentes-ia" }
  ];

  const checklists = [
    { title: "Checklist Auditoría IA", desc: "Evalúa si tu empresa está lista para integrar Inteligencia Artificial." },
    { title: "Checklist Automatización Comercial", desc: "Puntos clave para automatizar la cualificación de leads." },
    { title: "Checklist CRM Inteligente", desc: "Cómo preparar tus bases de datos para integrarlas con IA." },
    { title: "Checklist Atención al Cliente", desc: "Requisitos para implementar un Chatbot 24/7." }
  ];

  const plantillas = [
    { title: "Plantilla Flujo WhatsApp", desc: "Diagrama de flujo base para automatizar soporte B2B y B2C." },
    { title: "Plantilla Embudo IA", desc: "Estructura de embudo de ventas asistido por agentes autónomos." },
    { title: "Plantilla Atención Cliente", desc: "Prompts y reglas de negocio para entrenar a tu Chatbot de IA." },
    { title: "Plantilla Seguimiento Comercial", desc: "Flujos de reactivación de leads fríos por correo y WhatsApp." }
  ];

  const successStories = [
    { title: "Clínica: Reducción 70% llamadas", link: "/casos-de-exito/clinica-reduccion-llamadas-ia", label: "Salud" },
    { title: "Inmobiliaria: +275% Conversión", link: "/casos-de-exito/inmobiliaria-captacion-ia", label: "Real Estate" },
    { title: "Ecommerce: +42% Facturación", link: "/casos-de-exito/ecommerce-recuperacion-carritos-ia", label: "Retail" }
  ];

  const services = [
    { title: "Automatizaciones", link: "/servicios/automatizacion-procesos" },
    { title: "Agentes IA", link: "/agentes-ia" },
    { title: "Chatbots IA", link: "/chatbots-ia" },
    { title: "Desarrollo Web", link: "/desarrollo-web" },
    { title: "Auditoría", link: "/auditoria-ia-gratis" }
  ];

  const faqs = [
    { q: "¿Qué incluyen las guías gratuitas de IA para empresas?", a: "Nuestras guías ofrecen análisis paso a paso sobre cómo implementar Inteligencia Artificial en sectores específicos como clínicas, inmobiliarias y ecommerce, detallando casos de uso reales, herramientas recomendadas y errores comunes a evitar." },
    { q: "¿Cómo puedo utilizar los checklists operativos?", a: "Los checklists están diseñados como herramientas de auditoría interna. Puedes utilizarlos para evaluar el nivel de digitalización de tu empresa antes de implementar un CRM, un Agente IA o automatizar procesos comerciales." },
    { q: "¿Para qué sirven las plantillas de flujos de WhatsApp?", a: "Te proporcionan la arquitectura base (diagrama lógico) que necesitas para configurar respuestas automáticas eficaces. Incluyen árboles de decisión típicos para atención al cliente y ventas." },
    { q: "¿Es necesario registrarse para acceder a estos recursos?", a: "La mayoría del contenido estratégico está disponible libremente en nuestras guías interactivas (Blog y Sectores). Para descargar plantillas técnicas específicas, podemos solicitar un correo profesional." },
    { q: "¿El contenido está adaptado para pequeñas y medianas empresas (PYMEs)?", a: "Sí, todos los recursos de RITEALMAR están diseñados para negocios que necesitan escalar sus operaciones sin necesariamente aumentar su plantilla humana, haciéndolos perfectos para PYMEs." },
    { q: "¿Enseñan a conectar Chatbots de IA con mi CRM?", a: "En nuestras guías de automatización y artículos del blog detallamos las metodologías e integraciones API más comunes (Zapier, Make, Holded, HubSpot) para sincronizar tu CRM con herramientas de IA." },
    { q: "¿Cada cuánto tiempo se actualizan estos recursos?", a: "La tecnología de IA avanza muy rápido. Revisamos y actualizamos nuestras plantillas y guías trimestralmente para incluir las últimas normativas y capacidades tecnológicas." },
    { q: "¿Qué debo hacer después de leer una guía o usar un checklist?", a: "El paso natural es solicitar nuestra Auditoría Gratuita de Inteligencia Artificial. En ella, analizaremos tu caso concreto y te propondremos un plan de implementación a medida." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos IA", "item": "https://ritealmar.es/recursos-ia" }
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
        title="Recursos Gratuitos sobre IA para Empresas | RITEALMAR"
        description="Descubre guías, plantillas, checklists y recursos gratuitos para implementar Inteligencia Artificial en tu empresa."
        canonical="https://ritealmar.es/recursos-ia"
        ogType="article"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />


      {/* Glow Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          Librería Abierta B2B
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-8 leading-tight">
          Recursos Gratuitos de Inteligencia Artificial para Empresas
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Encuentra guías, plantillas, checklists y recursos gratuitos para implementar Inteligencia Artificial, automatizaciones, agentes IA y chatbots en tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] w-full sm:w-auto"
          >
            Solicitar Auditoría Gratuita <ArrowRight size={18} />
          </a>
          <a 
            href="/sectores"
            onClick={(e) => handleNavigation(e, '/sectores')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan-500/30 rounded-xl font-bold text-white uppercase tracking-wider transition-all w-full sm:w-auto"
          >
            Ver Hub Sectores
          </a>
        </div>
      </section>

      {/* 1. Guías */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <BookOpen className="text-cyan-400" /> Guías Especializadas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guias.map((g, i) => (
              <a 
                key={i}
                href={g.link}
                onClick={(e) => handleNavigation(e, g.link)}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group flex items-center justify-between"
              >
                <span className="text-lg font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">{g.title}</span>
                <ChevronRight size={20} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Checklists */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <CheckSquare className="text-purple-400" /> Checklists Operativos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {checklists.map((chk, i) => (
              <div 
                key={i}
                className="bg-[#0A1628] border border-white/5 p-8 rounded-2xl hover:border-purple-500/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-purple-500" /> {chk.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{chk.desc}</p>
                <button className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-purple-400 transition-colors">
                  Próximamente disponible
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Plantillas */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <FileCode className="text-[#FF006E]" /> Plantillas y Diagramas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {plantillas.map((pln, i) => (
              <div 
                key={i}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-start hover:border-[#FF006E]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF006E]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF006E]/20 transition-colors">
                  <Download size={20} className="text-[#FF006E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{pln.title}</h3>
                <p className="text-xs text-slate-400 mb-6 flex-grow">{pln.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#FF006E] transition-colors mt-auto block border-t border-slate-800 pt-4 w-full text-center">
                  Próximamente
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Casos de Éxito y 5. Servicios (Dos Columnas Layout) */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Casos de Éxito */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Presentation className="text-cyan-400" /> Casos de Éxito
            </h2>
            <div className="space-y-4">
              {successStories.map((cs, i) => (
                <a 
                  key={i} 
                  href={cs.link}
                  onClick={(e) => handleNavigation(e, cs.link)}
                  className="block p-5 bg-[#0A1628] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-1 block">{cs.label}</span>
                      <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{cs.title}</h3>
                    </div>
                    <ArrowRight size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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

          {/* Servicios */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="text-purple-400" /> Servicios Relacionados
            </h2>
            <div className="flex flex-wrap gap-4">
              {services.map((srv, i) => (
                <a 
                  key={i}
                  href={srv.link}
                  onClick={(e) => handleNavigation(e, srv.link)}
                  className="px-6 py-4 bg-[#0A1628] border border-slate-800 rounded-xl text-slate-300 font-medium hover:bg-purple-900/30 hover:text-purple-400 hover:border-purple-500/50 transition-all flex items-center gap-3 w-full sm:w-auto"
                >
                  {srv.title} <ArrowRight size={16} className="opacity-50" />
                </a>
              ))}
            </div>
            <a 
              href="/blog"
              onClick={(e) => handleNavigation(e, '/blog')}
              className="inline-block mt-8 text-sm font-bold text-purple-400 hover:underline"
            >
              Visitar el Blog de IA →
            </a>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes sobre nuestros Recursos</h2>
            <p className="text-slate-400">Todo lo que necesitas saber antes de implementar nuestras metodologías.</p>
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
      
    </div>
  );
}
