"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, Download, Share2, X, Image as ImageIcon, MapPin, Tag as TagIcon, ChevronLeft, ChevronRight, ChevronDown, Users, Mail, Upload, ArrowRight } from 'lucide-react';
import { galleryImages, type GalleryImage, type GalleryCategory } from './galleryData';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CTABanner from "@/components/CTABanner";

// Fallback images for error handling
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1505373877841-8d25f03d0b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1469371670807-b4949865b5ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

// Categories for filtering
const categories = [
  { id: 'all' as const, name: 'All' },
  { id: 'meetings' as const, name: 'Meetings' },
  { id: 'workshops' as const, name: 'Workshops' },
  { id: 'contests' as const, name: 'Contests' },
  { id: 'social' as const, name: 'Social' },
  { id: 'other' as const, name: 'Other' },
];

// Helper function to get fallback image
const getFallbackImage = (id: number) => FALLBACK_IMAGES[id % FALLBACK_IMAGES.length];

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="aspect-[3/2] bg-gray-100 rounded-xl animate-pulse"></div>
);

// Image card component with bento grid layout
const GalleryImageCard = ({
  image,
  onClick,
  className = "",
  size = "md"
}: {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(image.src);
  const [isHovered, setIsHovered] = useState(false);

  const handleError = () => {
    const randomFallback = FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
    setImgSrc(randomFallback);
  };

  const sizeClasses = {
    sm: "row-span-1",
    md: "row-span-2",
    lg: "row-span-3"
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer",
        "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full relative">
        <Image
          src={imgSrc}
          alt={image.alt}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isLoading ? "opacity-0" : "opacity-100",
            isHovered ? "scale-105" : "scale-100"
          )}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={image.featured}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#8B0000] rounded-full animate-spin"></div>
          </div>
        )}
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-white text-left">
                <h3 className="font-semibold text-white drop-shadow-md">{image.title}</h3>
                <p className="text-sm text-white/90 line-clamp-1">{image.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {image.featured && (
          <div className="absolute top-3 right-3 bg-[#8B0000] text-white text-xs font-medium px-2 py-1 rounded-full shadow-md">
            Featured
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function GalleryPage() {
  const controls = useAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isShareSupported, setIsShareSupported] = useState(false);
  const { toast } = useToast();
  
  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [filter]);
  
  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [filter]);
  
  // Check if Web Share API is supported
  useEffect(() => {
    setIsClient(true);
    setIsShareSupported(!!navigator.share);
  }, []);
  
  // Filter and sort images
  const filteredImages = useMemo(() => {
    return (filter === 'all' 
      ? [...galleryImages] 
      : galleryImages.filter(image => image.category === filter)
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filter]);
  
  // Get featured images for the hero section
  const featuredImages = useMemo(() => 
    galleryImages.filter(img => img.featured)
  , []);
  
  // Handle image loading errors
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>, id: number) => {
    const target = e.target as HTMLImageElement;
    target.src = getFallbackImage(id);
  }, []);
  
  // Navigate between images in lightbox
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
    
    // Animate the lightbox content
    controls.start({
      x: direction === 'next' ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.1 }
    }).then(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    });
  }, [selectedImage, filteredImages, controls]);
  
  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (selectedImage === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage]);
  
  // Load more images
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredImages.length));
  };
  
  // Handle share functionality
  const handleShare = useCallback(async () => {
    if (selectedImage === null) return;
    
    const image = filteredImages.find(img => img.id === selectedImage);
    if (!image) return;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied to clipboard",
          description: "Share this link with others!",
        });
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  }, [selectedImage, filteredImages, toast]);
  
  // Open lightbox with smooth transition
  const openLightbox = useCallback((id: number) => {
    setSelectedImage(id);
  }, []);
  
  // Close lightbox with animation
  const closeLightbox = useCallback(() => {
    controls.start({
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }).then(() => {
      setSelectedImage(null);
    });
  }, [controls]);
  
  // Get current image for lightbox
  const currentImage = useMemo(() => {
    return filteredImages.find(img => img.id === selectedImage);
  }, [filteredImages, selectedImage]);
  
  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#660000] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg md:text-xl opacity-90">
              Explore our collection of memorable moments, events, and activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-grid" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  "border-2 border-transparent",
                  filter === category.id
                    ? "bg-[#8B0000] text-white border-[#8B0000] shadow-md"
                    : "bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {filteredImages.slice(0, visibleCount).map((image, index) => {
              // Create a pattern of different sizes for visual interest
              const patternIndex = index % 8; // Repeat the pattern every 8 items
              let size: "sm" | "md" | "lg" = "md";
              let colSpan = "col-span-1";
              let rowSpan = "row-span-1";
              
              // Define the pattern for different sizes and spans
              if (patternIndex === 0 || patternIndex === 7) {
                // Large items that span 2x2
                size = "lg";
                colSpan = "col-span-2";
                rowSpan = "row-span-2";
              } else if (patternIndex === 3 || patternIndex === 5) {
                // Small square items
                size = "sm";
              } else {
                // Medium items (default)
                size = "md";
              }
              
              // Ensure the first item is always large on medium screens and up
              const firstItemClass = index === 0 ? "md:row-span-2" : "";
              
              return (
                <div 
                  key={image.id} 
                  className={cn(
                    "relative group",
                    colSpan,
                    rowSpan,
                    firstItemClass
                  )}
                >
                  <GalleryImageCard
                    image={image}
                    size={size}
                    onClick={() => openLightbox(image.id)}
                    className="h-full w-full"
                  />
                </div>
              );
            })}
          </div>
          
          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <motion.div 
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button
                onClick={loadMore}
                variant="outline"
                className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-colors"
              >
                Load More
              </Button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image */}
                <motion.div
                  className="relative aspect-video bg-black rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getFallbackImage(currentImage.id);
                    }}
                  />
                </motion.div>
                
                {/* Image Info */}
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{currentImage.title}</h3>
                      <p className="text-sm text-gray-600">{currentImage.description}</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>{currentImage.date}</span>
                        {currentImage.location && (
                          <>
                            <MapPin className="w-3.5 h-3.5 ml-3 mr-1" />
                            <span>{currentImage.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {isShareSupported && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleShare}
                          className="flex items-center gap-1 text-gray-900 hover:text-white hover:bg-[#8B0000] border-[#8B0000]"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-gray-900 hover:text-white hover:bg-[#8B0000] border-[#8B0000]"
                      >
                        <a 
                          href={currentImage.src} 
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {currentImage.tags && currentImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
                      {currentImage.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          <TagIcon className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
