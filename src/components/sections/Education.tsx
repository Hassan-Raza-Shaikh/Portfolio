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
        <h2 data-heading-reveal="words" className="section-title text-4xl md:text-5xl font-bold mb-16 text-gradient">Education & Credentials</h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="education-item p-6 bg-gradient-to-br from-accent/8 to-jade/8 rounded-[2rem] border border-white/10 hover:border-accent/40 transition-all duration-300 group backdrop-blur-md"
            >
              {/* Badge */}
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <span className="text-xl">🎓</span>
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors font-display text-paper">
                {edu.degree}
              </h3>
              <p className="text-accent font-semibold mb-2">{edu.field}</p>

              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">{edu.school}</p>
                <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
              </div>

              {/* Coursework list */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-sand/60 mb-3 font-semibold">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures & Algorithms', 'Linear Algebra', 'Probability & Statistics', 'Object-Oriented Programming', 'Artificial Neural Networks'].map((course, cIdx) => (
                    <span key={cIdx} className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-sand/80">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Activities and Leadership */}
          <div className="education-item p-6 bg-gradient-to-br from-ember/8 to-brass/8 rounded-[2rem] border border-white/10 hover:border-ember/40 transition-all duration-300 group backdrop-blur-md">
            {/* Badge */}
            <div className="w-12 h-12 bg-ember/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ember/30 transition-colors">
              <span className="text-xl">⚡</span>
            </div>

            <h3 className="text-2xl font-bold mb-1 group-hover:text-ember transition-colors font-display text-paper">
              Leadership & Activities
            </h3>
            <p className="text-ember font-semibold mb-4">Google Developers Group & AIAA</p>

            <div className="space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-paper/90">GDG on Campus</p>
                <p className="text-xs text-sand/70 mt-1">Participated in hackathons and campus development workshops.</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-sm font-semibold text-paper/90">AIAA GIKI</p>
                <p className="text-xs text-sand/70 mt-1">Worked with peers on aerospace engineering and simulation concepts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-accent font-display">Certifications & Learning</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 rounded-[1.75rem] border border-white/10 hover:border-accent/40 transition-all hover:bg-white/10 group cursor-pointer backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-xl">✓</span>
                  <h4 className="font-semibold text-lg text-paper group-hover:text-accent transition-colors font-display">
                    {cert.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-4">{cert.date}</p>
                
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  <li className="flex items-start gap-2 text-xs text-sand/70">
                    <span className="text-accent">•</span>
                    <span>Applied advanced prompting techniques for Generative AI.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-sand/70">
                    <span className="text-accent">•</span>
                    <span>Designed prompts for information extraction and automation.</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
