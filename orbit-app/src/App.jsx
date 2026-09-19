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
import './styles.css';

function App() {
  const [selectedBounty, setSelectedBounty] = useState(null);
  const [isProblemSolutionOpen, setIsProblemSolutionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cosmic-bg text-white">
      {/* Navigation */}
      <Navbar onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />
        <PortalSection />
        <HowItWorks />
        <BountyExplorer onSelectBounty={setSelectedBounty} />
        <StudentProofSection />
        <EarningsCalculator />
      </main>

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
        <ProblemSolutionModal onClose={() => setIsProblemSolutionOpen(false)} />
      )}
    </div>
  );
}

export default App;
