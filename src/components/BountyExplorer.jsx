import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { bounties, categories } from '../data/bounties';

const BountyExplorer = ({ onBountyClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBounties = bounties.filter((bounty) => {
    const matchesCategory = selectedCategory === 'All' || bounty.category === selectedCategory;
    const matchesSearch = 
      bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.sponsor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="bounties" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
            Explore Campus <span className="gradient-text-emerald">Bounties</span>
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Find your next sprint. Filter by category or search for specific skills.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-cosmic-elevated text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search bounties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-cosmic-elevated border border-white/5 rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Bounty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <div
              key={bounty.id}
              onClick={() => onBountyClick(bounty)}
              className="group cursor-pointer bento-card relative p-6 bg-cosmic-card rounded-2xl border border-white/5 overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Sponsor & Reward */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-gray-500">{bounty.sponsor}</span>
                  <span className="font-mono text-sm font-semibold text-emerald-400">AED {bounty.reward}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                  {bounty.title}
                </h3>

                {/* Duration & Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-xs font-mono bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                    {bounty.duration}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono bg-cosmic-elevated text-gray-400 rounded-full border border-white/5">
                    {bounty.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {bounty.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-gray-500 bg-cosmic-elevated rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{bounty.students} students</span>
                    <span>{bounty.submitted} submitted</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBounties.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-gray-500">No bounties found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BountyExplorer;
