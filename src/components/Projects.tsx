import React from 'react';
import { ExternalLink, Calendar, Cpu, Shield, Train } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Advanced Keylogger with Anomaly Detection",
      date: "Nov 2024",
      description: "Implemented a real-time monitoring tool with keystroke logging, screen/audio capture, and anomaly detection using Isolation Forest. Designed for responsible monitoring in parental and educational environments, emphasizing safe digital usage.",
      technologies: ["Python", "Machine Learning", "Isolation Forest", "Real-time Processing"],
      icon: <Cpu className="text-blue-600" size={24} />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Based Personalized Study Planner",
      date: "Jan 2025",
      description: "Built a full-stack AI-powered study planner with FastAPI backend and React.js frontend, using reinforcement learning to personalize study schedules dynamically. Integrated gamification and an AI-driven counselling module to boost user engagement, motivation, and study discipline.",
      technologies: ["Python", "FastAPI", "React.js", "PostgreSQL", "Reinforcement Learning", "REST API"],
      icon: <Cpu className="text-purple-600" size={24} />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Blockchain-Backed Secure File Audit System",
      date: "Ongoing",
      description: "A cloud-integrated file auditing system secured by Ethereum blockchain and IPFS. It ensures tamper-proof tracking of file uploads, edits, and access logs using smart contracts. The system promotes transparency, data integrity, and trust in cloud-based file operations.",
      technologies: ["Blockchain", "Ethereum", "IPFS", "Smart Contracts", "Cloud Computing"],
      icon: <Shield className="text-green-600" size={24} />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Train Booking System",
      date: "Jan 2025",
      description: "Built a full-stack train ticket booking platform with real-time fare calculation, live seat updates, and secure payment integration. Features responsive design using React & TypeScript with dynamic UI for seamless user experience.",
      technologies: ["React", "TypeScript", "Real-time Updates", "Payment Integration"],
      icon: <Train className="text-indigo-600" size={24} />,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions showcasing my expertise in AI, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/GodiSaiSantoshReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;