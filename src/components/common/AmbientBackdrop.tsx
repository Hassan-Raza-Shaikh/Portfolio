'use client';

import { useEffect, useRef } from 'react';

export default function AmbientBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let targetX = 50;
    let targetY = 50;

    const updatePointer = (x: number, y: number) => {
      targetX = (x / window.innerWidth) * 100;
      targetY = (y / window.innerHeight) * 100;
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const loop = () => {
      const currentX = parseFloat(root.style.getPropertyValue('--pointer-x') || '50');
      const currentY = parseFloat(root.style.getPropertyValue('--pointer-y') || '50');

      const nextX = currentX + (targetX - currentX) * 0.08;
      const nextY = currentY + (targetY - currentY) * 0.08;

      root.style.setProperty('--pointer-x', nextX.toFixed(2));
      root.style.setProperty('--pointer-y', nextY.toFixed(2));
      root.style.setProperty('--scroll-depth', (window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)).toFixed(3));

      rafId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafId = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="ambient-root pointer-events-none fixed inset-0 -z-10"
      style={{
        ['--pointer-x' as string]: '50',
        ['--pointer-y' as string]: '50',
        ['--scroll-depth' as string]: '0',
      }}
      aria-hidden="true"
    >
      <div className="ambient-blend absolute inset-0" />
      <div className="ambient-grain absolute inset-0" />
    </div>
  );
}
