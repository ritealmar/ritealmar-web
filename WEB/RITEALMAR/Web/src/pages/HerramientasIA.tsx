import React from 'react';
import SEO from '../components/SEO';
import { 
  Calculator, 
  BarChart, 
  Headset, 
  MessageSquare, 
  Settings, 
  Zap, 
  CheckCircle, 
  TrendingUp,
  BrainCircuit,
  FileText,
  Activity,
  ArrowRight,
  ChevronRight,
  Target
} from 'lucide-react';

export default function HerramientasIA() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ritealmar.es/herramientas-ia",
        "url": "https://ritealmar.es/herramientas-ia",
        "name": "Herramientas gratuitas de Inteligencia Artificial para Empresas",
        "description": "Descubre nuestro hub de calculadoras y herramientas de IA gratuitas diseñadas para maximizar el ROI, reducir costes y escalar operaciones en tu empresa."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas IA", "item": "https://ritealmar.es/herramientas-ia" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Herramientas de IA para Empresas",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": "https://ritealmar.es/calculadora-ahorro-ia", "name": "Calculadora de Ahorro IA" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "¿Son realmente gratuitas estas herramientas de IA?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, todas las calculadoras y generadores listados en este centro de recursos son de uso 100% gratuito para empresas." } },
          { "@type": "Question", "name": "¿Para qué sirve la Calculadora de Ahorro IA?", "acceptedAnswer": { "@type": "Answer", "text": "Permite estimar cuántas horas y dinero puedes ahorrar mensualmente automatizando procesos repetitivos con Inteligencia Artificial." } },
          { "@type": "Question", "name": "¿Cuándo estarán disponibles las nuevas herramientas?", "acceptedAnswer": { "@type": "Answer", "text": "Estamos desarrollando y lanzando nuevas herramientas cada mes. Suscríbete a nuestra newsletter para enterarte antes que nadie." } },
          { "@type": "Question", "name": "¿Necesito conocimientos técnicos para usarlas?", "acceptedAnswer": { "@type": "Answer", "text": "No, todas nuestras herramientas están diseñadas con interfaces intuitivas pensando en directivos y dueños de negocio." } },
          { "@type": "Question", "name": "¿Los datos que introduzco son privados?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. No almacenamos datos financieros ni métricas internas que introduzcas en nuestras calculadoras." } },
          { "@type": "Question", "name": "¿Qué es un Generador de SOPs?", "acceptedAnswer": { "@type": "Answer", "text": "Es una futura herramienta que creará Procedimientos Operativos Estándar automáticamente en base a descripciones simples." } },
          { "@type": "Question", "name": "¿Puedo integrar estas calculadoras en mi propia web?", "acceptedAnswer": { "@type": "Answer", "text": "Actualmente son exclusivas del ecosistema RITEALMAR, pero si necesitas desarrollos a medida, podemos construir herramientas para tu empresa." } },
          { "@type": "Question", "name": "¿Cómo calculan el ROI estas herramientas?", "acceptedAnswer": { "@type": "Answer", "text": "Utilizan modelos matemáticos basados en el coste hora promedio, el volumen de tareas y la eficiencia demostrada de los agentes de IA." } },
          { "@type": "Question", "name": "¿Qué hago después de ver mis resultados?", "acceptedAnswer": { "@type": "Answer", "text": "Te recomendamos agendar una Auditoría IA gratuita con nuestro equipo para trazar un plan de implementación real." } },
          { "@type": "Question", "name": "¿Funciona para cualquier sector?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, aunque están especialmente calibradas para clínicas, inmobiliarias, constructoras, e-commerce y empresas de servicios profesionales." } }
        ]
      }
    ]
  };

  const tools = [
    {
      title: "Plan de Automatización IA",
      description: "Genera tu hoja de ruta estratégica personalizada, con estimación de ROI, fases de despliegue y herramientas.",
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      link: "/plan-automatizacion-ia",
      status: "ACTIVO",
      cta: "Crear Plan Gratis"
    },
    {
      title: "Calculadora de Ahorro IA",
      description: "Descubre exactamente cuánto tiempo y dinero pierde tu empresa en tareas manuales y cuánto ahorrarías automatizando.",
      icon: <Calculator className="w-6 h-6 text-cyan-400" />,
      link: "/calculadora-ahorro-ia",
      status: "ACTIVO",
      cta: "Calcular ahorro ahora"
    },
    {
      title: "Calculadora ROI IA",
      description: "Proyecta el retorno de inversión exacto antes de implementar cualquier solución de Inteligencia Artificial.",
      icon: <TrendingUp className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Calculadora Coste Administrativo",
      description: "Audita la fuga de capital en procesos de back-office, gestión documental y entrada de datos manual.",
      icon: <FileText className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Calculadora de Atención Telefónica",
      description: "Mide el coste oculto de llamadas perdidas, tiempos de espera y soporte técnico humano de nivel 1.",
      icon: <Headset className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Calculadora Automatización Comercial",
      description: "Estima el incremento en ventas delegando la cualificación y seguimiento de leads a Agentes IA.",
      icon: <BarChart className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Calculadora de WhatsApp",
      description: "Analiza el impacto de automatizar la captación y reservas mediante flujos de WhatsApp inteligentes.",
      icon: <MessageSquare className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Generador de Prompts IA",
      description: "Crea instrucciones precisas y de nivel experto para ChatGPT, Claude y otros modelos de lenguaje.",
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      link: "/generador-prompts-ia",
      status: "ACTIVO",
      cta: "Generar Prompts Gratis"
    },
    {
      title: "Generador de SOP",
      description: "Transforma descripciones en audio o texto en Procedimientos Operativos Estándar listos para usar.",
      icon: <Settings className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Respuestas Comerciales",
      description: "Redacta respuestas perfectas para objeciones de ventas, correos fríos y propuestas B2B.",
      icon: <Zap className="w-6 h-6 text-slate-500" />,
      status: "PRÓXIMAMENTE",
    },
    {
      title: "Analizador de Procesos",
      description: "Identifica los cuellos de botella en el flujo de trabajo de tu empresa mediante minería de procesos básica.",
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      link: "/analizador-procesos-ia",
      status: "ACTIVO",
      cta: "Analizar Procesos Gratis"
    },
    {
      title: "Evaluador de Madurez IA",
      description: "Test diagnóstico integral para saber si tu infraestructura técnica y equipo están listos para integrar IA.",
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      link: "/evaluador-madurez-ia",
      status: "ACTIVO",
      cta: "Evaluar Madurez Gratis"
    }
  ];

  return (
    <>
      <SEO 
        title="Herramientas IA Gratuitas para Empresas | Calculadoras RITEALMAR"
        description="Hub de calculadoras y generadores IA para optimizar procesos empresariales. Calcula tu ahorro, ROI y automatización sin coste."
        canonical="https://ritealmar.es/herramientas-ia"
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="pt-32 pb-24 relative z-10 overflow-hidden">
        {/* Hero SEO Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-medium text-sm mb-6">
            <Zap className="w-4 h-4" /> Centro de Recursos
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Herramientas gratuitas de <br/>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Inteligencia Artificial para Empresas</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Elimina la incertidumbre. Descubre con precisión milimétrica dónde está perdiendo dinero tu empresa y cuánto ROI puedes generar implementando automatizaciones avanzadas y Agentes IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auditoria-ia-gratis" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Solicitar auditoría IA gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/recursos-ia" className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
              Ver Recursos IA
            </a>
          </div>
        </div>

        {/* Grid Principal */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className={`relative group rounded-2xl border p-8 transition-all duration-300 ${
                  tool.status === 'ACTIVO' 
                  ? 'bg-slate-900/50 border-cyan-900/50 hover:border-cyan-500/50 hover:-translate-y-1' 
                  : 'bg-slate-900/20 border-slate-800/50 opacity-75 grayscale hover:grayscale-0'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${tool.status === 'ACTIVO' ? 'bg-cyan-950/50' : 'bg-slate-800/50'}`}>
                    {tool.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    tool.status === 'ACTIVO' 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{tool.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {tool.description}
                </p>

                {tool.status === 'ACTIVO' ? (
                  <a 
                    href={tool.link} 
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                  >
                    {tool.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 text-slate-500 font-semibold">
                    En desarrollo
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}/>
                      <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}/>
                      <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}/>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-slate-900/50 border-y border-slate-800 py-24 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Por qué usar nuestras herramientas antes de implantar IA</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  La Inteligencia Artificial no es una varita mágica; es una inversión estratégica. Antes de gastar un solo euro en desarrollo, necesitas certezas matemáticas.
                </p>
                <ul className="space-y-4">
                  {[
                    "Diagnóstico objetivo de ineficiencias operativas.",
                    "Proyección realista del Retorno de Inversión (ROI).",
                    "Identificación de cuellos de botella prioritarios.",
                    "Base de datos respaldada por métricas de proyectos reales."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl -z-10" />
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Métricas Basadas en Datos</h4>
                      <p className="text-sm text-slate-400">Actualizado Q3 2026</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic mb-6">
                    "Las empresas que auditan sus procesos mediante simulaciones previas reducen en un 60% el tiempo de adopción de la IA y garantizan un ROI positivo en el primer trimestre."
                  </p>
                  <a href="/auditoria-ia-gratis" className="text-cyan-400 font-semibold hover:underline flex items-center gap-2">
                    Solicitar auditoría en vivo <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recursos Relacionados */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-10 text-center">Explora el ecosistema RITEALMAR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Casos de Éxito", url: "/casos-de-exito" },
              { title: "Academia IA", url: "/academia-ia" },
              { title: "Recursos y Ebooks", url: "/recursos-ia" },
              { title: "Blog Técnico", url: "/blog" },
              { title: "Soluciones por Sector", url: "/sectores" },
              { title: "Nuestros Servicios", url: "/servicios/agentes-ia" }
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.url}
                className="flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:bg-slate-800/50 hover:border-cyan-900/50 transition-all group"
              >
                <span className="font-semibold text-slate-300 group-hover:text-cyan-400">{link.title}</span>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-400">Resuelve tus dudas sobre nuestras herramientas de Inteligencia Artificial.</p>
          </div>
          
          <div className="space-y-4">
            {schemaData["@graph"][3].mainEntity.map((faq: any, i: number) => (
              <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                  {faq.name}
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
