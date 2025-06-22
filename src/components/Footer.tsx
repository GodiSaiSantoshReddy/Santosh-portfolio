import React from 'react';
import { Heart, Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Godi Sai Santosh Reddy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate Computer Science student specializing in Cloud Computing, AI, and innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="block text-gray-400 hover:text-blue-400 transition-colors">Education</a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#achievements" className="block text-gray-400 hover:text-blue-400 transition-colors">Achievements</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:Godisaisantoshreddy@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                <span>Godisaisantoshreddy@gmail.com</span>
              </a>
              <p className="text-gray-400">Bengaluru, Karnataka</p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/GodiSaiSantoshReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-santosh-7a9688262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.coursera.org/user/3a88432a3baba408240f8e8961c58b82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <BookOpen size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Godi Sai Santosh Reddy</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;