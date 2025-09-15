/**
 * ARK Portfolio - Main Application Component
 * 
 * Copyright (c) 2025 ARK650
 * Licensed under MIT License with Attribution Requirement
 * 
 * This file is part of ARK Portfolio, a modern interactive portfolio website.
 * Original repository: https://github.com/ARK650/ark-portfolio
 * 
 * You may use this code with proper attribution. See LICENSE file for details.
 */

// @ts-nocheck
/**
 * MAIN APPLICATION COMPONENT - App.tsx
 * 
 * This is the root component of the portfolio website. It orchestrates all the major sections
 * and provides the theme context for light/dark mode switching.
 * 
 * STRUCTURE:
 * 1. Theme Provider - Wraps entire app for theme switching functionality
 * 2. Loading Screen - Shows initial loading animation
 * 3. Navigation - Fixed theme toggle and social links
 * 4. Main Sections - Hero, About, Tech Stack, Projects, Contact
 * 5. Background Effects - Animated background elements and floating particles
 * 
 * CUSTOMIZATION GUIDE:
 * - To add new sections: Import component, then add it in the main container
 * - To change section order: Rearrange the component order in the JSX
 * - To modify background: Update gradients in the background divs
 * - To adjust animations: Modify Framer Motion props in motion components
 * - To change loading behavior: Update useState hook and loading logic
 * 
 * THEME INTEGRATION:
 * - All components automatically respond to theme changes via ThemeProvider
 * - Theme persists across browser sessions using localStorage
 * - Toggle is accessible via ThemeToggle component in navigation
 * 
 * PERFORMANCE NOTES:
 * - Uses React.lazy and Suspense for code splitting (can be added if needed)
 * - Framer Motion animations are optimized for 60fps performance
 * - Background effects use transform for GPU acceleration
 */

// Core React hooks for state management and side effects
import { useEffect, useState } from "react";

// Framer Motion - Animation library for smooth, interactive animations
// useScroll: Tracks scroll position for scroll-based animations
// useTransform: Transforms scroll values into animation values
// motion: Animatable HTML elements
// AnimatePresence: Handles enter/exit animations
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// CUSTOM COMPONENTS - All portfolio sections and utilities
import { ThemeProvider } from "./components/ThemeProvider"; // Theme context for light/dark mode
import LoadingScreen from "./components/LoadingScreen";    // Initial loading animation
import ThemeToggle from "./components/ThemeToggle";        // Light/dark mode toggle button
import SocialLinks from "./components/SocialLinks";        // Social media links sidebar
import FloatingElements from "./components/FloatingElements"; // Animated background elements
import IntroScene from "./components/IntroScene";          // Hero/landing section
import AboutScene from "./components/AboutScene";          // About me section with timeline
import TechStackScene from "./components/TechStackScene";  // Tech skills with interactive cards
import ProjectsScene from "./components/ProjectsScene";    // Portfolio projects showcase
import ContactScene from "./components/ContactScene";      // Contact form and information

// Development logging for debugging (remove in production)
console.log("App.tsx loaded!");

/**
 * MAIN APP COMPONENT
 * 
 * This component manages:
 * 1. Scene transitions - Smooth scrolling between portfolio sections
 * 2. Scroll animations - Parallax and transform effects based on scroll position
 * 3. Loading state - Shows loading screen before content appears
 * 4. Background effects - Animated elements that respond to scroll
 * 
 * SCENE STRUCTURE:
 * Scene 0: IntroScene (Hero/Landing)
 * Scene 1: AboutScene (About me with timeline)
 * Scene 2: TechStackScene (Skills and technologies)
 * Scene 3: ProjectsScene (Portfolio projects)
 * Scene 4: ContactScene (Contact form and info)
 * 
 * SCROLL SYSTEM:
 * - Uses Framer Motion's useScroll to track scroll progress (0-1)
 * - Transforms scroll position into scene transitions
 * - Each scene has opacity and position animations based on scroll
 */
