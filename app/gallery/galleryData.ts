export type GalleryCategory = 'meetings' | 'workshops' | 'contests' | 'social' | 'other';

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
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "SMU Gavel Club Meeting",
    category: "meetings",
    date: "May 20, 2025",
    title: "Weekly Chapter Meeting at SMU",
    description: "Members engaging in our weekly meeting at the SMU campus, honing public speaking skills.",
    tags: ["public speaking", "SMU", "weekly meeting"],
    featured: true,
    location: "SMU School of Business, Singapore"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Workshop on Effective Communication",
    category: "workshops",
    date: "May 15, 2025",
    title: "Effective Communication Workshop",
    description: "Interactive workshop focusing on communication techniques and body language.",
    tags: ["workshop", "communication", "skills"],
    featured: true,
    location: "SMU Li Ka Shing Library, Singapore"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f03d0b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Annual Gavel Club Contest",
    category: "contests",
    date: "April 30, 2025",
    title: "Annual Public Speaking Championship",
    description: "Our most competitive event of the year, showcasing the best speakers from SMU.",
    tags: ["contest", "championship", "public speaking"],
    featured: true,
    location: "SMU School of Law, Singapore"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Leadership Training Session",
    category: "workshops",
    date: "April 22, 2025",
    title: "Leadership Development Workshop",
    description: "Developing leadership skills through interactive activities and group discussions.",
    tags: ["leadership", "workshop", "development"],
    featured: false,
    location: "SMU Administration Building, Singapore"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1469371670807-13d5bc38c843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Networking Social Event",
    category: "social",
    date: "April 10, 2025",
    title: "Gavel Club Social Mixer",
    description: "Casual networking event for members to connect and build relationships.",
    tags: ["networking", "social", "community"],
    featured: false,
    location: "SMU Green, Singapore"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f03d0b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Impromptu Speaking Contest",
    category: "contests",
    date: "March 28, 2025",
    title: "Impromptu Speaking Competition",
    description: "Test your quick thinking and speaking skills in our impromptu speaking contest.",
    tags: ["contest", "impromptu", "public speaking"],
    featured: true,
    location: "SMU School of Social Sciences, Singapore"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Mentorship Program Launch",
    category: "other",
    date: "March 15, 2025",
    title: "Mentorship Program Kickoff",
    description: "Launching our new mentorship program connecting experienced members with newcomers.",
    tags: ["mentorship", "program", "growth"],
    featured: true,
    location: "SMU Campus, Singapore"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Speech Crafting Workshop",
    category: "workshops",
    date: "February 28, 2025",
    title: "Speech Crafting Masterclass",
    description: "Learn the art of crafting compelling speeches that captivate your audience.",
    tags: ["speech writing", "workshop", "public speaking"],
    featured: false,
    location: "SMU Seminar Room 3-1, Singapore"
  }
];
