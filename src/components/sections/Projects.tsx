'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolioData';

const insights: Record<string, { problem: string; approach: string; outcome: string }> = {
  'study-portal': {
    problem: 'GIKI students lacked a unified academic portal to access course files and resource documents, leading to high search times.',
    approach: 'Built a centralized React dashboard with secure Firebase database architecture and efficient storage links.',
    outcome: 'Successfully hosted over 50 resources and slashed academic resource retrieval times by 60% for students.',
  },
  'equilearn': {
    problem: 'Video learning materials remain inaccessible for deaf or hard-of-hearing students.',
    approach: 'Built an NLP tool integrating speech-to-text transcribing, LLM summarizing, and ASL video output.',
    outcome: 'Created a Streamlit dashboard showing real-time transcripts and accessibility translations.',
  },
  'plant-growth': {
    problem: 'Agricultural analytics and plant growth datasets required centralized backend processing and a web-based dashboard for visualization.',
    approach: 'Developed custom REST APIs using Node.js/Express to aggregate data, designed schema structures, and built a React visualization interface for historical data.',
    outcome: 'Created a secure, high-throughput backend data pipeline with stable API endpoints and interactive frontend charts.',
  },
  'worldlines': {
    problem: 'Structuring complex data science notes and Jupyter notebooks into structured guides was a highly manual task.',
    approach: 'Designed a Quarto-based build pipeline targeting GitHub Pages for fast static page generation.',
    outcome: 'Simplified content authoring by linking interactive notebooks into a responsive reading interface.',
  },
};

