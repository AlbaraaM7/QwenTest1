import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { bounties, categories } from '../data/bounties';

const BountyExplorer = ({ onSelectBounty }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBounties = bounties.filter((bounty) => {
    const matchesCategory = activeCategory === "All" || bounty.category === activeCategory;
    const matchesSearch = 
      bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.sponsor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="discover" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Campus Bounty Explorer
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Discover real commercial opportunities from UAE's top universities and startups
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-cosmic-elevated text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search by sponsor, title, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-cosmic-elevated border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Bounties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <div
              key={bounty.id}
              onClick={() => onSelectBounty(bounty)}
              className="group relative p-6 bg-cosmic-card rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Mouse-following glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.06), transparent 40%)'
                }}
              />

              {/* Sponsor Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400">{bounty.sponsor}</span>
                <span className="font-mono text-xs text-gray-500">{bounty.duration}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors">
                {bounty.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-cosmic-elevated rounded-md text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-500">Reward:</span>
                  <span className="font-mono text-sm font-semibold text-emerald-400">AED {bounty.reward}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{bounty.submitted}/{bounty.spots}</span>
                  <span>submitted</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBounties.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-gray-500">No bounties found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BountyExplorer;
