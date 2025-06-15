import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/prathamesh-bhagat-2b624732b",
      label: "LinkedIn",
      isExternal: true,
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Prathameshb05",
      label: "GitHub",
      isExternal: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:prathameshb9199@gmail.com",
      label: "Email",
      isExternal: false,
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`py-12 relative border-t transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-black/40 backdrop-blur-md text-white border-white/20' 
        : 'bg-white/40 backdrop-blur-md text-gray-800 border-gray-200/50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span className="text-red-500">Prathamesh</span> Bhagat
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Full Stack Java Developer passionate about creating elegant, scalable web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.isExternal ? '_blank' : undefined}
                  rel={social.isExternal ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/10 text-gray-300 hover:text-red-500 hover:bg-white/20'
                      : 'bg-gray-100/70 text-gray-600 hover:text-red-500 hover:bg-gray-200/70'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className={`transition-colors duration-300 hover:underline underline-offset-2 text-left cursor-pointer w-full ${
                      theme === 'dark' ? 'text-gray-300 hover:text-red-500' : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Technologies</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Java', 'Spring Boot', 'React', 'Firebase', 'MySQL', 'GitHub'].map((tech) => (
                <span 
                  key={tech} 
                  className={`hover:text-red-500 transition-colors duration-300 cursor-default ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:prathameshb9199@gmail.com"
                className={`block hover:text-red-500 transition-colors duration-300 cursor-pointer ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                📧 prathameshb9199@gmail.com
              </a>
              <a 
                href="tel:+917875229458"
                className={`block hover:text-red-500 transition-colors duration-300 cursor-pointer ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                📱 +91 78752 29458
              </a>
              <span className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                📍 Pune, Maharashtra
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${
          theme === 'dark' ? 'border-white/20' : 'border-gray-200/50'
        }`}>
          <div className={`text-sm mb-4 md:mb-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Prathamesh Bhagat. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-500 rotate-12"></div>
      </div>
    </footer>
  );
};

export default Footer;
