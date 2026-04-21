'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.education-item');

      gsap.from(items, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.6,
      });
    }
  }, []);

  return (
    <section id="education" className="py-20 md:py-32 bg-dark">
      <div className="container-wide">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient">Education</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="education-item p-6 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <span className="text-xl">🎓</span>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                {edu.degree}
              </h3>
              <p className="text-accent font-semibold mb-1">{edu.field}</p>

              <div className="flex items-center justify-between">
                <p className="text-gray-400">{edu.school}</p>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-2">Completion</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-accent to-purple-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-accent">Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all hover:bg-white/10 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">✓</span>
                  <h4 className="font-semibold group-hover:text-accent transition-colors">
                    {cert.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
