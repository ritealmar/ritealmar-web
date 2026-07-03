import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function DifferentiationSection() {
  const points = [
    { title: "Resultados Reales", desc: "Nos enfocamos en el retorno de inversión desde el primer mes de implementación." },
    { title: "Soluciones a Medida", desc: "No usamos plantillas. Creamos sistemas específicos para la operativa de tu empresa." },
    { title: "Innovación Constante", desc: "Estamos a la vanguardia de los últimos modelos de IA para darte ventaja competitiva." },
    { title: "Transparencia Total", desc: "Sin tecnicismos innecesarios. Hablamos claro y mostramos resultados medibles." },
    { title: "Soporte Especializado", desc: "Un equipo de expertos a tu disposición para asegurar el éxito de cada proyecto." },
    { title: "Escalabilidad", desc: "Sistemas diseñados para crecer junto con tu negocio sin límites tecnológicos." }
  ];

  return (
    <section className="section-spacing bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#AF5AE1] uppercase mb-4 block">Diferenciación</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 uppercase">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-500 max-w-[700px] mx-auto">
            Combinamos conocimiento técnico avanzado con una visión de negocio estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#AF5AE1] text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="font-bold text-black text-lg uppercase tracking-wider">{pt.title}</h4>
              </div>
              <p className="text-gray-500 leading-relaxed pl-14">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
