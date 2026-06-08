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
      const bars = containerRef.current.querySelectorAll('.skill-bar-fill');
      
      bars.forEach((bar) => {
        const width = (bar as HTMLElement).getAttribute('data-width') || '80';
        
        gsap.to(bar, {
          width: `${width}%`,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, []);

  return (
    <section id="skills" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Capabilities / Stack / Range</p>
          <h2 className="section-title text-4xl md:text-6xl text-gradient">Skills & Expertise</h2>
          <p className="mt-4 max-w-xl text-paper/70">
            A map of my technical skillset, spanning programming languages, deep learning frameworks, and backend systems.
          </p>
        </div>

        {/* Bento Grid layout for skill categories */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {portfolioData.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className={`luxury-card rounded-[2rem] p-6 md:p-8 transition-all duration-300 reveal-on-scroll ${
                idx === 1 || idx === 2 ? 'luxury-card-green' : ''
              }`}
            >
              <h3 className="mb-6 text-xl font-bold text-paper font-display uppercase tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIdx) => {
                  const percentValue = 80 + ((idx * 6 + skillIdx * 4) % 16);
                  return (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-paper/85">{skill}</span>
                        <span className="text-xs font-mono text-sand/50">{percentValue}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5 border border-white/5">
                        <div
                          className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${
                            idx === 1 || idx === 2 
                              ? 'from-ember to-jade' 
                              : 'from-accent to-accent-3'
                          }`}
                          data-width={percentValue}
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies panel */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 reveal-on-scroll">
          <div className="luxury-card rounded-[1.75rem] p-6 text-center">
            <p className="font-display text-2xl text-brass mb-2 font-bold">Expert</p>
            <p className="text-sm text-sand/75">Python, React.js, C/C++</p>
          </div>
          <div className="luxury-card luxury-card-green rounded-[1.75rem] p-6 text-center">
            <p className="font-display text-2xl text-ember mb-2 font-bold">Advanced</p>
            <p className="text-sm text-sand/75">Node.js, JavaScript, SQL, Firebase</p>
          </div>
          <div className="luxury-card luxury-card-blue rounded-[1.75rem] p-6 text-center">
            <p className="font-display text-2xl text-jade mb-2 font-bold">Proficient</p>
            <p className="text-sm text-sand/75">TensorFlow, NumPy, Arduino IDE, LaTeX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
