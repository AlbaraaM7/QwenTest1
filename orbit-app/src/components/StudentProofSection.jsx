import { useState, useEffect } from 'react';
import { studentWork, stats } from '../data/bounties';

const StudentProofSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/,/g, ''));
        const increment = target / 50;
        let current = 0;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.value;
              return newCounts;
            });
            clearInterval(interval);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current).toLocaleString();
              return newCounts;
            });
          }
        }, 30);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cosmic-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-cosmic-elevated rounded-2xl border border-white/5 text-center"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-400 mb-2">
                {index === 0 ? 'AED ' : ''}{counts[index]}{stat.suffix}
              </div>
              <div className="font-mono text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* DriftWall Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Student Proof-of-Work
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Real projects. Real payouts. Real portfolio pieces from UAE students.
          </p>
        </div>

        {/* DriftWall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentWork.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg via-cosmic-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display font-bold text-sm mb-2">{project.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-gray-400">{project.student}</span>
                  <span className="font-mono text-xs text-emerald-400">{project.payout}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-gray-500">{project.university}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-cosmic-elevated/80 rounded text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProofSection;
