import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AvisoLegal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-cyan-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 hover:text-[#00D4FF] transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-widest text-lg text-white">RITEALMAR</span>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Aviso Legal</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-8 text-lg font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Datos Identificativos</h2>
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se exponen los datos identificativos del titular de la página web:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li><strong>Responsable:</strong> RITEALMAR</li>
                <li><strong>Dominio:</strong> <a href="https://ritealmar.es" className="text-cyan-400 hover:underline">https://ritealmar.es</a></li>
                <li><strong>Email de contacto:</strong> <a href="mailto:info@ritealmar.es" className="text-cyan-400 hover:underline">info@ritealmar.es</a></li>
                <li><strong>Actividad principal:</strong> Desarrollo web, automatización, inteligencia artificial, consultoría tecnológica y soluciones digitales para empresas.</li>
                <li><strong>CIF/NIF:</strong> Dato pendiente de completar por el titular de la web.</li>
                <li><strong>Dirección Fiscal:</strong> Dato pendiente de completar por el titular de la web.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Propiedad Intelectual e Industrial</h2>
              <p>El diseño del portal y sus códigos fuente, así como los logos, marcas y demás signos distintivos que aparecen en el mismo pertenecen a RITEALMAR y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
              <p className="mt-4">Queda expresamente prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de RITEALMAR.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidad de los Contenidos</h2>
              <p>RITEALMAR no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde por la legalidad de otros sitios web de terceros, que pudieran estar vinculados o enlazados desde este portal.</p>
              <p className="mt-4">RITEALMAR se reserva el derecho a realizar cambios en el sitio web sin previo aviso, al objeto de mantener actualizada su información, añadiendo, modificando, corrigiendo o eliminando los contenidos publicados o el diseño del portal.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Ley Aplicable y Jurisdicción</h2>
              <p>La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este aviso legal, así como cualquier cuestión relacionada con los servicios del presente portal, será la ley española. Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita al portal o del uso de los servicios que en él se puedan ofertar, RITEALMAR y el usuario acuerdan someterse a los Jueces y Tribunales del domicilio del usuario, siempre que esté situado en territorio español.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
