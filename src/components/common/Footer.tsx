export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink/90">
      <div className="container-wide py-12 md:py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="section-title mb-2 text-3xl text-gradient">Hassan Raza</h3>
            <p className="max-w-sm text-sm leading-7 text-paper/65">Full-stack developer crafting motion-led web experiences with editorial structure and tactile contrast.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.28em] text-sand/45">Quick Links</h4>
            <ul className="space-y-2 text-sm text-paper/65">
              <li><a href="#projects" className="transition hover:text-brass">Projects</a></li>
              <li><a href="#experience" className="transition hover:text-brass">Experience</a></li>
              <li><a href="#contact" className="transition hover:text-brass">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.28em] text-sand/45">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-paper/65 transition hover:text-brass">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-paper/65 transition hover:text-brass">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-paper/65 transition hover:text-brass">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-paper/10 pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-paper/45 md:flex-row">
            <p>&copy; {currentYear} Hassan Raza. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="transition hover:text-brass">Privacy</a>
              <a href="#" className="transition hover:text-brass">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
