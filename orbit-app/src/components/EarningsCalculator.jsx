import { useState } from 'react';

const EarningsCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [weeksActive, setWeeksActive] = useState(8);

  // Calculate earnings: avg AED 15/hour based on bounty rewards
  const hourlyRate = 15;
  const totalEarnings = hoursPerWeek * weeksActive * hourlyRate;
  const portfolioPieces = Math.floor((hoursPerWeek * weeksActive) / 20);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Semester Earnings Calculator
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            See what you could earn while building your portfolio
          </p>
        </div>

        {/* Calculator Card */}
        <div className="p-8 sm:p-12 bg-cosmic-card rounded-3xl border border-white/10">
          {/* Sliders */}
          <div className="space-y-8 mb-12">
            {/* Hours Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-mono text-sm text-gray-400">Dedicated Hours Per Week</label>
                <span className="font-mono text-lg font-semibold text-emerald-400">{hoursPerWeek}h</span>
              </div>
              <input
                type="range"
                min="2"
                max="15"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-2 bg-cosmic-elevated rounded-full appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between mt-2 font-mono text-xs text-gray-600">
                <span>2h</span>
                <span>15h</span>
              </div>
            </div>

            {/* Weeks Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-mono text-sm text-gray-400">Weeks Active in Semester</label>
                <span className="font-mono text-lg font-semibold text-amber-400">{weeksActive} weeks</span>
              </div>
              <input
                type="range"
                min="4"
                max="16"
                value={weeksActive}
                onChange={(e) => setWeeksActive(parseInt(e.target.value))}
                className="w-full h-2 bg-cosmic-elevated rounded-full appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between mt-2 font-mono text-xs text-gray-600">
                <span>4 weeks</span>
                <span>16 weeks</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-400 mb-2">
                AED {totalEarnings.toLocaleString()}
              </div>
              <div className="font-mono text-xs text-gray-500">Total Earnings</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-cyan-400 mb-2">
                {portfolioPieces}
              </div>
              <div className="font-mono text-xs text-gray-500">Verified Portfolio Pieces</div>
            </div>
          </div>

          <p className="mt-6 text-center font-mono text-xs text-gray-500">
            * Based on average bounty rate of AED 15/hour. Actual earnings may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;
