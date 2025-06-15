
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = () => {
  window.open("https://drive.google.com/uc?export=download&id=11PLLIi6Nj50WHHwT5_FiXaN1yztuWSrv", "_blank");
};


  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Create particle elements with theme-aware colors
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 rounded-full animate-particle-float ${
        theme === 'dark' ? 'bg-red-500/30' : 'bg-red-500/40'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    />
  ));

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const accentColorClass = theme === 'dark' ? 'text-red-500' : 'text-red-600';
  const secondaryTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particles}
        
        {/* Geometric Shapes */}
        <div className={`absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 border-2 rotate-45 animate-float ${
          theme === 'dark' ? 'border-white/20' : 'border-red-500/30'
        }`}></div>
        <div className={`absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 border-2 animate-float ${
          theme === 'dark' ? 'border-red-500/30' : 'border-red-500/40'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-32 left-1/4 w-10 h-10 md:w-12 md:h-12 border-2 rotate-12 animate-float ${
          theme === 'dark' ? 'border-white/20' : 'border-red-500/30'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-down ${textColorClass}`}>
            <span className="block animate-zoom-in">Prathamesh</span>
            <span className={`animate-text-glow animate-slide-up ${accentColorClass}`} style={{ animationDelay: '0.5s' }}>
              Bhagat
            </span>
          </h1>
          
          <h2 className={`text-lg md:text-xl lg:text-2xl mb-4 font-medium animate-slide-left ${secondaryTextClass}`} style={{ animationDelay: '1s' }}>
            Full Stack Java Developer
          </h2>
          
          <div className={`text-base md:text-lg lg:text-xl mb-6 space-x-1 md:space-x-2 animate-slide-right ${secondaryTextClass}`} style={{ animationDelay: '1.2s' }}>
            <span className={`hover:animate-pulse cursor-default ${accentColorClass}`}>Java</span> |
            <span className={`hover:animate-pulse cursor-default ${textColorClass}`}> Spring Boot</span> |
            <span className={`hover:animate-pulse cursor-default ${accentColorClass}`}> React</span> |
            <span className={`hover:animate-pulse cursor-default ${textColorClass}`}> Firebase</span>
          </div>
          
          <div className="relative inline-block">
            <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light animate-zoom-in ${secondaryTextClass}`} style={{ animationDelay: '1.5s' }}>
              I build <span className={`font-medium ${accentColorClass}`}>scalable</span>, 
              <span className={`font-medium ${accentColorClass}`}> secure</span>, and 
              <span className={`font-medium ${accentColorClass}`}> elegant</span> web applications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '2s' }}>
            <Button 
              onClick={downloadResume}
              className={`px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-red-500 hover:bg-red-600 text-white hover:shadow-red-500/25' 
                  : 'bg-red-600 hover:bg-red-700 text-white hover:shadow-red-600/25'
              }`}
            >
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className={`px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden ${
                theme === 'dark'
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
              }`}
            >
              <span className="relative z-10">View My Work</span>
              <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                theme === 'dark' ? 'bg-white' : 'bg-red-600'
              }`}></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
