"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Award,
  FileText, 
  Briefcase, 
  Mic, 
  Trophy,
  Users as UsersIcon 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Type definitions
type SpeechLevel = {
  name: string;
  description: string;
  time: string;
  objectives: string[];
};

type SpeechProgress = {
  id: string;
  title: string;
  description: string;
  levels: SpeechLevel[];
};

type MemberProgress = {
  name: string;
  role: string;
  completedSpeeches: number;
  nextMilestone: string;
  avatar: string;
};

export default function ProgressionPage() {
  const [selectedSpeech, setSelectedSpeech] = useState<SpeechLevel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSpeechModal = (speech: SpeechLevel) => {
    setSelectedSpeech(speech);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSpeechModal = () => {
    setIsModalOpen(false);
    setSelectedSpeech(null);
    document.body.style.overflow = 'auto';
  };

  const speechProgress: SpeechProgress = {
    id: 'cc',
    title: 'Competent Communicator (CC) Program',
    description: 'A comprehensive 10-speech program designed to develop essential public speaking skills',
    levels: [
      {
        name: '1. The Ice Breaker',
        description: 'Begin your speaking journey by introducing yourself to the club',
        time: '4-6 minutes',
        objectives: [
          'Overcome nervousness',
          'Discover speaking strengths',
          'Receive constructive feedback'
        ]
      },
      {
        name: '2. Organize Your Speech',
        description: 'Learn to structure your message for maximum impact',
        time: '5-7 minutes',
        objectives: [
          'Create a clear opening, body, and conclusion',
          'Use transitions effectively',
          'Support your main points'
        ]
      },
      {
        name: '3. Get to the Point',
        description: 'Focus your message and stay on topic',
        time: '5-7 minutes',
        objectives: [
          'Develop a clear purpose',
          'Organize content logically',
          'Project confidence'
        ]
      },
      {
        name: '4. How to Say It',
        description: 'Master the art of word choice and language',
        time: '5-7 minutes',
        objectives: [
          'Use precise language',
          'Employ rhetorical devices',
          'Eliminate jargon'
        ]
      },
      {
        name: '5. Your Body Speaks',
        description: 'Enhance your message with effective body language',
        time: '5-7 minutes',
        objectives: [
          'Use gestures and facial expressions',
          'Maintain eye contact',
          'Develop a confident stance'
        ]
      },
      {
        name: '6. Vocal Variety',
        description: 'Use your voice to engage and persuade',
        time: '5-7 minutes',
        objectives: [
          'Vary pitch, pace, and volume',
          'Use pauses effectively',
          'Convey emotion through voice'
        ]
      },
      {
        name: '7. Research Your Topic',
        description: 'Support your message with solid research',
        time: '5-7 minutes',
        objectives: [
          'Gather information from multiple sources',
          'Support points with facts and examples',
          'Cite sources appropriately'
        ]
      },
      {
        name: '8. Get Comfortable with Visual Aids',
        description: 'Enhance your presentation with effective visuals',
        time: '5-7 minutes',
        objectives: [
          'Select appropriate visual aids',
          'Use technology effectively',
          'Ensure visibility and clarity'
        ]
      },
      {
        name: '9. Persuade with Power',
        description: 'Learn to influence and motivate your audience',
        time: '5-7 minutes',
        objectives: [
          'Appeal to audience interests',
          'Use logic and emotion',
          'Deliver a compelling call to action'
        ]
      },
      {
        name: '10. Inspire Your Audience',
        description: 'Deliver a speech that motivates and uplifts',
        time: '8-10 minutes',
        objectives: [
          'Appeal to noble motives',
          'Use stories and anecdotes',
          'Leave a lasting impact'
        ]
      }
    ]
  };

  const leaderboard: MemberProgress[] = [
    { name: 'Yohanes Jember', role: 'Member', completedSpeeches: 10, nextMilestone: 'Competent Communicator', avatar: '/avatars/alex.jpg' },
    { name: 'Rediet Asfaw', role: 'Member', completedSpeeches: 7, nextMilestone: 'Competent Communicator', avatar: '/avatars/sarah.jpg' },
    { name: 'Khalid Ahmed', role: 'Sergeant at Arms', completedSpeeches: 5, nextMilestone: 'Competent Communicator', avatar: '/avatars/michael.jpg' },
    { name: 'Emma Davis', role: 'Secretary', completedSpeeches: 3, nextMilestone: 'Competent Communicator', avatar: '/avatars/emma.jpg' },
    { name: 'James Wilson', role: 'Member', completedSpeeches: 2, nextMilestone: 'Competent Communicator', avatar: '/avatars/james.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#660000] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Competent Communicator Journey</h1>
            <p className="text-lg md:text-xl opacity-90">
              Master public speaking through Toastmasters' structured 10-speech program, building from fundamentals to advanced techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speech Levels Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {speechProgress.levels.map((speech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative bg-white rounded-xl border border-gray-100 overflow-hidden group transition-all duration-300 h-full flex flex-col"
                onClick={() => openSpeechModal(speech)}
                style={{ cursor: 'pointer' }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B0000] to-[#FF6B6B]"></div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-r from-[#8B0000] to-[#B91C1C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      Speech {index + 1}
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full flex items-center">
                      <Clock className="w-3 h-3 mr-1.5 text-[#8B0000]" />
                      {speech.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#8B0000] transition-colors">
                    {speech.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {speech.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button 
                      className="w-full group flex items-center justify-between text-sm font-medium text-[#8B0000] hover:text-[#660000] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openSpeechModal(speech);
                      }}
                    >
                      <span>View details</span>
                      <div className="flex items-center justify-center w-6 h-6 bg-[#8B0000]/10 rounded-full group-hover:bg-[#8B0000]/20 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* CC Achievement Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/toastmasters-pattern-light.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#8B0000] text-white text-xs font-medium uppercase tracking-wider mb-6"
            >
              Unlock Achievement
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-[#8B0000]">Competent Communicator</span> Benefits
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mx-auto my-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Earning your Competent Communicator award brings valuable recognition and opportunities 
              for personal and professional growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Official Recognition",
                description: "Receive a globally recognized certificate from Toastmasters International",
                icon: <FileText className="w-6 h-6 text-[#8B0000]" />,
                features: [
                  "Globally recognized credential",
                  "Verifiable digital badge",
                  "Printable certificate"
                ]
              },
              {
                title: "Professional Advantages",
                description: "Enhance your career prospects with this valuable credential",
                icon: <Briefcase className="w-6 h-6 text-[#8B0000]" />,
                features: [
                  "Stand out in job applications",
                  "Enhance your LinkedIn profile",
                  "Demonstrate communication skills"
                ]
              },
              {
                title: "Personal Growth",
                description: "Develop essential communication and leadership abilities",
                icon: <Award className="w-6 h-6 text-[#8B0000]" />,
                features: [
                  "Increased confidence",
                  "Improved public speaking",
                  "Better leadership skills"
                ]
              },
              {
                title: "Community & Network",
                description: "Join an exclusive community of communicators",
                icon: <UsersIcon className="w-6 h-6 text-[#8B0000]" />,
                features: [
                  "Global Toastmasters network",
                  "Local club connections",
                  "Professional networking"
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 h-full flex flex-col">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#8B000010' }}
                  >
                    {React.cloneElement(benefit.icon, { className: 'h-6 w-6 text-[#8B0000]' })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B0000] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2 mt-2">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#8B0000] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B0000] to-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Leaderboard</h2>
            <div className="w-16 h-1 bg-[#8B0000] mx-auto my-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your progress compares with other club members and get inspired by their achievements.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-100 p-4 font-medium text-gray-500 text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Member</div>
              <div className="col-span-3 text-center">Role</div>
              <div className="col-span-3 text-right">Speeches</div>
            </div>
            {leaderboard.map((member, index) => (
              <div key={index} className="grid grid-cols-12 items-center p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 font-medium text-gray-500">{index + 1}</div>
                <div className="col-span-5 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium mr-3">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{member.name}</div>
                  </div>
                </div>
                <div className="col-span-3 text-center text-sm text-gray-500">{member.role}</div>
                <div className="col-span-3 text-right">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#8B0000]/10 text-[#8B0000] font-medium text-sm">
                    {member.completedSpeeches}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-white pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white rounded-xl p-12 text-center shadow-lg transition-all duration-500 hover:shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Speaking Journey?</h2>
              <p className="text-xl mb-8">
                Join our next meeting and take the first step towards becoming a confident communicator and leader.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg hover:scale-105 transition-transform"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Join Our Next Meeting
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedSpeech && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeSpeechModal}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative bg-white rounded-2xl max-w-2xl w-full mx-auto z-10 overflow-hidden shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedSpeech.name}</h3>
                    <button
                      onClick={closeSpeechModal}
                      className="text-gray-400 hover:text-gray-500 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-[#8B0000]" />
                      <span>{selectedSpeech.time}</span>
                    </div>
                    <p className="text-gray-700">{selectedSpeech.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Objectives:</h4>
                      <ul className="space-y-2">
                        {selectedSpeech.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={closeSpeechModal}
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
