import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function LegalFooter() {
  return (
    <div className="bg-[#0A1628] border-t border-white/5 pt-20 pb-32 md:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#00D4FF] to-[#FF006E] rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,0,110,0.3)]">
                <span className="text-white font-extrabold text-sm font-mono tracking-tighter">R</span>
              </div>
              <span className="text-white font-black tracking-widest text-lg">RITEALMAR</span>
            </div>
            <p className="font-medium text-slate-300 text-sm leading-relaxed mb-8 max-w-sm">
              Soluciones digitales para PYMEs que quieren captar más clientes, ahorrar tiempo y escalar procesos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Globe size={18} className="text-[#00D4FF] shrink-0" />
                <a href="https://ritealmar.es" className="hover:text-white transition-colors">https://ritealmar.es</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-[#FF006E] shrink-0" />
                <a href="mailto:info@ritealmar.es" className="hover:text-white transition-colors">info@ritealmar.es</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={18} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/34611155415" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('click_whatsapp', { event_label: 'WhatsApp Footer' })} className="hover:text-white transition-colors">+34 611 155 415</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-slate-400 shrink-0" />
                <span>Servicio en toda España</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h2>
            <ul className="space-y-4">
              <li><a href="/servicios/automatizacion-procesos" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Automatización de Procesos</a></li>
              <li><a href="/servicios/agentes-ia" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Agentes IA Autónomos</a></li>
              <li><a href="/chatbots-ia" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Chatbots con IA</a></li>
              <li><a href="/diseno-web" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Desarrollo Web</a></li>
              <li><a href="/seo-posicionamiento-web" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Posicionamiento SEO</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Sectores y Recursos</h2>
            <ul className="space-y-4">
              <li><a href="/clinicas" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Clínicas</a></li>
              <li><a href="/inmobiliarias" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Inmobiliarias</a></li>
              <li><a href="/ia-para-despachos-abogados" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Abogados</a></li>
              <li><a href="/ecommerce" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">E-commerce</a></li>
              <li><a href="/casos-de-exito" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Casos de Éxito</a></li>
              <li><a href="/blog" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Blog de IA y Automatización</a></li>
              <li className="pt-2"><a href="/auditoria-ia-gratis" className="text-white hover:text-[#FF006E] text-sm font-bold transition-colors">Auditoría IA Gratuita</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h2>
            <ul className="space-y-4">
              <li><a href="/aviso-legal" className="text-slate-400 hover:text-white text-sm transition-colors">Aviso Legal</a></li>
              <li><a href="/privacidad" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Privacidad</a></li>
              <li><a href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Cookies</a></li>
              <li className="pt-4"><a href="/estado-plataforma" className="text-slate-400 hover:text-[#00D4FF] text-sm font-bold transition-colors">Estado y Transparencia</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} RITEALMAR. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-center md:text-right">
            <span className="text-slate-400/80 text-xs font-mono font-medium tracking-wide">
              Ingeniería digital, automatización e IA aplicada para empresas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
