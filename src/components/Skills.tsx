import React from 'react';
import { Code, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Python", "Java", "C++", "HTML", "SQL"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="text-purple-600" size={24} />,
      skills: ["React.js", "Node.js", "Django", "FastAPI", "Full Stack Java"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & Platforms",
      icon: <Cloud className="text-green-600" size={24} />,
      skills: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Firebase"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: ["Visual Studio Code", "Jupyter Notebook", "Google Colab", "GitHub", "Mailtrap", "Ganache", "Remix IDE"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Databases",
      icon: <Database className="text-indigo-600" size={24} />,
      skills: ["PostgreSQL", "SQL"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern technologies and development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-full shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transform transition-all duration-1000 ease-out group-hover:scale-x-100 origin-left`}
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;