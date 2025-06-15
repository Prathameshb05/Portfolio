
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge, ExternalLink, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CertificationSection = () => {
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

  const certifications = [
    {
      title: "Java Fullstack Development",
      issuer: "Testing Shastra, Pune",
      date: "2024",
      credentialId: "OCA-JSE8-2024",
      image: "/ts.webp",
      description: "This certification validates comprehensive training and hands-on project development using Java Fullstack Technologies, including frontend, backend, and database integration.",
      skills: ["Java Programming", "React", "HTML", "FireBase", "Hibernate", "JDBC", "MySQL", "VSCode", "GitHub", "Bootstrap", "SpringBoot", "Mavan"],
      verifyLink: "https://drive.google.com/file/d/1BEHYYG1iYYt_mHHETC0HdbjG4XqR-TuF/view?usp=sharing",
      status: "Active",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Future Skills Training in Core Java",
      issuer: "FUEL, Bhugaon",
      date: "2025",
      credentialId: "SPRING-2024",
      image: "/fuel.jpg",
      description: "Validates expertise in Spring Framework, Spring Boot, and enterprise application development.",
      skills: ["Java", "OOps", "Collections", "Abstraction", "Exceptions", "Multithreading"],
      verifyLink: "https://drive.google.com/file/d/1x6FNI7LO5q4BzIgYyYd-6J_GkYha6FGs/view?usp=sharing",
      status: "Active",
      gradient: "from-green-500 to-emerald-600"
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 border border-red-500/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rotate-45 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-500/10 rounded-full animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-10'
          } ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Professional <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">Certifications</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'animate-slide-reveal' : 'opacity-0 scale-x-0'}`} style={{ animationDelay: '0.3s' }}></div>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 scale-75'
          } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.5s' }}>
            Industry-recognized certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialId}
              className={`border shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
              } ${
                theme === 'dark' 
                  ? 'border-white/30 bg-black/30 backdrop-blur-xl hover:shadow-red-500/20' 
                  : 'border-gray-200/50 bg-white/90 backdrop-blur-xl hover:shadow-gray-400/30'
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.7}s` }}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Verify Button */}
                  <div className="absolute top-4 right-4">
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                    cert.status === 'Active' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-white/80 text-black'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-red-500/30 rotate-45 animate-float"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-red-500/30 animate-float-delayed"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="w-5 h-5 text-red-500" />
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 leading-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {cert.title}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Issued: {cert.date}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className={`text-xs font-mono ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    ID: {cert.credentialId}
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
