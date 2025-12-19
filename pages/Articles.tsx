import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
    const articles = [
        {
            title: "Dubai Unveils World-Record Clean-Energy Turbine Engine and the Fastest Flying Taxi",
            date: "Press Release",
            category: "Innovation",
            excerpt: "A major press event in Dubai announced a groundbreaking clean-energy turbine engine and the world’s fastest flying taxi, developed in collaboration with Mario P. Marcus and RH Motors.",
            url: "https://www.emaratalyoum.com",
            img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Dubai Unveils World-Record Clean-Energy Turbine Engine and the Fastest Flying Taxi",
            date: "Press Release",
            category: "Advanced Mobility",
            excerpt: "The innovation features an ultra-high-speed propulsion system capable of reaching record-level speeds and marks a milestone in sustainable advanced air mobility.",
            url: "https://www.dubaimagazine.net",
            img: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Partnership With Smart Citi to Develop Satellite-Based Smart City Technologies",
            date: "Press Release",
            category: "Smart City",
            excerpt: "A series of high-level agreements were signed between Czech technology companies and Smart Citi Teknologi, represented by Mario P. Marcus.",
            url: "https://mb.com.ph",
            img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Silkwave and Smart Citi Join Forces to Launch Satellite Internet Across the Philippines",
            date: "Press Release",
            category: "Connectivity",
            excerpt: "Smart Citi Teknologi, led by Mario P. Marcus, formed a large-scale partnership with Silkwave to deploy high-orbit satellite internet across the Philippines.",
            url: "https://www.themoderncreatures.com",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Czech Green-Tech and Smart Citi Introduce AI-Driven Sustainability Solutions",
            date: "Press Release",
            category: "Sustainability",
            excerpt: "Smart Citi Teknologi, in collaboration with Czech technology partners, initiated the integration of advanced green-tech and AI-driven solutions for the mining industry.",
            url: "https://tribune.net.ph",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Smart Citi and International Partners Launch Stablecoin and Digital Currency Initiatives",
            date: "Press Release",
            category: "FinTech",
            excerpt: "A series of blockchain-driven financial initiatives were launched involving Smart Citi Teknologi and international partners.",
            url: "https://www.bworldonline.com",
            img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Satellite-Blockchain Hybrid Systems and Web3 Solutions for National Transformation",
            date: "Press Release",
            category: "Digital Transformation",
            excerpt: "Smart Citi Teknologi announced the integration of satellite-powered communication systems with blockchain infrastructure.",
            url: "https://www.philstar.com",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Smart Foundation Founder Donates Mobility Equipment to the Philippine Marine Corps",
            date: "Press Release",
            category: "Social Responsibility",
            excerpt: "In a significant act of social responsibility, Mario P. Marcus donated wheelchairs, crutches, and walkers to the Philippine Marine Corps.",
            url: "https://www.facebook.com",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
        }
    ];

  return (
    <div className="pt-10">
      <section className="container mx-auto px-6 mb-20">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Strategic Insights</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">Latest Briefings</h1>
      </section>

      <section className="container mx-auto px-6 mb-24">
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
                <div key={idx} className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative bg-brand-darker">
                        <img 
                            src={article.img} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal" 
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            <span className="text-brand-accent font-semibold">{article.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">{article.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{article.excerpt}</p>
                        <div className="mt-auto">
                            <a 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-accent transition-colors"
                            >
                                View Article <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Articles;