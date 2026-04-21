export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gradient mb-2">Hassan Raza</h3>
            <p className="text-gray-400 text-sm">Full-stack developer crafting dynamic web experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#experience" className="hover:text-accent transition">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} Hassan Raza. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy</a>
              <a href="#" className="hover:text-accent transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
