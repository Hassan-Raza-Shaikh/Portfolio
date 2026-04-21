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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on page load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen">
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
