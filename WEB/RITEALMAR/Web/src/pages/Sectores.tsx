import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShoppingCart, Stethoscope, Briefcase, 
  Scale, Utensils, Hotel, GraduationCap, HardHat, Sparkles, 
  ArrowRight, BookOpen, Presentation
} from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';

export default function Sectores() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const sectors = [
    {
      id: "clinicas",
      name: "Clínicas y Salud",
      icon: Stethoscope,
      desc: "Automatiza agendas, reduce ausencias y ofrece atención 24/7 a pacientes.",
      link: "/clinicas",
      status: "active"
    },
    {
      id: "inmobiliarias",
      name: "Inmobiliarias",
      icon: Building2,
      desc: "Capta propietarios y pre-cualifica clientes de portales inmobiliarios al instante.",
      link: "/inmobiliarias",
      status: "active"
    },
    {
      id: "ecommerce",
      name: "Ecommerce",
      icon: ShoppingCart,
      desc: "Recupera carritos abandonados y resuelve dudas sobre stock o envíos automáticamente.",
      link: "/ecommerce",
      status: "active"
    },
    { id: "despachos", name: "Despachos de Abogados", icon: Scale, desc: "Automatiza consultas iniciales, formularios y seguimiento de clientes legales.", link: "/ia-para-despachos-abogados", status: "active" },
    { id: "asesorias", name: "Asesorías", icon: Briefcase, desc: "Recopilación de documentación contable e impuestos de clientes de forma autónoma.", status: "soon" },
    { id: "restaurantes", name: "Restaurantes", icon: Utensils, desc: "Gestión de reservas, cancelación y pedidos a domicilio mediante IA conversacional.", status: "soon" },
    { id: "hoteles", name: "Hoteles", icon: Hotel, desc: "Conserje virtual 24/7 y automatización del check-in para mejorar la experiencia del huésped.", status: "soon" },
    { id: "academias", name: "Academias", icon: GraduationCap, desc: "Matriculación automática, resolución de dudas de horarios y seguimientos académicos.", status: "soon" },
    { 
      id: "constructoras", 
      name: "Constructoras", 
      icon: HardHat, 
      desc: "Gestión documental de proveedores y automatización de presupuestos rápidos.", 
      link: "/constructoras",
      status: "active" 
    },
    { id: "estetica", name: "Centros de Estética", icon: Sparkles, desc: "Agenda inteligente para optimizar espacios y ventas cruzadas de tratamientos.", status: "soon" }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <SEO 
        title="Soluciones de Inteligencia Artificial para Empresas por Sector | RITEALMAR"
        description="Descubre cómo la automatización y la Inteligencia Artificial B2B se adaptan a clínicas, inmobiliarias, ecommerce y múltiples sectores para escalar operaciones."
        canonical="https://ritealmar.es/sectores"
        ogType="website"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([

        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es" },
            { "@type": "ListItem", "position": 2, "name": "Sectores", "item": "https://ritealmar.es/sectores" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": sectors.filter(s => s.status === 'active').map((sector, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://ritealmar.es${sector.link}`,
            "name": sector.name
          }))
        }
      ]) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#00D4FF]/5 via-[#FF006E]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] font-bold text-sm mb-6 border border-[#00D4FF]/20"
          >
            <Sparkles size={16} /> Hub de Soluciones B2B
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-8"
          >
            Soluciones de Inteligencia Artificial para Empresas por Sector
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed text-left md:text-center space-y-4"
          >
            <p>
              La implementación de <a href="/agentes-ia" onClick={(e) => handleNavigation(e, '/agentes-ia')} className="text-[#00D4FF] hover:underline font-bold">Agentes IA</a> y sistemas conversacionales no es una talla única. Entendemos que las necesidades operativas de una red de clínicas dentales son drásticamente distintas a los retos de captación de una agencia inmobiliaria o a la gestión de soporte de un comercio electrónico.
            </p>
            <p>
              Por eso, en RITEALMAR no vendemos simples "chatbots genéricos", sino que diseñamos ecosistemas de <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-[#FF006E] hover:underline font-bold">automatizaciones IA</a> profundas e integradas nativamente con el software que tu industria ya utiliza (CRM, ERP, agendas médicas, etc.). Nuestro objetivo es dotar a las empresas de sistemas que actúen con autonomía real, capaces de resolver consultas complejas por <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')} className="text-[#00D4FF] hover:underline font-bold">Chatbots IA en WhatsApp</a> o web, cualificar leads y agendar reuniones, trabajando 24/7 como el mejor empleado de tu equipo.
            </p>
            <p>
              Explora a continuación nuestra matriz de soluciones segmentadas. Descubre cómo estamos transformando la rentabilidad de sectores tradicionales mediante arquitecturas tecnológicas sólidas, eliminando los cuellos de botella operativos y liberando a los profesionales humanos de las tareas mecánicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Sectores */}
      <section className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Encuentra tu sector</h2>
            <p className="text-slate-400">Desarrollos verticales especializados y próximos lanzamientos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`relative flex flex-col p-6 rounded-2xl border ${sector.status === 'active' ? 'bg-[#0A1628] border-white/10 hover:border-cyan-500/50' : 'bg-[#0F172A] border-white/5 opacity-70'} transition-all group overflow-hidden`}
              >
                {sector.status === 'active' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                )}
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${sector.status === 'active' ? 'bg-[#00D4FF]/10 text-[#00D4FF]' : 'bg-white/5 text-slate-500'}`}>
                    <sector.icon size={24} />
                  </div>
                  {sector.status === 'soon' && (
                    <span className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase rounded-md">
                      Próximamente
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{sector.name}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow relative z-10">{sector.desc}</p>
                
                {sector.status === 'active' && sector.link ? (
                  <a 
                    href={sector.link}
                    onClick={(e) => handleNavigation(e, sector.link)}
                    className="mt-auto inline-flex items-center text-[#00D4FF] font-bold text-sm group-hover:text-[#00D4FF]/80 transition-colors relative z-10"
                  >
                    Ver solución sectorial <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-600 w-1/3"></div>
                    </div>
                    <span className="text-xs text-slate-500 mt-2 block">En fase de investigación</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Destacados */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#0A1628] to-[#0F172A]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Recursos Destacados</h2>
              <p className="text-slate-400 max-w-2xl">
                Lee en nuestro <a href="/blog" onClick={(e) => handleNavigation(e, '/blog')} className="text-white hover:text-cyan-400 underline">blog</a> y analiza nuestros <a href="/casos-de-exito" onClick={(e) => handleNavigation(e, '/casos-de-exito')} className="text-white hover:text-[#FF006E] underline">casos de éxito</a> para entender el impacto real de la IA aplicada a procesos de negocio.
              </p>
            </div>
            <a 
              href="/auditoria-ia-gratis"
              onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')}
              className="inline-flex items-center justify-center shrink-0 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Auditoría IA Gratuita <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

          {/* Grid Artículos Blog */}
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-[#00D4FF]" /> Formación e Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a 
              href="/blog/automatizar-captacion-clientes-ia-pyme"
              onClick={(e) => handleNavigation(e, '/blog/automatizar-captacion-clientes-ia-pyme')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#00D4FF] mb-2 uppercase tracking-wider">Captación</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                Cómo automatizar la captación de clientes con IA
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Estrategias para que los leads pasen de curiosos a cualificados de forma automática.
              </p>
            </a>
            
            <a 
              href="/blog/automatizar-whatsapp-pyme"
              onClick={(e) => handleNavigation(e, '/blog/automatizar-whatsapp-pyme')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#00D4FF] mb-2 uppercase tracking-wider">Ventas</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                Cómo automatizar WhatsApp Business para PYMEs
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Despliega respuestas inmediatas 24/7 conectando APIs oficiales a tu CRM.
              </p>
            </a>

            <a 
              href="/blog/ia-inmobiliarias-captacion-ventas"
              onClick={(e) => handleNavigation(e, '/blog/ia-inmobiliarias-captacion-ventas')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#00D4FF] mb-2 uppercase tracking-wider">Real Estate</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                Inteligencia Artificial para Inmobiliarias
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Automatiza idealista y el soporte para atender a propietarios e inquilinos.
              </p>
            </a>
          </div>

          {/* Grid Casos de Éxito */}
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Presentation size={20} className="text-[#FF006E]" /> Proyectos Reales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/casos-de-exito/clinica-reduccion-llamadas-ia"
              onClick={(e) => handleNavigation(e, '/casos-de-exito/clinica-reduccion-llamadas-ia')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#FF006E]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#FF006E] mb-2 uppercase tracking-wider">Salud</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors">
                Clínica: Reducción del 70% de llamadas
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Asistente virtual conversacional para la reserva inteligente y recordatorios.
              </p>
            </a>
            
            <a 
              href="/casos-de-exito/inmobiliaria-captacion-ia"
              onClick={(e) => handleNavigation(e, '/casos-de-exito/inmobiliaria-captacion-ia')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#FF006E]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#FF006E] mb-2 uppercase tracking-wider">Proptech</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors">
                Inmobiliaria: +275% Conversión a visita
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Atención menor a 1 minuto a leads procedentes de portales web inmobiliarios.
              </p>
            </a>

            <a 
              href="/casos-de-exito/ecommerce-recuperacion-carritos-ia"
              onClick={(e) => handleNavigation(e, '/casos-de-exito/ecommerce-recuperacion-carritos-ia')}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#FF006E]/50 transition-all group block"
            >
              <div className="text-xs font-bold text-[#FF006E] mb-2 uppercase tracking-wider">Retail</div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors">
                Ecommerce: +42% de Facturación
              </h4>
              <p className="text-sm text-slate-400 line-clamp-2">
                Flujos de recuperación de carritos abandonados directamente en WhatsApp.
              </p>
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
