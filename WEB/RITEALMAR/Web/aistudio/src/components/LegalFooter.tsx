import React from 'react';

export default function LegalFooter() {
  const scrollTo = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020617] pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-sm">
          
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <img src="/logo.png" alt="Ritealmar IA Soluciones" className="h-10 object-contain mb-6" />
            <p className="text-[#9CA3AF] leading-relaxed mb-6">
              Agencia de inteligencia artificial, automatización y desarrollo digital para PYMEs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="flex flex-col gap-3 text-[#9CA3AF]">
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-[#3B82F6] transition-colors">Automatizaciones</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-[#3B82F6] transition-colors">Chatbots IA</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-[#3B82F6] transition-colors">Gestión documental</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-[#3B82F6] transition-colors">Consultoría IA</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Soluciones</h4>
            <ul className="flex flex-col gap-3 text-[#9CA3AF]">
              <li><button onClick={() => scrollTo('soluciones')} className="hover:text-[#3B82F6] transition-colors">Para Asesorías</button></li>
              <li><button onClick={() => scrollTo('soluciones')} className="hover:text-[#3B82F6] transition-colors">Para Clínicas</button></li>
              <li><button onClick={() => scrollTo('soluciones')} className="hover:text-[#3B82F6] transition-colors">Para E-commerce</button></li>
              <li><button onClick={() => scrollTo('soluciones')} className="hover:text-[#3B82F6] transition-colors">Para Autónomos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Webs & Apps</h4>
            <ul className="flex flex-col gap-3 text-[#9CA3AF]">
              <li><button onClick={() => scrollTo('webs-apps')} className="hover:text-[#3B82F6] transition-colors">Webs corporativas</button></li>
              <li><button onClick={() => scrollTo('webs-apps')} className="hover:text-[#3B82F6] transition-colors">Landing pages</button></li>
              <li><button onClick={() => scrollTo('webs-apps')} className="hover:text-[#3B82F6] transition-colors">Apps internas</button></li>
              <li><button onClick={() => scrollTo('portafolio')} className="hover:text-[#3B82F6] transition-colors">Portafolio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="flex flex-col gap-3 text-[#9CA3AF]">
              <li><button onClick={() => scrollTo('contacto')} className="hover:text-[#3B82F6] transition-colors">Hablar con ventas</button></li>
              <li><a href="mailto:info@ritealmar.es" className="hover:text-[#3B82F6] transition-colors">info@ritealmar.es</a></li>
              <li><span className="text-gray-500">Madrid, España</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 text-[#9CA3AF]">
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ritealmar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
