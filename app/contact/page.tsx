"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
  HelpCircle
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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-100">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={fadeInUpVariant}
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">SMU Campus<br />81 Victoria St<br />Singapore 188065</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={fadeInUpVariant}
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meeting Times</h3>
              <p className="text-gray-600">Every Thursday<br />6:00 PM - 8:00 PM<br />SMU School of Business</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={fadeInUpVariant}
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-600">
                <a href="mailto:gavelclub@smu.edu.sg" className="hover:text-[#8B0000] flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> gavelclub@smu.edu.sg
                </a>
                <a href="tel:+6568280100" className="hover:text-[#8B0000] flex items-center mt-2">
                  <Phone className="w-4 h-4 mr-2" /> +65 6828 0100
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Have questions? We're here to help!</p>
                
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <p className="text-gray-600 mb-6">
                    We'd love to hear from you! Whether you have questions about our club, 
                    want to attend a meeting, or are interested in joining, feel free to reach out.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="h-5 w-5 text-[#8B0000]" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Address</p>
                        <p className="text-sm text-gray-600">
                          SMU Campus<br />
                          81 Victoria St<br />
                          Singapore 188065
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#8B0000] flex-shrink-0" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <a href="mailto:gavelclub@smu.edu.sg" className="text-sm text-[#8B0000] hover:underline">
                          gavelclub@smu.edu.sg
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#8B0000] flex-shrink-0" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <a href="tel:+6568280100" className="text-sm text-gray-600 hover:text-[#8B0000]">
                          +65 6828 0100
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-[#8B0000] flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Meeting Schedule</p>
                        <p className="text-sm text-gray-600">
                          Every Thursday<br />
                          6:00 PM - 8:00 PM<br />
                          SMU School of Business, Seminar Room 3.1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
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
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#8B0000] hover:text-white transition-colors"
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
      </section>
      
      {/* Map Section */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us on Campus</h2>
            <p className="text-gray-600">Visit us at our weekly meetings or send us a message to schedule a visit.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795762371034!2d103.8483107147541!3d1.296388799054687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1903d9f8b73d%3A0x1f5e4b6a1d5a8e8f!2sSingapore%20Management%20University!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="SMU Campus Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Can't find what you're looking for? Reach out to us directly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "When and where are your meetings?",
                answer: "We meet every Thursday from 6:00 PM to 8:00 PM at SMU School of Business, Seminar Room 3.1 during the academic semester. Check our social media for any schedule changes."
              },
              {
                question: "How can I join the club?",
                answer: "You can join by attending one of our meetings as a guest, or by filling out the membership form on our Join Us page. No prior public speaking experience is required!"
              },
              {
                question: "Is there a membership fee?",
                answer: "Yes, there is a small semester fee that covers meeting materials, guest speakers, and club activities. Please contact us for the current fee structure."
              },
              {
                question: "Can I attend as a guest before joining?",
                answer: "Absolutely! We welcome guests to attend up to two meetings before deciding to join. This is a great way to experience our club culture and meet our members."
              },
              {
                question: "What should I prepare for my first meeting?",
                answer: "Just bring yourself and a willingness to learn! If you'd like, you can prepare a short introduction about yourself, but it's not required for your first visit."
              },
              {
                question: "How can I prepare for my first speech?",
                answer: "Our experienced members will guide you through the process. We recommend starting with the Ice Breaker speech, which is a 4-6 minute speech about yourself."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Don't hesitate to reach out to us through our contact form or social media channels.</p>
            <Button 
              asChild 
              className="bg-[#8B0000] hover:bg-[#A52A2A] transition-colors"
            >
              <a href="#contact-form">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
