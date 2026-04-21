'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const triggerHaptic = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const handleNavClick = (id: string) => {
    triggerHaptic();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-paper/10 bg-ink/72 backdrop-blur-2xl">
        <div className="container-wide flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-3 text-paper">
            <span className="font-display text-2xl tracking-[0.22em]">HR</span>
            <span className="hidden sm:block text-[0.62rem] uppercase tracking-[0.32em] text-sand/70">
              Motion portfolio
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-paper/10 bg-paper/5 px-2 py-1 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`pressable rounded-full px-4 py-2 text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-paper text-ink shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
                    : 'text-sand/70 hover:bg-paper/8 hover:text-paper'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              triggerHaptic();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden rounded-full border border-paper/15 bg-paper/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-paper"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-brass via-ember to-jade transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        {isMobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-paper/10 bg-ink/95 px-4 py-4 md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`pressable rounded-xl px-3 py-3 text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98] ${
                    activeSection === item.id
                      ? 'bg-paper text-ink'
                      : 'border border-paper/10 bg-paper/5 text-sand/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
