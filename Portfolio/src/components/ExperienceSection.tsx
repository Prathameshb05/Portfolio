
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceSection = () => {
  const { theme } = useTheme();
  
  const experiences = [
   {
  title: "Software Developer Intern",
  company: "Pawar Technology Services",
  duration: "March 2025 – Present",
  type: "Internship",
  responsibilities: [
    "Building responsive UIs using React to enhance user experience.",
    "Participating in agile processes, code reviews, and sprint planning.",
    "Writing unit and integration tests to ensure code quality.",
    "Connected frontend to Firebase backend, enabling real-time data updates for 500+ active sessions",
    "Integrated Framer Motion and advanced CSS animations, enhancing user engagement by 20%.",
  ],
  technologies: [
    "Java", "Spring Boot", "React.js", "MySQL", "FireBase", "HTML5", "CSS3", "GitHub", "VS Code"
  ]
}

  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return theme === 'dark' ? 'bg-red-500 text-white' : 'bg-red-600 text-white';
      case 'Training': return theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white';
      case 'Freelance': return theme === 'dark' ? 'bg-white text-black' : 'bg-red-600 text-white';
      default: return theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white';
    }
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const accentColor = theme === 'dark' ? 'text-red-500' : 'text-red-600';
  const secondaryText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const cardBg = theme === 'dark' ? 'bg-black/10 border-white/10' : 'bg-white/90 border-red-200/50';
  const techBg = theme === 'dark' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-800 border-red-300';

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
            My <span className={accentColor}>Experience</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-red-500' : 'bg-red-600'}`}></div>
          <p className={`text-lg max-w-2xl mx-auto ${secondaryText}`}>
            As a fresher, I'm currently gaining valuable experience in the software development field
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-12"
            >
              <div className="flex justify-center">
                <div className={`backdrop-blur-md border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl w-full ${cardBg}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                    <span className={`text-sm font-medium ${secondaryText}`}>
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${textColor}`}>
                    {exp.title}
                  </h3>
                  <h4 className={`text-lg font-semibold mb-4 ${accentColor}`}>
                    {exp.company}
                  </h4>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className={`text-sm ${secondaryText}`}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-medium border ${techBg}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
