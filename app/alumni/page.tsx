"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Mic, 
  X, 
  Linkedin, 
  Mail, 
  Search, 
  Filter, 
  Share2, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight,
  Users,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface Alumni {
  id: string;
  name: string;
  role: string;
  company: string;
  graduationYear: number;
  currentRole: string;
  testimonial: string;
  image: string;
  linkedin: string;
  email: string;
  achievements: string[];
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  postTime: string;
}

const AnimatedDiv = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default function AlumniPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'recent' | 'featured'>('all');
  const [selectedAlum, setSelectedAlum] = useState<Alumni | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const storiesRef = useRef<HTMLDivElement>(null);
  const [alumni, setAlumni] = useState<Alumni[]>([
    {
      id: 'henok-elias',
      name: 'Henok Elias',
      role: 'Former President',
      company: 'Appleazy',
      graduationYear: 2022,
      currentRole: 'Training Manager at Appleazy',
      testimonial: 'My time at SMU Gavel Club was transformative. The public speaking and leadership skills I developed have been instrumental in my career. I still use the evaluation techniques I learned in every team meeting!',
      image: 'alumnis/alumni1.jpg',
      linkedin: 'https://et.linkedin.com/in/henok-elias-95011b1a9',
      email: '#',
      achievements: [
        'Marketing Graduate from St. Mary\'s University',
        'Former President of SMU Gavel Club',
        'Training and Development Specialist',
        'Expert in Leadership Development'
      ],
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      postTime: '2022-01-01'
    },
    {
      id: 'getacher-tsegaye',
      name: 'Getacher Tsegaye',
      role: 'Former Member',
      company: 'Yanos IT Solutions',
      graduationYear: 2023,
      currentRole: 'Software Developer at Yanos IT Solutions',
      testimonial: 'The technical and communication skills I developed at SMU Gavel Club have been invaluable in my software development career. The ability to explain complex technical concepts clearly is something I use daily.',
      image: 'alumnis/alumni2.jpg',
      linkedin: 'https://et.linkedin.com/in/getacher-tsegaye-8462042bb',
      email: '#',
      achievements: [
        'Computer Science Graduate from St. Mary\'s University',
        'Former Senior CADD Officer at Amhara Bank',
        'Full-stack Development Specialist',
        'Active contributor to open-source projects'
      ],
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      postTime: '2023-01-01'
    },
    {
      id: 'eyuel-mamushet',
      name: 'Eyuel Mamushet',
      role: 'Former Secretary',
      company: 'Self-employed',
      graduationYear: 2023,
      currentRole: 'Self-employed',
      testimonial: 'My experience as Secretary at SMU Gavel Club taught me valuable organizational and communication skills that I now apply in my entrepreneurial journey. The club was instrumental in building my confidence and professional network.',
      image: 'alumnis/alumni3.jpg',
      linkedin: 'https://et.linkedin.com/in/eyuel-mamushet-599a29311',
      email: '#',
      achievements: [
        'Accounting & Finance major at St. Mary\'s University',
        'Former Secretary of SMU Gavel Club',
        'Financial Management Expert',
        'Entrepreneur and Business Consultant'
      ],
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      postTime: '2023-01-01'
    },
    {
      id: 'yared-solomon',
      name: 'Yared Solomon',
      role: 'Former VP Membership',
      company: 'Ampoule Software Development',
      graduationYear: 2022,
      currentRole: 'Frontend Developer at Ampoule Software Development',
      testimonial: 'Serving as VP Membership at SMU Gavel Club was a turning point in my professional development. The leadership and communication skills I gained have been crucial in my tech career, especially when collaborating with cross-functional teams.',
      image: 'alumnis/alumni4.jpg',
      linkedin: 'https://et.linkedin.com/in/yared-solomon-79b544239',
      email: '#',
      achievements: [
        'Computer Science Graduate from St. Mary\'s University',
        'Studying Marketing Management at Addis Ababa University',
        'Former VP Membership of SMU Gavel Club',
        'Frontend Development Specialist'
      ],
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      postTime: '2022-01-01'
    }
  ]);

  const filteredAlumni = activeTab === 'all' 
    ? alumni 
    : activeTab === 'recent' 
      ? alumni.filter(a => a.graduationYear >= 2022)
      : alumni.filter(a => a.achievements.some(ach => ach.includes('DTM') || ach.includes('Keynote')));

  const openModal = (alum: Alumni) => {
    setSelectedAlum(alum);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlum(null);
    document.body.style.overflow = 'auto';
  };

  const toggleLike = (id: string) => {
    setAlumni(alumni.map(alum => 
      alum.id === id 
        ? { ...alum, isLiked: !alum.isLiked, likes: alum.isLiked ? alum.likes - 1 : alum.likes + 1 }
        : alum
    ));
  };

  const toggleBookmark = (id: string) => {
    setAlumni(alumni.map(alum => 
      alum.id === id 
        ? { ...alum, isBookmarked: !alum.isBookmarked }
        : alum
    ));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#660000] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Network</h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover how our alumni are making an impact in their careers and communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { id: 'all', label: 'All Alumni', icon: <Users className="w-4 h-4 mr-2" /> },
              { id: 'recent', label: 'Recent Graduates', icon: <GraduationCap className="w-4 h-4 mr-2" /> },
              { id: 'featured', label: 'Featured Alumni', icon: <Award className="w-4 h-4 mr-2" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? 'bg-[#8B0000] text-white shadow-lg shadow-red-900/20'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Alumni Grid */}
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAlumni.map((alum, index) => (
                <motion.div
                  key={alum.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col h-full"
                >
                  {/* Header with Profile Image and Basic Info */}
                  <div className="relative">
                    {/* Cover Photo */}
                    <div className="h-32 bg-gradient-to-r from-[#8B0000] to-[#6B0000] w-full"></div>
                    
                    {/* Profile Image */}
                    <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src={`/${alum.image}`}
                          alt={`${alum.name}, ${alum.currentRole} at ${alum.company}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          priority={index < 4}
                        />
                      </div>
                    </div>
                    
                    {/* View More Button */}
                    <div className="absolute right-4 bottom-4">
                      <button 
                        onClick={() => openModal(alum)}
                        className="px-3 py-1.5 bg-white hover:bg-gray-50 text-sm font-medium text-[#8B0000] rounded-full border border-[#8B0000]/20 hover:border-[#8B0000]/40 transition-all shadow-sm flex items-center space-x-1.5"
                        aria-label={`View ${alum.name}'s profile`}
                      >
                        <span>View More</span>
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-10 pb-6 px-6 flex-1 flex flex-col">
                    {/* Name and Role */}
                    <div className="mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{alum.name}</h3>
                      <p className="text-sm text-gray-600">{alum.currentRole}</p>
                      <p className="text-xs text-[#8B0000] font-medium mt-1">Class of {alum.graduationYear}</p>
                      <div className="w-12 h-0.5 bg-gray-200 my-3"></div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="h-4"></div>
                    
                    {/* Testimonial Preview */}
                    <div className="mb-4 flex-1 min-h-[4.5rem]">
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        "{alum.testimonial}"
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 px-1">
                      <div className="flex items-center">
                        <button 
                          onClick={() => {
                            // Implement share functionality
                            if (navigator.share) {
                              navigator.share({
                                title: `SMU Gavel Club Alumnus: ${alum.name}`,
                                text: `Check out ${alum.name}'s journey from SMU Gavel Club to ${alum.currentRole}`,
                                url: window.location.href,
                              }).catch(console.error);
                            } else {
                              // Fallback for browsers that don't support Web Share API
                              navigator.clipboard.writeText(window.location.href);
                              alert('Link copied to clipboard!');
                            }
                          }}
                          className="flex items-center space-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          <Share2 className="w-5 h-5" size={18} strokeWidth={1.5} />
                          <span>Share</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {alum.linkedin && (
                          <a 
                            href={alum.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors hover:text-[#0A66C2]"
                            aria-label={`${alum.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {alum.email && (
                          <a 
                            href={`mailto:${alum.email}`}
                            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors hover:text-[#EA4335]"
                            aria-label={`Email ${alum.name}`}
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Are you an SMU Gavel Club alumnus?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Share your journey and inspire current members by being featured in our alumni spotlight!
          </p>
          <button className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Share Your Story
          </button>
        </div>
      </section>

      {/* Alumni Modal */}
      <AnimatePresence>
        {selectedAlum && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h2 className="text-lg font-semibold text-gray-900">Alumni Profile</h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="w-full md:w-1/3">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4 shadow-md"
                    >
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src={`/${selectedAlum.image}`}
                          alt={selectedAlum.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-center space-x-6 mb-6">
                      <button 
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: `Check out ${selectedAlum.name}'s profile`,
                              text: `From SMU Gavel Club alumni`,
                              url: window.location.href
                            }).catch(console.error);
                          } else {
                            // Fallback for browsers that don't support Web Share API
                            navigator.clipboard.writeText(window.location.href);
                            // You might want to add a toast notification here
                          }
                        }}
                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                        aria-label="Share profile"
                      >
                        <Share2 className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] p-4 rounded-xl text-white text-center">
                      <div className="text-sm font-medium mb-1">Class of</div>
                      <div className="text-2xl font-bold">{selectedAlum.graduationYear}</div>
                      <div className="text-xs opacity-80 mt-1">Graduation Year</div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-900 mb-1">{selectedAlum.name}</h2>
                      <p className="text-xl text-gray-600 mb-2">{selectedAlum.currentRole}</p>
                      <div className="flex items-center text-gray-500 mb-6 text-sm">
                        <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{selectedAlum.role} • Class of {selectedAlum.graduationYear}</span>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
                        <p className="text-blue-700 italic">"{selectedAlum.testimonial}"</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-amber-500" />
                        Gavel Club Achievements
                      </h3>
                      <ul className="space-y-3">
                        {selectedAlum.achievements.map((achievement, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + (index * 0.05) }}
                            className="flex items-start group"
                          >
                            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white text-xs font-medium mr-3 mt-0.5 transform group-hover:scale-110 transition-transform">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2 text-[#8B0000]" />
                        Advice for Current Members
                      </h3>
                      <div className="space-y-4 text-gray-700">
                        <p>
                          {selectedAlum.name} encourages current members to take full advantage of the opportunities Gavel Club provides. "The skills you develop here—public speaking, leadership, and critical thinking—are highly transferable and will serve you well in any career path."
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Removed 'Stay connected' section as requested */}
    </div>
  );
}
