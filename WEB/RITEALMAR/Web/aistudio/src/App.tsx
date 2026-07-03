import React, { useState, useEffect, Suspense, lazy } from 'react';

const AgencyLanding = lazy(() => import('./components/AgencyLanding'));
const SEOAutomationPymes = lazy(() => import('./components/SEOAutomationPymes'));
const SEOIAAttention = lazy(() => import('./components/SEOIAAttention'));
const SEOAdminAutomation = lazy(() => import('./components/SEOAdminAutomation'));

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    let currentPage = 'home';
    if (path.includes('automatizacion-pymes')) currentPage = 'seo-pymes';
    if (path.includes('atencion-cliente-ia')) currentPage = 'seo-atencion';
    if (path.includes('procesos-administrativos')) currentPage = 'seo-admin';
    
    setPage(currentPage);
  }, []);

  const renderPage = () => {
    switch(page) {
      case 'seo-pymes': return <SEOAutomationPymes onBack={() => setPage('home')} />;
      case 'seo-atencion': return <SEOIAAttention onBack={() => setPage('home')} />;
      case 'seo-admin': return <SEOAdminAutomation onBack={() => setPage('home')} />;
      default: return <AgencyLanding onNavigate={(p) => setPage(p)} />;
    }
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080810] flex items-center justify-center text-[#F0EDE8]">Cargando...</div>}>
      {renderPage()}
    </Suspense>
  );
}
