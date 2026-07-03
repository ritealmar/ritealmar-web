import React from 'react';
import { motion } from 'motion/react';

export default function Logo3D() {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center perspective-[1200px]">
      {/* Dynamic Background Glow - Subtler to avoid washing out the logo */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-[#AF5AE1]/30 to-blue-600/10 rounded-full blur-[100px]"
      />

      {/* Modern Tech Rings - More defined */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute border border-white/10 rounded-full"
          style={{ 
            width: `${110 + i * 30}%`, 
            height: `${110 + i * 30}%`,
            transformStyle: 'preserve-3d',
            rotateX: `${60 + i * 10}deg`
          }}
        />
      ))}

      {/* Main Logo - Subtle Swing and Levitating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateY: [-15, 15, -15],
          rotateX: [5, -5, 5],
          y: [-15, 15, -15]
        }}
        transition={{ 
          opacity: { duration: 1 },
          scale: { duration: 1 },
          rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 w-full max-w-[550px] drop-shadow-[0_10px_50px_rgba(175,90,225,0.6)]"
      >
        <img 
          src="/logo.webp" 
          alt="Ritealmar IA" 
          className="w-full h-auto object-contain filter brightness-110 contrast-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/logo.png';
          }}
        />
      </motion.div>

      {/* Neural Network Pulse */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="w-40 h-40 border border-[#AF5AE1]/40 rounded-full"
        />
      </div>
    </div>
  );
}
