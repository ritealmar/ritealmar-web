import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Send, ShieldCheck, ClipboardCheck, Sparkles, Building2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { trackEvent } from '../utils/analytics';
import PendingValidationSection from '../components/PendingValidationSection';
import JsonLd from '../components/JsonLd';
import RecursosRecomendados from '../components/RecursosRecomendados';
import SEO from '../components/SEO';

export default function AuditoriaIaGratis() {

  const faqs = [
    { q: "¿La auditoría es realmente gratuita?", a: "Sí, el diagnóstico inicial y la propuesta de mejora no tienen ningún coste. Lo hacemos porque si ves el valor, es muy probable que quieras que nosotros mismos implementemos la solución, aunque no estás obligado." },
    { q: "¿Tengo que contratar algo después?", a: "No. Recibes la hoja de ruta y decides si la implementas con tu equipo, con otra agencia, o con nosotros (RITEALMAR)." },
    { q: "¿Cuánto tarda el análisis?", a: "Una vez envíes el formulario, solemos tardar entre 24 y 48 horas laborables en enviarte las conclusiones o en agendar una breve llamada para mostrártelo." },
    { q: "¿Sirve si todavía no tengo web?", a: "Sí. Analizaremos tu modelo de negocio y cómo la inteligencia artificial o un primer desarrollo web puede ayudarte a arrancar con una ventaja competitiva brutal." },
    { q: "¿Trabajáis con empresas de toda España?", a: "Sí, trabajamos en formato 100% digital con empresas de cualquier punto de España, haciendo reuniones por Meet o Zoom." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-24 pb-20">
      <SEO 
        title="Auditoría Gratuita de IA y Automatización para PYMES | RITEALMAR"
        description="Auditoría IA gratuita para pymes: ahorra tiempo, reduce tareas manuales y descubre oportunidades reales de automatización."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <JsonLd data={faqSchema} />
      
      {/* HERO SECTION */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden flex items-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF006E]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
              <Sparkles size={16} /> 100% Sin Compromiso
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Auditoría <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">gratuita</span> para detectar procesos automatizables en tu empresa
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Analizamos tu web, procesos, formularios, atención al cliente y tareas repetitivas para decirte dónde puedes ahorrar tiempo, captar más clientes y automatizar mejor.
            </p>

            <motion.a 
              href="#formulario-auditoria"
              onClick={() => trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all hover:shadow-[0_0_50px_rgba(255,0,110,0.6)] w-full sm:w-auto"
            >
              Solicitar auditoría IA gratuita
              <ArrowRight size={24} />
            </motion.a>
          </motion.div>
        </div>
      </section>



      {/* BENEFICIOS CONCRETOS */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Detectar procesos manuales repetitivos.",
              "Mejorar captación de leads.",
              "Automatizar respuestas por web o WhatsApp.",
              "Priorizar oportunidades comerciales.",
              "Mejorar conversión de la web.",
              "Reducir tiempo perdido en tareas administrativas."
            ].map((beneficio, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A1628]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-[#00D4FF]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-[#00D4FF]" size={20} />
                </div>
                <p className="text-slate-300 font-medium">{beneficio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="px-6 py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Qué analizamos en la auditoría</h2>
    <ul className="space-y-4 text-left text-slate-300">
      <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00D4FF] shrink-0 mt-0.5" size={20} /> Procesos repetitivos</li>
      <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00D4FF] shrink-0 mt-0.5" size={20} /> Herramientas actuales</li>
      <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00D4FF] shrink-0 mt-0.5" size={20} /> Pérdidas de tiempo operativo</li>
      <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00D4FF] shrink-0 mt-0.5" size={20} /> Oportunidades de automatización con IA</li>
    </ul>
  </div>
</section>
      {/* LECTURA RECOMENDADA */}
      <section className="px-6 relative z-10 -mt-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border border-cyan-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-[#15203A] transition-colors shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="text-cyan-400" size={24} />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">📖 Guía recomendada</span>
                <h3 className="text-white font-bold text-lg md:text-xl m-0">Cómo automatizar la captación de clientes con IA en una PYME</h3>
              </div>
            </div>
            <a 
              href="/blog/automatizar-captacion-clientes-ia-pyme"
              onClick={(e) => {
                e.preventDefault();
                trackEvent('blog_banner_click', { link: 'automatizar_captacion_pyme_auditoria' });
                window.history.pushState({}, '', '/blog/automatizar-captacion-clientes-ia-pyme');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="shrink-0 flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-xl font-bold transition-all w-full sm:w-auto justify-center"
            >
              Leer artículo <ArrowRight size={18} className="text-cyan-400" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* QUÉ REVISAMOS Y QUÉ RECIBIRÁS (2 COLUMNAS) */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-transparent"></div>
            <div className="w-14 h-14 bg-[#00D4FF]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#00D4FF]/20">
              <ClipboardCheck className="text-[#00D4FF]" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Qué revisamos</h2>
            <ul className="space-y-5">
              {[
                "Web y conversión actual",
                "Formularios y captación de leads",
                "WhatsApp, email y atención al cliente",
                "Tareas repetitivas en tu día a día",
                "CRM, Excel o herramientas internas",
                "Oportunidades viables de IA y automatización"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="text-[#00D4FF] shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF006E] to-transparent"></div>
            <div className="w-14 h-14 bg-[#FF006E]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#FF006E]/20">
              <ShieldCheck className="text-[#FF006E]" size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Solicitud recibida.</h3>
            <ul className="space-y-5">
              {[
                "Diagnóstico inicial detallado",
                "Lista de mejoras prioritarias y urgentes",
                "Ideas concretas de automatización para tu caso",
                "Recomendación del Stack de herramientas (IA/No-Code)",
                "Presupuesto orientativo sin compromiso (por si quieres que lo implementemos nosotros)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="text-[#FF006E] shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="px-6 py-20 bg-[#050B14]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Para quién es esta auditoría?</h2>
          <p className="text-slate-400 text-lg">Diseñada para negocios B2B y empresas de servicios que ya están operando pero sienten que están perdiendo tiempo en tareas manuales.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { label: "Clínicas", icon: Building2 },
            { label: "Inmobiliarias", icon: Building2 },
            { label: "E-commerce", icon: Building2 },
            { label: "Empresas de servicios", icon: Building2 },
            { label: "PYMEs", icon: Building2 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0A1628] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 text-center hover:bg-white/5 transition-colors"
            >
              <item.icon className="text-[#00D4FF]" size={32} />
              <span className="font-bold text-slate-200">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORMULARIO Y FAQ */}
      <section id="formulario-auditoria" className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-16 items-start">
          
          {/* Formulario */}
          <div className="xl:col-span-3">
            <div className="bg-[#0A1628] rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Solicitar Auditoría</h3>
                <p className="text-slate-400 mb-4">Cuéntanos tu caso y revisaremos qué procesos puedes automatizar con IA.</p>
                <div className="inline-flex items-center gap-2 bg-[#FF006E]/10 border border-[#FF006E]/20 text-[#FF006E] px-4 py-2 rounded-lg text-sm font-bold">
                  <ShieldCheck size={16} />
                  Sin compromiso. Te responderemos con una primera valoración clara.
                </div>
              </div>
              <ContactForm eventName="submit_auditoria_ia" eventLabel="Formulario auditoría IA" submitText="Solicitar auditoría gratuita" />
            </div>
          </div>

          {/* FAQ */}
          <div className="xl:col-span-2 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Preguntas Frecuentes</h3>
              <p className="text-slate-400">Todo transparente, sin letra pequeña.</p>
            </div>

            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A1628]/50 p-6 rounded-2xl border border-white/5"
              >
                <h4 className="font-bold text-white text-lg mb-2 flex items-start gap-3">
                  <span className="text-[#FF006E]">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PUNTOS PENDIENTES */}
      <PendingValidationSection />

      <RecursosRecomendados />

      {/* CTA FINAL */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#00D4FF]/10 to-[#FF006E]/10 rounded-3xl p-10 md:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF006E]"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">No dejes que tu competencia te gane terreno</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Descubre hoy mismo las fugas de tiempo y dinero en tus procesos y cómo la IA puede resolverlos.
          </p>
          <a 
            href="#formulario-auditoria"
            onClick={() => trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita' })}
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-lg tracking-wide transition-all hover:scale-105 w-full sm:w-auto"
          >
            Solicitar auditoría IA gratuita <Send size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}
