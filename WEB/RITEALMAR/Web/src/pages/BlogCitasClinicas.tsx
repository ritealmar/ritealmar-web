import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { ChevronRight, Stethoscope, MessageSquare, Database, CheckCircle2, ArrowRight, Zap, BrainCircuit, Activity, Clock, ShieldAlert } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import TambienTePuedeInteresar from '../components/TambienTePuedeInteresar';

export default function BlogCitasClinicas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "¿Puede la Inteligencia Artificial agendar citas directamente en nuestro software médico actual?",
      answer: "Sí. Si utilizáis un software de gestión de clínicas (como Clinic Cloud, Archivex, DriCloud, etc.) que disponga de una API abierta, nuestros sistemas de IA pueden leer los huecos libres en tiempo real y escribir la nueva cita directamente en la agenda del doctor correspondiente, sin intervención humana."
    },
    {
      question: "¿Qué ocurre si el paciente tiene una urgencia médica y está hablando con el chatbot?",
      answer: "Nuestros agentes conversacionales están programados con protocolos de 'Human-in-the-loop'. Si la IA detecta palabras clave de urgencia, dolor severo, o si simplemente el paciente solicita hablar con un humano, la conversación se transfiere instantáneamente al equipo de recepción con una alerta prioritaria."
    },
    {
      question: "¿Cumple este sistema con la Ley de Protección de Datos (RGPD) en el ámbito sanitario?",
      answer: "Absolutamente. Es nuestra máxima prioridad. Todos los datos de salud se procesan bajo estrictos estándares de encriptación. Utilizamos bases de datos seguras y garantizamos que la información de tus pacientes nunca se utiliza para entrenar modelos de IA públicos. El sistema está diseñado 100% compliant con la normativa europea."
    },
    {
      question: "¿Los pacientes de edad avanzada saben utilizar estos sistemas automatizados?",
      answer: "La clave está en la interfaz. Al integrar la automatización a través de WhatsApp, estamos utilizando una herramienta que ya maneja casi el 100% de la población, independientemente de su edad. Al ser IA conversacional, el paciente no tiene que navegar por menús complejos, solo debe escribir o enviar un audio pidiendo su cita de forma natural."
    },
    {
      question: "¿Cuánto se reduce el ausentismo (no-shows) con estos recordatorios automatizados?",
      answer: "En nuestra experiencia, la implementación de un sistema de recordatorios inteligentes por WhatsApp, con confirmación a 48 y 24 horas, reduce la tasa de inasistencia (no-shows) entre un 40% y un 60%. Si el paciente cancela, el sistema avisa a la lista de espera automáticamente."
    },
    {
      question: "¿Cuánto cuesta implementar una automatización de citas con IA en mi clínica?",
      answer: "El coste depende del volumen de pacientes y la complejidad de la integración con tu software actual. Sin embargo, el Retorno de Inversión (ROI) suele producirse en el primer o segundo mes, simplemente contando las horas ahorradas en llamadas y la facturación recuperada de los huecos vacíos que la IA logra llenar."
    },
    {
      question: "¿El chatbot puede explicar tratamientos o dar presupuestos?",
      answer: "Sí, podemos entrenar al Agente IA con los PDFs de vuestros tratamientos, tarifas base y preguntas frecuentes. De esta forma, el chatbot puede resolver dudas sobre en qué consiste un implante, qué preparación requiere una ecografía, o cuáles son las opciones de financiación antes de que el paciente llegue a la clínica."
    },
    {
      question: "¿Cómo empezamos la transición hacia una clínica automatizada?",
      answer: "El primer paso no es instalar software a ciegas, sino analizar tus procesos actuales. Por eso ofrecemos una Auditoría IA gratuita, donde mapeamos cómo recibe tu clínica las peticiones y diseñamos un flujo de automatización a medida sin interrumpir tus operaciones diarias."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Automatización de citas para clínicas médicas con Inteligencia Artificial",
    "description": "Guía definitiva B2B para propietarios y gerentes de clínicas sobre cómo reducir el ausentismo y automatizar la gestión de pacientes con IA y WhatsApp.",
    "author": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "url": "https://ritealmar.es"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RITEALMAR",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ritealmar.es/logo-fondo.webp"
      }
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ritealmar.es/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://ritealmar.es/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "IA para Clínicas",
        "item": "https://ritealmar.es/blog/automatizacion-citas-clinicas-ia"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030712] relative">
      <SEO 
        title="Automatización de citas en Clínicas con IA | RITEALMAR"
        description="Descubre cómo automatizar la gestión de citas médicas, reducir ausentismo y escalar la facturación de tu clínica mediante Inteligencia Artificial."
        canonical="https://ritealmar.es/blog/automatizacion-citas-clinicas-ia"
      />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-cyan-900/20 via-[#030712] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#FF006E]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative pt-32 pb-16 px-6 max-w-4xl mx-auto z-10 text-center">
        <nav className="flex justify-center items-center gap-2 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <ChevronRight size={14} />
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <ChevronRight size={14} />
          <span className="text-cyan-400 truncate max-w-[200px] md:max-w-none">Automatización de Citas Médicas</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
          <Stethoscope size={14} /> Guía Práctica para Clínicas
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
          Automatización de citas para clínicas médicas con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF006E]">Inteligencia Artificial</span>
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400 mb-8">
          <span>Por RITEALMAR IA</span>
          <span>•</span>
          <span>Lectura estimada: 15 min</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative px-6 max-w-3xl mx-auto z-10 pb-32">
        
        {/* Índice */}
        <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Database className="text-cyan-400" size={20} /> Índice de contenidos
          </h2>
          <ul className="space-y-3 text-slate-300 font-medium">
            <li><a href="#introduccion" className="hover:text-cyan-400 transition-colors">1. Introducción: El problema del ausentismo y la saturación</a></li>
            <li><a href="#que-es" className="hover:text-cyan-400 transition-colors">2. ¿Qué es realmente automatizar con IA?</a></li>
            <li><a href="#chatbots" className="hover:text-cyan-400 transition-colors">3. Chatbots conversacionales: Mucho más que botones</a></li>
            <li><a href="#whatsapp" className="hover:text-cyan-400 transition-colors">4. El papel fundamental de WhatsApp Business API</a></li>
            <li><a href="#automatizacion" className="hover:text-cyan-400 transition-colors">5. Automatización de procesos de Back-Office</a></li>
            <li><a href="#comparativa" className="hover:text-cyan-400 transition-colors">6. Comparativa: Recepción Tradicional vs. IA</a></li>
            <li><a href="#errores" className="hover:text-cyan-400 transition-colors">7. Los 5 errores al digitalizar una clínica</a></li>
            <li><a href="#beneficios" className="hover:text-cyan-400 transition-colors">8. Beneficios cuantificados: El ROI de la IA</a></li>
            <li><a href="#caso-practico" className="hover:text-cyan-400 transition-colors">9. Caso práctico completo</a></li>
            <li><a href="#faq" className="hover:text-cyan-400 transition-colors">10. Preguntas Frecuentes (FAQ)</a></li>
          </ul>
        </div>

        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-cyan-500">
          
          <h2 id="introduccion" className="text-3xl mt-12 mb-6">1. El problema crítico: Saturación en recepción y ausentismo de pacientes</h2>
          <p>
            Cualquier gerente o propietario de una clínica dental, fisioterapia, estética o medicina general se enfrenta a diario a la misma pesadilla operativa. El teléfono de la clínica no deja de sonar, la sala de espera está llena y el personal de recepción se encuentra desbordado intentando atender a los pacientes presenciales mientras encaja citas telefónicas en una agenda que parece un rompecabezas.
          </p>
          <p>
            Esta saturación genera dos fugas masivas de capital para tu negocio. Por un lado, la <strong>pérdida de captación</strong>: pacientes que llaman, encuentran la línea comunicando y terminan llamando a la clínica de la competencia. Por otro lado, el temido <strong>ausentismo o "no-shows"</strong>: pacientes que agendan a semanas vista, olvidan su cita y dejan al doctor con un hueco de 45 minutos que no produce facturación, pero sí genera costes fijos.
          </p>
          <p>
            Para resolver este cuello de botella, la solución tradicional consistía en contratar más personal administrativo. Hoy, en pleno 2026, la solución más rentable, escalable y eficiente para las <a href="/clinicas">clínicas y centros médicos</a> es la integración estratégica de la <strong>Inteligencia Artificial y la Automatización de Procesos</strong>.
          </p>

          <h2 id="que-es" className="text-3xl mt-12 mb-6">2. ¿Qué es realmente automatizar las citas médicas con IA?</h2>
          <p>
            Automatizar no es instalar un formulario de contacto aburrido en tu página web esperando a que el paciente lo rellene para que luego la recepcionista tenga que llamarle al día siguiente. 
          </p>
          <p>
            Automatizar con Inteligencia Artificial significa desplegar un <strong>empleado digital</strong>. Un sistema de <a href="/servicios/automatizacion-procesos">automatización de procesos</a> capaz de interactuar con el paciente en lenguaje natural, comprender qué especialidad o doctor necesita, leer los huecos libres en tu software médico (como Clinic Cloud o DriCloud), y fijar la reserva en tiempo real sin ninguna intervención humana. Todo ello sincronizado en milisegundos y con total cumplimiento de la Ley de Protección de Datos.
          </p>
          <p>
            La IA no se cansa, no comete errores de transcripción, y está dispuesta a atender a un paciente que sufre un dolor de muelas a las 3 de la madrugada de un domingo, dejándole la cita reservada para la primera hora del lunes.
          </p>

          <h2 id="chatbots" className="text-3xl mt-12 mb-6">3. Chatbots Conversacionales de IA: Mucho más que botones</h2>
          <p>
            Hace unos años, la idea de un "bot" causaba rechazo. Eran sistemas rígidos que obligaban al paciente a pulsar "1 para citas", "2 para urgencias", creando frustración cuando el paciente tenía una duda compleja.
          </p>
          <p>
            Los modernos <a href="/chatbots-ia">chatbots con Inteligencia Artificial Generativa</a> entienden el contexto. Puedes alimentar al modelo de IA con la información de todos los tratamientos de tu clínica, precios, opciones de financiación y preparación previa para pruebas médicas.
          </p>
          <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
            <p className="m-0 text-slate-300 italic">
              <strong>Paciente:</strong> "Hola, llevo dos días con mucho dolor en la muela del juicio inferior derecha. Además soy diabético. ¿Tenéis hueco hoy por la tarde para el Doctor Martínez y qué precio tiene la extracción?"
            </p>
            <p className="mt-4 mb-0 text-cyan-400">
              <strong>Agente IA:</strong> "Hola Alejandro, lamento mucho que estés con dolor. Tomo nota de que eres paciente diabético, se lo dejaré anotado al doctor. El Dr. Martínez tiene un hueco hoy a las 17:15h y a las 19:30h. La extracción de cordales parte de 90€ según la complejidad. ¿Te reservo alguna de estas dos horas para que te vea de urgencia?"
            </p>
          </div>
          <p>
            Este nivel de empatía, exactitud y capacidad de resolución solo es posible integrando LLMs (Large Language Models) adaptados a entornos clínicos. El paciente siente que le está atendiendo un profesional humano altamente eficiente.
          </p>

          <h2 id="whatsapp" className="text-3xl mt-12 mb-6">4. El papel fundamental de WhatsApp Business API</h2>
          <p>
            El canal donde ocurre la magia es, sin lugar a dudas, WhatsApp. En el entorno B2C (y cada vez más en el B2B), los correos electrónicos se pierden en bandejas de spam y las llamadas telefónicas interrumpen. WhatsApp tiene una tasa de apertura superior al 95%.
          </p>
          <p>
            Mediante la conexión oficial de la API de WhatsApp, la clínica puede enviar <strong>recordatorios automáticos</strong> 48 horas y 24 horas antes de la cita. 
          </p>
          <ul>
            <li>Si el paciente responde "Confirmar", la cita se bloquea en el CRM.</li>
            <li>Si el paciente responde "Cancelar", el sistema libera el hueco en la agenda.</li>
            <li><strong>La ventaja clave:</strong> Inmediatamente tras la cancelación, el sistema de IA revisa la <em>lista de espera</em> y envía un WhatsApp a los pacientes pendientes ofreciéndoles el hueco recién liberado. Un hueco perdido se convierte en facturación recuperada en cuestión de minutos.</li>
          </ul>

          <h2 id="automatizacion" className="text-3xl mt-12 mb-6">5. Automatización de procesos de Back-Office</h2>
          <p>
            La IA no solo asiste en la captación y en la agenda. El trabajo invisible de la clínica ("back-office") es donde más recursos se consumen. Las <a href="/servicios/automatizacion-procesos">automatizaciones avanzadas</a> permiten:
          </p>
          <ul>
            <li><strong>Onboarding del paciente:</strong> Envío automático del enlace para firmar el consentimiento informado y la LOPD desde el móvil antes de llegar a la clínica.</li>
            <li><strong>Seguimiento Post-Tratamiento (Follow-up):</strong> Envío de un mensaje automático al día siguiente de una cirugía preguntando por el dolor o la inflamación. Si el paciente responde "me duele mucho", la IA levanta una alerta roja a los doctores.</li>
            <li><strong>Fidelización y Reseñas:</strong> Tras una visita exitosa, el sistema envía automáticamente una petición amable pidiendo una reseña en Google Maps. Esto dispara tu SEO Local de forma pasiva, atrayendo aún más pacientes.</li>
          </ul>

          <h2 id="comparativa" className="text-3xl mt-12 mb-6">6. Comparativa: Recepción Tradicional vs. Recepción con IA</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] border-b border-white/10">
                  <th className="p-4 text-white font-bold">Proceso</th>
                  <th className="p-4 text-slate-400 font-bold">Recepción Tradicional</th>
                  <th className="p-4 text-[#00D4FF] font-bold">Recepción Automatizada (IA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-slate-200">Atención fuera de horario</td>
                  <td className="p-4 text-slate-400">Buzón de voz. Pérdida del paciente que acude a otra clínica de urgencia.</td>
                  <td className="p-4 text-slate-200">El paciente es atendido, resueltas sus dudas y agendado a las 3:00 AM.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-slate-200">Recordatorios de citas</td>
                  <td className="p-4 text-slate-400">La recepcionista pasa 2 horas al día llamando a pacientes uno a uno.</td>
                  <td className="p-4 text-slate-200">WhatsApp automático. 0 horas humanas invertidas. 100% de alcance.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-slate-200">Gestión de cancelaciones</td>
                  <td className="p-4 text-slate-400">Hueco vacío. El doctor no factura esa hora pero genera gasto fijo.</td>
                  <td className="p-4 text-slate-200">La IA rellena el hueco contactando con la lista de espera automáticamente.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-slate-200">Escalabilidad comercial</td>
                  <td className="p-4 text-slate-400">Si aumentan las campañas de marketing, la recepción colapsa.</td>
                  <td className="p-4 text-slate-200">La IA puede atender a 1.000 pacientes simultáneos sin tiempos de espera.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="errores" className="text-3xl mt-12 mb-6">7. Los 5 Errores Habituales al intentar Digitalizar una Clínica</h2>
          <p>Muchos gerentes fracasan en su intento de modernización porque cometen estos fallos estratégicos:</p>
          <ol>
            <li><strong>Forzar herramientas aisladas:</strong> Contratar un software de WhatsApp por un lado, una agenda por otro, y un CRM diferente, generando islas de datos que no se hablan entre sí. La automatización exige <em>integración</em>.</li>
            <li><strong>Falta de protocolo de escape:</strong> Pretender que la IA lo haga <em>todo</em>. Siempre debe existir un botón o comando para que el paciente solicite hablar con una persona del equipo (Human-in-the-loop).</li>
            <li><strong>Bots rígidos que frustran:</strong> Usar tecnología de 2018 basada en menús inflexibles que enfurecen a un paciente que solo quiere explicar que le duele la rodilla izquierda.</li>
            <li><strong>Ignorar la privacidad (RGPD):</strong> Conectar datos de salud (Especialmente protegidos) a herramientas de IA públicas como el ChatGPT gratuito es una infracción legal grave que acarrea sanciones enormes.</li>
            <li><strong>Digitalizar procesos rotos:</strong> Si tu equipo no tiene claro el protocolo de triaje de urgencias, la IA tampoco lo tendrá. Primero se estandariza el proceso, luego se automatiza.</li>
          </ol>

          <h2 id="beneficios" className="text-3xl mt-12 mb-6">8. Beneficios Cuantificados: El verdadero ROI de la IA Clínica</h2>
          <p>¿Qué ocurre numéricamente cuando una clínica implanta estas soluciones tecnológicas avanzadas? Los números, extraídos de nuestros <a href="/casos-de-exito">casos de éxito</a>, hablan por sí solos:</p>
          <ul>
            <li><strong>Reducción de No-Shows del 45% al 60%:</strong> Los pacientes simplemente no olvidan las citas si reciben un WhatsApp interactivo.</li>
            <li><strong>Ahorro de +40 horas semanales:</strong> El personal administrativo deja de hacer la tarea mecánica de "llamar para confirmar" y "copiar datos al ordenador". Un empleado a jornada completa dedicado a aportar valor real en la sala de espera.</li>
            <li><strong>Aumento del 25% en nuevas primeras visitas:</strong> Al poder captar pacientes fuera del horario laboral y domingos, acaparas la cuota de mercado de los pacientes que deciden sus temas médicos por la noche.</li>
            <li><strong>Multiplicación x5 de las Reseñas en Google:</strong> Mejorando el posicionamiento SEO local de la clínica en la ciudad, convirtiéndose en un canal de adquisición gratuito y masivo.</li>
          </ul>

          <h2 id="caso-practico" className="text-3xl mt-12 mb-6">9. Caso Práctico: De la captación inicial al sillón médico</h2>
          <p>Imaginemos el recorrido (Patient Journey) automatizado en una clínica dental avanzada:</p>
          <p>
            <strong>19:30h (Viernes):</strong> Marta ve un anuncio en Facebook sobre ortodoncia invisible. Hace clic y entra en la web.
          </p>
          <p>
            <strong>19:32h:</strong> Marta duda sobre el precio. Hace clic en el widget de WhatsApp de la web. La IA le responde inmediatamente, explicándole que existen planes desde 99€ al mes y le envía un pequeño dossier PDF con casos del 'Antes y Después' de la clínica.
          </p>
          <p>
            <strong>19:35h:</strong> Convencida, Marta solicita una cita. La IA revisa el calendario del ortodoncista y le ofrece el martes a las 11:00h o el jueves a las 17:00h. Marta elige el jueves.
          </p>
          <p>
            <strong>19:36h:</strong> La IA registra la cita en el software de la clínica, crea la ficha de paciente y le envía a Marta un enlace para que firme la política de privacidad y un cuestionario de salud previo desde su móvil.
          </p>
          <p>
            <strong>Miércoles 17:00h (24h antes):</strong> El sistema envía un recordatorio automático. Marta confirma con un simple "Sí".
          </p>
          <p>
            <strong>Viernes 10:00h (Día siguiente a la cita):</strong> El sistema envía un mensaje preguntando a Marta qué tal se encuentra tras la colocación de sus alineadores. Marta responde que genial. La IA le agradece y le proporciona un link directo para que deje 5 estrellas en Google Maps.
          </p>
          <p className="text-xl font-bold text-[#00D4FF] mt-8">
            Todo este proceso generó miles de euros en facturación para la clínica sin que la recepcionista tuviera que levantar el teléfono ni teclear un solo dato.
          </p>

          <h2 id="futuro" className="text-3xl mt-12 mb-6">10. El futuro es ahora: Escalabilidad Corporativa</h2>
          <p>
            En un mercado sanitario cada vez más competitivo, liderado por grandes cadenas y franquicias, la tecnología es la gran igualadora. Permite a las clínicas independientes operar con una eficiencia financiera y una excelencia en el servicio al cliente superior a la de las grandes corporaciones.
          </p>
          <p>
            La implementación de Agentes de IA y automatizaciones de back-office no es un gasto, es una inversión en infraestructura digital que escala de forma eficiente. Un software puede atender a 10 pacientes o a 10.000 exactamente con el mismo coste operativo y la misma amabilidad programada.
          </p>

          <h2 id="auditoria" className="text-3xl mt-16 mb-6 text-center">Inicia tu transformación digital con RITEALMAR</h2>
          
          <div className="my-10 p-10 bg-gradient-to-br from-[#0A1628] to-[#1a0a2e] border border-cyan-500/30 rounded-3xl text-center shadow-[0_0_50px_rgba(0,212,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF006E]"></div>
            <h3 className="text-3xl md:text-4xl font-black text-white mt-0 mb-6">¿Quieres instalar este sistema en tu clínica?</h3>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Cada clínica tiene sus particularidades. Por eso, en RITEALMAR no vendemos "software enlatado". Realizamos una consultoría de tus operaciones actuales y diseñamos el motor de inteligencia artificial que tu recepción necesita.
            </p>
            <a 
              href="/auditoria-ia-gratis"
              onClick={(e) => {
                e.preventDefault();
                trackEvent('cta_click', { cta_text: 'Auditoría IA Clínicas', location: 'blog_citas_clinicas' });
                window.history.pushState({}, '', '/auditoria-ia-gratis');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#FF006E] text-white font-bold text-xl tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all no-underline"
            >
              Solicitar Auditoría Técnica Gratuita <ArrowRight size={22} />
            </a>
          </div>

        </article>

        {/* FAQ Visual Section */}
        <div id="faq" className="mt-20 pt-16 border-t border-white/10">
          <h3 className="text-3xl font-black text-white text-center mb-10">Preguntas Frecuentes sobre la IA en Clínicas</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <MessageSquare className="text-cyan-400 shrink-0 mt-1" size={20} />
                  {faq.question}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <TambienTePuedeInteresar />
      </main>
    </div>
  );
}
