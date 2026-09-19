import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Clock, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title words
      const words = titleRef.current?.querySelectorAll('.word');
      
      gsap.from(words, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discover Campus Bounties",
      subtitle: "Milestone Scoped",
      description: "Browse verified bounties from UAE universities and startups. Each bounty has clear deliverables and guaranteed rewards.",
      icon: Search
    },
    {
      number: "02", 
      title: "Execute in a 48h Sprint",
      subtitle: "Flexible Scheduling",
      description: "Work on your own schedule within the sprint window. Submit your proof-of-work when you're ready.",
      icon: Clock
    },
    {
      number: "03",
      title: "Escrow Payout & Verified Proof",
      subtitle: "Guaranteed Reward", 
      description: "Receive instant escrow-backed payout upon approval. Earn verified badges for your professional portfolio.",
      icon: Award
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-24">
          <div className="inline-block overflow-hidden">
            <span className="word font-mono text-sm text-emerald-400 block">THE 48-HOUR</span>
          </div>
          <div className="inline-block overflow-hidden">
            <span className="word font-display font-bold text-4xl sm:text-5xl md:text-6xl text-emerald-400 glow-emerald block">
              BOUNTY
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <span className="word font-mono text-sm text-gray-400 block">PROTOCOL</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative p-6 sm:p-8 bg-cosmic-card rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 font-mono text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mb-6 rounded-xl bg-cosmic-elevated flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <step.icon className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
              <p className="font-mono text-xs text-emerald-400 mb-4">{step.subtitle}</p>
              <p className="font-body text-gray-400 leading-relaxed">{step.description}</p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
