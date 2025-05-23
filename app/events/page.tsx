"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, ArrowRight, CalendarPlus, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Fallback images for events
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80'
];

const getFallbackImage = (id: number) => FALLBACK_IMAGES[id % FALLBACK_IMAGES.length];

// Sample event data
const upcomingEvents = [
  {
    id: 1,
    title: "Weekly Club Meeting",
    date: "May 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "SMU School of Business, Seminar Room 3.1",
    description: "Join us for our regular meeting featuring prepared speeches, evaluations, and impromptu speaking sessions. This week's theme is 'Innovation and Creativity'.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    date: "May 22, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "SMU School of Accountancy, Function Room 2",
    description: "A special workshop focused on mastering the art of persuasive speaking and effective body language. Open to all SMU students, regardless of membership status.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 3,
    title: "Annual Speech Contest",
    date: "June 5, 2025",
    time: "7:00 PM - 9:30 PM",
    location: "SMU Auditorium",
    description: "Our flagship event where members compete in various speech categories to showcase their skills. Categories include Prepared Speech, Impromptu Speech, and Humorous Speech.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 4,
    title: "Leadership Development Workshop",
    date: "June 12, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "SMU School of Information Systems, Seminar Room 2.2",
    description: "A workshop designed to help members develop essential leadership skills, including delegation, team management, and effective communication in leadership roles.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

const pastEvents = [
  {
    id: 5,
    title: "Inter-University Speech Competition",
    date: "April 18, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "NUS University Town",
    description: "A collaborative event with other university Toastmasters clubs, featuring speech competitions and networking opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 6,
    title: "Impromptu Speaking Workshop",
    date: "April 5, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "SMU School of Economics, Seminar Room 1.1",
    description: "A specialized workshop focusing on techniques for effective impromptu speaking and thinking on your feet.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 7,
    title: "Executive Committee Handover Ceremony",
    date: "March 22, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "SMU Campus Green",
    description: "A formal ceremony to recognize outgoing executive committee members and welcome the newly elected leadership team.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 8,
    title: "Alumni Networking Night",
    date: "March 10, 2025",
    time: "6:30 PM - 9:00 PM",
    location: "SMU School of Law, Function Hall",
    description: "An evening of networking with Gavel Club alumni, featuring speeches from successful past members and career insights.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

// Event card component
const EventCard = ({ 
  event, 
  isSelected, 
  onClick,
  isPast = false 
}: { 
  event: typeof upcomingEvents[0]; 
  isSelected: boolean; 
  onClick: () => void;
  isPast?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={cn(
      "group relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl",
      isSelected ? 'border-[#8B0000]' : 'border-transparent hover:border-[#8B0000]/20',
      isPast && 'opacity-80 hover:opacity-100'
    )}
  >
    <div className="md:flex h-full">
      <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
        <Image 
          src={event.image || getFallbackImage(event.id)} 
          alt={event.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            isPast && 'grayscale'
          )}
          onError={(e) => {
            // Fallback to a default image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = getFallbackImage(event.id);
          }}
        />
        {isPast && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-medium">
              Past Event
            </span>
          </div>
        )}
      </div>
      
      <div className="md:w-3/5 p-6 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors">
              {event.title}
            </h3>
            <button 
              onClick={onClick}
              className="md:hidden p-1 -mr-2 text-gray-400 hover:text-[#8B0000] transition-colors"
              aria-label={isSelected ? 'Collapse event details' : 'Expand event details'}
            >
              {isSelected ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">{event.date}</p>
                <p className="text-sm text-gray-500">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-gray-600">{event.location}</p>
            </div>
          </div>
          
          <AnimatePresence>
            {(isSelected || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 mb-6">{event.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          <Button 
            className="bg-gradient-to-r from-[#8B0000] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#8B0000] px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            disabled={isPast}
          >
            {isPast ? 'Event Ended' : 'Register Now'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
          >
            <CalendarPlus className="mr-2 h-4 w-4" />
            Add to Calendar
          </Button>
          
          {isPast && (
            <Button variant="ghost" className="ml-auto text-[#8B0000] hover:bg-[#FFE5E5] flex items-center">
              View Photos
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

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
          <Tabs 
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
          </Tabs>
          
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