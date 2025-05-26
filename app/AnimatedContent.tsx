'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const pageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.1
    } 
  },
  enter: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    x: 100,
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20,
      when: 'afterChildren'
    } 
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="bg-white">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

type VariantProps = {
  custom?: number;
};

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: ({ custom = 0 }: VariantProps = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
