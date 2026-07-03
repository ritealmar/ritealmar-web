import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { CheckCircle2, Clock, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';

export default function ProcessAutomation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ServiceLayout 
        title="Automatización de Procesos con Inteligencia Artificial"
        subtitle="¿Tu empresa pierde tiempo realizando tareas repetitivas? La automatización de procesos permite eliminar trabajo manual, reducir errores y aumentar la productividad."
        onOpenCalendly={() => setIsModalOpen(true)}
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es la automatización de procesos?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              La automatización consiste en utilizar tecnología e inteligencia artificial para realizar tareas repetitivas de forma automática, sin necesidad de intervención constante de los empleados.
            </p>
            <p className="font-medium leading-relaxed">
              En Ritealmar analizamos los procesos de tu negocio y desarrollamos soluciones personalizadas que trabajan por ti las 24 horas del día. Esto permite que tu equipo dedique más tiempo a actividades de valor mientras los procesos repetitivos se ejecutan de forma autónoma.
            </p>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">¿Qué problemas resuelve?</h2>
            <p className="text-center font-medium text-slate-300 mb-12 text-lg">
              Muchas empresas pierden tiempo y dinero realizando tareas manuales como:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Introducir datos en hojas de cálculo.",
                "Enviar presupuestos.",
                "Gestionar correos electrónicos.",
                "Actualizar bases de datos.",
                "Hacer seguimiento de clientes.",
                "Crear informes.",
                "Gestionar citas y reservas."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#FF006E]/20 p-2 rounded-full group-hover:bg-[#FF006E]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF006E]" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl font-bold text-[#00D4FF] text-glow-blue">
              La automatización elimina estas tareas repetitivas y permite que el equipo se centre en actividades más importantes.
            </p>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Análisis</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Estudiamos el funcionamiento de tu empresa e identificamos los procesos que consumen más tiempo.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Diseño</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Diseñamos una solución adaptada a tus necesidades y objetivos concretos.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Implementación</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Desarrollamos e integramos la automatización con las herramientas que ya utilizas.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] font-bold text-2xl shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">Seguimiento</h3>
              <p className="font-medium text-slate-300 leading-relaxed">Supervisamos el funcionamiento y realizamos mejoras continuas cuando sea necesario.</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Beneficios para tu empresa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Ahorro de Tiempo", desc: "Reduce drásticamente las horas dedicadas a tareas administrativas." },
                { icon: TrendingUp, title: "Mayor Productividad", desc: "Permite que tu equipo se concentre en tareas que generan ingresos." },
                { icon: ShieldCheck, title: "Reducción de Errores", desc: "Elimina los fallos humanos en la introducción de datos y cálculos." },
                { icon: Users, title: "Mejor Servicio", desc: "Respuestas más rápidas y atención constante a tus clientes." },
                { icon: CheckCircle2, title: "Procesos Estandarizados", desc: "Garantiza que las tareas se realicen siempre de la misma forma." },
                { icon: Zap, title: "Escalabilidad", desc: "Tu negocio puede crecer sin necesidad de aumentar proporcionalmente el personal." }
              ].map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                <div key={idx} className="p-8 rounded-2xl glass-card border border-white/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-8 h-8 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">{benefit.title}</h3>
                  </div>
                  <p className="font-medium text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              )})}
            </div>
          </div>
        </section>

        {/* Casos Prácticos */}
        <section className="py-20 px-6 max-w-5xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Casos Prácticos Reales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#00D4FF]/20 to-[#0A1628]">
              <h3 className="text-2xl font-bold mb-4 text-[#00D4FF]">Gestión automática de clientes</h3>
              <p className="font-medium text-slate-300 mb-6">Cuando un cliente rellena un formulario en la web, de forma 100% automática y sin intervención manual:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se crea automáticamente una ficha en el CRM.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se envía un correo electrónico de bienvenida.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se programa una llamada comercial en el calendario.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00D4FF]" /> <span className="font-medium text-slate-200">Se registra toda la información para facturación.</span></li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#00FF9D]/20 to-[#0A1628]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FF9D]">Automatización de WhatsApp</h3>
              <p className="font-medium text-slate-300 mb-6">Cuando un cliente escribe por WhatsApp a la empresa, el sistema inteligente actúa:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">El cliente recibe una respuesta inmediata.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">La IA clasifica automáticamente sus necesidades.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">Se agenda una cita y se envía un recordatorio.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00FF9D]" /> <span className="font-medium text-slate-200">Se avisa al responsable correspondiente del equipo.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sectores / Por que elegirnos */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-white">¿Por qué elegir Ritealmar?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Soluciones personalizadas', 'Integración con sistemas existentes', 'Soporte continuo', 'Experiencia en automatización e IA', 'Desarrollo propio'].map((item, idx) => (
                <span key={idx} className="px-6 py-3 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-bold">
                  {item}
                </span>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mt-20 mb-8 text-white">Sectores donde trabajamos</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Restaurantes', 'Bares', 'Clínicas', 'Talleres', 'Empresas de servicios', 'Telecomunicaciones', 'Comercio electrónico', 'Autónomos'].map((sector, idx) => (
                <span key={idx} className="font-medium text-slate-400">
                  {sector}{idx !== 7 && <span className="mx-3 text-slate-600">|</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 px-6 max-w-3xl mx-auto bg-[#0A1628]">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Necesito conocimientos técnicos?</h3>
              <p className="font-medium text-slate-300">No. Nosotros nos encargamos de toda la configuración, integración y puesta en marcha para que tú solo disfrutes de los resultados.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Se puede integrar con mis programas actuales?</h3>
              <p className="font-medium text-slate-300">Sí. Trabajamos con múltiples plataformas y herramientas. Conectamos tus sistemas actuales mediante APIs y automatizaciones a medida.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuánto tiempo tarda la implementación?</h3>
              <p className="font-medium text-slate-300">Depende del proyecto y su complejidad, aunque muchas automatizaciones esenciales pueden estar funcionando en pocos días.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Cuánto cuesta automatizar un proceso?</h3>
              <p className="font-medium text-slate-300">Depende de las necesidades exactas de tu negocio. Solicita una auditoría gratuita y te proporcionaremos un presupuesto sin compromiso.</p>
            </div>
            <div className="p-6 rounded-xl glass-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-white">¿Es necesario cambiar mi forma de trabajar?</h3>
              <p className="font-medium text-slate-300">No. Adaptamos la solución a la idiosincrasia de tu empresa para que la curva de aprendizaje sea nula.</p>
            </div>
          </div>
        </section>

      </ServiceLayout>

      <ModalController 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
