import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function WhatsAppFloatingButton() {
  const whatsappUrl = "https://wa.me/34611155415?text=Hola%2C%20vengo%20de%20la%20web%20de%20Ritealmar.%20Quiero%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%2C%20IA%20o%20web%20para%20mi%20empresa.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Ritealmar por WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button', page_path: window.location.pathname })}
      className="fixed bottom-5 right-4 lg:bottom-8 lg:right-8 z-[80] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full w-12 h-12 lg:w-auto lg:h-auto lg:px-6 lg:py-4 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all group animate-fade-in-delayed"
    >
      <MessageCircle size={22} className="fill-white lg:w-6 lg:h-6" />
      <span className="hidden lg:block font-bold text-sm tracking-wide">
        Hablar por WhatsApp
      </span>
      
      {/* Pulse effect on load */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 animate-ping"></span>
    </a>
  );
}
