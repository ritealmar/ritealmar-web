import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Benefits from '../components/Benefits';
const ContactForm = React.lazy(() => import('../components/ContactForm'));

const ROICalculator = React.lazy(() => import('../components/ROICalculator'));
const ServicesBentoGrid = React.lazy(() => import('../components/ServicesBentoGrid'));
const PortfolioSection = React.lazy(() => import('../components/PortfolioSection'));
const ProcessSection = React.lazy(() => import('../components/ProcessSection'));
const FAQ = React.lazy(() => import('../components/FAQ'));

export default function Home({ onOpenCalendly }: { onOpenCalendly?: (config?: any) => void }) {
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

      {/* 1. Hero */}
      <Hero onOpenCalendly={onOpenCalendly} />

      {/* 2. Beneficios */}
      <Benefits />

      {/* 3. Tres servicios principales */}
      <Suspense fallback={<div className="min-h-[600px] w-full" />}>
        <ServicesBentoGrid onOpenForm={onOpenCalendly || (() => {})} />
      </Suspense>

      {/* 4. Casos reales, proyectos o demostraciones */}
      <Suspense fallback={<div className="min-h-[500px] w-full" />}>
        <ROICalculator />
      </Suspense>

      <Suspense fallback={<div className="min-h-[400px] w-full" />}>
        <PortfolioSection />
      </Suspense>

      {/* 5. Proceso de trabajo */}
      <Suspense fallback={<div className="min-h-[400px] w-full" />}>
        <ProcessSection />
      </Suspense>

      {/* 6. Preguntas frecuentes */}
      <Suspense fallback={<div className="min-h-[400px] w-full" />}>
        <FAQ />
      </Suspense>
      
      {/* 7. Bloque Compacto SEO */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/5 mt-10">
        <div className="prose prose-sm prose-invert max-w-none text-slate-400">
          <h2 className="text-xl font-bold mb-3 text-white">Automatización e Inteligencia Artificial para PYMES</h2>
          <p className="mb-3">
            En <strong>RITEALMAR</strong> implementamos soluciones de automatización de procesos y agentes inteligentes diseñados específicamente para la operativa de la Pequeña y Mediana Empresa. Nuestra tecnología permite conectar CRMs, plataformas web, herramientas de facturación y canales de comunicación como WhatsApp, reduciendo el trabajo manual y los errores operativos a una fracción del coste tradicional.
          </p>
          <p>
            Al integrar herramientas de <strong>Inteligencia Artificial (IA)</strong>, logramos que los equipos dediquen su tiempo a la estrategia y las ventas, dejando las tareas mecánicas y el soporte básico a sistemas autónomos que operan 24/7 de forma eficiente y escalable.
          </p>
        </div>
      </section>

      {/* 8. Formulario final */}
      <Suspense fallback={<div className="h-20" />}>
        <ContactForm />
      </Suspense>

    </div>
  );
}
