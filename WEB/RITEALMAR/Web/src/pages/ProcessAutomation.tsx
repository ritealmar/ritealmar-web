import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { CheckCircle2, Clock, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';

import { trackEvent } from '../utils/analytics';

export default function ProcessAutomation() {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title?: string; subtitle?: string; submitText?: string }>({ isOpen: false });

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
        "name": "Servicios",
        "item": "https://ritealmar.es/servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Automatización de Procesos",
        "item": "https://ritealmar.es/servicios/automatizacion-procesos"
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceLayout 
        title="Automatización de Procesos para PYMES"
        subtitle="Transformamos tareas manuales en flujos autónomos (facturas, correos, citas, CRM) para que tu equipo ahorre horas cada semana."
        onOpenCalendly={(config) => setModalConfig({ isOpen: true, ...(config || {}) })}
        seoTitle="Automatización de Procesos para PYMES | RITEALMAR"
        seoDesc="Descubre cómo automatizar tareas repetitivas en tu PYME: volcado de datos, facturas, seguimiento de clientes y conexión con tu CRM. Auditoría gratuita."
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es la automatización de procesos?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              La automatización de procesos mediante Inteligencia Artificial (IA) no es ciencia ficción ni está reservada para multinacionales. Consiste en identificar aquellas tareas repetitivas, manuales y propensas a errores que consumen el tiempo de tu equipo (como copiar datos de un Excel a tu <a href="/servicios/crm-a-medida" className="text-cyan-400 hover:underline">CRM a medida</a>, enviar presupuestos estándar o responder consultas frecuentes), y delegarlas en sistemas informáticos inteligentes.
              En Ritealmar analizamos los procesos de tu negocio y desarrollamos soluciones personalizadas que trabajan por ti las 24 horas del día. Esto permite que tu equipo dedique más tiempo a actividades de valor mientras los procesos repetitivos se ejecutan de forma autónoma, como puedes ver en nuestra guía sobre <a href="/blog/automatizar-captacion-clientes-ia-pyme" onClick={() => trackEvent('internal_link', { link: 'blog-captacion' })} className="text-[#00D4FF] hover:underline">cómo automatizar la captación de clientes</a>.
            </p>
            <p className="font-medium leading-relaxed mt-4">
              Si estás valorando por dónde empezar, consulta nuestra guía sobre <a href="/blog/automatizacion-procesos-pymes" onClick={() => trackEvent('internal_link', { link: 'blog-automatizacion-procesos-pymes' })} className="text-[#00D4FF] hover:underline">automatización de procesos para pymes</a>.
            </p>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">¿Qué problemas resuelve?</h2>
            <p className="text-center font-medium text-slate-300 mb-12 text-lg">
              Muchas empresas pierden tiempo y dinero realizando tareas manuales como:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Introducir datos en hojas de cálculo.",
                "Enviar presupuestos.",
                "Gestionar correos electrónicos.",
                "Actualizar bases de datos.",
                "Hacer seguimiento de clientes.",
                "Crear informes.",
                "Gestionar citas y reservas."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#FF006E]/20 p-2 rounded-full group-hover:bg-[#FF006E]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF006E]" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl font-bold text-[#00D4FF] text-glow-blue">
              La automatización elimina estas tareas repetitivas y permite que el equipo se centre en actividades más importantes.
            </p>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Análisis</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Estudiamos el funcionamiento de tu empresa e identificamos los procesos que consumen más tiempo.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Diseño</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Diseñamos una solución adaptada a tus necesidades y objetivos concretos.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Implementación</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Desarrollamos e integramos la automatización con las herramientas que ya utilizas.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Seguimiento</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Supervisamos el funcionamiento y realizamos mejoras continuas cuando sea necesario.</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Beneficios para tu empresa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Ahorro de Tiempo", desc: "Reduce drásticamente las horas dedicadas a tareas administrativas." },
                { icon: TrendingUp, title: "Mayor Productividad", desc: "Permite que tu equipo se concentre en tareas que generan ingresos." },
                { icon: ShieldCheck, title: "Reducción de Errores", desc: "Elimina los fallos humanos en la introducción de datos y cálculos." },
                { icon: Users, title: "Mejor Servicio", desc: "Respuestas más rápidas y atención constante a tus clientes." },
                { icon: CheckCircle2, title: "Procesos Estandarizados", desc: "Garantiza que las tareas se realicen siempre de la misma forma." },
                { icon: Zap, title: "Escalabilidad", desc: "Tu negocio puede crecer sin necesidad de aumentar proporcionalmente el personal." }
              ].map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                <div key={idx} className="p-8 rounded-2xl glass-card border border-white/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-8 h-8 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">{benefit.title}</h3>
                  </div>
                  <p className="font-medium text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              )})}
            </div>
          </div>
        </section>

        {/* Casos Prácticos */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Casos Prácticos Reales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#00D4FF]/20 to-[#0A1628]">
              <h3 className="text-2xl font-bold mb-4 text-[#00D4FF]">Gestión automática de clientes</h3>
              <p className="font-medium text-slate-300 mb-6">Cuando un cliente rellena un formulario en la web, de forma 100% automática y sin intervención manual:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se crea automáticamente una ficha en el CRM.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se envía un correo electrónico de bienvenida.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se programa una llamada comercial en el calendario.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se registra toda la información para facturación.</span></li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#00FF9D]/20 to-[#0A1628]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FF9D]">
                <a href="/blog/automatizar-whatsapp-pyme" onClick={() => trackEvent('internal_link', { link: 'blog-whatsapp' })} className="hover:underline">Automatización de WhatsApp</a>
              </h3>
              <p className="font-medium text-slate-300 mb-6">Cuando un cliente escribe por WhatsApp a la empresa, el sistema inteligente actúa:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">El cliente recibe una respuesta inmediata.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">La IA clasifica automáticamente sus necesidades.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">Se agenda una cita y se envía un recordatorio.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">Se avisa al responsable correspondiente del equipo.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sectores / Por que elegirnos */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-white">¿Por qué elegir Ritealmar?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Soluciones personalizadas', 'Integración con sistemas existentes', 'Soporte continuo', 'Experiencia en automatización e IA', 'Desarrollo propio'].map((item, idx) => (
                <span key={idx} className="px-6 py-3 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-bold">
                  {item}
                </span>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mt-20 mb-8 text-white">Sectores donde trabajamos</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Restaurantes', 'Bares', 'Clínicas', 'Talleres', 'Empresas de servicios', 'Telecomunicaciones', 'Comercio electrónico', 'Autónomos'].map((sector, idx) => (
                <span key={idx} className="font-medium text-slate-400">
                  {sector}{idx !== 7 && <span className="mx-3 text-slate-600">|</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 px-6 max-w-3xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Preguntas Frecuentes sobre Automatización</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuánto cuesta automatizar un proceso en una PYME?</h3>
              <p className="font-medium text-slate-300">Depende de la complejidad. Una automatización sencilla (ej. volcar contactos de un formulario a un Excel o enviar respuestas automáticas) requiere una inversión muy baja. Integrar un <a href="/servicios/crm-a-medida" className="text-[#00D4FF] hover:underline">CRM a medida</a> con tu facturación es un proyecto mayor. Realizamos un presupuesto exacto tras una auditoría.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Se puede integrar con los programas que ya uso?</h3>
              <p className="font-medium text-slate-300">Sí. Evaluamos tu software actual (ERP, correo, bases de datos) y lo conectamos mediante APIs o herramientas de automatización sin necesidad de que cambies tu forma de trabajar.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuándo NO merece la pena automatizar?</h3>
              <p className="font-medium text-slate-300">No recomendamos automatizar procesos donde las reglas cambian constantemente, ni tareas que requieran empatía humana o decisiones críticas subjetivas. Si el proceso es mecánico y repetitivo, entonces sí es ideal.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Es seguro automatizar datos de mis clientes?</h3>
              <p className="font-medium text-slate-300">Sí. Utilizamos protocolos seguros, conexiones encriptadas y APIs oficiales orientadas al cumplimiento normativo (RGPD). Tus datos comerciales no se exponen ni se utilizan para entrenar modelos de IA públicos.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Qué pasa si una de las herramientas integradas falla o se actualiza?</h3>
              <p className="font-medium text-slate-300">Ofrecemos planes de mantenimiento para monitorizar activamente tus flujos de trabajo. Si hay un cambio en la herramienta de terceros, nuestro equipo lo adapta rápidamente para que el proceso no se interrumpa.</p>
            </div>
          </div>
        </section>

        {/* Casos de éxito relacionados */}
        <section className="py-20 px-6 bg-[#0F172A] border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Descubre cómo hemos ayudado a otras empresas</h2>
            <p className="font-medium text-slate-300 mb-10 text-lg">
              Explora ejemplos reales de automatización de procesos en clínicas, inmobiliarias y agencias B2B.
            </p>
            <a 
              href="/casos-de-exito" 
              onClick={() => trackEvent('internal_link', { link: 'casos-de-exito' })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:bg-white/10 text-white font-bold rounded-xl transition-all"
            >
              Ver Casos de Éxito Completos
            </a>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))} 
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        submitText={modalConfig.submitText}
      />
    </>
  );
}
