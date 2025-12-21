import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem, HoverCard, MagneticButton } from '../components/Motion';

const Robotics: React.FC = () => {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-semibold backdrop-blur-sm mb-6">
              <Bot size={16} />
              <span>Autonomous Units</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Robotics & <span className="text-gradient">Autonomous Systems</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Exploring next-generation autonomous platforms designed for complex operational environments.
            </p>
        </Reveal>
      </section>

      {/* Robotics Showcase Section - Text Only Cards */}
      <section className="container mx-auto px-6 mb-24">
        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: Humanoid Robot */}
            <StaggerItem>
                <HoverCard className="group glass-card rounded-3xl overflow-hidden border border-white/10 relative h-full flex flex-col p-10">
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">Humanoid Robot</h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-8 text-base">
                            A general-purpose humanoid robotic system designed for interaction, assistance, and controlled operational environments.
                        </p>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "Human-like mobility and manipulation",
                                "Assisted task execution and monitoring",
                                "Designed for structured environments"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_rgba(196,242,46,0.5)]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-auto pt-6 border-t border-white/5">
                            <Link to="/contact">
                                <MagneticButton className="w-full py-4 rounded-xl border border-white/10 flex items-center justify-center text-white text-sm font-bold bg-white/5 group-hover:bg-brand-accent group-hover:text-brand-darker group-hover:border-brand-accent transition-all shadow-lg hover:shadow-[0_0_15px_rgba(196,242,46,0.3)]">
                                    Request Briefing <ArrowRight size={16} className="ml-2" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </div>
                </HoverCard>
            </StaggerItem>

            {/* Card 2: Dog Robot */}
            <StaggerItem>
                <HoverCard className="group glass-card rounded-3xl overflow-hidden border border-white/10 relative h-full flex flex-col p-10">
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">Dog Robot</h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-8 text-base">
                            A quadruped robotic platform built for mobility, inspection, and terrain-adaptive operations.
                        </p>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "Stable quadruped locomotion",
                                "Terrain-adaptive movement",
                                "Remote operation and sensing"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_5px_rgba(196,242,46,0.5)]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-6 border-t border-white/5">
                            <Link to="/contact">
                                <MagneticButton className="w-full py-4 rounded-xl border border-white/10 flex items-center justify-center text-white text-sm font-bold bg-white/5 group-hover:bg-brand-accent group-hover:text-brand-darker group-hover:border-brand-accent transition-all shadow-lg hover:shadow-[0_0_15px_rgba(196,242,46,0.3)]">
                                    Request Briefing <ArrowRight size={16} className="ml-2" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </div>
                </HoverCard>
            </StaggerItem>

        </StaggerContainer>
      </section>
    </div>
  );
};

export default Robotics;