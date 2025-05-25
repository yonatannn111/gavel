'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Trophy, Mic, BookOpen, Heart, Lightbulb, Target, Star, Check } from 'lucide-react';

// Types
interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    transition: {
      duration: number;
      ease?: string;
      delay?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
  exit?: {
    opacity: number;
    y?: number;
    x?: number;
  };
}

interface CommitteeMember {
  name: string;
  role: string;
  image: string;
}

interface ValueItem {
  title: string;
  description: string;
  icon: ReactNode;
}

// Animation variants
const fadeInUp: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer: AnimationVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Data
const executiveCommittee: CommitteeMember[] = [
  {
    name: "Nigist Kidane",
    role: "President",
    image: "/members/president.jpg"
  },
  {
    name: "Selam Meseret",
    role: "Vice President Education",
    image: "/members/education.jpg"
  },
  {
    name: "Hermela Yohannes",
    role: "Vice President Public Relations",
    image: "/members/relations.jpeg"
  },
  {
    name: "Tewodros Adane",
    role: "Vice President Membership",
    image: "/members/membership.jpg"
  },
  {
    name: "Atnatewos Hailealem",
    role: "Secretary",
    image: "/members/secretary.jpeg"
  },
  {
    name: "Yonatan Getachew",
    role: "Treasurer",
    image: "/members/Treasurer.jpg"
  },
  {
    name: "Khalid Ahmed",
    role: "Sergeant at Arms",
    image: "/members/sergent.jpeg"
  }
];

const values: ValueItem[] = [
  {
    title: "Excellence",
    description: "We strive for the highest standards in all our activities and encourage continuous improvement.",
    icon: <Star className="h-8 w-8 text-yellow-500" />
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of ethical behavior and professional conduct.",
    icon: <Check className="h-8 w-8 text-green-500" />
  },
  {
    title: "Respect",
    description: "We value and respect the diverse perspectives and backgrounds of all our members.",
    icon: <Heart className="h-8 w-8 text-red-500" />
  },
  {
    title: "Innovation",
    description: "We embrace creativity and new ideas to enhance our programs and services.",
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Community",
    description: "We foster a supportive and inclusive environment where everyone can thrive.",
    icon: <Users className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Leadership",
    description: "We develop leadership skills that empower individuals to make a positive impact.",
    icon: <Target className="h-8 w-8 text-orange-500" />
  }
];

const AboutPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
          <Image 
            src="/information/about-hero.jpg" 
            alt="SMU Gavel Club Members"
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
            <Mic className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">Since 2023</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
              Our Story
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Empowering voices, building confidence, and developing leaders through the art of public speaking.
          </motion.p>
        </motion.div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
                Our Journey
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A Legacy of <span className="text-[#8B0000]">Excellence</span> in Public Speaking
              </motion.h2>
              
              <motion.div className="space-y-6 text-gray-600">
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                    Founded in 2023, the SMU Gavel Club began as a small group of passionate students dedicated to mastering the art of public speaking. What started as a modest gathering has flourished into one of the most vibrant and respected clubs on campus.
                </motion.p>
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                    Over the years, we've hosted numerous workshops, competitions, and speaking events, helping hundreds of students develop their communication and leadership skills. Our alumni have gone on to achieve great success in various professional fields, a testament to the strong foundation built during their time with us.
                </motion.p>
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
                src="/information/history.jpg" 
                alt="SMU Gavel Club History"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Principles That <span className="text-[#8B0000]">Guide Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values form the foundation of everything we do at SMU Gavel Club.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-[#8B0000] mb-4 uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[#8B0000]">Executive Committee</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders working to make SMU Gavel Club the best it can be.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {executiveCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="text-white text-xl font-bold">{member.name}</h4>
                      <p className="text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
