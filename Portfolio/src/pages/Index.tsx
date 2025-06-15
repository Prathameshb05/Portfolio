
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationSection from '../components/CertificationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import LoadingPage from '../components/LoadingPage';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen font-poppins transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* <ThemeToggle /> */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
