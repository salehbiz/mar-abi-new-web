import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    { 
        title: 'National Infrastructure Partnership', 
        category: 'Infrastructure', 
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        desc: 'Strategic engagement supporting inter-island connectivity and national logistics growth through international consortium collaboration.'
    },
    { 
        title: 'Satellite Technology Collaboration', 
        category: 'Space & Connectivity', 
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
        desc: 'Exploration of large-scale satellite production capabilities to enable future national satellite systems and digitalization efforts.'
    },
    { 
        title: 'Smart Electric Engine Investment', 
        category: 'Clean Mobility', 
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800',
        desc: 'Investment in advanced zero-carbon engine technology to accelerate next-gen aviation and sustainable mobility.'
    },
    { 
        title: 'Carbon-Capture Innovation', 
        category: 'Sustainability', 
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        desc: 'Coordination with energy leadership and engineering experts to introduce carbon-capturing solutions for emissions reduction.'
    },
     { 
        title: 'SMART CITI TEKNOLOGI Philippines', 
        category: 'Smart City', 
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
        desc: 'National digital transformation programs across smart systems, green mobility, satellite connectivity, and advanced energy solutions.'
    },
     { 
        title: 'Lithium Battery Factory Signing', 
        category: 'Energy Storage', 
        image: 'https://images.unsplash.com/photo-1619641215907-2856f6e5200e?auto=format&fit=crop&q=80&w=800',
        desc: 'Partnership signing to support EV technology, grid-scale storage, and future-ready energy infrastructure.'
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
                <div key={idx} className="group glass-card rounded-2xl overflow-hidden relative">
                    <div className="h-60 overflow-hidden relative bg-brand-darker">
                         <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal" 
                         />
                         {/* Hover Overlay with Link */}
                         <a 
                            href="https://mariomarcus.com/pages/portfolio" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="absolute inset-0 bg-brand-darker/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                         >
                            <span className="inline-flex items-center gap-2 text-white font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-brand-darker transition-colors">
                                View Domain <ExternalLink size={16} />
                            </span>
                         </a>
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