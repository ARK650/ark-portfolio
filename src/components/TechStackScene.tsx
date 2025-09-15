/**
 * TECH STACK SCENE COMPONENT - TechStackScene.tsx
 * 
 * This component displays the technologies and skills section of the portfolio.
 * It features interactive cards for each technology with detailed information
 * and animated modals that open when clicked.
 * 
 * KEY FEATURES:
 * 1. Interactive tech cards with hover effects and animations
 * 2. Official technology logos (React, JavaScript, etc.) instead of emojis
 * 3. Skill level progress bars with animated fill
 * 4. Clickable cards that open detailed modals (handled by TechModal.tsx)
 * 5. Category organization (Frontend, Backend, Design, etc.)
 * 6. Responsive grid layout that adapts to screen size
 * 7. Animated background particles and floating elements
 * 
 * CUSTOMIZATION GUIDE:
 * - To add new tech: Add object to techStack array with required properties
 * - To change tech info: Modify existing objects in techStack array
 * - To adjust grid layout: Modify grid classes (grid-cols-1 sm:grid-cols-2, etc.)
 * - To change animations: Update Framer Motion props on motion components
 * - To modify colors: Update the color property in each tech object
 * - To add categories: Update categories array and assign to tech objects
 * 
 * TECH STACK DATA STRUCTURE:
 * Each tech object should have:
 * - name: Technology name (string)
 * - icon: URL to SVG logo (string) 
 * - color: Brand color hex code (string)
 * - category: Type of technology (string)
 * - level: Skill level 0-100 (number)
 * - description: Brief description (string)
 * - funFact: Interesting fact about the tech (string)
 * - yearStarted: When you started learning (number)
 * - projectsBuilt: Number of projects using this tech (number)
 * - favoriteFeature: What you love most about it (string)
 * 
 * MODAL INTEGRATION:
 * - Clicking any tech card opens TechModal.tsx
 * - Modal receives the clicked tech's data as props
 * - Modal state is managed in this component
 * - Close modal by clicking outside or close button
 */

// @ts-nocheck - Suppresses TypeScript errors for Framer Motion className conflicts
import { motion } from "framer-motion";
import { Palette, Database, Smartphone, Globe, Settings } from "lucide-react"; // Icons for categories
import { useState } from "react";
import TechModal from "./TechModal"; // Modal component for detailed tech information

