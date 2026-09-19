import { X, TrendingUp, Users, Lightbulb, DollarSign } from 'lucide-react';

const ProblemSolutionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop overflow-y-auto py-10">
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-cosmic-card rounded-3xl border border-white/10 shadow-2xl my-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-cosmic-card/90 backdrop-blur-md border-b border-white/5 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl">Problem & Solution</h2>
              <p className="font-mono text-xs text-gray-500">Competition Deliverable • GDC RIT Dubai × +twe DesignAthon 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Section 1: The Core Problem */}
          <section className="p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">The Core Problem</h3>
                <p className="font-body text-gray-400 leading-relaxed">
                  <strong className="text-white">79% of UAE students</strong> face the classic "no experience without a job" paradox. Traditional internships require rigid 40-hour weeks that conflict with academic schedules, while entry-level positions demand 2+ years of commercial experience that students simply cannot obtain through coursework alone.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Mini-Research & Survey Data */}
          <section className="p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Mini-Research & Survey Data</h3>
                <p className="font-body text-gray-400 leading-relaxed mb-4">
                  Survey of <strong className="text-white">142 UAE university respondents</strong> across AUS, RIT Dubai, CUD, and UOWD revealed:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                    <div className="font-display font-extrabold text-2xl text-cyan-400">79%</div>
                    <div className="font-mono text-xs text-gray-500 mt-1">Can't find internships</div>
                  </div>
                  <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                    <div className="font-display font-extrabold text-2xl text-cyan-400">64%</div>
                    <div className="font-mono text-xs text-gray-500 mt-1">Need flexible hours</div>
                  </div>
                  <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                    <div className="font-display font-extrabold text-2xl text-cyan-400">91%</div>
                    <div className="font-mono text-xs text-gray-500 mt-1">Want paid projects</div>
                  </div>
                  <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                    <div className="font-display font-extrabold text-2xl text-cyan-400">87%</div>
                    <div className="font-mono text-xs text-gray-500 mt-1">Need portfolio proof</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The ORBIT Solution */}
          <section className="p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">The ORBIT Solution</h3>
                <p className="font-body text-gray-400 leading-relaxed mb-4">
                  ORBIT resolves the paradox through three core innovations:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-emerald-400">1</span>
                    </span>
                    <span className="text-gray-300"><strong className="text-white">48-Hour Micro-Sprints:</strong> Complete scoped milestones in 2-4 days, fitting around class schedules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-emerald-400">2</span>
                    </span>
                    <span className="text-gray-300"><strong className="text-white">Escrow-Backed Payouts:</strong> AED 200-1,200 guaranteed upon milestone completion, no payment delays.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-emerald-400">3</span>
                    </span>
                    <span className="text-gray-300"><strong className="text-white">Verified Proof-of-Work Badges:</strong> Commercial credentials that employers recognize and trust.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Impact & Commercial Viability */}
          <section className="p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Impact & Commercial Viability</h3>
                <div className="space-y-4">
                  <p className="font-body text-gray-400 leading-relaxed">
                    <strong className="text-white">Revenue Model:</strong> 15% platform fee on completed bounties. At scale (500 bounties/month @ avg AED 700), ORBIT generates ~AED 52,500/month in revenue.
                  </p>
                  <p className="font-body text-gray-400 leading-relaxed">
                    <strong className="text-white">University Lab Syndication:</strong> Partner with campus innovation labs (RIT GDC, DTEC Startup Studio, AUS Dev Circle) to source bounties and verify student identities, creating a sustainable ecosystem.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                      <div className="font-display font-extrabold text-xl text-amber-400">AED 148K+</div>
                      <div className="font-mono text-xs text-gray-500 mt-1">Paid to Students</div>
                    </div>
                    <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                      <div className="font-display font-extrabold text-xl text-amber-400">840+</div>
                      <div className="font-mono text-xs text-gray-500 mt-1">Active Builders</div>
                    </div>
                    <div className="p-4 bg-cosmic-card rounded-xl border border-white/5 text-center">
                      <div className="font-display font-extrabold text-xl text-amber-400">12+</div>
                      <div className="font-mono text-xs text-gray-500 mt-1">Campus Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionModal;
