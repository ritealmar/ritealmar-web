import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import LegalFooter from './components/LegalFooter';
import { ModalController } from './components/ModalController';
import ResponsibleIASection from './components/ResponsibleIASection';
import CookieBanner from './components/CookieBanner';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import AnalyticsPageTracker from './components/AnalyticsPageTracker';

import { projectsData } from './data/projectsData';
import { servicesData } from './data/servicesData';
import Home from './pages/Home';

const lazyWithRetry = (componentImport: () => Promise<any>) =>
  React.lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error("Error cargando chunk:", error);
      return {
        default: () => (
          <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#030712] text-white px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Estamos actualizando la web</h2>
            <p className="text-slate-400 mb-8">Hemos publicado una nueva versión. Recarga la página para continuar.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-[#00D4FF] text-black font-bold rounded-xl hover:scale-105 transition-transform"
            >
              Recargar página
            </button>
          </div>
        )
      };
    }
  });

import ProcessAutomation from './pages/ProcessAutomation';
import CrmAMedida from './pages/CrmAMedida';
import ChatbotsInteligentes from './pages/ChatbotsInteligentes';
import AgentesIA from './pages/AgentesIA';
import GenericServicePage from './pages/GenericServicePage';
import GenericProjectPage from './pages/GenericProjectPage';
import GenericIndustryPage from './pages/GenericIndustryPage';
import ClinicasV2 from './pages/ClinicasV2';
import VerticalesIndustria from './pages/VerticalesIndustria';
import PreciosPage from './pages/PreciosPage';
import AuditoriaIaGratis from './pages/AuditoriaIaGratis';
import EstadoPlataforma from './pages/EstadoPlataforma';
import IaAbogadosPage from './pages/IaAbogadosPage';

import {
  DisenoWebPage,
  AppsEmpresasPage,
  AutomatizacionesIaPage,
  ChatbotsIaPage,
  SeoPosicionamientoPage,
  DisenoWebClinicasDentalesPage,
  AutomatizacionIaClinicasPage,
  ChatbotIaInmobiliariasPage,
  DisenoWebInmobiliariasPage,
  AutomatizacionWhatsappPage,
  AuditoriaIaPymesPage
} from './pages/SeoPages';

// Páginas Legales
const AvisoLegal = lazyWithRetry(() => import('./pages/AvisoLegal'));
const Privacidad = lazyWithRetry(() => import('./pages/Privacidad'));
const Cookies = lazyWithRetry(() => import('./pages/Cookies'));
const PlanCaptacion = lazyWithRetry(() => import('./pages/PlanCaptacion'));

