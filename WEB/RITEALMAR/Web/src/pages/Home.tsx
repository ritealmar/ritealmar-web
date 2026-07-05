import React, { Suspense } from 'react';
import { ArrowRight, BookOpen, Zap, Briefcase } from 'lucide-react';

import Hero from '../components/Hero';
import BlogBanner from '../components/BlogBanner';
import ROICalculator from '../components/ROICalculator';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';

// Imports estáticos para evitar errores MIME por caché de chunks en despliegue
import TargetAudienceSection from '../components/TargetAudienceSection';
import Benefits from '../components/Benefits';
import ServicesBentoGrid from '../components/ServicesBentoGrid';
import IndustrySolutions from '../components/IndustrySolutions';
import HowWeWork from '../components/HowWeWork';
import BeforeAfterSection from '../components/BeforeAfterSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import Integrations from '../components/Integrations';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQ from '../components/FAQ';



export default function Home({ onOpenCalendly }: { onOpenCalendly?: (config?: any) => void }) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RITEALMAR",
    "url": "https://ritealmar.es",
    "logo": "https://ritealmar.es/logo.webp",
    "description": "Agencia especializada en Inteligencia Artificial y Automatización de Procesos para PYMES.",
    "sameAs": [
      "https://www.linkedin.com/company/ritealmar"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RITEALMAR",
    "url": "https://ritealmar.es"
  };

  return (
    <div className="bg-transparent text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-400">
      <SEO 
        title="Agencia de Inteligencia Artificial y Automatización | RITEALMAR"
        description="Transformamos PYMES con automatización de procesos, chatbots inteligentes y agentes de IA. Reduce costes y aumenta ventas con RITEALMAR."
        canonical="https://ritealmar.es"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      <Hero onOpenCalendly={onOpenCalendly} />
      <BlogBanner />
      <ROICalculator />
      <Suspense fallback={<div className="h-32" />}>
        <Integrations />
        <TargetAudienceSection />
        
        {/* Nuevas secciones de la Home rediseñada */}
        <Benefits />
        <ServicesBentoGrid onOpenForm={onOpenCalendly || (() => {})} />

        {/* Soluciones Destacadas (Internal Linking) */}
        <section className="py-12 px-6 max-w-7xl mx-auto border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center justify-center gap-2">
            <Zap className="text-cyan-400" size={24} /> Soluciones Destacadas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">Automatización de Procesos</a>
            <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">Chatbots Inteligentes</a>
            <a href="/servicios/agentes-ia" onClick={(e) => handleNavigation(e, '/servicios/agentes-ia')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">Agentes de Inteligencia Artificial</a>
            <a href="/inmobiliarias" onClick={(e) => handleNavigation(e, '/inmobiliarias')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">IA para Inmobiliarias</a>
            <a href="/clinicas" onClick={(e) => handleNavigation(e, '/clinicas')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">IA para Clínicas</a>
            <a href="/ia-para-despachos-abogados" onClick={(e) => handleNavigation(e, '/ia-para-despachos-abogados')} className="px-6 py-3 bg-[#0A1628] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all font-medium text-slate-300 hover:text-white">IA para Abogados</a>
          </div>
        </section>

        <IndustrySolutions />
        <HowWeWork />
        <BeforeAfterSection />
        <PortfolioSection />

        {/* Casos de Éxito Destacados (Internal Linking) */}
        <section className="pb-20 px-6 max-w-7xl mx-auto text-center">
          <a href="/casos-de-exito" onClick={(e) => handleNavigation(e, '/casos-de-exito')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 rounded-xl font-bold text-white transition-all group">
            <Briefcase size={20} className="text-cyan-400" />
            Explorar todos los Casos de Éxito Reales
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </section>

        {/* Últimos Artículos (Internal Linking) */}
        <section className="py-20 px-6 bg-[#0A1628] border-y border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-white flex items-center justify-center gap-3">
              <BookOpen className="text-cyan-400" size={28} /> Últimos Artículos sobre IA
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <a href="/blog/automatizar-whatsapp-pyme" onClick={(e) => handleNavigation(e, '/blog/automatizar-whatsapp-pyme')} className="p-6 bg-[#0F172A] border border-white/5 hover:border-cyan-500/40 rounded-2xl transition-all group">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block">Guía Práctica</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Cómo automatizar WhatsApp para una PYME</h3>
                <p className="text-sm text-slate-400">Aprende a configurar un agente 24/7 y ahorrar más de 10 horas semanales.</p>
              </a>
              <a href="/blog/automatizar-captacion-clientes-ia-pyme" onClick={(e) => handleNavigation(e, '/blog/automatizar-captacion-clientes-ia-pyme')} className="p-6 bg-[#0F172A] border border-white/5 hover:border-cyan-500/40 rounded-2xl transition-all group">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">Estrategia Comercial</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Automatizar la captación de clientes con IA</h3>
                <p className="text-sm text-slate-400">Transforma los formularios de tu web en un motor de ventas ininterrumpido.</p>
              </a>
            </div>
            <div className="mt-10">
              <a href="/blog" onClick={(e) => handleNavigation(e, '/blog')} className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1">
                Ver todos los artículos <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <FAQ />
        
        {/* Bloque de Contenido SEO de Alta Calidad */}
        {/* CTA Auditoría IA Gratuita */}
        <a href="/auditoria-ia-gratis" onClick={(e) => {
          e.preventDefault();
          window.location.href = '/auditoria-ia-gratis';
        }} className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)] mt-8">
          Solicitar auditoría IA gratuita
          <ArrowRight size={20} />
        </a>
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg prose-a:text-cyan-400 max-w-none">
            <h2 className="text-3xl font-black mb-6">El Futuro de las PYMES: Inteligencia Artificial y Automatización</h2>
            <p className="text-slate-300">
              La transformación digital ya no es suficiente. En el panorama actual, las empresas que lideran sus sectores no solo están digitalizadas, sino automatizadas. La <strong>Inteligencia Artificial (IA)</strong> ha dejado de ser una tecnología exclusiva para grandes corporaciones tecnológicas y se ha convertido en el aliado estratégico más importante para la <strong>Pequeña y Mediana Empresa (PYME)</strong>.
            </p>
            <p className="text-slate-300">
              En <strong>RITEALMAR</strong>, nos especializamos en democratizar esta tecnología. Al <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')}>automatizar procesos repetitivos</a>, permitimos que los equipos humanos se concentren en lo que realmente aporta valor: la creatividad, la estrategia y el cierre de ventas. Las tareas como la introducción de datos, la gestión inicial de clientes, la facturación o la recuperación de carritos abandonados pueden ser ejecutadas por sistemas autónomos sin margen de error y a una fracción del coste tradicional.
            </p>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-white">¿Por qué integrar Agentes Inteligentes en tu negocio?</h3>
            <p className="text-slate-300">
              A diferencia de los programas estáticos del pasado, un <a href="/servicios/agentes-ia" onClick={(e) => handleNavigation(e, '/servicios/agentes-ia')}>Agente de IA</a> entiende el contexto de tu negocio. Puede analizar un correo entrante de un cliente molesto, extraer el número de pedido, comprobar el estado del envío en tu ERP y redactar una respuesta empática y resolutiva en cuestión de segundos. Esto eleva la experiencia del cliente a niveles corporativos, ofreciendo soporte y ventas 24/7.
            </p>
            <p className="text-slate-300">
              Nuestro enfoque es pragmático y orientado al <strong>Retorno de Inversión (ROI)</strong>. No implementamos tecnología por el simple hecho de hacerlo, sino que analizamos los cuellos de botella operativos de tu empresa y desplegamos soluciones a medida, desde <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')}>chatbots inteligentes</a> que cualifican clientes potenciales, hasta integraciones complejas para clínicas e inmobiliarias. Aumentar la productividad nunca fue tan accesible.
            </p>
          </div>
        </section>

        <ProcessSection />
        <ContactForm />
      </Suspense>
      

    </div>
  );
}
