import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  FileSpreadsheet, 
  MessageSquare, 
  Globe, 
  Sparkles,
  Layers,
  ArrowUpRight,
  ShoppingCart
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function CasosExito() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: "clinica-whatsapp",
      title: "Automatización de WhatsApp para una Clínica",
      icon: <Stethoscope size={28} className="text-[#00D4FF]" />,
      problem: "Recepción saturada atendiendo llamadas repetitivas y gestionando citas manualmente, lo que provocaba pérdida de pacientes fuera de horario.",
      solution: "Implementación de un Agente IA conectado a la API de WhatsApp, capaz de calificar al paciente, responder dudas de tarifas y conectarse directamente a la agenda médica.",
      technologies: ["WhatsApp Cloud API", "IA Generativa", "Make/Integromat", "Google Calendar"],
      benefits: [
        "Disponibilidad 24/7 ininterrumpida",
        "Reducción significativa del tiempo administrativo",
        "Aumento en la captación de nuevas citas"
      ],
      gradient: "from-[#00D4FF]/20 to-[#FF006E]/10",
      link: "clinica-reduccion-llamadas-ia"
    },
    {
      id: "inmobiliaria-captacion",
      title: "Captación Automática para una Inmobiliaria",
      icon: <Building2 size={28} className="text-[#FF006E]" />,
      problem: "Gran volumen de leads provenientes de Idealista y web, pero falta de tiempo para responder rápido, enfriando las oportunidades de venta.",
      solution: "Un flujo inteligente que captura automáticamente los datos de los portales, clasifica a los clientes según presupuesto y envía un mensaje inmediato de WhatsApp para perfilar el interés.",
      technologies: ["CRM Inmobiliario", "Zapier", "IA de Cualificación", "Email Automation"],
      benefits: [
        "Respuesta inmediata (menos de 1 minuto)",
        "Mayor velocidad comercial y cierre de visitas",
        "Base de datos hiper-segmentada"
      ],
      gradient: "from-[#FF006E]/20 to-[#8B5CF6]/10",
      link: "inmobiliaria-captacion-ia"
    },
    {
      id: "ecommerce-carritos",
      title: "Automatización y Recuperación de Carritos para E-commerce",
      icon: <ShoppingCart size={28} className="text-[#00D4FF]" />,
      problem: "Alta tasa de abandono de carritos (70%) y atención post-venta lenta que enfriaba las compras impulsivas, generando pérdida de facturación.",
      solution: "Un Agente IA en WhatsApp que recupera automáticamente carritos abandonados a los 30 minutos y resuelve dudas de envíos o tallas 24/7.",
      technologies: ["Shopify", "WhatsApp Business API", "OpenAI", "Email Automation"],
      benefits: [
        "Recuperación de oportunidades de venta perdidas",
        "Disminución del 60% en tickets repetitivos",
        "Aumento significativo de la recompra (LTV)"
      ],
      gradient: "from-[#00D4FF]/20 to-[#8B5CF6]/10",
      link: "ecommerce-recuperacion-carritos-ia"
    },
    {
      id: "administrativo",
      title: "Automatización Administrativa B2B",
      icon: <FileSpreadsheet size={28} className="text-[#25D366]" />,
      problem: "El equipo invertía más de 15 horas semanales copiando datos de correos electrónicos a hojas de cálculo y generando presupuestos manualmente.",
      solution: "Desarrollo de un sistema automatizado que lee correos entrantes, extrae la información clave con IA, crea el presupuesto en PDF y lo deja listo para enviar.",
      technologies: ["Google Workspace API", "OpenAI API", "Generación PDF Dinámica"],
      benefits: [
        "Ahorro directo de 15+ horas semanales",
        "Eliminación total de errores humanos (copy-paste)",
        "Escalabilidad sin necesidad de contratar más personal"
      ],
      gradient: "from-[#25D366]/20 to-[#00D4FF]/10"
    },
    {
      id: "chatbot-soporte",
      title: "Chatbot IA para Atención al Cliente",
      icon: <MessageSquare size={28} className="text-[#F59E0B]" />,
      problem: "Soporte técnico saturado por clientes preguntando lo mismo una y otra vez (estado de pedidos, políticas de devolución, manuales).",
      solution: "Agente IA entrenado exclusivamente con la base de conocimientos de la empresa. Integrado en la web corporativa para resolver incidencias de Nivel 1 de forma autónoma.",
      technologies: ["React Chat Widget", "IA RAG (Base de conocimiento)", "Webhook CRM"],
      benefits: [
        "Resolución parcial de consultas repetitivas sin intervención humana",
        "Satisfacción del cliente mejorada por la inmediatez",
        "Reducción drástica de costes de soporte"
      ],
      gradient: "from-[#F59E0B]/20 to-[#EF4444]/10"
    },
    {
      id: "web-inteligente",
      title: "Desarrollo Web con IA Integrada",
      icon: <Globe size={28} className="text-[#8B5CF6]" />,
      problem: "Web corporativa antigua, lenta y que actuaba como un simple 'folleto digital', sin herramientas reales para convertir tráfico en ventas.",
      solution: "Rediseño completo con arquitectura moderna (SPA), formularios hiper-optimizados con validación avanzada y conexión nativa al ecosistema de automatización de la empresa.",
      technologies: ["React / Vite", "Tailwind CSS", "Cloudflare Turnstile", "API Integrations"],
      benefits: [
        "Aumento masivo del ratio de conversión web",
        "Experiencia de usuario premium y súper rápida",
        "Sincronización instantánea con el equipo de ventas"
      ],
      gradient: "from-[#8B5CF6]/20 to-[#00D4FF]/10"
    }
  ];

  const faqs = [
    {
      question: "¿Pueden estas soluciones aplicarse a cualquier sector?",
      answer: "Absolutamente. La inteligencia artificial y la automatización no son exclusivas de empresas tecnológicas. Como puedes ver en nuestros casos de éxito, clínicas, inmobiliarias, academias y empresas de servicios tradicionales son las que mayor retorno de inversión obtienen al modernizarse."
    },
    {
      question: "¿Se necesita saber de programación para manejar estos sistemas?",
      answer: "No. En RITEALMAR diseñamos la infraestructura técnica (el código y las conexiones complejas) pero entregamos interfaces limpias y fáciles de usar. Tú solo gestionas tu negocio a través de paneles intuitivos o recibes notificaciones directamente en tu correo o teléfono."
    },
    {
      question: "¿Qué garantías de privacidad de datos existen?",
      answer: "Todos los sistemas se configuran cumpliendo con la GDPR europea. Los datos de tus clientes están seguros, las integraciones se hacen mediante APIs oficiales certificadas y aseguramos que la información no se use para entrenar modelos públicos externos sin tu consentimiento."
    },
    {
      question: "¿Cuánto tarda en amortizarse la inversión?",
      answer: "En muchos casos, el retorno puede verse en pocos meses si el proceso tiene suficiente volumen. El ahorro en horas de personal en tareas repetitivas y el incremento de ventas por no perder leads lo justifican rápidamente."
    },
    {
      question: "¿Y si mi empresa es muy pequeña, vale la pena automatizar?",
      answer: "Precisamente en empresas muy pequeñas es donde el tiempo vale más. Si solo sois dos personas, no podéis permitiros el lujo de perder 2 horas al día haciendo presupuestos manuales. La automatización es el empleado invisible que te permite competir con empresas más grandes."
    },
    {
      question: "¿Cómo empezamos a trabajar en mi propia empresa?",
      answer: "Todo comienza con una Auditoría Gratuita. Analizamos tus procesos actuales, detectamos los 'cuellos de botella' y te presentamos un plan tecnológico a medida, sin compromiso."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ritealmar.es/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Casos de Uso",
        "item": "https://ritealmar.es/casos-de-exito"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Casos de uso en automatización e Inteligencia Artificial para empresas",
    "description": "Descubre cómo ayudamos a empresas a ahorrar tiempo, captar más clientes y automatizar procesos mediante IA.",
    "author": {
      "@type": "Organization",
      "name": "RITEALMAR"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ritealmar.es/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ritealmar.es/casos-de-exito"
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      <SEO 
        title="Casos de Uso: Automatización e IA para PYMES | RITEALMAR"
        description="Explora casos de uso y ejemplos de cómo RITEALMAR transforma PYMES con automatizaciones, inteligencia artificial, chatbots y desarrollo web orientado a ventas."
        canonical="https://ritealmar.es/casos-de-exito"
      />

      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#00D4FF]/5 via-[#030712] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF006E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Soluciones Reales
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Casos de uso en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">automatización e Inteligencia Artificial</span> para empresas
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo ayudamos a empresas a ahorrar tiempo, captar más clientes y automatizar procesos mediante IA. Menos teoría, más resultados.
          </p>
          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            Algunos ejemplos representan proyectos reales y otros escenarios demostrativos basados en problemas habituales de PYMEs.
          </p>
        </motion.div>
      </header>

      {/* Quick Navigation / Internal Links */}
      <section className="relative px-6 max-w-5xl mx-auto z-10 mb-20">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <span className="text-slate-500">Filtrar por tecnología:</span>
          <a href="/servicios/automatizacion-procesos" onClick={() => trackEvent('internal_link_click', { link: 'automatizaciones-ia' })} className="px-4 py-2 rounded-full bg-[#0A1628] border border-white/10 text-slate-300 hover:border-[#00D4FF]/50 transition-colors">Automatizaciones</a>
          <a href="/chatbots-ia" onClick={() => trackEvent('internal_link_click', { link: 'chatbots-ia' })} className="px-4 py-2 rounded-full bg-[#0A1628] border border-white/10 text-slate-300 hover:border-[#00D4FF]/50 transition-colors">Agentes IA</a>
          <a href="/diseno-web" onClick={() => trackEvent('internal_link_click', { link: 'diseno-web' })} className="px-4 py-2 rounded-full bg-[#0A1628] border border-white/10 text-slate-300 hover:border-[#00D4FF]/50 transition-colors">Desarrollo Web</a>
          <a href="/blog" onClick={() => trackEvent('internal_link_click', { link: 'blog' })} className="px-4 py-2 rounded-full bg-[#0A1628] border border-white/10 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors">Ver Blog Técnico</a>
        </div>
      </section>

      {/* Cases Container */}
      <main className="relative px-6 max-w-5xl mx-auto z-10 pb-20">
        <div className="space-y-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A1628] rounded-[2rem] border border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#030712] rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                    {item.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
                  <div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3">El Problema</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">{item.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3">La Solución</h3>
                    <p className="text-white leading-relaxed text-lg font-medium">{item.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Layers size={16} /> Tecnologías Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ArrowUpRight size={16} /> Beneficios Clave
                    </h3>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#00D4FF] mt-0.5 shrink-0" />
                          <span className="text-slate-200">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.link && (
                  <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                    <a 
                      href={`/casos-de-exito/${item.link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', `/casos-de-exito/${item.link}`);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] hover:bg-[#00D4FF]/10 border border-white/10 hover:border-[#00D4FF]/50 rounded-xl text-white font-bold transition-all group/btn"
                    >
                      Leer Caso Completo <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-32 pt-16 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Dudas sobre la implementación</h2>
            <p className="text-slate-400 text-lg">Resolvemos las preguntas más comunes sobre automatización corporativa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0A1628] border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-start gap-3">
                  <span className="text-[#FF006E] font-black">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-32 mb-10 p-12 bg-gradient-to-br from-[#0A1628] to-[#1a0a2e] border border-[#00D4FF]/30 rounded-[3rem] text-center shadow-[0_0_80px_rgba(0,212,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00D4FF] to-[#FF006E]"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-0 mb-6 tracking-tight">¿Quieres transformar tu empresa con IA?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Analizamos la operativa de tu empresa y te diseñamos un plan de automatización a medida sin coste ni compromiso.
          </p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => {
              e.preventDefault();
              trackEvent('cta_click', { cta_text: 'Solicitar Auditoría IA gratuita', location: 'casos_exito_bottom' });
              window.history.pushState({}, '', '/auditoria-ia-gratis');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-xl tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,110,0.4)] transition-all no-underline"
          >
            Solicitar auditoría IA gratuita <ArrowRight size={24} />
          </a>
        </div>
      </main>
    </div>
  );
}
