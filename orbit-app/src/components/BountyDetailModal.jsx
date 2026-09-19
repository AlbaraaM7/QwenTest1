import { X, CheckCircle, Upload, Link as LinkIcon, FileText } from 'lucide-react';

const BountyDetailModal = ({ bounty, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submission received! This is a demo.');
    onClose();
  };

  if (!bounty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-cosmic-card rounded-3xl border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-cosmic-card/90 backdrop-blur-md border-b border-white/5">
          <div>
            <span className="font-mono text-xs text-emerald-400">{bounty.sponsor}</span>
            <h2 className="font-display font-bold text-xl mt-1">{bounty.title}</h2>
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
          {/* Quick Info */}
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-cosmic-elevated rounded-xl border border-white/5">
              <span className="font-mono text-xs text-gray-500 block">Reward</span>
              <span className="font-mono text-lg font-semibold text-emerald-400">AED {bounty.reward}</span>
            </div>
            <div className="px-4 py-2 bg-cosmic-elevated rounded-xl border border-white/5">
              <span className="font-mono text-xs text-gray-500 block">Duration</span>
              <span className="font-mono text-lg font-semibold text-amber-400">{bounty.duration}</span>
            </div>
            <div className="px-4 py-2 bg-cosmic-elevated rounded-xl border border-white/5">
              <span className="font-mono text-xs text-gray-500 block">Category</span>
              <span className="font-mono text-sm font-semibold text-gray-300">{bounty.category}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display font-bold text-lg mb-3">Brief</h3>
            <p className="font-body text-gray-400 leading-relaxed">{bounty.description}</p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Deliverables Checklist</h3>
            <div className="space-y-3">
              {bounty.deliverables.map((deliverable, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 p-4 bg-cosmic-elevated rounded-xl border border-white/5 cursor-pointer hover:border-emerald-500/30 transition-colors"
                >
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-cosmic-card text-emerald-600 focus:ring-emerald-500/20" />
                  <span className="font-body text-sm text-gray-300">{deliverable}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-display font-bold text-lg">Submit Your Work</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <LinkIcon className="inline w-4 h-4 mr-1" />
                  Figma/Design Link
                </label>
                <input
                  type="url"
                  placeholder="https://figma.com/file/..."
                  className="w-full px-4 py-3 bg-cosmic-elevated border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  GitHub Repository
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-3 bg-cosmic-elevated border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <FileText className="inline w-4 h-4 mr-1" />
                Additional Notes
              </label>
              <textarea
                rows={4}
                placeholder="Describe your approach..."
                className="w-full px-4 py-3 bg-cosmic-elevated border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              <Upload className="w-5 h-5" />
              Submit Proof-of-Work
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BountyDetailModal;
