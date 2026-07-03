import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ModalController } from '../components/ModalController';
import { Brain, Search, Code, CheckCircle2, Zap } from 'lucide-react';

export default function AgentesIA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ServiceLayout 
        title="Agentes de Inteligencia Artificial"
        subtitle="Sistemas autónomos que no solo responden, sino que ejecutan tareas complejas, toman decisiones basadas en datos y operan como empleados digitales de alto rendimiento."
        onOpenCalendly={() => setIsModalOpen(true)}
      >
        
        {/* Intro Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto bg-[#0A1628]">
          <div className="mx-auto text-slate-300">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Qué es un Agente de IA?</h2>
            <p className="font-medium mb-6 leading-relaxed">
              Mientras que un chatbot está diseñado principalmente para conversar, un Agente de Inteligencia Artificial es un sistema autónomo capaz de ejecutar flujos de trabajo completos. Entienden un objetivo, planifican los pasos necesarios y utilizan herramientas (como enviar correos, buscar en internet o usar tu CRM) para lograrlo.
            </p>
            <p className="font-medium leading-relaxed">
              Imagina tener un analista de datos, un asistente de reservas o un cualificador de leads que trabaja 24/7 sin descanso, tomando decisiones inteligentes en tiempo real.
            </p>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="py-20 px-6 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Capacidades de un Agente IA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ejecutar acciones en otros programas mediante APIs.",
                "Cualificar clientes potenciales y agendar reuniones.",
                "Analizar grandes volúmenes de datos y crear reportes.",
                "Resolver incidencias técnicas de forma autónoma."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10 group">
                  <div className="mt-1 bg-[#FF006E]/20 p-2 rounded-full group-hover:bg-[#FF006E]/40 transition-colors">
                    <Zap className="w-5 h-5 text-[#FF006E]" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 px-6 bg-[#0A1628]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">El Proceso de Implementación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Search, title: "1. Definición del Rol", desc: "Establecemos qué tareas exactas debe cumplir el agente y qué nivel de autonomía tendrá." },
                { icon: Brain, title: "2. Entrenamiento Lógico", desc: "Enseñamos al agente las reglas de negocio, límites de actuación y casos excepcionales." },
                { icon: Code, title: "3. Conexión de Herramientas", desc: "Le damos acceso seguro a las herramientas que necesita (Email, CRM, Bases de datos)." }
              ].map((step, idx) => {
                const IconComponent = step.icon;
                return (
                <div key={idx} className="p-8 rounded-2xl glass-card border border-white/10 group text-center">
                  <div className="mx-auto w-16 h-16 bg-[#0F172A] border-2 border-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors">{step.title}</h3>
                  <p className="font-medium text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              )})}
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
