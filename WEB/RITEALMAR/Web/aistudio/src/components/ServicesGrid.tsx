import React from 'react';
import { motion } from 'motion/react';
import { Bot, Mail, FileSearch, Layout, Smartphone, Lightbulb, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    { title: "Automatización", desc: "Clasificación inteligente y respuestas.", benefit: "Ahorra 10h/semana", icon: Mail },
    { title: "Chatbots IA", desc: "Agentes entrenados con tus datos.", benefit: "Atención 24/7", icon: Bot },
    { title: "Gestión documental", desc: "Extracción de datos en PDFs.", benefit: "Cero picado de datos", icon: FileSearch },
    { title: "Webs corporativas", desc: "Páginas empresariales ultrarrápidas.", benefit: "Tu mejor comercial online", icon: Layout },
    { title: "Apps internas", desc: "Herramientas móviles a medida.", benefit: "Digitaliza tu operativa", icon: Smartphone },
    { title: "Consultoría IA", desc: "Roadmap estratégico tecnológico.", benefit: "Invierte con ROI seguro", icon: Lightbulb }
  ];

  return (
    <section id="servicios" className="section-spacing bg-[#F1F5F9] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#3B82F6] uppercase mb-4 block">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#020617] mb-4">
            Catálogo de Soluciones
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-[700px] mx-auto">
            Elige la pieza que le falta a tu negocio para escalar al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#3B82F6] hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <srv.icon size={24} />
                </div>
                <h4 className="font-bold text-[#020617] text-lg">{srv.title}</h4>
              </div>
              <p className="text-gray-500 mb-6 flex-1">{srv.desc}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1.5 rounded-lg group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                  {srv.benefit}
                </span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white border border-gray-200 hover:border-[#3B82F6] hover:text-[#3B82F6] text-[#020617] shadow-sm rounded-xl font-bold transition-all inline-flex items-center gap-2">
            Ver catálogo completo <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
