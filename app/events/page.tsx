"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, ArrowRight, CalendarPlus, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Event, eventTypes, upcomingEvents, pastEvents } from "@/types/events";

// Dynamic import for client-side only components
const ClientOnlyTabs = dynamic(
  () => import('@/components/ui/tabs').then(mod => ({
    default: ({ children, ...props }: any) => (
      <Tabs {...props}>
        <Suspense fallback={
          <div className="h-64 flex items-center justify-center">
            <div className="animate-pulse text-[#8B0000]">Loading events...</div>
          </div>
        }>
          {children}
        </Suspense>
      </Tabs>
    )
  })),
  { ssr: false }
);

// Event types and interfaces are now imported from '@/types/events'

// Event card component - Modern design inspired by Eventbrite/Meetup
const EventCard = ({ 
  event, 
  isSelected, 
  onClick,
  isPast = false 
}: { 
  event: Event;
  isSelected: boolean; 
  onClick: () => void;
  isPast?: boolean;
}) => {
  const EventTypeIcon = eventTypes[event.type]?.icon || Calendar;
  const eventTypeConfig = eventTypes[event.type] || { color: 'bg-gray-100 text-gray-800' };
  
  // Format date to show day, month, and date (e.g., "Fri, May 25")
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Format time in 12-hour format (e.g., "2:00 PM")
  const formatTime = (timeString: string) => {
    const [time, period] = timeString.split(' ');
    return time.split(':').slice(0, 2).join(':');
  };

  // Get month and day for the date badge
  const getDateBadge = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString('default', { month: 'short' }),
      day: date.getDate()
    };
  };

  const { month, day } = getDateBadge(event.date);
  const [startTime, endTime] = event.time.split(' - ').map(t => t.trim());

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-200",
        isSelected && 'ring-2 ring-[#8B0000] border-transparent',
        isPast && 'opacity-70 hover:opacity-90'
      )}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Date Badge - Left side on desktop, top on mobile */}
        <div className="md:w-24 md:border-r border-gray-100 bg-gray-50 flex-shrink-0">
          <div className="p-4 text-center">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{month}</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{day}</div>
            <div className="mt-1 text-xs text-gray-500">
              {formatTime(startTime)} - {formatTime(endTime)}
            </div>
          </div>
        </div>
        
        {/* Event Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-5">
            {/* Event Type and Online/Offline Badge */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${eventTypeConfig.color}`}>
                  <EventTypeIcon className="h-3 w-3 mr-1.5" />
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </div>
                <span className="ml-2 text-xs text-gray-500">• {event.location.includes('Online') ? 'Online' : 'In Person'}</span>
              </div>
              {isPast && (
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Past Event
                </span>
              )}
            </div>

            {/* Event Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#8B0000] transition-colors">
              <Link href={`/events/${event.id}`} className="hover:underline">
                {event.title}
              </Link>
            </h3>

            {/* Location and Time - Stacked on mobile, inline on desktop */}
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{event.location}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{formatDate(event.date)} • {event.time}</span>
              </div>
            </div>

            {/* Description (collapsible) */}
            <AnimatePresence>
              {(isSelected || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#8B0000]/10 text-[#8B0000]">
                      Public Speaking
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {event.type === 'workshop' ? 'Interactive' : 'Networking'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                asChild
              >
                <Link href={`/events/${event.id}`} className="flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:bg-gray-200"
                  title="Add to calendar"
                >
                  <CalendarPlus className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:bg-gray-200"
                  title="Share event"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button for mobile */}
      <button 
        onClick={onClick}
        className="md:hidden absolute bottom-4 right-4 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
        aria-label={isSelected ? 'Collapse event details' : 'Expand event details'}
      >
        {isSelected ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
    </motion.article>
  );
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  
  useEffect(() => {
    setIsClient(true);
    // Set initial tab based on URL hash
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#past-events') {
        setActiveTab('past');
      }
    }
  }, []);
  
  const handleEventClick = (eventId: number) => {
    setSelectedEvent(eventId === selectedEvent ? null : eventId);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.pushState(null, '', value === 'past' ? '#past-events' : '#');
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#8B0000] to-[#B91C1C] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm mb-4">
              Upcoming & Past Events
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Join Our <span className="text-yellow-300">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8">
              Enhance your public speaking and leadership skills through our diverse range of events, workshops, and competitions.
            </p>
            <Button 
              asChild
              variant="secondary"
              className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <a href="#upcoming-events">
                View Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="upcoming-events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ClientOnlyTabs 
            value={activeTab} 
            onValueChange={handleTabChange}
            className="w-full"
            defaultValue="upcoming"
          >
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 p-1.5 rounded-xl">
                <TabsTrigger 
                  value="upcoming" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#8B0000] rounded-lg py-2.5 text-base font-medium transition-all"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger 
                  value="past" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#8B0000] rounded-lg py-2.5 text-base font-medium transition-all"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>
              
              <p className="mt-6 text-center text-gray-600 max-w-2xl">
                {isClient ? (
                  <span>
                    {typeof window !== 'undefined' && window.location.hash === '#past-events' 
                      ? 'Browse through our past events and relive the memories.' 
                      : 'Join our upcoming events to enhance your public speaking and leadership skills.'}
                  </span>
                ) : 'Loading...'}
              </p>
            </motion.div>
            
            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      isSelected={selectedEvent === event.id}
                      onClick={() => handleEventClick(event.id)}
                    />
                  ))
                ) : (
                  <motion.div 
                    className="text-center py-12 bg-gray-50 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No Upcoming Events</h3>
                    <p className="text-gray-500 max-w-md mx-auto">Check back later for our upcoming events or browse our past events.</p>
                  </motion.div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {pastEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isSelected={selectedEvent === event.id}
                    onClick={() => handleEventClick(event.id)}
                    isPast={true}
                  />
                ))}
              </div>
            </TabsContent>
          </ClientOnlyTabs>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-24 bg-gradient-to-r from-[#8B0000] to-[#B91C1C] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to organize an event with us?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with SMU Gavel Club for your next public speaking workshop, competition, or corporate training session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-xl hover:border-white/80 transition-all duration-300"
                >
                  Learn About Sponsorships
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8B0000]">Event Calendar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with our upcoming events. Click on any event to see more details and register.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 bg-[#8B0000]/5 p-6 rounded-xl">
                    <div className="flex items-center mb-6">
                      <Calendar className="h-8 w-8 text-[#8B0000] mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Upcoming Events</h3>
                    </div>
                    <div className="space-y-4">
                      {upcomingEvents.slice(0, 3).map((event) => (
                        <div key={event.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <p className="font-medium text-gray-900">{event.title}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {event.date} • {event.time}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      variant="link" 
                      className="mt-4 text-[#8B0000] hover:no-underline p-0"
                    >
                      <Link href="#upcoming-events">
                        View all events <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://calendar.google.com/calendar/embed?src=c_2o8a1n3vr9qt7a7hm9oc3u1tg0%40group.calendar.google.com&ctz=Asia%2FSingapore&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
                        style={{ border: 0 }} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0"
                        scrolling="no"
                        title="SMU Gavel Club Calendar"
                        className="min-h-[400px]"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                      <Button asChild variant="outline" className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/5">
                        <a 
                          href="https://calendar.google.com/calendar/u/0?cid=Y18ybzhhMW4zdnI5cXRxN2E3aG05b2MzdTF0ZzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <CalendarPlus className="mr-2 h-4 w-4" />
                          Add to Google Calendar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}