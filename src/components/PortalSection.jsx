import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Rocket, Target, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PortalSection = () => {
  const sectionRef = useRef(null);
  const portalCardRef = useRef(null);
  const headlineRef = useRef(null);
  const acceleratorOverlayRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the pinned scroll animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Expand portal card
          if (portalCardRef.current) {
            const scale = 1 + progress * 0.68;
            const borderRadius = 24 - progress * 24;
            portalCardRef.current.style.transform = `scale(${scale})`;
            portalCardRef.current.style.borderRadius = `${borderRadius}px`;
          }
          
          // Fade out initial headline
          if (headlineRef.current) {
            headlineRef.current.style.opacity = 1 - progress * 2;
            headlineRef.current.style.transform = `translateY(${-30 * progress}px)`;
          }
          
          // Fade in accelerator overlay
          if (acceleratorOverlayRef.current) {
            const overlayProgress = Math.max(0, (progress - 0.5) * 2);
            acceleratorOverlayRef.current.style.opacity = overlayProgress;
            acceleratorOverlayRef.current.style.transform = `translateY(${20 * (1 - overlayProgress)}px)`;
          }
          
          // Hide scroll hint
          if (scrollHintRef.current) {
            scrollHintRef.current.style.opacity = 1 - progress * 3;
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Portal Card */}
      <div 
        ref={portalCardRef}
        className="absolute inset-0 m-auto w-[88vw] sm:w-[60vw] h-[60vh] rounded-3xl overflow-hidden border border-emerald-500/20 emerald-glow transition-transform"
        style={{ willChange: 'transform, border-radius' }}
      >
        {/* Portal Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&h=1200&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-card/50 via-cosmic-card/30 to-cosmic-card/80"></div>
        </div>

        {/* Initial Content */}
        <div ref={headlineRef} className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            STEP BEYOND<br />
            <span className="gradient-text-emerald">THE CLASSROOM</span>
          </h2>
          
          <div ref={scrollHintRef} className="mt-8 flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-gray-400">Scroll to expand portal</span>
            <ArrowDown className="w-5 h-5 text-emerald-400 animate-bounce" />
          </div>
        </div>

        {/* Accelerator Overlay (reveals on scroll) */}
        <div 
          ref={acceleratorOverlayRef}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-cosmic-card/90 backdrop-blur-md"
          style={{ opacity: 0, willChange: 'opacity, transform' }}
        >
          <div className="max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs text-emerald-400">THE ORBIT ACCELERATOR</span>
            </div>
            
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6">
              Your Campus Career<br />Starts Here
            </h3>
            
            <p className="font-body text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Join the fastest-growing network of UAE student builders. Complete real projects, 
              earn verified credentials, and get paid while you learn.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-cosmic-elevated rounded-xl border border-white/5">
                <Target className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-sm">Real Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-cosmic-elevated rounded-xl border border-white/5">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-sm">Fast Payouts</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-cosmic-elevated rounded-xl border border-white/5">
                <Rocket className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-sm">Verified Proof</span>
              </div>
            </div>
            
            <a
              href="#bounties"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/25"
            >
              Start Your First Sprint
              <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
