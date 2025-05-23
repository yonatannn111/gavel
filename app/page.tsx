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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
      <section className="relative bg-gradient-to-br from-[#8B0000] to-[#600000] text-white py-24 md:py-36 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="container mx-auto px-4 z-10 relative">
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
                <Link href="/join" className="flex items-center gap-2">
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
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
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              Our Mission & Values
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
                <div className="relative p-8 h-full flex flex-col">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}10` }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B0000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-[#8B0000] mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our upcoming events to enhance your public speaking and leadership skills
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild variant="outline" className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-colors">
                <Link href="/events" className="flex items-center gap-2">
                  View All Events <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="/events/passed000.jpg" 
                  alt="Weekly Meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#8B0000] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays className="h-4 w-4 mr-2 text-[#8B0000]" />
                  <span>March 23, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2 text-[#8B0000]" />
                  <span>03:00 PM</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B0000] transition-colors">
                  Weekly Club Meeting
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  Join us for our regular meeting featuring prepared speeches, evaluations, and impromptu speaking sessions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1 text-[#8B0000]" />
                    <span>Main Auditorium</span>
                  </div>
                  <Button asChild variant="link" className="text-[#8B0000] p-0 h-auto font-semibold group/button">
                    <Link href="/events" className="flex items-center gap-1">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Event Card 2 */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="/events/passed.jpeg" 
                  alt="Leadership Training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#8B0000] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Workshop
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays className="h-4 w-4 mr-2 text-[#8B0000]" />
                  <span>April 15, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2 text-[#8B0000]" />
                  <span>06:20 PM</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B0000] transition-colors">
                  Leadership Training Workshop
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  A special workshop focused on mastering the art of persuasive speaking and effective body language.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1 text-[#8B0000]" />
                    <span>Conference Hall</span>
                  </div>
                  <Button asChild variant="link" className="text-[#8B0000] p-0 h-auto font-semibold group/button">
                    <Link href="/events" className="flex items-center gap-1">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="./events/upcoming.jpeg" 
                  alt="Communications Skill Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 24, 2025 • 6:20 LT</div>
                <h3 className="text-xl font-semibold mb-2">Communications Skill Training</h3>
                <p className="text-gray-600 mb-4">
                  Our flagship event where members compete in various speech categories to showcase their skills.
                </p>
                <Button asChild className="w-full bg-[#8B0000] hover:bg-[#FF0000]">
                  <Link href="/events">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-[#8B0000] mb-2">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <div className="h-1 w-16 bg-[#8B0000] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our members about their transformative experiences at SMU Gavel Club
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  quote: "Joining the SMU Gavel Club was one of the best decisions I made during my university years. It transformed me from someone who feared public speaking to someone who now embraces it.",
                  name: "Jane Lee",
                  role: "Member since 2023",
                  initials: "JL",
                },
                {
                  id: 2,
                  quote: "The supportive environment at Gavel Club helped me develop not just as a speaker, but as a leader. The skills I gained here have been invaluable in my professional career.",
                  name: "Michael Tan",
                  role: "Member since 2022",
                  initials: "MT",
                },
                {
                  id: 3,
                  quote: "As an international student, Gavel Club provided me with a platform to improve my English speaking skills and make friends. The feedback I received was always constructive and encouraging.",
                  name: "Sarah Garcia",
                  role: "Member since 2024",
                  initials: "SG",
                },
                {
                  id: 4,
                  quote: "The mentorship and guidance I received at Gavel Club were instrumental in building my confidence. I've grown so much both personally and professionally.",
                  name: "Alex Chen",
                  role: "Vice President",
                  initials: "AC",
                },
                {
                  id: 5,
                  quote: "Being part of Gavel Club has been a game-changer for me. The supportive community and structured learning environment helped me overcome my fear of public speaking.",
                  name: "Priya Patel",
                  role: "Treasurer",
                  initials: "PP",
                },
                {
                  id: 6,
                  quote: "The skills I learned at Gavel Club have been directly applicable to my job interviews and presentations. It's one of the most valuable experiences of my university life.",
                  name: "David Kim",
                  role: "Member since 2023",
                  initials: "DK",
                },
              ].map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8B0000] to-[#FF0000] flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12 space-x-3">
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#8B0000] transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-[#8B0000]"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#8B0000] transition-colors"></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Voice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SMU Gavel Club today and embark on a journey of personal and professional growth.
          </p>
          <Button asChild size="lg" className="bg-white text-[#8B0000] hover:bg-gray-100">
            <Link href="/join">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}