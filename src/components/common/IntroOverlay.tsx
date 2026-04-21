'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

const INTRO_STORAGE_KEY = 'portfolio_intro_seen_v1';

export default function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = window.localStorage.getItem(INTRO_STORAGE_KEY) === '1';

    if (seen) return;

    if (prefersReducedMotion) {
      window.localStorage.setItem(INTRO_STORAGE_KEY, '1');
      return;
    }

    setShowIntro(true);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const tl = gsap.timeline();
    tl.fromTo(
      '.intro-panel',
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
    )
      .from(
        '.intro-line',
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.2'
      )
      .to('.intro-overlay', {
        opacity: 0,
        duration: 0.35,
        delay: 0.65,
        ease: 'power2.inOut',
        onComplete: () => {
          window.localStorage.setItem(INTRO_STORAGE_KEY, '1');
          setShowIntro(false);
        },
      });

    return () => {
      tl.kill();
    };
  }, [showIntro]);

  if (!showIntro) return null;

  return (
    <div className="intro-overlay fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 px-6">
      <div className="intro-panel rounded-[1.75rem] border border-paper/15 bg-paper/5 p-8 text-center backdrop-blur-2xl md:p-10">
        <p className="section-kicker mb-4 text-[0.62rem]">Portfolio experience</p>
        <div className="overflow-hidden">
          <p className="intro-line section-title text-4xl text-gradient md:text-5xl">Builder</p>
        </div>
        <div className="overflow-hidden">
          <p className="intro-line section-title text-4xl text-gradient md:text-5xl">Learner</p>
        </div>
        <div className="overflow-hidden">
          <p className="intro-line section-title text-4xl text-gradient md:text-5xl">Problem Solver</p>
        </div>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(INTRO_STORAGE_KEY, '1');
            setShowIntro(false);
          }}
          className="pressable mt-6 rounded-full border border-paper/20 bg-paper/8 px-5 py-2 text-[0.64rem] uppercase tracking-[0.24em] text-paper/80"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
