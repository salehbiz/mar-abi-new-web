import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Landmark, 
  Wifi, 
  Stethoscope, 
  ShieldCheck,
  Globe,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Strategic Technology Advisory
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Intelligent <br/>
              <span className="text-gradient">Infrastructure</span> & <br/>
              Sovereign Systems
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Aligning policy, technology, and infrastructure for long-term resilience and execution capability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-brand-accent text-brand-darker font-bold rounded-full transition-all hover:bg-white hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,242,46,0.25)]"
              >
                Our Expertise <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full transition-all hover:bg-white/10 hover:border-brand-accent/50 flex items-center justify-center backdrop-blur-sm"
              >
                Strategic Consultation
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            {/* Abstract Glass Composition */}
            <div className="relative w-full h-[600px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#1a1a1a] rounded-2xl overflow-hidden glass-panel border-0 ring-1 ring-white/5">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Strategic Architecture" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-10 left-0 w-3/5 h-3/5 glass-card rounded-2xl p-6 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="flex -space-x-3 mb-4">
                    {[1,2,3].map(i => (
                        <img key={i} src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100&sat=-100&random=${i}`} className="w-10 h-10 rounded-full border-2 border-brand-darker object-cover grayscale" alt="Team" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-darker font-bold text-xs border-2 border-brand-darker">+</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sovereign Systems</h3>
                  <p className="text-gray-400 text-sm">Resilient frameworks for critical assets.</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-[-20px] w-24 h-24 rounded-full bg-brand-accent/90 backdrop-blur-md text-brand-darker flex items-center justify-center font-bold text-center text-xs p-2 shadow-[0_0_30px_rgba(196,242,46,0.3)] animate-float border border-white/20">
                Strategic Advisory
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / STATS SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
             <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Structure" className="rounded-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-white/5 object-cover h-full" />
                    <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600" alt="Tech Abstract" className="rounded-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700 mt-12 ring-1 ring-white/5 object-cover h-full" />
                </div>
             </div>
             <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                    <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">About Mar Abi</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Strategic Advisory for National-Scale Resilience</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                    Mar Abi is a strategic advisory and deployment partner for governments and institutions. We bridge the gap between policy and technology to build resilient, sovereign infrastructure and ensure long-term operational continuity.
                </p>
                
                <div className="space-y-6 mb-10">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-white">Strategic Advisory</span>
                            <span className="text-brand-accent"></span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                            <div className="bg-brand-accent h-2 rounded-full shadow-[0_0_10px_rgba(196,242,46,0.4)]" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-white">Infrastructure Execution</span>
                            <span className="text-brand-accent"></span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                            <div className="bg-brand-accent h-2 rounded-full shadow-[0_0_10px_rgba(196,242,46,0.4)]" style={{width: '90%'}}></div>
                        </div>
                    </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
                    Engage With Us <ArrowRight size={18} />
                </Link>
             </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
             {[
                 { num: '30+', label: 'Multi-sector Engagements' },
                 { num: 'Global', label: 'Institutional Programs' },
                 { num: '15+', label: 'Cross-border Initiatives' },
                 { num: 'Long-term', label: 'Strategic Partnerships' },
             ].map((stat, idx) => (
                 <div key={idx} className="text-center md:text-left group">
                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{stat.num}</h3>
                     <p className="text-gray-400 text-sm uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
                         <span className="w-2 h-2 rounded-full bg-brand-accent group-hover:shadow-[0_0_8px_rgba(196,242,46,0.8)] transition-all"></span>
                         {stat.label}
                     </p>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Strategic Capabilities</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Sovereign Systems & <br/>Advisory Services</h2>
                </div>
                <Link to="/services" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-brand-accent hover:text-brand-darker transition-all mt-6 md:mt-0">
                    View All Capabilities
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Strategic Advisory', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=600' },
                    { title: 'Digital Infrastructure', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600', highlight: true },
                    { title: 'Sovereign Systems', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' }
                ].map((svc, idx) => (
                    <div 
                        key={idx} 
                        className={`group relative rounded-2xl overflow-hidden transition-all duration-500 
                            ${svc.highlight 
                                ? 'glass-card border-brand-accent/40 shadow-[0_0_30px_rgba(196,242,46,0.1)]' 
                                : 'glass-card'
                            }`}
                    >
                        {/* Glow effect for highlighted card */}
                        {svc.highlight && <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>}
                        
                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div className="mb-6 h-48 rounded-xl overflow-hidden relative">
                                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
                                <div className="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-3 ${svc.highlight ? 'text-white' : 'text-white'}`}>{svc.title}</h3>
                                <p className="text-sm mb-6 text-gray-400">
                                    Comprehensive planning and deployment frameworks for critical national assets and digital resilience.
                                </p>
                                <Link to="/services" className={`inline-flex items-center gap-2 text-sm font-bold ${svc.highlight ? 'text-brand-accent' : 'text-brand-accent group-hover:text-white'} transition-colors`}>
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                 <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                    <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Strategic Engagement Model</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white">Framework for Execution</h2>
                <p className="text-gray-400">A structured approach to aligning policy, technology, and operations for sustainable impact.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { step: '01', title: 'Strategic Assessment', desc: 'We assess the current landscape and define critical objectives aligned with long-term policy.' },
                    { step: '02', title: 'System Design', desc: 'Our team architects resilient systems and frameworks designed for national scale and sovereignty.' },
                    { step: '03', title: 'Governance & Scale', desc: 'We establish operational governance to ensure sustainability, security, and controlled expansion.' },
                ].map((item, idx) => (
                    <div key={idx} className="relative group">
                        <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-white/5 hover:border-t-brand-accent transition-all duration-300">
                             <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">{item.step}</div>
                             <h3 className="text-2xl font-bold mb-4 mt-8 text-white">{item.title}</h3>
                             <p className="text-gray-400 mb-8">{item.desc}</p>
                             <div className="w-full h-10 bg-white/5 rounded flex items-center px-4 group-hover:bg-brand-primary/40 transition-colors">
                                <span className="text-xs font-bold text-brand-accent tracking-widest uppercase">PHASE {item.step}</span>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* DOMAINS OF APPLICATION */}
      <section className="py-24 relative overflow-hidden">
        {/* Style block for local animations */}
        <style>{`
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes sweep {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes driftGlow {
            0%, 100% { transform: translate(-5%, -5%) scale(1); }
            50% { transform: translate(5%, 5%) scale(1.1); }
          }
          .domain-card-entrance {
            animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0;
          }
          .light-sweep::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
            transform: translateX(-100%) skewX(-15deg);
            pointer-events: none;
          }
          .group:hover .light-sweep::after {
            animation: sweep 0.9s ease-out forwards;
          }
        `}</style>

        {/* Floating background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none z-0 animate-[driftGlow_12s_ease-in-out_infinite]"></div>

        <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
            {/* Header Row */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                    <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Sectors We Transform</span>
                </div>
                <h2 className="text-5xl font-bold text-white">Domains of Application</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {[
                    { 
                      title: 'National Digital Identity Frameworks', 
                      category: 'Public Sector', 
                      icon: <Landmark size={24} />, 
                      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
                    },
                    { 
                      title: 'Satellite Broadband & Mesh Networks', 
                      category: 'Connectivity', 
                      icon: <Wifi size={24} />, 
                      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
                    },
                    { 
                      title: 'Telemedicine & Vital Care Systems', 
                      category: 'Healthcare', 
                      icon: <Stethoscope size={24} />, 
                      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
                    },
                    { 
                      title: 'Critical Infrastructure Protection', 
                      category: 'Security', 
                      icon: <ShieldCheck size={24} />, 
                      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
                    },
                ].map((domain, idx) => (
                    <div 
                      key={idx} 
                      className="group relative h-[clamp(280px,32vh,400px)] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.015] hover:-translate-y-2 cursor-pointer bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-brand-accent/30 hover:shadow-[0_0_40px_rgba(196,242,46,0.1)] overflow-hidden domain-card-entrance light-sweep"
                      style={{ animationDelay: `${idx * 120}ms` }}
                    >
                        {/* Background Image Layer */}
                        <div className="absolute inset-0 z-0">
                          <img 
                            src={domain.img} 
                            alt={domain.title} 
                            className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent"></div>
                        </div>

                        {/* Top Navigation Row */}
                        <div className="flex justify-between items-start relative z-10">
                          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest backdrop-blur-sm group-hover:border-brand-accent/30 group-hover:text-brand-accent transition-colors">
                            {domain.category}
                          </div>
                          <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-darker group-hover:border-brand-accent group-hover:rotate-12">
                            <ArrowUpRight size={18} />
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="space-y-5 relative z-10">
                          <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center text-white/50 ring-1 ring-brand-accent/5 group-hover:ring-brand-accent/20 group-hover:text-brand-accent transition-all">
                            {domain.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight pr-8 transition-colors">
                            {domain.title}
                          </h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-16 text-center">
                <Link to="/portfolio" className="group inline-flex px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-brand-accent hover:text-brand-darker transition-all items-center gap-2 backdrop-blur-md">
                    View All Domains 
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">Initiate a Strategic Consultation</h2>
            <h3 className="text-gradient">Ready to align your infrastructure with long-term strategic goals?</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 mt-6">
                Contact us to discuss your specific requirements.
            </p>
            <Link to="/contact" className="px-10 py-5 bg-brand-accent text-brand-darker font-bold text-lg rounded-full shadow-[0_0_30px_rgba(196,242,46,0.4)] hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all">
                Request Consultation
            </Link>
        </div>
      </section>
    </>
  );
};

export default Home;