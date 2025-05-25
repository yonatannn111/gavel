export type GalleryCategory = 'meetings' | 'workshops' | 'contests' | 'social' | 'alumni' | 'club' | 'other';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  date: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  location: string;
}

export const galleryImages: GalleryImage[] = [
  // Upcoming Events
  {
    id: 1,
    src: "/events/upcoming/upcoming_1.jpg",
    alt: "Upcoming Workshop on Leadership",
    category: "workshops",
    date: "June 10, 2025",
    title: "Leadership Development Workshop",
    description: "Join us for an interactive session on developing essential leadership skills for the modern workplace.",
    tags: ["workshop", "leadership", "professional development"],
    featured: true,
    location: "SMU School of Business, Room 3.1"
  },
  {
    id: 2,
    src: "/events/upcoming/upcoming_2.png",
    alt: "Public Speaking Masterclass",
    category: "workshops",
    date: "June 15, 2025",
    title: "Public Speaking Masterclass",
    description: "Master the art of public speaking with our expert-led workshop. Perfect for all skill levels.",
    tags: ["public speaking", "workshop", "skills"],
    featured: true,
    location: "SMU Campus, Seminar Room 2"
  },
  // Past Events
  {
    id: 3,
    src: "/events/past/past_1.jpg",
    alt: "Annual Gavel Club Conference",
    category: "meetings",
    date: "May 20, 2025",
    title: "Annual Gavel Club Conference",
    description: "Our flagship event featuring guest speakers and networking opportunities for all members.",
    tags: ["conference", "networking", "keynote"],
    featured: true,
    location: "SMU Convention Center"
  },
  {
    id: 4,
    src: "/events/past/past_2.jpg",
    alt: "Debate Competition Finals",
    category: "contests",
    date: "April 28, 2025",
    title: "Inter-University Debate Championship",
    description: "Witness the most intense debate competition with participants from top universities.",
    tags: ["debate", "competition", "championship"],
    featured: true,
    location: "SMU School of Law Auditorium"
  },
  // Club Activities
  {
    id: 5,
    src: "/club/club1.jpeg",
    alt: "Club Team Building",
    category: "club",
    date: "March 15, 2025",
    title: "Team Building Retreat",
    description: "Annual team building activities to strengthen bonds between club members.",
    tags: ["team building", "club activity", "retreat"],
    featured: false,
    location: "Sentosa Island, Singapore"
  },
  {
    id: 6,
    src: "/club/club2.jpg",
    alt: "Club Meeting Session",
    category: "meetings",
    date: "March 5, 2025",
    title: "Weekly Club Meeting",
    description: "Regular club meeting where members practice speeches and provide feedback.",
    tags: ["meeting", "public speaking", "feedback"],
    featured: false,
    location: "SMU Campus, Room 4.2"
  },
  // Alumni Events
  {
    id: 7,
    src: "/alumnis/alumni1.jpg",
    alt: "Alumni Networking Night",
    category: "alumni",
    date: "February 20, 2025",
    title: "Alumni Networking Night",
    description: "Networking event connecting current members with successful Gavel Club alumni.",
    tags: ["networking", "alumni", "career"],
    featured: true,
    location: "SMU Executive Development Center"
  },
  {
    id: 8,
    src: "/alumnis/alumni2.jpg",
    alt: "Alumni Panel Discussion",
    category: "alumni",
    date: "January 25, 2025",
    title: "Career Insights Panel",
    description: "Alumni share their career journeys and provide valuable insights to current members.",
    tags: ["career", "panel", "alumni"],
    featured: false,
    location: "SMU School of Business"
  },
  // Social Events
  {
    id: 9,
    src: "/events/past/past_3.jpg",
    alt: "Club Social Gathering",
    category: "social",
    date: "December 15, 2024",
    title: "Year-End Celebration",
    description: "Celebrating a successful year with food, games, and awards ceremony.",
    tags: ["social", "celebration", "awards"],
    featured: false,
    location: "SMU Campus Green"
  },
  // Club Activities
  {
    id: 10,
    src: "/club/club3.jpeg",
    alt: "Club Workshop",
    category: "club",
    date: "November 30, 2024",
    title: "Workshop Preparation",
    description: "Members preparing materials and presentations for upcoming workshops.",
    tags: ["preparation", "workshop", "teamwork"],
    featured: false,
    location: "SMU Student Center"
  },
  // More Past Events
  {
    id: 11,
    src: "/events/past/past_4.jpg",
    alt: "Public Speaking Workshop",
    category: "workshops",
    date: "November 20, 2024",
    title: "Advanced Public Speaking",
    description: "Taking public speaking skills to the next level with advanced techniques.",
    tags: ["public speaking", "workshop", "advanced"],
    featured: false,
    location: "SMU School of Information Systems"
  },
  {
    id: 12,
    src: "/events/past/past_5.jpg",
    alt: "Debate Workshop",
    category: "workshops",
    date: "October 15, 2024",
    title: "Debate Skills Workshop",
    description: "Learn the art of debating with practical exercises and mock debates.",
    tags: ["debate", "workshop", "skills"],
    featured: false,
    location: "SMU School of Law"
  },
  // More Club Activities
  {
    id: 13,
    src: "/club/club4.jpeg",
    alt: "Club Recruitment",
    category: "club",
    date: "September 5, 2024",
    title: "Recruitment Drive",
    description: "Annual recruitment event to welcome new members to the Gavel Club.",
    tags: ["recruitment", "new members", "club"],
    featured: false,
    location: "SMU Campus, The Hive"
  },
  // More Alumni Events
  {
    id: 14,
    src: "/alumnis/alumni3.jpg",
    alt: "Alumni Mentorship",
    category: "alumni",
    date: "August 20, 2024",
    title: "Mentorship Program Launch",
    description: "Kickoff event for the alumni mentorship program connecting students with industry professionals.",
    tags: ["mentorship", "alumni", "career"],
    featured: true,
    location: "SMU Executive Development Center"
  },
  // More Social Events
  {
    id: 15,
    src: "/events/past/past_6.jpg",
    alt: "Club Social Event",
    category: "social",
    date: "July 10, 2024",
    title: "Mid-Year Social",
    description: "Casual social gathering for members to relax and get to know each other better.",
    tags: ["social", "networking", "fun"],
    featured: false,
    location: "SMU Campus, The Hangar"
  },
  // Information Session
  {
    id: 16,
    src: "/information/about-hero.jpg",
    alt: "Information Session",
    category: "other",
    date: "June 5, 2024",
    title: "Club Information Session",
    description: "Learn more about what the Gavel Club has to offer to SMU students.",
    tags: ["information", "recruitment", "club"],
    featured: false,
    location: "SMU School of Business"
  },
  // Historical Event
  {
    id: 17,
    src: "/information/history.jpg",
    alt: "Club History Exhibition",
    category: "other",
    date: "May 15, 2024",
    title: "10th Anniversary Celebration",
    description: "Celebrating a decade of excellence in public speaking and leadership development.",
    tags: ["anniversary", "celebration", "milestone"],
    featured: true,
    location: "SMU Administration Building"
  },
  // More Alumni Events
  {
    id: 18,
    src: "/alumnis/alumni4.jpg",
    alt: "Alumni Homecoming",
    category: "alumni",
    date: "April 1, 2024",
    title: "Alumni Homecoming Dinner",
    description: "Annual homecoming event for Gavel Club alumni to reconnect and reminisce.",
    tags: ["alumni", "homecoming", "networking"],
    featured: false,
    location: "SMU Campus, The Gallery"
  },
  // More Past Events
  {
    id: 19,
    src: "/events/past/past_7.jpg",
    alt: "Impromptu Speaking Workshop",
    category: "workshops",
    date: "March 22, 2024",
    title: "Impromptu Speaking Workshop",
    description: "Learn to think on your feet and deliver compelling speeches without preparation.",
    tags: ["impromptu", "public speaking", "workshop"],
    featured: false,
    location: "SMU School of Social Sciences"
  },
  {
    id: 20,
    src: "/events/upcoming/upcoming_3.png",
    alt: "Upcoming Leadership Forum",
    category: "workshops",
    date: "June 25, 2025",
    title: "Young Leaders Forum",
    description: "Interactive forum featuring young leaders sharing their experiences and insights.",
    tags: ["leadership", "forum", "networking"],
    featured: true,
    location: "SMU School of Business"
  },
  {
    id: 21,
    src: "/events/upcoming/upcoming_4.png",
    alt: "Upcoming Debate Workshop",
    category: "workshops",
    date: "July 5, 2025",
    title: "Advanced Debate Techniques",
    description: "Master advanced debate strategies and techniques in this intensive workshop.",
    tags: ["debate", "workshop", "advanced"],
    featured: false,
    location: "SMU School of Law"
  },
  // More Past Events
  {
    id: 22,
    src: "/events/past/past_8.jpg",
    alt: "Public Speaking Competition",
    category: "contests",
    date: "March 10, 2024",
    title: "Inter-College Oratory Contest",
    description: "Annual competition showcasing the best public speakers from colleges across Singapore.",
    tags: ["competition", "public speaking", "oratory"],
    featured: false,
    location: "SMU Mochtar Riady Auditorium"
  },
  {
    id: 23,
    src: "/events/past/past_9.jpg",
    alt: "Workshop on Body Language",
    category: "workshops",
    date: "February 28, 2024",
    title: "The Power of Body Language",
    description: "Learn how to use body language effectively to enhance your communication.",
    tags: ["body language", "communication", "workshop"],
    featured: false,
    location: "SMU School of Social Sciences"
  },
  // More Social Events
  {
    id: 24,
    src: "/events/past/past_10.jpg",
    alt: "Club Social Night",
    category: "social",
    date: "February 14, 2024",
    title: "Valentine's Social Night",
    description: "Special social event celebrating friendship and camaraderie among members.",
    tags: ["social", "valentine", "networking"],
    featured: false,
    location: "SMU Campus, The Hangar"
  },
  // More Past Events
  {
    id: 25,
    src: "/events/past/past_11.jpg",
    alt: "Leadership Seminar",
    category: "workshops",
    date: "January 20, 2024",
    title: "Leadership in the 21st Century",
    description: "Exploring modern leadership challenges and strategies for success.",
    tags: ["leadership", "seminar", "professional"],
    featured: false,
    location: "SMU School of Business"
  },
  {
    id: 26,
    src: "/events/past/past_12.jpg",
    alt: "Debate Workshop",
    category: "workshops",
    date: "January 10, 2024",
    title: "Introduction to Debate",
    description: "Beginner-friendly workshop introducing the fundamentals of competitive debate.",
    tags: ["debate", "beginner", "workshop"],
    featured: false,
    location: "SMU School of Law"
  },
  // More Social Events
  {
    id: 27,
    src: "/events/past/past_13.jpg",
    alt: "Year-End Party",
    category: "social",
    date: "December 20, 2023",
    title: "Year-End Celebration",
    description: "Celebrating the end of another successful year with food, games, and awards.",
    tags: ["celebration", "awards", "social"],
    featured: false,
    location: "SMU Campus, The Hangar"
  },
  // Final Past Event
  {
    id: 28,
    src: "/events/past/past_14.jpg",
    alt: "Public Speaking Workshop",
    category: "workshops",
    date: "November 30, 2023",
    title: "Overcoming Stage Fright",
    description: "Learn techniques to manage anxiety and deliver confident presentations.",
    tags: ["public speaking", "confidence", "workshop"],
    featured: false,
    location: "SMU School of Social Sciences"
  }
];
