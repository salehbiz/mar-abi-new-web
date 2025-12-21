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
      name: "SCasE® Vital – Home Vital Care System",
      description: "EU MDR Class IIb certified telemedicine device enabling continuous vital monitoring for hospitals, long-term care, and home healthcare, fully integrated with clinical systems.",
      features: [
        "EU MDR Class IIb Certified",
        "Continuous Vital Monitoring",
        "Clinical System Integration"
      ],
      icon: <Activity size={24} />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "National Digital Identity Frameworks",
      description: "National-scale digital identity systems enabling secure citizen identification, governance, and public-sector digital services.",
      features: [
        "Secure Citizen Identification",
        "Governance & Compliance",
        "Public-Sector Digital Services"
      ],
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Satellite Broadband & Mesh Networks",
      description: "Desert-ready satellite and mesh connectivity solutions providing broadband without fibre, zero-downtime operation, and rapid deployment for rural and mission-critical use cases.",
      features: [
        "Broadband Without Fibre",
        "Zero-Downtime Operation",
        "Rapid Rural Deployment"
      ],
      icon: <Globe size={24} />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Critical Infrastructure Protection",
      description: "Satellite and AI-enabled monitoring systems for oil, gas, utilities, and critical assets, including SAR integrity analysis, thermal anomaly detection, and regulatory compliance.",
      features: [
        "SAR Integrity Analysis",
        "Thermal Anomaly Detection",
        "Regulatory Compliance"
      ],
      icon: <Database size={24} />,
      image: "https://images.unsplash.com/photo-1518459384541-e07459ef70f5?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Hajj & Mass-Gathering Safety Systems",
      description: "Satellite-driven crowd analytics, AI CCTV, and predictive safety systems designed for large-scale pilgrim and mass-gathering operations.",
      features: [
        "Crowd Analytics AI",
        "Predictive Safety Models",
        "Mass-Gathering Ops"
      ],
      icon: <Cpu size={24} />,
      image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dust-Storm & Flood Early Warning Systems",
      description: "All-weather SAR imaging and rapid alert systems providing early detection and response for floods, dust storms, and extreme climate events.",
      features: [
        "Early Detection Alerts",
        "All-Weather SAR Imaging",
        "Climate Response Logic"
      ],
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&q=80&w=600"
    }
  ];

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
                    
                    <Link 
                        to="/portfolio"
                        className="w-full py-3 border border-white/10 bg-white/5 text-white font-bold rounded-lg hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all text-sm flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(196,242,46,0.15)]"
                    >
                        View in Portfolio <ArrowRight size={16} />
                    </Link>
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