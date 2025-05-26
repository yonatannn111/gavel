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
const SLIDE_DISTANCE = '-50%'; // How far the slide should move

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
  
  // Track the current progress
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>();
  const startTime = useRef<number>();
  const lastTime = useRef<number>();
  
  // Animation loop
  const animate = (time: number) => {
    if (!startTime.current) startTime.current = time;
    if (!lastTime.current) lastTime.current = time;
    
    const elapsed = time - startTime.current;
    const delta = time - lastTime.current;
    lastTime.current = time;
    
    if (!isHovered) {
      // Update progress based on direction
      const newProgress = (progress + (delta / (ANIMATION_DURATION * 1000))) % 1;
      setProgress(newProgress);
      
      // Calculate x position based on progress and direction
      let x = 0;
      if (direction === 'right') {
        x = -progress * 100; // Move left
      } else {
        x = progress * 100 - 50; // Move right
      }
      
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${x}%)`;
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };
  
  // Start/stop animation on mount/unmount and hover changes
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, progress, direction]);
  
  // Reset animation when direction changes
  useEffect(() => {
    setProgress(0);
    startTime.current = undefined;
    lastTime.current = undefined;
  }, [direction]);

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
