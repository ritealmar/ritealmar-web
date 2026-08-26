import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { CheckCircle2, ShieldCheck, Database, LayoutDashboard, Shuffle, HardDrive, ArrowRight, Server, Wrench } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function CrmAMedida() {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title?: string; subtitle?: string; submitText?: string }>({ isOpen: false });

  return (
    <>
      <ServiceLayout 
        title="CRM a Medida para PYMES"
        subtitle="Digitalizamos y centralizamos toda tu empresa en un software en la nube 100% tuyo, diseñado para adaptarse a tus flujos reales y no al revés."
        onOpenCalendly={(config) => setModalConfig({ isOpen: true, ...(config || {}) })}
        seoTitle="CRM a Medida para PYMES | Desarrollo CRM | RITEALMAR"
        seoDesc="Desarrollo de CRM a medida para PYMES. Integramos tus ventas, facturación y clientes en un sistema único. No pagues licencias por usuario. Solicita auditoría."
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es un CRM a Medida?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              Un CRM (Customer Relationship Management) a medida es un software desarrollado específicamente para la forma de trabajar de tu empresa. A diferencia de las soluciones estándar del mercado, un sistema personalizado se moldea en torno a tus flujos operativos exactos, unificando ventas, facturación, atención al cliente y producción en un solo panel de control.
            </p>
            <p className="font-medium leading-relaxed">
              En RITEALMAR construimos plataformas sólidas en la nube que son propiedad de tu empresa. Al evitar el modelo SaaS tradicional, no pagas licencias por cada nuevo empleado. Sin embargo, debes contemplar que existirán costes recurrentes operativos asociados al hosting (alojamiento en la nube), mantenimiento técnico e integraciones de terceros.
            </p>
          </div>
        </section>

        {/* Cuándo Estándar vs A medida */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#FF006E]">¿Cuándo usar un CRM estándar (HubSpot, Pipedrive...)?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Si tu proceso de ventas es tradicional (lead, contacto, reunión, propuesta, cierre).</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Si tu equipo es muy pequeño (1-3 comerciales) y el coste de licencias es bajo.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Si necesitas arrancar a vender de forma inmediata (esta misma tarde).</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Si no tienes procesos operativos que conectar al cierre de la venta (producción, logística).</span></li>
              </ul>
              <p className="mt-6 text-sm text-slate-400">Son herramientas excelentes, muy completas y probadas mundialmente para gestión comercial pura.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#00D4FF]">¿Cuándo tiene sentido un CRM a Medida?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF] mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Cuando tienes que adaptar tu empresa al programa, en lugar del programa a tu empresa.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF] mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Cuando pagas decenas de licencias de usuario al mes y el coste anual es altísimo.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF] mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Cuando necesitas que el CRM conecte ventas directamente con partes de trabajo, stock o presupuestos técnicos muy específicos.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF] mt-1 shrink-0" /> <span className="text-slate-300 font-medium">Cuando utilizas 4 programas diferentes para gestionar el mismo cliente porque ninguno lo hace todo.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problemas que Resuelve */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Problemas del día a día que solucionamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl glass-card border border-white/10 group">
              <Database className="w-8 h-8 text-[#FF006E] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#FF006E] transition-colors">Silos de Información</h3>
              <p className="text-slate-400 font-medium text-sm">Ventas usa un programa, administración usa otro y operaciones trabaja en Excel. El CRM centraliza el dato único.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-white/10 group">
              <Shuffle className="w-8 h-8 text-[#00D4FF] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#00D4FF] transition-colors">Retrabajo Administrativo</h3>
              <p className="text-slate-400 font-medium text-sm">Tener que copiar los datos del cliente desde el correo, al CRM, y luego al programa de facturación manualmente.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-white/10 group">
              <LayoutDashboard className="w-8 h-8 text-[#00FF9D] mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#00FF9D] transition-colors">Falta de Control (KPIs)</h3>
              <p className="text-slate-400 font-medium text-sm">Imposibilidad de saber en tiempo real cuánto se ha vendido, qué operaciones están atascadas o la rentabilidad del mes.</p>
            </div>
          </div>
        </section>

        {/* Nuestra Capacidad Técnica (Ejemplos) */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Tecnología de Grado Empresarial</h2>
            <p className="text-center font-medium text-slate-300 mb-12 max-w-3xl mx-auto">
              Para demostrar nuestra capacidad de desarrollo, hemos construido productos internos complejos que validan nuestra arquitectura y experiencia técnica:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
                <h3 className="font-bold text-xl text-[#00D4FF] mb-3">ALMAR FSM</h3>
                <p className="text-slate-400 text-sm mb-4">Software avanzado de gestión de servicios de campo. Desarrollado para coordinar técnicos, emitir certificados digitales, controlar stock en furgonetas y automatizar facturación.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
                <h3 className="font-bold text-xl text-[#FF006E] mb-3">RITECORE</h3>
                <p className="text-slate-400 text-sm mb-4">Nuestro ERP centralizado. Controla de forma modular el estado de clientes, facturación en la nube, suscripciones recurrentes y pasarelas de pago automatizadas.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
                <h3 className="font-bold text-xl text-[#00FF9D] mb-3">Aurentia</h3>
                <p className="text-slate-400 text-sm mb-4">Plataforma de gestión de portafolios de inversión. Gestiona análisis de datos masivos, cuadros de mando interactivos y seguimiento de KPIs en tiempo real.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">¿Qué incluye el desarrollo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                <Server className="text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Integraciones Nativas (API)</h3>
                <p className="text-slate-400 text-sm">Conectamos el CRM con tus herramientas actuales: <a href="/chatbots-ia" className="text-[#00D4FF] hover:underline">chatbots</a>, WhatsApp, correo electrónico, centralitas virtuales o <a href="/servicios/automatizacion-procesos" className="text-[#00D4FF] hover:underline">automatizaciones externas</a>.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF006E]/10 flex items-center justify-center shrink-0">
                <HardDrive className="text-[#FF006E]" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Migración de Datos Segura</h3>
                <p className="text-slate-400 text-sm">Exportamos la información de tus antiguos Excel, Access o CRMs estándar, limpiamos los datos y los volcamos al nuevo sistema sin pérdida de historial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00FF9D]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-[#00FF9D]" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Seguridad y RGPD</h3>
                <p className="text-slate-400 text-sm">Bases de datos encriptadas alojadas en servidores europeos. Gestión de permisos por roles para que cada empleado vea solo lo que tú decidas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                <Wrench className="text-yellow-500" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Mantenimiento y Soporte</h3>
                <p className="text-slate-400 text-sm">Una vez lanzado, ofrecemos planes de mantenimiento para monitorizar servidores, hacer copias de seguridad diarias y actualizar funcionalidades según el feedback del equipo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-white/5 bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Preguntas Frecuentes sobre CRM a Medida</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuánto tiempo tarda en desarrollarse?</h3>
              <p className="font-medium text-slate-300">Depende de la complejidad de los módulos. Un MVP (Producto Mínimo Viable) operativo suele estar listo entre 2 y 3 meses, para que empieces a utilizarlo y probarlo cuanto antes, escalándolo fase a fase.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Quién es el propietario del software?</h3>
              <p className="font-medium text-slate-300">Tú. Al finalizar el desarrollo y los pagos, te cedemos la propiedad intelectual y el código fuente. A diferencia del software SaaS estándar, no alquilas, eres dueño.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuál es el modelo de precios y costes recurrentes?</h3>
              <p className="font-medium text-slate-300">Presupuestamos el desarrollo inicial mediante hitos cerrados. Una vez entregado, te ahorras las costosas licencias por usuario, pero debes asumir los costes de infraestructura (servidores como AWS o Cloudflare), el consumo de servicios externos (APIs, envíos masivos) y los planes de mantenimiento y soporte que contrates para asegurar la evolución del sistema.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-white">¿Mi equipo se adaptará al cambio?</h3>
              <p className="font-medium text-slate-300">Sí, de hecho el rechazo es mucho menor que con un CRM genérico, porque la interfaz estará diseñada con la terminología de tu empresa y replicando sus procesos lógicos naturales, lo que reduce la curva de aprendizaje.</p>
            </div>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))} 
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        submitText={modalConfig.submitText}
      />
    </>
  );
}
