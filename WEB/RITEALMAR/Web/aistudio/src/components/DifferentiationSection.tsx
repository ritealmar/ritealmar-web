import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function DifferentiationSection() {
  const points = [
    { title: "Soluciones prácticas", desc: "Nada de humo. Nos enfocamos en darte resultados y ahorrarte horas reales." },
    { title: "Pensado para PYMEs", desc: "Precios, tiempos y lenguajes adaptados a tu realidad empresarial." },
    { title: "Diseño moderno", desc: "Tus herramientas y tu web transmitirán una autoridad brutal." },
    { title: "Automatización real", desc: "Sistemas que funcionan en segundo plano sin que tú tengas que tocarlos." },
    { title: "Acompañamiento humano", desc: "Soporte constante. Hablas con personas, no con tickets automatizados." },
    { title: "Escalable según tu negocio", desc: "Empieza por algo pequeño y ve creciendo a medida que veas el retorno." }
  ];

  return (
    <section className="section-spacing bg-[#F1F5F9] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#3B82F6] uppercase mb-4 block">Por qué Ritealmar</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#020617] mb-4">
            Tecnología útil, no complicada
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-[700px] mx-auto">
            Nos enfocamos en resultados reales para tu empresa, no en venderte software que no necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#3B82F6] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-[#3B82F6]" size={24} />
                <h4 className="font-bold text-[#020617] text-lg">{pt.title}</h4>
              </div>
              <p className="text-gray-500 leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
