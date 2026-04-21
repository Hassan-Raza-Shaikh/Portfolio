'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const previewContent: Record<string, { problem: string; approach: string; outcome: string }> = {
  '1': {
    problem: 'Growers lacked one workflow to monitor growth and harvesting readiness.',
    approach: 'Built an authenticated full-stack app with upload flows and API-backed tracking.',
    outcome: 'Created a practical dashboard for day-to-day plant monitoring and decision support.',
  },
  '2': {
    problem: 'Video-first learning content remained inaccessible for many deaf learners.',
    approach: 'Used speech-to-text plus LLM simplification and ASL gloss generation in one flow.',
    outcome: 'Improved accessibility through transcript, gloss, and sign-oriented video outputs.',
  },
  '3': {
    problem: 'Course and guide content needed structured, scalable publishing.',
    approach: 'Designed a Quarto-based content system with notebook and documentation integration.',
    outcome: 'Enabled scalable educational publishing with a cleaner authoring workflow.',
  },
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const track = trackRef.current;
      const trackWidth = track.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;

      if (trackWidth > containerWidth && !prefersReducedMotion) {
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

      const cards = track.querySelectorAll<HTMLElement>('.project-card');
      cards.forEach((card, idx) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 0.6,
          delay: idx * 0.04,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });

        if (prefersReducedMotion) return;

        const visual = card.querySelector<HTMLElement>('.project-visual');
        const title = card.querySelector<HTMLElement>('.project-title');

        const handleMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateX: -y * 5,
            rotateY: x * 7,
            transformPerspective: 900,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: true,
          });

          gsap.to(visual, {
            xPercent: x * 8,
            yPercent: y * 8,
            scale: 1.04,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: true,
          });

          gsap.to(title, {
            x: x * 6,
            y: y * 4,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: true,
          });
        };

        const resetMove = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.42, ease: 'power2.out', overwrite: true });
          gsap.to([visual, title], {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            duration: 0.42,
            ease: 'power2.out',
            overwrite: true,
          });
        };

        card.addEventListener('pointermove', handleMove);
        card.addEventListener('pointerleave', resetMove);
        card.addEventListener('blur', resetMove);

        ScrollTrigger.create({
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          onLeave: resetMove,
          onLeaveBack: resetMove,
        });
      });
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide mb-12">
        <p className="section-kicker mb-4 text-xs md:text-sm">Selected work / Case studies / Play</p>
        <h2 data-heading-reveal="words" className="section-title text-4xl md:text-6xl text-gradient">Featured Projects</h2>
        <p className="mt-4 max-w-xl text-paper/70">
          Scroll horizontally to explore my latest work. Each project showcases my expertise in full-stack development and creative animation.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.03))]">
        <div ref={trackRef} className="flex gap-8 px-8 py-12 will-change-transform md:px-16">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className="project-card luxury-card pressable flex-shrink-0 w-[24rem] overflow-hidden rounded-[2rem] transition-all duration-300 group hover:-translate-y-1"
              onMouseEnter={() => setActivePreview(project.id)}
              onMouseLeave={() => setActivePreview((current) => (current === project.id ? null : current))}
            >
              <div className="project-visual relative h-56 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(197,138,58,0.24),transparent_30%),radial-gradient(circle_at_80%_24%,rgba(60,111,102,0.18),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-25 animate-float-slow">◐</div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.06),rgba(0,0,0,0.36))] opacity-70 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="project-title mb-2 font-display text-2xl text-paper transition-colors group-hover:text-brass">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-7 text-paper/72">{project.description}</p>

                <button
                  type="button"
                  onClick={() => setActivePreview((current) => (current === project.id ? null : project.id))}
                  className="pressable mb-4 rounded-full border border-paper/15 bg-paper/6 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-sand/75"
                >
                  {activePreview === project.id ? 'Hide insights' : 'Preview insights'}
                </button>

                {activePreview === project.id && previewContent[project.id] && (
                  <div className="mb-4 space-y-2 rounded-xl border border-paper/12 bg-paper/6 p-3 text-xs leading-6 text-paper/75">
                    <p><span className="text-sand/80">Problem:</span> {previewContent[project.id].problem}</p>
                    <p><span className="text-sand/80">Approach:</span> {previewContent[project.id].approach}</p>
                    <p><span className="text-sand/80">Outcome:</span> {previewContent[project.id].outcome}</p>
                  </div>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-paper/10 bg-paper/6 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-sand/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-paper/10 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable flex-1 rounded-full border border-brass/30 bg-brass/10 py-2 text-center text-sm text-paper transition-all hover:border-brass/50 hover:bg-brass/18"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable flex-1 rounded-full border border-paper/10 bg-paper/6 py-2 text-center text-sm text-paper/80 transition-all hover:border-paper/20 hover:bg-paper/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
