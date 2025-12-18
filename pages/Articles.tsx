import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
    // Sourced from general industry topics as per "Digital Agency" theme
    const articles = [
        {
            title: "Why Long-Form Content Still Dominates in 2025",
            date: "Jan 15, 2025",
            category: "Content Marketing",
            excerpt: "Despite the rise of short-form video, long-form content remains king for building authority and SEO ranking.",
            img: "https://picsum.photos/600/400?random=30"
        },
        {
            title: "Top 10 SEO Strategies That Still Work",
            date: "Jan 10, 2025",
            category: "SEO",
            excerpt: "The landscape of search is changing. Here are the fundamental strategies that continue to drive results.",
            img: "https://picsum.photos/600/400?random=31"
        },
        {
            title: "Running Profitable Ad Campaigns",
            date: "Jan 05, 2025",
            category: "Paid Advertising",
            excerpt: "Stop wasting budget. Learn how to structure your campaigns for maximum ROI.",
            img: "https://picsum.photos/600/400?random=32"
        }
    ];

  return (
    <div className="pt-10">
      <section className="container mx-auto px-6 mb-20">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Insights</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">Latest Articles</h1>
      </section>

      <section className="container mx-auto px-6 mb-24">
         <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
                <div key={idx} className="glass-card rounded-2xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                        <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            <span className="text-brand-accent font-semibold">{article.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{article.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-accent transition-colors">
                            Read More <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Articles;