import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const TargetAudience = () => {
  const audiences = [
    { name: 'Pymes con procesos manuales', desc: 'Empresas que dependen de registros físicos o Excel básicos para su operativa.', color: 'cyan' },
    { name: 'Empresas de servicios', desc: 'Negocios que gestionan equipos, citas o proyectos y necesitan agilidad.', color: 'emerald' },
    { name: 'Tareas administrativas repetitivas', desc: 'Departamentos saturados por la carga documental y el reporte de datos.', color: 'violet' },
    { name: 'Equipos que quieren ahorrar tiempo', desc: 'Líderes que buscan liberar a su equipo de labores que no aportan valor.', color: 'blue' },
    { name: 'IA sin complicaciones', desc: 'SaaS y negocios que quieren IA útil hoy, sin desarrollos de años.', color: 'cyan' },
    { name: 'Herramientas adaptadas', desc: 'Empresas que no encajan en software estándar y necesitan soluciones a medida.', color: 'emerald' }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden border-b border-white/5">
      <div className="grid-precision items-center">
        <div className="col-span-12 lg:col-span-12 mb-20 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-cyan/30" />
            <span className="text-[10px] font-bold text-cyan tracking-[0.25em] uppercase">Perfil de Cliente Ideal</span>
            <div className="w-10 h-px bg-cyan/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-text-primary tracking-tight leading-tight max-w-4xl">
            Trabajamos con empresas que quieren <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">crecer sin aumentar el caos</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed opacity-60 mt-6 max-w-2xl">
            Nuestras soluciones escalan con tu negocio, permitiéndote gestionar más volumen con la misma estructura.
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 glass-subtle border border-white/5 rounded-sm hover:border-cyan/20 transition-all group"
            >
              <div className={`w-8 h-px bg-${audience.color} mb-6 group-hover:w-12 transition-all`} />
              <h3 className="text-lg font-display font-medium text-text-primary mb-3">{audience.name}</h3>
              <p className="text-sm text-text-tertiary leading-relaxed">{audience.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
