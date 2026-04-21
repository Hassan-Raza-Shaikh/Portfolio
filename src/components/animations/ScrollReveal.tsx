'use client';

import { useEffect, useRef } from 'react';
import { createScrollReveal } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      createScrollReveal(ref.current, { delay, duration });
    }
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