export default function Projects() {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const toggleInsight = (id: string) => {
    setActivePreview((current) => (current === id ? null : id));
  };

  const getProjectCard = (project: typeof portfolioData.projects[number]) => {
    const hasInsight = activePreview === project.id;
    const insight = insights[project.id];

    switch (project.id) {
      case 'study-portal':
        return (
          <article
            key={project.id}
            className="luxury-card rounded-[2rem] p-6 md:p-8 md:col-span-8 flex flex-col justify-between group reveal-on-scroll"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-4">
                <span className="section-kicker text-[0.65rem] tracking-[0.25em]">Centralized Portal</span>
                <h3 className="project-title font-display text-2xl md:text-3xl text-paper font-bold group-hover:text-brass transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-paper/75">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-sand/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <button
                    onClick={() => toggleInsight(project.id)}
                    className="rounded-full border border-paper/15 bg-paper/6 px-4 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-sand/80 hover:bg-white/10 transition-colors font-semibold"
                  >
                    {hasInsight ? 'Hide Insights' : 'Preview Insights'}
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-xs text-paper/85 hover:bg-white/10 transition-colors font-semibold"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>

              {/* Graphic Mockup Column */}
              <div className="lg:col-span-5 h-48 md:h-56 rounded-[1.5rem] bg-gradient-to-br from-ink to-dark border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[0.55rem] text-sand/50 uppercase tracking-widest font-semibold">
                  <span>GIKI PORTAL CLOUD</span>
                  <span className="text-brass">50+ Files</span>
                </div>
                <div className="space-y-2 py-3 overflow-y-auto">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[0.55rem] text-sand/70 font-medium">
                    <span className="text-brass">📁</span> Artificial Neural Networks
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[0.55rem] text-sand/70 font-medium">
                    <span className="text-brass">📁</span> Data Structures & Algorithms
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[0.55rem] text-sand/70 font-medium">
                    <span className="text-brass">📁</span> Linear Algebra Courses
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
              </div>
            </div>

            {hasInsight && insight && (
              <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5 text-xs leading-6 text-paper/80 space-y-2 animate-fade-in">
                <p><span className="text-brass font-bold">Problem:</span> {insight.problem}</p>
                <p><span className="text-brass font-bold">Approach:</span> {insight.approach}</p>
                <p><span className="text-brass font-bold">Outcome:</span> {insight.outcome}</p>
              </div>
            )}
          </article>
        );

      case 'equilearn':
        return (
          <article
            key={project.id}
            className="luxury-card luxury-card-green rounded-[2rem] p-6 md:col-span-4 flex flex-col justify-between group reveal-on-scroll"
          >
            <div className="space-y-4">
              {/* Graphic Mockup */}
              <div className="h-40 rounded-[1.5rem] bg-gradient-to-br from-ink to-dark border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between text-[0.5rem] text-sand/50 uppercase tracking-widest font-semibold">
                  <span>Gemini NLP Core</span>
                  <span className="px-2 py-0.5 rounded bg-ember/10 text-ember border border-ember/25">ASL Active</span>
                </div>
                <div className="h-10 flex items-end gap-1.5 px-2">
                  <div className="w-full bg-ember/30 h-[25%] rounded-t animate-pulse" />
                  <div className="w-full bg-ember/40 h-[65%] rounded-t" />
                  <div className="w-full bg-ember/60 h-[90%] rounded-t animate-pulse" />
                  <div className="w-full bg-ember/50 h-[45%] rounded-t" />
                  <div className="w-full bg-ember/30 h-[75%] rounded-t" />
                  <div className="w-full bg-ember/20 h-[30%] rounded-t animate-pulse" />
                </div>
                <div className="text-[0.45rem] font-mono text-sand/40 border-t border-white/5 pt-1.5 flex items-center justify-between">
                  <span>[Input: Lecture.mp4]</span>
                  <span>[Transcribing...]</span>
                </div>
              </div>

              <span className="section-kicker text-[0.65rem] tracking-[0.25em] text-ember">AI Accessibility</span>
              <h3 className="project-title font-display text-2xl text-paper font-bold group-hover:text-ember transition-colors">
                {project.title}
              </h3>
              <p className="text-sm leading-7 text-paper/75">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-sand/80">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 border-t border-white/5 pt-4">
                <button
                  onClick={() => toggleInsight(project.id)}
                  className="flex-1 rounded-full border border-paper/15 bg-paper/6 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-sand/80 hover:bg-white/10 transition-colors font-semibold"
                >
                  {hasInsight ? 'Hide Details' : 'Insights'}
                </button>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-ember/20 bg-ember/5 py-2 text-center text-xs text-ember hover:bg-ember/15 transition-colors font-semibold"
                  >
                    Demo Link
                  </a>
                )}
              </div>
            </div>

            {hasInsight && insight && (
              <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-white/5 text-xs leading-6 text-paper/80 space-y-2 animate-fade-in">
                <p><span className="text-ember font-bold">Problem:</span> {insight.problem}</p>
                <p><span className="text-ember font-bold">Approach:</span> {insight.approach}</p>
                <p><span className="text-ember font-bold">Outcome:</span> {insight.outcome}</p>
              </div>
            )}
          </article>
        );

      case 'plant-growth':
        return (
          <article
            key={project.id}
            className="luxury-card luxury-card-blue rounded-[2rem] p-6 md:col-span-5 flex flex-col justify-between group reveal-on-scroll"
          >
            <div className="space-y-4">
              {/* Graphic Mockup */}
              <div className="h-40 rounded-[1.5rem] bg-gradient-to-br from-ink to-dark border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between text-[0.5rem] text-sand/50 uppercase tracking-widest font-semibold">
                  <span>API Telemetry Hub</span>
                  <span className="text-jade flex items-center gap-1 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-jade animate-pulse" /> Live Metrics
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <span className="text-[0.45rem] text-sand/55 uppercase">API Requests</span>
                    <span className="text-sm font-bold text-paper mt-0.5">1.2k<span className="text-[0.6rem] font-normal text-sand/50 font-sans">/min</span></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <span className="text-[0.45rem] text-sand/55 uppercase">DB Latency</span>
                    <span className="text-sm font-bold text-paper mt-0.5">18ms</span>
                  </div>
                </div>
                <div className="text-[0.45rem] font-mono text-sand/40 border-t border-white/5 pt-1.5 flex items-center justify-between">
                  <span>[Node.js Server: Active]</span>
                  <span>[Port: 8080]</span>
                </div>
              </div>

              <span className="section-kicker text-[0.65rem] tracking-[0.25em] text-jade">Backend Analytics</span>
              <h3 className="project-title font-display text-2xl text-paper font-bold group-hover:text-jade transition-colors">
                {project.title}
              </h3>
              <p className="text-sm leading-7 text-paper/75">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-sand/80">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 border-t border-white/5 pt-4">
                <button
                  onClick={() => toggleInsight(project.id)}
                  className="flex-1 rounded-full border border-paper/15 bg-paper/6 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-sand/80 hover:bg-white/10 transition-colors font-semibold"
                >
                  {hasInsight ? 'Hide Details' : 'Insights'}
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 py-2 text-center text-xs text-paper/85 hover:bg-white/10 transition-colors font-semibold"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </div>

            {hasInsight && insight && (
              <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-white/5 text-xs leading-6 text-paper/80 space-y-2 animate-fade-in">
                <p><span className="text-jade font-bold">Problem:</span> {insight.problem}</p>
                <p><span className="text-jade font-bold">Approach:</span> {insight.approach}</p>
                <p><span className="text-jade font-bold">Outcome:</span> {insight.outcome}</p>
              </div>
            )}
          </article>
        );

      case 'worldlines':
        return (
          <article
            key={project.id}
            className="luxury-card rounded-[2rem] p-6 md:col-span-7 flex flex-col justify-between group reveal-on-scroll"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-4">
                <span className="section-kicker text-[0.65rem] tracking-[0.25em]">Static Content Publishing</span>
                <h3 className="project-title font-display text-2xl text-paper font-bold group-hover:text-brass transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-paper/75">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-sand/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/5">
                  <button
                    onClick={() => toggleInsight(project.id)}
                    className="rounded-full border border-paper/15 bg-paper/6 px-4 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-sand/80 hover:bg-white/10 transition-colors font-semibold"
                  >
                    {hasInsight ? 'Hide Details' : 'Insights'}
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-xs text-paper/85 hover:bg-white/10 transition-colors font-semibold"
                    >
                      LinkedIn Post
                    </a>
                  )}
                </div>
              </div>

              {/* Graphic Mockup */}
              <div className="lg:col-span-5 h-44 rounded-[1.5rem] bg-gradient-to-br from-ink to-dark border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between text-[0.5rem] text-sand/50 uppercase tracking-widest font-semibold">
                  <span>Quarto Engine</span>
                  <span className="text-brass">GitHub Pages</span>
                </div>
                <div className="space-y-1.5 my-2">
                  <div className="h-4 w-full rounded bg-white/5 border border-white/10 flex items-center justify-between px-2 text-[0.45rem] text-sand/50 font-mono">
                    <span>index.qmd → HTML compile</span>
                    <span className="text-ember font-bold">100%</span>
                  </div>
                  <div className="h-4 w-11/12 rounded bg-white/5 border border-white/10 flex items-center justify-between px-2 text-[0.45rem] text-sand/50 font-mono">
                    <span>linear-alg.ipynb → HTML</span>
                    <span className="text-ember font-bold">100%</span>
                  </div>
                </div>
                <div className="text-[0.45rem] font-mono text-sand/40 border-t border-white/5 pt-1.5 flex items-center">
                  <span>[Compilation finished successfully]</span>
                </div>
              </div>
            </div>

            {hasInsight && insight && (
              <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5 text-xs leading-6 text-paper/80 space-y-2 animate-fade-in">
                <p><span className="text-brass font-bold">Problem:</span> {insight.problem}</p>
                <p><span className="text-brass font-bold">Approach:</span> {insight.approach}</p>
                <p><span className="text-brass font-bold">Outcome:</span> {insight.outcome}</p>
              </div>
            )}
          </article>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <p className="section-kicker mb-4 text-xs md:text-sm">Selected work / Portals / Web Applications</p>
          <h2 className="section-title text-4xl md:text-6xl text-gradient">Featured Projects</h2>
          <p className="mt-4 max-w-xl text-paper/70">
            A showcase of engineering solutions combining AI concepts, web architecture, and backend systems. Click 'Insights' on any card to view the problem-solving metrics.
          </p>
        </div>

        {/* Bento Grid: 12 Columns layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {portfolioData.projects.map((project) => getProjectCard(project))}
        </div>
      </div>
    </section>
  );
}
