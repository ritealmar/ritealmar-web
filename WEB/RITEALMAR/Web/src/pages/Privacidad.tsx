import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacidad() {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Política de Privacidad</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-8 text-lg font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Información sobre el Responsable del Tratamiento</h2>
              <p>RITEALMAR, como responsable del sitio web, de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informa sobre cómo recogemos y tratamos sus datos.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li><strong>Titular:</strong> RITEALMAR</li>
                <li><strong>Correo electrónico:</strong> <a href="mailto:info@ritealmar.es" className="text-cyan-400 hover:underline">info@ritealmar.es</a></li>
                <li><strong>Dirección:</strong> Dato pendiente de completar por el titular de la web.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Finalidad del Tratamiento de los Datos</h2>
              <p>RITEALMAR trata la información que nos facilitan las personas interesadas con el fin de resolver las consultas y solicitudes enviadas a través de nuestros formularios de contacto, así como para enviar información sobre nuestros servicios de desarrollo web, automatización, e inteligencia artificial (finalidad comercial).</p>
              <p className="mt-4">En el caso de contratación de nuestros servicios, la finalidad es gestionar, administrar y prestar los servicios solicitados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Conservación de los Datos</h2>
              <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, no se solicite su supresión por el interesado y durante el tiempo en el que puedan derivarse responsabilidades legales por los servicios prestados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Legitimación para el Tratamiento</h2>
              <p>La base legal para el tratamiento de sus datos es la prestación de su consentimiento explícito a través del envío de formularios web para la atención de sus consultas, así como la ejecución de un contrato o medidas precontractuales en caso de contratar nuestros servicios tecnológicos y de captación de leads.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Derechos del Usuario</h2>
              <p>Cualquier persona tiene derecho a obtener confirmación sobre si en RITEALMAR estamos tratando datos personales que les conciernan, o no.</p>
              <p className="mt-4">Como usuario, tiene los siguientes derechos:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li><strong>Acceso:</strong> Podrá consultar sus datos personales.</li>
                <li><strong>Rectificación:</strong> Podrá solicitar la modificación de sus datos si son inexactos.</li>
                <li><strong>Supresión:</strong> Podrá solicitar la eliminación de sus datos.</li>
                <li><strong>Oposición:</strong> Podrá solicitar que no se traten sus datos.</li>
                <li><strong>Limitación del tratamiento:</strong> Podrá solicitar la limitación al tratamiento de sus datos en determinados casos.</li>
                <li><strong>Portabilidad:</strong> Podrá recibir los datos facilitados en formato electrónico estructurado.</li>
              </ul>
              <p className="mt-4">Podrá ejercer estos derechos mediante un correo electrónico dirigido a <a href="mailto:info@ritealmar.es" className="text-cyan-400 hover:underline">info@ritealmar.es</a>, adjuntando fotocopia de su DNI o documento identificativo equivalente.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
