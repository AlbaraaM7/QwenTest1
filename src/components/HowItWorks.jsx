import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Clock, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({ children, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Discover Campus Bounties',
      subtitle: 'Milestone Scoped',
      description: 'Browse verified bounties from UAE sponsors. Each project is scoped into clear milestones with defined deliverables.',
      icon: Search,
      color: 'emerald'
    },
    {
      number: '02',
      title: 'Execute in a 48h Sprint',
      subtitle: 'Flexible Scheduling',
      description: 'Work on your schedule within the sprint window. Submit proof-of-work when ready for review.',
      icon: Clock,
      color: 'amber'
    },
    {
      number: '03',
      title: 'Escrow Payout & Verified Proof',
      subtitle: 'Guaranteed Reward',
      description: 'Get paid instantly upon milestone completion. Earn verified badges for your portfolio.',
      icon: ShieldCheck,
      color: 'cyan'
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollFloat className="inline-block">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="block white-space-nowrap">THE 48-HOUR</span>
              <span className="block gradient-text-emerald white-space-nowrap">BOUNTY</span>
              <span className="block white-space-nowrap">PROTOCOL</span>
            </h2>
          </ScrollFloat>
        </div>

        {/* Bento Grid Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bento-card group relative p-8 bg-cosmic-card rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${step.color}-500/5 to-transparent`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-${step.color}-500/10 border border-${step.color}-500/20`}>
                    <Icon className={`w-6 h-6 text-${step.color}-400`} />
                  </div>

                  {/* Step Number */}
                  <span className="font-mono text-sm text-gray-500 mb-2 block">{step.number}</span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl mb-1">{step.title}</h3>
                  
                  {/* Subtitle */}
                  <p className={`font-mono text-xs text-${step.color}-400 mb-4`}>{step.subtitle}</p>

                  {/* Description */}
                  <p className="font-body text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Border accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${step.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
