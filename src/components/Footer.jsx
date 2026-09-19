import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 p-[2px]">
                <div className="w-full h-full rounded-xl bg-cosmic-card flex items-center justify-center">
                  <span className="font-display font-bold text-lg gradient-text">O</span>
                </div>
              </div>
              <span className="font-display font-extrabold text-xl">ORBIT</span>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Where University Talent Collides With Real Bounties. The fastest path from campus to commercial proof-of-work.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                UAE Campuses
              </span>
            </div>
          </div>

          {/* Platform Links Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#bounties" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Browse Bounties
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Student Showcase
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Earnings Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Competition Details Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Competition</h4>
            <div className="p-4 bg-cosmic-elevated rounded-xl border border-white/5 mb-4">
              <p className="font-mono text-xs text-amber-400 mb-2">DesignAthon 2026</p>
              <p className="font-body text-sm text-gray-300">GDC RIT Dubai × +twe</p>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Competition Brief
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Judging Criteria
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Submission Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ghost Typography */}
        <div className="relative mb-12 overflow-hidden">
          <h2 className="font-display font-black text-[12vw] sm:text-[10vw] leading-none ghost-typography text-center select-none">
            ORBIT
          </h2>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-mono text-xs text-gray-500">
            © 2026 ORBIT. Built for GDC RIT Dubai × +twe DesignAthon.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
