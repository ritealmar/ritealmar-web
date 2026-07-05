import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ArrowUpRight, ArrowDownRight, MessageSquare, ShieldCheck, Quote, Home, Building2, MessageCircle, Bot, Users } from 'lucide-react';
import SEO from '../components/SEO';
import RecursosRecomendados from '../components/RecursosRecomendados';
import { trackEvent } from '../utils/analytics';

export default function CasoExitoInmobiliariaIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    window.history.pushState({}, '', '/casos-de-exito');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <SEO 
        title="Caso de Éxito Inmobiliarias IA: Captación Automática | RITEALMAR"
        description="Descubre cómo esta agencia inmobiliaria logró responder en menos de 1 minuto y aumentó un 275% sus conversiones integrando un Chatbot IA y WhatsApp."
        canonical="https://ritealmar.es/casos-de-exito/inmobiliaria-captacion-ia"
        ogType="article"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RITEALMAR",
          "url": "https://ritealmar.es",
          "logo": "https://ritealmar.es/logo.webp"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es" },
            { "@type": "ListItem", "position": 2, "name": "Casos de Éxito", "item": "https://ritealmar.es/casos-de-exito" },
            { "@type": "ListItem", "position": 3, "name": "Caso de Éxito Inmobiliaria IA", "item": "https://ritealmar.es/casos-de-exito/inmobiliaria-captacion-ia" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cómo una agencia inmobiliaria multiplicó sus captaciones desde Idealista con IA",
          "description": "Descubre cómo esta agencia inmobiliaria logró responder en menos de 1 minuto y aumentó un 275% sus conversiones integrando un Chatbot IA y WhatsApp.",
          "author": { "@type": "Organization", "name": "RITEALMAR" },
          "publisher": { "@type": "Organization", "name": "RITEALMAR", "logo": { "@type": "ImageObject", "url": "https://ritealmar.es/logo.webp" } },
          "mainEntityOfPage": "https://ritealmar.es/casos-de-exito/inmobiliaria-captacion-ia"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es un Agente IA para inmobiliarias?",
              "acceptedAnswer": { "@type": "Answer", "text": "Un Agente IA es un asistente virtual 24/7 capaz de cualificar leads de portales, responder dudas sobre inmuebles y agendar visitas automáticamente." }
            },
            {
              "@type": "Question",
              "name": "¿Cómo automatiza la IA la captación de leads en Idealista o Fotocasa?",
              "acceptedAnswer": { "@type": "Answer", "text": "Conectamos los portales a WhatsApp mediante herramientas de automatización de IA, respondiendo inmediatamente a cada lead para no perderlo frente a la competencia." }
            },
            {
              "@type": "Question",
              "name": "¿Puede el Chatbot IA integrarse con mi CRM inmobiliario?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí, nuestros Chatbots IA envían la ficha completa del cliente, presupuesto y zona de interés directamente a tu CRM." }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto cuesta implementar IA en mi agencia?",
              "acceptedAnswer": { "@type": "Answer", "text": "Cada agencia requiere módulos diferentes. Te invitamos a solicitar una Auditoría IA Gratuita para evaluar el tamaño del despliegue." }
            },
            {
              "@type": "Question",
              "name": "¿Es difícil usar la IA si mi equipo de asesores no es tecnológico?",
              "acceptedAnswer": { "@type": "Answer", "text": "No, todo ocurre en segundo plano (Back-Office). Tu equipo solo recibe en su WhatsApp o CRM los leads ya filtrados y listos para visitar." }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto se tarda en configurar la automatización de WhatsApp?",
              "acceptedAnswer": { "@type": "Answer", "text": "Generalmente, podemos desplegar los flujos de cualificación inmobiliaria iniciales en 2 a 3 semanas." }
            }
          ]
        }
      ]) }} />

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 hover:text-[#00D4FF] transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Volver a Casos de Éxito
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#00D4FF] to-[#FF006E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">R</span>
            </div>
            <span className="font-bold tracking-widest text-lg hidden sm:block">RITEALMAR</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#FF006E]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#FF006E]/30 text-[#FF006E] font-mono text-sm font-bold mb-6 shadow-[0_0_15px_rgba(255,0,110,0.2)]"
          >
            <ShieldCheck size={16} /> Caso Ilustrativo de Éxito
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-white max-w-5xl mx-auto leading-tight"
          >
            Cómo una inmobiliaria redujo el tiempo de respuesta a 1 minuto con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-[#8B5CF6]">Automatización de IA</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 relative pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Situación Inicial & Problemas Detectados */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Situación Inicial y Problemas Detectados</h2>
              <div className="prose prose-invert prose-lg text-slate-300">
                <p>
                  Una agencia <a href="/inmobiliarias" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/inmobiliarias'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">inmobiliaria tradicional</a> recibía cientos de consultas semanales a través de portales inmobiliarios (Idealista, Fotocasa) y su sitio web. 
                </p>
                <p>Detectamos tres problemas principales:</p>
                <ul>
                  <li><strong>Lentitud en la respuesta:</strong> Al responder de forma manual, a veces tardaban 24 horas en contactar a un lead. Para entonces, el cliente ya estaba hablando con 3 agencias competidoras.</li>
                  <li><strong>Sobrecarga comercial:</strong> Los asesores perdían gran parte de su tiempo enseñando pisos a personas sin capacidad de compra o financiación.</li>
                  <li><strong>Falta de cualificación:</strong> La captación no estaba perfilada y el CRM era caótico.</li>
                </ul>
              </div>
            </motion.div>

            {/* Solución Implementada */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Solución Implementada</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Rediseñamos la estrategia de prospección implementando un flujo de <a href="/servicios/automatizacion-procesos" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/servicios/automatizacion-procesos'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">automatización avanzada</a> que conecta de forma transparente los portales de vivienda con un canal de WhatsApp Business automático.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Desplegamos <a href="/agentes-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/agentes-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Agentes de Inteligencia Artificial</a> diseñados para extraer los datos entrantes (webhooks de Zapier o API), enviar una respuesta empática instantánea en menos de 1 minuto, y formular preguntas clave para cualificar económicamente al usuario.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg">
                  <MessageSquare className="text-[#FF006E] mb-4 w-8 h-8" />
                  <h3 className="font-bold text-lg mb-2 text-white"><a href="/chatbots-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/chatbots-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-white hover:text-[#00D4FF] transition-colors">Chatbots IA</a> Cualificadores</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Preguntan sobre plazos de mudanza y si necesitan financiación. Solo derivan al asesor a clientes con viabilidad confirmada.
                  </p>
                </div>
                <div className="bg-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg">
                  <CheckCircle2 className="text-[#00D4FF] mb-4 w-8 h-8" />
                  <h3 className="font-bold text-lg mb-2 text-white">Sincronización de CRM</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Cada interacción o presupuesto dado se registra automáticamente en el CRM del cliente sin requerir que un asesor haga 'copy-paste'.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tecnologías Utilizadas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Tecnologías Utilizadas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Tech 1 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#FF006E]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF006E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Home className="text-[#FF006E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#FF006E] transition-colors mb-1">Idealista</h3>
                    <p className="text-slate-400 text-sm leading-snug">Captación automática de nuevos contactos.</p>
                  </div>
                </div>

                {/* Tech 2 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="text-[#00D4FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#00D4FF] transition-colors mb-1">Fotocasa</h3>
                    <p className="text-slate-400 text-sm leading-snug">Integración con los principales portales inmobiliarios.</p>
                  </div>
                </div>

                {/* Tech 3 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#FF006E]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF006E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-[#FF006E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#FF006E] transition-colors mb-1">WhatsApp Business API</h3>
                    <p className="text-slate-400 text-sm leading-snug">Respuesta inmediata y cualificación automática.</p>
                  </div>
                </div>

                {/* Tech 4 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Bot className="text-[#00D4FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#00D4FF] transition-colors mb-1">OpenAI</h3>
                    <p className="text-slate-400 text-sm leading-snug">Asistente inteligente para compradores y propietarios.</p>
                  </div>
                </div>

                {/* Tech 5 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#FF006E]/30 transition-colors group flex items-start gap-4 sm:col-span-2">
                  <div className="w-10 h-10 bg-[#FF006E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-[#FF006E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#FF006E] transition-colors mb-1">CRM</h3>
                    <p className="text-slate-400 text-sm leading-snug">Clasificación automática de leads y seguimiento comercial.</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Testimonio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a0a2e] to-[#0A1628] border border-white/10 rounded-3xl p-8 relative mt-16"
            >
              <Quote size={40} className="text-[#00D4FF]/20 absolute top-6 left-6" />
              <div className="relative z-10 pl-8 pt-4">
                <p className="text-xl italic text-slate-300 leading-relaxed mb-6 font-serif">
                  "El nivel de velocidad al que operamos ahora es increíble. Cuando me siento a trabajar por la mañana, ya tengo 5 visitas filtradas e interesadas de verdad en mi agenda. Ya no perdemos horas enseñando pisos a curiosos que el banco no va a financiar."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400 border border-white/10">GS</div>
                  <div>
                    <h4 className="font-bold text-white">Gerente Comercial</h4>
                    <p className="text-sm text-slate-500">Agencia Inmobiliaria (Caso Ilustrativo)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Preguntas Frecuentes (FAQ) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-10 border-t border-white/10"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre IA en Inmobiliarias</h2>
              <div className="space-y-4">
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Qué es un Agente IA para inmobiliarias?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Un <a href="/agentes-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/agentes-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Agente IA</a> es un asistente conversacional capaz de cualificar leads de portales (preguntando ingresos, plazos, necesidades), responder dudas sobre inmuebles y agendar visitas automáticamente.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cómo automatiza la IA la captación de leads en Idealista o Fotocasa?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Mediante <a href="/servicios/automatizacion-procesos" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/servicios/automatizacion-procesos'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">automatizaciones IA</a> conectadas a WhatsApp Business API, el sistema extrae el lead entrante del correo del portal e inicia una conversación de WhatsApp en menos de 1 minuto, evitando que se vaya a la competencia.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Puede el Chatbot IA integrarse con mi CRM inmobiliario?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Sí, nuestros <a href="/chatbots-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/chatbots-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Chatbots IA</a> envían la ficha completa del cliente, su presupuesto y la zona de interés directamente a CRMs como Witei, Inmovilla o HubSpot.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cuánto cuesta implementar IA en mi agencia?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Cada agencia requiere módulos diferentes según los portales. Te invitamos a solicitar una <a href="/auditoria-ia-gratis" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/auditoria-ia-gratis'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Auditoría IA Gratuita</a> donde analizamos tus canales de captación y diseñamos un presupuesto cerrado.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Es difícil usar la IA si mi equipo de asesores no es tecnológico?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    No, la belleza de este sistema es que ocurre en el "Back-Office". Tu equipo comercial no debe aprender nuevas herramientas complejas; simplemente reciben en su WhatsApp o CRM un lead ya filtrado y con visita agendada.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cuánto se tarda en configurar la automatización de WhatsApp?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Generalmente, el despliegue del motor conversacional, el entrenamiento del bot con tu catálogo y la conexión a los portales inmobiliarios toma entre 2 y 3 semanas.
                  </div>
                </details>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Stats) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF006E]/10 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-8 text-white">Métricas de Éxito</h3>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tiempo de Respuesta</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> +4 Horas
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> Menos de 1 Min
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tasa de Conversión a Visita</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> 12%
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> 45% (+275%)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Visitas a Curiosos / No viables</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> Altas (No medido)
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> Prácticamente 0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0A1628] border border-[#FF006E]/30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(255,0,110,0.15)]"
              >
                <h3 className="text-xl font-bold text-white mb-4">Revoluciona tu Agencia Inmobiliaria</h3>
                <p className="text-sm font-medium text-slate-300 mb-6">Podemos replicar este sistema inteligente y mejorar las ventas en tu negocio, auditándolo de manera gratuita.</p>
                <a 
                  href="/auditoria-ia-gratis"
                  onClick={(e) => {
                    e.preventDefault();
                    trackEvent('cta_click', { cta_text: 'Auditoría IA Gratuita', location: 'caso_exito_inmobiliaria_ia' });
                    window.history.pushState({}, '', '/auditoria-ia-gratis');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="block w-full py-4 bg-[#FF006E] hover:bg-[#ff1a7f] text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(255,0,110,0.3)] hover:shadow-[0_0_25px_rgba(255,0,110,0.5)] text-center no-underline"
                >
                  Solicitar Auditoría IA Gratuita
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Recomendados */}
      <RecursosRecomendados type="inmobiliarias" />

    </div>
  );
}
