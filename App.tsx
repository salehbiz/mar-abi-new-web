import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Robotics from './pages/Robotics';
import { PageTransition } from './components/Motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/robotics" element={<PageTransition><Robotics /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-darker">
      {/* Background Decor Elements - Animated */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
         <motion.div 
            animate={{ 
                x: [0, 20, -20, 0], 
                y: [0, -30, 20, 0], 
                opacity: [0.2, 0.25, 0.2] 
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-primary rounded-full blur-[150px]"
         />
         <motion.div 
            animate={{ 
                x: [0, -30, 10, 0], 
                y: [0, 20, -20, 0],
                opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[180px]"
         />
         <motion.div 
            animate={{ 
                y: [0, -40, 0],
                opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-accent rounded-full blur-[200px]"
         />
      </div>

      <Header />
      <main className="flex-grow relative z-10 pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;