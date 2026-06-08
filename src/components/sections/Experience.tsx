'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (containerRef.current) {
      const connector = containerRef.current.querySelector('.timeline-connector');
      if (connector) {
        gsap.fromTo(
          connector,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 40%',
              end: 'bottom 60%',
              scrub: true,
            },
          }
        );
      }
    }
  }, []);

  return (
    <section id="experience" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Timeline / Campus Roles / Embedded Software</p>
          <h2 className="section-title text-4xl md:text-6xl text-gradient">Experience</h2>
        </div>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Vertical Timeline connector lines */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10 pointer-events-none">
            <div className="timeline-connector absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-brass via-ember to-jade" style={{ height: '0%' }} />
          </div>

          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brass to-jade pointer-events-none" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className={`experience-item md:grid md:grid-cols-2 reveal-on-scroll relative ${
                  idx % 2 === 0 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Timeline center node dot */}
                <div className="absolute -left-8 md:absolute md:left-1/2 top-1.5 md:top-6 h-4 w-4 rounded-full border border-white/20 bg-brass transform md:-translate-x-1/2 md:h-5 md:w-5 z-10">
                  <div className="absolute inset-0 rounded-full bg-brass/30 animate-pulse opacity-75" />
                </div>

                {/* Timeline Card */}
                <div className={`luxury-card rounded-[2rem] p-6 md:p-8 transition-all duration-300 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'md:col-start-2' : ''
                } hover:border-ember/45`}>
                  <div>
                    <div className="flex items-start justify-between mb-4 border-b border-white/5 pb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-brass group-hover:text-gradient leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-sand/65 mt-1">{exp.company}</p>
                      </div>
                      <span className="ml-4 whitespace-nowrap text-xs uppercase tracking-widest text-sand/50 font-mono mt-1">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mb-4 text-paper/75 text-sm leading-7">
                      {exp.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-sand/70 leading-relaxed">
                        <span className="text-brass mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
