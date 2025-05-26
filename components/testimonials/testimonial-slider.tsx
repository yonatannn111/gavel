'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  duration?: number;
  className?: string;
}

const DUPLICATION_FACTOR = 3; // Number of times to duplicate the items
const ANIMATION_DURATION = 90; // Increased duration for even slower animation

export function TestimonialSlider({
  testimonials,
  direction = 'right',
  duration = ANIMATION_DURATION,
  className = '',
}: TestimonialSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Constants
  const ITEM_WIDTH = 300; // Width of each testimonial card
  const GAP = 24; // Gap between cards (12px margin on each side)
  const ITEM_TOTAL_WIDTH = ITEM_WIDTH + GAP;
  
  // Create multiple sets of items for seamless scrolling
  const items = Array(DUPLICATION_FACTOR).fill(testimonials).flat();
  
  // Animation variants
  const variants = {
    right: {
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: duration,
          ease: 'linear',
        },
      },
    },
    left: {
      x: ['-50%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: duration,
          ease: 'linear',
        },
      },
    },
  };
  
  // Handle hover state
  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start(direction);
    }
  }, [isHovered, controls, direction]);
  
  // Start animation on mount
  useEffect(() => {
    controls.start(direction);
  }, [controls, direction]);

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '20px 0',
      }}
    >
      <div className="relative w-full overflow-hidden">
        <motion.div 
          ref={sliderRef}
          className="flex w-max"
          animate={controls}
          variants={variants}
          style={{
            display: 'flex',
            willChange: 'transform',
          }}
        >
          {items.map((testimonial, index) => (
            <motion.div 
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0"
              initial={false}
              style={{
                width: `${ITEM_WIDTH}px`,
                margin: `0 ${GAP / 2}px`,
                flexShrink: 0,
                flexGrow: 0,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                <p className="text-gray-700 italic mb-6 text-sm">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <Image 
                      src={`/members/${testimonial.image}`} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-sm text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
