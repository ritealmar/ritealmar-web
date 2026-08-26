import React, { useEffect } from 'react';

import { 
  GitMerge, Target, ShieldCheck, Zap, Database, ArrowRight,
  TrendingUp, Clock, Server, CheckCircle2, Bot, PhoneCall, Workflow
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function ComoTrabajamos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const steps = [
    { num: "01", title: "Auditoría Gratuita", desc: "Analizamos tus procesos actuales, sistemas y cuellos de botella para evaluar si la IA es viable para tu caso." },
    { num: "02", title: "Análisis de Procesos", desc: "Mapeamos paso a paso tus flujos de trabajo e identificamos qué tareas manuales consumen más tiempo." },
    { num: "03", title: "Diseño de Automatizaciones", desc: "Creamos el blueprint arquitectónico de la solución, definiendo las APIs y la lógica del Agente IA." },
    { num: "04", title: "Desarrollo", desc: "Programamos y conectamos los flujos en un entorno aislado sin afectar a tu operativa diaria." },
    { num: "05", title: "Integración", desc: "Conectamos los sistemas de Inteligencia Artificial con tus herramientas actuales (CRMs, ERPs, WhatsApp)." },
    { num: "06", title: "Pruebas", desc: "Realizamos tests de estrés, control de calidad y validación de las respuestas conversacionales." },
    { num: "07", title: "Seguimiento y Mejora Continua", desc: "Monitoreamos la solución en tiempo real y aplicamos mejoras basadas en los datos reales de uso." }
  ];

  const technologies = [
    { name: "OpenAI", icon: Bot, desc: "Modelos conversacionales LLM B2B." },
    { name: "WhatsApp Business API", icon: PhoneCall, desc: "Canal conversacional principal." },
    { name: "Google Workspace", icon: Database, desc: "Gestión documental corporativa." },
    { name: "CRMs (HubSpot, Holded)", icon: Target, desc: "Cualificación y sincronización." },
    { name: "Integraciones API REST", icon: GitMerge, desc: "Conexiones backend a medida." },
    { name: "Automatizaciones nativas", icon: Workflow, desc: "Flujos lógicos Make/Zapier." }
  ];

  const faqs = [
    { q: "¿Cuánto tarda de media la implantación de un proyecto?", a: "Depende de la complejidad. Los proyectos de chatbots conversacionales en WhatsApp suelen estar en producción entre 3 y 5 semanas. Sistemas ERP completos pueden requerir 8-12 semanas." },
    { q: "¿Necesitamos parar nuestra actividad mientras integran la IA?", a: "No. En RITEALMAR trabajamos siempre en un entorno de desarrollo ('sandbox'). Solo cuando el sistema supera los tests de calidad, lo conectamos a tu producción de forma limpia." },
    { q: "¿Reemplazará la IA a nuestro equipo actual?", a: "Nuestra filosofía no es reemplazar, sino 'aumentar'. La IA asume la carga burocrática y repetitiva (agendar citas, enviar presupuestos estándar), permitiendo que tu equipo se concentre en cerrar ventas de alto valor y tomar decisiones estratégicas." },
    { q: "¿Qué pasa si mis procesos cambian después del desarrollo?", a: "Todos nuestros desarrollos incluyen una fase de seguimiento y mejora continua. Si tu modelo de negocio cambia, readaptamos las reglas lógicas del Agente IA y sus automatizaciones asociadas." },
    { q: "¿Los datos de mis clientes son privados?", a: "Absolutamente. Desplegamos soluciones Enterprise cumpliendo con el GDPR europeo. Los LLMs que utilizamos mediante API no entrenan modelos públicos con tus datos privados." },
    { q: "¿Qué tecnología base utilizan para los Agentes IA?", a: "Empleamos una combinación de la infraestructura API de OpenAI para la comprensión del lenguaje (NLP) orquestada con lenguajes nativos y plataformas de automatización empresariales." },
    { q: "¿Se puede calcular el Retorno de Inversión (ROI) antes de empezar?", a: "Sí. Durante la fase de Análisis de Procesos, proyectamos las horas que la automatización liberará y las multiplicamos por el coste horario para obtener un ROI claro." },
    { q: "¿Ofrecen soporte técnico post-implantación?", a: "Sí, todos los proyectos incluyen monitoreo de infraestructura y soporte técnico para asegurar la máxima disponibilidad en tus agentes automatizados." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Cómo Trabajamos", "item": "https://ritealmar.es/como-trabajamos" }
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
        title="Cómo trabajamos | Implantación de IA para Empresas | RITEALMAR"
        description="Descubre cómo implantamos soluciones de Inteligencia Artificial, automatización y agentes IA en empresas mediante una metodología orientada al ROI."
        canonical="https://ritealmar.es/como-trabajamos"
        ogType="article"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />


      {/* Glow Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          Metodología Corporativa
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-8 leading-tight">
          Cómo trabajamos en RITEALMAR
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
          <ShieldCheck className="inline-block text-cyan-400 mr-2 mb-1" size={24} />
          Sin promesas vacías: primero analizamos si tiene sentido automatizar tu caso.
        </p>
        
        <div className="bg-[#0A1628] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left md:text-center mt-12 max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">La Filosofía del Retorno de Inversión:</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-800 text-cyan-400 font-bold flex items-center justify-center shrink-0">1</span>
              <span className="font-medium text-slate-300">Automatizar primero.</span>
            </div>
            <ArrowRight className="hidden md:block text-slate-700" />
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-800 text-cyan-400 font-bold flex items-center justify-center shrink-0">2</span>
              <span className="font-medium text-slate-300">Integrar IA después.</span>
            </div>
            <ArrowRight className="hidden md:block text-slate-700" />
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-800 text-purple-400 font-bold flex items-center justify-center shrink-0">3</span>
              <span className="font-medium text-slate-300">Optimizar siempre orientado al ROI.</span>
            </div>
          </div>
          <p className="mt-8 text-slate-400 text-sm md:text-base leading-relaxed">
            No implantamos tecnología por moda. Implantamos sistemas de <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-cyan-400 hover:underline">automatización</a> y procesamiento de datos para eliminar cuellos de botella empresariales. Si un sistema no proyecta ahorros comprobables o aumentos de rentabilidad, no lo construimos.
          </p>
        </div>
      </section>

      {/* Línea Temporal */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Fases del Proyecto</h2>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] border border-cyan-500/30 flex items-center justify-center font-black text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors shrink-0 z-10">
                    {step.num}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-cyan-500/30 to-transparent my-4"></div>
                  )}
                </div>
                <div className="bg-[#0A1628] border border-white/5 p-6 rounded-2xl flex-grow group-hover:border-cyan-500/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué funcionan? */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">¿Por qué nuestros proyectos funcionan?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1">Metodología Comprobada</h4>
                  <p className="text-sm text-slate-400">Implementamos arquitecturas probadas que rigen operaciones en <a href="/casos-de-uso-ia" onClick={(e) => handleNavigation(e, '/casos-de-uso-ia')} className="text-cyan-400 hover:underline">casos de uso</a> a nivel B2B empresarial.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1">Experiencia en Sectores Complejos</h4>
                  <p className="text-sm text-slate-400">Hemos desplegado con éxito <a href="/agentes-ia" onClick={(e) => handleNavigation(e, '/agentes-ia')} className="text-cyan-400 hover:underline">Agentes de IA</a> conversacionales en entornos críticos de datos y servicio al cliente.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1">Implantación Gradual y Segura</h4>
                  <p className="text-sm text-slate-400">No rompemos nada. Integramos los flujos paso a paso sin frenar la operativa diaria de la empresa.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1">Medición Exhaustiva y Soporte</h4>
                  <p className="text-sm text-slate-400">Evaluamos de forma analítica el impacto, corrigiendo y proporcionando soporte técnico continuo tras el lanzamiento.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/casos-de-exito"
              onClick={(e) => handleNavigation(e, '/casos-de-exito')}
              className="inline-block mt-8 font-bold text-purple-400 hover:underline"
            >
              Ver Casos de Éxito en Producción →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 text-center">
              <Clock className="text-cyan-400 mx-auto mb-3" size={24} />
              <span className="text-3xl font-black text-white block mb-1">4 Sem</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tiempo Medio Implantación</span>
            </div>
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 text-center">
              <Zap className="text-purple-400 mx-auto mb-3" size={24} />
              <span className="text-3xl font-black text-white block mb-1">+500</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Automatizaciones Entregadas</span>
            </div>
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 text-center">
              <Server className="text-cyan-400 mx-auto mb-3" size={24} />
              <span className="text-3xl font-black text-white block mb-1">99.9%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Disponibilidad SLA</span>
            </div>
            <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 text-center">
              <TrendingUp className="text-purple-400 mx-auto mb-3" size={24} />
              <span className="text-3xl font-black text-white block mb-1">&lt;1s</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tiempo Respuesta Bots</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 italic mt-6 text-center md:text-right">Métricas orientativas basadas en escenarios estándar.</p>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico B2B</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Empleamos las infraestructuras cloud y modelos de lenguaje más robustos y seguros del mercado global.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-[#0A1628] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col items-center text-center">
                <tech.icon size={32} className="text-slate-600 mb-4" />
                <h3 className="font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/recursos-ia"
              onClick={(e) => handleNavigation(e, '/recursos-ia')}
              className="inline-flex items-center text-slate-400 font-bold hover:text-cyan-400 transition-colors text-sm"
            >
              Explorar Recursos Técnicos <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes de Contratación</h2>
            <p className="text-slate-400">Todo lo relativo a la gestión del proyecto técnico y comercial.</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Inicia tu proceso de automatización</h2>
          <p className="text-slate-400 mb-10 text-lg">Hagamos el "Paso 01: Auditoría Gratuita". Comprobaremos sin coste de qué forma específica la Inteligencia Artificial puede disparar la productividad de tu negocio.</p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Solicitar auditoría gratuita <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}
