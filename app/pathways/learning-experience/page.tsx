import { BookOpen, Users, Video, Award, CheckCircle, Clock, Calendar, BarChart2 } from 'lucide-react';
import { SubNavigation } from '@/components/sub-navigation';

export default function LearningExperience() {
  const subNavItems = [
    { href: '/pathways/overview', label: 'Overview' },
    { href: '/pathways/accredited-speaker', label: 'Accredited Speaker Program' },
    { href: '/pathways/learning-experience', label: 'Pathways Learning Experience' },
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#8B0000]" />,
      title: 'Structured Learning Paths',
      description: 'Follow carefully designed paths that build your skills progressively.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#8B0000]" />,
      title: 'Peer Learning',
      description: 'Collaborate and learn with fellow members in a supportive environment.'
    },
    {
      icon: <Video className="w-6 h-6 text-[#8B0000]" />,
      title: 'Interactive Content',
      description: 'Engage with videos, exercises, and real-world scenarios.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#8B0000]" />,
      title: 'Recognized Achievements',
      description: 'Earn certificates and badges as you progress through the program.'
    }
  ];

  const learningLevels = [
    {
      level: 'Level 1',
      title: 'Mastering Fundamentals',
      description: 'Build a strong foundation in public speaking and leadership.',
      duration: '4-6 weeks',
      projects: 3
    },
    {
      level: 'Level 2',
      title: 'Developing Style',
      description: 'Discover and refine your unique speaking style.',
      duration: '6-8 weeks',
      projects: 4
    },
    {
      level: 'Level 3',
      title: 'Advanced Techniques',
      description: 'Master advanced speaking and leadership techniques.',
      duration: '8-10 weeks',
      projects: 5
    },
    {
      level: 'Level 4',
      title: 'Leadership Development',
      description: 'Develop leadership skills to guide and inspire others.',
      duration: '10-12 weeks',
      projects: 5
    },
    {
      level: 'Level 5',
      title: 'Mastery',
      description: 'Achieve mastery in public speaking and leadership.',
      duration: '12-16 weeks',
      projects: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pathways Learning Experience</h1>
          <p className="text-xl max-w-3xl mx-auto">A comprehensive, personalized learning journey to master public speaking and leadership</p>
        </div>
      </section>

      {/* Sub Navigation */}
      <SubNavigation items={subNavItems} basePath="/pathways" />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Transform Your Communication Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our Pathways Learning Experience is designed to help you develop the skills you need to succeed in any situation.
              Whether you're looking to improve your public speaking, leadership abilities, or professional development,
              we have a path tailored to your goals and experience level.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Learning Journey */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Your Learning Journey</h2>
            
            <div className="space-y-8">
              {learningLevels.map((level, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B0000] to-[#FF0000] text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                    {level.level}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{level.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {level.duration}
                      </span>
                      <span className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-1" />
                        {level.projects} projects
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="text-[#8B0000] dark:text-red-400 font-medium flex items-center">
                      View Details <CheckCircle className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of members who have transformed their communication and leadership skills through our Pathways program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
