import React from 'react';
import { motion } from 'motion/react';
import { Bot, Mail, FileSearch, Layout, Smartphone, Lightbulb, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    { title: "Chatbots IA", desc: "Agentes entrenados con tus datos para atención 24/7.", icon: Bot },
    { title: "Automatización de Tareas", desc: "Clasificación inteligente y respuestas automáticas.", icon: Mail },
    { title: "Extracción de Datos", desc: "Procesamiento de PDFs y facturas sin errores humanos.", icon: FileSearch },
    { title: "Desarrollo Web & Apps", desc: "Páginas y aplicaciones modernas ultrarrápidas.", icon: Layout },
    { title: "Sistemas a Medida", desc: "Software diseñado específicamente para tu operativa.", icon: Smartphone },
    { title: "Consultoría Estratégica", desc: "Hoja de ruta para implementar IA con enfoque en rentabilidad.", icon: Lightbulb }
  ];

  return (
    <section id="servicios" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#AF5AE1] uppercase mb-4 block">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 uppercase">
            Nuestras Soluciones
          </h2>
          <p className="text-lg text-gray-500 max-w-[700px] mx-auto">
            Ayudamos a las empresas a ser más eficientes, rentables y escalables mediante tecnología de última generación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {
            // Define different animation styles for each card
            const animations = [
              { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, whileHover: { scale: 1.05, rotate: -2 } },
              { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, whileHover: { y: -15, scale: 1.02 } },
              { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, whileHover: { scale: 1.05, rotate: 2 } },
              { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, whileHover: { rotateY: 15 } },
              { initial: { opacity: 0, rotate: -10 }, whileInView: { opacity: 1, rotate: 0 }, whileHover: { scale: 1.1 } },
              { initial: { opacity: 0, y: -50 }, whileInView: { opacity: 1, y: 0 }, whileHover: { rotateX: 15 } },
            ];

            const anim = animations[i % animations.length];

            return (
              <motion.div
                key={i}
                initial={anim.initial}
                whileInView={anim.whileInView}
                whileHover={anim.whileHover}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="bg-white border-2 border-transparent hover:border-[#AF5AE1] shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl p-10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-[#AF5AE1]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-[#AF5AE1]/10 text-[#AF5AE1] flex items-center justify-center mb-8 group-hover:bg-[#AF5AE1] group-hover:text-white transition-all shadow-inner">
                  <srv.icon size={32} />
                </div>
                <h4 className="font-extrabold text-black text-xl mb-4 uppercase tracking-tighter">{srv.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{srv.desc}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#AF5AE1] uppercase tracking-[0.2em]">High Tech IA</span>
                  <ArrowRight size={16} className="text-[#AF5AE1] transform translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
