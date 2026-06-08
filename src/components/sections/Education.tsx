'use client';

import { portfolioData } from '@/lib/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="mb-12 reveal-on-scroll">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Credentials</h2>
          <p className="max-w-xl text-paper/70">
            My academic journey at GIKI majoring in Artificial Intelligence, alongside specialized certifications in generative AI, neural networks, and math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="education-item luxury-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group reveal-on-scroll"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl">🎓</span>
                </div>

                <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors font-display text-paper">
                  {edu.degree}
                </h3>
                <p className="text-accent font-semibold mb-2">{edu.field}</p>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-400">{edu.school}</p>
                  <span className="text-sm text-gray-500 font-medium font-mono">{edu.year}</span>
                </div>
              </div>

              {/* Coursework list */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-xs uppercase tracking-wider text-sand/50 mb-3 font-bold">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures & Algorithms', 'Linear Algebra', 'Probability & Statistics', 'Object-Oriented Programming', 'Artificial Neural Networks'].map((course, cIdx) => (
                    <span key={cIdx} className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-sand/80 font-medium">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Activities and Leadership Card */}
          <div className="education-item luxury-card luxury-card-green rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group reveal-on-scroll">
            <div>
              <div className="w-12 h-12 bg-ember/10 border border-ember/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ember/20 transition-colors">
                <span className="text-xl">⚡</span>
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-ember transition-colors font-display text-paper">
                Leadership & Activities
              </h3>
              <p className="text-ember font-semibold mb-4">Google Developers Group & AIAA</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div>
                <p className="text-sm font-bold text-paper/90">GDG on Campus</p>
                <p className="text-xs text-sand/70 mt-1 leading-relaxed">Participated in hackathons and campus development workshops.</p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <p className="text-sm font-bold text-paper/90">AIAA GIKI</p>
                <p className="text-xs text-sand/70 mt-1 leading-relaxed">Worked with peers on aerospace engineering and simulation concepts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-accent font-display reveal-on-scroll">Certifications & Coursework</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-[1.75rem] p-6 flex flex-col justify-between group cursor-pointer reveal-on-scroll"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-accent text-lg mt-0.5 font-bold">✓</span>
                    <h4 className="font-semibold text-base text-paper group-hover:text-accent transition-colors font-display leading-tight">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-1 pl-7">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mb-4 pl-7 font-mono">{cert.date}</p>
                </div>
                
                {cert.highlights && cert.highlights.length > 0 && (
                  <ul className="space-y-2 border-t border-white/5 pt-4 pl-1">
                    {cert.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-sand/70 leading-relaxed">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
