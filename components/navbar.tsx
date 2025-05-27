"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const routes = [
  { 
    href: "/about", 
    label: "About Us",
    submenu: [
      { href: "/about", label: "Overview" },
      { href: "/about#history", label: "Our History" },
      { href: "/about#values", label: "Our Values" },
      { href: "/about#team", label: "Our Team" },
    ] 
  },
  { 
    href: "/events", 
    label: "Events"
  },
  { 
    href: "/gallery", 
    label: "Gallery"
  },
  { 
    href: "/progression", 
    label: "Progression"
  },
  { 
    href: "/resources", 
    label: "Resources"
  },
  { 
    href: "/alumni", 
    label: "Alumni"
  },
  { 
    href: "/contact", 
    label: "Join Us",
    highlighted: true
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    document.body.style.overflow = 'unset';
  };

  // Toggle mobile menu
  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newIsOpen = !isMenuOpen;
    setIsMenuOpen(newIsOpen);
    document.body.style.overflow = newIsOpen ? 'hidden' : 'unset';
    if (!newIsOpen) {
      setOpenSubmenu(null);
    }
  };

  // Toggle submenu with animation support
  const toggleSubmenu = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, label: string) => {
    // Only prevent default for mouse events
    if ('preventDefault' in e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // If clicking the same submenu, close it
    if (openSubmenu === label) {
      setOpenSubmenu(null);
      return;
    }
    
    // Close any open submenu with animation
    if (openSubmenu) {
      setOpenSubmenu(null);
      // Small delay to allow close animation to complete
      setTimeout(() => setOpenSubmenu(label), 150);
    } else {
      setOpenSubmenu(label);
    }
  };

  // Scroll to section with smooth behavior
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close all menus first
    closeAllMenus();
    
    // Handle hash links (sections on the same page)
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without page reload
        if (window.history.pushState) {
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = href;
        }
      }
    } else {
      // Regular navigation
      window.location.href = href;
    }
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100/10"
      )}
      initial={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8B0000] to-[#FF0000] p-0.5 flex-shrink-0">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                  <Mic className="h-5 w-5 text-[#8B0000]" />
                </div>
              </div>
              <span className="text-xl font-bold text-[#8B0000]">
                SMU Gavel Club
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {routes.map((route) => (
              <div key={route.href} className="relative group">
                {route.submenu ? (
                  <div className="relative">
                    <button
                      onClick={(e) => toggleSubmenu(e, route.label)}
                      onKeyDown={(e) => e.key === 'Enter' && toggleSubmenu(e, route.label)}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#8B0000] transition-colors duration-200",
                        pathname === route.href ? "text-[#8B0000] font-semibold" : ""
                      )}
                      aria-expanded={openSubmenu === route.label}
                      aria-haspopup="true"
                      aria-controls={`submenu-${route.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {route.label}
                      <ChevronDown className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        openSubmenu === route.label ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <AnimatePresence>
                      {openSubmenu === route.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <div className="p-2">
                            {route.submenu.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                  "block px-4 py-2 text-sm rounded-md transition-colors cursor-pointer",
                                  pathname === item.href
                                    ? "bg-red-50 text-[#8B0000] font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                )}
                                onClick={(e) => scrollToSection(e, item.href)}
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : route.highlighted ? (
                  <Link
                    href={route.href}
                    className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-sm ml-2"
                    onClick={(e) => scrollToSection(e, route.href)}
                  >
                    {route.label}
                  </Link>
                ) : (
                  <a
                    href={route.href}
                    className={cn(
                      "px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                      pathname === route.href
                        ? "text-[#8B0000] font-semibold"
                        : "text-foreground/80 hover:text-[#FF0000]"
                    )}
                    onClick={(e) => scrollToSection(e, route.href)}
                  >
                    {route.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden z-50"
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => toggleMenu(e as React.MouseEvent)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="h-12 w-12 rounded-lg hover:bg-gray-100 transition-colors"
              aria-haspopup="true"
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 pt-24 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={closeAllMenus}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <h2 id="mobile-menu-title" className="sr-only">Main menu</h2>
            <div className="container px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {routes.map((route, index) => (
                  <motion.div
                    key={route.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.03 * index,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {route.submenu ? (
                      <div className="mb-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubmenu(route.label);
                          }}
                          className={cn(
                            "flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium rounded-lg transition-colors",
                            pathname === route.href
                              ? "text-[#8B0000] bg-red-50"
                              : "text-foreground/80 hover:bg-gray-50"
                          )}
                          aria-expanded={openSubmenu === route.label}
                          aria-controls={`mobile-submenu-${route.label}`}
                        >
                          {route.label}
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openSubmenu === route.label ? "rotate-180" : ""
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {openSubmenu === route.label && (
                            <motion.div
                              id={`mobile-submenu-${route.label}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="pl-6 overflow-hidden"
                            >
                              {route.submenu.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  className={cn(
                                    "block px-4 py-3 text-sm rounded-lg transition-colors",
                                    pathname === item.href
                                      ? "text-[#8B0000] font-medium bg-red-50"
                                      : "text-foreground/70 hover:bg-gray-50"
                                  )}
                                  onClick={(e) => scrollToSection(e, item.href)}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={route.href}
                        className={cn(
                          "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                          pathname === route.href
                            ? "text-[#8B0000] bg-red-50"
                            : "text-foreground/80 hover:bg-gray-50"
                        )}
                        onClick={(e) => scrollToSection(e, route.href)}
                      >
                        {route.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/join" 
                    className="w-full bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white text-center px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    onClick={closeAllMenus}
                  >
                    Join Our Community
                  </Link>
                  <div className="flex justify-center space-x-4">
                    {['twitter', 'instagram', 'linkedin'].map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com/smugavelclub`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        aria-label={`Follow us on ${social}`}
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-5 w-5 bg-gray-400 rounded-full" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
