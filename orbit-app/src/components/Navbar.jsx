import { Rocket, Briefcase, Lightbulb } from 'lucide-react';

const Navbar = ({ onOpenProblemSolution }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-cosmic-bg/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 p-[2px]">
              <div className="w-full h-full rounded-xl bg-cosmic-bg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-tight">ORBIT</h1>
              <span className="font-mono text-xs text-gray-500">UAE Campuses</span>
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <div className="flex items-center gap-1 px-2 py-1.5 bg-cosmic-elevated/50 rounded-full border border-white/5">
              {['Discover', 'How It Works', 'Problem & Solution'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProblemSolution}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-xl hover:bg-amber-500/10 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              Problem & Solution
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/25">
              <Briefcase className="w-4 h-4" />
              Explore Bounties
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
