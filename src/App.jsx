import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortalSection from './components/PortalSection';
import HowItWorks from './components/HowItWorks';
import BountyExplorer from './components/BountyExplorer';
import StudentProofSection from './components/StudentProofSection';
import EarningsCalculator from './components/EarningsCalculator';
import Footer from './components/Footer';
import BountyDetailModal from './components/BountyDetailModal';
import ProblemSolutionModal from './components/ProblemSolutionModal';

function App() {
  const [isProblemSolutionOpen, setIsProblemSolutionOpen] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState(null);

  return (
    <div className="min-h-screen bg-cosmic text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

      {/* Portal Freeze-Scroll Section */}
      <PortalSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Bounty Explorer Section */}
      <BountyExplorer onBountyClick={setSelectedBounty} />

      {/* Student Proof-of-Work Section */}
      <StudentProofSection />

      {/* Earnings Calculator Section */}
      <EarningsCalculator />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedBounty && (
        <BountyDetailModal 
          bounty={selectedBounty} 
          onClose={() => setSelectedBounty(null)} 
        />
      )}

      {isProblemSolutionOpen && (
        <ProblemSolutionModal 
          onClose={() => setIsProblemSolutionOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
