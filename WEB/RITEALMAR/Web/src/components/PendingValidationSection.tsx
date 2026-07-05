import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, ShieldCheck, Mail, CheckSquare, BarChart, FileText, Globe, Users, Layers, Code2 } from 'lucide-react';

export default function PendingValidationSection() {
  const points = [
    {
      title: "Core Web Vitals",
      desc: "Medir LCP, CLS, INP y rendimiento móvil en entorno real.",
      icon: Activity
    },
    {
      title: "Formularios",
      desc: "Validación de envío real de leads desde dispositivos móviles y de escritorio.",
      icon: Mail
    },
    {
      title: "Cloudflare Turnstile",
      desc: "Validación de protección anti-spam en producción.",
      icon: ShieldCheck
    },
    {
      title: "Eventos GTM/GA4",
      desc: "Confirmar medición correcta de conversiones en Google Tag Manager y GA4.",
      icon: BarChart
    },
    {
      title: "Search Console",
      desc: "Revisión de indexación y rendimiento en la consola de búsqueda.",
      icon: Search
    },
    {
      title: "Sitemap y Robots",
      desc: "Validación de sitemap.xml y robots.txt para un rastreo adecuado.",
      icon: Globe
    },
    {
      title: "JSON-LD",
      desc: "Revisión de datos estructurados con la herramienta de resultados enriquecidos.",
      icon: Code2
    },
    {
      title: "Legalidad para Campañas",
      desc: "Revisión legal final de textos y cookies antes de escalar campañas de pago.",
      icon: FileText
    },
    {
      title: "Casos Reales",
      desc: "Sustitución progresiva de demos funcionales por casos reales documentados.",
      icon: Users
    }
  ];

  return (
    <section className="px-6 py-20 bg-[#050B14] relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Puntos pendientes de validación</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aunque la plataforma presenta una base técnica y comercial avanzada, existen varios puntos que deben verificarse en producción para confirmar rendimiento, medición y preparación comercial completa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-[#0F172A] group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                <point.icon className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
