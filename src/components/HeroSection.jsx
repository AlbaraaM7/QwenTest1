import { useEffect, useRef } from 'react';
import { ArrowRight, Trophy, Shield, Clock, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = ({ onOpenProblemSolution }) => {
  const canvasRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const trustBarRef = useRef(null);

  useEffect(() => {
    // Volumetric light rays animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(5, 6, 8, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw volumetric light rays from top center
      const centerX = canvas.width / 2;
      const centerY = 0;

      for (let i = 0; i < 5; i++) {
        const angle = (i - 2) * 0.3 + Math.sin(time + i) * 0.1;
        const gradient = ctx.createLinearGradient(
          centerX, centerY,
          centerX + Math.sin(angle) * canvas.height,
          centerY + Math.cos(angle) * canvas.height
        );
        gradient.addColorStop(0, `rgba(16, 185, 129, ${0.15 + Math.sin(time + i) * 0.05})`);
        gradient.addColorStop(1, 'transparent');

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-100, 0);
        ctx.lineTo(100, 0);
        ctx.lineTo(50, canvas.height);
        ctx.lineTo(-50, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    // GSAP animations
    const tl = gsap.timeline();
    
    tl.from(headlineRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })
    .from(subheadlineRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.6')
    .from(trustBarRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-cosmic-elevated/60 backdrop-blur-sm rounded-full border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-gray-300">
            DesignAthon 2026 • GDC RIT Dubai × +twe
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
        >
          Where University Talent<br />
          Collides With{' '}
          <span className="gradient-text">Real Bounties</span>
        </h1>

        {/* Subheadline with BlurText effect */}
        <div ref={subheadlineRef} className="max-w-2xl mx-auto mb-10">
          <p className="font-body text-lg sm:text-xl text-gray-400 leading-relaxed">
            Break free from the "no experience without a job" paradox. 
            Complete 48-hour to 4-day commercial sprints, earn guaranteed escrow-backed payouts 
            from AED 200 – AED 1,200, and build verified proof-of-work badges.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#bounties"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/25"
          >
            Browse Campus Bounties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button
            onClick={onOpenProblemSolution}
            className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-amber-400 border border-amber-500/30 rounded-full hover:bg-amber-500/10 transition-all"
          >
            <Trophy className="w-5 h-5" />
            Problem & Solution (Judges)
          </button>
        </div>

        {/* Trust Bar */}
        <div ref={trustBarRef} className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-cosmic-card/80 backdrop-blur-sm rounded-xl border border-white/5">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="font-mono text-sm text-gray-300">100% Escrow Backed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-cosmic-card/80 backdrop-blur-sm rounded-xl border border-white/5">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="font-mono text-sm text-gray-300">48h - 4-Day Sprints</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-cosmic-card/80 backdrop-blur-sm rounded-xl border border-white/5">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-sm text-gray-300">Verified Student IDs</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
