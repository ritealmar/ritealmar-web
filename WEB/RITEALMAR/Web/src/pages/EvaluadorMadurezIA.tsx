import React, { useState, useEffect } from 'react';

import SEO from '../components/SEO';
import { 
  CheckCircle,
  ArrowRight,
  BookOpen,
  AlertCircle,
  Zap,
  Briefcase,
  TrendingUp,
  Activity,
  ChevronRight,
  RefreshCw,
  Trophy,
  BarChart,
  ShieldAlert,
  Lightbulb,
  Bot,
  Target,
  FileText,
  AlertTriangle,
  MessageSquare,
  CheckCircle2,
  Cpu,
  Users,
  Calendar,
  Settings,
  ShieldCheck,
  Database,
  Smartphone
} from 'lucide-react';
import { calculateMaturityScore } from '../utils/calculatorUtils';

export default function EvaluadorMadurezIA() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{ score: number, level: string, desc: string, strong: string[], weak: string[] } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

  const surveyData = [
    {
      category: 'Estrategia',
      questions: [
        { id: 'est1', text: '¿Existe una estrategia formal de adopción tecnológica o IA en la dirección de la empresa?' },
        { id: 'est2', text: '¿Se asigna presupuesto específico anual para la innovación y automatización de procesos?' }
      ]
    },
    {
      category: 'Procesos',
      questions: [
        { id: 'pro1', text: '¿Están documentados y estandarizados la mayoría de los procesos operativos clave?' },
        { id: 'pro2', text: '¿Con qué frecuencia se revisan y optimizan tecnológicamente los cuellos de botella internos?' }
      ]
    },
    {
      category: 'Atención al Cliente',
      questions: [
        { id: 'ate1', text: '¿Qué nivel de automatización tiene su soporte actual (ej. FAQs dinámicas, chatbots)?' },
        { id: 'ate2', text: '¿Las consultas fuera de horario comercial son atendidas de forma inmediata y resolutiva?' }
      ]
    },
    {
      category: 'Ventas',
      questions: [
        { id: 'ven1', text: '¿Se utiliza tecnología para cualificar, predecir o nutrir a los clientes potenciales (Lead Scoring)?' },
        { id: 'ven2', text: '¿El seguimiento de prospectos (emails, recordatorios) está automatizado en el CRM?' }
      ]
    },
    {
      category: 'Marketing',
      questions: [
        { id: 'mar1', text: '¿Se utilizan herramientas modernas para redactar, diseñar o personalizar campañas publicitarias?' },
        { id: 'mar2', text: '¿Están conectadas las métricas de marketing con las ventas en tiempo real sin excels manuales?' }
      ]
    },
    {
      category: 'Administración',
      questions: [
        { id: 'adm1', text: '¿El procesamiento de facturas y gestión documental se realiza sin entrada manual de datos (Data Entry)?' },
        { id: 'adm2', text: '¿Existen sistemas que generen reportes financieros de forma autónoma cada semana?' }
      ]
    },
    {
      category: 'Automatización',
      questions: [
        { id: 'aut1', text: '¿Se utilizan integradores cloud (como Make o Zapier) para conectar el software de la empresa?' },
        { id: 'aut2', text: '¿Las tareas de copiar y pegar información entre programas están completamente erradicadas?' }
      ]
    },
    {
      category: 'Datos',
      questions: [
        { id: 'dat1', text: '¿La información y bases de datos están 100% centralizadas en la nube y accesibles?' },
        { id: 'dat2', text: '¿Las decisiones directivas se toman apoyadas en cuadros de mando (dashboards) en tiempo real?' }
      ]
    },
    {
      category: 'Integraciones',
      questions: [
        { id: 'int1', text: '¿El software que utilizan cuenta con APIs modernas abiertas para conectarse a plataformas de IA?' },
        { id: 'int2', text: '¿El software de la empresa está libre de sistemas "heredados" locales que bloquean la innovación?' }
      ]
    },
    {
      category: 'Cultura Digital',
      questions: [
        { id: 'cul1', text: '¿El equipo muestra disposición e iniciativa para usar nuevas tecnologías que ahorren tiempo?' },
        { id: 'cul2', text: '¿Se proporciona formación interna estructurada sobre herramientas de productividad o IA?' }
      ]
    }
  ];

  const handleAnswer = (qId: string, val: number) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const isComplete = Object.keys(answers).length === 20;





  const getResultMetadata = (score: number) => {
    if (score <= 25) return {
      level: 'Empresa Tradicional',
      desc: 'Dependencia casi total del trabajo manual. Los procesos críticos residen en herramientas aisladas o en papel/excels, haciendo muy difícil y costosa la escalabilidad.',
      strengths: ['Oportunidad gigante de mejora', 'Cualquier automatización generará ROI masivo'],
      weaknesses: ['Alto coste en tareas repetitivas', 'Riesgo de pérdida de datos', 'Lentitud operativa'],
      recommendations: ['Digitalización de core y eliminación de Excel', 'Migración a Cloud ERP/CRM', 'Formación básica al equipo']
    };
    if (score <= 50) return {
      level: 'Primeros Pasos (Digitalización)',
      desc: 'La empresa usa herramientas digitales y nube básica, pero los sistemas no "hablan" entre sí. Hay mucho trabajo humano conectando puntos.',
      strengths: ['Infraestructura en la nube existente', 'Conciencia del problema'],
      weaknesses: ['Silos de información', 'Cuellos de botella en administración', 'Falta de cultura IA'],
      recommendations: ['Implementar integraciones API (Make/Zapier)', 'Centralización de datos', 'Automatización de tareas administrativas']
    };
    if (score <= 75) return {
      level: 'Empresa Digital (Conectada)',
      desc: 'Operaciones sólidas. Hay uso de CRMs, integraciones básicas e intentos de automatización de marketing y ventas. Están listos para incorporar Agentes de IA avanzados.',
      strengths: ['Procesos documentados', 'Datos listos para ser explotados por IA', 'Agilidad'],
      weaknesses: ['Exceso de alertas y dashboards', 'Falta de inteligencia predictiva', 'Costes de licencias SaaS dispersos'],
      recommendations: ['Despliegue de automatizaciones RPA', 'Implementación de Chatbots', 'Explorar Agentes autónomos para analítica predictiva']
    };
    return {
      level: 'Empresa IA Ready',
      desc: 'Ecosistema tecnológico avanzado. Operaciones hiper-optimizadas donde los datos fluyen. Es el entorno perfecto para escalar delegando procesos enteros a modelos LLM autónomos.',
      strengths: ['Toma de decisiones en tiempo real', 'Costes operativos mínimos por transacción', 'Innovación continua'],
      weaknesses: ['Mantenimiento de integraciones complejas', 'Necesidad de perfiles técnicos muy especializados'],
      recommendations: ['Escalado con Agentes Autónomos', 'Optimización avanzada de LLMs propios', 'Innovación disruptiva en modelo de negocio']
    };
  };

  const calculateResult = () => {
    setIsAnalyzing(true);
    const msgs = ['Procesando respuestas...', 'Evaluando nivel de digitalización...', 'Cruzando datos con estándares...', 'Generando informe de madurez...'];
    let step = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      step++;
      if (step < msgs.length) setLoadingMsg(msgs[step]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      const normalizedScore = calculateMaturityScore(answers);
      const meta = getResultMetadata(normalizedScore);
      setResult({ score: normalizedScore, level: meta.level, desc: meta.desc, strong: meta.strengths, weak: meta.weaknesses });
    }, 2200);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ritealmar.es/evaluador-madurez-ia",
        "url": "https://ritealmar.es/evaluador-madurez-ia",
        "name": "Evaluador de Madurez IA para Empresas | RITEALMAR",
        "description": "Calcula el nivel de madurez tecnológica y de adopción de IA de tu empresa. Diagnóstico en 20 pasos para encontrar oportunidades de optimización y automatización."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas IA", "item": "https://ritealmar.es/herramientas-ia" },
          { "@type": "ListItem", "position": 3, "name": "Madurez IA", "item": "https://ritealmar.es/evaluador-madurez-ia" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Test de Madurez Inteligencia Artificial",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "¿Qué es la madurez en Inteligencia Artificial?", "acceptedAnswer": { "@type": "Answer", "text": "Es la capacidad técnica, cultural y estratégica de una empresa para adoptar, integrar y extraer rentabilidad de sistemas automatizados y modelos de IA." } },
          { "@type": "Question", "name": "¿Por qué es importante medirla?", "acceptedAnswer": { "@type": "Answer", "text": "Intentar implementar IA en una empresa que todavía usa procesos de papel o Excels aislados suele acabar en fracaso. Medir la madurez permite saber por dónde empezar." } },
          { "@type": "Question", "name": "¿Qué mide exactamente el test?", "acceptedAnswer": { "@type": "Answer", "text": "Audita 10 áreas críticas de tu empresa: desde el soporte al cliente y marketing hasta la salud de tus bases de datos y la disposición de tu equipo humano." } },
          { "@type": "Question", "name": "¿Cuánto se tarda en hacer?", "acceptedAnswer": { "@type": "Answer", "text": "Es un diagnóstico ejecutivo de 20 preguntas que te tomará menos de 4 minutos completar." } },
          { "@type": "Question", "name": "¿Qué pasa si obtengo una puntuación muy baja?", "acceptedAnswer": { "@type": "Answer", "text": "Significa que estás perdiendo mucho dinero en ineficiencias operativas y tienes una oportunidad dorada para escalar implementando automatizaciones simples antes de pasar a la IA avanzada." } },
          { "@type": "Question", "name": "¿Debo ser el CEO para hacer este test?", "acceptedAnswer": { "@type": "Answer", "text": "No necesariamente, pero es recomendable que lo realice alguien con una visión transversal de cómo operan los departamentos de Ventas, Operaciones y Tecnología en tu empresa." } },
          { "@type": "Question", "name": "¿Guardáis los datos de mi empresa?", "acceptedAnswer": { "@type": "Answer", "text": "No. El algoritmo corre 100% en el navegador de tu dispositivo. Ninguna de tus respuestas es enviada a nuestros servidores ni bases de datos." } },
          { "@type": "Question", "name": "¿Cómo paso de 'Tradicional' a 'Digital'?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos agendar una Auditoría IA con nuestro equipo. Te diseñaremos una hoja de ruta progresiva para conectar tus departamentos sin caos." } },
          { "@type": "Question", "name": "¿Qué significa ser IA Ready?", "acceptedAnswer": { "@type": "Answer", "text": "Es el nivel máximo. Significa que tus sistemas y datos ya están estructurados (vía APIs y CRMs potentes), listos para que los Agentes Autónomos de IA tomen el control de tareas complejas." } },
          { "@type": "Question", "name": "¿Hacéis consultoría a medida?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. En RITEALMAR no solo diseñamos la estrategia, sino que desarrollamos el código, los chatbots y las automatizaciones para llevar a tu empresa al siguiente nivel." } }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Evaluador de Madurez IA para Empresas | RITEALMAR"
        description="Diagnóstico ejecutivo gratuito. Evalúa en 3 minutos el nivel de digitalización e Inteligencia Artificial de tu empresa y descubre tu puntuación real."
        canonical="https://ritealmar.es/evaluador-madurez-ia"
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-medium text-sm mb-6">
            <Activity className="w-4 h-4" /> Diagnóstico Corporativo
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Evaluador de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Madurez IA</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Descubre si la infraestructura técnica y los procesos de tu empresa están listos para la disrupción de la Inteligencia Artificial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 mb-32">
          {!result ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-sm">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold">Cuestionario (20 Preguntas)</h2>
                <span className="px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full text-sm font-bold">
                  {Object.keys(answers).length} / 20
                </span>
              </div>
              
              <div className="space-y-12">
                {surveyData.map((cat, idx) => (
                  <div key={idx} className="border-b border-slate-800/50 pb-8 last:border-0 last:pb-0">
                    <h3 className="text-lg font-bold text-cyan-400 mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5" /> {cat.category}
                    </h3>
                    <div className="space-y-8">
                      {cat.questions.map((q) => (
                        <div key={q.id}>
                          <p className="text-slate-300 font-medium mb-4">{q.text}</p>
                          <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map(val => (
                              <button
                                key={val}
                                onClick={() => handleAnswer(q.id, val)}
                                className={`py-3 rounded-lg border font-bold text-sm transition-colors ${
                                  answers[q.id] === val 
                                  ? 'bg-cyan-500 border-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                                }`}
                              >
                                {val}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
                            <span>1 (Nada)</span>
                            <span>5 (Totalmente)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                <button 
                  onClick={calculateResult}
                  disabled={!isComplete || isAnalyzing}
                  className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
                >
                  {isAnalyzing ? <RefreshCw className="w-6 h-6 animate-spin" /> : <BarChart className="w-6 h-6" />}
                  {isAnalyzing ? 'Evaluando...' : isComplete ? 'Calcular Mi Nivel de Madurez' : 'Completa las 20 preguntas para continuar'}
                </button>
              </div>
            </div>
          ) : isAnalyzing ? (
            <div className="animate-in fade-in flex flex-col items-center justify-center text-cyan-400 p-16 text-center border border-cyan-900/50 bg-cyan-950/10 rounded-2xl h-[600px] shadow-2xl backdrop-blur-sm">
              <RefreshCw className="w-16 h-16 mb-6 animate-spin" />
              <h3 className="text-xl font-bold animate-pulse">{loadingMsg}</h3>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              
              <div id="informe-ejecutivo-madurez" className="bg-[#0b1120] border border-cyan-900/50 rounded-2xl p-8 lg:p-12 shadow-2xl relative text-left">
                {/* Portada PDF */}
                <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">Auditoría <span className="text-cyan-400">Madurez IA</span></h2>
                    <p className="text-slate-400">RITEALMAR | Generado el: {new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 font-bold text-sm tracking-widest">
                    USO INTERNO
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2"><FileText className="w-5 h-5"/> Resumen Ejecutivo</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      El diagnóstico corporativo indica una puntuación de {result.score} sobre 100, situando a la organización en un perfil <strong>{result.level}</strong>. La empresa posee una base tecnológica {result.score < 50 ? 'insuficiente' : 'adecuada'} para escalar hacia modelos de automatización avanzada y requiere intervención {result.score < 50 ? 'crítica' : 'estratégica'}.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Diagnóstico de Nivel</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {result.desc}
                    </p>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Riesgos Operativos</h4>
                    <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                      {result.weak.map((w, idx) => (
                        <li key={idx}>{w}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5"/> Oportunidades y Fortalezas</h4>
                    <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                      {result.strong.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Impacto */}
                  <div className="md:col-span-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-900/50 p-6 rounded-xl">
                    <h4 className="text-cyan-400 font-bold mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Roadmap de Recomendaciones</h4>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      {(result.score <= 50 ? [
                        'Digitalización de core y eliminación de Excel',
                        'Migración a Cloud ERP/CRM',
                        'Formación básica al equipo',
                        'Implementar integraciones API (Make/Zapier)'
                      ] : [
                        'Despliegue de automatizaciones RPA',
                        'Implementación de Chatbots',
                        'Explorar Agentes autónomos para analítica predictiva',
                        'Escalado con Agentes Autónomos multimodales'
                      ]).map((r, idx) => (
                        <li key={idx} className="bg-slate-900/80 rounded-lg p-4 border border-cyan-900/30 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2"><Target className="w-5 h-5"/> Prioridades</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {result.score < 50 
                        ? 'Prioridad 1: Digitalización de core y eliminación de Excel. Prioridad 2: Migración a Cloud ERP/CRM. Prioridad 3: Formación básica al equipo.' 
                        : 'Prioridad 1: Despliegue de automatizaciones RPA. Prioridad 2: Implementación de Chatbots. Prioridad 3: Explorar Agentes autónomos para analítica predictiva.'}
                    </p>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-cyan-400"/> Próximos Pasos</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Validación de la auditoría y diseño de arquitectura de software a medida por parte del equipo técnico de RITEALMAR.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs">
                  Auditoría de madurez digital generada mediante el framework de diagnóstico corporativo RITEALMAR.
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 text-center">
                <p className="text-slate-300 mb-2 max-w-lg">
                  Podemos revisar tu nivel actual y darte un plan claro para avanzar sin invertir en herramientas que no necesitas.
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
                  Solicitar diagnóstico IA gratuito <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="text-center mt-6">
                <button 
                  onClick={() => window.location.reload()}
                  className="text-sm text-slate-500 hover:text-cyan-400 font-medium"
                >
                  Realizar una nueva evaluación
                </button>
              </div>

            </div>
          )}
        </div>

        {/* SEO Long Form Content */}
        <section className="relative z-10 py-24 px-6 bg-[#030712] border-t border-slate-800/50 mt-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué es el Evaluador de Madurez IA para Empresas?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El <strong>Evaluador de Madurez de Inteligencia Artificial</strong> es una herramienta de auditoría corporativa diseñada para diagnosticar el nivel exacto de digitalización y preparación tecnológica de tu organización. Antes de implementar soluciones avanzadas como Agentes Autónomos o Chatbots predictivos, es imperativo conocer si los cimientos de la empresa (procesos, datos, cultura y software) pueden soportar dicha tecnología.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Esta evaluación divide la estructura de la empresa en 10 áreas críticas (desde Estrategia hasta Ventas y Administración), generando una puntuación sobre 100 que categoriza a la empresa en una de las cuatro fases del espectro digital: Tradicional, Primeros Pasos, Digital o <em>IA Ready</em>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para qué sirve auditar el nivel de madurez digital?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Saltarse el proceso de evaluación es el motivo principal por el que el 70% de los proyectos de transformación digital fracasan estrepitosamente. Auditar el nivel de madurez sirve para:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Evitar el "Efecto Tirita":</strong> Comprar licencias de software al azar sin una estrategia centralizada solo genera más caos. El test revela exactamente dónde empezar.</li>
                <li><strong>Trazar una hoja de ruta progresiva:</strong> No puedes pasar de usar facturas en papel a tener una IA predictiva de finanzas en un mes. El evaluador dicta los pasos lógicos.</li>
                <li><strong>Fijar presupuestos realistas:</strong> Saber qué áreas están peor valoradas (por ejemplo, "Administración") permite inyectar capital de desarrollo exactamente donde generará más Retorno de Inversión (ROI).</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué problemas corporativos detecta y resuelve?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Las empresas suelen arrastrar ineficiencias que asumen como "el coste normal de hacer negocios". El evaluador saca a la luz estos cuellos de botella:
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">1. El Problema de los "Silos de Información"</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Ocurre cuando Ventas usa un software, Operaciones usa Excels aislados y Atención al Cliente usa el correo. Los datos no se comunican, forzando a los empleados a copiar y pegar información manualmente. Un nivel bajo en "Integraciones" detecta este problema al instante.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">2. Cultura de Resistencia al Cambio</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                De nada sirve instalar la mejor IA del mundo si los empleados tienen miedo a usarla o la ven como una amenaza. La categoría de "Cultura Digital" mide si tu equipo está preparado o si, por el contrario, requiere formación previa en nuestra <a href="/academia-ia" className="text-cyan-400 hover:underline">Academia Corporativa</a>.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">3. Cuellos de Botella de Crecimiento</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Si tu puntuación en el área de Ventas y Marketing es baja, significa que no puedes captar clientes de forma escalable. La solución suele pasar por la implantación de <a href="/servicios/automatizacion-procesos" className="text-cyan-400 hover:underline">Automatizaciones CRM</a> o Agentes de prospección.
              </p>
            </div>

            <div className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">¿Cómo interpretar el resultado de la evaluación?</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-4">Dependiendo de tu puntuación (0-100), tu empresa se clasifica en:</p>
              <ol className="list-decimal pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>Empresa Tradicional (0-25):</strong> Operativa manual crítica. Papel, llamadas no registradas y Excels desconectados. <em>Acción:</em> Migrar a la nube y adquirir un CRM básico de inmediato.</li>
                <li><strong>Primeros Pasos (26-50):</strong> Usáis herramientas digitales (Drive, Mail, Facturación online), pero no están interconectadas. <em>Acción:</em> Implementar integraciones API (Make/Zapier) para centralizar los datos.</li>
                <li><strong>Empresa Digital (51-75):</strong> Infraestructura robusta. Los datos fluyen automáticamente entre departamentos. <em>Acción:</em> Desplegar <a href="/chatbots-ia" className="text-cyan-400 hover:underline">Chatbots de IA</a> y automatizar tareas secundarias.</li>
                <li><strong>Empresa IA Ready (76-100):</strong> Ecosistema puramente digital. Estás en posición de ventaja competitiva absoluta. <em>Acción:</em> Integrar <strong>Agentes Autónomos Inteligentes</strong> que tomen decisiones complejas basándose en el big data de la compañía.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Errores más habituales al digitalizar empresas</h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                      <th className="p-4 text-cyan-400 font-bold">Error Común</th>
                      <th className="p-4 text-cyan-400 font-bold">Consecuencia</th>
                      <th className="p-4 text-cyan-400 font-bold">El enfoque RITEALMAR</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Automatizar caos</td>
                      <td className="p-4">Si un proceso manual está roto, automatizarlo solo genera errores más rápido.</td>
                      <td className="p-4">Auditar y reestructurar el proceso antes de escribir código.</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Desarrollo Monolítico</td>
                      <td className="p-4">Comprar software cerrado y caro que se queda obsoleto en 2 años.</td>
                      <td className="p-4">Crear ecosistemas modulares mediante APIs (Microservicios).</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Ignorar la limpieza de datos</td>
                      <td className="p-4">Las IA (LLMs) que beben de bases de datos sucias, devuelven conclusiones erróneas.</td>
                      <td className="p-4">Fase 1 dedicada siempre a la sanear y estructurar Data Warehouses.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Casos Reales de Evolución Corporativa</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                La madurez no es un estado, es un viaje. Observa cómo otras empresas han escalado niveles:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>De Tradicional a Digital:</strong> Panel Central, una empresa de e-commerce y panel sándwich, sufría un colapso administrativo gestionando catálogos gigantescos y presupuestos manuales. Pasaron de nivel 15 a nivel 70 implementando un Core automatizado que multiplicó sus ventas por siete. <a href="/proyectos/panel-central" className="text-cyan-400 hover:underline">Lee el Caso Completo</a>.</li>
                <li><strong>De Digital a IA Ready:</strong> Clínicas dentales que ya tenían software de citas, pero las recepcionistas no daban abasto. Subieron a nivel 90 desplegando a <em>Aurentia</em>, nuestro sistema inteligente. <a href="/proyectos/aurentia-app" className="text-cyan-400 hover:underline">Descubre Aurentia</a>.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios de escalar tu Nivel de Madurez (IA)</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Estar en el nivel superior del espectro ("IA Ready") te otorga una resiliencia de mercado brutal. Tu empresa operará con costes marginales cercanos a cero; es decir, atender a 100 clientes o a 1.000 te costará exactamente lo mismo en estructura de personal. Además, el flujo de datos limpios te permitirá usar <a href="/servicios/agentes-ia" className="text-cyan-400 hover:underline">IA Predictiva</a> para anticiparte a caídas de ventas o roturas de stock.
              </p>
            </div>

            <div className="space-y-6 bg-cyan-950/20 border border-cyan-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Conclusión: Tu Mapa hacia la IA</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                El Evaluador de Madurez es solo la brújula; ahora necesitas caminar el sendero. Ya sea que tu empresa requiera una migración total a la nube, o que ya estés listo para desplegar un ejército de Agentes Comerciales autónomos, el siguiente paso lógico es agendar una sesión de análisis técnico.
              </p>
              <div className="text-center md:text-left">
                <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Solicitar Auditoría IA de Viabilidad Técnica <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Recursos Relacionados */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-10 text-center">Ecosistema RITEALMAR</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              { t: "Calculadora", u: "/calculadora-ahorro-ia" },
              { t: "Herramientas", u: "/herramientas-ia" },
              { t: "Prompts IA", u: "/generador-prompts-ia" },
              { t: "Academia", u: "/academia-ia" },
              { t: "Recursos", u: "/recursos-ia" },
              { t: "Agentes", u: "/servicios/agentes-ia" },
              { t: "Chatbots", u: "/chatbots-ia" },
              { t: "Procesos", u: "/servicios/automatizacion-procesos" },
            ].map((link, i) => (
              <a key={i} href={link.u} className="text-sm font-semibold text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800 py-3 rounded-lg hover:border-cyan-900/50 transition-colors">
                {link.t}
              </a>
            ))}
          </div>
        </div>

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
