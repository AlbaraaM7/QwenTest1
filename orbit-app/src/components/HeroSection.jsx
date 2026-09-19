import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const VolumetricRays = () => {
  const ref = useRef();
  
  // Generate random points for the starfield
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

const HeroSection = ({ onOpenProblemSolution }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* WebGL Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <VolumetricRays />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cosmic-elevated/50 rounded-full border border-white/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-gray-300">DesignAthon 2026 • GDC RIT Dubai × +twe</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Where University Talent Collides With{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Real Bounties
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Break free from the "no experience without a job" paradox. Complete 48-hour to 4-day commercial sprints, 
          earn guaranteed escrow-backed payouts (AED 200 – AED 1,200), and build verified proof-of-work badges.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25">
            Browse Campus Bounties
          </button>
          <button
            onClick={onOpenProblemSolution}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-amber-400 border border-amber-500/30 rounded-xl hover:bg-amber-500/10 transition-colors"
          >
            Problem & Solution (Judges)
          </button>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "100% Escrow Backed", icon: "🔒" },
            { label: "48h - 4-Day Sprints", icon: "⚡" },
            { label: "Verified Student IDs", icon: "✓" }
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 bg-cosmic-card/50 rounded-lg border border-white/5"
            >
              <span className="text-emerald-400">{item.icon}</span>
              <span className="font-mono text-xs text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
