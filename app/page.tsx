import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Calendar, 
  Mic, 
  ChevronRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Voice at SMU Gavel Club
            </h1>
            <p className="text-xl mb-8">
              Develop leadership skills, overcome public speaking anxiety, and build confidence
              in a supportive community of like-minded individuals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#8B0000] hover:bg-gray-100">
                <Link href="/join">Join Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8B0000]">Our Mission</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              SMU Gavel Club is dedicated to helping members develop their communication and leadership
              skills through a supportive and positive learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#FF0000]/10 p-3 rounded-full w-fit mb-4">
                <Mic className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Public Speaking</h3>
              <p className="text-gray-600">
                Overcome fear and develop confidence in speaking before an audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#FF0000]/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">
                Develop essential leadership skills through practice and feedback.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#FF0000]/10 p-3 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
              <p className="text-gray-600">
                Build confidence and improve communication in all aspects of life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#FF0000]/10 p-3 rounded-full w-fit mb-4">
                <Calendar className="h-6 w-6 text-[#8B0000]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and build lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#8B0000]">Upcoming Events</h2>
            <Button asChild variant="ghost" className="text-[#8B0000] hover:text-[#FF0000]">
              <Link href="/events" className="flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Weekly Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 15, 2025 • 6:00 PM</div>
                <h3 className="text-xl font-semibold mb-2">Weekly Club Meeting</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our regular meeting featuring prepared speeches, evaluations, and impromptu speaking sessions.
                </p>
                <Button asChild className="w-full bg-[#8B0000] hover:bg-[#FF0000]">
                  <Link href="/events">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Public Speaking Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 22, 2025 • 5:30 PM</div>
                <h3 className="text-xl font-semibold mb-2">Public Speaking Workshop</h3>
                <p className="text-gray-600 mb-4">
                  A special workshop focused on mastering the art of persuasive speaking and effective body language.
                </p>
                <Button asChild className="w-full bg-[#8B0000] hover:bg-[#FF0000]">
                  <Link href="/events">Register Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Speech Contest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 5, 2025 • 7:00 PM</div>
                <h3 className="text-xl font-semibold mb-2">Annual Speech Contest</h3>
                <p className="text-gray-600 mb-4">
                  Our flagship event where members compete in various speech categories to showcase their skills.
                </p>
                <Button asChild className="w-full bg-[#8B0000] hover:bg-[#FF0000]">
                  <Link href="/events">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#8B0000]">
            What Our Members Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "Joining the SMU Gavel Club was one of the best decisions I made during my university years. It transformed me from someone who feared public speaking to someone who now embraces it."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center text-white font-bold">
                  JL
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Lee</h4>
                  <p className="text-sm text-gray-500">Member since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "The supportive environment at Gavel Club helped me develop not just as a speaker, but as a leader. The skills I gained here have been invaluable in my professional career."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Tan</h4>
                  <p className="text-sm text-gray-500">Member since 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "As an international student, Gavel Club provided me with a platform to improve my English speaking skills and make friends. The feedback I received was always constructive and encouraging."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center text-white font-bold">
                  SG
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Garcia</h4>
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Voice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SMU Gavel Club today and embark on a journey of personal and professional growth.
          </p>
          <Button asChild size="lg" className="bg-white text-[#8B0000] hover:bg-gray-100">
            <Link href="/join">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}