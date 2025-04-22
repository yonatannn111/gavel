import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const executiveCommittee = [
    {
      name: "Nigest Kidane",
      role: "President",
      image: "./members/president.jpeg"
    },
    {
      name: "Selam Meseret",
      role: "Vice President Education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Hermela Yohannes",
      role: "Vice President Public Relations",
      image: "./members/relations.jpeg"
    },

    {
      name: "Tewodros Adane",
      role: "Vice President Membership",
      image: "./members/membership.jpeg"
    },
    
    {
      name: "Atnatewos Hailealem",
      role: "Secretary",
      image: "./members/secretary.jpeg"
    },
    {
      name: "Yonatan Getachew",
      role: "Treasurer",
      image: "./members/Treasurer.jpg"
    },
    {
      name: "Kalid Ahmed",
      role: "Sergeant at Arms",
      image: "./members/sergent.jpeg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-16">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SMU Gavel Club</h1>
          <p className="text-xl max-w-3xl">
            Learn about our history, mission, and the people who make our club special.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, the SMU Gavel Club was established to provide students with a platform to develop their public speaking and leadership skills in a supportive environment.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have grown from a small group of enthusiastic students to one of the most active clubs on campus, with over 100 members from diverse backgrounds and disciplines.
              </p>
              <p className="text-gray-700">
                Our club is affiliated with Toastmasters International, a global organization dedicated to helping people become more effective communicators and leaders.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="SMU Gavel Club History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#8B0000]">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-[#8B0000]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-700">
                  To provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-[#8B0000]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-700">
                  To be the premier platform for students to develop essential communication and leadership skills that will serve them throughout their academic and professional careers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-[#8B0000]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Integrity and respect in all interactions</li>
                  <li>• Continuous learning and improvement</li>
                  <li>• Supportive and constructive feedback</li>
                  <li>• Inclusivity and diversity</li>
                  <li>• Excellence in communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#8B0000]">Our Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Club Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Distinguished Club Award for 5 consecutive years (2020-2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Best Student Organization Award at SMU (2022)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Host of the Inter-University Public Speaking Championship (2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Community Service Excellence Award (2021)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Member Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>3 members reached Distinguished Toastmaster status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Division-level speech contest winners (2021, 2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>National Public Speaking Champion (2022)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B0000] font-bold mr-2">•</span>
                  <span>Over 50 members completed their Competent Communicator certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#8B0000]">Meet Our Executive Committee</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCommittee.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#8B0000]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#8B0000]">Club Photos</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="./club/club1.jpeg" 
                alt="Club Meeting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="./club/club2.jpg" 
                alt="Team Discussion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="./club/club3.jpeg" 
                alt="Speech Contest"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="./club/club4.jpeg" 
                alt="Workshop"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}