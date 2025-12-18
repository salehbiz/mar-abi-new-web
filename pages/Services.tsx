import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';

const Services: React.FC = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
        title: "Search Engine Optimization",
        desc: "Maximize your visibility and organic traffic with our data-driven SEO strategies tailored for your industry.",
        details: "Our comprehensive SEO services include on-page optimization, technical audits, keyword research, and high-quality link building to ensure you rank for the terms that matter most to your business."
    },
    {
        title: "Content Marketing",
        desc: "Engage your audience with compelling storytelling and value-driven content that builds authority.",
        details: "We create blogs, whitepapers, video scripts, and social content that resonates with your target demographic, driving engagement and brand loyalty."
    },
    {
        title: "Social Media Marketing",
        desc: "Build a community around your brand with strategic social media management and campaigns.",
        details: "From Instagram to LinkedIn, we manage your profiles, create scroll-stopping content, and interact with your followers to build a loyal community."
    },
    {
        title: "Paid Advertising (PPC)",
        desc: "Instant traffic and high-intent leads through optimized Google Ads and Social Media campaigns.",
        details: "We manage your ad spend efficiently to maximize ROI, using granular targeting and continuous A/B testing to lower acquisition costs."
    },
    {
        title: "Email Marketing",
        desc: "Nurture leads and retain customers with personalized automated email flows.",
        details: "We design and write high-converting email campaigns, newsletters, and automation sequences that keep your audience engaged and driving repeat sales."
    },
    {
        title: "Web Design & Development",
        desc: "Stunning, high-performance websites optimized for conversions and user experience.",
        details: "Our team builds responsive, fast, and secure websites that not only look premium but are engineered to convert visitors into paying clients."
    }
  ];

  return (
    <div className="pt-10">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">What We Do</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions designed to scale your business and elevate your brand presence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openService === index ? 'ring-2 ring-brand-accent' : ''}`}
                >
                    <div className="p-8 cursor-pointer" onClick={() => setOpenService(openService === index ? null : index)}>
                        <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-brand-accent mb-6">
                            <Check size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-gray-400 mb-6">{service.desc}</p>
                        
                        <div className="flex items-center text-sm font-bold text-brand-accent">
                            {openService === index ? 'Show Less' : 'Learn More'}
                            {openService === index ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                        </div>
                    </div>
                    
                    {/* Accordion Content */}
                    <div className={`bg-black/20 px-8 transition-all duration-300 overflow-hidden ${openService === index ? 'max-h-48 py-6' : 'max-h-0 py-0'}`}>
                        <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                            {service.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 bg-brand-accent rounded-3xl text-brand-darker flex flex-col md:flex-row items-center justify-between">
         <div className="mb-6 md:mb-0">
             <h2 className="text-3xl font-bold mb-2">Ready to scale?</h2>
             <p className="text-brand-darker/80">Let's build a strategy tailored to your goals.</p>
         </div>
         <a href="#/contact" className="px-8 py-3 bg-brand-darker text-white font-bold rounded-full hover:scale-105 transition-transform">
             Get Started
         </a>
      </section>
    </div>
  );
};

export default Services;