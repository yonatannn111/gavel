"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Award, BarChart2, Users as UsersIcon, BookOpen, GraduationCap, Mic } from 'lucide-react';

type SpeechProgress = {
  id: string;
  title: string;
  description: string;
  levels: {
    name: string;
    requirements: string[];
    completed: boolean;
  }[];
};

type MemberProgress = {
  name: string;
  role: string;
  completedSpeeches: number;
  nextMilestone: string;
  avatar: string;
};

export default function ProgressionPage() {
  const speechProgress: SpeechProgress = {
    id: 'cc',
    title: 'Competent Communicator (CC)',
    description: 'Complete 10 speeches to achieve the Competent Communicator award',
    levels: Array.from({ length: 10 }, (_, i) => ({
      name: `Speech ${i + 1}`,
      requirements: [
        i === 0 ? 'Ice Breaker (4-6 min)' : `Project ${i + 1} (5-7 min)`,
        'Speech Objectives',
        'Evaluation'
      ],
      completed: i < 3 // First 3 speeches completed
    }))
  };

  const leaderboard: MemberProgress[] = [
    { name: 'Yohanes Jember', role: 'Member', completedSpeeches: 15, nextMilestone: 'Advanced Communicator Bronze', avatar: '/avatars/alex.jpg' },
    { name: 'Rediet Asfaw', role: 'Member', completedSpeeches: 10, nextMilestone: 'Competent Communicator', avatar: '/avatars/sarah.jpg' },
    { name: 'Khalid Ahmed', role: 'Sergeant at Arms', completedSpeeches: 8, nextMilestone: 'Competent Communicator', avatar: '/avatars/michael.jpg' },
    { name: 'Emma Davis', role: 'Secretary', completedSpeeches: 5, nextMilestone: 'Competent Communicator', avatar: '/avatars/emma.jpg' },
    { name: 'James Wilson', role: 'Member', completedSpeeches: 3, nextMilestone: 'Competent Communicator', avatar: '/avatars/james.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#8B0000] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Member Progression</h1>
          <p className="text-xl max-w-3xl mx-auto">Track your growth and achievements in the SMU Gavel Club journey</p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-[#8B0000] mr-3" />
                <h3 className="text-xl font-semibold">Current Level</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">Pathways Level 2</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-[#8B0000] h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">65% to next level</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-[#8B0000] mr-3" />
                <h3 className="text-xl font-semibold">Speeches Completed</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">8/10</p>
              <p className="text-sm text-gray-500 mt-2">2 more to achieve CC</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <BarChart2 className="w-8 h-8 text-[#8B0000] mr-3" />
                <h3 className="text-xl font-semibold">Meeting Participation</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">85%</p>
              <p className="text-sm text-gray-500 mt-2">Last 10 meetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speech Progress */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#8B0000] bg-opacity-10 rounded-lg mr-4">
                  <Mic className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{speechProgress.title}</h3>
                  <p className="text-gray-600">{speechProgress.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {speechProgress.levels.map((level, levelIndex) => (
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
                          Completed
                        </span>
                      )}
                    </div>
                    
                    <ul className="mt-2 space-y-1">
                      {level.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="mr-2">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Member Leaderboard</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your progress and see how you compare with other members
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Member</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Level</div>
              <div className="col-span-2">Speeches</div>
              <div className="col-span-1">Actions</div>
            </div>

            <div className="divide-y divide-gray-200">
              {leaderboard.map((member, index) => (
                <div key={index} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-gray-50">
                  <div className="col-span-1 text-gray-500 font-medium">{index + 1}</div>
                  <div className="col-span-4 flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                      {member.avatar ? (
                        <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                      ) : (
                        member.name.split(' ').map(n => n[0]).join('').toUpperCase()
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">Next: {member.nextMilestone}</div>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm text-gray-500">{member.role}</div>
                  <div className="col-span-2">
                    <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {member.level}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-[#8B0000] h-2.5 rounded-full" 
                          style={{ width: `${(member.completedSpeeches / 20) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{member.completedSpeeches}</span>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="text-[#8B0000] hover:text-[#6B0000]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
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
                icon: <BookOpen className="w-8 h-8 text-[#8B0000]" />,
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
                icon: <BarChart2 className="w-8 h-8 text-[#8B0000]" />,
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
                icon: <UsersIcon className="w-8 h-8 text-[#8B0000]" />,
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#8B0000] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 text-[#8B0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join SMU Gavel Club today and unlock your full potential as a speaker and leader.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/join"
                  className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Join Now
                </Link>
                <Link 
                  href="/about"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
              <p className="mt-6 text-gray-200 text-sm">
                No commitment required. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
