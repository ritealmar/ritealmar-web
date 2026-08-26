import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Search, Layout, Route, LineChart, ArrowRight, CheckCircle2, Printer } from 'lucide-react';
import AuditScoreSection from '../components/AuditScoreSection';
import PendingValidationSection from '../components/PendingValidationSection';
import { trackEvent } from '../utils/analytics';

export default function EstadoPlataforma() {
  useEffect(() => {
    document.title = "Estado actual de la plataforma | RITEALMAR";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Resumen técnico y comercial de la web tras las mejoras de seguridad, conversión, SEO, analítica y experiencia de usuario.");
    }
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Stack tecnológico y arquitectura",
      icon: Code2,
      points: [
        "Desarrollada como Single Page Application (SPA) en React 19.",
        "Uso de Vite como empaquetador para optimizar tiempos de construcción.",
        "Implementación de TypeScript para tipado estático y prevención de errores.",
        "Carga diferida (Lazy Loading) orientada a optimizar el rendimiento inicial."
      ]
    },
    {
      title: "2. Seguridad y cumplimiento",
      icon: ShieldCheck,
      points: [
        "Integración de Cloudflare Turnstile en formularios, lo cual ayuda a reducir el spam automatizado.",
        "Gestor de cookies diseñado con enfoque granular para el consentimiento de usuarios.",
        "Arquitectura frontend sin bases de datos locales, reduciendo vectores de ataque.",
        "Estructura legal preparada y orientada al cumplimiento normativo (RGPD)."
      ]
    },
    {
      title: "3. SEO técnico",
      icon: Search,
      points: [
        "Inyección dinámica de meta-etiquetas según la vista renderizada.",
        "Datos estructurados JSON-LD (FAQPage y ProfessionalService) habilitados.",
        "Sitemap y archivo robots.txt generados para orientar a los motores de búsqueda.",
        "Imágenes secundarias configuradas con carga diferida (lazy loading)."
      ]
    },
    {
      title: "4. Diseño y experiencia de usuario",
      icon: Layout,
      points: [
        "Sistema de diseño basado en la estética corporativa Dark Neon.",
        "Componentes construidos sobre Tailwind CSS para mantener consistencia visual.",
        "Interfaces adaptables (Responsive Web Design) para múltiples dispositivos.",
        "Flujos de interacción asistidos por micro-animaciones prudentes."
      ]
    },
    {
      title: "5. Arquitectura de páginas",
      icon: Route,
      points: [
        "Silo principal estructurado para la conversión (Precios, Auditoría IA).",
        "Páginas sectoriales específicas (Clínicas, Inmobiliarias, E-commerce).",
        "Páginas de servicio para traccionar búsquedas long-tail.",
        "Enrutamiento dinámico preparado para expansión del portfolio."
      ]
    },
    {
      title: "6. Conversión y analítica",
      icon: LineChart,
      points: [
        "Plataforma preparada para medición mediante GTM (Google Tag Manager).",
        "Registro de eventos clave estructurado en capa de datos (dataLayer).",
        "Calculadora de ROI y múltiples puntos de contacto unificados.",
        "Formularios centralizados con feedback visual y gestión de estados."
      ]
    }
  ];

  const checklistExternal = [
    "Ejecutar PageSpeed Insights en móvil y escritorio.",
    "Verificar eventos en Google Tag Assistant.",
    "Revisar indexación en Google Search Console.",
    "Validar sitemap.xml y robots.txt.",
    "Probar formularios desde móvil y escritorio.",
    "Confirmar recepción de leads en correo o CRM.",
    "Validar Cloudflare Turnstile en producción.",
    "Comprobar consentimiento de cookies.",
    "Revisar datos estructurados con la herramienta de resultados enriquecidos.",
    "Revisar enlaces internos, footer y CTAs.",
    "Confirmar que las demos del portfolio cargan correctamente.",
    "Revisar textos legales con asesoría si se van a hacer campañas grandes."
  ];

  return (
    <div className="bg-[#030712] print:bg-white min-h-screen text-white print:text-black pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-6 py-16 md:py-24 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Estado actual de la plataforma RITEALMAR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 print:text-slate-800 leading-relaxed mb-8"
          >
            Resumen técnico y comercial de la web tras las mejoras de seguridad, conversión, SEO, analítica y experiencia de usuario.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => window.print()}
            className="print:hidden inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold transition-all text-slate-300 hover:text-white"
          >
            <Printer size={18} />
            Imprimir / guardar PDF
          </motion.button>
        </div>
      </section>

      {/* TEXT SECTIONS GRID */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sections.map((sec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#0A1628]/50 border border-white/5 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                  <sec.icon className="text-cyan-400" size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">{sec.title}</h2>
              </div>
              <ul className="space-y-4">
                {sec.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 className="text-cyan-500 shrink-0 mt-0.5" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPONENTES REUTILIZADOS */}
      <AuditScoreSection />
      <PendingValidationSection />

      {/* VEREDICTO FINAL */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center border-t border-white/5 print:border-slate-300">
        <h2 className="text-3xl md:text-4xl font-bold text-white print:text-black mb-6">9. Veredicto final</h2>
        <div className="text-slate-400 print:text-slate-700 text-lg leading-relaxed mb-12 text-left md:text-center space-y-6">
          <p>
            La plataforma RITEALMAR presenta una base técnica y comercial sólida para una empresa de servicios digitales B2B. La web combina diseño premium, arquitectura moderna, landings SEO, formularios cualificados, medición de eventos y elementos de confianza orientados a conversión.
          </p>
          <p>
            Su valor principal no está únicamente en la capa visual, sino en la combinación de elementos comerciales y técnicos: páginas específicas por servicio y sector, control de consentimiento, eventos de analítica, portfolio transparente, arquitectura modular y preparación para campañas orgánicas o de pago.
          </p>
          <p>
            Antes de escalar inversión en captación, se recomienda validar en producción los formularios, Cloudflare Turnstile, eventos de Google Tag Manager, Core Web Vitals, Google Search Console, sitemap, robots.txt y datos estructurados.
          </p>
          <div className="bg-[#0A1628]/50 print:bg-slate-100 border border-white/10 print:border-slate-300 p-6 rounded-2xl max-w-2xl mx-auto mt-8 inline-block text-left w-full break-inside-avoid-page">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white print:text-black">Valoración técnica y estratégica estimada:</span>
              <span className="text-cyan-400 print:text-cyan-700 font-black text-xl">8,8 / 10</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300 print:text-slate-600 text-sm">Potencial tras validación en producción y primeros casos reales documentados:</span>
              <span className="text-purple-400 print:text-purple-700 font-black text-lg">9,3 / 10</span>
            </div>
          </div>
          <div className="text-xs text-slate-500 print:text-slate-500 max-w-2xl mx-auto mt-4 text-center opacity-80">
            Nota sobre las valoraciones: Las puntuaciones son estimaciones internas basadas en revisión técnica y estratégica. Deben validarse con métricas reales de producción, datos de conversión y resultados de campañas.
          </div>
        </div>

        {/* CHECKLIST EXTERNO */}
        <div className="text-left bg-[#0A1628]/30 print:bg-white border border-white/5 print:border-slate-300 p-8 rounded-3xl mb-16 break-before-page">
          <h3 className="text-2xl font-bold text-white print:text-black mb-6">Checklist recomendado para revisión externa</h3>
          <ul className="space-y-4">
            {checklistExternal.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 print:text-slate-700">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="print:hidden bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/20 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas llevar tu negocio al siguiente nivel?</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Aplica esta misma ingeniería técnica y comercial a los procesos de tu propia empresa.
          </p>
          <a 
            href="/auditoria-ia-gratis"
            onClick={() => trackEvent('audit_request_click', { cta_text: 'Solicitar auditoría gratuita', location: 'estado_plataforma' })}
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-6 md:px-10 py-4 rounded-xl font-bold text-base md:text-lg tracking-wide transition-all hover:scale-105 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Solicitar auditoría gratuita
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}
