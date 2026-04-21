'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const track = trackRef.current;
      const trackWidth = track.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;

      // Only apply horizontal scroll if content is wider than container
      if (trackWidth > containerWidth) {
        const distance = trackWidth - containerWidth;

        gsap.to(track, {
          x: -distance,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${distance * 1.5}`,
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
            markers: false,
          },
        });
      }

      // Animate project cards
      const cards = track.querySelectorAll('.project-card');
      cards.forEach((card, idx) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide mb-12">
        <p className="section-kicker mb-4 text-xs md:text-sm">Selected work / Case studies / Play</p>
        <h2 className="section-title text-4xl md:text-6xl text-gradient">Featured Projects</h2>
        <p className="mt-4 max-w-xl text-paper/70">
          Scroll horizontally to explore my latest work. Each project showcases my expertise in full-stack development and creative animation.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.03))]">
        <div
          ref={trackRef}
          className="flex gap-8 px-8 md:px-16 py-12 will-change-transform"
        >
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="project-card luxury-card flex-shrink-0 w-[24rem] overflow-hidden rounded-[2rem] transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(197,138,58,0.24),transparent_30%),radial-gradient(circle_at_80%_24%,rgba(60,111,102,0.18),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-25 animate-float-slow">◐</div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.06),rgba(0,0,0,0.36))] opacity-70 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2 text-paper transition-colors group-hover:text-brass">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-7 text-paper/72">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-paper/10 bg-paper/6 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-sand/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-paper/10 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-brass/30 bg-brass/10 py-2 text-center text-sm text-paper transition-all hover:border-brass/50 hover:bg-brass/18"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-paper/10 bg-paper/6 py-2 text-center text-sm text-paper/80 transition-all hover:border-paper/20 hover:bg-paper/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
