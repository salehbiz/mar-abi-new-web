import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    { 
        title: 'Real Estate Growth Campaign', 
        category: 'Social Media', 
        image: 'https://picsum.photos/800/600?random=20',
        desc: 'Increased lead generation by 150% through targeted Facebook and Instagram ads.'
    },
    { 
        title: 'Dental Clinic SEO Overhaul', 
        category: 'SEO & PPC', 
        image: 'https://picsum.photos/800/600?random=21',
        desc: 'Achieved #1 ranking for local keywords and reduced CPC by 40%.'
    },
    { 
        title: 'Yoga Studio Brand Refresh', 
        category: 'Branding & Ads', 
        image: 'https://picsum.photos/800/600?random=22',
        desc: 'Complete visual identity refresh followed by a sold-out launch event campaign.'
    },
    { 
        title: 'Fashion Brand E-commerce', 
        category: 'Web Development', 
        image: 'https://picsum.photos/800/600?random=23',
        desc: 'Built a high-conversion Shopify store with custom integrations.'
    },
     { 
        title: 'Tech Startup Launch', 
        category: 'Strategy', 
        image: 'https://picsum.photos/800/600?random=24',
        desc: 'Go-to-market strategy that secured 10,000 signups in pre-launch.'
    },
     { 
        title: 'Local Restaurant Visibility', 
        category: 'Local SEO', 
        image: 'https://picsum.photos/800/600?random=25',
        desc: 'Optimized GMB profile resulting in 3x increase in foot traffic.'
    },
  ];

  return (
    <div className="pt-10">
       <section className="container mx-auto px-6 mb-20">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Success Stories</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">Our Portfolio</h1>
        <p className="text-gray-400 max-w-2xl text-lg">
            A collection of our most impactful work across various industries.
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
                                View Case Study <ExternalLink size={16} />
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