
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const getNavStyles = () => {
    if (isScrolled) {
      return theme === 'dark' 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg border-b border-red-500/20' 
        : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-red-500/20';
    }
    return 'bg-transparent';
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const accentColor = theme === 'dark' ? 'text-red-500' : 'text-red-600';
  const hoverColor = theme === 'dark' ? 'hover:text-red-500' : 'hover:text-red-600';
  const mobileButtonColor = theme === 'dark' ? 'bg-white' : 'bg-gray-800';

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${getNavStyles()}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-xl md:text-2xl font-bold ${textColor}`}>
            <span className={accentColor}>P</span>B
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors duration-300 capitalize font-medium ${
                  theme === 'dark' ? 'text-gray-300 hover:text-red-500' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`relative group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-gray-800/70 hover:bg-gray-700/80 border border-gray-600/50' 
                  : 'bg-white/70 hover:bg-gray-50/80 border border-gray-200/50 shadow-md'
              }`}
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                <Sun 
                  className={`absolute w-5 h-5 transition-all duration-300 transform ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100 text-amber-500' 
                      : 'opacity-0 rotate-180 scale-50 text-gray-400'
                  }`} 
                />
                <Moon 
                  className={`absolute w-5 h-5 transition-all duration-300 transform ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100 text-red-200' 
                      : 'opacity-0 -rotate-180 scale-50 text-gray-600'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/70 hover:bg-gray-700/80 border border-gray-600/50' 
                  : 'bg-white/70 hover:bg-gray-50/80 border border-gray-200/50'
              }`}
              aria-label="Toggle theme"
            >
              <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                <Sun 
                  className={`absolute w-4 h-4 transition-all duration-300 transform ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100 text-amber-500' 
                      : 'opacity-0 rotate-180 scale-50 text-gray-400'
                  }`} 
                />
                <Moon 
                  className={`absolute w-4 h-4 transition-all duration-300 transform ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100 text-red-200' 
                      : 'opacity-0 -rotate-180 scale-50 text-gray-600'
                  }`} 
                />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`${mobileButtonColor} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`${mobileButtonColor} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`${mobileButtonColor} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="pt-4 space-y-4">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left transition-colors duration-300 capitalize font-medium ${hoverColor} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
