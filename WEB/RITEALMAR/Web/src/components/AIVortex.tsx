import React from 'react';
import { motion } from 'motion/react';

export default function AIVortex() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#AF5AE1]/20 via-transparent to-transparent opacity-80 blur-[80px]" />

      {/* Main 3D Container */}
      <motion.div 
        animate={{ 
          rotateX: [5, -5, 5], 
          rotateY: [-5, 5, -5] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative w-full max-w-[300px] aspect-square flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* The "Brain" / Core Singularity */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            rotateZ: [0, 180, 360]
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute z-50 w-24 h-24 rounded-full"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2dd4bf] via-[#AF5AE1] to-[#FF007F] mix-blend-screen blur-[4px] animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(175,90,225,0.8)]" />
          
          {/* Inner pulsating core */}
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 rounded-full bg-gradient-to-br from-white to-[#AF5AE1] blur-[2px] mix-blend-screen"
          />
        </motion.div>

        {/* Cybernetic 3D Rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            animate={{ 
              rotateX: i % 2 === 0 ? [60, 60] : [70, 70],
              rotateY: [0, 360],
              rotateZ: i % 2 === 0 ? [0, 360] : [360, 0]
            }}
            transition={{ 
              duration: 12 + i * 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute rounded-full border-2"
            style={{
              width: `${120 + i * 35}%`,
              height: `${120 + i * 35}%`,
              borderStyle: i === 1 ? 'dashed' : i === 3 ? 'dotted' : 'solid',
              borderColor: i % 2 === 0 ? 'rgba(45, 212, 191, 0.4)' : 'rgba(175, 90, 225, 0.4)',
              transformStyle: 'preserve-3d',
              opacity: 1 - i * 0.15
            }}
          >
            {/* Ring Orbits/Nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? '#2dd4bf' : '#AF5AE1',
                boxShadow: `0 0 15px ${i % 2 === 0 ? '#2dd4bf' : '#AF5AE1'}`
              }}
            />
          </motion.div>
        ))}

        {/* Neural Connections (SVG lines to core) */}
        <svg className="absolute inset-0 w-full h-full overflow-visible z-10 opacity-70">
          <defs>
            <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(175, 90, 225, 0.9)" />
              <stop offset="100%" stopColor="rgba(175, 90, 225, 0)" />
            </radialGradient>
          </defs>
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const outerDist = 50 + (i % 4) * 15;
            const x2 = 50 + outerDist * Math.cos(rad);
            const y2 = 50 + outerDist * Math.sin(rad);
            const delay = (i % 4) * 0.3;

            return (
              <g key={`neural-${i}`}>
                <motion.line
                  x1="50%" y1="50%"
                  x2={`${x2}%`} y2={`${y2}%`}
                  stroke="url(#neural-glow)"
                  strokeWidth="2"
                  initial={{ strokeDasharray: "15 30" }}
                  animate={{ strokeDashoffset: [0, -100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx={`${x2}%`} cy={`${y2}%`}
                  r="3"
                  fill="#AF5AE1"
                  animate={{ 
                    scale: [1, 2.5, 1],
                    opacity: [0.3, 1, 0.3],
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: delay }}
                />
              </g>
            );
          })}
        </svg>

        {/* Ambient Floating Data Particles */}
        {[...Array(40)].map((_, i) => {
          // Deterministic pseudo-random values to avoid hydration mismatch
          const randX = Math.sin(i * 11) * 250; 
          const randY = Math.cos(i * 13) * 250; 
          const randScale = (Math.sin(i * 17) + 1) * 0.75 + 0.5; 
          const delay = (Math.sin(i * 19) + 1) * 2; 
          const duration = 3 + ((Math.sin(i * 23) + 1) * 2); 
          const isTeal = i % 3 === 0;
          const isPurple = i % 3 === 1;
          const color = isTeal ? '#2dd4bf' : isPurple ? '#AF5AE1' : '#FF007F';

          return (
            <motion.div
              key={`particle-${i}`}
              initial={{ 
                x: randX, 
                y: randY, 
                opacity: 0, 
                scale: 0 
              }}
              animate={{
                y: [randY, randY - 150],
                x: [randX, randX + Math.sin(i)*50],
                opacity: [0, 0.9, 0],
                scale: [0, randScale, 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              className="absolute z-40 rounded-full"
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: color,
                boxShadow: `0 0 12px ${color}`
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
