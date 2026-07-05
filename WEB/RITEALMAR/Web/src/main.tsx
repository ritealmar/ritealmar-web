import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeConsent } from './utils/consent';

// Asegurarnos de que el Consent Mode y dataLayer existan desde el ms 0
initializeConsent();

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <main role="alert" style={{ background: '#020617', color: 'white', padding: '2rem', fontFamily: 'monospace', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <h1 style={{ color: '#EF4444', marginBottom: '1rem', fontSize: '2rem' }}>⚠ Error de Carga</h1>
          <p style={{ color: '#F1F5F9', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
            Ha ocurrido un problema temporal al cargar la página. Recarga para continuar.
          </p>
          <pre style={{ color: '#CBD5E1', fontSize: '0.875rem', whiteSpace: 'pre-wrap', background: '#0F172A', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', maxWidth: '100%', overflowX: 'auto' }}>
            {String(this.state.error)}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ background: '#06B6D4', color: '#030712', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
          >
            Recargar página
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
