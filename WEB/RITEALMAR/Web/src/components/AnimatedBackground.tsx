import React, { useEffect, useRef } from 'react';
import particlesJS from 'particles.js';

interface AnimatedBackgroundProps {
  /** Unique identifier for particles configuration */
  id: string;
  /** Optional custom CSS class for container */
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ id, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      particlesJS(id, {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ['#00d8ff', '#7c3aed', '#a78bfa'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
          modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  }, [id]);

  return <div id={id} className={className} ref={containerRef} />;
};

export default AnimatedBackground;
