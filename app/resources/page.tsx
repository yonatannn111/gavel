"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText as FileTextIcon,
  BookOpen, 
  Search, 
  Mic, 
  Users, 
  CheckCircle,
  PlayCircle,
  Trophy,
  Lightbulb,
  FileCheck,
  File,
  X,
  ChevronDown,
  ArrowRight,
  Award,
  User as UserIcon,
  Clock,
  Calendar
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type ResourceType = 'pdf' | 'video' | 'article' | 'template' | 'guide' | 'worksheet';
type ResourceCategory = 'beginner' | 'speeches' | 'evaluation' | 'leadership' | 'contests' | 'hybrid' | 'tools';
type ResourceLevel = 'beginner' | 'intermediate' | 'advanced';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  url: string;
  thumbnail?: string;
  duration?: string;
  pages?: number;
  author: string;
  date: string;
  featured?: boolean;
  level?: ResourceLevel;
}

interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface ResourceTypeFilter {
  id: ResourceType | 'all';
  name: string;
  icon?: React.ReactNode;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Categories for filtering
const categories: Category[] = [
  { id: 'all', name: 'All Categories' },
  { id: 'beginner', name: 'Getting Started', icon: <Lightbulb className="w-4 h-4 mr-2" /> },
  { id: 'speeches', name: 'Speech Crafting', icon: <Mic className="w-4 h-4 mr-2" /> },
  { id: 'evaluation', name: 'Evaluations', icon: <CheckCircle className="w-4 h-4 mr-2" /> },
  { id: 'leadership', name: 'Leadership', icon: <Award className="w-4 h-4 mr-2" /> },
  { id: 'contests', name: 'Contests', icon: <Trophy className="w-4 h-4 mr-2" /> },
  { id: 'hybrid', name: 'Hybrid Meetings', icon: <Users className="w-4 h-4 mr-2" /> },
  { id: 'tools', name: 'Tools & Templates', icon: <File className="w-4 h-4 mr-2" /> },
];

// Resource types for filtering
const resourceTypes: ResourceTypeFilter[] = [
  { id: 'all', name: 'All Types' },
  { id: 'pdf', name: 'PDFs', icon: <FileTextIcon className="w-4 h-4 mr-2" /> },
  { id: 'video', name: 'Videos', icon: <PlayCircle className="w-4 h-4 mr-2" /> },
  { id: 'article', name: 'Articles', icon: <FileTextIcon className="w-4 h-4 mr-2" /> },
  { id: 'template', name: 'Templates', icon: <FileCheck className="w-4 h-4 mr-2" /> },
  { id: 'guide', name: 'Guides', icon: <BookOpen className="w-4 h-4 mr-2" /> },
  { id: 'worksheet', name: 'Worksheets', icon: <File className="w-4 h-4 mr-2" /> },
];

// Sample resources data
const resources: Resource[] = [
  {
    id: '1',
    title: 'The Art of Public Speaking',
    description: 'A comprehensive guide to mastering public speaking skills for beginners.',
    type: 'pdf',
    category: 'beginner',
    url: '#',
    author: 'John Doe',
    date: '2023-01-15',
    pages: 24,
    featured: true
  },
  {
    id: '2',
    title: 'Speech Structure 101',
    description: 'Learn how to structure your speech for maximum impact and engagement.',
    type: 'video',
    category: 'speeches',
    url: '#',
    author: 'Jane Smith',
    date: '2023-02-20',
    duration: '15:30',
    featured: true
  },
  {
    id: '3',
    title: 'Effective Evaluation Techniques',
    description: 'Master the art of giving constructive feedback to fellow Toastmasters.',
    type: 'article',
    category: 'evaluation',
    url: '#',
    author: 'Robert Johnson',
    date: '2023-03-10',
    level: 'intermediate'
  },
  {
    id: '4',
    title: 'Leadership in Action',
    description: 'Develop your leadership skills through practical exercises and real-world examples.',
    type: 'guide',
    category: 'leadership',
    url: '#',
    author: 'Emily Chen',
    date: '2023-04-05',
    pages: 18,
    level: 'advanced'
  },
  {
    id: '5',
    title: 'Contest Preparation Guide',
    description: 'Everything you need to know to prepare for and excel in Toastmasters speech contests.',
    type: 'pdf',
    category: 'contests',
    url: '#',
    author: 'Michael Brown',
    date: '2023-05-15',
    pages: 32,
    featured: true
  },
  {
    id: '6',
    title: 'Hybrid Meeting Best Practices',
    description: 'Tips and strategies for running effective hybrid Toastmasters meetings.',
    type: 'article',
    category: 'hybrid',
    url: '#',
    author: 'Sarah Wilson',
    date: '2023-06-20',
    level: 'beginner'
  },
  {
    id: '7',
    title: 'Meeting Agenda Template',
    description: 'A customizable template for planning and organizing your Toastmasters meetings.',
    type: 'template',
    category: 'tools',
    url: '#',
    author: 'David Kim',
    date: '2023-07-10',
    featured: true
  },
  {
    id: '8',
    title: 'Speech Evaluation Worksheet',
    description: 'A structured worksheet for providing detailed and constructive speech evaluations.',
    type: 'worksheet',
    category: 'evaluation',
    url: '#',
    author: 'Lisa Wong',
    date: '2023-08-05',
    level: 'intermediate'
  }
];

// Component to display a single resource card
const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
    >
      {resource.thumbnail ? (
        <div className="h-48 bg-gray-100 relative">
          <Image
            src={resource.thumbnail}
            alt={resource.title}
            fill
            className="object-cover"
          />
          {resource.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-[#8B0000] to-[#B91C1C] flex items-center justify-center text-white">
          {getIconByType(resource.type, 'w-12 h-12')}
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8B0000]/10 text-[#8B0000] mr-2">
            {resourceTypes.find(t => t.id === resource.type)?.name}
          </span>
          {resource.level && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {resource.level.charAt(0).toUpperCase() + resource.level.slice(1)}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {resource.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {resource.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <UserIcon className="w-3 h-3 mr-1" />
              <span>{resource.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              {resource.type === 'video' ? (
                <Clock className="w-3 h-3 mr-1" />
              ) : resource.pages ? (
                <File className="w-3 h-3 mr-1" />
              ) : null}
              <span>
                {resource.type === 'video' 
                  ? resource.duration 
                  : resource.pages 
                    ? `${resource.pages} pages` 
                    : ''}
              </span>
            </div>
            
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#8B0000] hover:text-[#B91C1C] transition-colors"
            >
              View Resource
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to get icon by resource type
const getIconByType = (type: string, className = 'w-6 h-6') => {
  switch (type) {
    case 'pdf':
      return <FileTextIcon className={className} />;
    case 'video':
      return <PlayCircle className={className} />;
    case 'article':
      return <FileTextIcon className={className} />;
    case 'template':
      return <FileCheck className={className} />;
    case 'guide':
      return <BookOpen className={className} />;
    case 'worksheet':
      return <File className={className} />;
    default:
      return <File className={className} />;
  }
};

export default function ResourcesPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeType, setActiveType] = useState<ResourceType | 'all'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  // Filter resources based on search and active filters
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       (resource.description && resource.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeFilter === 'all' || resource.category === activeFilter;
    const matchesType = activeType === 'all' || resource.type === activeType;
    return matchesSearch && matchesCategory && matchesType;
  });

  // Handle click outside for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Toastmasters Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Enhance your public speaking and leadership skills with our curated collection of resources.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder-white/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Featured Resources</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Category Filter */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  setIsTypeOpen(false);
                }}
                className="flex items-center justify-between w-full sm:w-48 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
              >
                <span className="flex items-center">
                  {categories.find(cat => cat.id === activeFilter)?.icon}
                  {categories.find(cat => cat.id === activeFilter)?.name || 'All Categories'}
                </span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="py-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setActiveFilter(category.id);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                            activeFilter === category.id
                              ? 'bg-[#8B0000]/10 text-[#8B0000]'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {category.icon}
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Type Filter */}
            <div className="relative" ref={typeRef}>
              <button
                onClick={() => {
                  setIsTypeOpen(!isTypeOpen);
                  setIsFilterOpen(false);
                }}
                className="flex items-center justify-between w-full sm:w-48 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
              >
                <span className="flex items-center">
                  {resourceTypes.find(type => type.id === activeType)?.icon}
                  {resourceTypes.find(type => type.id === activeType)?.name || 'All Types'}
                </span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isTypeOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isTypeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="py-1">
                      {resourceTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => {
                            setActiveType(type.id as ResourceType | 'all');
                            setIsTypeOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                            activeType === type.id
                              ? 'bg-[#8B0000]/10 text-[#8B0000]'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {type.icon}
                          {type.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Active Filters */}
        {(activeFilter !== 'all' || activeType !== 'all') && (
          <div className="flex flex-wrap gap-2 mb-8">
            {activeFilter !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#8B0000]/10 text-[#8B0000]">
                {categories.find(cat => cat.id === activeFilter)?.name}
                <button 
                  onClick={() => setActiveFilter('all')}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-[#8B0000]/20"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeType !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {resourceTypes.find(type => type.id === activeType)?.name}
                <button 
                  onClick={() => setActiveType('all')}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
        
        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setActiveType('all');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#8B0000] hover:bg-[#6B0000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
