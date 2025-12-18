import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    { 
        title: 'National Digital ID System', 
        category: 'Digital Infrastructure', 
        image: 'https://picsum.photos/800/600?random=20',
        desc: 'Architected a secure, scalable digital identity framework for national deployment.'
    },
    { 
        title: 'Smart Logistics Hub', 
        category: 'Infrastructure', 
        image: 'https://picsum.photos/800/600?random=21',
        desc: 'Designed the digital backbone for a next-generation automated logistics center.'
    },
    { 
        title: 'Sovereign Cloud Architecture', 
        category: 'Sovereign Systems', 
        image: 'https://picsum.photos/800/600?random=22',
        desc: 'Developed a fully sovereign cloud environment to ensure data residency and security.'
    },
    { 
        title: 'Cross-Border Payment Gateway', 
        category: 'Innovation', 
        image: 'https://picsum.photos/800/600?random=23',
        desc: 'Facilitated the technical and regulatory alignment for a multi-nation payment system.'
    },
     { 
        title: 'Urban Resilience Framework', 
        category: 'Governance', 
        image: 'https://picsum.photos/800/600?random=24',
        desc: 'Established the digital governance standards for a major smart city initiative.'
    },
     { 
        title: 'National Broadband Initiative', 
        category: 'Connectivity', 
        image: 'https://picsum.photos/800/600?random=25',
        desc: 'Strategic planning and deployment oversight for nationwide high-speed connectivity.'
    },
  ];

  return (
    <div className="pt-10">
       <section className="container mx-auto px-6 mb-20">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Representative Engagements</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">Domains of Application</h1>
        <p className="text-gray-400 max-w-2xl text-lg">
            Focus areas where we apply strategic foresight and infrastructure expertise.
        </p>
      </section>

      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group glass-card rounded-2xl overflow-hidden">
                    <div className="h-60 overflow-hidden relative">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-brand-darker/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="inline-flex items-center gap-2 text-white font-bold border border-white px-4 py-2 rounded-full">
                                View Domain <ExternalLink size={16} />
                            </span>
                         </div>
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;