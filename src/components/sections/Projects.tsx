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
    <section id="projects" className="py-20 bg-dark">
      <div className="container-wide mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Projects</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Scroll horizontally to explore my latest work. Each project showcases my expertise in full-stack development and creative animation.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-dark via-dark to-dark/80">
        <div
          ref={trackRef}
          className="flex gap-8 px-8 md:px-16 py-12 will-change-transform"
        >
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="project-card flex-shrink-0 w-96 bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-accent/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🖼️</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-sm bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors rounded"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-sm bg-white/5 text-gray-300 hover:bg-white/10 transition-colors rounded"
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
