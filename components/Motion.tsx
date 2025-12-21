import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// --- Transition Settings ---
const EASE_PREMIUM = [0.22, 1, 0.36, 1]; // Custom cubic bezier for "SaaS" feel

// --- Variants ---

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { duration: 0.8, ease: EASE_PREMIUM } 
  },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.05
    } 
  },
};

export const scaleInVariant = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE_PREMIUM } }
};

// --- Components ---

export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeInUpVariant;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeInUpVariant;
    return (
        <motion.div variants={variants} className={className}>
            {children}
        </motion.div>
    );
};

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        className="w-full"
    >
        {children}
    </motion.div>
);

export const MagneticButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = "", onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set((clientX - center.x) * 0.15);
        y.set((clientY - center.y) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    );
};

export const HoverCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    return (
        <motion.div
            className={className}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
