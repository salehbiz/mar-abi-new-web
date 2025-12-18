import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010201] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
        {/* Subtle glow in footer */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                    <span className="text-brand-darker font-extrabold text-sm">M</span>
                </div>
                <span>Mar Abi</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering your success with digital expertise. We build experiences that drive growth and elevate brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-darker hover:border-brand-accent transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-brand-accent transition-colors">Products</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/articles" className="hover:text-brand-accent transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-brand-accent">T:</span> 
                (000) 000-0000
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent">E:</span> 
                example@gmail.com
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent">A:</span> 
                2464 Royal Ln. Mesa,<br />New Jersey 45463
              </li>
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest digital trends.</p>
            <form className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                />
                <button className="w-full bg-brand-accent text-brand-darker font-bold py-3 rounded-lg text-sm hover:bg-white hover:scale-[1.02] transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(196,242,46,0.15)]">
                    Subscribe <ArrowRight size={16} />
                </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 Mar Abi Digital Agency. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;