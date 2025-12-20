import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Activity, 
  Zap,
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

const Products: React.FC = () => {
  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  const products = [
    {
      name: "Sovereign ID Core",
      description: "The foundational architecture for securely implementing national digital identity systems with privacy-by-design.",
      features: [
        "Biometric deduplication standards",
        "Ledger-based verification",
        "Offline authentication capability"
      ],
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "G-Cloud Sentinel",
      description: "A unified monitoring and governance interface specifically designed for government-grade hybrid cloud environments.",
      features: [
        "Multi-cloud sovereignty auditing",
        "Data residency compliance",
        "Real-time threat vectors"
      ],
      icon: <Database size={24} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Orbital Link Interface",
      description: "Middleware ensuring seamless integration between LEO satellite constellations and terrestrial fiber backbones.",
      features: [
        "Latency optimization protocols",
        "Bandwidth bonding",
        "Encryption at rest and transit"
      ],
      icon: <Globe size={24} />,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "CityPulse Analytics",
      description: "Big data engine for processing urban telemetry, municipal flows, and resource allocation in real-time.",
      features: [
        "Traffic predictive modeling",
        "Utility consumption tracking",
        "Emergency response coordination"
      ],
      icon: <Activity size={24} />,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Cyber-Physical Defence Kit",
      description: "Hardware-software appliances for securing legacy industrial control systems and critical infrastructure OT.",
      features: [
        "OT/IT air-gapping",
        "Legacy protocol wrapping",
        "Zero-trust enforcement"
      ],
      icon: <Cpu size={24} />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Strategic Foresight Engine",
      description: "AI-powered simulation tool for modeling national policy scenarios and long-term economic impacts.",
      features: [
        "Economic impact modeling",
        "Demographic shift analysis",
        "Resource scarcity simulation"
      ],
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1507146153580-69a196bb534d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const scrollToBriefing = () => {
    const element = document.getElementById('briefing-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Our Suite</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Products</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Strategic frameworks, tools, and playbooks for national-scale resilience.
        </p>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-brand-accent/30 transition-all duration-500">
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative bg-brand-darker border-b border-white/5">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
                    onError={handleImageError}
                 />
                 <div className="absolute top-4 right-4 w-10 h-10 bg-brand-darker/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    {product.icon}
                 </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mt-auto">
                    <ul className="space-y-3 mb-8">
                        {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <button 
                        onClick={scrollToBriefing}
                        className="w-full py-3 border border-white/10 bg-white/5 text-white font-bold rounded-lg hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all text-sm flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(196,242,46,0.15)]"
                    >
                        Request Briefing <ArrowRight size={16} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request Briefing Section */}
      <section id="briefing-section" className="container mx-auto px-6 mb-24">
        <div className="glass-panel p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-accent border border-white/10">
                    <FileText size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request a Product Briefing</h2>
                <p className="text-gray-400 mb-10 text-lg">
                    Schedule a deep-dive session with our technical advisory team to discuss implementation, sovereignty requirements, and deployment timelines.
                </p>
                <Link 
                    to="/contact" 
                    className="inline-flex px-10 py-4 bg-brand-accent text-brand-darker font-bold rounded-full shadow-[0_0_20px_rgba(196,242,46,0.3)] hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all items-center gap-2"
                >
                    Request Consultation
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Products;