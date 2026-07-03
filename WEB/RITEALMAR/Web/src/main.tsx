import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

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
        <div style={{ background: '#020617', color: 'white', padding: '2rem', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h1 style={{ color: '#EF4444', marginBottom: '1rem' }}>⚠ Error de Carga</h1>
          <pre style={{ color: '#94A3B8', fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>
            {String(this.state.error)}
          </pre>
          <p style={{ marginTop: '1rem', color: '#64748B' }}>Envía esta pantalla para diagnosticar el problema.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
