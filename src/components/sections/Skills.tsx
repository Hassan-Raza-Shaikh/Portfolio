'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section id="skills" className="py-20 md:py-32 bg-dark">
      <div className="container-wide">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient">Skills & Expertise</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-6 text-accent">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                        data-width={85 + Math.random() * 15}
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
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <p className="text-3xl font-bold text-accent mb-2">Expert</p>
            <p className="text-gray-400 text-sm">React, Next.js, TypeScript</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <p className="text-3xl font-bold text-accent mb-2">Advanced</p>
            <p className="text-gray-400 text-sm">Node.js, PostgreSQL, AWS</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <p className="text-3xl font-bold text-accent mb-2">Proficient</p>
            <p className="text-gray-400 text-sm">Docker, GraphQL, DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
