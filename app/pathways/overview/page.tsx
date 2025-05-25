'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, BookOpen, ArrowRight, CheckCircle, Mic, Target, Lightbulb, Star } from 'lucide-react';
import { SubNavigation } from '@/components/sub-navigation';
import Image from 'next/image';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function PathwaysOverview() {
  const subNavItems = [
    { href: '/pathways/overview', label: 'Overview' },
    { href: '/pathways/accredited-speaker', label: 'Accredited Speaker Program' },
    { href: '/pathways/learning-experience', label: 'Pathways Learning Experience' },
  ];

  const features = [
    {
      icon: <Trophy className="w-6 h-6 text-[#8B0000]" />,
      title: '10 Unique Learning Paths',
      description: 'Choose from a variety of paths tailored to different communication and leadership goals.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#8B0000]" />,
      title: '5 Levels of Achievement',
      description: 'Progress through levels that build on each other to develop your skills.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#8B0000]" />,
      title: 'Real-World Application',
      description: 'Apply what you learn in practical, real-world scenarios.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#8B0000]" />,
      title: 'Comprehensive Resources',
      description: 'Access a wealth of resources to support your learning journey.'
    }
  ];

  const learningPaths = [
    {
      title: 'Dynamic Leadership',
      description: 'Develop leadership skills to build and manage teams effectively.',
      level: 'All Levels',
      icon: <Users className="w-5 h-5 text-[#8B0000]" />
    },
    {
      title: 'Persuasive Influence',
      description: 'Master the art of persuasion and influence in various contexts.',
      level: 'Intermediate to Advanced',
      icon: <Mic className="w-5 h-5 text-[#8B0000]" />
    },
    {
      title: 'Effective Coaching',
      description: 'Learn how to mentor and guide others to success.',
      level: 'Intermediate',
      icon: <Award className="w-5 h-5 text-[#8B0000]" />
    },
    {
      title: 'Innovative Planning',
      description: 'Master strategic planning and project management.',
      level: 'Advanced',
      icon: <Lightbulb className="w-5 h-5 text-[#8B0000]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
          <Image 
            src="/pathways/hero.jpg" 
            alt="Pathways Learning Experience"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 z-10 text-center text-white relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <BookOpen className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">Learning Experience</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
              Pathways Program
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your personalized journey to becoming a confident communicator and leader.
          </motion.p>
        </motion.div>
      </section>

      {/* Sub Navigation */}
      <SubNavigation items={subNavItems} basePath="/pathways" />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.span 
                className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Learning Experience
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Transform Your <span className="text-[#8B0000]">Communication</span> Skills
              </motion.h2>
              
              <motion.div className="space-y-6 text-gray-600">
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                    The Pathways learning experience offers more than 300 unique competencies to help you develop the skills you need to succeed in any situation. Whether you're looking to improve your public speaking, leadership abilities, or professional development, we have a path for you.
                </motion.p>
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="bg-gradient-to-r from-[#8B0000] to-[#B91C1C] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center mx-auto md:mx-0">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative h-96 bg-gray-100 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/pathways/learning.jpg" 
                alt="Pathways Learning Experience"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            className="py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <span className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider">
                Why Pathways?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our <span className="text-[#8B0000]">Program</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Develop essential skills that will serve you throughout your personal and professional life.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personalized Learning',
                  description: 'Choose from multiple paths that align with your goals and interests.',
                  icon: <Lightbulb className="h-6 w-6 text-[#8B0000]" />
                },
                {
                  title: 'Progressive Development',
                  description: 'Build skills progressively through structured levels and projects.',
                  icon: <Target className="h-6 w-6 text-[#8B0000]" />
                },
                {
                  title: 'Real-world Application',
                  description: 'Apply what you learn to real-life situations and professional scenarios.',
                  icon: <Star className="h-6 w-6 text-[#8B0000]" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.section 
            className="mt-20 py-20 bg-gradient-to-r from-[#8B0000] to-[#B91C1C] rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Start Your <span className="text-yellow-300">Journey</span>?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Join SMU Gavel Club today and unlock your full potential as a speaker and leader.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <button className="bg-white text-[#8B0000] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center mx-auto">
                  Join Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                
                <p className="mt-4 text-sm text-white/80">
                  No commitment required. Cancel anytime.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.div 
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <span className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Our <span className="text-[#8B0000]">Program</span> Special
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive learning experience designed to help you grow at every step.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: '10+ Pathways',
                  description: 'Choose from a variety of specialized learning paths',
                  icon: <Trophy className="h-6 w-6 text-[#8B0000]" />
                },
                {
                  title: '5 Levels Each',
                  description: 'Progress through structured levels of achievement',
                  icon: <Award className="h-6 w-6 text-[#8B0000]" />
                },
                {
                  title: 'Mentorship',
                  description: 'Get guidance from experienced speakers',
                  icon: <Users className="h-6 w-6 text-[#8B0000]" />
                },
                {
                  title: 'Resources',
                  description: 'Access to exclusive learning materials',
                  icon: <BookOpen className="h-6 w-6 text-[#8B0000]" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  variants={fadeInUp}
                  custom={index * 0.1}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Paths Section */}
          <motion.div 
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <span className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider">
                Learning Paths
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore Our <span className="text-[#8B0000]">Pathways</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the path that aligns with your goals and interests.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {learningPaths.map((path, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden group"
                    variants={fadeInUp}
                    custom={index * 0.1}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-2 bg-gradient-to-r from-[#8B0000] to-[#B91C1C]"></div>
                    <div className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                              {path.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{path.description}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-6">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>{path.level}</span>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <button className="text-[#8B0000] font-medium flex items-center group-hover:text-[#B91C1C] transition-colors">
                            Explore Path 
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                variants={fadeInUp}
              >
                <p className="text-gray-600 mb-6">Not sure which path is right for you?</p>
                <button className="bg-white border border-[#8B0000] text-[#8B0000] px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Take Our Pathfinder Quiz
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
