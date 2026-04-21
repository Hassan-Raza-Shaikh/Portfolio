'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/lib/portfolioData';
import Motif from '@/components/common/Motif';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.8,
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.6,
      });
    }
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-dark via-ink to-dark">
      <div className="container-wide">
        <p className="section-kicker mb-4 text-xs md:text-sm">Profile / Background / Intent</p>
        <h2 data-heading-reveal="words" className="section-title text-4xl md:text-6xl mb-16 text-gradient">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="luxury-card relative h-80 overflow-hidden rounded-[2rem] md:h-[28rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,138,58,0.22),transparent_35%),radial-gradient(circle_at_78%_28%,rgba(60,111,102,0.18),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-paper/15 bg-paper/8 text-5xl backdrop-blur-md">
                  <Motif variant="weave" className="h-16 w-16 text-sand/80" />
                </div>
                <p className="section-kicker text-[0.62rem]">Portrait / placeholder</p>
                <p className="mt-3 text-sm text-paper/70">Replace with a portrait or custom visual</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg leading-relaxed text-paper/78">
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and immersive digital experiences. My journey in tech started with a curiosity about how things work, which evolved into a career of solving complex problems through elegant code.
            </p>

            <p className="text-lg leading-relaxed text-paper/78">
              I specialize in modern frontend technologies like React and Next.js, combined with backend expertise in Node.js and cloud platforms. What truly drives me is the intersection of design and functionality—creating interfaces that not only look beautiful but feel responsive and alive.
            </p>

            <p className="text-lg leading-relaxed text-paper/78">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or crafting motion design experiments. I'm always excited about collaborating on projects that push boundaries and create meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="luxury-card rounded-[1.5rem] p-4">
                <p className="font-display text-3xl text-brass">5+</p>
                <p className="text-sm text-sand/70">Years Experience</p>
              </div>
              <div className="luxury-card rounded-[1.5rem] p-4">
                <p className="font-display text-3xl text-jade">25+</p>
                <p className="text-sm text-sand/70">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
