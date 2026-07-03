import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import LegalFooter from './components/LegalFooter';
import { ModalController } from './components/ModalController';
import ResponsibleIASection from './components/ResponsibleIASection';

import { projectsData } from './data/projectsData';
import { servicesData } from './data/servicesData';

// 🚀 OPTIMIZACIÓN V2: Code Splitting para aislar páginas y mejorar críticamente el LCP
const Home = React.lazy(() => import('./pages/Home'));
const ProcessAutomation = React.lazy(() => import('./pages/ProcessAutomation'));
const ChatbotsInteligentes = React.lazy(() => import('./pages/ChatbotsInteligentes'));
const AgentesIA = React.lazy(() => import('./pages/AgentesIA'));
const GenericServicePage = React.lazy(() => import('./pages/GenericServicePage'));
const GenericProjectPage = React.lazy(() => import('./pages/GenericProjectPage'));
const GenericIndustryPage = React.lazy(() => import('./pages/GenericIndustryPage'));
const ClinicasV2 = React.lazy(() => import('./pages/ClinicasV2'));
const VerticalesIndustria = React.lazy(() => import('./pages/VerticalesIndustria'));

// Lazy Loading de páginas SEO específicas
const DisenoWebPage = React.lazy(() => import('./pages/SeoPages').then(m => ({ default: m.DisenoWebPage })));
const AppsEmpresasPage = React.lazy(() => import('./pages/SeoPages').then(m => ({ default: m.AppsEmpresasPage })));
const AutomatizacionesIaPage = React.lazy(() => import('./pages/SeoPages').then(m => ({ default: m.AutomatizacionesIaPage })));
const ChatbotsIaPage = React.lazy(() => import('./pages/SeoPages').then(m => ({ default: m.ChatbotsIaPage })));
const SeoPosicionamientoPage = React.lazy(() => import('./pages/SeoPages').then(m => ({ default: m.SeoPosicionamientoPage })));
const PreciosPage = React.lazy(() => import('./pages/PreciosPage'));

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    
    const pushState = window.history.pushState;
    window.history.pushState = function(...args) {
      pushState.apply(window.history, args);
      onLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.history.pushState = pushState;
    };
  }, []);

  const path = currentPath.replace(/\/$/, "");

  // Renderizador dinámico y limpio
  const renderRoute = () => {
    switch (path) {
      case '':
      case '/':
        return <Home />;
      case '/servicios/automatizacion-procesos': return <ProcessAutomation />;
      case '/servicios/chatbots-inteligentes': return <ChatbotsInteligentes />;
      case '/servicios/agentes-ia': return <AgentesIA />;
      
      // Páginas SEO
      case '/diseno-web': return <DisenoWebPage />;
      case '/apps-para-empresas': return <AppsEmpresasPage />;
      case '/automatizaciones-ia': return <AutomatizacionesIaPage />;
      case '/chatbots-ia': return <ChatbotsIaPage />;
      case '/seo-posicionamiento-web': return <SeoPosicionamientoPage />;
      case '/precios': return <PreciosPage onOpenForm={() => setIsCalendlyOpen(true)} />;
      
      // Clínicas V2 Premium
      case '/soluciones/ia-clinicas-medicas':
      case '/soluciones/clinicas':
      case '/clinicas':
        return <ClinicasV2 onOpenForm={() => setIsCalendlyOpen(true)} />;

      // Inmobiliarias V2
      case '/soluciones/ia-inmobiliarias':
      case '/soluciones/inmobiliarias':
      case '/inmobiliarias':
        return <VerticalesIndustria type="inmobiliarias" onOpenForm={() => setIsCalendlyOpen(true)} />;

      // Ecommerce V2
      case '/soluciones/ia-ecommerce':
      case '/soluciones/ecommerce':
      case '/ecommerce':
        return <VerticalesIndustria type="ecommerce" onOpenForm={() => setIsCalendlyOpen(true)} />;

      // Enrutamiento dinámico limpio (Servicios y Proyectos)
      default:
        if (path.startsWith('/servicios/')) {
          const serviceSlug = path.split('/')[2];
          if (servicesData[serviceSlug]) {
            return <GenericServicePage data={servicesData[serviceSlug]} />;
          }
        }
        
        if (path.startsWith('/proyectos/')) {
          const projectSlug = path.split('/')[2];
          if (projectsData[projectSlug]) {
            return <GenericProjectPage data={projectsData[projectSlug]} />;
          }
        }
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-400">
      {/* Fondo de Identidad Corporativa Unificado Dark Neon */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCalendly={() => setIsCalendlyOpen(true)} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* Suspense muestra un spinner ligero mientras se descarga el chunk de la página */}
              <Suspense fallback={
                <div className="min-h-[60vh] flex items-center justify-center bg-[#030712]">
                  <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                {renderRoute()}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>

        <ResponsibleIASection />
        <LegalFooter />
        <ModalController isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      </div>
    </div>
  );
}
