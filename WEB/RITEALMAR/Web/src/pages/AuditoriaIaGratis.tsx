import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, ClipboardCheck, Sparkles, Building2, AlertTriangle, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { trackEvent } from '../utils/analytics';
import JsonLd from '../components/JsonLd';
import SEO from '../components/SEO';

export default function AuditoriaIaGratis() {

  const faqs = [
    { q: "¿La auditoría tiene coste?", a: "No. La auditoría inicial es gratuita y sin compromiso." },
    { q: "¿Tengo que tener conocimientos técnicos?", a: "No. Te lo explicamos de forma sencilla y orientada a negocio." },
    { q: "¿La auditoría obliga a contratar algo?", a: "No. El objetivo es darte una primera valoración clara. Después decides si quieres avanzar." },
    { q: "¿Para qué tipo de empresas sirve?", a: "Principalmente para PYMEs, clínicas, inmobiliarias, comercios y empresas de servicios que reciben contactos por web, WhatsApp, email o formularios." },
    { q: "¿Qué tipo de soluciones puede proponer RITEALMAR?", a: "Automatizaciones, chatbots, agentes de IA, formularios conectados, CRM, diseño web, software a medida y sistemas de seguimiento comercial." }
  ];

  // FAQ Schema temporalmente desactivado para SEO P0

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-24 pb-12 lg:pb-20">
      <SEO 
        title="Auditoría IA gratuita para PYMEs | RITEALMAR"
        description="Solicita una auditoría gratuita de IA y automatización para tu empresa. Detectamos procesos repetitivos, oportunidades de captación y mejoras con inteligencia artificial."
        canonical="https://ritealmar.es/auditoria-ia-gratis"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-10 pb-16 lg:py-32 overflow-hidden flex items-center">
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Auditoría gratuita de IA y automatización para PYMEs
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              En 30 minutos revisamos tu negocio y te decimos qué procesos puedes automatizar primero para ahorrar tiempo, captar más clientes y reducir tareas repetitivas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.a 
                href="#formulario-auditoria"
                onClick={() => trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría gratuita' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all hover:shadow-[0_0_50px_rgba(255,0,110,0.6)] w-full sm:w-auto"
              >
                Solicitar auditoría gratuita
                <ArrowRight size={24} />
              </motion.a>

              <motion.a 
                href="https://wa.me/34611155415"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { event_label: 'WhatsApp Hero Auditoria' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl tracking-wide transition-all hover:bg-[#128C7E] w-full sm:w-auto"
              >
                <MessageCircle size={24} />
                Hablar por WhatsApp
              </motion.a>
            </div>

            <p className="text-slate-400 text-sm">
              Sin compromiso. Pensado para PYMEs, clínicas, inmobiliarias, comercios y empresas de servicios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUÉ ANALIZAMOS EN LA AUDITORÍA */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Qué analizamos en la auditoría</h2>
          <p className="text-slate-400 text-lg">Detectamos oportunidades concretas, no ideas genéricas. El objetivo es encontrar automatizaciones útiles, realistas y fáciles de implantar.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Atención inicial por WhatsApp o formularios",
            "Captación de clientes desde la web",
            "Seguimiento comercial de leads",
            "Tareas administrativas repetitivas",
            "Procesos que podrían automatizarse con IA",
            "Herramientas actuales: web, CRM, formularios, Calendly, email o Sheets"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0A1628]/80 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-[#00D4FF]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-[#00D4FF]" size={20} />
              </div>
              <p className="text-slate-300 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. QUÉ RECIBIRÁS */}
      <section className="px-6 py-20 bg-[#050B14]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Qué recibirás</h2>
            <p className="text-slate-400 text-lg mb-8">Al finalizar, sabrás qué automatizar primero, qué evitar y qué tendría más sentido para tu empresa.</p>
            <ul className="space-y-6">
              {[
                "Diagnóstico inicial de procesos automatizables",
                "Recomendaciones priorizadas por impacto y facilidad",
                "Ideas concretas para mejorar captación y seguimiento",
                "Primera propuesta orientativa sin compromiso"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF006E]/10 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="text-[#FF006E]" size={16} />
                  </div>
                  <span className="text-lg text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 flex gap-4">
              <a href="#formulario-auditoria" onClick={() => trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría qué recibirás' })} className="inline-flex items-center gap-2 bg-[#00D4FF] text-black px-6 py-3 rounded-xl font-bold transition-all hover:bg-cyan-400">
                Solicitar auditoría gratuita
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#0A1628] rounded-3xl p-8 border border-white/5 shadow-2xl relative"
          >
             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[#FF006E]"></div>
             <ClipboardCheck size={48} className="text-[#FF006E] mb-6 opacity-80" />
             <h3 className="text-2xl font-bold mb-4">Te damos una primera valoración clara</h3>
             <p className="text-slate-300 leading-relaxed">
               No te prometemos soluciones mágicas ni resultados exagerados. Priorizamos automatizaciones útiles y realistas que tu equipo pueda empezar a usar pronto. Podemos ayudarte a detectar oportunidades reales.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 4. PARA QUIÉN ES Y PARA QUIÉN NO ES */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Para quién es y para quién NO es</h2>
          <p className="text-slate-400 text-lg">Esta auditoría está pensada para negocios que reciben clientes recurrentemente y tienen procesos manuales que les quitan tiempo. No es una consultoría completa, es un diagnóstico inicial estratégico.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#00D4FF] mb-6 text-center">Sí es para ti si...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Clínicas con muchas citas" },
                { label: "Inmobiliarias" },
                { label: "Comercios con stock" },
                { label: "Empresas B2B" },
                { label: "Profesionales saturados" },
                { label: "Negocios con mucho WhatsApp" },
              ].map((item, i) => (
                <motion.div 
                  key={`yes-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0A1628]/50 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 text-center"
                >
                  <Building2 className="text-[#00D4FF]" size={24} />
                  <span className="font-bold text-slate-200 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FF006E] mb-6 text-center">NO es para ti si...</h3>
            <div className="space-y-4">
              {[
                "Buscas una consultoría estratégica empresarial integral gratuita.",
                "Prefieres mantener tus procesos 100% analógicos y no deseas incorporar herramientas digitales.",
                "Tu negocio está en fase de idea y aún no tienes un flujo regular de clientes o tareas que optimizar.",
                "Buscas desarrollo de IA de investigación profunda o Machine Learning puro."
              ].map((item, i) => (
                <div key={`no-${i}`} className="flex items-start gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/10">
                  <AlertTriangle className="text-[#FF006E] shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROBLEMAS HABITUALES */}
      <section className="px-6 py-20 bg-[#050B14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Problemas habituales que podemos detectar</h2>
            <p className="text-slate-400 text-lg">Si te sientes identificado con alguno de estos puntos, esta auditoría es para ti.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Leads que llegan por formularios y no se siguen bien",
              "Consultas repetidas por WhatsApp",
              "Clientes que preguntan lo mismo una y otra vez",
              "Falta de organización comercial",
              "Procesos manuales que consumen horas",
              "Web que informa, pero no convierte",
              "Falta de conexión entre formulario, email, CRM o agenda"
            ].map((problema, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A1628] border border-red-500/10"
              >
                <AlertTriangle className="text-[#FF006E] shrink-0 mt-1" size={20} />
                <span className="text-slate-300 font-medium">{problema}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CÓMO FUNCIONA */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Cómo funciona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="w-16 h-16 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Solicitas la auditoría gratuita</h3>
              <p className="text-slate-400">Rellenas el formulario o nos contactas por WhatsApp.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Revisamos tu caso</h3>
              <p className="text-slate-400">Analizamos tus procesos, canales de contacto y puntos donde puedes ahorrar tiempo.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-16 h-16 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Qué ocurre después</h3>
              <p className="text-slate-400">Te enviamos una propuesta orientativa con costes y tiempos reales. Si te encaja, trabajamos juntos. Si no, te llevas el diagnóstico gratis.</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <a href="#formulario-auditoria" onClick={() => trackEvent('click_auditoria_gratis', { event_label: 'Botón auditoría cómo funciona' })} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              Solicitar auditoría gratuita
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ Y 9. FORMULARIO */}
      <section id="formulario-auditoria" className="px-6 py-20 bg-[#050B14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-16 items-start">
          
          {/* Formulario */}
          <div className="xl:col-span-3">
            <div className="bg-[#0A1628] rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF006E] rounded-t-3xl"></div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Solicitar Auditoría</h3>
                <p className="text-slate-400 mb-4">Cuéntanos tu caso y revisaremos qué procesos puedes automatizar con IA.</p>
              </div>
              
              <ContactForm eventName="submit_auditoria_ia" eventLabel="Formulario auditoría IA" submitText="Solicitar auditoría gratuita" />
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://wa.me/34611155415"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { event_label: 'WhatsApp form footer' })}
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-white transition-colors"
                >
                  <MessageCircle size={18} /> O si lo prefieres, háblanos por WhatsApp
                </a>
              </div>
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
                  <span className="text-[#00D4FF]">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