// Blog SEO
const CasosExito = lazyWithRetry(() => import('./pages/CasosExito'));
const BlogIndex = lazyWithRetry(() => import('./pages/BlogIndex'));
const BlogAutomatizarCaptacion = lazyWithRetry(() => import('./pages/BlogAutomatizarCaptacion'));
const BlogAutomatizarWhatsApp = lazyWithRetry(() => import('./pages/BlogAutomatizarWhatsApp'));
const BlogCitasClinicas = lazyWithRetry(() => import('./pages/BlogCitasClinicas'));
const BlogInmobiliariasIa = lazyWithRetry(() => import('./pages/BlogInmobiliariasIa'));
const BlogAutomatizacionProcesosPymes = lazyWithRetry(() => import('./pages/BlogAutomatizacionProcesosPymes'));
const CasoExitoClinicaIA = lazyWithRetry(() => import('./pages/CasoExitoClinicaIA'));
const CasoExitoInmobiliariaIA = lazyWithRetry(() => import('./pages/CasoExitoInmobiliariaIA'));
const CasoExitoEcommerceIA = lazyWithRetry(() => import('./pages/CasoExitoEcommerceIA'));
const Sectores = lazyWithRetry(() => import('./pages/Sectores'));
const CasosUsoIA = lazyWithRetry(() => import('./pages/CasosUsoIA'));
const RecursosIA = lazyWithRetry(() => import('./pages/RecursosIA'));
const CalculadoraAhorroIA = lazyWithRetry(() => import('./pages/CalculadoraAhorroIA'));
const ComoTrabajamos = lazyWithRetry(() => import('./pages/ComoTrabajamos'));
const SobreRitealmar = lazyWithRetry(() => import('./pages/SobreRitealmar'));
const AcademiaIA = lazyWithRetry(() => import('./pages/AcademiaIA'));
const HerramientasIA = lazyWithRetry(() => import('./pages/HerramientasIA'));
const GeneradorPromptsIA = lazyWithRetry(() => import('./pages/GeneradorPromptsIA'));
const EvaluadorMadurezIA = lazyWithRetry(() => import('./pages/EvaluadorMadurezIA'));
const AnalizadorProcesosIA = lazyWithRetry(() => import('./pages/AnalizadorProcesosIA'));
const PlanAutomatizacionIA = lazyWithRetry(() => import('./pages/PlanAutomatizacionIA'));

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title?: string;
    subtitle?: string;
    submitText?: string;
  }>({ isOpen: false });

  const handleOpenModal = (config?: { title?: string; subtitle?: string; submitText?: string }) => {
    setModalConfig({ isOpen: true, ...(config || {}) });
  };

  const handleCloseModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onLocationChange);

    const pushState = window.history.pushState;
    window.history.pushState = function (...args) {
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
      case '/': return <Home onOpenCalendly={handleOpenModal} />;
      // Páginas SEO y Servicios Unificados
      case '/servicios/agentes-ia': return <AgentesIA />;
      case '/diseno-web': return <DisenoWebPage />;
      case '/apps-para-empresas': return <AppsEmpresasPage />;
      case '/servicios/automatizacion-procesos': return <ProcessAutomation />;
      case '/servicios/crm-a-medida': return <CrmAMedida />;
      case '/chatbots-ia': return <ChatbotsIaPage />;
      case '/seo-posicionamiento-web': return <SeoPosicionamientoPage />;
      case '/sectores': return <Sectores />;
      case '/casos-de-uso-ia': return <CasosUsoIA />;
      case '/recursos-ia': return <RecursosIA />;
      case '/calculadora-ahorro-ia': return <CalculadoraAhorroIA />;
      case '/como-trabajamos': return <ComoTrabajamos />;
      case '/sobre-ritealmar': return <SobreRitealmar />;
      case '/academia-ia': return <AcademiaIA />;
      case '/herramientas-ia': return <HerramientasIA />;
      case '/generador-prompts-ia': return <GeneradorPromptsIA />;
      case '/evaluador-madurez-ia': return <EvaluadorMadurezIA />;
      case '/analizador-procesos-ia': return <AnalizadorProcesosIA />;
      case '/plan-automatizacion-ia': return <PlanAutomatizacionIA />;

      // Nuevas páginas B2B
      case '/diseno-web-clinicas-dentales': return <DisenoWebClinicasDentalesPage />;
      case '/automatizacion-ia-clinicas-dentales': return <AutomatizacionIaClinicasPage />;
      case '/chatbot-ia-inmobiliarias': return <ChatbotIaInmobiliariasPage />;
      case '/diseno-web-inmobiliarias': return <DisenoWebInmobiliariasPage />;
      case '/automatizacion-whatsapp-empresas': return <AutomatizacionWhatsappPage />;
      case '/auditoria-ia-pymes': return <AuditoriaIaPymesPage />;
      case '/ia-para-despachos-abogados': return <IaAbogadosPage />;
      case '/precios': return <PreciosPage onOpenForm={handleOpenModal} />;
      case '/contacto':
        window.location.replace('/auditoria-ia-gratis' + window.location.search);
        return null;
      case '/auditoria-ia-gratis': return <AuditoriaIaGratis />;
      case '/estado-plataforma': return <EstadoPlataforma />;
      case '/casos-de-exito': return <CasosExito />;
      case '/casos-de-exito/clinica-reduccion-llamadas-ia': return <CasoExitoClinicaIA />;
      case '/casos-de-exito/inmobiliaria-captacion-ia': return <CasoExitoInmobiliariaIA />;
      case '/casos-de-exito/ecommerce-recuperacion-carritos-ia': return <CasoExitoEcommerceIA />;

      // Blog SEO
      case '/blog': return <BlogIndex />;
      case '/blog/automatizar-captacion-clientes-ia-pyme': return <BlogAutomatizarCaptacion />;
      case '/blog/automatizar-whatsapp-pyme': return <BlogAutomatizarWhatsApp />;
      case '/blog/automatizacion-citas-clinicas-ia': return <BlogCitasClinicas />;
      case '/blog/ia-inmobiliarias-captacion-ventas': return <BlogInmobiliariasIa />;
      case '/blog/automatizacion-procesos-pymes': return <BlogAutomatizacionProcesosPymes />;

      // Páginas Legales
      case '/aviso-legal': return <AvisoLegal />;
      case '/privacidad': return <Privacidad />;
      case '/cookies': return <Cookies />;
      case '/plan-captacion': return <PlanCaptacion />;

      // Clínicas V2 Premium
      case '/soluciones/ia-clinicas-medicas':
      case '/soluciones/clinicas':
      case '/clinicas':
        return <ClinicasV2 onOpenForm={handleOpenModal} />;

      // Inmobiliarias V2
      case '/soluciones/ia-inmobiliarias':
      case '/soluciones/inmobiliarias':
      case '/inmobiliarias':
        return <VerticalesIndustria type="inmobiliarias" onOpenForm={handleOpenModal} />;

      // Ecommerce V2
      case '/soluciones/ia-ecommerce':
      case '/soluciones/ecommerce':
      case '/ecommerce':
        return <VerticalesIndustria type="ecommerce" onOpenForm={handleOpenModal} />;

      // Constructoras V2
      case '/soluciones/ia-constructoras':
      case '/soluciones/constructoras':
      case '/constructoras':
        return <VerticalesIndustria type="constructoras" onOpenForm={handleOpenModal} />;

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

        if (path === '/plan-captacion') return <PlanCaptacion />;
        return <Home onOpenCalendly={handleOpenModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-400">
      {/* Fondo de Identidad Corporativa Unificado Dark Neon */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold">
          Saltar al contenido principal
        </a>
        <header className="print:hidden">
          <Navbar onOpenCalendly={handleOpenModal} />
          <AnalyticsPageTracker currentPath={currentPath} />
        </header>

        <main id="main-content" className="flex-grow">
          {/* Suspense muestra un spinner ligero mientras se descarga el chunk de la página */}
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-[#030712]">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            {renderRoute()}
          </Suspense>
        </main>

        <footer className="print:hidden">
          <ModalController 
            isOpen={modalConfig.isOpen} 
            onClose={handleCloseModal} 
            title={modalConfig.title}
            subtitle={modalConfig.subtitle}
            submitText={modalConfig.submitText}
          />
          <ResponsibleIASection />
          <LegalFooter />
          <WhatsAppFloatingButton />
          <CookieBanner />
        </footer>
      </div>
    </div>
  );
}
