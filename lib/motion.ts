// This is a workaround for Framer Motion with Next.js 13+
// Import and re-export motion with a workaround for Next.js 13+

// Import the client-side version of Framer Motion
import { motion as framerMotion, AnimatePresence } from 'framer-motion';

// Re-export the motion object and other components
export { framerMotion as motion, AnimatePresence };

// Re-export types
export type { MotionProps } from 'framer-motion';

// Re-export any other Framer Motion components you need
export * from 'framer-motion';
