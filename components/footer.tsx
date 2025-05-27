import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Clock, Youtube, Linkedin, MessageSquare } from "lucide-react";
import { FaTelegram, FaTiktok } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#8B0000] to-[#600000] text-white pt-16 pb-8 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Section */}
          <motion.div 
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={footerVariants}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#8B0000] font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SMU Gavel Club
              </span>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Empowering voices and building confidence through the art of public speaking at St. Mary&apos;s University, Ethiopia.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/smu_gavel_club?igsh=cHRpOWIwdjN1eGkw&utm_source=qr", label: "Instagram" },
                { icon: FaTiktok, href: "https://www.tiktok.com/@gavelc1?_t=ZM-8wVa1kTxL1k&_r=1", label: "TikTok" },
                { icon: FaTelegram, href: "https://t.me/StMarysGavelClub", label: "Telegram" },
                { icon: Linkedin, href: "https://www.linkedin.com/groups/13246137/", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube", disabled: true }
              ].map(({ icon: Icon, href, label, disabled = false }, index) => (
                disabled ? (
                  <motion.span
                    key={label}
                    className="bg-white/10 p-2 rounded-full opacity-50 cursor-default"
                    aria-label={label}
                    custom={index}
                    variants={footerVariants}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.span>
                ) : (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                    variants={footerVariants}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.a>
                )
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={footerVariants}
            custom={0.2}
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Events', href: '/events' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Progression', href: '/progression' },
                { name: 'Resources', href: '/resources' },
                { name: 'Alumni', href: '/alumni' },
                { name: 'Join Us', href: '/contact' }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  custom={0.3 + (index * 0.1)}
                  variants={footerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px 0px" }}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center text-gray-200 hover:text-white transition-colors group py-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 transform transition-transform group-hover:translate-x-1"></span>
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={footerVariants}
            custom={0.4}
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  content: 'gavelclub@smu.edu.et',
                  href: 'mailto:gavelclub@smu.edu.et'
                },
                { 
                  icon: Phone, 
                  content: '+251 911 123 456',
                  href: 'tel:+251911123456'
                },
                { 
                  icon: Clock, 
                  content: 'Mon - Fri: 8:30 AM - 5:30 PM',
                  href: ''
                },
                { 
                  icon: MapPin, 
                  content: 'Mexico Campus, Addis Ababa, Ethiopia',
                  href: 'https://maps.google.com?q=St+Mary%27s+University+Addis+Ababa'
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  custom={0.5 + (index * 0.1)}
                  variants={footerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px 0px" }}
                >
                  <item.icon className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-gray-200">{item.content}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={footerVariants}
            custom={0.6}
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Newsletter
            </h3>
            <p className="text-gray-200 mb-4">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#8B0000]"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Copyright and Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <motion.p 
            className="text-sm text-gray-300 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            &copy; {currentYear} SMU Gavel Club. All rights reserved.
          </motion.p>
          <div className="flex space-x-6">
            {[
              { name: 'Privacy Policy' },
              { name: 'Terms of Service' },
              { name: 'Cookie Policy' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <span className="text-sm text-gray-400 cursor-default">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}