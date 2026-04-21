'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      
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

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="container-wide flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-gradient">
            HR
          </Link>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors relative ${
                  activeSection === item.id ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>
          <button className="md:hidden text-white">☰</button>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
