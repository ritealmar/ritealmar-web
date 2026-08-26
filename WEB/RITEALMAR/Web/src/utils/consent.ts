// utils/consent.ts
import { initAnalytics, sendPageView, configureGA } from './analytics';

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
}

const CONSENT_KEY = 'ritealmar_cookie_consent';

export function updateConsentMode(prefs: ConsentPreferences) {
  if (typeof window === 'undefined') return;
  
  const analyticsState = prefs.analytics ? 'granted' : 'denied';
  const marketingState = prefs.marketing ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    analytics_storage: analyticsState,
    ad_storage: marketingState,
    ad_user_data: marketingState,
    ad_personalization: marketingState
  });

  if (!prefs.analytics) {
    console.log("[RITEALMAR Analytics] Consent denied, clearing cookies where possible");
    // Nota aclaratoria: La retirada del consentimiento detiene las ejecuciones futuras del script GA.
    // La eliminación de cookies desde JS está limitada por el alcance del dominio y los atributos (HttpOnly, etc.).
    // Esto es un best-effort.
    const domain = window.location.hostname;
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substring(0, eqPos).trim() : c.trim();
      if (name.startsWith('_ga') || name.startsWith('_gid')) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + domain;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + domain;
      }
    });
  }

  if (prefs.analytics) {
    console.log("[RITEALMAR Analytics] Consent granted");
    configureGA();
    sendPageView();
  }
}

export function getConsent(): ConsentPreferences | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function setConsent(prefs: ConsentPreferences) {
  const data = {
    ...prefs,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
  updateConsentMode(prefs);
}

let isConsentInitialized = false;

export function initializeConsent() {
  if (isConsentInitialized) return;
  isConsentInitialized = true;
  
  initAnalytics(); // Inyecta script y setea default denied

  const consent = getConsent();
  if (consent) {
    updateConsentMode(consent);
  }
}
