"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Alumni = {
  id: string;
  name: string;
  role: string;
  company: string;
  graduationYear: number;
  testimonial: string;
  image: string;
  linkedin?: string;
  email?: string;
  achievements: string[];
  currentRole: string;
};

export default function AlumniPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'recent' | 'featured'>('all');
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  const alumni: Alumni[] = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Former President',
      company: 'Microsoft',
      graduationYear: 2022,
      currentRole: 'Product Manager',
      testimonial: 'My time at SMU Gavel Club was transformative. The public speaking and leadership skills I developed have been instrumental in my career. I still use the evaluation techniques I learned in every team meeting!',
      image: '/alumni/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@example.com',
      achievements: [
        'Competent Communicator (CC) Award',
        'Club President (2021-2022)',
        'Division Level Speech Contest Winner',
        'Mentored 10+ members'
      ]
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'Former VP Education',
      company: 'Google',
      graduationYear: 2021,
      currentRole: 'UX Designer',
      testimonial: 'The structured learning path in Gavel Club gave me the confidence to present my design work effectively. The feedback culture helped me improve my communication skills dramatically.',
      image: '/alumni/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david.kim@example.com',
      achievements: [
        'Advanced Leader Bronze (ALB)',
        'Organized 3 successful workshops',
        'Mentor of the Year 2020',
        'Featured speaker at Regional Conference'
      ]
    },
    {
      id: 'priya-patel',
      name: 'Priya Patel',
      role: 'Former Treasurer',
      company: 'McKinsey & Company',
      graduationYear: 2023,
      currentRole: 'Management Consultant',
      testimonial: 'The leadership opportunities at Gavel Club prepared me for the fast-paced consulting world. I learned to think on my feet and communicate complex ideas clearly under pressure.',
      image: '/alumni/priya-patel.jpg',
      linkedin: 'https://linkedin.com/in/priyapatel',
      email: 'priya.patel@example.com',
      achievements: [
        'Pathways Level 4 Completed',
        'Led club rebranding initiative',
        'Increased member retention by 40%',
        'Best Table Topics Speaker Award'
      ]
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      role: 'Former VP Membership',
      company: 'Amazon',
      graduationYear: 2020,
      currentRole: 'Senior Product Manager',
      testimonial: 'The networking opportunities through Gavel Club opened doors I never imagined. The skills I developed in running meetings and facilitating discussions are now part of my daily work routine.',
      image: '/alumni/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@example.com',
      achievements: [
        'Distinguished Toastmaster (DTM)',
        'Club Growth Director (2020)',
        'Tripled club membership',
        'Keynote speaker at International Conference'
      ]
    },
    {
      id: 'emma-wilson',
      name: 'Emma Wilson',
      role: 'Former Secretary',
      company: 'Netflix',
      graduationYear: 2022,
      currentRole: 'Content Strategist',
      testimonial: 'Gavel Club taught me the power of storytelling. The feedback I received on my speeches helped me craft compelling narratives that I now use in content strategy for a global audience.',
      image: '/alumni/emma-wilson.jpg',
      linkedin: 'https://linkedin.com/in/emmawilson',
      email: 'emma.wilson@example.com',
      achievements: [
        'Pathways Level 3 Completed',
        'Best Evaluator Award 2021',
        'Launched Alumni Mentorship Program',
        'Guest Lecturer at SMU'
      ]
    },
    {
      id: 'alex-rodriguez',
      name: 'Alex Rodriguez',
      role: 'Former SAA',
      company: 'Tesla',
      graduationYear: 2021,
      currentRole: 'Operations Manager',
      testimonial: 'The organizational and leadership skills I developed as Sergeant at Arms directly translated to my role in operations. Gavel Club gave me the confidence to lead teams and manage complex projects.',
      image: '/alumni/alex-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      email: 'alex.rodriguez@example.com',
      achievements: [
        'Competent Leader (CL) Award',
        'Streamlined club operations',
        'Mentored 15+ members',
        'Organized 3 successful conferences'
      ]
    }
  ];

  const filteredAlumni = activeTab === 'all' 
    ? alumni 
    : activeTab === 'recent' 
      ? alumni.filter(a => a.graduationYear >= 2022)
      : alumni.filter(a => a.achievements.some(ach => ach.includes('DTM') || ach.includes('Keynote')));

  const openModal = (alumni: Alumni) => {
    setSelectedAlumni(alumni);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAlumni(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Spotlights</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover how our alumni are making an impact in their careers and communities</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-[#8B0000] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Alumni
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'recent' 
                  ? 'bg-[#8B0000] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Recent Graduates
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'featured' 
                  ? 'bg-[#8B0000] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Featured Alumni
            </button>
          </div>

          {/* Alumni Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alum, index) => (
              <motion.div
                key={alum.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{alum.name}</h3>
                    <p className="text-gray-200">{alum.role} • Class of {alum.graduationYear}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-4">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>{alum.currentRole} at {alum.company}</span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">"{alum.testimonial}"</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{alum.achievements[0]}</span>
                    <button 
                      onClick={() => openModal(alum)}
                      className="text-[#8B0000] hover:text-[#6B0000] font-medium flex items-center"
                    >
                      Read more <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
      {selectedAlumni && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/3">
                  <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-[#8B0000] to-[#6B0000] flex items-center justify-center text-white text-4xl font-bold">
                      {selectedAlumni.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    {selectedAlumni.linkedin && (
                      <a 
                        href={selectedAlumni.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0077B5] transition-colors"
                        aria-label={`Connect with ${selectedAlumni.name} on LinkedIn`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {selectedAlumni.email && (
                      <a 
                        href={`mailto:${selectedAlumni.email}`}
                        className="text-gray-600 hover:text-[#8B0000] transition-colors"
                        aria-label={`Email ${selectedAlumni.name}`}
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedAlumni.name}</h2>
                  <p className="text-xl text-gray-600 mb-4">{selectedAlumni.currentRole} at {selectedAlumni.company}</p>
                  <div className="flex items-center text-gray-500 mb-6">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <span>SMU Gavel Club {selectedAlumni.role} • Class of {selectedAlumni.graduationYear}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="italic text-gray-700">"{selectedAlumni.testimonial}"</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gavel Club Achievements</h3>
                <ul className="space-y-2">
                  {selectedAlumni.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#8B0000] text-white text-xs font-medium mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advice for Current Members</h3>
                <p className="text-gray-700 mb-4">
                  {selectedAlumni.name} encourages current members to take full advantage of the opportunities Gavel Club provides. "The skills you develop here—public speaking, leadership, and critical thinking—are highly transferable and will serve you well in any career path."
                </p>
                <p className="text-gray-700">
                  {selectedAlumni.name} is open to connecting with current members who are interested in learning more about their career path or seeking mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
