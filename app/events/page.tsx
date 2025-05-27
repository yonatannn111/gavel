"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, X } from "lucide-react";
import { Event, EventType, eventTypes, upcomingEvents, pastEvents } from "@/types/events";
import { EventCard } from "@/components/events/event-card";
import { filterAndSortEvents, groupEventsByDate } from "@/lib/events";

type SortOption = 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';
type TimeFilter = 'all' | 'today' | 'tomorrow' | 'this-week' | 'this-month';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<Event['type'][]>([]);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('date-asc');
  const [activeTab, setActiveTab] = useState('upcoming');

  // Process events
  const { upcoming, past } = groupEventsByDate([...upcomingEvents, ...pastEvents]);

  // Filter and sort events
  const filteredUpcomingEvents = filterAndSortEvents(upcoming, {
    searchQuery,
    selectedTypes,
    sortBy: sortBy.includes('date') ? sortBy : 'date-asc'
  });

  const filteredPastEvents = filterAndSortEvents(past, {
    searchQuery,
    selectedTypes,
    sortBy: sortBy.includes('date') ? sortBy : 'date-desc'
  });

  const toggleEventType = (type: Event['type']) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTypes([]);
    setTimeFilter('all');
    setSortBy('date-asc');
  };

  const hasActiveFilters = searchQuery !== '' || selectedTypes.length > 0 || timeFilter !== 'all';

  const timeFilters = [
    { value: 'all', label: 'All Upcoming' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-month', label: 'This Month' },
  ];

  const eventsToShow = activeTab === 'upcoming' ? filteredUpcomingEvents : filteredPastEvents;
  const showNoEvents = eventsToShow.length === 0;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#660000] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow with Our Community</h1>
            <p className="text-lg md:text-xl opacity-90">
              Join workshops, talks, and networking events to build skills and connect with professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* No filters - Clean layout */}
          <div className="mb-8"></div>

          {/* Events List */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                </h2>
                <p className="text-gray-500 mt-1">
                  {activeTab === 'upcoming' 
                    ? `Showing ${filteredUpcomingEvents.length} event${filteredUpcomingEvents.length !== 1 ? 's' : ''}`
                    : `Showing ${filteredPastEvents.length} past event${filteredPastEvents.length !== 1 ? 's' : ''}`}
                </p>
              </div>
              
              <Tabs defaultValue="upcoming" className="w-full sm:w-auto">
                <TabsList className="bg-gray-100 p-1.5 rounded-xl">
                  <TabsTrigger 
                    value="upcoming" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#8B0000] rounded-lg px-4 py-2 text-sm font-medium transition-all hover:text-[#8B0000]"
                    onClick={() => setActiveTab('upcoming')}
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger 
                    value="past" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#8B0000] rounded-lg px-4 py-2 text-sm font-medium transition-all hover:text-[#8B0000]"
                    onClick={() => setActiveTab('past')}
                  >
                    Past Events
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Events Grid */}
            <div className="space-y-6">
              {showNoEvents ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                  <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeTab === 'upcoming' ? 'No upcoming events found' : 'No past events found'}
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    {hasActiveFilters
                      ? 'Try adjusting your filters or search term.'
                      : activeTab === 'upcoming' 
                        ? 'Check back soon for upcoming events!'
                        : 'No past events to display.'}
                  </p>
                  {hasActiveFilters && (
                    <Button 
                      variant="outline" 
                      className="mt-4 text-blue-600 border-blue-100 hover:bg-blue-50"
                      onClick={resetFilters}
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventsToShow.map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
