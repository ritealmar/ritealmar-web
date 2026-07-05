import React, { useEffect } from 'react';

import { 
  GraduationCap, ArrowRight, BookOpen, Layers, 
  Terminal, Building2, Wrench, ChevronRight, PlayCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function AcademiaIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const startHere = [
    { title: "Introducción a la IA", link: "/blog" },
    { title: "Qué es la automatización", link: "/servicios/automatizacion-procesos" },
    { title: "Qué es un Agente IA", link: "/agentes-ia" },
    { title: "Qué es un Chatbot", link: "/chatbots-ia" },
    { title: "Cómo calcular el ROI", link: "/calculadora-ahorro-ia" }
  ];

  const intermediate = [
    { title: "Automatización comercial", link: "/blog/automatizar-captacion-clientes-ia-pyme" },
    { title: "WhatsApp Business", link: "/blog/automatizar-whatsapp-pyme" },
    { title: "CRM e Inteligencia", link: "/servicios/automatizacion-procesos" },
    { title: "Integraciones API", link: "/desarrollo-web" },
    { title: "Sistemas Conversacionales", link: "/chatbots-ia" }
  ];

  const advanced = [
    { title: "RAG (Retrieval-Augmented Generation)", link: "/agentes-ia" },
    { title: "Modelos LLMs (GPT, Claude)", link: "/recursos-ia" },
    { title: "MCP (Model Context Protocol)", link: "/blog" },
    { title: "Vector Databases", link: "/recursos-ia" },
    { title: "Workflows IA", link: "/casos-de-uso-ia" }
  ];

  const sectors = [
    { title: "Clínicas y Salud", link: "/clinicas" },
    { title: "Inmobiliarias", link: "/inmobiliarias" },
    { title: "Ecommerce", link: "/ecommerce" },
    { title: "Constructoras", link: "/constructoras" }
  ];

  const tools = [
    { title: "Calculadora IA", link: "/calculadora-ahorro-ia" },
    { title: "Recursos IA", link: "/recursos-ia" },
    { title: "Casos de Uso", link: "/casos-de-uso-ia" },
    { title: "Casos de Éxito", link: "/casos-de-exito" },
    { title: "Blog Técnico", link: "/blog" }
  ];

  const faqs = [
    { q: "¿Para quién está diseñada la Academia IA?", a: "Nuestra Academia IA está pensada para directores de operaciones, gerentes y dueños de negocio que desean entender cómo funciona la tecnología que automatiza procesos, sin necesidad de saber programar." },
    { q: "¿Es necesario tener conocimientos técnicos previos?", a: "No. Empezamos desde cero absoluto (nivel directivo) hasta llevarte a entender cómo se integran sistemas avanzados como Bases de Datos Vectoriales y Agentes Autónomos." },
    { q: "¿Tienen algún coste las guías y recursos de esta academia?", a: "No. Todo el ecosistema de formación, plantillas y herramientas de RITEALMAR es de acceso gratuito. Nuestra misión es educar al ecosistema B2B español sobre el impacto real de la Inteligencia Artificial." },
    { q: "¿Enseñan a utilizar herramientas como Zapier o Make?", a: "Sí, dentro de los bloques de automatización e integración abordamos la lógica de conexión entre software sin código (No-Code) y la integración pura vía API." },
    { q: "¿Qué diferencia hay entre la Academia y el Hub de Recursos?", a: "El Hub de Recursos es una librería estática de descargas (plantillas, checklists). La Academia es un mapa de aprendizaje secuencial (Empieza por aquí -> Intermedio -> Avanzado)." },
    { q: "¿Ofrecen formación presencial para empresas?", a: "Realizamos formaciones in-company y consultorías ad-hoc para equipos que van a adoptar nuevas integraciones tecnológicas. Puedes contactarnos tras solicitar la Auditoría." },
    { q: "¿Se centran solo en OpenAI/ChatGPT?", a: "No. Somos agnósticos a la tecnología. Explicamos cómo orquestar diferentes Modelos de Lenguaje (LLMs) dependiendo de si el caso de uso requiere velocidad, precisión o un coste por token inferior." },
    { q: "¿Puedo solicitar un caso práctico para mi negocio?", a: "Absolutamente. El mejor paso tras revisar la teoría de la Academia es acceder a la 'Auditoría IA Gratuita', donde nuestros ingenieros proyectarán un caso práctico específico para tus operaciones." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Academia IA", "item": "https://ritealmar.es/academia-ia" }
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
        title="Academia IA para Empresas | Aprende Inteligencia Artificial | RITEALMAR"
        description="Descubre la Academia IA de RITEALMAR con guías, formación y recursos gratuitos sobre automatización, agentes IA y chatbots para empresas."
        canonical="https://ritealmar.es/academia-ia"
        ogType="article"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />


      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          <GraduationCap size={14} /> Ecosistema de Formación B2B
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-8 leading-tight">
          Academia de Inteligencia Artificial para Empresas
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Aprende cómo implantar Inteligencia Artificial, automatización, agentes IA y chatbots en empresas mediante guías estructuradas paso a paso.
        </p>
        <a 
          href="/auditoria-ia-gratis"
          onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          Solicitar Auditoría IA <ArrowRight size={18} />
        </a>
      </section>

      {/* Niveles de Aprendizaje */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Principiante */}
          <div className="bg-[#0A1628] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <PlayCircle className="text-cyan-400" /> Empieza por aquí
            </h2>
            <p className="text-slate-400 text-sm mb-8">Conceptos fundamentales de automatización.</p>
            <div className="space-y-3">
              {startHere.map((item, i) => (
                <a 
                  key={i} href={item.link} onClick={(e) => handleNavigation(e, item.link)}
                  className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all group"
                >
                  <span className="font-medium text-slate-300 group-hover:text-cyan-400 transition-colors text-sm">{item.title}</span>
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Intermedio */}
          <div className="bg-[#0A1628] border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Layers className="text-purple-400" /> Nivel Intermedio
            </h2>
            <p className="text-slate-400 text-sm mb-8">Estrategias corporativas y conectividad B2B.</p>
            <div className="space-y-3">
              {intermediate.map((item, i) => (
                <a 
                  key={i} href={item.link} onClick={(e) => handleNavigation(e, item.link)}
                  className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-purple-400/50 hover:bg-purple-900/10 transition-all group"
                >
                  <span className="font-medium text-slate-300 group-hover:text-purple-400 transition-colors text-sm">{item.title}</span>
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Avanzado */}
          <div className="bg-[#0A1628] border border-[#FF006E]/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF006E]/10 blur-3xl rounded-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Terminal className="text-[#FF006E]" /> Nivel Avanzado
            </h2>
            <p className="text-slate-400 text-sm mb-8">Arquitectura técnica e ingeniería de prompts.</p>
            <div className="space-y-3">
              {advanced.map((item, i) => (
                <a 
                  key={i} href={item.link} onClick={(e) => handleNavigation(e, item.link)}
                  className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-[#FF006E]/50 hover:bg-[#FF006E]/10 transition-all group"
                >
                  <span className="font-medium text-slate-300 group-hover:text-[#FF006E] transition-colors text-sm">{item.title}</span>
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-[#FF006E] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Sectores y Herramientas */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Sectores */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Building2 className="text-cyan-400" /> Soluciones por Sector
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {sectors.map((sector, i) => (
                <a 
                  key={i} href={sector.link} onClick={(e) => handleNavigation(e, sector.link)}
                  className="p-5 bg-[#0A1628] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all group flex items-center justify-between"
                >
                  <span className="font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">{sector.title}</span>
                  <ArrowRight size={18} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
            <a 
              href="/sectores"
              onClick={(e) => handleNavigation(e, '/sectores')}
              className="inline-block mt-6 text-sm font-bold text-cyan-400 hover:underline"
            >
              Ver todos los sectores (Hub) →
            </a>
          </div>

          {/* Herramientas */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Wrench className="text-purple-400" /> Herramientas RITEALMAR
            </h2>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, i) => (
                <a 
                  key={i} href={tool.link} onClick={(e) => handleNavigation(e, tool.link)}
                  className="px-6 py-4 bg-[#0A1628] border border-white/5 rounded-xl font-medium text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all flex items-center gap-2"
                >
                  {tool.title} <ChevronRight size={14} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Dudas sobre la Academia</h2>
            <p className="text-slate-400">Todo lo que necesitas saber sobre nuestro programa de formación.</p>
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
