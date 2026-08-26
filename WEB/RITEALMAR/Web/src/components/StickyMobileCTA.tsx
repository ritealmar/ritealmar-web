import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function StickyMobileCTA() {
  const handleAuditoriaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    trackEvent('click_auditoria_gratis', { source: 'sticky_mobile_cta' });
    window.location.href = '/auditoria-ia-gratis';
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    trackEvent('click_whatsapp', { source: 'sticky_mobile_cta' });
    window.location.href = 'https://wa.me/34611155415';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-[#071426]/95 backdrop-blur-md border-t border-white/10 safe-area-inset-bottom">
      <div className="max-w-full px-4 py-3 flex gap-2">
        <button
          onClick={handleAuditoriaClick}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-[#00C0FF] to-[#00D4FF] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,192,255,0.5)] transition-all text-sm flex items-center justify-center gap-1"
        >
          Auditoría gratis
          <ChevronRight size={16} />
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 px-4 py-3 bg-[#25D366]/15 text-[#25D366] font-bold rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-all text-sm flex items-center justify-center gap-1"
        >
          <MessageCircle size={16} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}
