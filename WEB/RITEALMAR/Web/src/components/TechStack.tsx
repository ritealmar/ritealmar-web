import React from 'react';

export default function TechStack() {
  const technologies = [
    "OpenAI",
    "Anthropic",
    "Make",
    "Zapier",
    "Stripe",
    "React",
    "Node.js",
    "Vercel"
  ];

  return (
    <div className="bg-[#060913] border-b border-white/5 py-8 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060913] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060913] to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.2em] mb-6 text-center">
          Desarrollamos e integramos con las mejores tecnologías
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
          {technologies.map((tech, i) => (
            <div key={i} className="text-xl font-display font-bold text-gray-400 hover:text-white transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
