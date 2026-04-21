'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.experience-item');

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -50,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.6,
        });
      });

      // Animate timeline connector
      const connector = containerRef.current.querySelector('.timeline-connector');
      if (connector) {
        gsap.from(connector, {
          height: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 30%',
            scrub: true,
            markers: false,
          },
        });
      }
    }
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide">
        <p className="section-kicker mb-4 text-xs md:text-sm">Timeline / Roles / Momentum</p>
        <h2 className="section-title text-4xl md:text-6xl mb-16 text-gradient">Experience</h2>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10">
            <div className="timeline-connector absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-brass via-ember to-jade" style={{ height: '0%' }} />
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brass to-jade" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className={`experience-item md:grid md:grid-cols-2 ${
                  idx % 2 === 0 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:absolute md:left-1/2 top-0 md:top-4 h-4 w-4 rounded-full border border-paper/15 bg-brass transform md:-translate-x-1/2 md:h-5 md:w-5">
                  <div className="absolute inset-0 rounded-full bg-brass/40 animate-pulse opacity-75" />
                </div>

                {/* Content */}
                <div className={`luxury-card rounded-[1.75rem] p-6 transition-all duration-300 ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-2xl text-brass">{exp.title}</h3>
                      <p className="text-sm text-sand/70">{exp.company}</p>
                    </div>
                    <span className="ml-4 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-sand/45">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-4 text-paper/76">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-sm text-paper/65">
                        <span className="mt-1 text-brass">→</span>
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
