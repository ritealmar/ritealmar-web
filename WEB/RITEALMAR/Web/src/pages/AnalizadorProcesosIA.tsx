import React, { useState } from 'react';


import SEO from '../components/SEO';
import { 
  Activity,
  ArrowRight,
  BrainCircuit,
  Settings,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Clock,
  TrendingUp,
  Cpu,
  Database,
  MessageSquare,
  ChevronRight,
  Zap,
  Briefcase,
  FileText,
  AlertOctagon,
  Lightbulb,
  Target,

} from 'lucide-react';

export default function AnalizadorProcesosIA() {
  const [formData, setFormData] = useState({
    empresa: '',
    sector: '',
    empleados: '1-10',
    departamento: 'Ventas',
    proceso: '',
    horas: '',
    personas: '',
    herramientas: ''
  });

  const [result, setResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const analyzeProcess = () => {
    setIsAnalyzing(true);
    const msgs = ['Desglosando flujo operativo...', 'Detectando ineficiencias...', 'Calculando coste de tareas manuales...', 'Buscando automatizaciones aplicables...'];
    let step = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      step++;
      if (step < msgs.length) setLoadingMsg(msgs[step]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);

      const textToAnalyze = `${formData.proceso} ${formData.herramientas}`.toLowerCase();
      const horas = parseFloat(formData.horas) || 0;
      const personas = parseFloat(formData.personas) || 1;
      const horasTotales = horas * personas;

    const issues = [];
    const tech = new Set<string>();
    
    // Motor basado en reglas léxicas (Regex & Keywords)
    if (/(excel|csv|hoja de cálculo|copiar|pegar|pasar datos|manual|data entry|escribir|teclear)/i.test(textToAnalyze)) {
      issues.push('Data Entry Manual y Gestión de Hojas de Cálculo (Alto riesgo de error humano).');
      tech.add('RPA (Automatización Robótica de Procesos)');
      tech.add('Integración por APIs (Make/Zapier)');
    }
    
    if (/(email|correo|gmail|outlook|bandeja|responder|adjunto)/i.test(textToAnalyze)) {
      issues.push('Gestión masiva o repetitiva de correos electrónicos.');
      tech.add('Agentes IA de clasificación y respuesta (LLMs)');
    }
    
    if (/(whatsapp|chat|mensaje|dm|instagram|redes|facebook)/i.test(textToAnalyze)) {
      issues.push('Soporte o cualificación mediante canales de chat no escalables.');
      tech.add('Chatbots IA omnicanal');
      tech.add('Flujos conversacionales de WhatsApp');
    }

    if (/(llamada|teléfono|llamar|cita|reserva|agenda|calendario)/i.test(textToAnalyze)) {
      issues.push('Cuello de botella en gestión de reservas o atención telefónica.');
      tech.add('Asistentes de Voz IA (Agentes Telefónicos)');
      tech.add('Automatización de calendarios');
    }

    if (/(factura|documento|pdf|papel|escanear|contrato)/i.test(textToAnalyze)) {
      issues.push('Procesamiento documental analógico o semi-digital.');
      tech.add('OCR Inteligente (Reconocimiento de caracteres)');
      tech.add('Sistemas de Gestión Documental Inteligente');
    }

    if (issues.length === 0 && textToAnalyze.length > 10) {
      issues.push('Procesos genéricos sin definir tecnológicamente.');
      tech.add('Auditoría IA a medida');
      tech.add('CRM optimizado');
    }

    let nivelPrioridad = '🟢 Optimizado';
    let savingsRatio = 0.2; // 20%
    let statusClass = 'text-emerald-400 border-emerald-900 bg-emerald-950/20';
    let icon = <CheckCircle className="w-8 h-8 text-emerald-400" />;

    if (issues.length >= 3 || horasTotales > 40) {
      nivelPrioridad = '🔴 Alta Prioridad';
      savingsRatio = 0.8; // 80%
      statusClass = 'text-red-400 border-red-900 bg-red-950/20';
      icon = <AlertTriangle className="w-8 h-8 text-red-400" />;
    } else if (issues.length >= 1 || horasTotales > 10) {
      nivelPrioridad = '🟡 Prioridad Media';
      savingsRatio = 0.5; // 50%
      statusClass = 'text-yellow-400 border-yellow-900 bg-yellow-950/20';
      icon = <Zap className="w-8 h-8 text-yellow-400" />;
    }

      setResult({
        prioridad: nivelPrioridad,
        statusClass,
        icon,
        horasMensuales: horasTotales * 4,
        ahorroHoras: Math.round((horasTotales * 4) * savingsRatio),
        issues,
        tech: Array.from(tech)
      });
    }, 2200);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ritealmar.es/analizador-procesos-ia",
        "url": "https://ritealmar.es/analizador-procesos-ia",
        "name": "Analizador de Procesos con IA | RITEALMAR",
        "description": "Descubre qué cuellos de botella y procesos manuales en tu empresa pueden automatizarse. Calcula tu ahorro de tiempo y recibe recomendaciones tecnológicas."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas IA", "item": "https://ritealmar.es/herramientas-ia" },
          { "@type": "ListItem", "position": 3, "name": "Analizador de Procesos", "item": "https://ritealmar.es/analizador-procesos-ia" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Motor Analizador de Procesos IA",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "¿Cómo funciona el analizador?", "acceptedAnswer": { "@type": "Answer", "text": "Utiliza un motor local que detecta patrones de ineficiencia (como uso excesivo de Excel, emails manuales o entrada de datos) en la descripción de tu proceso para recomendar tecnologías de automatización." } },
          { "@type": "Question", "name": "¿Qué es la automatización RPA?", "acceptedAnswer": { "@type": "Answer", "text": "La Automatización Robótica de Procesos (RPA) es un software programado para imitar las acciones de un humano interactuando con interfaces digitales, ideal para tareas repetitivas." } },
          { "@type": "Question", "name": "¿Qué procesos no se pueden automatizar?", "acceptedAnswer": { "@type": "Answer", "text": "Aquellos que requieren empatía humana compleja, toma de decisiones éticas, pensamiento lateral o interacción física imprevista fuera de protocolos." } },
          { "@type": "Question", "name": "¿El analizador envía los datos de mi empresa?", "acceptedAnswer": { "@type": "Answer", "text": "No. Esta herramienta procesa la información en tu propio navegador mediante lógica estructurada. No guardamos información confidencial." } },
          { "@type": "Question", "name": "¿Qué nivel de ahorro es realista?", "acceptedAnswer": { "@type": "Answer", "text": "En procesos altamente manuales (como el traspaso de datos entre herramientas), la automatización puede recuperar hasta el 90% del tiempo humano." } },
          { "@type": "Question", "name": "¿Qué son los cuellos de botella?", "acceptedAnswer": { "@type": "Answer", "text": "Son puntos en tu cadena de trabajo donde las tareas se acumulan, normalmente porque dependen de la intervención humana constante y manual." } },
          { "@type": "Question", "name": "¿Por qué es malo depender de Excel?", "acceptedAnswer": { "@type": "Answer", "text": "No es malo en sí mismo, pero usar Excels como base de datos o CRM genera islas de información aisladas, errores de versión y pérdida de tiempo conectando datos manualmente." } },
          { "@type": "Question", "name": "¿Qué es un Agente IA?", "acceptedAnswer": { "@type": "Answer", "text": "Es un sistema que usa Inteligencia Artificial (como LLMs) para entender contexto, tomar decisiones básicas y ejecutar acciones (como responder un correo o clasificar un lead) sin intervención humana." } },
          { "@type": "Question", "name": "¿RITEALMAR implementa estas soluciones?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, somos expertos en desarrollar e implantar integraciones API, CRMs, Agentes IA y Chatbots en empresas." } },
          { "@type": "Question", "name": "¿Por dónde empiezo a automatizar?", "acceptedAnswer": { "@type": "Answer", "text": "Solicitando una Auditoría IA tras obtener el resultado de tu análisis. Nos sentaremos contigo para trazar un plan directo al ROI." } }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Analizador de Procesos con IA | RITEALMAR"
        description="Audita tus flujos de trabajo. Descubre al instante qué procesos operativos, de ventas o administración pueden ser automatizados con Inteligencia Artificial."
        canonical="https://ritealmar.es/analizador-procesos-ia"
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-medium text-sm mb-6">
            <Settings className="w-4 h-4" /> Diagnóstico Operativo
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Analizador de Procesos con <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Inteligencia Artificial</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Describe un cuello de botella en tu empresa y nuestro motor lógico detectará automáticamente cómo erradicarlo mediante automatización, devolviéndote miles de horas al año.
          </p>
          <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Solicitar Auditoría IA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Engine App */}
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulario */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b border-slate-800 pb-4 flex items-center gap-2">
                <Activity className="w-6 h-6 text-cyan-400" /> Datos del Proceso
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Empresa</label>
                  <input type="text" name="empresa" value={formData.empresa} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Sector</label>
                  <input type="text" name="sector" value={formData.sector} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: Logística" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Departamento</label>
                  <select name="departamento" value={formData.departamento} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                    <option>Ventas</option>
                    <option>Atención al Cliente</option>
                    <option>Administración</option>
                    <option>RRHH</option>
                    <option>Operaciones</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Empleados</label>
                  <select name="empleados" value={formData.empleados} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>+200</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Describe el proceso manual (paso a paso)</label>
                <textarea 
                  name="proceso" 
                  value={formData.proceso} 
                  onChange={handleInputChange} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 h-32 resize-none" 
                  placeholder="Ej: Recibimos un email con los datos de un cliente. Una persona abre el correo, copia los datos, abre un Excel, los pega allí, y luego entra a nuestro sistema de facturación para crear un borrador manual..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Herramientas utilizadas</label>
                <input type="text" name="herramientas" value={formData.herramientas} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: Gmail, Excel, WhatsApp, ERP propio..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Horas/semana (por persona)</label>
                  <input type="number" name="horas" value={formData.horas} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: 10" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Personas implicadas</label>
                  <input type="number" name="personas" value={formData.personas} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Ej: 3" />
                </div>
              </div>

              <button 
                onClick={analyzeProcess}
                disabled={!formData.proceso || !formData.horas || !formData.personas || isAnalyzing}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isAnalyzing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <BrainCircuit className="w-5 h-5" />}
                {isAnalyzing ? 'Procesando...' : 'Analizar Proceso'}
              </button>
            </div>

            {/* Resultados */}
            <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col">
              {!result && !isAnalyzing ? (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-500 text-center opacity-50 min-h-[400px]">
                  <Cpu className="w-24 h-24 mb-4" />
                  <p className="text-lg">El motor de análisis revelará aquí<br/>los cuellos de botella e ineficiencias de tu flujo de trabajo.</p>
                </div>
              ) : isAnalyzing ? (
                <div className="animate-in fade-in flex-1 flex flex-col items-center justify-center text-cyan-400 p-16 text-center bg-cyan-950/10 min-h-[400px]">
                  <RefreshCw className="w-16 h-16 mb-6 animate-spin" />
                  <h3 className="text-xl font-bold animate-pulse">{loadingMsg}</h3>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 flex-1 w-full max-w-[900px] mx-auto absolute inset-0 z-20 bg-[#0F172A] p-6 overflow-y-auto">
                  
                  <div id="informe-ejecutivo-procesos" className="bg-[#0b1120] border border-cyan-900/50 rounded-2xl p-8 shadow-2xl relative text-left">
                    {/* Portada PDF */}
                    <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-center">
                      <div>
                        <h2 className="text-3xl font-black text-white mb-2">Auditoría <span className="text-cyan-400">Procesos IA</span></h2>
                        <p className="text-slate-400">RITEALMAR | Generado el: {new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="mt-4 md:mt-0 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-lg text-cyan-400 font-bold text-sm tracking-widest flex items-center gap-2">
                        {result.icon} ESTADO: {result.prioridad}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2"><FileText className="w-5 h-5"/> Resumen Ejecutivo</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Se ha analizado el proceso operativo introducido en el área {formData.departamento}. El sistema identifica ineficiencias estructurales propias del "Shadow Work", validando la integración de tecnologías RPA y LLM.
                        </p>
                      </div>
                      
                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Diagnóstico</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          El proceso consume actualmente <strong>{result.horasMensuales} horas mensuales</strong> ejecutadas por {formData.personas} personas. El nivel de dependencia en herramientas como "{formData.herramientas}" sugiere alta posibilidad de automatización.
                        </p>
                      </div>

                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Riesgos Operativos</h4>
                        <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                          {result.issues.length > 0 ? (
                            result.issues.map((issue: string, i: number) => (
                              <li key={i}>{issue}</li>
                            ))
                          ) : (
                            <li>Falta de trazabilidad y escalabilidad en el proceso.</li>
                          )}
                        </ul>
                      </div>

                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5"/> Oportunidades</h4>
                        <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                          <li>Eliminación de silos de datos conectando sistemas vía API.</li>
                          <li>Recuperación directa de {result.ahorroHoras} horas mensuales.</li>
                          <li>Aumento de la fiabilidad del dato al 99.9%.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-900/50 p-6 rounded-xl mb-8">
                      <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Impacto y ROI Estimado</h4>
                      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">
                        <div className="bg-slate-900/80 rounded-lg p-4">
                          <p className="text-xs text-slate-400 mb-1">Horas Recuperadas / mes</p>
                          <p className="text-2xl font-black text-emerald-400">+{result.ahorroHoras}h</p>
                        </div>
                        <div className="bg-slate-900/80 rounded-lg p-4 text-left">
                          <p className="text-xs text-slate-400 mb-1">Arquitectura Tecnológica Sugerida:</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {result.tech.length > 0 ? (
                              result.tech.map((t: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-cyan-950 text-cyan-400 rounded-md text-xs font-bold border border-cyan-900">{t}</span>
                              ))
                            ) : (
                              <span className="text-white text-sm">Automatización RPA + Python</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2"><Target className="w-5 h-5"/> Prioridades</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Reestructurar el flujo para eliminar la intervención humana en la fase de "Data Entry" (copiado y pegado) o clasificación.
                        </p>
                      </div>

                      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-cyan-400"/> Próximos Pasos</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Trasladar este flujo a RITEALMAR para calcular los costes de desarrollo del robot/agente de automatización.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs">
                      Este informe ha sido generado mediante el motor de análisis heurístico de RITEALMAR. Los datos son estimaciones y requieren validación por un arquitecto de software.
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-4 text-center">
                    <p className="text-slate-300 mb-2 max-w-lg">
                      Este análisis es una primera aproximación. Podemos revisar el proceso real y detectar qué partes merece la pena automatizar.
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
                      Revisar mi proceso con RITEALMAR <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="text-center mt-6 pb-12">
                    <button 
                      onClick={() => setResult(null)}
                      className="text-sm text-slate-500 hover:text-cyan-400 font-medium"
                    >
                      Analizar otro proceso
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>

        {/* SEO Long Form Content */}
        <section className="relative z-10 py-24 px-6 bg-[#030712] border-t border-slate-800/50 mt-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué es el Analizador de Procesos con IA?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El <strong>Analizador de Procesos con Inteligencia Artificial</strong> es una herramienta de diagnóstico operativo de precisión. Mientras que muchas empresas saben que están perdiendo tiempo, muy pocas saben exactamente dónde está la fuga de capital o qué tecnología específica necesitan para taponarla. Este analizador permite a directivos y responsables de área describir en lenguaje natural un proceso rutinario (como la facturación o la cualificación de clientes) y descubrir al instante si es factible automatizarlo.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                El motor subyacente utiliza reglas algorítmicas para identificar palabras clave de ineficiencia (como "copiar", "pegar", "descargar CSV" o "revisar bandeja") y cruza esa información con bases de datos de rendimiento para proponer la tecnología exacta que sustituiría dicho trabajo manual (desde RPA tradicional hasta LLMs avanzados).
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para qué sirve analizar flujos de trabajo corporativos?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El análisis de procesos (BPM - Business Process Management) adaptado a la era de la Inteligencia Artificial sirve para transformar el gasto laboral bruto en inversión escalable. Su utilidad principal se resume en:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Detección de Cuellos de Botella:</strong> Identificar el punto exacto donde un departamento colapsa (ej. cuando entra un volumen de emails superior al que el equipo puede leer).</li>
                <li><strong>Selección Tecnológica Adecuada:</strong> No necesitas una IA neuronal de 10.000€ para pasar datos de un Excel a otro; a veces basta con un simple script de Zapier/Make. El analizador te indica qué tecnología (RPA, Chatbots, Agentes) es la adecuada sin sobredimensionar la inversión.</li>
                <li><strong>Cuantificación de Ahorro:</strong> Muestra en horas brutas mensuales cuánto tiempo se liberará tras la intervención tecnológica.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué problemas estructurales soluciona esta auditoría?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                La herramienta está entrenada para cazar las tres grandes "plagas operativas" que destruyen la rentabilidad de las Pymes:
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">1. El "Trabajo Invisible"</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                El trabajo invisible son esas micro-tareas de 2 minutos (descargar un PDF, renombrarlo y subirlo a Drive) que, repetidas 50 veces al día por 10 empleados, cuestan cientos de miles de euros al año. El analizador visibiliza esta pérdida.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">2. Dependencia Crítica del Personal (Key Person Risk)</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Si todo el proceso de onboarding de clientes depende de que "María" se acuerde de enviar el email de bienvenida y revisar el Excel, la empresa está en riesgo constante. La <a href="/servicios/automatizacion-procesos" className="text-cyan-400 hover:underline">automatización</a> estandariza el conocimiento y lo blinda en código, independizándolo del operador humano.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">3. Incapacidad de Absorción de Picos (Black Friday)</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                En periodos de alta demanda, los procesos manuales simplemente se rompen. Analizar el proceso permite integrar <a href="/servicios/agentes-ia" className="text-cyan-400 hover:underline">Agentes Inteligentes</a> que absorben el 100% del pico de trabajo sin inmutarse ni pedir horas extras.
              </p>
            </div>

            <div className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">¿Cómo utilizar el Analizador paso a paso?</h2>
              <ol className="list-decimal pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>Describe el proceso sin tecnicismos:</strong> No necesitas saber de IA. Simplemente escribe en el cuadro de texto cómo trabajáis ahora mismo. <em>"Recibo un mail, lo leo, abro un Word, cambio el nombre del cliente y lo envío de vuelta"</em>.</li>
                <li><strong>Enumera las herramientas:</strong> Pon la lista de software implicado (Gmail, Excel, Holded, Salesforce, HubSpot...). Esto es vital para que el motor sepa si existen APIs abiertas para automatizarlas.</li>
                <li><strong>Determina el volumen:</strong> Introduce las horas semanales y las personas implicadas para que la calculadora matemática subyacente pueda realizar la estimación de ahorro de impacto.</li>
                <li><strong>Analizar:</strong> El motor léxico separará tus herramientas y tus verbos de acción, cruzándolos con nuestra biblioteca de soluciones tecnológicas.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Cómo interpretar el Análisis Resultante?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El informe se divide en tres partes ejecutivas:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Semáforo de Prioridad:</strong> (Rojo, Amarillo, Verde). Si estás en Rojo, tu proceso es un sumidero de dinero y la tecnología para solucionarlo es barata y rápida de implantar. Prioridad absoluta.</li>
                <li><strong>Impacto ROI:</strong> Te mostraremos las horas liberadas. Multiplica esas horas por el coste por hora de tu empleado y tendrás el dinero exacto que recuperarás al mes.</li>
                <li><strong>Tecnologías Recomendadas (Stack):</strong> Te indicaremos si requieres RPA (Make/Zapier), LLMs (Agentes de texto) o Tecnologías de Voz (Call Centers IA). Puedes aprender más sobre ellas en el <a href="/blog" className="text-cyan-400 hover:underline">Blog Oficial</a>.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Casos Reales de Análisis y Automatización</h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                      <th className="p-4 text-cyan-400 font-bold">Problema Detectado</th>
                      <th className="p-4 text-cyan-400 font-bold">Solución Aplicada</th>
                      <th className="p-4 text-cyan-400 font-bold">Ahorro Mensual</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-4">"Copiamos reservas de WhatsApp a nuestro CRM a mano".</td>
                      <td className="p-4"><a href="/chatbots-ia" className="text-cyan-400 hover:underline">Chatbot WhatsApp</a> conectado a CRM.</td>
                      <td className="p-4 font-bold text-emerald-400">120 horas / mes</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-4">"Leemos los correos de proveedores para descargar sus facturas PDF".</td>
                      <td className="p-4">Agente IA de clasificación y extracción OCR + ERP.</td>
                      <td className="p-4 font-bold text-emerald-400">85 horas / mes</td>
                    </tr>
                    <tr>
                      <td className="p-4">"El equipo comercial pasa 2 horas al día investigando leads en LinkedIn".</td>
                      <td className="p-4">Agente de prospección y Web Scraping.</td>
                      <td className="p-4 font-bold text-emerald-400">240 horas / mes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios Críticos de implantar IA en Procesos</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                La digitalización de procesos operativos (Business Process Automation) es la única vía hacia el crecimiento asimétrico. Las ventajas directas incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Reducción de Tasa de Error:</strong> Los humanos copian mal los números de cuenta o los emails; los sistemas API tienen una tasa de error del 0.00%.</li>
                <li><strong>Trazabilidad:</strong> Al automatizar un proceso, todas las acciones quedan registradas en logs. Si algo falla, sabes exactamente dónde, cuándo y por qué (Auditoría limpia).</li>
                <li><strong>Felicidad del Empleado (Retención de Talento):</strong> Ningún empleado brillante quiere pasar 8 horas tecleando datos. Liberarlos de esa carga reduce el Burnout y la fuga de talento a la competencia.</li>
              </ul>
            </div>

            <div className="space-y-6 bg-cyan-950/20 border border-cyan-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Siguiente Paso: De la Teoría a la Práctica</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                Conocer la enfermedad es la mitad del trabajo, pero ahora requieres la medicina. Si el analizador ha detectado ineficiencias altas o medias, tu empresa está perdiendo competitividad frente a corporaciones que ya usan integraciones IA. En RITEALMAR no solo diseñamos la estrategia, sino que desarrollamos el código a medida para conectar tus sistemas.
              </p>
              <div className="text-center md:text-left">
                <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Solicitar Desarrollo de Integración a Medida <ArrowRight size={16} />
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
              { t: "Madurez IA", u: "/evaluador-madurez-ia" },
              { t: "Chatbots", u: "/chatbots-ia" },
              { t: "Agentes", u: "/servicios/agentes-ia" },
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
