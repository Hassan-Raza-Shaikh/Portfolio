'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { portfolioData } from '@/lib/portfolioData';

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
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-dark to-dark/50">
      <div className="container-wide">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative h-80 md:h-96 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-400">Profile Image</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and immersive digital experiences. My journey in tech started with a curiosity about how things work, which evolved into a career of solving complex problems through elegant code.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern frontend technologies like React and Next.js, combined with backend expertise in Node.js and cloud platforms. What truly drives me is the intersection of design and functionality—creating interfaces that not only look beautiful but feel responsive and alive.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or crafting motion design experiments. I'm always excited about collaborating on projects that push boundaries and create meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-3xl font-bold text-accent">5+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-3xl font-bold text-accent">25+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
