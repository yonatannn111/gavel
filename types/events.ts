import { LucideIcon, Users, BookOpen, Award } from 'lucide-react';

export type EventType = 'meeting' | 'workshop' | 'contest' | 'ceremony' | 'networking';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: EventType;
  image: string;
}

export interface EventTypeConfig {
  icon: LucideIcon;
  color: string;
}

export const eventTypes: Record<EventType, EventTypeConfig> = {
  meeting: { icon: Users, color: 'bg-blue-100 text-blue-800' },
  workshop: { icon: BookOpen, color: 'bg-purple-100 text-purple-800' },
  contest: { icon: Award, color: 'bg-amber-100 text-amber-800' },
  ceremony: { icon: Award, color: 'bg-emerald-100 text-emerald-800' },
  networking: { icon: Users, color: 'bg-indigo-100 text-indigo-800' }
};

// Helper to get event image path
export const getEventImage = (type: 'upcoming' | 'past', id: number): string => {
  const basePath = '/events';
  // For past events, always use jpg as all past event images are in jpg format
  const ext = type === 'upcoming' && id <= 4 ? 'png' : 'jpg';
  return `${basePath}/${type}/${type}_${id}.${ext}`;
};

// Sample event data with local images
export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Weekly Club Meeting",
    date: "2025-05-15",
    time: "6:00 PM - 8:00 PM",
    location: "SMU School of Business, Seminar Room 3.1",
    description: "Join us for our regular meeting featuring prepared speeches, evaluations, and impromptu speaking sessions. This week's theme is 'Innovation and Creativity'.",
    type: 'meeting',
    image: getEventImage('upcoming', 1)
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    date: "2025-05-22",
    time: "5:30 PM - 7:30 PM",
    location: "SMU School of Accountancy, Function Room 2",
    description: "A special workshop focused on mastering the art of persuasive speaking and effective body language. Open to all SMU students, regardless of membership status.",
    type: 'workshop',
    image: getEventImage('upcoming', 2)
  },
  {
    id: 3,
    title: "Annual Speech Contest",
    date: "2025-06-05",
    time: "7:00 PM - 9:30 PM",
    location: "SMU Auditorium",
    description: "Our flagship event where members compete in various speech categories to showcase their skills. Categories include Prepared Speech, Impromptu Speech, and Humorous Speech.",
    type: 'contest',
    image: getEventImage('upcoming', 3)
  },
  {
    id: 4,
    title: "Leadership Development Workshop",
    date: "2025-06-12",
    time: "6:30 PM - 8:30 PM",
    location: "SMU School of Information Systems, Seminar Room 2.2",
    description: "A workshop designed to help members develop essential leadership skills, including delegation, team management, and effective communication in leadership roles.",
    type: 'workshop',
    image: getEventImage('upcoming', 4)
  }
];

export const pastEvents: Event[] = [
  {
    id: 5,
    title: "Inter-University Speech Competition",
    date: "2025-04-18",
    time: "1:00 PM - 5:00 PM",
    location: "NUS University Town",
    description: "A collaborative event with other university Toastmasters clubs, featuring speech competitions and networking opportunities.",
    type: 'contest',
    image: getEventImage('past', 5)
  },
  {
    id: 6,
    title: "Impromptu Speaking Workshop",
    date: "2025-04-05",
    time: "3:00 PM - 5:00 PM",
    location: "SMU School of Economics, Seminar Room 1.1",
    description: "A specialized workshop focusing on techniques for effective impromptu speaking and thinking on your feet.",
    type: 'workshop',
    image: getEventImage('past', 2)
  },
  {
    id: 7,
    title: "Executive Committee Handover Ceremony",
    date: "2025-03-22",
    time: "7:00 PM - 9:00 PM",
    location: "SMU Campus Green",
    description: "A formal ceremony to recognize outgoing executive committee members and welcome the newly elected leadership team.",
    type: 'ceremony',
    image: getEventImage('past', 3)
  },
  {
    id: 8,
    title: "Alumni Networking Night",
    date: "2025-03-10",
    time: "6:30 PM - 9:00 PM",
    location: "SMU School of Law, Function Hall",
    description: "An evening of networking with Gavel Club alumni, featuring speeches from successful past members and career insights.",
    type: 'networking',
    image: getEventImage('past', 4)
  }
];
