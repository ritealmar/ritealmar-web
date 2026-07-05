import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, MessageSquare, FileText, Lightbulb, GraduationCap, Link2, Monitor, Smartphone, X, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 1,
      icon: Settings,
      title: "Automatización de procesos",
      problem: "¿Pierdes tiempo copiando datos entre plataformas?",
      benefit: "Conectamos tus sistemas para que la información fluya sola.",
      example: "Facturas automáticas al recibir un pago.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      details: "Eliminamos el trabajo manual repetitivo mediante flujos de trabajo inteligentes. Conectamos tu CRM, correo, facturación y bases de datos para que las tareas se ejecuten solas en segundo plano, sin errores humanos. Ahorrarás cientos de horas al mes."
    },
    {
      id: 2,
      icon: MessageSquare,
      title: "Chatbots y asistentes IA",
      problem: "¿Tardas en responder consultas de clientes?",
      benefit: "Atención inmediata 24/7 sin sumar nóminas.",
      example: "Bot en WhatsApp para agendar citas.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      details: "Desarrollamos asistentes virtuales impulsados por IA capaces de entender el lenguaje natural. Pueden responder dudas de clientes, calificar leads comerciales, agendar citas en tu calendario y derivar al equipo humano solo cuando es estrictamente necesario."
    },
    {
      id: 3,
      icon: FileText,
      title: "Gestión documental inteligente",
      problem: "¿Mucho papeleo manual y contratos desordenados?",
      benefit: "Extrae y organiza datos de PDFs al instante.",
      example: "Clasificación automática de albaranes.",
      image: "https://images.unsplash.com/photo-1568225367116-358b5be586aa?auto=format&fit=crop&w=800&q=80",
      details: "Olvídate de teclear datos a mano. Usamos visión artificial para leer PDFs, facturas, DNI o contratos, extrayendo la información clave y volcándola automáticamente en tu ERP o base de datos en cuestión de segundos."
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Consultoría IA",
      problem: "¿No sabes por dónde empezar con la IA?",
      benefit: "Trazamos un plan de acción rentable para tu PYME.",
      example: "Auditoría de cuellos de botella.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      details: "Analizamos tu negocio a fondo para identificar dónde estás perdiendo tiempo y dinero. Te entregamos un roadmap claro con las tecnologías exactas que debes implementar para maximizar tu rentabilidad y cómo integrarlas sin fricciones."
    },
    {
      id: 5,
      icon: GraduationCap,
      title: "Formación IA",
      problem: "¿Tu equipo no sabe usar ChatGPT o Copilot?",
      benefit: "Capacitamos a tus empleados para producir el doble.",
      example: "Taller práctico para recursos humanos.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      details: "La mejor IA no sirve de nada si tu equipo no la sabe usar. Impartimos formaciones prácticas (1 a 1 o grupales) para enseñar a tu plantilla a redactar mejores prompts, usar asistentes en su día a día y aumentar su productividad radicalmente."
    },
    {
      id: 6,
      icon: Link2,
      title: "Integraciones",
      problem: "¿Usas 5 programas que no se hablan entre sí?",
      benefit: "Sincronización total de tu ecosistema digital.",
      example: "Conectar Shopify con tu ERP.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      details: "Si tienes tus datos desperdigados por diferentes plataformas, creamos puentes entre ellas a través de APIs. Así, cuando ocurre una acción en una herramienta (ej. nueva venta), se actualizan automáticamente las demás (ej. inventario y contabilidad)."
    },
    {
      id: 7,
      icon: Monitor,
      title: "Desarrollo web",
      problem: "¿Tu web actual no capta clientes ni transmite confianza?",
      benefit: "Webs optimizadas, rápidas y orientadas a la venta.",
      example: "Rediseño corporativo de tu agencia.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      details: "Tu web es el mejor comercial 24/7. Desarrollamos páginas corporativas y landing pages enfocadas en conversión, con diseños modernos, velocidad de carga instantánea y optimización técnica para posicionar en Google."
    },
    {
      id: 8,
      icon: Smartphone,
      title: "Apps a medida",
      problem: "¿Necesitas una herramienta propia para tu negocio?",
      benefit: "Apps para digitalizar tu operativa diaria.",
      example: "App interna de control de turnos.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      details: "Construimos aplicaciones web o móviles personalizadas. Desde plataformas SaaS hasta herramientas de gestión interna o portales para clientes, adaptándonos milimétricamente a las reglas de tu negocio."
    }
  ];

  return (
    <section id="servicios" className="section-spacing bg-[#060913] relative">
      <div className="absolute top-0 right-0 w-full h-full bg-neural-net opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="label-text block mb-4 text-[#00E5FF]">Nuestro catálogo</span>
          <h2 className="text-white">Servicios Principales</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((sol) => (
            <motion.div 
              onClick={() => setSelectedService(sol)}
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer block relative overflow-hidden bg-[#111A3A] hover:bg-[#1A264F] border border-[#23356A] rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(15,98,254,0.3)] hover:border-[#00E5FF]/40"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#0F62FE]/20 text-[#00E5FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
                  <sol.icon size={26} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{sol.title}</h3>
                
                <div className="flex-1 space-y-4 mb-6">
                  <div className="bg-[#0A0F24]/50 p-3 rounded-lg border border-red-500/10">
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase block mb-1">El problema</span>
                    <p className="text-gray-300 text-sm">{sol.problem}</p>
                  </div>
                  <div className="bg-[#00FF66]/5 p-3 rounded-lg border border-[#00FF66]/10">
                    <span className="text-[10px] font-mono font-bold text-[#00FF66] uppercase block mb-1">El beneficio</span>
                    <p className="text-white text-sm font-medium">{sol.benefit}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-2 text-[#00E5FF] font-bold text-sm uppercase tracking-wider">
                  Ver detalles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE DETALLE DEL SERVICIO */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#060913]/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0A0F24] border border-[#23356A] w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(15,98,254,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Imagen */}
                <div className="h-64 md:h-auto relative">
                  <img 
                    src={selectedService.image} 
                    alt={`Imagen ilustrativa del servicio ${selectedService.title}`} 
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] via-[#0A0F24]/50 to-transparent md:bg-gradient-to-r"></div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white md:hidden hover:bg-black/80 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-12 flex flex-col h-full justify-center relative">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="hidden md:flex absolute top-6 right-6 w-10 h-10 bg-[#111A3A] rounded-full items-center justify-center text-gray-400 hover:text-white hover:bg-[#1A264F] transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="w-12 h-12 bg-[#0F62FE]/20 text-[#00E5FF] rounded-xl flex items-center justify-center mb-6">
                    <selectedService.icon size={24} />
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">
                    {selectedService.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    {selectedService.details}
                  </p>

                  <div className="bg-[#111A3A] p-5 rounded-xl border border-[#0F62FE]/30 mb-8">
                    <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase block mb-2">Ejemplo práctico</span>
                    <p className="text-white italic">{selectedService.example}</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="btn-primary w-full py-4 text-lg"
                  >
                    Me interesa este servicio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
