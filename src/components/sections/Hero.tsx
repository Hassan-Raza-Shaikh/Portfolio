'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { portfolioData } from '@/lib/portfolioData';
import { ANIMATION_DURATION } from '@/lib/constants';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: ANIMATION_DURATION.NORMAL,
        ease: 'power4.out',
      });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: ANIMATION_DURATION.NORMAL,
          ease: 'power4.out',
        },
        '-=0.4'
      );
    }

    // Animate CTA
    if (ctaRef.current) {
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: ANIMATION_DURATION.NORMAL,
          ease: 'power4.out',
        },
        '-=0.3'
      );
    }

    // Animate scroll cue
    if (scrollCueRef.current) {
      gsap.to(scrollCueRef.current, {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-gradient">{portfolioData.name}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {portfolioData.title}
        </p>

        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-base md:text-lg">
          {portfolioData.bio}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
