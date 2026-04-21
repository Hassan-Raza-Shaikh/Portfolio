'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const skillCards = containerRef.current.querySelectorAll('.skill-card');

      gsap.from(skillCards, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.6,
      });

      // Animate skill bars on scroll
      skillCards.forEach((card) => {
        const bars = card.querySelectorAll('.skill-bar-fill');
        bars.forEach((bar) => {
          const width = (bar as HTMLElement).getAttribute('data-width') || '80';
          gsap.to(bar, {
            width: `${width}%`,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      });
    }
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide">
        <p className="section-kicker mb-4 text-xs md:text-sm">Capabilities / Tools / Range</p>
        <h2 data-heading-reveal="words" className="section-title text-4xl md:text-6xl mb-16 text-gradient">Skills & Expertise</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card luxury-card rounded-[1.75rem] p-6 transition-all duration-300">
              <h3 className="mb-6 text-xl font-semibold text-paper">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-paper/80">{skill}</span>
                      <span className="text-xs uppercase tracking-[0.22em] text-sand/45">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-paper/8">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-brass via-ember to-jade"
                        data-width={85 + ((idx * 7 + skillIdx * 5) % 11)}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency levels */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div className="luxury-card rounded-[1.5rem] p-6 text-center">
            <p className="font-display text-3xl text-brass mb-2">Expert</p>
            <p className="text-sm text-sand/70">React, Next.js, TypeScript</p>
          </div>
          <div className="luxury-card rounded-[1.5rem] p-6 text-center">
            <p className="font-display text-3xl text-ember mb-2">Advanced</p>
            <p className="text-sm text-sand/70">Node.js, PostgreSQL, AWS</p>
          </div>
          <div className="luxury-card rounded-[1.5rem] p-6 text-center">
            <p className="font-display text-3xl text-jade mb-2">Proficient</p>
            <p className="text-sm text-sand/70">Docker, GraphQL, DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
