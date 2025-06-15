
import React, { useEffect, useState } from 'react';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing...",
    "Loading Portfolio...",
    "Setting up Experience...",
    "Preparing Projects...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Name animation */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-pulse-glow">
            <span className="gradient-text animate-text-shimmer bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-[length:200%_auto]">
              PB
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-4 animate-fade-in-up">
            Full Stack Java Developer
          </p>
        </div>

        {/* Loading spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-t-red-500 border-r-red-500 rounded-full animate-spin"
          ></div>
          <div className="absolute inset-4 border-2 border-gray-600 rounded-full"></div>
          <div 
            className="absolute inset-4 border-2 border-t-red-400 rounded-full animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">
            {progress}%
          </div>
        </div>

        {/* Loading text animation */}
        <div className="h-8">
          <p className="text-lg text-gray-300 animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4">
        <div className="w-12 h-12 border-l-2 border-t-2 border-red-500 animate-pulse"></div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 border-r-2 border-t-2 border-red-500 animate-pulse"></div>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="w-12 h-12 border-l-2 border-b-2 border-red-500 animate-pulse"></div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-12 h-12 border-r-2 border-b-2 border-red-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
