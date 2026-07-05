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
