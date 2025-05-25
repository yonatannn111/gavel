import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, Users, Award, BookOpen } from 'lucide-react';

// Generate static paths at build time
export function generateStaticParams() {
  return [
    { pathwayId: 'dynamic-leadership' },
    { pathwayId: 'effective-coaching' },
    // Add other pathway IDs here as needed
  ];
}

// This would typically come from a database or API
export const pathwayData = {
  'dynamic-leadership': {
    title: 'Dynamic Leadership',
    description: 'Develop your leadership potential through practical experience and mentorship.',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600',
    duration: '6-12 months',
    level: 'All Levels',
    projects: 5,
    overview: 'The Dynamic Leadership path helps you build your skills as an effective communicator and leader. You will learn to lead small and large groups, develop a leadership style, and build a leadership legacy.',
    objectives: [
      'Develop a leadership style that works for you',
      'Learn to lead small and large groups effectively',
      'Understand team dynamics and motivation',
      'Develop skills to mentor and coach others',
      'Create a leadership vision and strategy'
    ],
    projectsList: [
      { title: 'Ice Breaker', description: 'Deliver a speech on any topic as an introduction to public speaking.' },
      { title: 'Evaluation and Feedback', description: 'Present a speech and receive feedback from evaluators.' },
      { title: 'Researching and Presenting', description: 'Research and present an unfamiliar topic.' },
      { title: 'Understanding Your Leadership Style', description: 'Complete a self-assessment and present your leadership style.' },
      { title: 'Leading Your Team', description: 'Lead a small team to complete a project.' }
    ]
  },
  'effective-coaching': {
    title: 'Effective Coaching',
    description: 'Learn how to mentor others and provide constructive feedback.',
    icon: '👥',
    color: 'from-green-500 to-green-600',
    duration: '4-6 months',
    level: 'Intermediate',
    projects: 4,
    overview: 'The Effective Coaching path helps you develop your skills as a coach and mentor. You will learn to provide effective feedback, help others set and achieve goals, and develop your coaching style.',
    objectives: [
      'Develop active listening skills',
      'Learn to provide constructive feedback',
      'Help others set and achieve goals',
      'Develop your coaching style',
      'Build trust and rapport with coachees'
    ],
    projectsList: [
      { title: 'Introduction to Coaching', description: 'Understand the fundamentals of coaching.' },
      { title: 'Active Listening', description: 'Develop active listening skills.' },
      { title: 'Powerful Questions', description: 'Learn to ask questions that provoke thought.' },
      { title: 'Goal Setting', description: 'Help others set and achieve meaningful goals.' }
    ]
  },
  // Add other pathways as needed
};

type PathwayId = keyof typeof pathwayData;

export async function generateMetadata({
  params,
}: {
  params: { pathwayId: string };
}): Promise<Metadata> {
  const pathway = pathwayData[params.pathwayId as PathwayId];
  
  if (!pathway) {
    return {
      title: 'Pathway Not Found',
    };
  }

  return {
    title: `${pathway.title} | Pathways`,
    description: pathway.description,
  };
}

export default function PathwayPage({
  params,
}: {
  params: { pathwayId: string };
}) {
  const pathway = pathwayData[params.pathwayId as PathwayId];

  if (!pathway) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className={`bg-gradient-to-r ${pathway.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Link 
            href="/pathways" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Pathways
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{pathway.title}</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl">{pathway.overview}</p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-5xl mb-2 text-center">{pathway.icon}</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{pathway.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  <span>{pathway.level}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{pathway.projects} Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Path</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {pathway.overview}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Learning Objectives</h3>
              <ul className="space-y-2 mb-8">
                {pathway.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Projects</h3>
              <div className="space-y-4">
                {pathway.projectsList.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{project.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Path Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="text-gray-900 dark:text-white">{pathway.duration}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty</p>
                  <p className="text-gray-900 dark:text-white">{pathway.level}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Projects</p>
                  <p className="text-gray-900 dark:text-white">{pathway.projects} Core Projects</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    href="/join" 
                    className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
                  >
                    Start This Path
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Paths */}
      <div className="bg-gray-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(pathwayData)
              .filter(([id]) => id !== params.pathwayId)
              .slice(0, 3)
              .map(([id, path]) => (
                <Link 
                  key={id} 
                  href={`/pathways/${id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${path.color} flex items-center justify-center text-2xl mb-4`}>
                        {path.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#8B0000] dark:group-hover:text-[#FF6B6B] transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {path.description}
                      </p>
                      <div className="text-[#8B0000] dark:text-[#FF6B6B] font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
