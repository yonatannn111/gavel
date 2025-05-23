"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Video, BookOpen, Download, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import { fadeInUpVariant, staggerContainer } from '../AnimatedContent';

type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'template';
  category: 'beginner' | 'intermediate' | 'advanced' | 'leadership' | 'judging';
  url: string;
  thumbnail?: string;
  duration?: string;
  pages?: number;
  author: string;
  date: string;
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedResource, setExpandedResource] = useState<string | null>(null);

  const resources: Resource[] = [
    {
      id: 'ice-breaker-guide',
      title: 'Ice Breaker Speech Guide',
      description: 'A comprehensive guide to delivering your first Ice Breaker speech with confidence',
      type: 'pdf',
      category: 'beginner',
      url: '/resources/ice-breaker-guide.pdf',
      pages: 12,
      author: 'SMU Gavel Club',
      date: '2024-01-15'
    },
    {
      id: 'evaluation-techniques',
      title: 'Effective Evaluation Techniques',
      description: 'Learn how to provide constructive feedback that helps speakers grow',
      type: 'video',
      category: 'intermediate',
      url: 'https://youtube.com/watch?v=example1',
      duration: '15:30',
      author: 'Jane Smith, DTM',
      date: '2024-02-20'
    },
    {
      id: 'pathways-overview',
      title: 'Pathways Learning Experience',
      description: 'Overview of the Toastmasters Pathways learning experience',
      type: 'article',
      category: 'beginner',
      url: 'https://www.toastmasters.org/pathways-overview',
      author: 'Toastmasters International',
      date: '2023-11-10'
    },
    {
      id: 'speech-structure',
      title: 'Speech Structure Templates',
      description: 'Downloadable templates for different speech structures',
      type: 'template',
      category: 'intermediate',
      url: '/resources/speech-templates.zip',
      author: 'SMU Gavel Club',
      date: '2024-03-05'
    },
    {
      id: 'advanced-storytelling',
      title: 'Advanced Storytelling Techniques',
      description: 'Master the art of storytelling in your speeches',
      type: 'video',
      category: 'advanced',
      url: 'https://youtube.com/watch?v=example2',
      duration: '22:15',
      author: 'Michael Chen',
      date: '2024-01-30'
    },
    {
      id: 'meeting-roles',
      title: 'Meeting Roles Handbook',
      description: 'Detailed guide to all meeting roles and responsibilities',
      type: 'pdf',
      category: 'beginner',
      url: '/resources/meeting-roles.pdf',
      pages: 18,
      author: 'SMU Gavel Club',
      date: '2023-12-15'
    },
    {
      id: 'mentorship-guide',
      title: 'Mentorship Program Guide',
      description: 'How to be an effective mentor or mentee in the Gavel Club',
      type: 'pdf',
      category: 'leadership',
      url: '/resources/mentorship-guide.pdf',
      pages: 24,
      author: 'SMU Gavel Club',
      date: '2024-02-10'
    },
    {
      id: 'contest-judging',
      title: 'Contest Judging Criteria',
      description: 'Official judging criteria for speech contests',
      type: 'pdf',
      category: 'judging',
      url: '/resources/judging-criteria.pdf',
      pages: 8,
      author: 'Toastmasters International',
      date: '2023-10-05'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'judging', name: 'Judging' }
  ];

  const resourceTypes = {
    pdf: { icon: <FileText className="w-5 h-5" />, color: 'bg-red-100 text-red-600' },
    video: { icon: <Video className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
    article: { icon: <BookOpen className="w-5 h-5" />, color: 'bg-green-100 text-green-600' },
    template: { icon: <Download className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' }
  };

  const toggleResource = (id: string) => {
    setExpandedResource(expandedResource === id ? null : id);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="w-full"
      >
        {/* Hero Section */}
        <motion.section 
          className="bg-[#8B0000] text-white py-20"
          custom={0}
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUpVariant}
              custom={0}
            >
              Resource Hub
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              variants={fadeInUpVariant}
              custom={1}
            >
              Essential materials to support your public speaking and leadership journey
            </motion.p>
          </div>
        </motion.section>

      {/* Search and Filter */}
      <motion.section 
        className="py-12 bg-white"
        custom={1}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div 
              className="relative mb-8"
              custom={0}
              variants={fadeInUpVariant}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-8"
              custom={1}
              variants={fadeInUpVariant}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  custom={index}
                  variants={fadeInUpVariant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resources Grid */}
      <motion.section 
        className="py-12 bg-gray-50"
        custom={2}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredResources.length === 0 ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-500 text-lg mb-4">No resources found matching your criteria.</p>
                <motion.button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className="text-[#8B0000] hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear filters
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    custom={index}
                    variants={fadeInUpVariant}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                    }}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    layout
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleResource(resource.id)}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className={`${resourceTypes[resource.type].color} p-2 rounded-lg mr-3`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {resourceTypes[resource.type].icon}
                        </motion.div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mt-4">
                        <span>{resource.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        {resource.duration && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{resource.duration}</span>
                          </>
                        )}
                        {resource.pages && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{resource.pages} pages</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedResource === resource.id && (
                        <motion.div 
                          className="border-t border-gray-100 p-6 bg-gray-50"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex flex-wrap gap-3">
                            <motion.a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#8B0000] hover:bg-[#6B0000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {resource.type === 'video' || resource.type === 'article' ? (
                                <>
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  View {resource.type}
                                </>
                              ) : (
                                <>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download {resource.type}
                                </>
                              )}
                            </motion.a>
                            
                            {resource.type === 'video' && (
                              <motion.button 
                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                Save for later
                              </motion.button>
                            )}
                          </div>
                          
                          {resource.type === 'video' && (
                            <motion.div 
                              className="mt-4"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <p className="text-sm text-gray-500">Video description and key points will appear here...</p>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-white"
        custom={3}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-6"
            custom={0}
            variants={fadeInUpVariant}
          >
            Have a resource to share?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            custom={1}
            variants={fadeInUpVariant}
          >
            We're always looking for valuable resources to add to our collection. Share your favorites with the community!
          </motion.p>
          <motion.button 
            className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            custom={2}
            variants={fadeInUpVariant}
            whileHover={{ 
              y: -3,
              boxShadow: '0 10px 25px -5px rgba(139, 0, 0, 0.3)'
            }}
          >
            Submit a Resource
          </motion.button>
        </div>
      </motion.section>
      </motion.div>
    </div>
  );
}
