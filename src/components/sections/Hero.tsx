'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '@/lib/portfolioData';
import Motif from '@/components/common/Motif';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-reveal-title', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.12,
    })
    .from('.hero-reveal-text', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.6')
    .from('.hero-reveal-cta', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: 0.1,
    }, '-=0.4')
    .from('.hero-reveal-panel', {
      opacity: 0,
      scale: 0.96,
      rotate: -1,
      duration: 1.2,
    }, '-=0.8');

    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 45,
        repeat: -1,
        ease: 'none',
      });
    }

    if (scrollCueRef.current) {
      gsap.to(scrollCueRef.current, {
        y: 6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden bg-transparent flex items-center">
      {/* Background Aurora Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] top-[15%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl animate-drift" />
        <div className="absolute right-[5%] top-[20%] h-[20rem] w-[20rem] rounded-full bg-jade/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[26rem] w-[26rem] rounded-full bg-ember/8 blur-3xl animate-drift" />
        <div className="absolute inset-x-0 top-1/3 mx-auto h-px w-[85%] surface-line opacity-20" />
      </div>

      <div className="relative z-10 container-wide py-24 md:py-32 flex items-center min-h-[90vh]">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Hero Main Copy */}
          <div className="max-w-3xl space-y-6">
            <p className="hero-reveal-title section-kicker text-xs md:text-sm">
              Artificial Intelligence / Full-Stack & IoT Systems
            </p>
            <h1 className="hero-reveal-title section-title text-5xl leading-[0.95] md:text-7xl lg:text-[6.8rem]">
              <span className="block text-paper/90">Hi, I'm</span>
              <span className="block text-gradient">{portfolioData.name}</span>
            </h1>

            <div className="hero-reveal-text space-y-5">
              <p className="max-w-xl text-xl text-sand/85 md:text-2xl font-medium leading-relaxed">
                {portfolioData.title}
              </p>
              <p className="max-w-xl text-base leading-8 text-paper/70 md:text-lg">
                {portfolioData.bio}
              </p>
            </div>

            <div className="hero-reveal-cta flex flex-col gap-4 sm:flex-row pt-4">
              <button
                onClick={() => handleScroll('projects')}
                className="magnetic-button cta-button pressable rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:scale-105"
              >
                Explore Projects
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="cta-button pressable rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-paper hover:bg-white/10 hover:border-accent/40 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Hero Bento Panel */}
          <div className="hero-reveal-panel relative lg:justify-self-end w-full lg:max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-jade/10 blur-xl pointer-events-none" />
            <div className="luxury-card relative overflow-hidden rounded-[2rem] p-6 md:p-8">
              <div ref={orbitRef} className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/10 bg-white/5 p-3.5 text-sand/60 backdrop-blur-md">
                <Motif variant="orbit" className="h-full w-full" />
              </div>
              
              <div className="relative space-y-6">
                <div>
                  <p className="section-kicker text-[0.62rem]">Academic Focus</p>
                  <h2 className="section-title mt-2 text-2xl md:text-3xl text-paper">Building solutions with algorithms & electronics</h2>
                </div>

                <div className="grid gap-4 grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/5 bg-white/5 p-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-sand/50">Study Portal</p>
                    <p className="mt-2 font-display text-3xl text-paper font-bold">50+</p>
                    <p className="mt-1 text-[0.7rem] text-paper/60">Centralized GIKI files via Firebase.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/5 bg-white/5 p-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-sand/50">Specialty</p>
                    <p className="mt-2 font-display text-3xl text-paper font-bold">AI & IoT</p>
                    <p className="mt-1 text-[0.7rem] text-paper/60">Arduino interfaces and Neural Nets.</p>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-white/5 bg-gradient-to-br from-accent/5 to-jade/5 p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-sand/50">Current pursuit</p>
                  <p className="mt-1.5 text-xs leading-6 text-paper/70">
                    Optimizing real-time IoT dashboard sensors and studying Data Structures & Artificial Neural Networks at GIKI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Scroll Cue */}
        <div ref={scrollCueRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={() => handleScroll('about')}
            className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl text-sand/60 hover:text-paper hover:border-accent/30 transition-all"
          >
            <span className="text-[0.55rem] uppercase tracking-[0.25em] font-semibold">Scroll</span>
            <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
