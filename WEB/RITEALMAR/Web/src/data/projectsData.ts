export const projectsData: Record<string, any> = {
  'almar-fsm': {
    id: "almar-fsm",
    title: "ALMAR FSM",
    category: "SaaS Logístico",
    heroImage: "/almar.jpg",
    screenshots: ["/almar.jpg"],
    challenge: "ALMAR necesitaba coordinar una red de logística de campo con cientos de técnicos. El proceso dependía de llamadas telefónicas y hojas de cálculo manuales, causando retrasos, pérdida de información y tiempos de inactividad que penalizaban la rentabilidad de las rutas.",
    solution: "Desarrollamos e implementamos ALMAR FSM, un sistema de Field Service Management gestionado íntegramente por un motor de Inteligencia Artificial que automatiza la asignación de rutas, monitoriza el inventario en tiempo real y gestiona incidencias mediante chatbots integrados en WhatsApp para los técnicos.",
    features: [
      { title: "Asignación Predictiva", desc: "La IA distribuye los tickets de trabajo basándose en la ubicación, tráfico y habilidades del técnico." },
      { title: "Chatbot de Campo", desc: "Técnicos reportan incidencias directamente vía WhatsApp, y el sistema actualiza la base de datos." },
      { title: "Control de Stock", desc: "Alertas automáticas cuando el inventario en furgonetas disminuye por debajo del límite operativo." },
      { title: "Generación de Informes", desc: "PDFs automáticos con fotografías y firmas al completar los servicios." }
    ],
    stats: [
      { label: "Tiempo de Asignación", before: "45 mins", after: "Instantáneo" },
      { label: "Errores de Inventario", before: "18%", after: "0.2%" },
      { label: "Productividad Diaria", before: "4 servicios/día", after: "7 servicios/día" }
    ]
  },
  'aurentia-app': {
    id: "aurentia-app",
    title: "Aurentia App",
    category: "Aplicación Móvil / IA",
    heroImage: "/aurenta.jpg",
    screenshots: ["/aurenta.jpg"],
    challenge: "Aurentia manejaba un volumen insostenible de consultas de clientes que sobrecargaba a su equipo de soporte. Las respuestas tardaban horas y la pérdida de leads (clientes potenciales) era significativa.",
    solution: "Creamos Aurentia App, centralizando toda la atención al cliente con una IA entrenada específicamente con la documentación, políticas y catálogo de la empresa. La IA entiende el contexto de cada usuario y responde al instante de forma humana y precisa.",
    features: [
      { title: "NLP Avanzado", desc: "La IA no responde con opciones predefinidas, sino entendiendo la intención de la consulta." },
      { title: "Escalado Inteligente", desc: "Si la consulta requiere un humano, la IA transfiere la conversación con todo el contexto resumido." },
      { title: "Soporte Multicanal", desc: "Conectado a la app móvil, WhatsApp corporativo y la web." },
      { title: "Dashboard de Análisis", desc: "Métricas en tiempo real sobre los motivos de consulta más frecuentes." }
    ],
    stats: [
      { label: "Tiempo de Respuesta", before: "4 horas", after: "3 segundos" },
      { label: "Consultas Resueltas por IA", before: "0%", after: "85%" },
      { label: "Satisfacción del Cliente", before: "7.2/10", after: "9.5/10" }
    ]
  },
  'ritecore': {
    id: "ritecore",
    title: "RITECORE",
    category: "Plataforma Cloud",
    heroImage: "/ritecore.jpg",
    screenshots: ["/ritecore.jpg"],
    challenge: "La gestión del soporte técnico de nivel 1 era un cuello de botella constante. Requería demasiado personal para resolver problemas triviales, como reseteo de contraseñas o dudas comunes de hardware.",
    solution: "Lanzamos RITECORE, una plataforma cloud que automatiza el soporte técnico mediante flujos de trabajo inteligentes. La plataforma diagnostica problemas, guía al usuario paso a paso y ejecuta scripts en remoto para solucionar incidencias comunes sin intervención humana.",
    features: [
      { title: "Resolución Autónoma", desc: "Ejecución de scripts seguros desde la nube para reparar errores comunes del sistema." },
      { title: "Guías Dinámicas", desc: "La IA genera pasos visuales basados en el problema específico reportado por el usuario." },
      { title: "Soporte 24/7", desc: "Cobertura total durante noches y fines de semana sin costes de personal extra." },
      { title: "Integración con Ticketing", desc: "Conexión directa con Jira y Zendesk para trazabilidad." }
    ],
    stats: [
      { label: "Tickets Abiertos", before: "500/semana", after: "120/semana" },
      { label: "Coste por Resolución", before: "15€", after: "0.45€" },
      { label: "Tiempo de Inactividad", before: "3 horas", after: "15 minutos" }
    ]
  },
  'panel-central': {
    id: "panel-central",
    title: "Panel Central",
    category: "Dashboard Corporativo",
    heroImage: "/panel.jpg",
    screenshots: ["/panel.jpg"],
    challenge: "La directiva operaba a ciegas. Los datos financieros, de marketing y operaciones estaban dispersos en 5 plataformas diferentes, requiriendo que analistas pasaran días consolidando datos en Excel antes de poder tomar decisiones.",
    solution: "Diseñamos un 'Panel Central' hiper-conectado que unifica todas las fuentes de datos (ERPs, CRMs, pasarelas de pago, campañas publicitarias) en tiempo real, aplicando algoritmos predictivos para pronosticar ingresos y detectar anomalías de gasto.",
    features: [
      { title: "Sincronización Total", desc: "Integración vía API con más de 12 plataformas empresariales críticas." },
      { title: "Alertas Inteligentes", desc: "Avisos por Slack/Email si el coste de adquisición (CPA) de marketing sube bruscamente." },
      { title: "Reportes Automáticos", desc: "Generación de informes directivos en PDF y su envío por correo todos los viernes a las 18:00." },
      { title: "Pronóstico de Caja", desc: "La IA estima la liquidez a 30, 60 y 90 días con una precisión del 94%." }
    ],
    stats: [
      { label: "Tiempo Consolidando Datos", before: "3 días/mes", after: "0 horas" },
      { label: "Precisión de Previsión", before: "65%", after: "94%" },
      { label: "Detección de Pérdidas", before: "Mensual", after: "Tiempo Real" }
    ]
  },
  'stylio': {
    id: "stylio",
    title: "STYLIO",
    category: "SaaS Empresarial",
    heroImage: "/stylio.jpg",
    screenshots: ["/stylio.jpg"],
    challenge: "Una red de clínicas/salones de estética sufría un 25% de ausencias en sus citas ('no-shows') y perdía muchas horas intentando reagendar manualmente por teléfono, dejando huecos en sus agendas que impactaban su facturación.",
    solution: "Implementamos STYLIO, un software SaaS All-In-One con reservas inteligentes. El sistema gestiona las agendas, envía recordatorios por WhatsApp y, si un cliente cancela, un Agente IA contacta a la lista de espera automáticamente para llenar el hueco en minutos.",
    features: [
      { title: "Gestión de Reservas IA", desc: "Optimiza los huecos libres para evitar tiempos muertos entre servicios." },
      { title: "Recuperación de Citas", desc: "Automatización de WhatsApp para ofrecer los huecos cancelados a otros clientes al instante." },
      { title: "Marketing Automatizado", desc: "Mensajes promocionales a clientes que no han acudido en más de 2 meses." },
      { title: "TPV Integrado", desc: "Cobros, facturación y cálculo de comisiones para el personal en una sola plataforma." }
    ],
    stats: [
      { label: "Ausencias (No-shows)", before: "25%", after: "4%" },
      { label: "Huecos Recuperados", before: "10%", after: "92%" },
      { label: "Aumento Facturación", before: "-", after: "+31%" }
    ]
  },
  'facade-ai-pro': {
    id: "facade-ai-pro",
    title: "Facade AI Pro",
    category: "SaaS Enterprise",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    screenshots: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
    challenge: "El análisis de fachadas para la rehabilitación energética de edificios dependía de inspecciones visuales en papel y cálculos manuales de ventanas y daños. Los técnicos pasaban más tiempo redactando informes que en el campo, generando retrasos y errores.",
    solution: "Creamos Facade AI Pro, una plataforma Enterprise impulsada por Visión Artificial. El sistema permite subir fotos de la fachada y automáticamente segmenta ventanas, detecta daños, y calcula superficies netas deduciendo huecos, generando mediciones exactas según el Código Técnico de la Edificación.",
    features: [
      { title: "Visión Artificial (IA)", desc: "Detección interactiva y segmentación automática de ventanas, balcones y daños." },
      { title: "Generación de Informes", desc: "Creación instantánea de memorias técnicas y presupuestos exportables." },
      { title: "Gemelo Digital 3D", desc: "Integración con modelos 3D y visualización de andamios y precios." },
      { title: "Cálculo Automático", desc: "Cotizador avanzado que estima superficies, materiales y costes al instante." }
    ],
    stats: [
      { label: "Tiempo de Análisis", before: "4 horas", after: "3 minutos" },
      { label: "Precisión de Medición", before: "75%", after: "98%" },
      { label: "Eficiencia del Técnico", before: "2 visitas/día", after: "10 visitas/día" }
    ]
  },
  'rehab-ia-web': {
    id: "rehab-ia-web",
    title: "Rehab-IA Web",
    category: "Portal Web B2B",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    screenshots: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
    challenge: "Rehab-IA necesitaba una carta de presentación digital B2B para demostrar la potencia de su ecosistema SaaS a grandes empresas constructoras y de gestión de fincas.",
    solution: "Diseñamos un portal corporativo altamente optimizado para la captación de leads. Con una interfaz limpia y orientada a la conversión, explica los beneficios de la aplicación y captura datos de posibles clientes de forma automatizada.",
    features: [
      { title: "Arquitectura SEO", desc: "Estructura diseñada para dominar las búsquedas de 'software de rehabilitación'." },
      { title: "Conversión B2B", desc: "Formularios dinámicos que envían la información directamente al CRM de ventas." },
      { title: "Diseño Premium", desc: "Estética corporativa que transmite confianza a perfiles ejecutivos (Directores de Obra)." },
      { title: "Rendimiento Core", desc: "Tiempos de carga inferiores a 0.8s para evitar el abandono de la página." }
    ],
    stats: [
      { label: "Captación B2B", before: "Boca a boca", after: "+45 Leads/mes" },
      { label: "Tiempo de Carga", before: "4.2s", after: "0.6s" },
      { label: "Tasa de Conversión", before: "0.8%", after: "3.4%" }
    ]
  }
};
