"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  submenu?: Array<{ href: string; label: string }>;
  highlighted?: boolean;
}

const routes: NavItem[] = [
  { 
    href: "/about", 
    label: "About Us",
    submenu: [
      { href: "/about#overview", label: "Overview" },
      { href: "/about#history", label: "Our History" },
      { href: "/about#mission", label: "Our Mission" },
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
    href: "/join", 
    label: "Join Us",
    highlighted: true
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    // Only prevent default for anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
    // For regular links, let Next.js handle the navigation
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'unset';
  };

  const toggleSubmenu = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === href ? null : href);
  };

  const currentSection = routes.find(route => 
    pathname === route.href || pathname.startsWith(`${route.href}/`)
  );

  const shouldShowSecondaryNav = currentSection?.submenu && currentSection.submenu.length > 0;

  // Check if current page has in-page sub-navigation
  const showInPageNav = pathname.startsWith('/pathways/') || 
                      pathname.startsWith('/resources/') || 
                      pathname.startsWith('/gallery/');

  return (
    <div ref={menuRef} className="relative">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled || showInPageNav
            ? "bg-white/95 dark:bg-slate-900/95 shadow-sm backdrop-blur-md"
            : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8B0000] to-[#FF0000] p-0.5 flex-shrink-0">
                <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-1.5">
                  <Mic className="h-full w-full text-[#8B0000]" />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B0000] to-[#FF0000]">
                SMU Gavel Club
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {routes.map((route) => {
                const isActive = pathname === route.href || 
                  pathname.startsWith(`${route.href}/`) ||
                  (route.href !== '/' && pathname.includes(route.href));
                
                return (
                  <div key={route.href} className="relative group">
                    {route.submenu ? (
                      <div className="relative">
                        <button
                          onClick={(e) => toggleSubmenu(route.href, e)}
                          onMouseEnter={() => setActiveSubmenu(route.href)}
                          className={cn(
                            "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                            isActive
                              ? "text-[#8B0000] font-semibold"
                              : "text-foreground/80 hover:text-[#8B0000]"
                          )}
                        >
                          {route.label}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        <AnimatePresence>
                          {activeSubmenu === route.href && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 z-50"
                              onMouseLeave={() => setActiveSubmenu(null)}
                            >
                              <div className="p-2">
                                {route.submenu.map((subItem) => (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={(e) => handleNavigation(e, subItem.href)}
                                    className={cn(
                                      "block px-4 py-2 text-sm rounded-md transition-colors",
                                      pathname === subItem.href || pathname.startsWith(`${subItem.href}/`)
                                        ? "bg-red-50 text-[#8B0000] font-medium"
                                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700"
                                    )}
                                  >
                                    {subItem.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={route.href}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                          isActive
                            ? "text-[#8B0000] font-semibold"
                            : "text-foreground/80 hover:text-[#8B0000]"
                        )}
                      >
                        {route.highlighted ? (
                          <span className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            {route.label}
                          </span>
                        ) : (
                          route.label
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-slate-900 shadow-lg border-t border-gray-100 dark:border-slate-800 overflow-y-auto"
              style={{ height: 'calc(100vh - 4rem)' }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-1">
                  {routes.map((route) => {
                    const isActive = pathname === route.href || 
                      pathname.startsWith(`${route.href}/`) ||
                      (route.href !== '/' && pathname.includes(route.href));
                    
                    return (
                      <div key={route.href} className="w-full">
                        <div className="mb-1">
                          <button
                            onClick={(e) => {
                              if (route.submenu?.length) {
                                toggleSubmenu(route.href, e);
                              } else {
                                closeMenu();
                                router.push(route.href);
                              }
                            }}
                            className={cn(
                              "flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium rounded-lg",
                              isActive
                                ? "text-[#8B0000] bg-red-50 dark:bg-red-900/20"
                                : "text-foreground/80 hover:bg-gray-50 dark:hover:bg-slate-800"
                            )}
                          >
                            {route.label}
                            {route.submenu && route.submenu.length > 0 && (
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  activeSubmenu === route.href ? "rotate-180" : ""
                                )}
                              />
                            )}
                          </button>
                          <AnimatePresence>
                            {activeSubmenu === route.href && route.submenu && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 overflow-hidden"
                              >
                                {route.submenu.map((subItem) => (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      closeMenu();
                                      router.push(subItem.href);
                                    }}
                                    className={cn(
                                      "block px-4 py-2 text-sm rounded-lg my-1",
                                      pathname === subItem.href || pathname.startsWith(`${subItem.href}/`)
                                        ? "text-[#8B0000] font-medium bg-red-50 dark:bg-red-900/20"
                                        : "text-foreground/70 hover:bg-gray-50 dark:hover:bg-slate-800"
                                    )}
                                  >
                                    {subItem.label}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="h-16"></div>
    </div>
  );
}
