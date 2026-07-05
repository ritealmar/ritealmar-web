// utils/analytics.ts
export const GA_MEASUREMENT_ID = "G-ZGB3DG38K5";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __ritealmarAnalyticsDebug: () => void;
    __ritealmarSendTestEvent: () => void;
    _gaScriptLoaded?: boolean;
    _configSent?: boolean;
    _lastPageViewSentAt?: Date;
    _lastEventSentAt?: Date;
  }
}

let isAnalyticsInitialized = false;

export const initAnalytics = () => {
  if (typeof window === 'undefined' || isAnalyticsInitialized) return;
  isAnalyticsInitialized = true;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  // Default consent denied
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
    console.log("[RITEALMAR Analytics] GA script injected");
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onload = () => {
      window._gaScriptLoaded = true;
      console.log("[RITEALMAR Analytics] GA script loaded");
      window.gtag('js', new Date());
    };
    document.head.appendChild(script);
  }
};

export const configureGA = () => {
  if (typeof window === 'undefined') return;
  console.log("[RITEALMAR Analytics] GA config sent");
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false
  });
  window._configSent = true;
};

export const sendPageView = () => {
  if (typeof window === 'undefined') return;
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      send_to: GA_MEASUREMENT_ID,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      debug_mode: true
    });
    window._lastPageViewSentAt = new Date();
    console.log("[RITEALMAR Analytics] page_view sent");
  }
};

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      send_to: GA_MEASUREMENT_ID,
      ...params,
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
    window._lastEventSentAt = new Date();
  }
};

// Debug helpers
if (typeof window !== 'undefined') {
  window.__ritealmarAnalyticsDebug = () => {
    const scriptMatch = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
    console.log({
      measurementId: GA_MEASUREMENT_ID,
      gtagType: typeof window.gtag,
      dataLayerLength: window.dataLayer ? window.dataLayer.length : 0,
      scriptTagFound: !!scriptMatch,
      scriptSrc: scriptMatch ? scriptMatch.getAttribute('src') : null,
      scriptLoaded: !!window._gaScriptLoaded,
      consent: localStorage.getItem('ritealmar_cookie_consent'),
      configSent: !!window._configSent,
      lastPageViewSentAt: window._lastPageViewSentAt || null,
      lastEventSentAt: window._lastEventSentAt || null
    });
  };

  window.__ritealmarSendTestEvent = () => {
    if (typeof window.gtag === 'function') {
      console.log("[RITEALMAR Analytics] test event sent with send_to");
      window.gtag('event', 'test_manual_ritealmar', {
        send_to: GA_MEASUREMENT_ID,
        debug_mode: true,
        event_category: 'debug',
        event_label: 'manual_test',
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
        event_callback: function() {
          console.log("[RITEALMAR Analytics] GA4 event_callback executed");
        },
        event_timeout: 2000
      });
      window._lastEventSentAt = new Date();
    } else {
      console.log("[RITEALMAR Analytics] Error: gtag is not a function");
    }
  };
}
