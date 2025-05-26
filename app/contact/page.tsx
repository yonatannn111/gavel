"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Linkedin,
  User,
  HelpCircle,
  Award,
  Mic,
  ChevronDown
} from "lucide-react";
import { fadeInUpVariant, staggerContainer } from "../AnimatedContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 md:pb-16">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h1>
            <p className="text-xl text-gray-100">
              Find us at St. Mary's University, Mexico Campus
            </p>
          </motion.div>
        </div>
      </header>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">

          
          <motion.div 
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.422681389161!2d38.7875!3d9.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1633f6f6f7b8b0b5%3A0x8c0b4b4b4b4b4b4b!2sSt.%20Mary%27s%20University%2C%20Mexico%20Campus%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="SMU Campus Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">St. Mary's University, Mexico Campus</h3>
                  <p className="text-gray-600">Mexico, Addis Ababa, Ethiopia</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir//St.+Mary's+University,+Mexico+Campus,+Addis+Ababa,+Ethiopia/@9.0225,38.7875,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1633f6f6f7b8b0b5:0x8c0b4b4b4b4b4b4b!2m2!1d38.7875!2d9.0225!3e0!5m1!5f1!5m1!5f1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#8B0000] hover:bg-[#A52A2A] transition-colors"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-6"></div>

          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "When and where are your meetings?",
                  answer: "We meet biweekly on Mondays at 12:20 PM in Building 3, Shebelle Campus, or at the American Corner, Green Campus. Check our social media for any schedule changes or special events.",
                  icon: <Calendar className="w-5 h-5 text-[#8B0000] mr-3 flex-shrink-0" />
                },
                {
                  question: "How can I join the club?",
                  answer: "Joining is easy! Simply attend one of our meetings as a guest to experience our club culture. No prior public speaking experience is required.",
                  icon: <User className="w-5 h-5 text-[#8B0000] mr-3 flex-shrink-0" />
                },
                {
                  question: "Is there a membership fee?",
                  answer: "The great news is that St. Mary's University covers all membership fees for students, so there's no cost to join! The university's support covers all meeting materials, guest speakers, and club activities throughout the semester.",
                  icon: <Award className="w-5 h-5 text-[#8B0000] mr-3 flex-shrink-0" />
                },
                {
                  question: "What should I expect at my first meeting?",
                  answer: "Your first meeting is all about getting comfortable. You'll be welcomed by our members, observe how meetings are structured, and have the opportunity to introduce yourself if you feel comfortable. There's no pressure to speak until you're ready.",
                  icon: <Mic className="w-5 h-5 text-[#8B0000] mr-3 flex-shrink-0" />
                },
                {
                  question: "How can I prepare for my first speech?",
                  answer: "We recommend starting with our Ice Breaker speech, a 4-6 minute introduction about yourself. Our experienced members will guide you through the process, and we have resources and mentors available to help you prepare. Remember, everyone starts somewhere, and we're here to support you!"
                },
                {
                  question: "What benefits will I gain from joining?",
                  answer: "Members develop valuable skills including public speaking, leadership, critical thinking, and communication. You'll also build confidence, make new friends, and gain opportunities for personal and professional growth that will benefit you in your academic and future career."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px 0px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#8B0000] transition-colors"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-gray-100/50 transition-colors group">
                      <div className="flex items-center w-full">
                        {faq.icon || <HelpCircle className="w-5 h-5 text-[#8B0000] mr-3 flex-shrink-0" />}
                        <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-gray-600 bg-white">
                      <div className="pt-4 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Still have questions?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team is here to help! Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Contact Form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                  <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you shortly.</p>
                  
                  {isSubmitted && (
                    <motion.div 
                      className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6 flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-sm">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Your Name</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="pl-10"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          className="pl-10"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="pl-10"
                          required
                        />
                        <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />

                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about how we can help you..."
                        rows={5}
                        className="resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#8B0000] hover:bg-[#A52A2A] transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
                
                {/* Right Side - Contact Info */}
                <div className="bg-gray-50 p-8 md:p-12 flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-red-50 p-3 rounded-full flex-shrink-0">
                          <MapPin className="h-5 w-5 text-[#8B0000]" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Location</p>
                          <p className="text-sm text-gray-600 mt-1">
                            St. Mary's University<br />
                            Mexico, Addis Ababa, Ethiopia
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-red-50 p-3 rounded-full flex-shrink-0">
                          <Mail className="h-5 w-5 text-[#8B0000]" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Email</p>
                          <a href="mailto:gavelclub@smuc.edu.et" className="text-sm text-[#8B0000] hover:underline block mt-1">
                            gavelclub@smuc.edu.et
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-red-50 p-3 rounded-full flex-shrink-0">
                          <Phone className="h-5 w-5 text-[#8B0000]" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Phone</p>
                          <a href="tel:+251911234567" className="text-sm text-gray-600 hover:text-[#8B0000] block mt-1">
                            +251 91 123 4567
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-3">
                      {[
                        { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
                        { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
                        { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
                        { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" }
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#8B0000] hover:text-white transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
