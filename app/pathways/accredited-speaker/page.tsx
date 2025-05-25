import { Mic, Award, Users, Calendar, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { SubNavigation } from '@/components/sub-navigation';

export default function AccreditedSpeakerProgram() {
  const subNavItems = [
    { href: '/pathways/overview', label: 'Overview' },
    { href: '/pathways/accredited-speaker', label: 'Accredited Speaker Program' },
    { href: '/pathways/learning-experience', label: 'Pathways Learning Experience' },
  ];

  const programBenefits = [
    {
      title: 'Professional Development',
      description: 'Enhance your speaking skills to a professional level.'
    },
    {
      title: 'Industry Recognition',
      description: 'Gain recognition as an accredited speaker in your field.'
    },
    {
      title: 'Exclusive Opportunities',
      description: 'Access to premium speaking engagements and events.'
    },
    {
      title: 'Mentorship',
      description: 'Receive guidance from experienced speakers and mentors.'
    }
  ];

  const programSteps = [
    {
      step: '1',
      title: 'Application',
      description: 'Submit your application with speaking samples.'
    },
    {
      step: '2',
      title: 'Evaluation',
      description: 'Undergo a comprehensive evaluation process.'
    },
    {
      step: '3',
      title: 'Training',
      description: 'Complete specialized training modules.'
    },
    {
      step: '4',
      title: 'Certification',
      description: 'Receive your accredited speaker certification.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Premium Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accredited Speaker Program</h1>
          <p className="text-xl max-w-3xl mx-auto">Elevate your public speaking to a professional level with our exclusive certification program</p>
        </div>
      </section>

      {/* Sub Navigation */}
      <SubNavigation items={subNavItems} basePath="/pathways" />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Become a Certified Speaker</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our Accredited Speaker Program is designed for individuals who want to take their public speaking to the highest level.
              Through rigorous training and evaluation, you'll develop the skills and confidence to speak professionally in any setting.
            </p>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md inline-block max-w-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1">Next Program Starts</h3>
                  <p className="text-gray-600 dark:text-gray-300">June 15, 2024 - Limited seats available</p>
                </div>
                <button className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center whitespace-nowrap">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Program Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {programBenefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-[#8B0000] dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Structure */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Program Structure</h2>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-slate-700"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {programSteps.map((step, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B0000] text-white flex items-center justify-center text-xl font-bold z-10">
                      {step.step}
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'mr-12 text-right' : 'ml-12'}`}>
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Become an Accredited Speaker?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our exclusive program and take the first step toward becoming a recognized professional speaker.
              Limited spots available for our next cohort.
            </p>
            <button className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg font-medium">
              Apply for the Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
