import React from 'react';
import { Target, User, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology and innovation, I strive to create solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Career Objective */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Career Objective</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Seeking an entry-level role in Cloud Computing, Web Development, Artificial Intelligence, and Blockchain Security to apply my technical knowledge, tackle real-world challenges, and contribute to innovative solutions within a collaborative team environment.
            </p>
          </div>

          {/* Profile Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <User className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Profile Summary</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I'm someone who adapts quickly to new technologies and environments. I enjoy solving problems and always look for better ways to do things. I work well in teams, communicate clearly, and take initiative when needed. I manage my time effectively, pay attention to detail, and always stay committed to delivering quality work.
            </p>
          </div>

          {/* Personal Interests */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <Heart className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Personal Interests</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I am passionate about creating and building new projects that push the boundaries of technology and provide practical solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am interested in exploring cloud computing platforms and applying artificial intelligence to develop scalable and intelligent systems.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 font-medium">Hobbies:</p>
                <p className="text-gray-600">Dancing, Sports, Listening to music</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Details</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-500 font-medium">Date of Birth</p>
              <p className="text-gray-800 font-semibold">23rd October 2004</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-medium">Languages</p>
              <p className="text-gray-800 font-semibold">Telugu, English, Hindi</p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <p className="text-gray-500 font-medium">Address</p>
              <p className="text-gray-800 font-semibold">Giddalur, Prakasam, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;