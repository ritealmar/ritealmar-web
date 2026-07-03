import React, { useEffect, useState } from 'react';

interface TextRotatorProps {
  /** Array of strings to rotate */
  words: string[];
  /** Duration each word stays visible (ms) */
  interval?: number;
  /** CSS class for styling */
  className?: string;
}

const TextRotator: React.FC<TextRotatorProps> = ({ words, interval = 2000, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={className} aria-live="polite">
      {words[index]}
    </span>
  );
};

export default TextRotator;