const MainApp = () => {
  // STATE MANAGEMENT
  const [currentScene, setCurrentScene] = useState(0); // Track which section is active
  const { scrollYProgress } = useScroll(); // Get scroll position (0 = top, 1 = bottom)
  
  // Development logging (can be removed for production)
  console.log("MainApp rendering, currentScene:", currentScene);

  // SCROLL-BASED ANIMATIONS
  // Transform scroll progress to scene transitions (5 scenes total: 0-4)
  const sceneProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 5]
  );

  useEffect(() => {
    const unsubscribe = sceneProgress.on("change", (latest) => {
      setCurrentScene(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [sceneProgress]);

  // Parallax effects for different elements
  const parallaxElements = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Background color transitions based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)",
      "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    ]
  );

  // Dark mode background overlay
  const darkOverlay = useTransform(scrollYProgress, [0, 1], ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Single unified background gradient container */}
      <motion.div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: backgroundColor,
          zIndex: -1,
        }}
      />

      {/* Dark mode overlay */}
      <motion.div
        className="fixed inset-0 w-full h-full pointer-events-none dark:bg-black/80"
        style={{
          zIndex: -1,
        }}
      />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Social Links */}
      <SocialLinks />

      {/* Floating decorative elements with parallax */}
      <motion.div style={{ y: parallaxSlow }}>
        <FloatingElements />
      </motion.div>

      {/* Navigation dots */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2, 3, 4].map((scene) => (
          <motion.div
            key={scene}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentScene === scene
                ? "bg-purple-500 scale-150 shadow-lg"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={
              currentScene === scene
                ? {
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.4)",
                      "0 0 0 10px rgba(168, 85, 247, 0)",
                      "0 0 0 0 rgba(168, 85, 247, 0.4)",
                    ],
                  }
                : {}
            }
            transition={
              currentScene === scene
                ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {}
            }
            onClick={() => {
              const targetY =
                (scene / 5) *
                (document.documentElement.scrollHeight - window.innerHeight);
              window.scrollTo({ top: targetY, behavior: "smooth" });
            }}
          />
        ))}
      </motion.div>

      {/* Scene progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          scaleX: scrollYProgress,
        }}
      />

      {/* Scrollable content container */}
      <div className="relative w-full">
        {/* Scene 1: Intro */}
        <div className="h-screen w-full">
          <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.15, 0.25],
                [1, 1, 0]
              ),
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.95]),
              y: parallaxSlow,
              zIndex: currentScene === 0 ? 10 : 1,
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <IntroScene />
            </div>
          </motion.div>
        </div>

        {/* Scene 2: About */}
        <div className="h-screen w-full">
          <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.15, 0.2, 0.35, 0.4],
                [0, 1, 1, 0]
              ),
              y: useTransform(scrollYProgress, [0.15, 0.2], [100, 0]),
              zIndex: currentScene === 1 ? 10 : 1,
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <AboutScene />
            </div>
          </motion.div>
        </div>

        {/* Scene 3: Tech Stack */}
        <div className="h-screen w-full">
          <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.35, 0.4, 0.55, 0.6],
                [0, 1, 1, 0]
              ),
              y: useTransform(scrollYProgress, [0.35, 0.4], [100, 0]),
              zIndex: currentScene === 2 ? 10 : 1,
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <TechStackScene />
            </div>
          </motion.div>
        </div>

        {/* Scene 4: Projects */}
        <div className="h-screen w-full">
          <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.55, 0.6, 0.75, 0.8],
                [0, 1, 1, 0]
              ),
              y: useTransform(scrollYProgress, [0.55, 0.6], [100, 0]),
              zIndex: currentScene === 3 ? 10 : 1,
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <ProjectsScene />
            </div>
          </motion.div>
        </div>

        {/* Scene 5: Contact */}
        <div className="h-screen w-full">
          <motion.div
            className="fixed inset-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              opacity: useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]),
              y: useTransform(scrollYProgress, [0.75, 0.8], [100, 0]),
              zIndex: currentScene === 4 ? 10 : 1,
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <ContactScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fun cursor follower with morphing shapes - with parallax */}
      <motion.div
        className="fixed pointer-events-none z-5 rounded-full opacity-40 mix-blend-multiply"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "25%", "50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: useTransform(scrollYProgress, [0, 1], ["5%", "95%"]),
          top: useTransform(scrollYProgress, [0, 1], ["15%", "85%"]),
          y: parallaxElements,
          width: "clamp(2rem, 4vw, 4rem)",
          height: "clamp(2rem, 4vw, 4rem)",
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              "linear-gradient(45deg, #ff6b6b, #feca57)",
              "linear-gradient(45deg, #4ecdc4, #45b7d1)",
              "linear-gradient(45deg, #a29bfe, #fd79a8)",
              "linear-gradient(45deg, #00b894, #00cec9)",
              "linear-gradient(45deg, #e17055, #fdcb6e)",
              "linear-gradient(45deg, #6c5ce7, #fd79a8)",
            ]
          ),
        }}
      />

      {/* Floating geometric shapes with enhanced parallax */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="fixed pointer-events-none z-5 opacity-20"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `clamp(1rem, ${1.5 + i * 0.5}vw, 3rem)`,
            height: `clamp(1rem, ${1.5 + i * 0.5}vw, 3rem)`,
            background: `hsl(${i * 45}, 70%, 70%)`,
            borderRadius: i % 2 === 0 ? "50%" : "0%",
            y: useTransform(scrollYProgress, [0, 1], [0, -150 - i * 20]),
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 20 - i * 3, 0],
            rotate: [0, 180 + i * 30, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Interactive sparkles with enhanced parallax */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="fixed pointer-events-none z-5"
          style={{
            left: `${10 + i * 16}%`,
            top: `${15 + (i % 2) * 70}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, -100 - i * 15]),
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.8, 0],
            rotate: [0, 360, 720],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {i % 3 === 0 ? "✨" : i % 3 === 1 ? "🌟" : "💫"}
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading screen enabled with suspense
  console.log("App function executing, isLoading:", isLoading);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => {
            console.log("Loading completed, setting isLoading to false");
            setIsLoading(false);
          }} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MainApp />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
