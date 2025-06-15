
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgColor = theme === 'dark' ? 'bg-black/20' : 'bg-white/30';
  const cardBg = theme === 'dark' ? 'bg-black/30' : 'bg-white/50';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const accentColor = theme === 'dark' ? 'text-red-500' : 'text-red-600';
  const secondaryText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 border rounded-full animate-float ${
          theme === 'dark' ? 'border-red-500/20' : 'border-red-500/20'
        }`}></div>
        <div className={`absolute top-40 right-20 w-16 md:w-20 h-16 md:h-20 border rotate-45 animate-float-delayed ${
          theme === 'dark' ? 'border-white/10' : 'border-red-500/20'
        }`}></div>
        <div className={`absolute bottom-20 left-1/4 w-12 md:w-16 h-12 md:h-16 rounded-full animate-pulse-glow ${
          theme === 'dark' ? 'bg-red-500/10' : 'bg-red-500/10'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${textColor} ${isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">Me</span>
          </h2>
          <div className={`w-16 md:w-24 h-1 mx-auto transition-all duration-1000 ${
            theme === 'dark' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-red-500 to-red-600'
          } ${isVisible ? 'animate-slide-reveal' : 'opacity-0 scale-x-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`shadow-2xl border overflow-hidden backdrop-blur-xl transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl ${
            theme === 'dark' 
              ? 'border-white/20 bg-black/20 hover:shadow-red-500/20' 
              : 'border-red-200/50 bg-white/70 hover:shadow-red-500/20'
          } ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className={`md:w-1/3 backdrop-blur-sm border-b md:border-b-0 md:border-r relative overflow-hidden group ${
                  theme === 'dark' ? 'bg-black/30 border-white/20' : 'bg-white/60 border-red-200/30'
                }`}>
                  {/* Enhanced Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute top-4 left-4 w-6 md:w-8 h-6 md:h-8 border rotate-45 animate-float ${
                      theme === 'dark' ? 'border-white/30' : 'border-red-500/30'
                    }`}></div>
                    <div className={`absolute bottom-4 right-4 w-4 md:w-6 h-4 md:h-6 border animate-float-delayed ${
                      theme === 'dark' ? 'border-white/30' : 'border-red-500/30'
                    }`}></div>
                  </div>
                  
                  <div className="h-64 md:h-full w-full relative z-10">
                    <div className={`w-full h-full relative transition-all duration-700 ${isVisible ? 'animate-bounce-in' : 'opacity-0 scale-50'}`} style={{ animationDelay: '0.8s' }}>
                      {/* Mobile: Full container image, Desktop: Circular avatar */}
                      <div className="md:hidden w-full h-full">
                        <img 
                          src="/me.png" 
                          alt="Profile"
                          className="object-cover object-center w-full transition-all duration-500 group-hover:brightness-110"
                        />
                      </div>
                      <div className="hidden md:block w-full h-full flex items-center justify-center">
                        <div className="w-full h-full max-w-sm shadow-2xl transition-all duration-500 group-hover:scale-105  overflow-hidden">
                          <img 
                            src="/me.png" 
                            alt="Profile"
                            className="object-cover object-center transition-all duration-500 group-hover:brightness-110 w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`md:w-2/3 p-6 md:p-8 backdrop-blur-sm relative ${cardBg}`}>
                 <div className="space-y-4 md:space-y-6">
  <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.8s' }}>
    <h4 className={`text-lg md:text-xl font-semibold mb-3 relative group ${textColor}`}>
      <span className="relative z-10">Background & Passion</span>
      <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
        theme === 'dark' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-red-500 to-red-600'
      }`}></div>
    </h4>
    <p className={`leading-relaxed transition-colors duration-300 ${secondaryText} hover:${textColor}`}>
      I'm <span className="font-medium text-red-500">Prathamesh Kailas Bhagat</span>, a dedicated and detail-oriented Full Stack Developer with a strong foundation in modern web technologies. 
      I hold a <span className="font-medium text-red-500">Bachelor’s degree in Computer Engineering</span>, which has equipped me with a deep understanding of programming principles, software architecture, and system design.
    </p>
  </div>

  <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '1s' }}>
    <h4 className={`text-lg md:text-xl font-semibold mb-3 group ${textColor}`}>
      <span className="relative">
        Skills & Focus
        <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
          theme === 'dark' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-red-500 to-red-600'
        }`}></div>
      </span>
    </h4>
    <p className={`leading-relaxed transition-colors duration-300 ${secondaryText} hover:${textColor}`}>
      My expertise spans both <span className="font-medium text-red-500">frontend and backend development</span>. 
      I have hands-on experience with <span className="font-medium text-red-500">React.js, Firebase, JavaScript, HTML, and CSS</span>, and I enjoy turning ideas into real-world, scalable applications. 
      I approach every project with a focus on user experience, performance, and clean code.
    </p>
  </div>

  <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.2s' }}>
    <p className={`leading-relaxed transition-colors duration-300 ${secondaryText} hover:${textColor}`}>
      I believe in writing clean, maintainable, and scalable code. I'm always eager to explore new tools and technologies to stay ahead in this fast-paced industry. 
      Whether collaborating in a team or working independently, I strive to deliver software that not only works flawlessly but also delivers real value to users.
    </p>
  </div>
</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
