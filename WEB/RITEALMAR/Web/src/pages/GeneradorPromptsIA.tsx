import React, { useState } from 'react';

import SEO from '../components/SEO';
import { 
  BrainCircuit, 
  Copy, 
  RefreshCw, 
  Edit3, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  AlertCircle,
  Zap,
  MessageSquare,
  Briefcase,
  Users,
  Building2,
  Stethoscope,
  Home,
  ShoppingCart,
  HardHat,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  Activity,
  FileText
} from 'lucide-react';

export default function GeneradorPromptsIA() {
  const [category, setCategory] = useState('');
  const [objective, setObjective] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [tone, setTone] = useState('Profesional');
  const [language, setLanguage] = useState('Español');
  const [detailLevel, setDetailLevel] = useState('Intermedio');
  const [aiTarget, setAiTarget] = useState('ChatGPT');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

  const categories = [
    { id: 'Atención al cliente', title: 'Atención al Cliente', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'Ventas', title: 'Ventas', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'WhatsApp', title: 'WhatsApp', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'Administración', title: 'Administración', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'RRHH', title: 'RRHH', icon: <Users className="w-5 h-5" /> },
    { id: 'Marketing', title: 'Marketing', icon: <Zap className="w-5 h-5" /> },
    { id: 'Clínicas', title: 'Clínicas', icon: <Stethoscope className="w-5 h-5" /> },
    { id: 'Inmobiliarias', title: 'Inmobiliarias', icon: <Home className="w-5 h-5" /> },
    { id: 'Ecommerce', title: 'Ecommerce', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'Constructoras', title: 'Constructoras', icon: <HardHat className="w-5 h-5" /> },
  ];

  const handleGenerate = () => {
    if (!category || !objective || !companyType) return;
    
    setIsAnalyzing(true);
    setGeneratedPrompt(null);
    const msgs = ['Analizando contexto...', 'Ajustando tono corporativo...', 'Optimizando para modelo IA...', 'Generando prompt experto...'];
    let step = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      step++;
      if (step < msgs.length) setLoadingMsg(msgs[step]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      
      let toneInstruction = '';
      if (tone === 'Profesional') toneInstruction = 'Mantén un tono profesional, claro y corporativo.';
      if (tone === 'Persuasivo') toneInstruction = 'Usa un tono altamente persuasivo, enfocado en beneficios y cierres de venta.';
      if (tone === 'Cercano') toneInstruction = 'Habla de forma cercana, empática y amigable, conectando emocionalmente.';

      let detailInstruction = '';
      if (detailLevel === 'Básico') detailInstruction = 'Sé directo y conciso. Evita la jerga innecesaria.';
      if (detailLevel === 'Intermedio') detailInstruction = 'Proporciona una respuesta estructurada con viñetas y pasos claros.';
      if (detailLevel === 'Avanzado') detailInstruction = 'Desarrolla una respuesta exhaustiva, incluyendo ejemplos, métricas, posibles objeciones y escenarios avanzados.';

      const prompt = `Actúa como un experto consultor Senior especializado en el área de [${category}] con más de 15 años de experiencia demostrable.

CONTEXTO DE LA EMPRESA:
Soy una empresa del tipo [${companyType}]. Necesito tu experiencia para resolver un desafío específico.

OBJETIVO PRINCIPAL:
Tu objetivo único y principal es: ${objective}.

INSTRUCCIONES DE ESTILO Y FORMATO:
- Idioma de respuesta: ${language}.
- Tono: ${toneInstruction}
- Nivel de profundidad: ${detailInstruction}
- Optimización: Ten en cuenta que ejecutaré este prompt en ${aiTarget}, así que adapta tus capacidades de formateo (como markdown o tablas) a lo que este modelo maneja mejor.

ENTREGABLE ESPERADO:
Por favor, antes de darme la respuesta final, hazme cualquier pregunta aclaratoria si crees que te falta contexto para darme un resultado perfecto. Si tienes todo claro, procede directamente con el resultado estructurado.`;

      setGeneratedPrompt(prompt);
    }, 2200);
  };

  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ritealmar.es/generador-prompts-ia",
        "url": "https://ritealmar.es/generador-prompts-ia",
        "name": "Generador de Prompts IA para Empresas | RITEALMAR",
        "description": "Crea instrucciones perfectas para ChatGPT, Claude y Gemini. Herramienta gratuita para generar prompts profesionales optimizados para ventas, clínicas y administración."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ritealmar.es/" },
          { "@type": "ListItem", "position": 2, "name": "Herramientas IA", "item": "https://ritealmar.es/herramientas-ia" },
          { "@type": "ListItem", "position": 3, "name": "Generador de Prompts", "item": "https://ritealmar.es/generador-prompts-ia" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Generador de Prompts IA Empresarial",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "¿Qué es un Prompt?", "acceptedAnswer": { "@type": "Answer", "text": "Un prompt es la instrucción o texto inicial que le das a una Inteligencia Artificial para que genere una respuesta o realice una tarea." } },
          { "@type": "Question", "name": "¿Por qué es importante estructurar bien un prompt?", "acceptedAnswer": { "@type": "Answer", "text": "Un buen prompt reduce alucinaciones, asegura que la IA entienda el contexto de tu empresa y genera respuestas útiles al primer intento, ahorrando mucho tiempo." } },
          { "@type": "Question", "name": "¿Este generador es gratuito?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, el Generador de Prompts de RITEALMAR es una herramienta 100% gratuita diseñada para ayudar a las empresas en su transición hacia la IA." } },
          { "@type": "Question", "name": "¿En qué IAs puedo usar estos prompts?", "acceptedAnswer": { "@type": "Answer", "text": "Los prompts generados están optimizados y testeados para funcionar en ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) y Copilot (Microsoft)." } },
          { "@type": "Question", "name": "¿Funciona para cualquier sector?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuenta con plantillas especializadas para Inmobiliarias, Clínicas, E-commerce, Constructoras, RRHH y Ventas." } },
          { "@type": "Question", "name": "¿Los datos que introduzco son guardados?", "acceptedAnswer": { "@type": "Answer", "text": "No, esta herramienta funciona localmente en tu navegador. No almacenamos tus objetivos ni datos de empresa." } },
          { "@type": "Question", "name": "¿Puedo modificar el prompt después de generarlo?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Te proporcionamos una estructura base de alto rendimiento, puedes copiarla y editar partes específicas directamente en ChatGPT." } },
          { "@type": "Question", "name": "¿Qué es el contexto en un prompt?", "acceptedAnswer": { "@type": "Answer", "text": "Es la información de fondo (quién eres, qué vendes, a quién te diriges) que la IA necesita para no dar respuestas genéricas de Wikipedia." } },
          { "@type": "Question", "name": "¿Tienen herramientas para automatizar este proceso?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Desarrollamos Agentes de IA privados que ya tienen todo el contexto de tu empresa integrado, sin necesidad de escribir prompts diarios." } },
          { "@type": "Question", "name": "¿Cómo aprendo más sobre Ingeniería de Prompts?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes visitar nuestra sección Academia IA o consultar los artículos técnicos en nuestro Blog." } }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Generador de Prompts IA para Empresas | RITEALMAR"
        description="Generador gratuito de Prompts (Instrucciones) de Inteligencia Artificial para ventas, administración y marketing. Optimizado para ChatGPT, Claude y Gemini."
        canonical="https://ritealmar.es/generador-prompts-ia"
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="pt-32 pb-24 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-medium text-sm mb-6">
            <BrainCircuit className="w-4 h-4" /> Ingeniería de Prompts B2B
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Generador de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Prompts IA</span> para Empresas
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Deja de obtener respuestas genéricas. Genera instrucciones estructuradas de nivel experto para disparar tu productividad y la de tu equipo en segundos.
          </p>
          <a href="/auditoria-ia-gratis" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Solicitar Auditoría IA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Generador App */}
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-sm">
            
            {!generatedPrompt && !isAnalyzing ? (
              <div className="space-y-10">
                {/* 1. Categoría */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400">1</span>
                    ¿En qué área quieres aplicar la IA?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {categories.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setCategory(c.id)}
                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                          category === c.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' 
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800/50'
                        }`}
                      >
                        {c.icon}
                        <span className="text-sm font-semibold">{c.id}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Formulario Contexto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400">2</span>
                      Contexto y Objetivo
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Tipo de Empresa (Contexto)</label>
                        <input 
                          type="text" 
                          placeholder="Ej: Agencia de marketing, Clínica dental..."
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          value={companyType}
                          onChange={e => setCompanyType(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">¿Qué quieres conseguir? (Objetivo)</label>
                        <textarea 
                          placeholder="Ej: Redactar un email para recuperar clientes antiguos que no han comprado en 6 meses."
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors h-24 resize-none"
                          value={objective}
                          onChange={e => setObjective(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3. Parámetros Técnicos */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400">3</span>
                      Ajustes del Modelo
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Tono</label>
                        <select 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          value={tone}
                          onChange={e => setTone(e.target.value)}
                        >
                          <option>Profesional</option>
                          <option>Persuasivo</option>
                          <option>Cercano</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Nivel de Detalle</label>
                        <select 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          value={detailLevel}
                          onChange={e => setDetailLevel(e.target.value)}
                        >
                          <option>Básico</option>
                          <option>Intermedio</option>
                          <option>Avanzado</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Idioma</label>
                        <select 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          value={language}
                          onChange={e => setLanguage(e.target.value)}
                        >
                          <option>Español</option>
                          <option>Inglés</option>
                          <option>Portugués</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">IA Destino</label>
                        <select 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          value={aiTarget}
                          onChange={e => setAiTarget(e.target.value)}
                        >
                          <option>ChatGPT</option>
                          <option>Claude</option>
                          <option>Gemini</option>
                          <option>Copilot</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={!category || !objective || !companyType || isAnalyzing}
                  className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <BrainCircuit className="w-5 h-5" />}
                  {isAnalyzing ? 'Procesando...' : 'Generar Prompt Inteligente'}
                </button>
              </div>
            ) : isAnalyzing ? (
              <div className="animate-in fade-in flex flex-col items-center justify-center text-cyan-400 p-16 text-center border border-cyan-900/50 bg-cyan-950/10 rounded-2xl h-96">
                <RefreshCw className="w-16 h-16 mb-6 animate-spin" />
                <h3 className="text-xl font-bold animate-pulse">{loadingMsg}</h3>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                
                <div id="informe-ejecutivo-prompts" className="bg-[#0b1120] border border-cyan-900/50 rounded-2xl p-8 lg:p-12 shadow-2xl relative text-left">
                  {/* Informe */}
                  <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2">Informe Ejecutivo <span className="text-cyan-400">Prompt Engineering</span></h2>
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
                        Arquitectura de instrucciones avanzadas generada para el departamento de {categories.find(c=>c.id===category)?.title}. El prompt estructurado garantiza consistencia de marca y respuestas de alta precisión de los Modelos de Lenguaje (LLMs).
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> Diagnóstico</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        El uso actual de prompts no estructurados por parte del equipo expone a la empresa a respuestas robóticas, fuga de productividad y "alucinaciones" de la IA en la categoría de {categories.find(c=>c.id===category)?.title}.
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Riesgos de Inacción</h4>
                      <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                        <li>Uso de IA "Shadow IT" sin protocolos por parte de los empleados.</li>
                        <li>Inconsistencia en el tono corporativo de cara a clientes.</li>
                        <li>Brechas de privacidad al compartir datos no anonimizados.</li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5"/> Oportunidades</h4>
                      <ul className="text-slate-300 text-sm leading-relaxed space-y-1 list-disc pl-4">
                        <li>Estandarización de toda la comunicación de {categories.find(c=>c.id===category)?.title}.</li>
                        <li>Ahorro estimado del 40% del tiempo de redacción.</li>
                        <li>Despliegue futuro de Agentes Autónomos con esta lógica.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl mb-8">
                    <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Arquitectura de Prompt Generada</h4>
                    <div className="bg-black/50 rounded-xl p-6 border border-white/5 relative group font-mono text-sm leading-relaxed text-slate-300">
                      <pre className="whitespace-pre-wrap">{generatedPrompt}</pre>
                      <button
                        onClick={handleCopy}
                        className="absolute top-4 right-4 p-2 bg-[#0A1628] border border-white/10 hover:border-cyan-500 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copiar prompt"
                      >
                        {copied ? <CheckCircle2 className="text-emerald-400" /> : <Copy />}
                      </button>
                    </div>
                    <p className="text-xs text-yellow-500 mt-4">
                      * Recuerda sustituir los datos entre corchetes [ ] antes de usar el prompt.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2"><Target className="w-5 h-5"/> Prioridades</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Distribuir esta instrucción entre el equipo de {categories.find(c=>c.id===category)?.title} y evaluar la posibilidad de automatizar este flujo directamente vía API en vuestro CRM.
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-cyan-400"/> Próximos Pasos</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Auditoría IA con RITEALMAR para encapsular estos prompts en flujos automatizados de extremo a extremo.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs">
                    Informe de Prompt Engineering generado por el simulador de RITEALMAR. Documento confidencial.
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                  <p className="text-slate-300 mb-2 max-w-lg">
                    Un buen prompt ayuda, pero una automatización completa puede convertir este proceso en un flujo repetible para tu equipo.
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
                    Analizar automatización con IA <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="text-center mt-6">
                  <button 
                    onClick={() => setGeneratedPrompt(null)}
                    className="text-sm text-slate-500 hover:text-cyan-400 font-medium"
                  >
                    Generar otra arquitectura
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Bloque Educativo */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
              <BookOpen className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Estructura del Prompt</h3>
              <p className="text-slate-400 leading-relaxed">
                Un prompt empresarial jamás debe ser una simple pregunta. Requiere un **Rol** (quién es la IA), un **Contexto** (tu empresa), una **Tarea** (qué quieres) y un **Formato** (cómo lo quieres).
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
              <AlertCircle className="w-10 h-10 text-red-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Errores Comunes</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✕</span> No dar contexto sobre la empresa.</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✕</span> Hacer preguntas cerradas (sí/no).</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✕</span> Pedir múltiples tareas no relacionadas a la vez.</li>
              </ul>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
              <CheckCircle className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Buenas Prácticas</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Pide a la IA que te haga preguntas antes de empezar.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Limita la longitud de la respuesta si es necesario.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Solicita la respuesta en formato tabla o viñetas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Long Form Content */}
        <section className="relative z-10 py-24 px-6 bg-[#030712] border-t border-slate-800/50 mt-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué es el Generador de Prompts IA para Empresas?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El <strong>Generador de Prompts Empresariales</strong> es una herramienta de ingeniería de instrucciones estructuradas. Un "Prompt" es el comando o texto de entrada que le damos a una Inteligencia Artificial (como ChatGPT, Claude o Gemini) para que realice una tarea. Sin embargo, el 90% de los profesionales utilizan instrucciones pobres, vagas o carentes de contexto, obteniendo como resultado respuestas genéricas, alucinaciones o contenido inutilizable a nivel corporativo. Esta herramienta soluciona ese problema construyendo arquitecturas de <em>Prompt Engineering</em> de alto nivel.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Al seleccionar tu sector, objetivo y nivel de detalle, nuestro motor ensambla de forma dinámica una instrucción parametrizada que fuerza a la IA a adoptar un rol específico, utilizar un tono de marca determinado y entregar los datos en el formato exacto que tu empresa necesita (tablas, código, informes ejecutivos, etc).
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para qué sirve la Ingeniería de Prompts (Prompt Engineering)?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Dominar cómo hablar con las máquinas es la habilidad más rentable de la década. Esta herramienta sirve para estandarizar la forma en la que tu equipo interactúa con la tecnología, garantizando:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-400 text-lg">
                <li><strong>Consistencia de Marca:</strong> Evitar que cada empleado genere textos con tonos radicalmente distintos. El generador ancla el tono (Profesional, Persuasivo, Técnico).</li>
                <li><strong>Eficiencia Operativa:</strong> Reducir el tiempo que un trabajador pasa "peleándose" con ChatGPT intentando que le dé la respuesta correcta tras 10 intentos fallidos. Un prompt perfecto genera la respuesta perfecta a la primera.</li>
                <li><strong>Reducción de Alucinaciones:</strong> Al estructurar el prompt con delimitadores y contexto claro, se minimiza el riesgo de que la IA invente datos (alucinaciones), algo vital en departamentos legales o financieros.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué problemas resuelve en el día a día corporativo?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                La fricción en la adopción de IA suele venir del desconocimiento técnico. Este generador elimina la curva de aprendizaje resolviendo problemas como:
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">1. El "Síndrome del Folio en Blanco"</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Los equipos saben que la IA puede ayudarles a redactar un protocolo de RRHH o un email de ventas en frío, pero no saben cómo empezar a pedírselo. El generador actúa como un arquitecto que construye los cimientos.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">2. Respuestas Robóticas y Genéricas</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                El mayor quejido sobre ChatGPT es que "suena a robot". Esto solo ocurre cuando el prompt es deficiente. Nuestro generador inyecta variables de <em>Roleplay</em> (ej: "Actúa como un Copywriter Senior experto en B2B") que transforman la calidad semántica del texto resultante.
              </p>
              <h3 className="text-2xl font-bold text-slate-200 mt-8 mb-4">3. Fuga de Productividad</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Si un departamento de ventas requiere que sus comerciales envíen 50 correos hiper-personalizados al día, no pueden depender de que cada comercial diseñe sus propios prompts. Necesitan un sistema centralizado. (Para ir más allá, recomendamos implantar <a href="/servicios/agentes-ia" className="text-cyan-400 hover:underline">Agentes de IA autónomos</a> que realicen esta tarea sin intervención humana).
              </p>
            </div>

            <div className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">¿Cómo utilizar esta herramienta paso a paso?</h2>
              <ol className="list-decimal pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>Elige tu Categoría:</strong> Selecciona el departamento (Ventas, RRHH, Clínicas...). Esto carga la semántica base del sector.</li>
                <li><strong>Define el Objetivo:</strong> Sé específico. No pongas "escribir email". Pon: "Redactar secuencia de 3 emails de seguimiento para clientes que solicitaron presupuesto pero no respondieron".</li>
                <li><strong>Tipo de Empresa y Tono:</strong> Define tu identidad corporativa para que la IA mimetice vuestra voz.</li>
                <li><strong>IA de Destino:</strong> ¿Usas Claude 3.5 Sonnet para programación o ChatGPT para marketing? El generador adapta ligeros matices dependiendo del LLM final.</li>
                <li><strong>Copia y Pega:</strong> El resultado incluirá corchetes `[como este]` para que rellenes tus datos confidenciales antes de enviarlo a la IA, asegurando la privacidad de la información.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Cómo interpretar y usar el resultado?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El prompt generado estará dividido en bloques lógicos: <strong>Rol, Contexto, Tarea, Restricciones y Formato de Salida</strong>. 
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                <strong>IMPORTANTE:</strong> Nunca introduzcas datos personales, contraseñas o balances financieros no ofuscados en modelos de IA públicos. Rellena los huecos del prompt generado asegurando el cumplimiento de la GDPR. Si necesitas privacidad total, en RITEALMAR implementamos LLMs privados <em>in-house</em> para corporaciones; consúltalo solicitando una <a href="/auditoria-ia-gratis" className="text-cyan-400 hover:underline">Auditoría IA gratuita</a>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Casos Reales de Éxito usando Prompts Avanzados</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                El Prompt Engineering correcto cambia las reglas del juego:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-slate-400 text-lg">
                <li><strong>Soporte al Cliente Omnicanal:</strong> Un equipo de atención al cliente utilizaba prompts básicos para responder incidencias. Al pasar a usar <em>Mega-Prompts</em> estructurados, lograron que ChatGPT devolviera respuestas legales perfectas. Luego, conectaron ese prompt a un <a href="/chatbots-ia" className="text-cyan-400 hover:underline">Chatbot de WhatsApp</a> automatizando el 70% de las consultas.</li>
                <li><strong>Creación de Contenido Inmobiliario:</strong> Escribir descripciones atractivas para 500 viviendas era un calvario. Con un prompt avanzado que incluía variables de geolocalización y SEO, el tiempo de redacción cayó de semanas a horas. <a href="/casos-exito/inmobiliaria-ia" className="text-cyan-400 hover:underline">Ver caso Inmobiliario</a>.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Errores más habituales al crear Prompts</h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                      <th className="p-4 text-cyan-400 font-bold">Error Común</th>
                      <th className="p-4 text-cyan-400 font-bold">Por qué falla</th>
                      <th className="p-4 text-cyan-400 font-bold">Solución (Lo que hace esta app)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Asumir contexto</td>
                      <td className="p-4">La IA no sabe quién eres ni qué vendes. Si no se lo dices, inventa.</td>
                      <td className="p-4">Inyectar un bloque de contexto previo a la tarea.</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-4 font-bold">Instrucciones Negativas ("No hagas...")</td>
                      <td className="p-4">Los LLMs no procesan bien las negaciones y suelen acabar haciendo justo lo prohibido.</td>
                      <td className="p-4">Usar lenguaje afirmativo ("En su lugar, haz X").</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Falta de formato final</td>
                      <td className="p-4">La IA escupe un muro de texto infumable.</td>
                      <td className="p-4">Exigir formato: Markdown, Tablas, JSON o CSV.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios de implantar flujos de trabajo con IA</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Fomentar el uso estructurado de IA en tu plantilla aumenta radicalmente la productividad por empleado. Las tareas cognitivas de bajo nivel (resumir, reformatear, clasificar, redactar borradores) quedan delegadas a la máquina, permitiendo al talento humano brillar en la fase de edición, estrategia y negociación interpersonal. Aprende más en nuestra sección de <a href="/recursos-ia" className="text-cyan-400 hover:underline">Recursos Gratuitos</a>.
              </p>
            </div>

            <div className="space-y-6 bg-cyan-950/20 border border-cyan-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Siguiente Nivel: De Prompts a Agentes Autónomos</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                Escribir buenos prompts manualmente es solo el Nivel 1. El verdadero ROI exponencial se consigue cuando encapsulas esos prompts perfectos dentro de código de programación (Python/Node) y creas integraciones automáticas. En ese punto, el sistema ejecuta los prompts de forma invisible y 24/7 sin que ningún humano tenga que entrar a ChatGPT. Eso es lo que en RITEALMAR llamamos "Automatización Robótica + IA Cognitiva".
              </p>
              <div className="text-center md:text-left">
                <a href="/servicios/automatizacion-procesos" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Descubrir la Automatización Total <ArrowRight size={16} />
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
              { t: "Academia", u: "/academia-ia" },
              { t: "Recursos", u: "/recursos-ia" },
              { t: "Blog", u: "/blog" },
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
