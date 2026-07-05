import React, { useEffect } from 'react';

import { 
  Building2, ArrowRight, Zap, Target, ShieldCheck, 
  Workflow, GitMerge, Bot, MessageSquare, Database, 
  Settings, BrainCircuit, Globe, Stethoscope, ShoppingCart, HardHat,
  BookOpen, Calculator, Presentation, Briefcase, FileCode
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function SobreRitealmar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const technologies = [
    { name: "OpenAI", icon: Bot, desc: "Inteligencia Artificial y Modelos LLM." },
    { name: "WhatsApp Business API", icon: MessageSquare, desc: "Soporte conversacional autónomo." },
    { name: "Google Workspace", icon: Database, desc: "Gestión documental corporativa." },
    { name: "APIs Custom", icon: GitMerge, desc: "Desarrollo de conectores B2B a medida." },
    { name: "Sistemas CRM", icon: Target, desc: "Centralización de ventas (HubSpot, Holded)." },
    { name: "Plataformas RPA", icon: Workflow, desc: "Make y Zapier para automatizaciones." },
    { name: "IA Generativa", icon: BrainCircuit, desc: "Extracción y análisis de datos." },
    { name: "Integraciones Web", icon: Globe, desc: "Conexiones de ecosistemas digitales." }
  ];

  const faqs = [
    { q: "¿Qué significa que el enfoque esté basado en el ROI?", a: "Significa que no implementamos tecnología por implementarla. Cada proyecto se diseña para generar un ahorro económico tangible (reducción de horas en tareas manuales) o un aumento directo en la facturación (mayor conversión de leads), garantizando un retorno de la inversión cuantificable." },
    { q: "¿Sois una agencia de marketing tradicional?", a: "No. RITEALMAR es una agencia tecnológica B2B y consultora de Inteligencia Artificial. No hacemos campañas publicitarias ni branding; desarrollamos integraciones, chatbots, agentes de IA y automatizaciones de software empresarial." },
    { q: "¿Trabajáis con pequeñas y medianas empresas?", a: "Sí, de hecho es nuestro cliente principal. Demokratizamos el acceso a automatizaciones Enterprise para que negocios tradicionales (clínicas, constructoras, inmobiliarias) puedan competir con infraestructuras tecnológicas punteras." },
    { q: "¿Por qué insistís en 'Automatizar primero, IA después'?", a: "La Inteligencia Artificial no soluciona procesos rotos o desorganizados. Primero establecemos flujos de trabajo claros y automatizamos el traspaso de datos. Una vez que el 'tubo' está limpio, introducimos la IA para que tome decisiones inteligentes sobre esos datos." },
    { q: "¿Ofrecéis soluciones tipo 'caja negra' que no podemos modificar?", a: "No, nuestras soluciones son transparentes y te pertenecen. Integramos sistemas sobre tu infraestructura actual (tu CRM, tus cuentas de Google, tu número de WhatsApp) por lo que tienes control total y propiedad sobre la solución." },
    { q: "¿Qué nivel técnico requiere nuestro equipo para trabajar con vosotros?", a: "Ninguno. RITEALMAR entrega soluciones 'llave en mano'. Tu equipo simplemente aprenderá a usar las nuevas herramientas de trabajo, que habitualmente se integran de manera invisible en el software que ya dominan." },
    { q: "¿Están vuestras soluciones de IA adaptadas a la ley de privacidad europea?", a: "Absolutamente. Toda nuestra infraestructura, manejo de datos y uso de APIs de LLMs se rige por estrictos estándares de cumplimiento del RGPD (Reglamento General de Protección de Datos)." },
    { q: "¿Cuál es el primer paso para empezar un proyecto con RITEALMAR?", a: "El primer paso siempre es solicitar nuestra Auditoría de IA Gratuita. En esta sesión evaluamos tu estructura, identificamos las ineficiencias y proponemos un plan de acción sin compromiso." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Sobre RITEALMAR", "item": "https://ritealmar.es/sobre-ritealmar" }
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
        title="Sobre RITEALMAR | Agencia de Inteligencia Artificial para Empresas"
        description="Conoce RITEALMAR, especialistas en automatización, agentes IA y soluciones de Inteligencia Artificial para empresas orientadas al retorno de inversión."
        canonical="https://ritealmar.es/sobre-ritealmar"
        ogType="article"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RITEALMAR",
        "url": "https://ritealmar.es",
        "logo": "https://ritealmar.es/logo.webp",
        "description": "Agencia especializada en Inteligencia Artificial y Automatización para empresas.",
        "sameAs": [
          "https://www.linkedin.com/company/ritealmar"
        ]
      }) }} />

      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero / Introducción */}
      <section className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          <Building2 size={14} /> Entidad Corporativa
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-8 leading-tight">
          Sobre RITEALMAR
        </h1>
        
        <div className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed space-y-6 text-left md:text-center">
          <p>
            RITEALMAR es una agencia especializada en infraestructuras de Inteligencia Artificial y <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-cyan-400 hover:underline">automatización</a> orientada exclusivamente al ámbito corporativo (B2B).
          </p>
          <p>
            <strong className="text-white">Nuestra Misión:</strong> Democratizar el acceso a la tecnología Enterprise, permitiendo que las PYMEs y empresas tradicionales eliminen sus cuellos de botella operativos mediante arquitecturas de software hiper-eficientes.
          </p>
          <p>
            <strong className="text-white">Nuestra Visión:</strong> Un ecosistema empresarial donde las personas no actúen como robots copiando y pegando datos. Creemos que la Inteligencia Artificial debe asumir la carga de trabajo transaccional para que el humano pueda dedicarse a la estrategia, las ventas y la creatividad.
          </p>
          <p>
            <strong className="text-white">Enfoque ROI:</strong> En RITEALMAR no desarrollamos tecnología por moda. Cada agente IA, chatbot o automatización que implementamos está sujeto a una <a href="/calculadora-ahorro-ia" onClick={(e) => handleNavigation(e, '/calculadora-ahorro-ia')} className="text-purple-400 hover:underline">métrica estricta de ahorro de tiempo y Retorno de Inversión (ROI)</a>. Si el proyecto no es altamente rentable para la empresa, no lo ejecutamos.
          </p>
        </div>
      </section>

      {/* ¿Por qué elegir RITEALMAR? */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">¿Por qué elegir RITEALMAR?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <Zap className="text-cyan-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Automatización antes que IA</h3>
              <p className="text-slate-400 text-sm leading-relaxed">La IA requiere bases sólidas. Primero arreglamos y automatizamos tus flujos de datos. Sobre esa estructura limpia y eficiente, desplegamos la inteligencia artificial.</p>
            </div>
            
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <Settings className="text-purple-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Soluciones 100% Personalizadas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Rechazamos las soluciones genéricas. Cada script, integración o <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')} className="text-purple-400 hover:underline">chatbot</a> se programa ad-hoc basándose en tu manera específica de operar y en las reglas de tu negocio.</p>
            </div>
            
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-8 hover:border-[#FF006E]/30 transition-all">
              <Workflow className="text-[#FF006E] mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Integración y Soporte</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Conectamos la IA al software que tu equipo ya usa (CRM, ERP, WhatsApp). La implantación es gradual para asegurar cero interrupciones y brindamos soporte continuo en producción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tecnologías B2B Fundamentales</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Empleamos las infraestructuras de software más avanzadas y robustas para garantizar estabilidad empresarial.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-[#0A1628] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col items-center text-center group">
                <tech.icon size={28} className="text-slate-500 mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">{tech.name}</h3>
                <p className="text-xs text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores y Recursos (Dos columnas) */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Sectores */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Building2 className="text-purple-400" /> Sectores Especializados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="/clinicas"
                onClick={(e) => handleNavigation(e, '/clinicas')}
                className="flex items-center gap-4 bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-purple-500/40 transition-all group"
              >
                <Stethoscope className="text-purple-400" />
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Clínicas</span>
              </a>
              <a 
                href="/inmobiliarias"
                onClick={(e) => handleNavigation(e, '/inmobiliarias')}
                className="flex items-center gap-4 bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-purple-500/40 transition-all group"
              >
                <Building2 className="text-purple-400" />
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Inmobiliarias</span>
              </a>
              <a 
                href="/ecommerce"
                onClick={(e) => handleNavigation(e, '/ecommerce')}
                className="flex items-center gap-4 bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-purple-500/40 transition-all group"
              >
                <ShoppingCart className="text-purple-400" />
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Ecommerce</span>
              </a>
              <a 
                href="/constructoras"
                onClick={(e) => handleNavigation(e, '/constructoras')}
                className="flex items-center gap-4 bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-purple-500/40 transition-all group"
              >
                <HardHat className="text-purple-400" />
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Constructoras</span>
              </a>
            </div>
          </div>

          {/* Recursos */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FileCode className="text-cyan-400" /> Ecosistema de Recursos
            </h2>
            <div className="space-y-4">
              <a 
                href="/blog"
                onClick={(e) => handleNavigation(e, '/blog')}
                className="flex items-center justify-between bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-cyan-400" />
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Blog Técnico</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="/casos-de-uso-ia"
                onClick={(e) => handleNavigation(e, '/casos-de-uso-ia')}
                className="flex items-center justify-between bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-cyan-400" />
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Casos de Uso de IA</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="/recursos-ia"
                onClick={(e) => handleNavigation(e, '/recursos-ia')}
                className="flex items-center justify-between bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileCode size={18} className="text-cyan-400" />
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Recursos IA, Guías y Plantillas</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="/casos-de-exito"
                onClick={(e) => handleNavigation(e, '/casos-de-exito')}
                className="flex items-center justify-between bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Presentation size={18} className="text-cyan-400" />
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Casos de Éxito en Producción</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="/calculadora-ahorro-ia"
                onClick={(e) => handleNavigation(e, '/calculadora-ahorro-ia')}
                className="flex items-center justify-between bg-[#0A1628] border border-white/5 p-5 rounded-xl hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Calculator size={18} className="text-cyan-400" />
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">Calculadora de Ahorro IA</span>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Nuestra Metodología Corporativa</h2>
          <p className="text-slate-400 mb-10 text-lg">Descubre paso a paso cómo pasamos de la auditoría inicial al despliegue técnico en producción, asegurando cero fricción operativa en tu empresa.</p>
          <a 
            href="/como-trabajamos"
            onClick={(e) => handleNavigation(e, '/como-trabajamos')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A1628] border border-cyan-500/30 text-cyan-400 rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all"
          >
            Ver Cómo Trabajamos <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes sobre RITEALMAR</h2>
            <p className="text-slate-400">Resuelve cualquier duda operativa antes de empezar a trabajar con nosotros.</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Comienza tu transformación digital</h2>
          <p className="text-slate-400 mb-10 text-lg">Pide una auditoría técnica sin coste. Analizaremos tu empresa y te entregaremos un mapa claro de los procesos que puedes automatizar para aumentar la rentabilidad.</p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Solicitar Auditoría Gratuita <ArrowRight size={18} />
          </a>
        </div>
      </section>
      
    </div>
  );
}
