'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Calendar, 
  Mic, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  BarChart2,
  Mic2,
  Users2,
  Brain,
  ArrowUpRight,
  Clock,
  MapPin,
  CalendarDays,
  MessageSquare
} from "lucide-react";
import { EventCard } from "@/components/events/event-card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/CallToAction";
import { TestimonialSlider } from "@/components/testimonials/testimonial-slider";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
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

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8B0000] to-[#600000] text-white min-h-[calc(100vh-4rem)] flex items-center pt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          
          {/* Animated floating elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (Math.random() - 0.5) * 100, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 relative w-full py-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
              variants={fadeInUp}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Empowering Voices Since 2023</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                Find Your Voice
              </span>
              <br />
              <span>at SMU Gavel Club</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Develop leadership skills, overcome public speaking anxiety, and build confidence
              in a supportive community of like-minded individuals.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-gradient group text-lg px-8 py-6 font-semibold rounded-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Join Us Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 font-medium rounded-xl bg-transparent border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-8 text-center"
              variants={fadeInUp}
            >
              {[
                { value: '100+', label: 'Active Members' },
                { value: '50+', label: 'Events Hosted' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <div key={i} className="px-4">
                  <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 mb-2">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-sm text-white/60">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#8B0000]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#8B0000]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium text-[#8B0000] bg-[#FFE5E5] rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering Voices, <span className="text-[#8B0000]">Building Leaders</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At SMU Gavel Club, we're committed to transforming individuals into confident communicators and effective leaders through a supportive and engaging environment.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic2,
                title: "Public Speaking Mastery",
                description: "Develop confidence and eloquence through structured speaking opportunities and constructive feedback.",
                color: "#8B0000"
              },
              {
                icon: Users2,
                title: "Leadership Development",
                description: "Cultivate essential leadership qualities through hands-on roles and team collaboration.",
                color: "#B91C1C"
              },
              {
                icon: Brain,
                title: "Critical Thinking",
                description: "Enhance your ability to analyze, evaluate, and respond to complex topics effectively.",
                color: "#DC2626"
              },
              {
                icon: MessageSquare,
                title: "Constructive Feedback",
                description: "Learn the art of giving and receiving feedback to foster continuous improvement.",
                color: "#EF4444"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 h-full flex flex-col">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}10` }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B0000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {item.description}
                  </p>

                </div>
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B0000] to-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                ></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              asChild 
              className="bg-gradient-to-r from-[#8B0000] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#8B0000] text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link href="/about" className="flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-[#8B0000] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Upcoming Events
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our upcoming events to enhance your public speaking and leadership skills
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "1",
                title: "Weekly Club Meeting",
                description: "Join us for our regular meeting featuring prepared speeches, evaluations, and impromptu speaking sessions.",
                date: "2025-03-23T15:00:00",
                time: "03:00 PM",
                location: "Main Auditorium",
                type: "meeting",
                image: "/events/upcoming/upcoming_1.jpg"
              },
              {
                id: "2",
                title: "Leadership Training Workshop",
                description: "A special workshop focused on mastering the art of persuasive speaking and effective body language.",
                date: "2025-04-15T18:20:00",
                time: "06:20 PM",
                location: "Conference Hall",
                type: "workshop",
                image: "/events/upcoming/upcoming_2.png"
              },
              {
                id: "3",
                title: "Communications Skill Workshop",
                description: "Our flagship event where members compete in various speech categories to showcase their skills.",
                date: "2025-04-24T18:20:00",
                time: "06:20 PM",
                location: "Grand Hall",
                type: "workshop",
                image: "/events/upcoming/upcoming_3.png"
              }
            ].map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild 
              className="bg-gradient-to-r from-[#8B0000] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#8B0000] text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link href="/events" className="flex items-center gap-2">
                View All Events
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Members Say
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hear from our members about their experiences and growth at Gavel Club.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {/* Top row - slides left */}
            <div className="relative">
              <TestimonialSlider 
                testimonials={[
                  {
                    id: "1",
                    quote: "The supportive environment at Gavel Club helped me develop not just as a speaker, but as a leader. The skills I gained here have been invaluable in my professional career.",
                    name: "Getacher Tsegaye",
                    role: "President",
                    image: "president.jpg"
                  },
                  {
                    id: "2",
                    quote: "As an international student, Gavel Club provided me with a platform to improve my English speaking skills and make friends. The feedback I received was always constructive and encouraging.",
                    name: "Eyuel Mamushet",
                    role: "Secretary",
                    image: "secretary.jpeg"
                  },
                  {
                    id: "3",
                    quote: "The mentorship and guidance I received at Gavel Club were instrumental in building my confidence. I've grown so much both personally and professionally.",
                    name: "Alex Chen",
                    role: "Vice President",
                    image: "relations.jpeg"
                  },
                  {
                    id: "4",
                    quote: "Being part of Gavel Club has been a game-changer for me. The supportive community and structured learning environment helped me overcome my fear of public speaking.",
                    name: "Priya Patel",
                    role: "Treasurer",
                    image: "Treasurer.jpg"
                  }
                ]}
                direction="left"
                duration={15}
              />
            </div>
            
            {/* Bottom row - slides right */}
            <div className="relative mt-8">
              <TestimonialSlider 
                testimonials={[
                  {
                    id: "5",
                    quote: "The skills I learned at Gavel Club have been directly applicable to my job interviews and presentations. It's one of the most valuable experiences of my university life.",
                    name: "David Kim",
                    role: "Sergent at Arms",
                    image: "sergent.jpeg"
                  },
                  {
                    id: "6",
                    quote: "The structured approach to public speaking at Gavel Club has transformed how I communicate in both professional and personal settings.",
                    name: "Sarah Johnson",
                    role: "Membership Officer",
                    image: "membership.jpg"
                  },
                  {
                    id: "7",
                    quote: "I never thought I'd enjoy public speaking, but Gavel Club made it fun and rewarding. The supportive environment is truly special.",
                    name: "Michael Brown",
                    role: "Public Relations",
                    image: "relations.jpeg"
                  },
                  {
                    id: "8",
                    quote: "The leadership opportunities at Gavel Club have been instrumental in my personal and professional development.",
                    name: "Emily Wilson",
                    role: "Event Coordinator",
                    image: "secretary.jpeg"
                  }
                ]}
                direction="right"
                duration={15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}