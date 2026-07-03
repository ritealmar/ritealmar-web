import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Stethoscope, Store, ShoppingCart, Wrench, UserSquare2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export default function UseCasesSection() {
  const cases = [
    {
      icon: Briefcase,
      title: "Asesorías y gestorías",
      problem: "Horas perdidas picando datos de facturas manualmente.",
      solution: "IA que lee PDFs y los vuelca al ERP automáticamente.",
      result: "Cierre de trimestre un 40% más rápido."
    },
    {
      icon: Stethoscope,
      title: "Clínicas",
      problem: "Recepción saturada y citas canceladas sin avisar.",
      solution: "Chatbot de WhatsApp que agenda y recuerda citas 24/7.",
      result: "Reducción del 80% en inasistencias."
    },
    {
      icon: Store,
      title: "Comercios",
      problem: "Falta de tiempo para atender consultas online.",
      solution: "Asistente web que responde dudas sobre stock y horarios.",
      result: "Soporte instantáneo sin contratar más personal."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      problem: "Muchas devoluciones y preguntas repetitivas de envío.",
      solution: "Agente IA integrado en la tienda para dar soporte inmediato.",
      result: "Más conversiones y clientes más felices."
    },
    {
      icon: Wrench,
      title: "Empresas de servicios",
      problem: "Presupuestos lentos y desorganización operativa.",
      solution: "App interna para generar cotizaciones en 1 clic desde el móvil.",
      result: "Presupuestos enviados en minutos, no días."
    },
    {
      icon: UserSquare2,
      title: "Autónomos",
      problem: "Poco tiempo para vender por estar apagando fuegos.",
      solution: "Automatización de emails, seguimiento comercial y facturas.",
      result: "Más tiempo facturable y control total."
    }
  ];

  return (
    <section 
      id="soluciones" 
      className="section-spacing relative border-y border-white/5"
      style={{
        background: 'linear-gradient(135deg, #050816 0%, #0B1026 50%, #020617 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            IA adaptada a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">tu negocio</span>
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-[750px] mx-auto leading-relaxed">
            Soluciones comprobadas para los problemas diarios de tu industria. No vendemos tecnología, vendemos tiempo y eficiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((uc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-[#22D3EE] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
                  <uc.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{uc.title}</h3>
              </div>
              
              <div className="flex flex-col">
                <div className="pb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle size={14} className="text-[#ef4444]" />
                    <span className="text-[11px] font-bold text-[#ef4444] uppercase tracking-wider">Problema</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pl-[1.35rem]">{uc.problem}</p>
                </div>
                
                <div className="py-5 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={14} className="text-[#3B82F6]" />
                    <span className="text-[11px] font-bold text-[#3B82F6] uppercase tracking-wider">Solución</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-relaxed pl-[1.35rem]">{uc.solution}</p>
                </div>
                
                <div className="pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-[#22c55e]" />
                    <span className="text-[11px] font-bold text-[#22c55e] uppercase tracking-wider">Resultado</span>
                  </div>
                  <p className="text-[#22c55e] text-sm font-bold pl-[1.35rem]">{uc.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
