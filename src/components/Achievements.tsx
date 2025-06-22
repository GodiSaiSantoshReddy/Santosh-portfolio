import React from 'react';
import { Award, Trophy, Users, Presentation, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Finalist",
      description: "Reached final round at Alliance University for proposing a Zero-Trust Disaster Recovery model",
      icon: <Trophy className="text-yellow-600" size={24} />,
      category: "Competition"
    },
    {
      title: "Student Coordinator",
      description: "Techno-Fair coordinator for 2023 and 2024, organizing technical events and workshops",
      icon: <Users className="text-blue-600" size={24} />,
      category: "Leadership"
    },
    {
      title: "Startup Accelerator Host",
      description: "Hosted the Startup Accelerator session at the Alliance Alumni Meet 2023",
      icon: <Presentation className="text-purple-600" size={24} />,
      category: "Event Management"
    },
    {
      title: "Debate Runner-up",
      description: "Achieved runner-up position in university debate competition",
      icon: <Award className="text-green-600" size={24} />,
      category: "Academic"
    }
  ];

  const certifications = [
    "C++ Object Basics - Coursera",
    "Introduction to Cloud Computing - Coursera",
    "Data Structures from UC San Diego - Coursera",
    "Google Cloud Preparing for Professional Data Engineer Journey - Coursera",
    "Cloud Virtualization, Containers and APIs - Coursera",
    "Google Cloud Cybersecurity Professional Certificate - Coursera",
    "IBM Information Technology (IT) and Cloud Fundamentals - Coursera",
    "Cloud Computing Applications (Part 1 & 2) - Coursera",
    "Microsoft Azure Fundamentals (AZ-900)"
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and continuous learning milestones
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{achievement.title}</h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Certificate className="text-blue-600" size={32} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Participation */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Participation</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Technical Workshops</h4>
              <p className="text-gray-600">Participated in multiple technical workshops and online webinars on Cloud, AI & Blockchain</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">National Competitions</h4>
              <p className="text-gray-600">Participated in National-Level Hackathons and Ideathons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;