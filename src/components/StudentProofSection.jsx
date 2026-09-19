import { useEffect, useRef } from 'react';
import { stats, studentWork } from '../data/studentWork';

const useCountUp = (end, duration = 2000) => {
  const countRef = useRef(0);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  const animate = (currentTime) => {
    if (!startTimeRef.current) startTimeRef.current = currentTime;
    const elapsed = currentTime - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out-quart interpolation
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    countRef.current = Math.floor(end * easeProgress);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return countRef.current;
};

const StatsCounter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};

const StatCard = ({ stat }) => {
  const numericValue = parseInt(stat.value.replace(/,/g, ''));
  const countValue = useCountUp(numericValue);
  
  const formattedValue = stat.value.includes(',') 
    ? countValue.toLocaleString() 
    : countValue.toString();

  return (
    <div className="p-6 bg-cosmic-card rounded-2xl border border-white/5 text-center">
      <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text-emerald mb-2">
        {stat.prefix}{formattedValue}{stat.suffix}
      </div>
      <div className="font-mono text-xs text-gray-500">{stat.label}</div>
    </div>
  );
};

const DriftWall = () => {
  const duplicatedWork = [...studentWork, ...studentWork];

  return (
    <div className="relative overflow-hidden">
      <div className="flex drift-animation gap-6 w-max">
        {duplicatedWork.map((work, index) => (
          <div
            key={`${work.id}-${index}`}
            className="shrink-0 w-72 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 mb-3">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-card via-cosmic-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Reward Badge */}
              <div className="absolute top-3 right-3 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm rounded-full">
                <span className="font-mono text-xs font-semibold text-white">AED {work.reward}</span>
              </div>
            </div>

            <h4 className="font-display font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">
              {work.title}
            </h4>
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-xs text-gray-500">{work.student}</span>
              <span className="font-mono text-xs text-gray-600">{work.university}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {work.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs text-gray-500 bg-cosmic-elevated rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StudentProofSection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
            Verified <span className="gradient-text-emerald">Proof-of-Work</span>
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Real projects. Real payouts. Real portfolio pieces from UAE students.
          </p>
        </div>

        {/* Stats Counter Bar */}
        <StatsCounter />

        {/* DriftWall */}
        <DriftWall />
      </div>
    </section>
  );
};

export default StudentProofSection;
