import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ArrowUpRight, ArrowDownRight, MessageSquare, ShieldCheck, Quote, ShoppingCart, MessageCircle, Bot, Users, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import RecursosRecomendados from '../components/RecursosRecomendados';
import { trackEvent } from '../utils/analytics';

export default function CasoExitoEcommerceIA() {
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
        title="Caso de Uso Ecommerce IA: Recuperación de Carritos | RITEALMAR"
        description="Descubre cómo una tienda online aumentó un 42% su facturación recuperando carritos abandonados con un Agente IA conectado a WhatsApp."
        canonical="https://ritealmar.es/casos-de-exito/ecommerce-recuperacion-carritos-ia"
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
            { "@type": "ListItem", "position": 3, "name": "Caso de Uso Ecommerce IA", "item": "https://ritealmar.es/casos-de-exito/ecommerce-recuperacion-carritos-ia" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cómo una tienda online aumentó un 42% su facturación recuperando carritos abandonados con IA",
          "description": "Descubre cómo un ecommerce aumentó su rentabilidad gracias a la implementación de automatizaciones IA y WhatsApp.",
          "author": { "@type": "Organization", "name": "RITEALMAR" },
          "publisher": { "@type": "Organization", "name": "RITEALMAR", "logo": { "@type": "ImageObject", "url": "https://ritealmar.es/logo.webp" } },
          "mainEntityOfPage": "https://ritealmar.es/casos-de-exito/ecommerce-recuperacion-carritos-ia"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es un Agente IA para E-commerce?",
              "acceptedAnswer": { "@type": "Answer", "text": "Un Agente IA es un asistente virtual inteligente diseñado para resolver dudas de clientes sobre envíos o tallas y guiarles hasta finalizar la compra." }
            },
            {
              "@type": "Question",
              "name": "¿Cómo automatiza la IA la recuperación de carritos por WhatsApp?",
              "acceptedAnswer": { "@type": "Answer", "text": "Mediante integraciones avanzadas, detectamos cuándo un cliente abandona el pago y le enviamos un mensaje de WhatsApp conversacional y proactivo en minutos." }
            },
            {
              "@type": "Question",
              "name": "¿Puede el Chatbot IA integrarse con Shopify o WooCommerce?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí, nuestras soluciones se conectan nativamente a Shopify, Prestashop, WooCommerce y pasarelas de pago como Stripe para gestionar cancelaciones." }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto cuesta implementar IA en mi tienda online?",
              "acceptedAnswer": { "@type": "Answer", "text": "El coste se diseña a medida según el volumen de ventas y sistemas empleados. Solicitando nuestra Auditoría IA Gratuita te damos una propuesta exacta." }
            },
            {
              "@type": "Question",
              "name": "¿Los clientes rechazan hablar con un asistente virtual por WhatsApp?",
              "acceptedAnswer": { "@type": "Answer", "text": "Al contrario. Al utilizar inteligencia artificial natural (OpenAI), la conversación es tan fluida que la inmensa mayoría de clientes lo prefiere frente a esperar un email." }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto se tarda en configurar la automatización de WhatsApp?",
              "acceptedAnswer": { "@type": "Answer", "text": "Los flujos de carrito abandonado estándar y FAQ se despliegan de forma segura en aproximadamente 2 semanas." }
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#00D4FF]/30 text-[#00D4FF] font-mono text-sm font-bold mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
          >
            <ShieldCheck size={16} /> Caso Ilustrativo de Éxito
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-white max-w-5xl mx-auto leading-tight"
          >
            Cómo una tienda online aumentó un 42% su facturación <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">recuperando carritos abandonados</span>
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
                  Un <a href="/ecommerce" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/ecommerce'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">ecommerce</a> referente en ventas de productos de alta rotación invertía miles de euros mensuales en publicidad digital, logrando un tráfico inmenso, pero sufría una severa caída de rentabilidad en el último paso del embudo.
                </p>
                <p>Detectamos cuatro problemas principales:</p>
                <ul>
                  <li><strong>Alta tasa de abandono:</strong> 7 de cada 10 usuarios que añadían productos al carrito nunca completaban el pago.</li>
                  <li><strong>Atención lenta y reactiva:</strong> Los clientes escribían por WhatsApp o Email preguntando dudas frecuentes (tallas, envíos, devoluciones) y recibían respuestas horas después, lo que enfriaba la venta.</li>
                  <li><strong>Dudas sin resolver en caliente:</strong> Sin un soporte instantáneo 24/7, las dudas básicas se convertían en ventas perdidas y gastos publicitarios estériles.</li>
                  <li><strong>Falta de fidelización:</strong> El seguimiento post-compra era inexistente, lo que generaba una baja tasa de recurrencia y poco valor del ciclo de vida del cliente.</li>
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
                Desarrollamos una estrategia omnicanal integrando un sistema de <a href="/servicios/automatizacion-procesos" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/servicios/automatizacion-procesos'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">automatización de ventas</a> basado en Inteligencia Artificial y WhatsApp Business API.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Desplegamos <a href="/agentes-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/agentes-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Agentes Inteligentes</a> capaces de leer el contexto del carrito abandonado, enviar ofertas hiper-personalizadas y resolver dudas en tiempo real sin fricciones, integrándose nativamente con su pasarela de pagos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg">
                  <MessageSquare className="text-[#00D4FF] mb-4 w-8 h-8" />
                  <h3 className="font-bold text-lg mb-2 text-white"><a href="/chatbots-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/chatbots-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-white hover:text-[#00D4FF] transition-colors">Chatbots IA</a> Omnicanal</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Soporte instantáneo para despejar bloqueos de compra antes de que el usuario decida salir de la web.
                  </p>
                </div>
                <div className="bg-[#0F172A] p-6 rounded-xl border border-white/5 shadow-lg">
                  <ShoppingCart className="text-[#FF006E] mb-4 w-8 h-8" />
                  <h3 className="font-bold text-lg mb-2 text-white">Recuperación Proactiva</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Disparo de secuencias por WhatsApp a los 30 minutos, 6h y 24h tras el abandono, ofreciendo un soporte conversacional, no un simple spam.
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
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <ShoppingCart className="text-[#00D4FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#00D4FF] transition-colors mb-1">Shopify / WooCommerce</h3>
                    <p className="text-slate-400 text-sm leading-snug">Motor del comercio electrónico integrado por API.</p>
                  </div>
                </div>

                {/* Tech 2 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#FF006E]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF006E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-[#FF006E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#FF006E] transition-colors mb-1">WhatsApp Business API</h3>
                    <p className="text-slate-400 text-sm leading-snug">Canal directo con alta tasa de apertura para la recuperación.</p>
                  </div>
                </div>

                {/* Tech 3 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Bot className="text-[#00D4FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#00D4FF] transition-colors mb-1">OpenAI</h3>
                    <p className="text-slate-400 text-sm leading-snug">Comprensión conversacional para rebajar la fricción de compra.</p>
                  </div>
                </div>

                {/* Tech 4 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#FF006E]/30 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF006E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-[#FF006E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#FF006E] transition-colors mb-1">CRM</h3>
                    <p className="text-slate-400 text-sm leading-snug">Segmentación avanzada del historial de clientes y LTV.</p>
                  </div>
                </div>

                {/* Tech 5 */}
                <div className="bg-[#0F172A] p-5 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors group flex items-start gap-4 sm:col-span-2">
                  <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-[#00D4FF]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#00D4FF] transition-colors mb-1">Email Marketing Automation</h3>
                    <p className="text-slate-400 text-sm leading-snug">Flujos combinados y boletines personalizados de upsell post-compra.</p>
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
              <Quote size={40} className="text-[#FF006E]/20 absolute top-6 left-6" />
              <div className="relative z-10 pl-8 pt-4">
                <p className="text-xl italic text-slate-300 leading-relaxed mb-6 font-serif">
                  "El impacto fue inmediato. En la primera semana vimos cómo docenas de carritos que dábamos por perdidos se cerraban tras una breve charla automática por WhatsApp. Nuestros clientes compran con más confianza sabiendo que tienen asistencia inmediata a un click de distancia."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400 border border-white/10">MM</div>
                  <div>
                    <h4 className="font-bold text-white">Director de Operaciones</h4>
                    <p className="text-sm text-slate-500">Tienda de E-commerce (Caso Ilustrativo)</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Preguntas Frecuentes sobre IA en Ecommerce</h2>
              <div className="space-y-4">
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Qué es un Agente IA para E-commerce?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Un <a href="/agentes-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/agentes-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Agente IA</a> es un asistente virtual inteligente diseñado para resolver dudas de clientes sobre envíos, stock o devoluciones, y guiarles proactivamente hasta finalizar la compra.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cómo automatiza la IA la recuperación de carritos por WhatsApp?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    A través de <a href="/servicios/automatizacion-procesos" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/servicios/automatizacion-procesos'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">automatizaciones IA</a>, detectamos cuándo un usuario abandona la pasarela de pago y disparamos un mensaje de WhatsApp conversacional (no invasivo) para entender el motivo del freno y ofrecer soporte instantáneo.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Puede el Chatbot IA integrarse con Shopify o WooCommerce?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Sí, diseñamos <a href="/chatbots-ia" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/chatbots-ia'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Chatbots IA</a> que se conectan de forma nativa a Shopify, WooCommerce, Prestashop y pasarelas como Stripe para cruzar datos en tiempo real.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cuánto cuesta implementar IA en mi tienda online?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    El coste se diseña a medida. Solicitando nuestra <a href="/auditoria-ia-gratis" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/auditoria-ia-gratis'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-[#00D4FF] hover:underline">Auditoría IA Gratuita</a> analizamos tu volumen de ventas y cuellos de botella actuales para proponerte la arquitectura más rentable.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Los clientes rechazan hablar con un asistente virtual por WhatsApp?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Al contrario. Al utilizar Inteligencia Artificial conversacional, las interacciones son fluidas y resolutivas, lo que aumenta la confianza del usuario al tener asistencia inmediata frente a esperar un ticket por email.
                  </div>
                </details>
                <details className="bg-[#0F172A] border border-white/5 rounded-xl group overflow-hidden cursor-pointer">
                  <summary className="p-6 font-bold text-white outline-none select-none">
                    ¿Cuánto se tarda en configurar la automatización de WhatsApp?
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                    Los flujos de recuperación de carritos, integraciones de stock y programación de FAQs suelen implementarse y desplegarse en un periodo de 2 a 3 semanas.
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/10 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-8 text-white">Métricas de Éxito</h3>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Facturación Mensual</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> Fugas sin retorno
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> +42% ROAS
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Soporte Nivel 1 y Consultas Repetitivas</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> Cuello de botella
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> -60% tickets
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tasa de Recompra a 3 Meses</div>
                    <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Antes</span>
                        <span className="text-sm font-mono text-[#FF006E] flex items-center gap-1">
                          <ArrowDownRight size={14} /> Tráfico frío
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-slate-600" />
                      <div className="space-y-1 text-right">
                        <span className="text-xs text-slate-500 font-bold uppercase block">Después</span>
                        <span className="text-lg font-mono text-[#00D4FF] flex items-center gap-1 font-bold text-glow-blue">
                          <ArrowUpRight size={18} /> +35% LTV
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
                <h3 className="text-xl font-bold text-white mb-4">Acelera tu Ecommerce</h3>
                <p className="text-sm font-medium text-slate-300 mb-6">Podemos replicar este sistema de recuperación en tu tienda, realizando una auditoría gratuita.</p>
                <a 
                  href="/auditoria-ia-gratis"
                  onClick={(e) => {
                    e.preventDefault();
                    trackEvent('cta_click', { cta_text: 'Auditoría IA Gratuita', location: 'caso_exito_ecommerce_ia' });
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
      <RecursosRecomendados type="ecommerce" />

    </div>
  );
}
