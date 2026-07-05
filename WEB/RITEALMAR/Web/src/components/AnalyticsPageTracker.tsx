import React, { useEffect } from 'react';
import { sendPageView } from '../utils/analytics';
import { getConsent } from '../utils/consent';

export default function AnalyticsPageTracker({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    // Solo envía page_view si ya hay consentimiento. 
    // Si no lo hay, se enviará al aceptar cookies.
    const consent = getConsent();
    if (consent && consent.analytics) {
      // Pequeño timeout para asegurar que el título del documento se ha actualizado
      setTimeout(() => {
        sendPageView();
      }, 100);
    }
  }, [currentPath]);

  return null;
}
