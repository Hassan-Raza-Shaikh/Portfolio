'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProcessRail from '@/components/sections/ProcessRail';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import AmbientBackdrop from '@/components/common/AmbientBackdrop';
import IntroOverlay from '@/components/common/IntroOverlay';

export default function Home() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <AmbientBackdrop />
      <IntroOverlay />
      
      {/* Structural layout pages scrolling vertically with natural separation */}
      <div className="space-y-24 md:space-y-36 pb-24">
        <Hero />
        <About />
        <ProcessRail />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
