import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SSR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/GodiSaiSantoshReddy"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-santosh-7a9688262/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Godisaisantoshreddy@gmail.com"
              className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
              <a href="https://github.com/GodiSaiSantoshReddy" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-600">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sai-santosh-7a9688262/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Godisaisantoshreddy@gmail.com" className="p-2 text-gray-700 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;