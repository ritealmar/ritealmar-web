import React, { useEffect, useRef } from 'react';

declare global {
  interface TurnstileOptions {
    sitekey: string;
    callback?: (token: string) => void;
    'error-callback'?: () => void;
    'expired-callback'?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    [key: string]: unknown;
  }

  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: TurnstileOptions) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export default function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // VARIABLE CLOUDFLARE PAGES (Frontend)
  // Configurar en Cloudflare Pages -> Settings -> Environment variables
  // Clave: VITE_TURNSTILE_SITE_KEY | Valor: Tu Site Key pública
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const widgetIdRef = useRef<string | null>(null);
  const isKeyMissingLogged = useRef(false);

  useEffect(() => {
    // Si no hay Site Key, lanzamos error y no simulamos el token.
    if (!siteKey) {
      if (!isKeyMissingLogged.current) {
        console.error("ERROR CRÍTICO: Turnstile no está configurado (VITE_TURNSTILE_SITE_KEY). El formulario no podrá enviarse.");
        isKeyMissingLogged.current = true;
      }
      if (onError) onError();
      return;
    }

    // Prevenir ejecución doble en Strict Mode si ya estamos inicializando
    if (widgetIdRef.current) return;

    let isMounted = true;

    // Verificar si ya existe window.turnstile
    const renderWidget = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current && isMounted) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              onVerify(token);
            },
            'error-callback': () => {
              console.error("Error al cargar o verificar Turnstile.");
              if (onError) onError();
            },
            'expired-callback': () => {
              if (onExpire) onExpire();
            },
            theme: 'dark' // Ajustado al diseño corporativo de Ritealmar
          });
        } catch (err) {
          console.error("Fallo al renderizar Turnstile", err);
          if (onError) onError();
        }
      }
    };

    if (!document.getElementById('turnstile-script')) {
      const script = document.createElement('script');
      script.id = 'turnstile-script';
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (isMounted) renderWidget();
      };
      document.head.appendChild(script);
    } else {
      // Script ya cargado, solo renderizar
      if (window.turnstile) {
        renderWidget();
      } else {
        // En caso de que el script esté en proceso de carga
        const checkTurnstile = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkTurnstile);
            if (isMounted) renderWidget();
          }
        }, 100);
      }
    }

    return () => {
      isMounted = false;
      // Limpiar widget al desmontar
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (e) {
          // Ignorar posibles errores al desmontar
        }
      }
    };
  }, [siteKey, onVerify, onError, onExpire]);

  if (!siteKey) {
    return (
      <div className="bg-red-950/50 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm mb-4">
        La protección contra bots (Turnstile) no está configurada. Por favor, contacta con soporte.
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center my-4 min-h-[65px]">
      <div ref={containerRef} className="max-w-full overflow-hidden"></div>
    </div>
  );
}
