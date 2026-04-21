'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '@/lib/portfolioData';
import { ANIMATION_DURATION } from '@/lib/constants';
import Motif from '@/components/common/Motif';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll('.hero-reveal'), {
        opacity: 0,
        y: 28,
        duration: ANIMATION_DURATION.NORMAL,
        stagger: 0.08,
      });
    }

    if (titleRef.current) {
      tl.from(titleRef.current.children, {
        opacity: 0,
        y: 60,
        duration: ANIMATION_DURATION.NORMAL,
        stagger: 0.12,
      });
    }

    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 26,
          duration: ANIMATION_DURATION.NORMAL,
        },
        '-=0.45'
      );
    }

    if (ctaRef.current) {
      tl.from(
        ctaRef.current.children,
        {
          opacity: 0,
          y: 18,
          scale: 0.96,
          duration: ANIMATION_DURATION.NORMAL,
          stagger: 0.08,
        },
        '-=0.25'
      );
    }

    if (panelRef.current) {
      gsap.from(panelRef.current, {
        opacity: 0,
        y: 26,
        rotate: -3,
        duration: ANIMATION_DURATION.SLOW,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    if (scrollCueRef.current) {
      gsap.to(scrollCueRef.current, {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: 'none',
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
    <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden bg-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-96 w-96 rounded-full bg-brass/15 blur-3xl animate-drift" />
        <div className="absolute right-[6%] top-32 h-80 w-80 rounded-full bg-jade/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-8rem] left-1/4 h-[26rem] w-[26rem] rounded-full bg-ember/10 blur-3xl animate-drift" />
        <div className="absolute inset-x-0 top-1/3 mx-auto h-px w-[78%] surface-line opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_0%,rgba(255,255,255,0.02)_45%,transparent_70%)] opacity-50" />
      </div>

      <div className="relative z-10 container-wide flex min-h-screen items-center py-28 md:py-36">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="hero-reveal section-kicker mb-5 text-xs md:text-sm">Portfolio / Creative systems / Scroll choreography</p>
            <h1 ref={titleRef} className="section-title text-6xl leading-[0.9] md:text-8xl lg:text-[7.8rem]">
              <span className="hero-reveal block text-paper/90">Hi, I'm</span>
              <span className="hero-reveal block text-gradient">{portfolioData.name}</span>
            </h1>

            <div className="mt-8 max-w-2xl space-y-5">
              <p ref={subtitleRef} className="max-w-xl text-xl text-sand/85 md:text-2xl">
                {portfolioData.title}
              </p>

              <p className="max-w-xl text-base leading-8 text-paper/70 md:text-lg">
                {portfolioData.bio}
              </p>
            </div>

            <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => handleScroll('projects')}
                className="magnetic-button rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Work
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="rounded-full border border-paper/15 bg-paper/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:bg-paper/10"
              >
                Start a Project
              </button>
            </div>
          </div>

          <div ref={panelRef} className="relative lg:justify-self-end lg:max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brass/15 via-transparent to-jade/10 blur-2xl" />
            <div className="luxury-card relative overflow-hidden rounded-[2rem] p-6 md:p-8">
              <div ref={orbitRef} className="absolute right-6 top-6 h-24 w-24 rounded-full border border-paper/10 bg-paper/5 p-4 text-sand/70 backdrop-blur-md">
                <Motif variant="orbit" className="h-full w-full" />
              </div>
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-kicker text-[0.62rem]">Selected focus</p>
                    <h2 className="section-title mt-2 text-3xl text-paper">Motion, layout, and systems that feel authored</h2>
                  </div>
                  <span className="rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-sand">
                    Open
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-paper/10 bg-paper/5 p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/60">Experience</p>
                    <p className="mt-3 font-display text-4xl text-paper">5+</p>
                    <p className="mt-2 text-sm text-paper/70">Years building interfaces and motion systems.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-paper/10 bg-paper/5 p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/60">Mode</p>
                    <p className="mt-3 font-display text-4xl text-paper">Editorial</p>
                    <p className="mt-2 text-sm text-paper/70">Warm palettes, layered depth, and tactile motion.</p>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-paper/10 bg-[linear-gradient(135deg,rgba(197,138,58,0.12),rgba(60,111,102,0.10),rgba(180,75,45,0.10))] p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/60">Current pursuit</p>
                  <p className="mt-2 text-sm leading-7 text-paper/80">
                    Designing interfaces that behave like print layouts under glass: crisp hierarchy, warm contrast, and motion that reveals rather than distracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={scrollCueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-3 backdrop-blur-xl">
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-sand/60">Scroll to explore</p>
            <svg className="h-5 w-5 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
