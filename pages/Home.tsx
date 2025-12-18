import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, Users, Zap, Globe, Award, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Elevate Your Brand With Us
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Empowering Your <br/>
              <span className="text-gradient">Success</span> with <br/>
              Digital Expertise
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-brand-accent text-brand-darker font-bold rounded-full transition-all hover:bg-white hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,242,46,0.25)]"
              >
                View Services <ArrowRight size={18} />
              </Link>
              <Link 
                to="/products" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full transition-all hover:bg-white/10 hover:border-brand-accent/50 flex items-center justify-center backdrop-blur-sm"
              >
                View Products
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            {/* Abstract Glass Composition */}
            <div className="relative w-full h-[600px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#1a1a1a] rounded-2xl overflow-hidden glass-panel border-0 ring-1 ring-white/5">
                <img src="https://picsum.photos/800/800?random=1" alt="Digital Team" className="w-full h-full object-cover opacity-50 mix-blend-luminosity hover:opacity-70 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-10 left-0 w-3/5 h-3/5 glass-card rounded-2xl p-6 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="flex -space-x-3 mb-4">
                    {[1,2,3].map(i => (
                        <img key={i} src={`https://picsum.photos/100/100?random=${i+10}`} className="w-10 h-10 rounded-full border-2 border-brand-darker" alt="Team" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-darker font-bold text-xs border-2 border-brand-darker">+16</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Digital Excellence</h3>
                  <p className="text-gray-400 text-sm">Consistent results across all channels.</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-[-20px] w-24 h-24 rounded-full bg-brand-accent/90 backdrop-blur-md text-brand-darker flex items-center justify-center font-bold text-center text-xs p-2 shadow-[0_0_30px_rgba(196,242,46,0.3)] animate-float border border-white/20">
                Certified Experts
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
                    <img src="https://picsum.photos/400/500?random=2" alt="Working" className="rounded-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-white/5" />
                    <img src="https://picsum.photos/400/500?random=3" alt="Meeting" className="rounded-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700 mt-12 ring-1 ring-white/5" />
                </div>
             </div>
             <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                    <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Empowering Your Success with Digital Expertise</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <div className="space-y-6 mb-10">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-white">Marketing & Business Growth</span>
                            <span className="text-brand-accent">85%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                            <div className="bg-brand-accent h-2 rounded-full shadow-[0_0_10px_rgba(196,242,46,0.4)]" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold text-white">Creativity & Innovation</span>
                            <span className="text-brand-accent">90%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                            <div className="bg-brand-accent h-2 rounded-full shadow-[0_0_10px_rgba(196,242,46,0.4)]" style={{width: '90%'}}></div>
                        </div>
                    </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
                    Learn More About Us <ArrowRight size={18} />
                </Link>
             </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
             {[
                 { num: '3k+', label: 'Successful Projects' },
                 { num: '200+', label: 'Expert Team' },
                 { num: '350+', label: 'Happy Customers' },
                 { num: '16+', label: 'Years of Experience' },
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
                        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Our Services</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Boost Your Brand <br/>with Our Expertise</h2>
                </div>
                <Link to="/services" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-brand-accent hover:text-brand-darker transition-all mt-6 md:mt-0">
                    View All Services
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Social Media Marketing', img: 'https://picsum.photos/600/400?random=4' },
                    { title: 'Content Marketing', img: 'https://picsum.photos/600/400?random=5', highlight: true },
                    { title: 'Email Marketing', img: 'https://picsum.photos/600/400?random=6' }
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
                                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-3 ${svc.highlight ? 'text-white' : 'text-white'}`}>{svc.title}</h3>
                                <p className="text-sm mb-6 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
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
                    <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Our Work Process</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white">Step-by-Step to Your Growth</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { step: '01', title: 'Discover & Strategize', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                    { step: '02', title: 'Execute & Optimize', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                    { step: '03', title: 'Analyze & Grow', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                ].map((item, idx) => (
                    <div key={idx} className="relative group">
                        <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-white/5 hover:border-t-brand-accent transition-all duration-300">
                             <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">{item.step}</div>
                             <h3 className="text-2xl font-bold mb-4 mt-8 text-white">{item.title}</h3>
                             <p className="text-gray-400 mb-8">{item.desc}</p>
                             <div className="w-full h-10 bg-white/5 rounded flex items-center px-4 group-hover:bg-brand-primary/40 transition-colors">
                                <span className="text-xs font-bold text-brand-accent tracking-widest uppercase">STEP {item.step}</span>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-brand-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-brand-accent shadow-[0_0_10px_rgba(196,242,46,0.5)]"></div>
                        <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Our Work</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Work That Drives Results</h2>
                </div>
                {/* Desktop Button */}
                <Link to="/portfolio" className="hidden md:inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-brand-accent hover:text-brand-darker transition-all items-center gap-2 backdrop-blur-md hover:shadow-[0_0_20px_rgba(196,242,46,0.3)]">
                    View All Work <ArrowRight size={16} />
                </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: 'A Social Campaign for Real Estate Agency', tags: ['Social Media Marketing'], img: 'https://picsum.photos/800/600?random=10' },
                    { title: 'Search to Schedule: SEO & PPC for Dental Clinic', tags: ['SEO', 'PPC'], img: 'https://picsum.photos/800/600?random=11' },
                    { title: 'Healthy Clicks: Google Ads for Yoga Studio', tags: ['Social Media Marketing'], img: 'https://picsum.photos/800/600?random=12' },
                    { title: 'Runway to Revenue: Instagram Ad Campaign', tags: ['Paid Advertising'], img: 'https://picsum.photos/800/600?random=13' },
                ].map((project, idx) => (
                    <div key={idx} className="group glass-card rounded-2xl p-3 hover:border-brand-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] cursor-pointer">
                        {/* Image Container */}
                        <div className="h-72 rounded-xl overflow-hidden relative mb-5 bg-brand-darker">
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors"></div>
                            
                            {/* Tag Pill */}
                            <div className="absolute top-4 left-4 bg-brand-darker/80 backdrop-blur-md border border-white/10 text-brand-accent text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                {project.tags[0]}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-3 pb-3 flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight mb-1 group-hover:text-brand-accent transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <Link to="/portfolio" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white shrink-0 transition-all group-hover:bg-brand-accent group-hover:text-brand-darker group-hover:rotate-45 hover:shadow-[0_0_15px_rgba(196,242,46,0.3)]">
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Button */}
            <div className="mt-8 md:hidden text-center">
                 <Link to="/portfolio" className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-brand-accent hover:text-brand-darker transition-all items-center gap-2 backdrop-blur-md">
                    View All Work <ArrowRight size={16} />
                </Link>
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">Get Your Free Quote Today!</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
                Ready to transform your digital presence? Contact us to discuss your project and how we can help you grow.
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