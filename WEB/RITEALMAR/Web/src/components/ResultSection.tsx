import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, CheckSquare, Settings2, BarChart } from 'lucide-react';

export const ResultSection = () => {
  const results = [
    { value: '-60%', title: 'Tiempo manual', icon: <TrendingDown size={20} /> },
    { value: '0%', title: 'Errores humanos', icon: <CheckSquare size={20} /> },
    { value: '+90%', title: 'Control total', icon: <Settings2 size={20} /> },
    { value: '24/7', title: 'Operatividad', icon: <BarChart size={20} /> },
  ];

  return (
    <section className="section-padding bg-midnight border-b border-white/5">
      <div className="grid-precision">
        
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((res, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-white/5 p-8 rounded-lg flex flex-col items-center text-center gap-4 hover:border-secondary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                {res.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white tracking-tight">
                  {res.value}
                </span>
                <span className="text-[12px] font-bold text-text-tertiary uppercase tracking-widest leading-tight">
                  {res.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
