import { Event, EventType } from "@/types/events";

type SortOption = 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';

export function filterAndSortEvents(
  events: Event[],
  {
    searchQuery = '',
    selectedTypes = [],
    sortBy = 'date-asc',
  }: {
    searchQuery?: string;
    selectedTypes?: EventType[];
    sortBy?: SortOption;
  } = {}
): Event[] {
  // Filter events
  let filteredEvents = [...events];

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    );
  }

  // Filter by selected types
  if (selectedTypes.length > 0) {
    filteredEvents = filteredEvents.filter((event) =>
      selectedTypes.includes(event.type)
    );
  }

  // Sort events
  filteredEvents.sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return filteredEvents;
}

export function groupEventsByDate(events: Event[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const upcoming: Event[] = [];
  const past: Event[] = [];

  events.forEach(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    
    if (eventDate >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  return { upcoming, past };
}

export function getUpcomingEvents(events: Event[], limit = 3) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return sorted.slice(0, limit);
}
