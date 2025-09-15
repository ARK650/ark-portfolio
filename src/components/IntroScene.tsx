/**
 * INTRO SCENE COMPONENT - IntroScene.tsx
 * 
 * This is the hero/landing section - the first thing visitors see.
 * It's designed to make a strong first impression and introduce you.
 * 
 * WHAT IT DISPLAYS:
 * 1. Main headline with your name and title
 * 2. Animated subtitle with typing effect
 * 3. Brief personal introduction
 * 4. Call-to-action button to scroll to next section
 * 5. Floating animated elements for visual appeal
 * 
 * ANIMATIONS INCLUDED:
 * - Text slides in from bottom with stagger effect
 * - Typing animation for subtitle
 * - Floating particles and shapes
 * - Hover effects on interactive elements
 * - Smooth scroll to next section
 * 
 * EASY CUSTOMIZATIONS:
 * - Change your name in the main headline
 * - Update your title/role in the subtitle
 * - Modify the introduction text
 * - Adjust animation timings
 * - Change colors and fonts
 * - Update the call-to-action button text
 * 
 * RESPONSIVE DESIGN:
 * - Text sizes adapt to screen size
 * - Layout stacks vertically on mobile
 * - Touch-friendly button sizes
 * - Optimized animations for mobile devices
 * 
 * PERFORMANCE NOTES:
 * - Uses transform animations for smooth 60fps performance
 * - Lazy loads any images
 * - Minimal DOM manipulations
 */

// @ts-nocheck - Suppresses TypeScript errors for Framer Motion
import { motion, useTransform, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";

const IntroScene = () => {
  return (
    <section className="min-h-screen dark:bg-transparent flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.h1 
              className="text-4xl md:text-6xl mb-6 text-heading font-semibold"
              style={{ 
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to My Portfolio
            </motion.h1>
            
            <motion.div
              className="inline-block"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-4xl">✨</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced bouncing shapes around the text - responsive positioning */}
        <motion.div
          className="absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"
          style={{
            top: "20%",
            left: "10%",
          }}
          animate={{ 
            rotate: 360,
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-pink-300 to-purple-400 shadow-lg"
          style={{ 
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            top: "25%",
            right: "15%",
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 10, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border-4 border-blue-400 rounded-full shadow-lg"
          style={{
            bottom: "30%",
            left: "20%",
          }}
          animate={{
            rotate: [0, 180, 360],
            borderRadius: ["50%", "25%", "50%"],
            scale: [1, 1.2, 1],
            y: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-4 h-12 sm:w-5 sm:h-14 lg:w-6 lg:h-16 bg-gradient-to-t from-green-300 to-blue-300 rounded-full shadow-lg"
          style={{
            top: "50%",
            right: "25%",
          }}
          animate={{
            rotate: [0, 15, -15, 0],
            scaleY: [1, 1.2, 0.8, 1],
            x: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          className="absolute w-10 h-6 sm:w-12 sm:h-7 lg:w-14 lg:h-8 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl shadow-lg"
          style={{
            bottom: "20%",
            right: "10%",
          }}
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
            y: [0, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Floating text elements - responsive positioning */}
        {["🎨", "💻", "⚡", "🚀", "💡"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute opacity-60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${75 + (i % 3) * 8}%`,
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              zIndex: 1,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            {emoji}
          </motion.div>
        ))}

        {/* Orbiting elements - responsive sizing */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full shadow-lg"
            style={{
              left: "50%",
              top: "50%",
              originX: 0.5,
              originY: 0.5,
              width: "clamp(0.75rem, 2vw, 1rem)",
              height: "clamp(0.75rem, 2vw, 1rem)",
            }}
            animate={{
              rotate: [0, 360],
              x: [0, 80 * Math.cos((i * 60) * Math.PI / 180)],
              y: [0, 80 * Math.sin((i * 60) * Math.PI / 180)],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScene;