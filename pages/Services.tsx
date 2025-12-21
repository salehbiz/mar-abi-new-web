import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, HoverCard } from '../components/Motion';

const Services: React.FC = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
        title: "Strategic Advisory",
        desc: "Policy alignment and technology roadmap planning for long-term resilience.",
        details: "We provide high-level strategic counsel to align technology investments with national or institutional policy goals. Our advisory services focus on long-term resilience, risk mitigation, and sovereign capability development."
    },
    {
        title: "Digital Infrastructure",
        desc: "Design and deployment of resilient national-scale systems and connectivity.",
        details: "We architect and oversee the deployment of critical digital infrastructure, from broadband networks to data centers, ensuring robustness, scalability, and security at a national level."
    },
    {
        title: "Sovereign Systems",
        desc: "Data sovereignty frameworks and secure platform architecture.",
        details: "We specialize in designing sovereign cloud and data architectures that ensure critical information remains under jurisdictional control, adhering to the highest standards of security and privacy."
    },
    {
        title: "Cross-Border Innovation",
        desc: "Facilitating international technology cooperation and knowledge transfer.",
        details: "We bridge ecosystems to foster innovation, facilitating cross-border partnerships and technology transfer initiatives that enhance local capabilities and economic growth."
    },
    {
        title: "Governance Frameworks",
        desc: "Establishing regulatory and operational standards for digital ecosystems.",
        details: "We assist in drafting and implementing governance frameworks that ensure the ethical, legal, and operational integrity of digital systems and emerging technologies."
    },
    {
        title: "Resilience Engineering",
        desc: "Ensuring system continuity, disaster recovery, and operational stability.",
        details: "We design systems with built-in redundancy and fail-safe mechanisms to ensure continuity of operations during crises, safeguarding critical services and infrastructure."
    }
  ];

  return (
    <div className="pt-10">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <Reveal>
            <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Capabilities</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                End-to-end strategic advisory and infrastructure deployment services for sovereign entities.
            </p>
        </Reveal>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <StaggerItem key={index}>
                    <motion.div 
                        className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openService === index ? 'ring-2 ring-brand-accent' : ''}`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="p-8 cursor-pointer" onClick={() => setOpenService(openService === index ? null : index)}>
                            <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-brand-accent mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.desc}</p>
                            
                            <div className="flex items-center text-sm font-bold text-brand-accent">
                                {openService === index ? 'Show Less' : 'Learn More'}
                                <motion.div animate={{ rotate: openService === index ? 180 : 0 }}>
                                    <ChevronDown size={16} className="ml-2" />
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Accordion Content */}
                        <AnimatePresence>
                        {openService === index && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="bg-black/20 overflow-hidden"
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                                        {service.details}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                </StaggerItem>
            ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16">
         <Reveal>
             <div className="bg-brand-accent rounded-3xl text-brand-darker flex flex-col md:flex-row items-center justify-between p-12">
                 <div className="mb-6 md:mb-0">
                     <h2 className="text-3xl font-bold mb-2">Engage Strategically</h2>
                     <p className="text-brand-darker/80">Build resilient infrastructure for the future.</p>
                 </div>
                 <motion.a 
                    href="#/contact" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-brand-darker text-white font-bold rounded-full"
                 >
                     Get Started
                 </motion.a>
             </div>
         </Reveal>
      </section>
    </div>
  );
};

export default Services;