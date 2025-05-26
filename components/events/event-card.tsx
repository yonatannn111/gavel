import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Event, eventTypes } from "@/types/events";

interface EventCardProps {
  event: Event;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function EventCard({ event, isSelected = false, onClick, className }: EventCardProps) {
  const EventTypeIcon = eventTypes[event.type]?.icon;
  const eventTypeConfig = eventTypes[event.type];
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        "group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col h-full",
        isSelected && 'ring-2 ring-[#8B0000] border-transparent shadow-md',
        className
      )}
    >
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <Image 
          src={event.image || 
               (event.type === 'workshop' ? '/events/upcoming/upcoming_1.jpg' : 
                event.type === 'contest' ? '/events/upcoming/upcoming_2.png' :
                event.type === 'ceremony' ? '/events/upcoming/upcoming_3.png' :
                event.type === 'networking' ? '/events/upcoming/upcoming_4.png' :
                '/events/past/past_1.jpg')} 
          alt={event.title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center gap-2 mb-1">
            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${eventTypeConfig.color} backdrop-blur-sm`}>
              <EventTypeIcon className="h-3 w-3 mr-1.5" />
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </div>
          </div>
          <h3 className="text-lg font-bold text-white line-clamp-2">{event.title}</h3>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-[#8B0000]/5 p-2 rounded-lg flex-shrink-0">
            <Calendar className="h-5 w-5 text-[#8B0000]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(event.date)} • {event.time}
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-[#8B0000]/5 p-2 rounded-lg flex-shrink-0">
            <MapPin className="h-5 w-5 text-[#8B0000]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium text-gray-900">
              {event.location}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Button 
            asChild
            variant="outline"
            className="w-full border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/5 hover:text-[#8B0000]"
          >
            <Link href={`/events/${event.id}`} className="flex items-center justify-center">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
