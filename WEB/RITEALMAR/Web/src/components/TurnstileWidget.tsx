import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

declare global {
  interface TurnstileOptions {
    sitekey: string;
    action?: string;
    callback?: (token: string) => void;
    'error-callback'?: () => void;
    'expired-callback'?: () => void;
    'timeout-callback'?: () => void;
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
  action?: string;
}

export interface TurnstileWidgetHandle {
  reset: () => void;
}

let turnstileScriptPromise: Promise<void> | null = null;

function ensureTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById('turnstile-script') as HTMLScriptElement | null;
    const script = existingScript ?? document.createElement('script');
    let timeoutId: number | undefined;

    const cleanup = () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
    const handleLoad = () => {
      cleanup();
      if (window.turnstile) resolve();
      else reject(new Error('La API de Turnstile no quedó disponible.'));
    };
    const handleError = () => {
      cleanup();
      reject(new Error('No se pudo cargar el script de Turnstile.'));
    };

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });

    if (!existingScript) {
      script.id = 'turnstile-script';
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    timeoutId = window.setTimeout(() => {
      if (window.turnstile) handleLoad();
      else handleError();
    }, 10_000);
  }).catch((error) => {
    turnstileScriptPromise = null;
    throw error;
  });

  return turnstileScriptPromise;
}

const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ onVerify, onError, onExpire, action = 'contact' }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const onVerifyRef = useRef(onVerify);
    const onErrorRef = useRef(onError);
    const onExpireRef = useRef(onExpire);
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

    useEffect(() => {
      onVerifyRef.current = onVerify;
      onErrorRef.current = onError;
      onExpireRef.current = onExpire;
    }, [onVerify, onError, onExpire]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      }
    }), []);

    useEffect(() => {
      if (!siteKey) {
        onErrorRef.current?.();
        return;
      }

      let cancelled = false;

      void ensureTurnstileScript()
        .then(() => {
          if (cancelled || !window.turnstile || !containerRef.current || widgetIdRef.current) return;

          const widgetId = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            action,
            theme: 'dark',
            callback: (token: string) => onVerifyRef.current(token),
            'error-callback': () => onErrorRef.current?.(),
            'expired-callback': () => onExpireRef.current?.(),
            'timeout-callback': () => onErrorRef.current?.()
          });

          if (cancelled) {
            window.turnstile.remove(widgetId);
            return;
          }

          widgetIdRef.current = widgetId;
          containerRef.current.dataset.turnstileWidgetId = widgetId;
        })
        .catch(() => {
          if (!cancelled) onErrorRef.current?.();
        });

      return () => {
        cancelled = true;
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
        }
        widgetIdRef.current = null;
      };
    }, [action, siteKey]);

    if (!siteKey) {
      return (
        <div role="alert" className="bg-red-950/50 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm mb-4">
          La protección contra bots no está disponible en este momento. Por favor, inténtalo más tarde.
        </div>
      );
    }

    return (
      <div className="w-full flex justify-center my-4 min-h-[65px]">
        <div ref={containerRef} className="max-w-full overflow-hidden" />
      </div>
    );
  }
);

export default TurnstileWidget;
