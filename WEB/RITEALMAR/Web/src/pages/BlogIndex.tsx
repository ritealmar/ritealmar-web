import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, BrainCircuit, Zap, Terminal, Settings } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "¿Cuánto cuesta automatizar una PYME en España?",
      description: "Descubre los costes reales, herramientas necesarias y cuándo es verdaderamente rentable invertir en automatización.",
      category: "Estrategia",
      readTime: "8 min",
      url: "/blog/cuanto-cuesta-automatizar-pyme",
      icon: <BookOpen size={24} className="text-amber-400" />,
      gradient: "from-amber-400/20 to-orange-500/20",
      borderGlow: "group-hover:border-amber-400/50",
      buttonColor: "text-amber-400 group-hover:text-white bg-amber-400/10 group-hover:bg-amber-400"
    },
    {
      title: "CRM estándar vs CRM a medida: ¿qué necesita tu PYME?",
      description: "Comparamos costes, escalabilidad y mantenimiento entre licencias SaaS (HubSpot, Pipedrive) y el desarrollo de un software propio.",
      category: "Software a Medida",
      readTime: "9 min",
      url: "/blog/crm-estandar-vs-medida-pyme",
      icon: <Settings size={24} className="text-blue-400" />,
      gradient: "from-blue-400/20 to-cyan-500/20",
      borderGlow: "group-hover:border-blue-400/50",
      buttonColor: "text-blue-400 group-hover:text-white bg-blue-400/10 group-hover:bg-blue-400"
    },
    {
      title: "Automatización de procesos para pymes: ejemplos y costes en 2026",
      description: "Guía práctica para empresas y pymes sobre qué procesos automatizar primero, ejemplos reales de flujos, uso de inteligencia artificial, costes y criterios para priorizar automatizaciones.",
      category: "IA y Automatización",
      readTime: "10 min",
      url: "/blog/automatizacion-procesos-pymes",
      icon: <Settings size={24} className="text-emerald-400" />,
      gradient: "from-emerald-400/20 to-cyan-500/20",
      borderGlow: "group-hover:border-emerald-400/50",
      buttonColor: "text-emerald-400 group-hover:text-white bg-emerald-400/10 group-hover:bg-emerald-400"
    },
    {
      title: "Automatización de citas para clínicas médicas con IA",
      description: "Guía para reducir ausentismo y automatizar la gestión de pacientes con Inteligencia Artificial, liberando a la recepción de tareas repetitivas.",
      category: "Clínicas B2B",
      readTime: "15 min",
      url: "/blog/automatizacion-citas-clinicas-ia",
      icon: <Terminal size={24} className="text-[#FF006E]" />,
      gradient: "from-[#FF006E]/20 to-[#00D4FF]/20",
      borderGlow: "group-hover:border-[#FF006E]/50",
      buttonColor: "text-[#FF006E] group-hover:text-white bg-[#FF006E]/10 group-hover:bg-[#FF006E]"
    },
    {
      title: "Inteligencia Artificial para Inmobiliarias: captar propiedades y vender más",
      description: "Descubre cómo automatizar la captación en Idealista, calificar compradores 24/7 y escalar las exclusivas de tu agencia inmobiliaria.",
      category: "Real Estate B2B",
      readTime: "14 min",
      url: "/blog/ia-inmobiliarias-captacion-ventas",
      icon: <BookOpen size={24} className="text-purple-500" />,
      gradient: "from-purple-500/20 to-[#00D4FF]/20",
      borderGlow: "group-hover:border-purple-500/50",
      buttonColor: "text-purple-500 group-hover:text-white bg-purple-500/10 group-hover:bg-purple-500"
    },
    {
      title: "Cómo automatizar WhatsApp para una PYME y ahorrar más de 10 horas de trabajo cada semana",
      description: "Descubre cómo integrar la API Oficial de WhatsApp Business para responder clientes 24/7, agendar citas de forma inteligente y recuperar tu tiempo.",
      category: "Automatización",
      readTime: "10 min",
      url: "/blog/automatizar-whatsapp-pyme",
      icon: <Zap size={24} className="text-[#25D366]" />,
      gradient: "from-[#25D366]/20 to-[#00D4FF]/20",
      borderGlow: "group-hover:border-[#25D366]/50",
      buttonColor: "text-[#25D366] group-hover:text-white bg-[#25D366]/10 group-hover:bg-[#25D366]"
    },
    {
      title: "Cómo automatizar la captación de clientes con IA en una PYME",
      description: "Aprende a transformar formularios estáticos en flujos automatizados que cualifican leads y cierran ventas mientras duermes.",
      category: "IA Comercial",
      readTime: "8 min",
      url: "/blog/automatizar-captacion-clientes-ia-pyme",
      icon: <BrainCircuit size={24} className="text-[#00D4FF]" />,
      gradient: "from-[#00D4FF]/20 to-[#FF006E]/20",
      borderGlow: "group-hover:border-[#00D4FF]/50",
      buttonColor: "text-[#00D4FF] group-hover:text-white bg-[#00D4FF]/10 group-hover:bg-[#00D4FF]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      <SEO 
        title="Blog de IA y automatización para PYMES | RITEALMAR"
        description="Descubre casos de uso, guías técnicas y estrategias de Inteligencia Artificial y automatización de WhatsApp para escalar las operaciones de tu negocio B2B."
        canonical="https://ritealmar.es/blog"
      />

      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#00D4FF]/10 via-[#030712] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#FF006E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
            <Terminal size={14} className="text-[#00D4FF]" /> Recursos RITEALMAR
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Blog de IA y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">automatización</span> para PYMES
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Casos de uso, guías técnicas y estrategias prácticas para ahorrar horas, captar más clientes y optimizar el rendimiento de tu negocio.
          </p>
        </motion.div>
      </header>

      {/* Articles Grid */}
      <main className="relative px-6 max-w-6xl mx-auto z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                trackEvent('blog_article_click', { article: article.title });
                window.history.pushState({}, '', article.url);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className={`group block bg-[#0A1628] rounded-3xl p-8 border border-white/5 ${article.borderGlow} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#030712] border border-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                    {article.icon}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-[#030712] px-3 py-1 rounded-full border border-white/5">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 bg-[#030712] px-3 py-1 rounded-full border border-white/5">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {article.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${article.buttonColor}`}>
                    Leer artículo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Links to Core Services */}
        <div className="mt-20 py-10 border-y border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <p className="col-span-1 md:col-span-3 text-slate-400 font-medium mb-4">Servicios relacionados con nuestros artículos:</p>
          <a href="/servicios/automatizacion-procesos" onClick={() => trackEvent('internal_link_click', { link: 'automatizaciones-ia' })} className="text-slate-300 hover:text-[#00D4FF] font-bold transition-colors">
            Flujos de Automatización IA
          </a>
          <a href="/chatbots-ia" onClick={() => trackEvent('internal_link_click', { link: 'chatbots-ia' })} className="text-slate-300 hover:text-[#00D4FF] font-bold transition-colors">
            Agentes Inteligentes y Chatbots
          </a>
          <a href="/auditoria-ia-gratis" onClick={() => trackEvent('internal_link_click', { link: 'auditoria-ia-gratis' })} className="text-slate-300 hover:text-[#FF006E] font-bold transition-colors">
            Auditoría IA Gratuita
          </a>
        </div>

        {/* Final CTA */}
        <div className="mt-20 mb-8 p-10 bg-gradient-to-br from-[#0A1628] to-[#1a0a2e] border border-cyan-500/30 rounded-3xl text-center shadow-[0_0_50px_rgba(0,212,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF006E]"></div>
          <h3 className="text-3xl md:text-4xl font-black text-white mt-0 mb-6">¿Quieres aplicar esto en tu propia empresa?</h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Deja de leer teoría y pasa a la acción. Analizamos tus procesos manuales gratis y te mostramos una hoja de ruta técnica clara para automatizarlos.
          </p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={(e) => {
              e.preventDefault();
              trackEvent('cta_click', { cta_text: 'Solicitar auditoría gratuita', location: 'blog_index_bottom' });
              window.history.pushState({}, '', '/auditoria-ia-gratis');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-xl tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all no-underline"
          >
            Solicitar Auditoría IA <ArrowRight size={22} />
          </a>
        </div>
      </main>
    </div>
  );
}
