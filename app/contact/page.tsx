"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-16">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions or want to get in touch? We'd love to hear from you.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about membership"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#8B0000] hover:bg-[#FF0000]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 text-[#8B0000] mr-3 mt-0.5" />
                      <span>
                        SMU Campus<br />
                        81 Victoria St<br />
                        Singapore 188065
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-6 w-6 text-[#8B0000] mr-3" />
                      <a href="mailto:gavelclub@smu.edu.sg" className="hover:text-[#8B0000]">
                        gavelclub@smu.edu.sg
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-6 w-6 text-[#8B0000] mr-3" />
                      <span>+65 6828 0100</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Meeting Schedule</h3>
                  <p className="mb-2">We meet every Thursday from 6:00 PM to 8:00 PM during the academic semester.</p>
                  <p>Location: SMU School of Business, Seminar Room 3.1</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#FF0000] transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#FF0000] transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#FF0000] transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#8B0000]">Find Us</h2>
          
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7958611064744!2d103.84676491475396!3d1.2957406990576304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a1a06f38c1%3A0x9b41d8fcc93c7a5!2sSingapore%20Management%20University!5e0!3m2!1sen!2ssg!4v1651234567890!5m2!1sen!2ssg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SMU Location Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#8B0000]">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">When do you meet?</h3>
              <p className="text-gray-700">
                We meet every Thursday from 6:00 PM to 8:00 PM during the academic semester at SMU School of Business, Seminar Room 3.1.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can non-SMU students join?</h3>
              <p className="text-gray-700">
                While our club is primarily for SMU students, we occasionally host open events where non-SMU students can participate. Contact us for more information.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is there a membership fee?</h3>
              <p className="text-gray-700">
                Yes, there is a nominal membership fee of $50 per semester which covers club activities, materials, and refreshments during meetings.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do I need prior speaking experience?</h3>
              <p className="text-gray-700">
                No prior experience is needed! Our club is designed to help members of all skill levels develop their public speaking abilities in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}