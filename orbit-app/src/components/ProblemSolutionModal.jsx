import { X, TrendingUp, Users, Zap, Award } from 'lucide-react';

const ProblemSolutionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cosmic-card rounded-3xl border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-cosmic-card/90 backdrop-blur-md border-b border-white/5">
          <div>
            <span className="font-mono text-xs text-amber-400">Competition Deliverable</span>
            <h2 className="font-display font-bold text-xl mt-1">Problem & Solution</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Section 1: The Core Problem */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-display font-bold text-lg">The Core Problem</h3>
            </div>
            <div className="p-4 bg-cosmic-elevated rounded-xl border border-white/5">
              <p className="font-body text-gray-400 leading-relaxed mb-4">
                <strong className="text-white">79% of UAE university students</strong> face the classic "no experience without a job" paradox. 
                Traditional internships require rigid 40-hour weeks that conflict with class schedules, while freelance platforms 
                lack escrow protection and verified proof systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-cosmic-card rounded-lg border border-white/5">
                  <div className="font-mono text-2xl font-bold text-red-400 mb-1">79%</div>
                  <div className="font-mono text-xs text-gray-500">Students struggle to find relevant experience</div>
                </div>
                <div className="p-3 bg-cosmic-card rounded-lg border border-white/5">
                  <div className="font-mono text-2xl font-bold text-red-400 mb-1">40h</div>
                  <div className="font-mono text-xs text-gray-500">Rigid internship requirements</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Mini-Research & Survey Data */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-display font-bold text-lg">Mini-Research & Survey Data</h3>
            </div>
            <div className="p-4 bg-cosmic-elevated rounded-xl border border-white/5">
              <p className="font-body text-gray-400 leading-relaxed mb-4">
                Survey of <strong className="text-white">142 UAE university respondents</strong> across AUS, RIT Dubai, CUD, and UOWD:
              </p>
              <div className="space-y-3">
                {[
                  { stat: "68%", label: "Want flexible work around classes" },
                  { stat: "84%", label: "Need verified portfolio pieces" },
                  { stat: "71%", label: "Concerned about payment security" },
                  { stat: "92%", label: "Prefer 48h-4 day sprints over long commitments" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-cosmic-card rounded-lg border border-white/5">
                    <span className="font-mono text-sm text-gray-400">{item.label}</span>
                    <span className="font-mono text-lg font-semibold text-cyan-400">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: The ORBIT Solution */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-lg">The ORBIT Solution</h3>
            </div>
            <div className="p-4 bg-cosmic-elevated rounded-xl border border-white/5">
              <div className="space-y-4">
                {[
                  {
                    title: "48-Hour Micro-Sprints",
                    desc: "Flexible scheduling within short sprint windows that fit around classes"
                  },
                  {
                    title: "Escrow-Backed Payouts",
                    desc: "100% payment guarantee - funds held in escrow before sprint begins"
                  },
                  {
                    title: "Verified Proof-of-Work",
                    desc: "Commercial badges that validate real-world experience for portfolios"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 bg-cosmic-card rounded-lg border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-semibold text-emerald-400 mb-1">{item.title}</h4>
                      <p className="font-body text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Impact & Commercial Viability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-display font-bold text-lg">Impact & Commercial Viability</h3>
            </div>
            <div className="p-4 bg-cosmic-elevated rounded-xl border border-white/5">
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm font-semibold text-amber-400 mb-2">Revenue Model</h4>
                  <ul className="space-y-2 font-body text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>10% platform fee on bounty payouts (AED 20-120 per sprint)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Premium university lab syndication packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Recruiter access to verified student portfolios</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="font-mono text-2xl font-bold text-emerald-400 mb-1">AED 148K+</div>
                    <div className="font-mono text-xs text-gray-500">Paid to students (projected Y1)</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-cyan-400 mb-1">12+</div>
                    <div className="font-mono text-xs text-gray-500">UAE campuses targeted</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 bg-cosmic-card/90 backdrop-blur-md border-t border-white/5">
          <button
            onClick={onClose}
            className="w-full px-6 py-4 text-base font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-500 transition-all"
          >
            Acknowledge Competition Deliverable
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionModal;
