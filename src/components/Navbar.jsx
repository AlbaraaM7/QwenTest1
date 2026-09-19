import { useState, useEffect } from 'react';
import { Menu, X, Trophy, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenProblemSolution }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Discover', href: '#bounties' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Problem & Solution', href: '#problem-solution' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-[#050608]/90 border-b border-white/10' 
          : 'backdrop-blur-sm bg-[#050608]/70 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left - Brand */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 p-[2px]">
                <div className="w-full h-full rounded-xl bg-cosmic-card flex items-center justify-center">
                  <span className="font-display font-bold text-lg gradient-text">O</span>
                </div>
              </div>
              <div>
                <h1 className="font-display font-extrabold text-xl tracking-tight">ORBIT</h1>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  UAE Campuses
                </span>
              </div>
            </div>

            {/* Center - Navigation Pill */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-1 bg-cosmic-elevated/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenProblemSolution}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-full hover:bg-amber-500/10 transition-all"
              >
                <Trophy className="w-4 h-4" />
                Problem & Solution
              </button>
              
              <a
                href="#bounties"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                Explore Bounties
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-[#050608]/95 border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenProblemSolution();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-all"
              >
                <Trophy className="w-4 h-4" />
                Problem & Solution (Judges)
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
