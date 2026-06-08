'use client';

import { portfolioData } from '@/lib/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Profile / Background / Intent</p>
          <h2 className="section-title text-4xl md:text-6xl mb-6 text-gradient">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual Illustration */}
          <div
            className="luxury-card relative h-80 overflow-hidden rounded-[2rem] md:h-[28rem] flex items-center justify-center p-6 bg-gradient-to-br from-ink to-dark border border-white/5 reveal-on-scroll"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-jade/5" />
            <svg viewBox="0 0 200 200" className="w-full h-full max-h-[22rem] text-accent/80 opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pulsing background glow */}
              <circle cx="100" cy="100" r="60" fill="url(#radial-glow)" className="animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Connected node graph lines with slow animated shifts */}
              <g stroke="currentColor" strokeWidth="1" opacity="0.3">
                <line x1="40" y1="60" x2="100" y2="40" className="animate-pulse" />
                <line x1="40" y1="60" x2="60" y2="120" />
                <line x1="100" y1="40" x2="160" y2="60" />
                <line x1="160" y1="60" x2="140" y2="120" />
                <line x1="60" y1="120" x2="100" y2="160" />
                <line x1="140" y1="120" x2="100" y2="160" />
                <line x1="100" y1="40" x2="100" y2="100" strokeWidth="1.5" opacity="0.6" />
                <line x1="60" y1="120" x2="100" y2="100" strokeWidth="1.5" opacity="0.6" />
                <line x1="140" y1="120" x2="100" y2="100" strokeWidth="1.5" opacity="0.6" />
                <line x1="100" y1="160" x2="100" y2="100" strokeWidth="1.5" opacity="0.6" />
              </g>

              {/* Glowing Nodes with bouncing translation animations */}
              <g fill="currentColor">
                {/* Node 1 */}
                <circle cx="40" cy="60" r="5" className="text-accent animate-ping" />
                <circle cx="40" cy="60" r="4" className="text-accent" />
                
                {/* Node 2 */}
                <circle cx="100" cy="40" r="5" className="text-jade animate-ping" style={{ animationDelay: '1s' }} />
                <circle cx="100" cy="40" r="4" className="text-jade" />
                
                {/* Node 3 */}
                <circle cx="160" cy="60" r="5" className="text-accent animate-ping" style={{ animationDelay: '2s' }} />
                <circle cx="160" cy="60" r="4" className="text-accent" />
                
                {/* Node 4 */}
                <circle cx="140" cy="120" r="5" className="text-jade animate-ping" style={{ animationDelay: '0.5s' }} />
                <circle cx="140" cy="120" r="4" className="text-jade" />
                
                {/* Node 5 */}
                <circle cx="60" cy="120" r="5" className="text-accent animate-ping" style={{ animationDelay: '1.5s' }} />
                <circle cx="60" cy="120" r="4" className="text-accent" />

                {/* Node 6 */}
                <circle cx="100" cy="160" r="5" className="text-ember animate-ping" style={{ animationDelay: '2.5s' }} />
                <circle cx="100" cy="160" r="4" className="text-ember" />

                {/* Central AI node */}
                <circle cx="100" cy="100" r="8" className="text-paper animate-pulse" />
                <circle cx="100" cy="100" r="5" className="text-accent" />
              </g>

              {/* Orbiting ring */}
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,6" opacity="0.4" className="animate-spin" style={{ animationDuration: '30s' }} />

              <defs>
                <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Content Column */}
          <div className="space-y-6 reveal-on-scroll">
            <p className="text-lg leading-relaxed text-paper/78">
              I'm a Computer Science undergraduate at the Ghulam Ishaq Khan Institute (GIKI) specializing in Artificial Intelligence. I combine strong foundations in Full-Stack Web Development and Backend Systems with a passion for designing scalable software solutions.
            </p>

            <p className="text-lg leading-relaxed text-paper/78">
              My toolkit spans React.js and Node.js for scalable web interfaces, Python for neural networks and data science (NumPy, Pandas, Matplotlib), and C/C++ for algorithmic problem-solving and database design.
            </p>

            <p className="text-lg leading-relaxed text-paper/78">
              I am active in my campus communities, contributing to GDG on Campus as a Full-Stack Developer and working with AIAA GIKI on simulation concepts. I love turning complex logic into structured, practical applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="luxury-card rounded-[1.5rem] p-4">
                <p className="font-display text-3xl text-brass font-bold">50+</p>
                <p className="text-xs text-sand/70">Portal Resources</p>
              </div>
              <div className="luxury-card rounded-[1.5rem] p-4">
                <p className="font-display text-3xl text-jade font-bold">GIKI '28</p>
                <p className="text-xs text-sand/70">Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
