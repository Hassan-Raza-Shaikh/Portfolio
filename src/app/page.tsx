'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProcessRail from '@/components/sections/ProcessRail';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import SectionTransition from '@/components/common/SectionTransition';
import IntroOverlay from '@/components/common/IntroOverlay';
import AmbientBackdrop from '@/components/common/AmbientBackdrop';
import ScrollCompass from '@/components/common/ScrollCompass';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanupFns: Array<() => void> = [];

    if (!prefersReducedMotion) {
      const titles = Array.from(document.querySelectorAll<HTMLElement>('[data-heading-reveal="words"]'));

      titles.forEach((title) => {
        if (title.dataset.splitApplied === '1') return;

        const rawText = title.textContent ?? '';
        const words = rawText.split(' ').filter(Boolean);
        title.textContent = '';

        words.forEach((word, idx) => {
          const wrapper = document.createElement('span');
          wrapper.style.overflow = 'hidden';
          wrapper.style.display = 'inline-block';

          const inner = document.createElement('span');
          inner.textContent = word;
          inner.className = 'heading-word';
          inner.style.display = 'inline-block';
          if (idx < words.length - 1) inner.style.marginRight = '0.3em';

          wrapper.appendChild(inner);
          title.appendChild(wrapper);
        });

        title.dataset.splitApplied = '1';

        gsap.from(title.querySelectorAll('.heading-word'), {
          yPercent: 115,
          opacity: 0,
          ease: 'power3.out',
          duration: 0.85,
          stagger: 0.05,
          scrollTrigger: {
            trigger: title,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      const animatedNodes = document.querySelectorAll<HTMLElement>('[data-pause-offscreen="1"]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
          });
        },
        { rootMargin: '120px 0px 120px 0px' }
      );

      animatedNodes.forEach((node) => observer.observe(node));
      cleanupFns.push(() => observer.disconnect());
    }

    ScrollTrigger.refresh();

    return () => {
      cleanupFns.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <AmbientBackdrop />
      <IntroOverlay />
      <ScrollCompass />
      <Hero />
      <SectionTransition tone="brass-jade" />
      <About />
      <SectionTransition tone="ember-brass" />
      <ProcessRail />
      <SectionTransition tone="jade-ember" />
      <Skills />
      <SectionTransition tone="brass-jade" />
      <Projects />
      <SectionTransition tone="ember-brass" />
      <Experience />
      <SectionTransition tone="jade-ember" />
      <Education />
      <SectionTransition tone="brass-jade" />
      <Contact />
    </div>
  );
}
