import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortalSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        }
      });

      // Expand card to full screen
      tl.to(cardRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 1,
        ease: "power2.inOut"
      })
      // Fade out initial headline
      .to(headlineRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5
      }, "-=0.5")
      // Fade in overlay content
      .to(overlayRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Expanding Card */}
      <div
        ref={cardRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vw] sm:w-[60vw] h-[60vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10"
        style={{
          background: 'linear-gradient(135deg, #0c0e14 0%, #131722 100%)',
        }}
      >
        {/* Portal Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Green glow aura */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20" />

        {/* Initial Content */}
        <div ref={headlineRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            STEP BEYOND THE CLASSROOM
          </h2>
          <p className="font-body text-gray-400 max-w-md mb-8">
            Enter the portal where university projects transform into commercial proof-of-work
          </p>
          <div className="flex items-center gap-2 text-emerald-400 animate-bounce">
            <span className="font-mono text-sm">Scroll to expand portal</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Revealed Overlay Content */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-20 flex items-center justify-center bg-cosmic-bg/90 backdrop-blur-md opacity-0"
        >
          <div ref={contentRef} className="text-center px-4 max-w-2xl">
            <div className="inline-block px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="font-mono text-xs text-emerald-400">THE ORBIT ACCELERATOR</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Your Campus Career Starts Here
            </h2>
            <p className="font-body text-lg text-gray-400 mb-8">
              Join 840+ student builders who've earned over AED 148,500 through verified commercial sprints
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25">
                Start Your First Sprint
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-300 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
