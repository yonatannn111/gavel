"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Weekly Club Meeting",
    category: "meetings",
    date: "April 2025"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Team Discussion",
    category: "meetings",
    date: "March 2025"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Speech Contest",
    category: "contests",
    date: "February 2025"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Workshop",
    category: "workshops",
    date: "January 2025"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Networking Event",
    category: "social",
    date: "December 2024"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Inter-University Competition",
    category: "contests",
    date: "November 2024"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Executive Committee Handover",
    category: "social",
    date: "October 2024"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Leadership Workshop",
    category: "workshops",
    date: "September 2024"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Impromptu Speaking Session",
    category: "meetings",
    date: "August 2024"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Member Presentation",
    category: "meetings",
    date: "July 2024"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Annual Dinner",
    category: "social",
    date: "June 2024"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Public Speaking Workshop",
    category: "workshops",
    date: "May 2024"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-16">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl">
            Browse through photos from our past events, meetings, and activities.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all" 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setFilter("meetings")}
              className={`px-4 py-2 rounded-full ${
                filter === "meetings" 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Meetings
            </button>
            <button
              onClick={() => setFilter("workshops")}
              className={`px-4 py-2 rounded-full ${
                filter === "workshops" 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setFilter("contests")}
              className={`px-4 py-2 rounded-full ${
                filter === "contests" 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Contests
            </button>
            <button
              onClick={() => setFilter("social")}
              className={`px-4 py-2 rounded-full ${
                filter === "social" 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Social Events
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square relative">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm">{image.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lightbox Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
              {selectedImage !== null && (
                <div className="relative">
                  <div className="relative aspect-video">
                    <Image 
                      src={galleryImages.find(img => img.id === selectedImage)?.src || ""} 
                      alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p className="font-semibold">
                      {galleryImages.find(img => img.id === selectedImage)?.alt}
                    </p>
                    <p className="text-sm">
                      {galleryImages.find(img => img.id === selectedImage)?.date}
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">Have Photos to Share?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you have photos from our events that you'd like to share, please send them to us. We'd love to add them to our gallery!
          </p>
          <div className="inline-flex items-center justify-center bg-[#8B0000] text-white px-6 py-3 rounded-md hover:bg-[#FF0000] transition-colors">
            <a href="mailto:gavelclub@smu.edu.sg?subject=Photo%20Submission" className="flex items-center">
              Submit Your Photos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}