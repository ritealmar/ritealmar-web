import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InternalCaseSection() {
  const steps = [
    {
      number: '1',
      title: 'Web en Cloudflare',
      description: 'Sitio rápido, seguro y escalable'
    },
    {
      number: '2',
      title: 'Auditoría IA',
      description: 'Lead magnet de captación'
    },
    {
      number: '3',
      title: 'Formularios → CRM',
      description: 'Registro automático de contactos'
    },
    {
      number: '4',
      title: 'Gmail + Apps Script',
      description: 'Autorespuestas y detección de respuestas'
    },
    {
      number: '5',
      title: 'Dashboard',
      description: 'Seguimientos y próximas acciones'
    },
    {
      number: '6',
      title: 'Google Analytics 4',
      description: 'Medición de conversiones reales'
    },
  ];

  const capabilities = [
    'Sistema de captación web profesional',
    'Página de auditoría gratuita (lead magnet)',
    'CRM en Google Sheets (empresas, contactos, actividad)',
    'Apps Script para automatizaciones',
    'Autorespuestas controladas',
    'Detector de respuestas y rebotes',
    'Resumen diario de leads',
    'Worker/API seguro en Cloudflare',
    'Eventos de conversión en GA4',
    'Campañas comerciales controladas',
    'Dashboard ejecutivo con KPIs',
    'Próximas acciones inteligentes',
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#030712] via-[#0A1628]/20 to-[#030712] border-y border-white/5">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Caso Interno Demostrable
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            El sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7FFFD4]">RITEALMAR</span> en funcionamiento
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            RITEALMAR ha construido su propio sistema interno de captación y automatización. Este es nuestro caso de referencia: un sistema replicable que funciona, medible y documentado.
          </p>
        </div>

        {/* Flujo de proceso */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Arquitectura del sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative p-6">
                  {/* Número */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7FFFD4] flex items-center justify-center font-bold text-black mb-4 text-lg">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 text-sm">
                    {step.description}
                  </p>

                  {/* Arrow indicator */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-cyan-500/30 hidden lg:block" size={20} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Componentes del sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <Check className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-[#00D4FF]/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Sistema funcionando hoy
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Web con auditoría, CRM con contactos, automatizaciones de respuestas, dashboard con KPIs, y campaña de prospección B2B controlada. Todo documentado, medible y replicable para tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/spreadsheets/d/1ZshJY8CQWkciFk8T0-3LNeqVuC4lUMMl-l9_DdXvdLY/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-all"
            >
              Ver CRM de ejemplo
            </a>
            <a
              href="/auditoria-ia-gratis"
              className="px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#7FFFD4] text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,192,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              Solicitar similar para tu empresa
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Bottom text */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            ¿Quieres un sistema parecido adaptado a tu empresa? Solicita una auditoría gratuita y te mostraremos cómo podemos implementarlo.
          </p>
        </div>
      </div>
    </section>
  );
}
