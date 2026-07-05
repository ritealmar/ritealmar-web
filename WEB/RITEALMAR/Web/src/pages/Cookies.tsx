import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Cookies() {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Política de Cookies</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-8 text-lg font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. ¿Qué son las cookies?</h2>
              <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. ¿Qué cookies utilizamos en RITEALMAR?</h2>
              <p>Siguiendo las directrices de la Agencia Española de Protección de Datos, procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.</p>
              
              <h3 className="text-xl font-bold text-white mt-6 mb-3">Cookies Propias</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li><strong>Cookies de sesión:</strong> Para garantizar que los usuarios puedan navegar por la web correctamente.</li>
                <li><strong>Cookies de preferencias:</strong> Permiten recordar información para que el usuario acceda al servicio con ciertas características que pueden diferenciar su experiencia de la de otros usuarios.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">Cookies de Terceros</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li><strong>Cookies de analítica:</strong> Utilizamos herramientas como Google Analytics para cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen los usuarios de nuestra web, con el fin de mejorar nuestra oferta de servicios digitales y soluciones de IA.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Desactivación o eliminación de cookies</h2>
              <p>En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.</p>
              <p className="mt-4">Puede restringir, bloquear o borrar las cookies de RITEALMAR utilizando su navegador. En cada navegador la operativa es diferente, la función de "Ayuda" le mostrará cómo hacerlo:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Microsoft Edge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Notas adicionales</h2>
              <p>RITEALMAR no se hace responsable del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</p>
              <p className="mt-4">Para cualquier duda o consulta sobre esta política de cookies, no dude en comunicarse con nosotros a través del correo <a href="mailto:info@ritealmar.es" className="text-cyan-400 hover:underline">info@ritealmar.es</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
