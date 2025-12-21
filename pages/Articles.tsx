import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem, HoverCard } from '../components/Motion';

const Articles: React.FC = () => {
    const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800';

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = FALLBACK_IMAGE;
      e.currentTarget.onerror = null;
    };

    const articles = [
        {
            title: "Dubai Unveils World-Record Clean-Energy Turbine Engine and the Fastest Flying Taxi",
            date: "Press Release",
            category: "Innovation",
            excerpt: "A major press event in Dubai announced a groundbreaking clean-energy turbine engine and the world’s fastest flying taxi, developed in collaboration with Mario P. Marcus and RH Motors.",
            url: "https://www.emaratalyoum.com",
            img: "https://images.unsplash.com/photo-1559067515-bf7d799b6d42?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Partnership With Smart Citi to Develop Satellite-Based Smart City Technologies",
            date: "Press Release",
            category: "Smart City",
            excerpt: "A series of high-level agreements were signed between Czech technology companies and Smart Citi Teknologi, represented by Mario P. Marcus, to deploy next-gen urban tech.",
            url: "https://mb.com.ph",
            img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Silkwave and Smart Citi Join Forces to Launch Satellite Internet Across the Philippines",
            date: "Press Release",
            category: "Connectivity",
            excerpt: "Smart Citi Teknologi, led by Mario P. Marcus, formed a large-scale partnership with Silkwave to deploy high-orbit satellite internet, bridging the digital divide in remote provinces.",
            url: "https://themoderncreatures.com",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Czech Green-Tech and Smart Citi Introduce AI-Driven Sustainability Solutions",
            date: "Press Release",
            category: "Sustainability",
            excerpt: "Smart Citi Teknologi, in collaboration with Czech technology partners, initiated the integration of advanced green-tech and AI-driven solutions for the mining industry.",
            url: "https://tribune.net.ph",
            img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Smart Citi and International Partners Launch Stablecoin and Digital Currency Initiatives",
            date: "Press Release",
            category: "FinTech",
            excerpt: "A series of blockchain-driven financial initiatives and stablecoin frameworks were launched involving Smart Citi Teknologi and international partners.",
            url: "https://bworldonline.com",
            img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Satellite-Blockchain Hybrid Systems and Web3 Solutions for National Transformation",
            date: "Press Release",
            category: "Digital Transformation",
            excerpt: "Smart Citi Teknologi announced the integration of satellite-powered communication systems with blockchain infrastructure to ensure data sovereignty.",
            url: "https://philstar.com",
            img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Smart Foundation Founder Donates Mobility Equipment to the Philippine Marine Corps",
            date: "Press Release",
            category: "Social Responsibility",
            excerpt: "In a significant act of social responsibility, Mario P. Marcus donated wheelchairs, crutches, and walkers to the Philippine Marine Corps.",
            url: "https://facebook.com",
            img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
        }
    ];

  return (
    <div className="pt-10">
      <section className="container mx-auto px-6 mb-20">
        <Reveal>
            <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Strategic Insights</span>
            <h1 className="text-5xl font-bold mt-4 mb-6">Latest Briefings</h1>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 mb-24">
         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
                <StaggerItem key={idx}>
                    <HoverCard className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative bg-brand-darker">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                src={article.img} 
                                alt={article.title} 
                                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal opacity-80 group-hover:opacity-100" 
                                onError={handleImageError}
                            />
                             {/* Category Badge */}
                             <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-brand-darker/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-2 leading-tight">{article.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                            <div className="mt-auto">
                                <a 
                                    href={article.url} 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-accent transition-colors"
                                >
                                    View Article <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </HoverCard>
                </StaggerItem>
            ))}
         </StaggerContainer>
      </section>
    </div>
  );
};

export default Articles;