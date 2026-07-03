import React from 'react';
import { motion } from 'framer-motion';

export const TrustLayer = () => {
  const logos = [
    "OPENAI", "ANTHROPIC", "MISTRAL", "NVIDIA", "MAKE.COM", "AWS", "META"
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
      {logos.map((logo) => (
        <span
          key={logo}
          className="text-xl md:text-2xl font-black text-white italic tracking-tighter"
        >
          {logo}
        </span>
      ))}
    </div>
  );
};
