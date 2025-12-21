import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, HoverCard } from '../components/Motion';

const Portfolio: React.FC = () => {
  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  const projects = [
    { 
        title: 'National Infrastructure Partnership', 
        category: 'Infrastructure', 
        image: 'https://images.unsplash.com/photo-1465446979207-687f872d80d2?auto=format&fit=crop&q=80&w=800',
        desc: 'Strategic engagement supporting inter-island connectivity and national logistics growth through international consortium collaboration.'
    },
    { 
        title: 'Satellite Technology Collaboration', 
        category: 'Space & Connectivity', 
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        desc: 'Exploration of large-scale satellite production capabilities to enable future national satellite systems and digitalization efforts.'
    },
    { 
        title: 'SMART CITI TEKNOLOGI Philippines', 
        category: 'Smart City', 
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800',
        desc: 'National digital transformation programs across smart systems, green mobility, satellite connectivity, and advanced energy solutions.'
    },
    { 
        title: 'Smart Electric Engine Investment', 
        category: 'Clean Mobility', 
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
        desc: 'Investment in advanced zero-carbon engine technology to accelerate next-gen aviation and sustainable mobility.'
    },
    { 
        title: 'Carbon-Capture Innovation', 
        category: 'Sustainability', 
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        desc: 'Coordination with energy leadership and engineering experts to introduce carbon-capturing solutions for emissions reduction.'
    },
    { 
        title: 'Lithium Battery Factory Signing', 
        category: 'Energy Storage', 
        image: 'https://images.unsplash.com/photo-1565514020125-99887413665c?auto=format&fit=crop&q=80&w=800',
        desc: 'Partnership signing to support EV technology, grid-scale storage, and future-ready energy infrastructure.'
    },
    {
        title: 'Advanced Air Mobility Network',
        category: 'Future Transport',
        image: 'https://images.unsplash.com/photo-1559067515-bf7d799b6d42?auto=format&fit=crop&q=80&w=800',
        desc: 'Deployment of eVTOL corridors and ground infrastructure for next-generation urban air mobility and rapid transit.'
    },
    {
        title: 'Sovereign Data Center Architecture',
        category: 'Digital Sovereignty',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
        desc: 'Tier IV localized data center network ensuring government data residency, operational independence, and cyber-resilience.'
    },
    {
        title: 'Green Hydrogen Production Facility',
        category: 'Renewable Energy',
        image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800',
        desc: 'Industrial-scale hydrogen production facility designed to power heavy transport and support national export capabilities.'
    },
    {
        title: 'Coastal Defense & Monitoring',
        category: 'Security',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        desc: 'AI-driven radar and sensor arrays providing real-time maritime situational awareness for border security and environmental protection.'
    },
    {
        title: 'Inter-Island Fiber Optic Backbone',
        category: 'Connectivity',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
        desc: 'Subsea and terrestrial fiber network connecting remote provinces to the national digital core, bridging the digital divide.'
    },
    {
        title: 'Mineral Resource Digitization',
        category: 'Natural Resources',
        image: 'https://images.unsplash.com/photo-1574689049597-7e6fabdcdf11?auto=format&fit=crop&q=80&w=800',
        desc: 'Implementation of AI-driven geological surveying and supply chain tracking for critical mineral assets and mining operations.'
    },
    {
        title: 'National Digital Currency Pilot',
        category: 'FinTech',
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
        desc: 'Technical advisory and infrastructure development for secure Central Bank Digital Currency (CBDC) implementation and interoperability.'
    },
    {
        title: 'Humanitarian Logistics Framework',
        category: 'Social Impact',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
        desc: 'Rapid deployment supply chain framework and mobility solutions for effective disaster response and aid distribution.'
    }
  ];

  return (
    <div className="pt-10">
       <section className="container mx-auto px-6 mb-20">
        <Reveal>
            <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Case Studies</span>
            <h1 className="text-5xl font-bold mt-4 mb-6">Complete Portfolio</h1>
            <p className="text-gray-400 max-w-2xl text-lg">
                A comprehensive archive of our strategic engagements, infrastructure projects, and technology deployments.
            </p>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 mb-24">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <StaggerItem key={idx}>
                    <HoverCard className="group glass-card rounded-2xl overflow-hidden relative flex flex-col h-full">
                        <div className="h-60 overflow-hidden relative bg-brand-darker shrink-0">
                             <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal opacity-80" 
                                onError={handleImageError}
                             />
                             {/* Hover Overlay with Link */}
                             <a 
                                href="https://mariomarcus.com/pages/portfolio" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="absolute inset-0 bg-brand-darker/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                             >
                                <span className="inline-flex items-center gap-2 text-white font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-brand-darker transition-colors">
                                    View Case Study <ExternalLink size={16} />
                                </span>
                             </a>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                        </div>
                    </HoverCard>
                </StaggerItem>
            ))}
        </StaggerContainer>
      </section>
    </div>
  );
};

export default Portfolio;