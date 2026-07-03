import React from 'react';
import { motion } from 'motion/react';
import { Settings, MessageSquare, FileText, Lightbulb, GraduationCap, Link2, ArrowRight } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Settings,
      title: "Automatización de tareas",
      desc: "Automatiza correos, formularios, reportes, avisos, tareas administrativas y procesos repetitivos.",
      linkText: "Ver automatizaciones",
      link: "#automatizaciones"
    },
    {
      icon: MessageSquare,
      title: "Asistentes IA y chatbots",
      desc: "Crea asistentes inteligentes para atención al cliente, soporte interno, ventas o consultas frecuentes.",
      linkText: "Ver asistentes IA",
      link: "#chatbots"
    },
    {
      icon: FileText,
      title: "Gestión documental inteligente",
      desc: "Extrae, resume y organiza información de PDFs, facturas, contratos, presupuestos y documentos empresariales.",
      linkText: "Ver gestión documental",
      link: "#documentos"
    },
    {
      icon: Lightbulb,
      title: "Consultoría IA para PYMEs",
      desc: "Detectamos oportunidades reales de mejora y diseñamos una hoja de ruta IA adaptada a tu negocio.",
      linkText: "Ver consultoría IA",
      link: "#consultoria"
    },
    {
      icon: GraduationCap,
      title: "Formación práctica en IA",
      desc: "Formamos a equipos para usar herramientas de IA de forma profesional, segura y productiva.",
      linkText: "Ver formación",
      link: "#formacion"
    },
    {
      icon: Link2,
      title: "Integración de herramientas IA",
      desc: "Conectamos IA con tus procesos, formularios, hojas de cálculo, CRM, email o sistemas internos.",
      linkText: "Ver integraciones",
      link: "#integraciones"
    }
  ];

  return (
    <section id="soluciones" className="section-spacing dark-section-surface relative">
      <div className="absolute top-0 right-0 w-full h-full bg-neural-net opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white max-w-2xl"
          >
            Soluciones IA para cada área de tu empresa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.a 
              href={sol.link}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card group cursor-pointer block relative overflow-hidden"
            >
              {/* Brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#0F62FE]/20 text-[#00E5FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <sol.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">{sol.desc}</p>
                
                <div className="flex items-center gap-2 text-[#00E5FF] font-medium text-sm">
                  {sol.linkText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
