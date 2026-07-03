import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function LegalFooter() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#00D4FF] to-[#FF006E] rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,0,110,0.3)]">
                <span className="text-white font-extrabold text-sm font-mono tracking-tighter">R</span>
              </div>
              <span className="text-white font-black tracking-widest text-lg">RITEALMAR</span>
            </div>
            <p className="font-medium text-slate-300 text-sm leading-relaxed mb-6">
              Especialistas en Inteligencia Artificial y Automatización de Procesos para PYMEs. Hacemos que la tecnología trabaje por ti.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FF006E] hover:border-[#FF006E] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="/diseno-web" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Diseño Web</a></li>
              <li><a href="/apps-para-empresas" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Apps a Medida</a></li>
              <li><a href="/automatizaciones-ia" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Automatización IA</a></li>
              <li><a href="/chatbots-ia" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Chatbots Inteligentes</a></li>
              <li><a href="/seo-posicionamiento-web" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">Posicionamiento SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Sectores</h4>
            <ul className="space-y-3">
              <li><a href="/clinicas" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">IA para Clínicas</a></li>
              <li><a href="/inmobiliarias" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">IA para Inmobiliarias</a></li>
              <li><a href="/ecommerce" className="text-slate-400 hover:text-[#00D4FF] text-sm transition-colors">IA para E-commerce</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="/precios" className="text-slate-400 hover:text-[#FF006E] text-sm transition-colors">Precios y Tarifas</a></li>
              <li><a href="#casos" className="text-slate-400 hover:text-[#FF006E] text-sm transition-colors">Casos de Éxito</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-[#FF006E] text-sm transition-colors">Auditoría Gratuita</a></li>
              <li><a href="mailto:info@ritealmar.es" className="text-slate-400 hover:text-[#FF006E] text-sm transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/aviso-legal" className="text-slate-400 hover:text-white text-sm transition-colors">Aviso Legal</a></li>
              <li><a href="/privacidad" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Privacidad</a></li>
              <li><a href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RITEALMAR. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-slate-600 text-xs font-mono">Diseñado y desarrollado con IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
