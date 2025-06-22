import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, BookOpen } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Let's discuss opportunities and collaborate on innovative projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <MessageCircle className="mr-3 text-blue-400" size={28} />
                Let's Connect
              </h3>
              <p className="text-blue-200 leading-relaxed mb-8 text-center">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you're looking for a passionate developer or want to explore cutting-edge technologies together, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Email</p>
                  <a href="mailto:Godisaisantoshreddy@gmail.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    Godisaisantoshreddy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-green-500/20 rounded-full">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Phone</p>
                  <a href="tel:+917483606523" className="text-white font-semibold hover:text-green-400 transition-colors">
                    +91-7483606523
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Location</p>
                  <p className="text-white font-semibold">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/20">
              <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/GodiSaiSantoshReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-santosh-7a9688262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.coursera.org/user/3a88432a3baba408240f8e8961c58b82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <BookOpen size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;