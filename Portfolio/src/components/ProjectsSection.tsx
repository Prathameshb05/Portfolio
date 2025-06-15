import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
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

  const projects = [
    {
      title: "CRM Web Application",
      description: "A comprehensive Customer Relationship Management system with user authentication, dashboard analytics, and client management features.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      features: [
        "Secure user authentication & authorization",
        "Interactive dashboard with analytics", 
        "Complete client management system",
        "Real-time data updates",
        "Responsive design"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      liveLink: "https://example.com/crm-demo",
      githubLink: "https://github.com/example/crm-application",
      status: "In Development",
      gradient: "from-blue-500 to-purple-600",
      category: "java"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["Spring Boot", "React", "Firebase", "Stripe API", "Redux"],
      features: [
        "Product catalog with search & filters",
        "Shopping cart & wishlist functionality",
        "Secure payment processing",
        "Order tracking system",
        "Admin panel for inventory management"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      liveLink: "https://example.com/ecommerce-demo",
      githubLink: "https://github.com/example/ecommerce-platform",
      status: "In Development",
      gradient: "from-green-500 to-emerald-600",
      category: "spring boot"
    },
    {
      title: "Shilpkar",
      description: "A modern, responsive React-based single-page website for an architecture and design firm. This project showcases services, projects, blogs, and contact information in a clean and interactive layout.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
       "Sticky Navigation Bar with hamburger menu",
       "Smooth scroll navigation between sections",
       "Beautiful hero section with banner"
      ],
      image: "/shilpkar.png",
      liveLink: "https://shilpkar-webinar.netlify.app/",
      githubLink: "https://github.com/Prathameshb05/Shilpkar-Webinar.git",
      status: "Completed",
      gradient: "from-pink-500 to-rose-600",
      category: "frontend"
    },
      {
      title: "Proactive Against Phishing Attack",
      description: "Proactive Against Phishing Attack is a frontend-based project built using HTML, CSS, and JavaScript to detect and prevent phishing threats in real-time. It scans user-submitted URLs, checks them against known phishing patterns, and alerts users if suspicious behavior is detected — all within the browser.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Pattern matching to detect suspicious links",
        "Visual warnings for potentially malicious websites",
        "Clean and responsive user interface"
      ],
      image: "/proactive.png",
      liveLink: "https://proactive-against-phishing-attack.netlify.app/",
      githubLink: "https://github.com/Prathameshb05/ProActive-Against-Phishing-Attack.git",
      status: "Completed",
      gradient: "from-pink-500 to-rose-600",
      category: "frontend"
    }
  ];

  // Filter categories
  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'java', label: 'Java' },
    { key: 'spring boot', label: 'Spring Boot' }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 border border-red-500/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rotate-45 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-500/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-red-500/30 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-10'
          } ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Featured <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'animate-slide-reveal' : 'opacity-0 scale-x-0'}`} style={{ animationDelay: '0.3s' }}></div>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 scale-75'
          } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.5s' }}>
            Showcasing my technical skills through real-world applications and innovative solutions
          </p>
          
          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-3 mt-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.7s' }}>
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedFilter === category.key ? "default" : "outline"}
                onClick={() => setSelectedFilter(category.key)}
                className={`transition-all duration-300 ${
                  selectedFilter === category.key 
                    ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25' 
                    : theme === 'dark'
                      ? 'border-red-500/30 text-white hover:bg-red-500/20 hover:border-red-500/50'
                      : 'border-red-500/30 text-gray-800 hover:bg-red-500/10 hover:border-red-500/50'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`border shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
              } ${
                theme === 'dark' 
                  ? 'border-white/30 bg-black/30 backdrop-blur-xl hover:shadow-red-500/20' 
                  : 'border-gray-200/50 bg-white/90 backdrop-blur-xl hover:shadow-gray-400/30'
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.9}s` }}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-white/80 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-red-500/30 rotate-45 animate-float"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-red-500/30 animate-float-delayed"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500/20 rounded-full animate-pulse-glow"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Key Features:</h4>
                    <ul className={`text-sm space-y-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-2 animate-pulse-glow"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      <ArrowUp className="w-4 h-4 rotate-45" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark' 
                          ? 'border-white text-white hover:bg-white hover:text-black' 
                          : 'border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
