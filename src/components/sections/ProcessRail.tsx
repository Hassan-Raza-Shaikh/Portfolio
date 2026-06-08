'use client';

import Motif from '@/components/common/Motif';

const steps = [
  {
    id: '01',
    title: 'Algorithm Design',
    text: 'Formulating optimal code logic using advanced data structures, OOP patterns, and machine learning models.',
    motif: 'orbit' as const,
    color: 'text-accent',
  },
  {
    id: '02',
    title: 'Hardware & IoT',
    text: 'Interfacing Arduino microcontrollers with hardware sensors to capture plant and ambient data in real-time.',
    motif: 'weave' as const,
    color: 'text-ember',
  },
  {
    id: '03',
    title: 'Full-Stack Build',
    text: 'Structuring real-time dashboards with React.js, configuring Node.js backends, and setting up Firebase database layers.',
    motif: 'crest' as const,
    color: 'text-jade',
  },
  {
    id: '04',
    title: 'Polish & Optimize',
    text: 'Tuning API performance, optimizing database queries for 60% faster retrieval, and designing GenAI prompt workflows.',
    motif: 'pulse' as const,
    color: 'text-accent',
  },
];

export default function ProcessRail() {
  return (
    <section id="process-rail" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Engineering Flow / Process / Signature</p>
          <h2 className="section-title text-4xl md:text-6xl text-gradient">How I Shape A Build</h2>
        </div>

        {/* 2x2 Grid Layout for Desktop, Stacking Vertically on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {steps.map((step) => (
            <article
              key={step.id}
              className={`luxury-card flex flex-col justify-between rounded-[2rem] p-6 md:p-8 group reveal-on-scroll ${
                step.id === '02' || step.id === '03' ? 'luxury-card-green' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`font-display text-5xl font-bold opacity-30 group-hover:opacity-80 transition-opacity ${step.color}`}>
                  {step.id}
                </span>
                <div className={`h-16 w-16 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${step.color}`}>
                  <Motif variant={step.motif} className="h-full w-full animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-paper group-hover:text-gradient">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-paper/70">
                  {step.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5">
                <span className="text-[0.6rem] uppercase tracking-widest text-sand/40 group-hover:text-sand/70 transition-colors">
                  Phase {step.id} complete
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