const TechStackScene = () => {
  // STATE MANAGEMENT FOR MODAL
  const [selectedTech, setSelectedTech] = useState<any>(null); // Stores clicked tech data
  const [isModalOpen, setIsModalOpen] = useState(false);      // Controls modal visibility

  /**
   * TECH STACK DATA
   * 
   * This array contains all the technologies to display.
   * Each object represents one technology card.
   * 
   * IMPORTANT: When adding new technologies:
   * 1. Find the official logo SVG URL from https://cdn.jsdelivr.net/gh/devicons/devicon/
   * 2. Use the official brand color (check brand guidelines)
   * 3. Choose appropriate category from: Frontend, Backend, Language, Framework, Design, etc.
   * 4. Be honest about skill level (0-100)
   * 5. Write engaging descriptions and fun facts
   * 
   * ICON URLS: All icons come from DevIcons CDN for consistency and reliability
   * COLOR CODES: Use official brand colors for recognition
   * SKILL LEVELS: Be honest - this affects the progress bar animation
   */
  const techStack = [
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      color: "#61DAFB", 
      category: "Frontend",
      level: 95,
      description: "Building interactive UIs",
      funFact: "React was originally created by Jordan Walke at Facebook in 2011. I started learning it because I loved how it makes complex UIs feel like building with Lego blocks!",
      yearStarted: 2020,
      projectsBuilt: 25,
      favoriteFeature: "The way hooks revolutionized state management and made functional components so powerful!"
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      color: "#0070f3", 
      category: "Framework",
      level: 89,
      description: "Full-stack React framework",
      funFact: "Next.js makes React development a breeze with built-in SSR, routing, and optimization. It's like React's supercharged cousin!",
      yearStarted: 2021,
      projectsBuilt: 15,
      favoriteFeature: "App Router and Server Components - they make building fast, SEO-friendly apps so much easier!"
    },
    { 
      name: "React Native", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      color: "#61DAFB", 
      category: "Mobile",
      level: 82,
      description: "Cross-platform mobile apps",
      funFact: "One codebase for iOS and Android? React Native makes it possible! I love how I can use my React skills to build native mobile apps.",
      yearStarted: 2021,
      projectsBuilt: 8,
      favoriteFeature: "Hot reloading during development - seeing changes instantly on a real device feels like magic!"
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
      color: "#3178C6", 
      category: "Language",
      level: 91,
      description: "Type-safe JavaScript",
      funFact: "TypeScript catches bugs before they happen! It's like having a really smart friend who double-checks your code and prevents silly mistakes.",
      yearStarted: 2020,
      projectsBuilt: 22,
      favoriteFeature: "IntelliSense and auto-completion - it makes coding so much faster and more reliable!"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      color: "#F7DF1E", 
      category: "Language",
      level: 92,
      description: "Modern ES6+ development",
      funFact: "JavaScript was created in just 10 days by Brendan Eich in 1995! Despite its quirks, I love how versatile it is - from frontend to backend to mobile apps.",
      yearStarted: 2018,
      projectsBuilt: 40,
      favoriteFeature: "ES6 arrow functions and destructuring - they make code so much cleaner and more readable!"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      color: "#339933", 
      category: "Backend",
      level: 88,
      description: "Server-side JavaScript",
      funFact: "Node.js brought JavaScript to the backend! I love how it uses the same language for frontend and backend - no context switching needed.",
      yearStarted: 2019,
      projectsBuilt: 18,
      favoriteFeature: "NPM ecosystem - there's a package for almost everything you can imagine!"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      color: "#F05032", 
      category: "Tools",
      level: 90,
      description: "Version control & collaboration",
      funFact: "Git was created by Linus Torvalds (creator of Linux) in just 2 weeks! I can't imagine coding without it - it's like having a time machine for your code.",
      yearStarted: 2018,
      projectsBuilt: 50,
      favoriteFeature: "Branching and merging - it makes experimenting with new features completely safe!"
    },
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      color: "#E34F26", 
      category: "Markup",
      level: 98,
      description: "Semantic web structure",
      funFact: "HTML5 introduced semantic elements like <header>, <nav>, and <article>. I'm obsessed with writing semantic, accessible HTML - it's like building a house with a solid foundation!",
      yearStarted: 2017,
      projectsBuilt: 50,
      favoriteFeature: "Semantic elements that make websites accessible to everyone, including screen readers!"
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      color: "#1572B6", 
      category: "Styling",
      level: 94,
      description: "Modern layouts & animations",
      funFact: "CSS Grid and Flexbox changed everything! I used to struggle with layouts using floats and tables. Now I can create complex layouts with just a few lines of CSS.",
      yearStarted: 2017,
      projectsBuilt: 45,
      favoriteFeature: "CSS animations and transforms - bringing static designs to life feels like magic!"
    },
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
      color: "#47A248", 
      category: "Database",
      level: 85,
      description: "NoSQL document database",
      funFact: "MongoDB stores data as documents instead of tables! I love how flexible it is - perfect for modern apps that need to store complex, nested data.",
      yearStarted: 2020,
      projectsBuilt: 12,
      favoriteFeature: "Aggregation pipeline - it's like SQL but more powerful for complex data transformations!"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      color: "#3776AB", 
      category: "Backend",
      level: 88,
      description: "Data processing & APIs",
      funFact: "Python is named after Monty Python's Flying Circus! I love how readable Python code is - it's like writing in plain English but for computers.",
      yearStarted: 2019,
      projectsBuilt: 20,
      favoriteFeature: "List comprehensions - they make data manipulation so elegant and Pythonic!"
    },
    { 
      name: "C#", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", 
      color: "#239120", 
      category: "Language",
      level: 85,
      description: ".NET development",
      funFact: "C# was Microsoft's answer to Java, and it's incredibly powerful! I love how strongly typed it is - it catches so many errors before they become problems.",
      yearStarted: 2020,
      projectsBuilt: 15,
      favoriteFeature: "LINQ queries - they make working with collections feel like writing SQL but in C#!"
    },
    { 
      name: "PHP", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
      color: "#777BB4", 
      category: "Backend",
      level: 90,
      description: "Server-side scripting",
      funFact: "PHP originally stood for 'Personal Home Page' but now means 'PHP: Hypertext Preprocessor' (recursive acronym!). It powers about 80% of the web!",
      yearStarted: 2018,
      projectsBuilt: 30,
      favoriteFeature: "How easy it is to get started with web development - you can see results immediately!"
    },
    { 
      name: "Laravel", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", 
      color: "#FF2D20", 
      category: "Framework",
      level: 87,
      description: "Elegant PHP framework",
      funFact: "Laravel's motto is 'The PHP Framework for Web Artisans' and it truly lives up to it! Eloquent ORM makes database queries feel like poetry.",
      yearStarted: 2019,
      projectsBuilt: 18,
      favoriteFeature: "Artisan command-line interface - it's like having a helpful assistant for development tasks!"
    },
    { 
      name: "Figma", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", 
      color: "#F24E1E", 
      category: "Design",
      level: 91,
      description: "UI/UX design & prototyping",
      funFact: "Figma runs entirely in the browser but feels as smooth as native software! I love how it democratized design collaboration - no more 'can you export this as PNG' emails!",
      yearStarted: 2020,
      projectsBuilt: 35,
      favoriteFeature: "Real-time collaboration - watching teammates design live feels like magic!"
    }
  ];

  const handleTechClick = (tech: any) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const categories = [
    { name: "Frontend", icon: Globe, color: "#61DAFB" },
    { name: "Backend", icon: Database, color: "#4CAF50" },
    { name: "Database", icon: Database, color: "#47A248" },
    { name: "Tools", icon: Settings, color: "#F05032" },
    { name: "Design", icon: Palette, color: "#FF6B6B" },
    { name: "Mobile", icon: Smartphone, color: "#9C27B0" }
  ];

  return (
    <section className="h-screen dark:bg-transparent py-8 relative overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 relative z-20 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 flex-shrink-0"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white font-bold" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
            <motion.span
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
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Tech Stack
            </motion.span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-neutral-200 font-medium">
            The tools and technologies I love working with
          </p>
        </motion.div>

        {/* Tech Grid - Enhanced responsive design for 14 technologies */}
        <div className="relative flex-1 overflow-hidden">
          {/* Scrollable Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto mb-6 px-4 h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            {/* Custom Scrollbar Styles */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 4px;
                transition: all 0.3s ease;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(45deg, #764ba2, #667eea);
                transform: scale(1.1);
              }
              /* Firefox */
              .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #667eea rgba(255, 255, 255, 0.1);
              }
            `}</style>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50
              }}
              whileTap={{ 
                scale: 0.95,
                rotateY: -5
              }}
              onClick={() => handleTechClick(tech)}
            >
              <div className="bg-white/90 dark:bg-black/90 rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border-2 border-white/50 dark:border-neutral-800/50 h-full relative overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-opacity-80">
                {/* Click indicator */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Click me! ✨
                </motion.div>
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-10 rounded-3xl"
                  style={{
                    background: `linear-gradient(45deg, ${tech.color}, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Tech Icon */}
                <motion.div
                  className="relative z-10 mb-2 sm:mb-3 flex items-center justify-center"
                  style={{
                    width: "clamp(2rem, 6vw, 3rem)",
                    height: "clamp(2rem, 6vw, 3rem)",
                  }}
                  animate={{
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))'
                    }}
                    onError={(e) => {
                      // Fallback to a simple colored circle if image fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-full hidden items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                </motion.div>

                {/* Tech Name */}
                <h3 
                  className="text-sm sm:text-base lg:text-lg mb-2 font-semibold relative z-10 text-gray-900 dark:text-white"
                  style={{ 
                    textShadow: `0 0 20px ${tech.color}40`,
                    color: tech.color 
                  }}
                >
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <motion.span
                  className="inline-block px-2 py-1 rounded-full text-xs mb-2 relative z-10"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    color: tech.color,
                    border: `1px solid ${tech.color}40`
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.category}
                </motion.span>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 relative z-10 text-body leading-relaxed">
                  {tech.description}
                </p>

                {/* Skill Level Bar */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Proficiency</span>
                    <span className="text-xs" style={{ color: tech.color }}>
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: tech.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Floating particles */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full opacity-40"
                    animate={{
                      x: [0, 20, -20, 0],
                      y: [0, -30, 10, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                      backgroundColor: tech.color
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Category Stats - Enhanced responsive design for 6 categories */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 max-w-5xl mx-auto px-4 flex-shrink-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-white/80 dark:bg-black/80 rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg border border-white/50 dark:border-neutral-800/50"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20` }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 2
                }}
              >
                <category.icon 
                  size="clamp(16, 3vw, 24)" 
                  style={{ color: category.color }}
                />
              </motion.div>
              <h4 
                className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-200"
                style={{ 
                  color: category.color,
                  textShadow: `0 0 10px ${category.color}30`
                }}
              >
                {category.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Modal */}
        <TechModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tech={selectedTech}
        />

        {/* Decorative code snippets */}
        <motion.div
          className="absolute top-32 left-10 opacity-20 font-mono text-sm text-gray-600 dark:text-gray-400"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {"<div className='awesome'>"}
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 opacity-20 font-mono text-sm text-gray-600 dark:text-gray-400"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {"console.log('Hello!');"}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackScene;