import React, { useEffect, useRef } from 'react';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
}

export default function TurnstileWidget({ onVerify, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // VARIABLE CLOUDFLARE PAGES (Frontend)
  // Configurar en Cloudflare Pages -> Settings -> Environment variables
  // Clave: VITE_TURNSTILE_SITE_KEY | Valor: 1x00000000000000000000AA (Tu Site Key)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Si no hay Site Key, simulamos que pasa inmediatamente para no bloquear el desarrollo o producción
    if (!siteKey) {
      console.warn("Turnstile no está configurado (VITE_TURNSTILE_SITE_KEY). Saltando verificación.");
      onVerify("dev_no_token");
      return;
    }

    // Verificar si ya existe window.turnstile
    const renderWidget = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
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
      script.onload = renderWidget;
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
            renderWidget();
          }
        }, 100);
      }
    }

    return () => {
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
  }, [siteKey, onVerify, onError]);

  // Si no hay key, no renderizamos nada visual para no romper el layout
  if (!siteKey) return null;

  return (
    <div className="w-full flex justify-center my-4 min-h-[65px]">
      <div ref={containerRef} className="max-w-full overflow-hidden"></div>
    </div>
  );
}
