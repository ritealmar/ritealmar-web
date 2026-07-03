import React from 'react';
import { motion } from 'motion/react';
import { Settings, MessageSquare, FileText, Lightbulb, GraduationCap, Link2, ArrowRight, MonitorSmartphone, Database } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Settings,
      title: "Automatización de tareas",
      desc: "Automatiza correos, avisos, tareas administrativas y procesos repetitivos.",
      linkText: "Ver automatizaciones"
    },
    {
      icon: MessageSquare,
      title: "Asistentes IA y chatbots",
      desc: "Atención al cliente, soporte interno, ventas y consultas frecuentes.",
      linkText: "Ver asistentes IA"
    },
    {
      icon: FileText,
      title: "Gestión documental inteligente",
      desc: "Extrae, resume y organiza información de PDFs, facturas y contratos.",
      linkText: "Ver gestión documental"
    },
    {
      icon: Lightbulb,
      title: "Consultoría IA para PYMEs",
      desc: "Detectamos oportunidades reales y diseñamos una hoja de ruta IA adaptada.",
      linkText: "Ver consultoría IA"
    },
    {
      icon: GraduationCap,
      title: "Formación práctica en IA",
      desc: "Formamos a equipos para usar herramientas de IA de forma profesional.",
      linkText: "Ver formación"
    },
    {
      icon: Link2,
      title: "Integración de herramientas",
      desc: "Conectamos IA con tus procesos, CRM, email o sistemas internos.",
      linkText: "Ver integraciones"
    },
    {
      icon: MonitorSmartphone,
      title: "Creación de Webs y Apps",
      desc: "Diseñamos y desarrollamos sitios web corporativos y tiendas online.",
      linkText: "Ver desarrollo web"
    },
    {
      icon: Database,
      title: "CRM y SaaS a medida",
      desc: "Implementamos sistemas de gestión de clientes personalizados en la nube.",
      linkText: "Ver sistemas SaaS"
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-[#0F172A] relative scroll-mt-24 border-y border-white/5 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FF006E]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white max-w-2xl mx-auto text-4xl md:text-5xl font-bold mb-6"
          >
            Soluciones IA para cada área
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Selecciona una de nuestras áreas de especialización para descubrir cómo podemos ayudarte a multiplicar tus resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
            <motion.div 
              key={i}
              onClick={() => {
                let route = '';
                if (sol.title === "Automatización de tareas") route = '/servicios/automatizacion-procesos';
                else if (sol.title === "Asistentes IA y chatbots") route = '/servicios/chatbots-inteligentes';
                else if (sol.title === "Gestión documental inteligente") route = '/servicios/gestion-documental';
                else if (sol.title === "Consultoría IA para PYMEs") route = '/servicios/consultoria-ia';
                else if (sol.title === "Formación práctica en IA") route = '/servicios/formacion-ia';
                else if (sol.title === "Integración de herramientas") route = '/servicios/integracion-ia';
                else if (sol.title === "Creación de Webs y Apps") route = '/servicios/desarrollo-web';
                else if (sol.title === "CRM y SaaS a medida") route = '/servicios/crm-saas';

                if (route) {
                  window.history.pushState({}, '', route);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer block relative p-8 glass-card"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#0A1628] text-[#00D4FF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF006E] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">{sol.title}</h3>
                <p className="font-medium text-slate-300 leading-relaxed mb-8 flex-grow">{sol.desc}</p>
                
                <div className="flex items-center gap-2 text-[#FF006E] font-bold text-sm mt-auto group-hover:text-[#00D4FF] transition-colors">
                  {sol.linkText} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF006E]/0 via-transparent to-[#FF006E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
