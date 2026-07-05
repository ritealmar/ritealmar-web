import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  highlightedText?: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function AnimatedTitle({ 
  text, 
  highlightedText, 
  className = "text-4xl md:text-5xl font-bold mb-6", 
  tag = 'h2' 
}: AnimatedTitleProps) {
  const MotionTag = motion[tag];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {text}{' '}
      {highlightedText && (
        <motion.span
          initial={{ backgroundPosition: '200% center' }}
          whileInView={{ backgroundPosition: '0% center' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto]"
        >
          {highlightedText}
        </motion.span>
      )}
    </MotionTag>
  );
}
