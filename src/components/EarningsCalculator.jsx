import { useState, useRef, useEffect } from 'react';
import { Calculator, DollarSign, FileCheck } from 'lucide-react';

const useCountUpSmooth = (end, duration = 300) => {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
        startValueRef.current = value;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out-quart interpolation
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const newValue = Math.floor(startValueRef.current + (end - startValueRef.current) * easeProgress);
      
      setValue(newValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return value;
};

const EarningsCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [weeksActive, setWeeksActive] = useState(8);
  
  // Calculate earnings: avg AED 15/hour based on bounty rewards
  const avgHourlyRate = 15;
  const totalEarnings = hoursPerWeek * weeksActive * avgHourlyRate;
  
  // Calculate portfolio pieces: ~1 piece per 10 hours
  const portfolioPieces = Math.floor((hoursPerWeek * weeksActive) / 10);

  const animatedEarnings = useCountUpSmooth(totalEarnings);
  const animatedPieces = useCountUpSmooth(portfolioPieces);

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-elevated rounded-full border border-white/5 mb-4">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-gray-400">SEMESTER EARNINGS CALCULATOR</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
            Calculate Your <span className="gradient-text-emerald">Potential</span>
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            See how much you could earn while building your portfolio during a typical semester.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="p-8 bg-cosmic-card rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Hours Per Week Slider */}
            <div>
              <label className="flex items-center justify-between mb-4">
                <span className="font-medium text-gray-300">Dedicated Hours Per Week</span>
                <span className="font-mono text-lg font-semibold text-emerald-400">{hoursPerWeek}h</span>
              </label>
              <input
                type="range"
                min="2"
                max="15"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                <span>2h</span>
                <span>15h</span>
              </div>
            </div>

            {/* Weeks Active Slider */}
            <div>
              <label className="flex items-center justify-between mb-4">
                <span className="font-medium text-gray-300">Weeks Active in Semester</span>
                <span className="font-mono text-lg font-semibold text-amber-400">{weeksActive}w</span>
              </label>
              <input
                type="range"
                min="4"
                max="16"
                value={weeksActive}
                onChange={(e) => setWeeksActive(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                <span>4w</span>
                <span>16w</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-cosmic-elevated rounded-2xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 mb-1">Estimated Earnings</div>
                <div className="font-display font-extrabold text-2xl gradient-text-emerald">
                  AED {animatedEarnings.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 mb-1">Portfolio Pieces</div>
                <div className="font-display font-extrabold text-2xl text-amber-400">
                  {animatedPieces} verified
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500 font-mono">
            * Based on average bounty rate of AED 15/hour. Actual earnings may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;
