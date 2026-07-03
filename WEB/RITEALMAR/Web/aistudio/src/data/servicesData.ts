export interface Service {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'process-automation',
    title: 'Automatización de procesos',
    description: 'Para tareas repetitivas, flujos internos, aprobaciones, avisos, reportes y traspaso de datos administrativos.',
    benefit: 'Elimina el 60% de la carga manual.',
    icon: 'Workflow'
  },
  {
    id: 'ai-support',
    title: 'IA para atención y soporte',
    description: 'Chatbots y asistentes internos con IA para soporte comercial, posventa y clasificación de consultas.',
    benefit: 'Atención automatizada 24/7 con criterio técnico.',
    icon: 'MessageCircle'
  },
  {
    id: 'billing-doc',
    title: 'Facturación y gestión documental',
    description: 'Emisión, validación y organización automática de documentos. Adaptado a la nueva ley de factura electrónica.',
    benefit: 'Control total y seguridad legal automática.',
    icon: 'FileText'
  },
  {
    id: 'internal-apps',
    title: 'Apps internas a medida',
    description: 'Aplicaciones para técnicos y operarios: control de materiales, incidencias, partes de trabajo y visitas.',
    benefit: 'Sincronización en tiempo real desde el campo.',
    icon: 'Smartphone'
  },
  {
    id: 'connected-webs',
    title: 'Webs conectadas al negocio',
    description: 'Plataformas web integradas con tu CRM y automatizaciones de captación para ser una herramienta de ventas real.',
    benefit: 'Captación de leads 100% trazable y escalable.',
    icon: 'Globe'
  },
  {
    id: 'integrations-apis',
    title: 'Integraciones y sistemas',
    description: 'Conexión total entre tus herramientas: ERP, CRM, correo, mensajería y bases de datos personalizadas.',
    benefit: 'Datos unificados sin procesos duplicados.',
    icon: 'Database'
  }
];

export interface UseCase {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  image: string;
  metrics: string[];
  url?: string;
}

export const useCases: UseCase[] = [
  {
    id: 'case-1',
    title: 'Automatización de facturación',
    description: 'Generación automática de documentos, organización de datos y reducción de carga administrativa.',
    problem: 'Proceso manual lento con errores frecuentes en el registro fiscal.',
    solution: 'Sistema OCR y validación automática integrado con ERP.',
    metrics: ['Ahorro de 120h/mes', '0% errores fiscales', 'Acceso instantáneo'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    url: 'https://app-inventario-altri-2026.pages.dev/'
  },
  {
    id: 'case-2',
    title: 'App interna para gestión de operarios',
    description: 'Control de incidencias, materiales, reportes y seguimiento desde una sola herramienta.',
    problem: 'Partes de trabajo en papel e incomunicación en tiempo real.',
    solution: 'Aplicación web progresiva (PWA) con sincronización offline.',
    metrics: ['Trazabilidad total', 'Control de stock real', 'Reportes inmediatos'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-3',
    title: 'Chatbot para atención y captación',
    description: 'Responde consultas, filtra leads y mejora la atención sin depender siempre del equipo.',
    problem: 'Saturación en soporte y pérdida de oportunidades fuera de horario.',
    solution: 'Asistente IA entrenado con base de conocimiento propia.',
    metrics: ['80% dudas resueltas', 'Filtrado de leads 24/7', 'Atención inmediata'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-4',
    title: 'Sistema conectado web + procesos',
    description: 'Convierte la web en una herramienta activa dentro del negocio, no solo en una tarjeta de presentación.',
    problem: 'Web estática que no genera valor ni datos operativos.',
    solution: 'CMS personalizado conectado con base de datos del negocio.',
    metrics: ['Captación automatizada', 'Sincronización total', 'Dashboard integrado'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    url: 'https://facturapro.es/'
  },
  {
    id: 'case-5',
    title: 'Automatización administrativa',
    description: 'Clasificación de correos, extracción de datos y actualización automática de sistemas.',
    problem: 'Gestión manual de correos y entrada de datos duplicada.',
    solution: 'Arquitectura de agentes IA para procesamiento de flujos.',
    metrics: ['Reducción 70% manual', 'Validación automática', 'Escalabilidad real'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];
