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
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-dark to-dark/50">
      <div className="container-wide">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient">Experience</h2>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-purple-500 transform -translate-x-1/2">
            <div className="timeline-connector absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent to-purple-500 transform -translate-x-1/2" style={{ height: '0%' }} />
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple-500" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className={`experience-item md:grid md:grid-cols-2 ${
                  idx % 2 === 0 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:absolute md:left-1/2 top-0 md:top-4 w-4 h-4 md:w-5 md:h-5 bg-accent rounded-full border-4 border-dark transform md:-translate-x-1/2">
                  <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-75" />
                </div>

                {/* Content */}
                <div className={`p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
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
