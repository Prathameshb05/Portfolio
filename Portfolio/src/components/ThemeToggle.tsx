
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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
              ? 'opacity-100 rotate-0 scale-100 text-blue-200' 
              : 'opacity-0 -rotate-180 scale-50 text-gray-600'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
