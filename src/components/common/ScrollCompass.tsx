'use client';

import { useEffect, useState } from 'react';

const storyStages = [
  { max: 0.24, label: 'Act I · Arrival' },
  { max: 0.52, label: 'Act II · Capability' },
  { max: 0.78, label: 'Act III · Execution' },
  { max: 1, label: 'Act IV · Contact' },
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollCompass() {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const currentProgress = scrollTop / max;
      setProgress(currentProgress);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.42) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const story = storyStages.find((stage) => progress <= stage.max)?.label ?? storyStages[storyStages.length - 1].label;

  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="fixed bottom-4 left-1/2 z-40 w-[92vw] max-w-md -translate-x-1/2 rounded-full border border-paper/15 bg-ink/78 px-4 py-3 backdrop-blur-xl md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:w-auto md:max-w-none md:-translate-y-1/2 md:translate-x-0 md:rounded-[1.25rem] md:px-3 md:py-4">
      <p className="mb-2 hidden text-[0.58rem] uppercase tracking-[0.3em] text-sand/60 md:block">{story}</p>
      <div className="flex items-center justify-between gap-1 md:flex-col md:items-stretch md:gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => jumpTo(section.id)}
            className={`pressable rounded-full px-2.5 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] transition-all md:w-full md:rounded-lg md:px-3 ${
              activeSection === section.id
                ? 'bg-paper text-ink'
                : 'text-sand/72 hover:bg-paper/10'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
