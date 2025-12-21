import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './Motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Robotics', path: '/robotics' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Articles', path: '/articles' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-darker/70 backdrop-blur-xl border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group z-50 relative">
          <div className="relative w-8 h-8 flex items-center justify-center">
             {/* Custom Network/Molecule Icon */}
             <motion.svg 
                width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className="text-brand-accent transition-colors"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
             >
                <circle cx="8" cy="9" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="8" cy="23" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="16" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M8 12.5V19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M11 10.5L21 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M11 21.5L21 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
             </motion.svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-light transition-colors">Mar Abi</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    active ? 'text-brand-accent' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                  )}
                </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
              <MagneticButton className="group px-6 py-2.5 bg-brand-accent text-brand-darker font-bold rounded-full transition-all hover:bg-white flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(196,242,46,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Request Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:text-brand-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-darker/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
        >
          {navLinks.map((link, i) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-medium py-2 border-b border-white/5 ${
                isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'
              }`}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                  {link.name}
              </motion.div>
            </Link>
          ))}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
              <Link 
                to="/contact" 
                className="mt-4 w-full block text-center py-3 bg-brand-accent text-brand-darker font-bold rounded-lg shadow-[0_0_15px_rgba(196,242,46,0.2)]"
              >
                Request Consultation
              </Link>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;