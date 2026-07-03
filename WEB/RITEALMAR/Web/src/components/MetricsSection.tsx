import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedCounter({ end, label, prefix = "", suffix = "" }: { end: number | string, label: string, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && typeof end === 'number') {
      let startTimestamp: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-black text-[#0F62FE] mb-2">
        {prefix}{typeof end === 'number' ? count : end}{suffix}
      </div>
      <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter end={20} prefix="+" label="Procesos automatizables" />
          <AnimatedCounter end={10} prefix="+" label="Áreas de negocio optimizables" />
          <AnimatedCounter end="∞" label="Ahorro de horas cada semana" />
          <AnimatedCounter end="100%" label="Diagnóstico personalizado" />
        </div>
      </div>
    </section>
  );
}
