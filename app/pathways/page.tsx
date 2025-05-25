"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BarChart2, Users as UsersIcon, BookOpen, GraduationCap, ChevronRight, CheckCircle } from 'lucide-react';

type Pathway = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  levels: {
    name: string;
    requirements: string[];
    completed: boolean;
  }[];
};

type MemberProgress = {
  name: string;
  role: string;
  level: string;
  completedSpeeches: number;
  nextMilestone: string;
  avatar: string;
};

export default function PathwaysPage() {
  const pathways: Pathway[] = [
    {
      id: 'dynamic-leadership',
      title: 'Dynamic Leadership',
      description: 'Develop leadership skills to build, support, and lead teams effectively',
      icon: <Trophy className="w-6 h-6 text-[#8B0000]" />,
      levels: [
        {
          name: 'Level 1: Mastering Fundamentals',
          requirements: [
            'Ice Breaker',
            'Evaluation and Feedback',
            'Researching and Presenting'
          ],
          completed: true
        },
        {
          name: 'Level 2: Learning Your Style',
          requirements: [
            'Understanding Your Leadership Style',
            'Active Listening',
            'Connect with Storytelling'
          ],
          completed: true
        },
        {
          name: 'Level 3: Increasing Knowledge',
          requirements: [
            'Active Listening',
            'Connect with Storytelling',
            'Connect with Your Audience'
          ],
          completed: false
        },
        {
          name: 'Level 4: Building Skills',
          requirements: [
            'Manage Projects Successfully',
            'Manage People',
            'Manage and Motivate'
          ],
          completed: false
        },
        {
          name: 'Level 5: Demonstrating Expertise',
          requirements: [
            'Lead in Any Situation',
            'Reflect on Your Path',
            'High Performance Leadership'
          ],
          completed: false
        }
      ]
    },
    {
      id: 'persuasive-influence',
      title: 'Persuasive Influence',
      description: 'Master the art of persuasion and influence',
      icon: <BarChart2 className="w-6 h-6 text-[#8B0000]" />,
      levels: [
        {
          name: 'Level 1: Mastering Fundamentals',
          requirements: [
            'Ice Breaker',
            'Evaluation and Feedback',
            'Researching and Presenting'
          ],
          completed: true
        },
        {
          name: 'Level 2: Learning Your Style',
          requirements: [
            'Understanding Your Communication Style',
            'Active Listening',
            'Effective Body Language'
          ],
          completed: false
        }
      ]
    },
    {
      id: 'effective-coaching',
      title: 'Effective Coaching',
      description: 'Develop skills to coach and mentor others effectively',
      icon: <UsersIcon className="w-6 h-6 text-[#8B0000]" />,
      levels: [
        {
          name: 'Level 1: Mastering Fundamentals',
          requirements: [
            'Ice Breaker',
            'Evaluation and Feedback',
            'Researching and Presenting'
          ],
          completed: false
        }
      ]
    }
  ];

  const leaderboard: MemberProgress[] = [
    { name: 'Alex Johnson', role: 'Vice President Education', level: 'Level 4', completedSpeeches: 15, nextMilestone: 'Level 5', avatar: '/avatars/alex.jpg' },
    { name: 'Sarah Williams', role: 'President', level: 'Level 3', completedSpeeches: 12, nextMilestone: 'Level 4', avatar: '/avatars/sarah.jpg' },
    { name: 'Michael Chen', role: 'Treasurer', level: 'Level 3', completedSpeeches: 8, nextMilestone: 'Level 4', avatar: '/avatars/michael.jpg' },
  ];

  const stats = [
    { value: '10+', label: 'Pathways Available' },
    { value: '85%', label: 'Members Engaged' },
    { value: '4.8/5', label: 'Satisfaction Rate' },
    { value: '100+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#8B0000] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pathways Learning Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Develop new skills, build confidence, and achieve your personal and professional goals through our comprehensive Pathways learning experience.
          </motion.p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-3xl font-bold text-[#8B0000] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Learning Path</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a pathway that aligns with your personal and professional goals
            </p>
          </div>
          
          <div className="space-y-8">
            {pathways.map((pathway, index) => (
              <motion.div 
                key={pathway.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-[#8B0000] bg-opacity-10 rounded-lg mr-4">
                      {pathway.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{pathway.title}</h3>
                      <p className="text-gray-600 mt-1">{pathway.description}</p>
                      
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-[#8B0000] h-2.5 rounded-full" 
                            style={{ 
                              width: `${(pathway.levels.filter(l => l.completed).length / pathway.levels.length) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                          <span>{pathway.levels.filter(l => l.completed).length} of {pathway.levels.length} levels completed</span>
                          <span>{Math.round((pathway.levels.filter(l => l.completed).length / pathway.levels.length) * 100)}%</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-[#8B0000] hover:text-[#6B0000] p-2">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {pathway.levels.map((level, levelIndex) => (
                      <div 
                        key={levelIndex}
                        className={`border-l-4 ${level.completed ? 'border-green-500' : 'border-gray-200'} pl-4 py-2`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${level.completed ? 'text-green-700' : 'text-gray-700'}`}>
                            {level.name}
                          </h4>
                          {level.completed && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </span>
                          )}
                        </div>
                        
                        <ul className="mt-2 space-y-1">
                          {level.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="mr-2 text-gray-400">
                                {level.completed ? '✓' : '•'}
                              </span>
                              <span className={`text-sm ${level.completed ? 'text-gray-500' : 'text-gray-600'}`}>
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Learning Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential resources to help you on your public speaking journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beginner\'s Guide',
                description: 'Get started with public speaking and Toastmasters basics',
                icon: <BookOpen className="w-6 h-6" />,
                items: [
                  'Ice Breaker Tips',
                  'Speech Structure 101',
                  'Overcoming Stage Fright',
                  'Evaluation Basics'
                ]
              },
              {
                title: 'Advanced Techniques',
                description: 'Elevate your speaking skills to the next level',
                icon: <BarChart2 className="w-6 h-6" />,
                items: [
                  'Storytelling Mastery',
                  'Vocal Variety',
                  'Advanced Body Language',
                  'Persuasive Speaking'
                ]
              },
              {
                title: 'Leadership Resources',
                description: 'Develop your leadership skills within the club',
                icon: <UsersIcon className="w-6 h-6" />,
                items: [
                  'Meeting Roles Guide',
                  'Mentorship Program',
                  'Club Leadership',
                  'Event Planning'
                ]
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#8B0000] bg-opacity-10 rounded-lg flex items-center justify-center mb-4 text-[#8B0000]">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-[#8B0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of learners and take the first step towards becoming a confident speaker and leader.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/register" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#8B0000] bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Join Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
