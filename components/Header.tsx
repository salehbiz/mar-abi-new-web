import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Articles', path: '/articles' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-darker/70 backdrop-blur-xl border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-8 h-8 flex items-center justify-center">
             {/* Custom Network/Molecule Icon */}
             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_8px_rgba(196,242,46,0.6)]">
                <circle cx="8" cy="9" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="8" cy="23" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="16" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M8 12.5V19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M11 10.5L21 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M11 21.5L21 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
             </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-light transition-colors">Mar Abi</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="group px-6 py-2.5 bg-brand-accent text-brand-darker font-bold rounded-full transition-all hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(196,242,46,0.3)] flex items-center gap-2 text-sm"
          >
            Request Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-darker/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-medium py-2 border-b border-white/5 ${
                isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mt-4 w-full text-center py-3 bg-brand-accent text-brand-darker font-bold rounded-lg shadow-[0_0_15px_rgba(196,242,46,0.2)]"
          >
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;