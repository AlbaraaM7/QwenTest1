import { Rocket, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 p-[2px]">
                <div className="w-full h-full rounded-xl bg-cosmic-bg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl">ORBIT</span>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Where University Talent Collides With Real Bounties. 
              Building the future of student work in the UAE.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400">●</span>
              <span className="font-mono text-xs text-gray-500">UAE Campuses Active</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {['Browse Bounties', 'How It Works', 'Student Showcase', 'Earnings Calculator'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Competition Details */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Competition</h4>
            <div className="space-y-3">
              <div className="p-3 bg-cosmic-elevated rounded-xl border border-white/5">
                <div className="font-mono text-xs text-amber-400 mb-1">DesignAthon 2026</div>
                <div className="font-body text-sm text-gray-400">GDC RIT Dubai × +twe</div>
              </div>
              <div className="p-3 bg-cosmic-elevated rounded-xl border border-white/5">
                <div className="font-mono text-xs text-emerald-400 mb-1">Category</div>
                <div className="font-body text-sm text-gray-400">Web Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Ghost Typography */}
        <div className="relative mb-16 overflow-hidden">
          <h2 className="font-display font-black text-[12vw] sm:text-[10vw] leading-none text-transparent bg-gradient-to-r from-white/[0.14] via-white/[0.06] to-transparent bg-clip-text select-none">
            ORBIT
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="font-mono text-xs text-gray-500">
            © 2026 ORBIT. Built for GDC RIT Dubai DesignAthon.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
