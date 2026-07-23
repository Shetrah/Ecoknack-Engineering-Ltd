import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props { number: string; label: string; sub?: string; }

const StatCounter: React.FC<Props> = ({ number, label, sub }) => {
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const numeric  = parseInt(number.replace(/\D/g, ''), 10);
  const suffix   = number.replace(/\d/g, '');

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 50;
    const inc   = Math.ceil(numeric / steps);
    const id    = setInterval(() => {
      current += inc;
      if (current >= numeric) { setDisplay(numeric); clearInterval(id); }
      else setDisplay(current);
    }, 24);
    return () => clearInterval(id);
  }, [inView, numeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight">
        {display}{suffix}
      </div>
      <div className="text-white font-bold text-sm mt-1">{label}</div>
      {sub && <div className="text-white/50 text-xs mt-0.5">{sub}</div>}
    </div>
  );
};

export default StatCounter;
