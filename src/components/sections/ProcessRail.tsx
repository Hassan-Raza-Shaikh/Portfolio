'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Motif from '@/components/common/Motif';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'Narrative Frame',
    text: 'Map product goals into a visual rhythm where hierarchy does as much work as copy.',
    motif: 'orbit' as const,
  },
  {
    id: '02',
    title: 'Motion Language',
    text: 'Define transitions that reveal state changes and intent, not decorative noise.',
    motif: 'weave' as const,
  },
  {
    id: '03',
    title: 'Systems Build',
    text: 'Convert patterns into reusable components with consistent behavior and tactile detail.',
    motif: 'crest' as const,
  },
  {
    id: '04',
    title: 'Polish Loop',
    text: 'Tune accessibility, pacing, and interaction nuance until the interface feels inevitable.',
    motif: 'pulse' as const,
  },
];

export default function ProcessRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !viewportRef.current) return;

    const track = trackRef.current;
    const section = sectionRef.current;
    const viewport = viewportRef.current;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const distance = Math.max(track.scrollWidth - viewport.clientWidth, 0);

      if (distance > 0) {
        gsap.to(track, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${distance * 1.2}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }

      return () => {
        gsap.set(track, { clearProps: 'transform' });
      };
    });

    mm.add('(max-width: 1023px)', () => {
      gsap.set(track, { clearProps: 'transform' });
    });

    const cards = track.querySelectorAll('.rail-card');
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      rotate: -1.5,
      stagger: 0.1,
      duration: 0.7,
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      mm.revert();
    };
  }, []);

  const scrollToStep = (index: number) => {
    if (!viewportRef.current || !trackRef.current) return;

    const viewport = viewportRef.current;
    const cards = Array.from(trackRef.current.querySelectorAll<HTMLElement>('.rail-card'));
    const target = cards[index];

    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      gsap.killTweensOf(target);
      gsap.fromTo(
        target,
        {
          scale: 1,
          y: 0,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
        },
        {
          scale: 1.012,
          y: -3,
          boxShadow: '0 28px 80px rgba(197, 138, 58, 0.24)',
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out',
        }
      );
    }

    const centeredLeft = target.offsetLeft - (viewport.clientWidth - target.offsetWidth) / 2;
    viewport.scrollTo({
      left: Math.max(centeredLeft, 0),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!viewportRef.current || !trackRef.current) return;

    const viewport = viewportRef.current;
    const track = trackRef.current;

    const updateRailState = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.rail-card'));
      if (!cards.length) return;

      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      const maxScrollLeft = Math.max(viewport.scrollWidth - viewport.clientWidth, 0);
      setActiveIndex(closestIndex);
      setCanScrollLeft(viewport.scrollLeft > 4);
      setCanScrollRight(viewport.scrollLeft < maxScrollLeft - 4);
    };

    updateRailState();
    viewport.addEventListener('scroll', updateRailState, { passive: true });
    window.addEventListener('resize', updateRailState);

    return () => {
      viewport.removeEventListener('scroll', updateRailState);
      window.removeEventListener('resize', updateRailState);
    };
  }, []);

  return (
    <section id="process-rail" ref={sectionRef} className="relative overflow-hidden py-16 md:py-20">
      <div className="container-wide mb-8">
        <p className="section-kicker mb-4 text-xs md:text-sm">Editorial rail / Process / Signature</p>
        <h2 className="section-title text-4xl md:text-6xl text-gradient">How I Shape A Build</h2>
      </div>

      <p className="container-wide mb-4 text-xs uppercase tracking-[0.24em] text-sand/45 lg:hidden">
        Swipe sideways to move through the rail
      </p>

      <div
        ref={viewportRef}
        className="relative overflow-x-auto overflow-y-hidden px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
        aria-label="Interactive horizontal process rail"
      >
        <div
          className={`pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-dark via-dark/50 to-transparent transition-opacity duration-300 lg:hidden ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-dark via-dark/50 to-transparent transition-opacity duration-300 lg:hidden ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        />

        <div ref={trackRef} className="flex snap-x snap-mandatory gap-6 px-4 pb-8 md:gap-8 md:px-8 lg:px-16">
          {steps.map((step) => (
            <article
              key={step.id}
              className="rail-card luxury-card flex w-[86vw] snap-start shrink-0 flex-col rounded-[2rem] p-6 sm:w-[26rem] md:w-[30rem] lg:w-[24rem]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-4xl text-brass/80">{step.id}</span>
                <div className="h-14 w-14 text-sand/70">
                  <Motif variant={step.motif} className="h-full w-full" />
                </div>
              </div>

              <h3 className="font-display text-3xl leading-tight text-paper">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-paper/70">{step.text}</p>

              <div className="mt-auto pt-8">
                <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(243,234,223,0.32),transparent)]" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2 lg:hidden" aria-label="Rail progress">
        {steps.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            onClick={() => scrollToStep(idx)}
            aria-label={`Go to step ${step.id}: ${step.title}`}
            aria-current={idx === activeIndex ? 'true' : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'w-8 bg-brass' : 'w-3 bg-paper/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
