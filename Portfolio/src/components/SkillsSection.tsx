
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const skillCategories = {
    Frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Responsive Design', icon: '📱' }
    ],
    Backend: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'REST API', icon: '🌐' },
      { name: 'Hibernate', icon: '🔗' },
      { name: 'JDBC', icon: '🗃️' },
    ],
    Database: [
      { name: 'MySQL', icon: '🗄️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'MongoDB', icon: '🍃' },
    ],
    Tools: [
      { name: 'GitHub', icon: '🐙' },
      { name: 'Eclipse', icon: '🌙' },
      { name: 'IntelliJ IDEA', icon: '💡' },
      { name: 'Spring Boot Tool Suite', icon: '🛠️' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Postman', icon: '📮' }
    ]
  };

  const SkillItem = ({ skill }: { skill: any }) => (
    <div 
      className="mb-4 cursor-pointer group"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 relative overflow-hidden group border border-transparent ${
        theme === 'dark' 
          ? 'hover:bg-white/10 hover:shadow-lg hover:shadow-red-500/10 hover:border-red-500/20' 
          : 'hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-300/50 hover:border-gray-300/50 bg-white/80'
      }`}>
        <span className="text-2xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
          {skill.icon}
        </span>
        <div className="flex-1">
          <span className={`font-medium text-lg transition-colors duration-300 relative ${
            theme === 'dark' 
              ? 'text-white group-hover:text-red-400' 
              : 'text-gray-800 group-hover:text-red-600'
          }`}>
            {skill.name}
          </span>
        </div>
        
        <div className={`absolute inset-0 transform ${hoveredSkill === skill.name ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} transition-all duration-500 origin-left rounded-xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent' 
            : 'bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent'
        }`}></div>
        
        <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${
          theme === 'dark' ? 'bg-red-500' : 'bg-red-500'
        }`}></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'from-red-500 to-red-600' 
                : 'from-red-600 to-red-700'
            }`}>Skills</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-red-500 to-red-600' 
              : 'bg-gradient-to-r from-red-500 to-red-600'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div 
              key={category}
              className={`backdrop-blur-xl border rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-black/20 border-white/20 hover:shadow-red-500/20' 
                  : 'bg-white/90 border-gray-200/50 hover:shadow-gray-400/30'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center relative z-10 ${
                theme === 'dark' 
                  ? 'text-white' 
                  : 'text-gray-800'
              }`}>
                {category}
              </h3>
              <div className="relative z-10">
                {skills.map((skill) => (
                  <SkillItem 
                    key={skill.name} 
                    skill={skill} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
