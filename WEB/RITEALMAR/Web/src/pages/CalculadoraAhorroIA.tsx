import React, { useState, useEffect } from 'react';
import { 
  Calculator, ChevronRight, TrendingUp, Clock, Target, 
  ArrowRight, ShieldCheck, Zap, Bot, MessageSquare, BarChart3, HelpCircle,
  RefreshCw, FileText, CheckCircle, Activity, AlertTriangle, Lightbulb
} from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { trackEvent } from '../utils/analytics';

export default function CalculadoraAhorroIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    trackEvent('internal_link', { link: path });
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // State para la calculadora
  const [result, setResult] = useState<{
    savings: number;
    currentCost: number;
    finalCost: number;
    timeROI: number;
    hoursSaved: number;
  } | null>(null);



  const [employees, setEmployees] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(20);
  const [clientsPerMonth, setClientsPerMonth] = useState<number>(500);
  const [queriesPerMonth, setQueriesPerMonth] = useState<number>(2000);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

  const handleCalculate = () => {
    setIsAnalyzing(true);
    setResult(null);
    const msgs = ['Analizando procesos manuales...', 'Evaluando variables de equipo...', 'Calculando ROI...', 'Buscando oportunidades...', 'Preparando informe...'];
    let step = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      step++;
      if (step < msgs.length) setLoadingMsg(msgs[step]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      
      const IA_EFFICIENCY = 0.70;
      const COST_OF_IMPLEMENTATION = 4500;
      
      const totalRepetitiveHoursMonth = employees * hoursPerWeek * 4;
      const savedHoursMonth = Math.round(totalRepetitiveHoursMonth * IA_EFFICIENCY);
      const queryTimeMinutes = 5;
      const savedQueryHoursMonth = Math.round(((queriesPerMonth * queryTimeMinutes) / 60) * IA_EFFICIENCY);
      const totalSavedHoursMonth = savedHoursMonth + savedQueryHoursMonth;
      
      const monthlySavings = totalSavedHoursMonth * hourlyRate;
      const currentCost = (totalRepetitiveHoursMonth + (queriesPerMonth * queryTimeMinutes / 60)) * hourlyRate;
      const finalCost = currentCost - monthlySavings;

      setResult({
        savings: monthlySavings,
        currentCost: Math.round(currentCost),
        finalCost: Math.round(finalCost),
        timeROI: Math.max(0.1, COST_OF_IMPLEMENTATION / monthlySavings).toFixed(1) as unknown as number,
        hoursSaved: totalSavedHoursMonth
      });
    }, 2500);
  };

  const faqs = [
    { q: "¿Qué variables tiene en cuenta esta calculadora de ahorro?", a: "La calculadora cruza el volumen de tus horas de equipo invertidas en procesos repetitivos y las consultas de soporte contra el coste laboral medio. Estimamos conservadoramente que un sistema de IA bien entrenado asume el 70% de estas cargas operativas." },
    { q: "¿Es realista el 70% de eficiencia de la IA?", a: "Sí. En sectores de alto volumen documental (Inmobiliarias) o atención constante (Clínicas, Ecommerce), los Agentes IA asuelen resolver autónomamente entre un 60% y un 85% de las tareas mecánicas o respuestas a usuarios sin intervención humana." },
    { q: "¿Qué incluye el ROI (Retorno de Inversión) estimado?", a: "El ROI se calcula contrastando el ahorro económico anual (horas hombre liberadas x coste por hora) frente a un coste promedio estándar de implementación B2B. No tiene en cuenta los beneficios extra derivados del aumento de ventas, por lo que el ROI real suele ser superior." },
    { q: "¿Esta calculadora es válida para Chatbots de WhatsApp?", a: "Absolutamente. De hecho, gran parte del cálculo de 'Consultas repetitivas al mes' está pensado para medir el impacto de desplegar Chatbots IA en canales como WhatsApp o Web." },
    { q: "¿Sirve para automatizaciones internas sin interfaz de chat?", a: "Sí. Si estás evaluando conectar tu ERP o automatizar traspaso de datos, céntrate en el apartado 'Horas semanales dedicadas a tareas repetitivas' para obtener el análisis de rentabilidad exacto." },
    { q: "¿Cómo puedo validar estos números para mi negocio específico?", a: "El siguiente paso recomendado es solicitar nuestra Auditoría Gratuita. Un ingeniero de datos revisará tu infraestructura y validará el ahorro real que podemos conseguir en tu empresa." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
      { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://ritealmar.es/recursos-ia" },
      { "@type": "ListItem", "position": 3, "name": "Calculadora de Ahorro IA", "item": "https://ritealmar.es/calculadora-ahorro-ia" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-[#00D4FF]/30">
      <SEO 
        title="Calculadora de Ahorro y ROI por Automatización IA | RITEALMAR"
        description="Calcula cuánto dinero y tiempo puede ahorrar tu empresa al mes y al año implementando Inteligencia Artificial, chatbots y automatizaciones."
        canonical="https://ritealmar.es/calculadora-ahorro-ia"
        ogType="website"
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      <section className="relative z-10 pt-32 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-white/5">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          <Calculator size={14} /> Herramienta Interactiva
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 mb-6 leading-tight">
          Calculadora de Ahorro y ROI por IA
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Descubre en segundos el impacto económico directo de integrar <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-cyan-400 hover:underline">automatizaciones</a>, chatbots y sistemas inteligentes en tus flujos de trabajo actuales.
        </p>
      </section>

      <section className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="bg-[#0A1628] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-cyan-400" /> Datos de tu Empresa
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300">Número de empleados en oficina/soporte</label>
                  <span className="text-sm font-bold text-cyan-400">{employees}</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300">Horas semanales en tareas repetitivas (por empleado)</label>
                  <span className="text-sm font-bold text-cyan-400">{hoursPerWeek}h</span>
                </div>
                <input 
                  type="range" min="1" max="40" value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300">Coste medio por hora del empleado (€)</label>
                  <span className="text-sm font-bold text-cyan-400">{hourlyRate}€</span>
                </div>
                <input 
                  type="range" min="10" max="100" value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300">Consultas repetitivas al mes (clientes/leads)</label>
                  <span className="text-sm font-bold text-purple-400">{queriesPerMonth}</span>
                </div>
                <input 
                  type="range" min="100" max="20000" step="100" value={queriesPerMonth} 
                  onChange={(e) => setQueriesPerMonth(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-slate-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <button 
                onClick={handleCalculate}
                disabled={isAnalyzing}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-8"
              >
                {isAnalyzing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                {isAnalyzing ? 'Calculando...' : 'Generar Informe de Ahorro'}
              </button>
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            {!result && !isAnalyzing ? (
              <div className="flex-1 border border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-500 opacity-50 p-12 text-center h-full min-h-[400px]">
                <FileText className="w-20 h-20 mb-6 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Tu informe aparecerá aquí</h3>
                <p>Configura las variables a la izquierda y pulsa "Generar Informe de Ahorro".</p>
              </div>
            ) : isAnalyzing ? (
              <div className="flex-1 border border-cyan-900/50 bg-cyan-950/10 rounded-3xl flex flex-col items-center justify-center text-cyan-400 p-12 text-center h-full min-h-[400px]">
                <RefreshCw className="w-16 h-16 mb-6 animate-spin" />
                <h3 className="text-xl font-bold animate-pulse">{loadingMsg}</h3>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div id="informe-ejecutivo-calculadora" className="bg-[#0b1120] border border-cyan-900/50 rounded-2xl p-8 lg:p-12 shadow-2xl relative text-left">
                  <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2">Informe Ejecutivo <span className="text-cyan-400">Financiero IA</span></h2>
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
                        La empresa actualmente asume un coste estructural elevado derivado de procesos manuales. El presente análisis demuestra una viabilidad técnica y financiera inmediata para la sustitución de dichas horas mediante automatización robótica e IA cognitiva.
                      </p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Diagnóstico</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Se están invirtiendo <strong>{result!.hoursSaved.toLocaleString()} horas mensuales</strong> en flujos de trabajo repetitivos. Esto genera un coste operativo actual de {result!.currentCost.toLocaleString()}€/mes sin aportar valor añadido al cliente final.
                      </p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Riesgos de Inacción</h4>
                      <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                        <li>Coste de oportunidad por retención de talento en tareas mecánicas.</li>
                        <li>Incapacidad para escalar operaciones sin multiplicar gastos fijos.</li>
                        <li>Riesgo crítico de error humano en volcado de datos.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5"/> Oportunidades</h4>
                      <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                        <li>Liberación inmediata de {Math.round(result!.hoursSaved * 12).toLocaleString()} horas/año.</li>
                        <li>Operatividad garantizada 24/7 sin dependencias vacacionales.</li>
                        <li>Incremento directo del margen de beneficio operativo.</li>
                      </ul>
                    </div>
                    <div className="md:col-span-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-900/50 p-6 rounded-xl">
                      <h4 className="text-cyan-400 font-bold mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Impacto y ROI Estimado</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-slate-900/80 rounded-lg p-4">
                          <p className="text-xs text-slate-400 mb-1">Ahorro Anual</p>
                          <p className="text-2xl font-black text-emerald-400">{(result!.savings * 12).toLocaleString('es-ES')}€</p>
                        </div>
                        <div className="bg-slate-900/80 rounded-lg p-4">
                          <p className="text-xs text-slate-400 mb-1">Horas Liberadas</p>
                          <p className="text-2xl font-black text-white">{(result!.hoursSaved * 12).toLocaleString('es-ES')}h / año</p>
                        </div>
                        <div className="bg-slate-900/80 rounded-lg p-4">
                          <p className="text-xs text-slate-400 mb-1">Nuevo Coste Operativo</p>
                          <p className="text-2xl font-black text-cyan-400">{(result!.finalCost * 12).toLocaleString('es-ES')}€ / año</p>
                        </div>
                        <div className="bg-slate-900/80 rounded-lg p-4">
                          <p className="text-xs text-slate-400 mb-1">Amortización (aprox)</p>
                          <p className="text-2xl font-black text-yellow-400">{result!.timeROI} meses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs">
                    Este informe ha sido generado mediante el simulador algorítmico de RITEALMAR. Los datos son estimaciones basadas en la productividad estándar de la industria.
                  </div>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                  <p className="text-slate-300 mb-2 max-w-lg">
                    Si quieres validar este ahorro en tu empresa, podemos revisar tus procesos reales y decirte qué automatizar primero.
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
                    Solicitar auditoría gratuita <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-center mt-6">
                  <button 
                    onClick={() => setResult(null)}
                    className="text-sm text-slate-500 hover:text-cyan-400 font-medium"
                  >
                    Recalcular otros procesos
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 bg-[#0F172A] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <BarChart3 className="text-cyan-400" /> ¿Cómo calculamos este ahorro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A1628] p-6 rounded-2xl border border-white/5">
              <Bot className="text-cyan-400 mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">1. Cobertura del 70%</h3>
              <p className="text-sm text-slate-400">Nuestros <a href="/agentes-ia" onClick={(e) => handleNavigation(e, '/agentes-ia')} className="text-cyan-400 hover:underline">Agentes IA</a> están entrenados para asumir de forma autónoma hasta el 70% de las tareas mecánicas de un flujo de trabajo estándar.</p>
            </div>
            <div className="bg-[#0A1628] p-6 rounded-2xl border border-white/5">
              <MessageSquare className="text-purple-400 mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">2. Coste de Soporte</h3>
              <p className="text-sm text-slate-400">Estimamos que atender una consulta manual de un cliente toma 5 minutos de media. Los <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')} className="text-purple-400 hover:underline">chatbots</a> resuelven esto en cuestión de segundos con un coste operativo mínimo.</p>
            </div>
            <div className="bg-[#0A1628] p-6 rounded-2xl border border-white/5">
              <Zap className="text-[#FF006E] mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">3. Coste de Oportunidad</h3>
              <p className="text-sm text-slate-400">La calculadora solo refleja el ahorro directo. Al liberar horas, tu equipo facturará más o realizará mejores seguimientos comerciales.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/casos-de-uso-ia"
              onClick={(e) => handleNavigation(e, '/casos-de-uso-ia')}
              className="inline-flex items-center text-cyan-400 font-bold hover:underline"
            >
              Explorar casos de uso de IA para empresas <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué es la Calculadora de Ahorro IA para Empresas?</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              La <strong>Calculadora de Ahorro de Inteligencia Artificial (IA)</strong> es una herramienta analítica avanzada diseñada específicamente para CEOs, directores de operaciones (COO) y responsables financieros (CFO) que necesitan cuantificar el impacto económico real de digitalizar sus procesos corporativos. En el entorno empresarial actual, la adopción tecnológica ha dejado de ser un lujo para convertirse en una cuestión de supervivencia. Esta herramienta traduce el tiempo humano invertido en tareas repetitivas (como el data entry, la gestión de correos electrónicos o la facturación manual) en <strong>pérdidas económicas reales</strong>, proyectando cuánto dinero puede recuperar la empresa al delegar estas operaciones en sistemas autónomos y <a href="/servicios/agentes-ia" onClick={(e) => handleNavigation(e, '/servicios/agentes-ia')} className="text-cyan-400 hover:underline">Agentes de Inteligencia Artificial</a>.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para qué sirve evaluar el Retorno de Inversión (ROI) en automatización?</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              La principal barrera para la transformación digital en las organizaciones no es la tecnología, sino la incertidumbre financiera. Medir el ROI sirve para justificar cualquier inversión en software o consultoría tecnológica ante la junta directiva. Al utilizar este simulador financiero, los responsables pueden:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
              <li><strong>Priorizar presupuestos:</strong> Saber exactamente qué departamento (Ventas, Administración, Atención al Cliente) está quemando más capital en tareas manuales.</li>
              <li><strong>Mitigar el riesgo:</strong> Descubrir que una inversión inicial de 5.000€ en automatización puede generar ahorros anuales superiores a los 60.000€, reduciendo el periodo de amortización a apenas unas semanas.</li>
              <li><strong>Redireccionar el talento humano:</strong> Visualizar el volumen exacto de "horas liberadas" que el equipo puede reinvertir en tareas de alto valor cognitivo, como la estrategia, la negociación o la innovación.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué problemas estructurales resuelve esta herramienta?</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              El tejido empresarial adolece de ineficiencias silenciosas que destruyen los márgenes de beneficio a final de año. La calculadora de RITEALMAR arroja luz sobre los siguientes problemas críticos:
            </p>
            <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">1. El "Data Entry" y los Silos de Información</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Pasar datos de un Excel a un CRM, o de un PDF a un software de facturación, es un proceso que consume cientos de horas mensuales. Este problema no solo ralentiza la operativa, sino que genera un alto riesgo de error humano. Nuestra tecnología de <a href="/servicios/automatizacion-procesos" onClick={(e) => handleNavigation(e, '/servicios/automatizacion-procesos')} className="text-cyan-400 hover:underline">automatización de procesos (RPA)</a> soluciona este cuello de botella de forma radical.
            </p>
            <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">2. Sobrecarga en Atención al Cliente</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Tener a personal cualificado respondiendo preguntas repetitivas ("¿dónde está mi pedido?", "¿cuál es el horario?") es financieramente ineficiente. Las consultas repetitivas ahogan la escalabilidad. Desplegar <a href="/chatbots-ia" onClick={(e) => handleNavigation(e, '/chatbots-ia')} className="text-cyan-400 hover:underline">Chatbots de IA omnicanal</a> permite absorber hasta el 80% de estas interacciones sin incrementar los costes de personal.
            </p>
            <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">3. Escalabilidad Bloqueada</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Muchas pymes no pueden captar más clientes porque su estructura operativa colapsaría. Al calcular el ahorro y automatizar, el coste marginal de atender a un nuevo cliente tiende a cero, permitiendo un crecimiento exponencial sin necesidad de multiplicar la plantilla.
            </p>
          </div>
          <div className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">¿Cómo utilizar esta herramienta paso a paso?</h2>
            <ol className="list-decimal pl-6 space-y-4 text-slate-400 text-lg">
              <li><strong>Introduce el tamaño de tu equipo:</strong> Selecciona cuántos empleados están involucrados en tareas administrativas, operativas o de soporte (aquellas susceptibles de ser automatizadas).</li>
              <li><strong>Calcula las horas repetitivas:</strong> Sé honesto. ¿Cuántas horas a la semana pasa tu equipo copiando/pegando, revisando buzones de email genéricos o generando reportes a mano? (La media suele ser de 10 a 15 horas por empleado/semana).</li>
              <li><strong>Establece el coste laboral:</strong> Define el coste medio por hora de tu plantilla (incluyendo salarios, seguros sociales y costes fijos).</li>
              <li><strong>Mide el volumen de consultas:</strong> Si tienes un departamento de soporte o ventas B2C, indica cuántas interacciones repetitivas mensuales afrontáis.</li>
              <li><strong>Pulsa "Generar Informe de Ahorro":</strong> El motor lógico procesará las variables cruzándolas con una base de eficiencia del 70% (el estándar que alcanzan nuestros algoritmos).</li>
            </ol>
          </div>
          <div className="space-y-6 bg-cyan-950/20 border border-cyan-900/50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Conclusión: El Coste de la Inacción Tecnológica</h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              Cada mes que pospones la modernización de tus procesos operativos, estás regalando literalmente decenas de miles de euros en costes evitables, mientras tus competidores directos ya operan de forma automatizada.
            </p>
            <div className="text-center md:text-left">
              <a href="/auditoria-ia-gratis" onClick={(e) => handleNavigation(e, '/auditoria-ia-gratis')} className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                Solicitar auditoría gratuita <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes de Rentabilidad</h2>
            <p className="text-slate-400">Analiza el Retorno de Inversión detrás de la Inteligencia Artificial.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#0A1628] rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white">
                  <span className="pr-6">{faq.q}</span>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                    <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
