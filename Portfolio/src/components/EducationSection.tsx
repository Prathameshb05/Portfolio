
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const EducationSection = () => {
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

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Kaviyatri Bahinabai Chaudhari North Maharashtra University.",
      location: "Jalgaon, India",
      duration: "2021 - 2025",
      grade: "CGPA: 7.67/10",
      status: "Pursuing",
      image: "/deg.webp",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.",
      subjects: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Development", "Computer Networks", "Cyber Security", "Cyber Law"],
      achievements: ["Dean's List - 2022, 2023", "Best Project Award - Web Development Course", "Technical Society Member"],
      gradient: "from-red-500 to-rose-600"
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Jr Collage",
      location: "Muktainagar, India", 
      duration: "2020 - 2021",
      grade: "Percentage: 83.50%",
      status: "Completed",
      image: "/12.webp",
      description: "Specialized in Science stream with Mathematics, Physics, and Chemistry as core subjects.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Information Technology", "Biology", "English"],
      achievements: ["School Topper in Computer Science", "Science Olympiad Winner", "Academic Excellence Award"],
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-10 left-10 w-40 h-40 border rounded-full animate-rotate-slow ${
          theme === 'dark' ? 'border-red-500/20' : 'border-red-400/30'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-24 h-24 border rotate-45 animate-float ${
          theme === 'dark' ? 'border-white/20' : 'border-gray-400/30'
        }`}></div>
        <div className={`absolute top-1/2 right-1/4 w-32 h-32 rounded-full animate-pulse-glow ${
          theme === 'dark' ? 'bg-red-500/10' : 'bg-red-400/10'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-10'
          } ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-red-500 bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">Education</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'animate-slide-reveal' : 'opacity-0 scale-x-0'}`} style={{ animationDelay: '0.3s' }}></div>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 scale-75'
          } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} style={{ animationDelay: '0.5s' }}>
            My academic journey and educational achievements that have shaped my technical foundation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className={`border shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
              } ${
                theme === 'dark' 
                  ? 'border-white/30 bg-black/30 backdrop-blur-xl hover:shadow-red-500/20' 
                  : 'border-gray-300/50 bg-white/95 backdrop-blur-xl hover:shadow-red-400/20'
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.7}s` }}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img 
                    src={edu.image} 
                    alt={edu.degree}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                    edu.status === 'Pursuing' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-green-500/80 text-white'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-4 right-4 w-8 h-8 border rotate-45 animate-float ${
                    theme === 'dark' ? 'border-red-500/30' : 'border-red-400/40'
                  }`}></div>
                  <div className={`absolute bottom-4 left-4 w-6 h-6 border animate-float-delayed ${
                    theme === 'dark' ? 'border-red-500/30' : 'border-red-400/40'
                  }`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-red-500" />
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>
                      {edu.institution}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 leading-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-red-500" />
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Key Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject) => (
                        <span 
                          key={subject}
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${
                            theme === 'dark' 
                              ? 'bg-red-500/20 text-red-400 border-red-500/30' 
                              : 'bg-red-100 text-red-700 border-red-300'
                          }`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className={`text-xs flex items-start gap-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default EducationSection;
