import React, { useEffect, useState } from 'react';

export const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(79, 255, 176, 0.03), transparent 80%)`
      }}
    />
  );
};
