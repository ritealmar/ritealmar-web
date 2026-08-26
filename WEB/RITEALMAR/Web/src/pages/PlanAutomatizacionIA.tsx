import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  Rocket,
  ArrowRight,
  Target,
  BarChart,
  BrainCircuit,
  MessageSquare,
  Cpu,
  TrendingUp,
  Settings,
  Calendar,
  CheckCircle,
  Clock,
  Briefcase,
  Zap,
  ChevronRight,
  Activity,
  RefreshCw,
  FileText,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export default function PlanAutomatizacionIA() {
  const [formData, setFormData] = useState({
    sector: '',
    empleados: '1-10',
    facturacion: '',
    departamento: 'Ventas',
    problema: '',
    objetivo: '',
    nivelDigital: 'Tradicional',
    herramientas: [] as string[]
  });

  const [result, setResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');





  const toggleHerramienta = (h: string) => {
    setFormData(prev => {
      const isSelected = prev.herramientas.includes(h);
      return {
        ...prev,
        herramientas: isSelected 
          ? prev.herramientas.filter(x => x !== h)
          : [...prev.herramientas, h]
      };
    });
  };

  const generatePlan = () => {
    setIsAnalyzing(true);
    const msgs = ['Estructurando fases estratégicas...', 'Calculando ROI de implementación...', 'Seleccionando tecnologías...', 'Generando roadmap corporativo...'];
    let step = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      step++;
      if (step < msgs.length) setLoadingMsg(msgs[step]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      const { departamento, nivelDigital, herramientas } = formData;
    
    let fase1 = { title: 'Auditoría y CRM', desc: 'Centralización de datos básicos.' };
    let fase2 = { title: 'Automatización Básica', desc: 'Conexión de herramientas vía API.' };
    let fase3 = { title: 'Agentes IA', desc: 'Despliegue de asistentes autónomos.' };

    const automations = [];
    const agents = [];
    const chatbots = [];
    let roi = '150% - 200%';
    let tiempo = '3 - 6 meses';
    let complejidad = 'Media';

    if (departamento === 'Ventas') {
      fase1 = { title: 'Captación Automática', desc: 'Lead scoring y nutrición automática en CRM.' };
      fase2 = { title: 'Agente Comercial IA', desc: 'Calificación de leads 24/7 y reserva de citas.' };
      fase3 = { title: 'Predicción de Ventas', desc: 'Análisis predictivo de cierre de negocio.' };
      automations.push('Sincronización Web-CRM', 'Envío de presupuestos automáticos');
      agents.push('Agente de Cualificación SDR');
      chatbots.push('Chatbot WhatsApp para Ventas');
      roi = '250% - 400%';
    } else if (departamento === 'Atención al Cliente') {
      fase1 = { title: 'Ticketing Inteligente', desc: 'Clasificación automática de emails entrantes.' };
      fase2 = { title: 'Chatbot Resolutivo', desc: 'Respuestas FAQ conectadas a base de datos.' };
      fase3 = { title: 'Agente de Soporte Nivel 1', desc: 'Resolución de incidencias complejas autónomamente.' };
      automations.push('Respuestas pre-diseñadas automáticas');
      agents.push('Agente de Soporte Omnicanal');
      chatbots.push('Chatbot Web de Atención Inmediata');
      roi = '300%';
    } else {
      automations.push('Eliminación de Data Entry Manual');
      agents.push('Asistente Interno de Consulta Documental');
    }

    if (herramientas.includes('Excel')) {
      fase1 = { title: 'Migración a Base de Datos Cloud', desc: 'Eliminación de Excels locales y centralización.' };
      complejidad = 'Media-Alta';
    }

      setResult({
        nivelMadurez: nivelDigital,
        prioridad: nivelDigital === 'Tradicional' ? 'ALTA (Crítico)' : 'MEDIA (Optimización)',
        fases: [fase1, fase2, fase3],
        automations,
        agents,
        chatbots,
        kpis: ['Reducción de Tiempo de Tareas Manuales', 'Tasa de Conversión/Resolución', 'Retorno de Inversión (ROI)'],
        roi,
        tiempo,
        complejidad
      });
    }, 2200);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ritealmar.es/plan-automatizacion-ia",
        "url": "https://ritealmar.es/plan-automatizacion-ia",
        "name": "Plan de Automatización IA para Empresas | RITEALMAR",
        "description": "Genera tu roadmap estratégico personalizado para implementar automatizaciones e Inteligencia Artificial en tu empresa. Sin coste y en 2 minutos."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas IA", "item": "https://ritealmar.es/herramientas-ia" },
          { "@type": "ListItem", "position": 3, "name": "Plan Automatización", "item": "https://ritealmar.es/plan-automatizacion-ia" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Generador de Planes de Inteligencia Artificial",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "¿Qué es un plan de automatización?", "acceptedAnswer": { "@type": "Answer", "text": "Es una hoja de ruta estratégica que define qué procesos de tu empresa deben digitalizarse primero y qué herramientas de IA utilizar para lograr el máximo retorno." } },
          { "@type": "Question", "name": "¿Cómo se calcula el ROI estimado?", "acceptedAnswer": { "@type": "Answer", "text": "El motor cruza tu sector y departamento con el ahorro medio documentado en la industria al implementar agentes y automatización robótica (RPA)." } },
          { "@type": "Question", "name": "¿Es necesario saber programar?", "acceptedAnswer": { "@type": "Answer", "text": "No. El plan es puramente estratégico y de negocio. Para la ejecución técnica, RITEALMAR actúa como tu partner tecnológico." } },
          { "@type": "Question", "name": "¿Qué es un Agente IA?", "acceptedAnswer": { "@type": "Answer", "text": "Un sistema avanzado que no solo responde preguntas, sino que puede ejecutar acciones en tus programas (ej. enviar correos o crear facturas) de forma autónoma." } },
          { "@type": "Question", "name": "¿Qué pasa después de generar el plan?", "acceptedAnswer": { "@type": "Answer", "text": "Te recomendamos agendar una Auditoría IA con nosotros para validar este roadmap inicial con un consultor experto en vivo." } },
          { "@type": "Question", "name": "¿Por qué pregunta por mis herramientas actuales?", "acceptedAnswer": { "@type": "Answer", "text": "Porque si usas Excel tu prioridad será centralizar datos, pero si ya usas un CRM moderno, podemos saltar directamente a implementar Agentes Inteligentes." } },
          { "@type": "Question", "name": "¿El plan es estático?", "acceptedAnswer": { "@type": "Answer", "text": "No, se genera dinámicamente en tu navegador basado en las reglas locales y tu nivel de madurez digital actual." } },
          { "@type": "Question", "name": "¿Cuánto se tarda en implementar estas fases?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la complejidad. Automatizaciones simples toman semanas; despliegues de Agentes corporativos pueden requerir entre 3 y 6 meses." } },
          { "@type": "Question", "name": "¿Tienen herramientas para auditar procesos específicos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, puedes usar nuestro Analizador de Procesos o la Calculadora de Ahorro para profundizar en casos concretos." } },
          { "@type": "Question", "name": "¿Ofrecen soporte técnico?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. Diseñamos el plan, escribimos el código, lo integramos en tus sistemas y ofrecemos soporte continuo de mantenimiento." } }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Plan de Automatización IA para Empresas | RITEALMAR"
        description="Genera tu hoja de ruta estratégica personalizada para automatizar tu empresa con Inteligencia Artificial. Obtén fases, ROI estimado y tecnologías clave en 2 minutos."
        canonical="https://ritealmar.es/plan-automatizacion-ia"
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-medium text-sm mb-6">
            <Rocket className="w-4 h-4" /> Roadmap Estratégico
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Plan de Automatización <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IA para Empresas</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Obtén una hoja de ruta técnica y estratégica adaptada a tu sector para dejar atrás el trabajo manual y escalar tus operaciones comerciales.
          </p>
          <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Solicitar Auditoría IA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="max-w-6xl mx-auto px-6 mb-32">
          {!result ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold border-b border-slate-800 pb-4 mb-8 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" /> Configura tu Empresa
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Sector</label>
                    <input type="text" name="sector" value={formData.sector} onChange={e=>setFormData({...formData, sector: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: Inmobiliario, Salud, Logística..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Empleados</label>
                    <select name="empleados" value={formData.empleados} onChange={e=>setFormData({...formData, empleados: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                      <option>1-10</option><option>11-50</option><option>51-200</option><option>+200</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Facturación Anual Aprox.</label>
                    <input type="text" name="facturacion" value={formData.facturacion} onChange={e=>setFormData({...formData, facturacion: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: 500.000€" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Departamento Principal a Optimizar</label>
                    <select name="departamento" value={formData.departamento} onChange={e=>setFormData({...formData, departamento: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                      <option>Ventas</option><option>Atención al Cliente</option><option>Administración</option><option>Operaciones</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Problema Principal Actual</label>
                    <textarea name="problema" value={formData.problema} onChange={e=>setFormData({...formData, problema: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 h-20 resize-none" placeholder="Ej: Perdemos leads por tardar en responder emails." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Objetivo Inmediato</label>
                    <textarea name="objetivo" value={formData.objetivo} onChange={e=>setFormData({...formData, objetivo: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 h-20 resize-none" placeholder="Ej: Aumentar tasa de conversión un 20%." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Nivel Digital Percibido</label>
                    <select name="nivelDigital" value={formData.nivelDigital} onChange={e=>setFormData({...formData, nivelDigital: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                      <option>Tradicional (Mucho papel y procesos manuales)</option>
                      <option>Digital (Uso de CRMs y software básico)</option>
                      <option>IA Ready (Datos centralizados en nube y APIs)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-400 mb-3">Herramientas que usan actualmente (Selecciona varias)</label>
                <div className="flex flex-wrap gap-2">
                  {['CRM (Salesforce, HubSpot...)', 'ERP (SAP, Holded...)', 'Excel', 'Email Automático (Mailchimp...)', 'WhatsApp Business', 'Software Propio'].map(h => (
                    <button 
                      key={h}
                      onClick={() => toggleHerramienta(h)}
                      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                        formData.herramientas.includes(h) 
                        ? 'bg-cyan-500 border-cyan-400 text-black' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={generatePlan}
                disabled={!formData.sector || !formData.problema || isAnalyzing}
                className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
              >
                {isAnalyzing ? <RefreshCw className="w-6 h-6 animate-spin" /> : <BrainCircuit className="w-6 h-6" />}
                {isAnalyzing ? 'Procesando...' : 'Generar Plan Estratégico IA'}
              </button>
            </div>
          ) : isAnalyzing ? (
            <div className="animate-in fade-in flex flex-col items-center justify-center text-cyan-400 p-16 text-center border border-cyan-900/50 bg-cyan-950/10 rounded-2xl h-[600px] shadow-2xl backdrop-blur-sm">
              <RefreshCw className="w-16 h-16 mb-6 animate-spin" />
              <h3 className="text-xl font-bold animate-pulse">{loadingMsg}</h3>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
              
              <div id="informe-ejecutivo-plan" className="bg-[#0b1120] border border-cyan-900/50 rounded-2xl p-6 lg:p-12 shadow-2xl relative text-left">
                
                {/* Portada PDF */}
                <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">Plan Estratégico <span className="text-cyan-400">IA</span></h2>
                    <p className="text-slate-400">RITEALMAR | Generado el: {new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 font-bold text-sm tracking-widest">
                    USO INTERNO
                  </div>
                </div>

                {/* Resumen Ejecutivo */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Nivel Madurez</p>
                    <p className="font-bold text-slate-200">{result.nivelMadurez}</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Prioridad Operativa</p>
                    <p className="font-bold text-red-400">{result.prioridad}</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Complejidad Técnica</p>
                    <p className="font-bold text-yellow-400">{result.complejidad}</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">ROI Estimado</p>
                    <p className="font-bold text-emerald-400">{result.roi}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2"><FileText className="w-5 h-5"/> Resumen Ejecutivo</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      El plan de automatización generado para el departamento de {formData.departamento} en el sector {formData.sector} establece una hoja de ruta con un tiempo de despliegue estimado de {result.tiempo}.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Diagnóstico Tecnológico</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Basado en las herramientas actuales ({formData.herramientas.join(', ') || 'Ninguna'}), se requiere una intervención progresiva para asegurar que la integración IA no colapse la operativa actual.
                    </p>
                  </div>
                </div>

                {/* Timeline Visual (Mes 1, 3, 6, 12) */}
                <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-400"><Calendar className="w-5 h-5"/> Fases de Implementación</h3>
                  <div className="relative border-l-2 border-slate-700 ml-3 mb-4 space-y-6">
                    {/* Mes 1 */}
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-1 border-4 border-[#0b1120]" />
                      <h4 className="text-cyan-400 font-bold mb-1 text-sm">Mes 1: Fase 1</h4>
                      <p className="text-md font-bold text-white mb-1">{result.fases[0].title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{result.fases[0].desc}</p>
                    </div>
                    {/* Mes 3 */}
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1 border-4 border-[#0b1120]" />
                      <h4 className="text-slate-500 font-bold mb-1 text-sm">Mes 2-3: Fase 2</h4>
                      <p className="text-md font-bold text-white mb-1">{result.fases[1].title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{result.fases[1].desc}</p>
                    </div>
                    {/* Mes 6 */}
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1 border-4 border-[#0b1120]" />
                      <h4 className="text-slate-500 font-bold mb-1 text-sm">Mes 4-6: Fase 3</h4>
                      <p className="text-md font-bold text-white mb-1">{result.fases[2].title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{result.fases[2].desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h4 className="font-bold mb-4 flex items-center gap-2"><Settings className="w-4 h-4 text-emerald-400"/> Automatizaciones RPA Sugeridas</h4>
                    <ul className="space-y-2">
                      {result.automations.map((a: string, i: number) => <li key={i} className="text-sm text-slate-300">• {a}</li>)}
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h4 className="font-bold mb-4 flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-purple-400"/> Inteligencia Cognitiva Aplicable</h4>
                    <ul className="space-y-2">
                      {result.agents.map((a: string, i: number) => <li key={i} className="text-sm text-slate-300">• {a}</li>)}
                      {result.chatbots.map((c: string, i: number) => <li key={i} className="text-sm text-slate-300">• {c}</li>)}
                    </ul>
                  </div>
                </div>
                {/* CTA Final y Casos de Éxito */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-2xl p-8 text-center flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">Lleva este plan a la realidad</h3>
                    <p className="text-slate-300 mb-6 text-sm">Nuestro equipo puede ejecutar esta hoja de ruta en tu empresa, desde la consultoría inicial hasta el despliegue del último agente de IA.</p>
                    <a href={result.nivelMadurez === 'Tradicional' ? '/auditoria-ia-gratis' : '/servicios/agentes-ia'} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                      {result.nivelMadurez === 'Tradicional' ? 'Auditoría de Viabilidad' : 'Explorar Agentes IA'} <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5 text-purple-400"/> Ejemplo de Uso Relacionado</h4>
                    <p className="text-slate-400 text-sm mb-6">Descubre cómo otra empresa implementó este mismo plan {formData.departamento === 'Ventas' ? 'comercial' : 'operativo'}.</p>
                    <a href={formData.departamento === 'Ventas' ? '/casos-exito/ecommerce-ia' : '/casos-exito/panel-central'} className="inline-flex text-cyan-400 font-bold hover:underline items-center gap-2">
                      Ver cómo lo lograron <ArrowRight className="w-4 h-4"/>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs">
                  Roadmap de digitalización generado mediante el motor de consultoría de RITEALMAR. Las fases deben ser validadas por un ingeniero de soluciones.
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 text-center">
                <p className="text-slate-300 mb-2 max-w-lg">
                  Podemos convertir este plan en una hoja de ruta realista, priorizando impacto, coste y facilidad de implementación.
                </p>
                <a 
                  href="/auditoria-ia-gratis" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/auditoria-ia-gratis');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  Solicitar auditoría IA gratuita <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="text-center mt-6 pb-12">
                <button 
                  onClick={() => setResult(null)}
                  className="text-sm text-slate-500 hover:text-cyan-400 font-medium"
                >
                  Generar otro plan estratégico
                </button>
              </div>

            </div>
          )}
        </div>

        {/* SEO Long Form Content */}
        <section className="relative z-10 py-24 px-6 bg-[#030712] border-t border-slate-800/50 mt-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué es el Plan de Automatización IA para Empresas?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El <strong>Plan de Automatización Corporativo</strong> es un Roadmap estratégico generado dinámicamente que traduce tus problemas operativos (altos costes, pérdida de clientes, errores manuales) en un cronograma técnico de despliegue de Inteligencia Artificial. A diferencia de las auditorías genéricas, esta herramienta cruza las herramientas que ya utilizas con el volumen de tu facturación y el tamaño de tu plantilla para sugerir una hoja de ruta dividida en fases a 3, 6 y 12 meses.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para qué sirve crear un Roadmap Estratégico IA?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Muchas empresas compran software impulsivamente esperando milagros, lo que resulta en suscripciones (SaaS) carísimas que nadie en el equipo sabe usar. Este plan sirve para poner <strong>orden técnico</strong>. Sus beneficios clave son:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Secuenciación Lógica:</strong> Evita que intentes implementar <a href="/servicios/agentes-ia" className="text-cyan-400 hover:underline">Agentes Inteligentes</a> si todavía tienes facturas almacenadas en cajas de zapatos. Te obliga a centralizar datos (Fase 1) antes de automatizarlos (Fase 2).</li>
                <li><strong>Estimación de ROI:</strong> Asigna un marco de retorno de inversión realista basado en el rendimiento histórico de tecnologías similares en tu sector (ej. Clínicas, Inmobiliarias, E-commerce).</li>
                <li><strong>Alineación Directiva:</strong> Sirve como un documento de consenso para que el CEO, el CTO y el equipo operativo compartan la misma visión a corto y largo plazo.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué problemas estructurales soluciona este Plan?</h2>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">1. La "Parálisis por Análisis"</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Ante la avalancha de noticias sobre IA (ChatGPT, Claude, Copilot, Midjourney), los directivos se paralizan sin saber qué herramienta elegir. El plan filtra el ruido y selecciona estrictamente lo que afecta a tu cuenta de resultados.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">2. Desarrollo Desconectado del Negocio</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Si un programador implanta automatizaciones sin entender el objetivo comercial, fracasará. Nuestro motor asocia la tecnología (RPA, <a href="/chatbots-ia" className="text-cyan-400 hover:underline">Chatbots de IA</a>) con un KPI específico, como "Aumentar tasa de conversión un 20%".
              </p>
            </div>

            <div className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">¿Cómo interpretar tu Plan de Acción (Fases)?</h2>
              <ol className="list-decimal pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>Fase 1 (Mes 1): Centralización.</strong> Consiste en limpiar la casa. Migrar de Excels y papel a un CRM corporativo o Base de Datos Cloud. Si ya tienes esto, la Fase 1 implicará limpiar y estructurar esos datos vía API.</li>
                <li><strong>Fase 2 (Mes 3): RPA y Reglas Duras.</strong> Automatización de procesos mediante condicionales ("Si llega este correo, descárgalo a Drive"). Se elimina el 60% del <em>Data Entry</em>.</li>
                <li><strong>Fase 3 (Mes 6): Inteligencia Cognitiva.</strong> Introducción de LLMs. Ahora el sistema no solo "mueve" el correo, sino que "lee, entiende y responde" al correo de forma autónoma con el tono de tu marca.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Errores críticos al planificar la digitalización</h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                      <th className="p-4 text-cyan-400 font-bold">Fallo Estratégico</th>
                      <th className="p-4 text-cyan-400 font-bold">Por qué destruye el proyecto</th>
                      <th className="p-4 text-cyan-400 font-bold">El enfoque del Plan IA</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Saltarse fases</td>
                      <td className="p-4">Querer un agente conversacional sin tener un CRM estructurado debajo que le dicte el stock y los precios.</td>
                      <td className="p-4">Secuenciación estricta 1 → 2 → 3.</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Fijar KPIs irreales</td>
                      <td className="p-4">Esperar amortizar una integración compleja de 15.000€ en 3 semanas.</td>
                      <td className="p-4">Muestra estimaciones de ROI y tiempos de 3 a 6 meses.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Omitir a los usuarios finales</td>
                      <td className="p-4">El CEO compra el software, pero el equipo lo odia y sigue usando Excel a escondidas.</td>
                      <td className="p-4">El plan audita las herramientas actuales para asegurar una transición sin fricciones.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Buenas Prácticas tras generar el Roadmap</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Una vez que el motor de RITEALMAR haya volcado la arquitectura recomendada, el siguiente paso no es comprar licencias, sino validar el entorno. Utiliza nuestro <a href="/evaluador-madurez-ia" className="text-cyan-400 hover:underline">Evaluador de Madurez</a> para cruzar los datos del plan con la resiliencia cultural de tu plantilla. Si el plan requiere alta complejidad tecnológica pero tu equipo carece de formación, recomendamos invertir primero unas semanas en capacitación a través de nuestra <a href="/academia-ia" className="text-cyan-400 hover:underline">Academia</a>.
              </p>
            </div>

            <div className="space-y-6 bg-cyan-950/20 border border-cyan-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Conclusión: RITEALMAR como Partner de Ejecución</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                Un plan en papel no genera dinero; el código sí. El 100% de los proyectos (desde la migración básica hasta el entrenamiento de Agentes Autónomos multimodales) detallados en esta hoja de ruta son ejecutables por la división técnica de RITEALMAR. No necesitas contratar a 5 proveedores distintos. Nosotros diseñamos el plan, escribimos la arquitectura y lo mantenemos en producción.
              </p>
              <div className="text-center md:text-left">
                <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Presentar este Plan a nuestros Consultores <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Ecosistema de Herramientas Recomendadas */}
        {result && (
          <div className="max-w-6xl mx-auto px-6 mb-32 animate-in fade-in duration-1000 delay-500">
            <h3 className="text-2xl font-bold mb-8 text-center">Herramientas Recomendadas para profundizar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/calculadora-ahorro-ia" className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <BarChart className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 mb-4 transition-colors" />
                <h4 className="font-bold mb-2">Calculadora de Ahorro</h4>
                <p className="text-sm text-slate-400">Calcula el ROI monetario exacto del plan.</p>
              </a>
              <a href="/evaluador-madurez-ia" className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <CheckCircle className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 mb-4 transition-colors" />
                <h4 className="font-bold mb-2">Evaluador de Madurez</h4>
                <p className="text-sm text-slate-400">Audita tus áreas técnicas en profundidad.</p>
              </a>
              <a href="/analizador-procesos-ia" className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <Activity className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 mb-4 transition-colors" />
                <h4 className="font-bold mb-2">Analizador de Procesos</h4>
                <p className="text-sm text-slate-400">Desglosa un cuello de botella específico.</p>
              </a>
              <a href="/generador-prompts-ia" className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <MessageSquare className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 mb-4 transition-colors" />
                <h4 className="font-bold mb-2">Generador Prompts</h4>
                <p className="text-sm text-slate-400">Empieza a usar IA gratis hoy mismo.</p>
              </a>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
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
