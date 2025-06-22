import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech. in Computer Science and Engineering",
      specialization: "Cloud Computing",
      institution: "Alliance University, Bengaluru",
      duration: "Sep 2022 – May 2026",
      gpa: "7.2/10.0",
      percentage: "72.00%",
      coursework: [
        "Cloud Computing", "OOPS", "Operating Systems", "Data Structures & Algorithms",
        "Cloud Security", "Java Full Stack Development", "Deep Learning",
        "Software Engineering And Agile Development", "Parallel And Distributed Computing",
        "Theory of Computation", "Compiler Design", "Computer Networks"
      ]
    },
    {
      degree: "Class 12",
      institution: "Sree Jeevana Jyothi Junior College, Andhra Pradesh",
      duration: "2020-22",
      gpa: "6.11",
      percentage: "61.10%"
    },
    {
      degree: "Class 10",
      institution: "Surya Vidya Nikethan, Andhra Pradesh",
      duration: "2019-20",
      gpa: "8.18",
      percentage: "81.83%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                      {edu.specialization && (
                        <p className="text-lg text-blue-600 font-medium">Focus Area: {edu.specialization}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2 text-blue-500" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-2 text-blue-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <BookOpen size={18} className="mr-2 text-purple-500" />
                        <span className="font-semibold text-gray-700">Coursework:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:ml-8 flex flex-col items-center lg:items-end space-y-4">
                  <div className="text-center lg:text-right">
                    <p className="text-3xl font-bold text-blue-600">{edu.gpa}</p>
                    <p className="text-gray-500">GPA</p>
                  </div>
                  <div className="text-center lg:text-right">
                    <p className="text-2xl font-bold text-purple-600">{edu.percentage}</p>
                    <p className="text-gray-500">Percentage</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;