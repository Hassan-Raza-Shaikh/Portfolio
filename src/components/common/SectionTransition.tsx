"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Motif from '@/components/common/Motif';

gsap.registerPlugin(ScrollTrigger);

interface SectionTransitionProps {
  tone?: 'brass-jade' | 'ember-brass' | 'jade-ember';
}

const toneMap = {
  'brass-jade': 'from-brass/18 via-paper/0 to-jade/18',
  'ember-brass': 'from-ember/18 via-paper/0 to-brass/20',
  'jade-ember': 'from-jade/16 via-paper/0 to-ember/18',
};

export default function SectionTransition({ tone = 'brass-jade' }: SectionTransitionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const glow = root.querySelector('.transition-glow');
    const wave = root.querySelector('.transition-wave');
    const motif = root.querySelector('.transition-motif');

    gsap.fromTo(
      glow,
      { scaleX: 0.86, opacity: 0.35 },
      {
        scaleX: 1.08,
        opacity: 0.92,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top 95%',
          end: 'bottom 5%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      wave,
      { xPercent: -6, opacity: 0.4 },
      {
        xPercent: 6,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.to(motif, {
      rotate: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none relative h-24 overflow-hidden" aria-hidden="true">
      <div className={`transition-glow absolute inset-0 bg-gradient-to-r ${toneMap[tone]} blur-2xl`} />
      <div className="transition-wave absolute inset-x-0 top-1/2 mx-auto h-px w-[84%] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(243,234,223,0.32),transparent)]" />
      <div className="transition-motif absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-paper/45">
        <Motif variant="pulse" className="h-full w-full" />
      </div>
    </div>
  );
}
