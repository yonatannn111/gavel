"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

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

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  
  const handleEventClick = (eventId: number) => {
    setSelectedEvent(eventId === selectedEvent ? null : eventId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-16">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-3xl">
            Discover our upcoming events and join us to enhance your public speaking and leadership skills.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-lg">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="text-lg">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 gap-8">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                      selectedEvent === event.id ? 'border-[#8B0000]' : 'border-gray-200'
                    }`}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto relative">
                        <Image 
                          src={event.image} 
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-[#8B0000]">{event.title}</h3>
                        
                        <div className="flex flex-col space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-5 w-5 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-5 w-5 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className={`${selectedEvent === event.id ? 'block' : 'hidden md:block'}`}>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          
                          <div className="flex space-x-4">
                            <Button className="bg-[#8B0000] hover:bg-[#FF0000]">
                              Register Now
                            </Button>
                            <Button variant="outline" className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                        
                        <Button 
                          variant="link" 
                          onClick={() => handleEventClick(event.id)}
                          className="md:hidden text-[#8B0000] mt-2"
                        >
                          {selectedEvent === event.id ? 'Show Less' : 'Show More'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 gap-8">
                {pastEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                      selectedEvent === event.id ? 'border-[#8B0000]' : 'border-gray-200'
                    }`}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto relative">
                        <Image 
                          src={event.image} 
                          alt={event.title}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-[#8B0000]">{event.title}</h3>
                        
                        <div className="flex flex-col space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-5 w-5 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-5 w-5 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className={`${selectedEvent === event.id ? 'block' : 'hidden md:block'}`}>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          
                          <Button variant="outline" className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white">
                            View Event Photos
                          </Button>
                        </div>
                        
                        <Button 
                          variant="link" 
                          onClick={() => handleEventClick(event.id)}
                          className="md:hidden text-[#8B0000] mt-2"
                        >
                          {selectedEvent === event.id ? 'Show Less' : 'Show More'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#8B0000]">Event Calendar</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-4">
              Below is our event calendar for the current semester. Click on an event to see more details and register.
            </p>
            
            <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=c_2o8a1n3vr9qt7a7hm9oc3u1tg0%40group.calendar.google.com&ctz=Asia%2FSingapore" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no"
                title="SMU Gavel Club Calendar"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Host an Event with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you're interested in collaborating with SMU Gavel Club for an event, we'd love to hear from you!
          </p>
          <Button asChild size="lg" className="bg-white text-[#8B0000] hover:bg-gray-100">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}