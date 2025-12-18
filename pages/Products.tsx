import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-20 container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto py-20 glass-panel rounded-3xl">
        <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
            <Box size={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Strategic Frameworks & Tools</h1>
        <p className="text-gray-400 mb-8">
            We are currently refining our proprietary frameworks and digital governance tools. 
            Check back for updates on our sovereign technology suite.
        </p>
        <Link to="/contact" className="inline-block px-8 py-3 bg-brand-accent text-brand-darker font-bold rounded-full hover:bg-white transition-colors">
            Contact Us for Custom Solutions
        </Link>
      </div>
    </div>
  );
};

export default Products;