
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThreeBackground from "./components/ThreeBackground";

const queryClient = new QueryClient();

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        {theme === 'dark' ? (
          // Dark theme with clear image background
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/me.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 10%',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              width: '100vw',
              height: '100vh'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 animate-gradient-shift"></div>
          </div>
        ) : (
          // Light theme with 3D models
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
            <ThreeBackground />
            <div className="absolute inset-0 bg-white/20"></div>
          </>
        )}
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
