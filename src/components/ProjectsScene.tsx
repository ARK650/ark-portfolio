// @ts-nocheck
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Smartphone, Monitor, Palette, ShoppingCart, BarChart3, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ProjectModal from "./ProjectModal";

const ProjectsScene = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedProject, setDraggedProject] = useState<number | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ColorfulWeb Studio",
      description: "A vibrant web development platform with interactive design tools and real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1742679697291-affd3365ebe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdlYnNpdGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc2MjI0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Tailwind", "WebSocket"],
      icon: Monitor,
      color: "#ff6b6b",
      status: "live"
    },
    {
      id: 2,
      title: "MobileUI Kit",
      description: "A comprehensive mobile app interface library with gesture-based interactions and smooth animations.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NTg1MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Expo", "Reanimated", "Gesture Handler"],
      icon: Smartphone,
      color: "#4ecdc4",
      status: "live"
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description: "An artistic portfolio showcase with particle animations, 3D elements, and immersive user experience.",
      image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3NTc1Njk2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Three.js", "WebGL", "GSAP", "Canvas API"],
      icon: Palette,
      color: "#feca57",
      status: "live"
    },
    {
      id: 4,
      title: "E-Commerce Hub",
      description: "Modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzY4OTE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Laravel", "PHP", "MySQL", "Stripe API"],
      icon: ShoppingCart,
      color: "#9b59b6",
      status: "live"
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Data visualization platform with real-time charts, custom reports, and intelligent insights.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NjQ0MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "React", "D3.js", "PostgreSQL"],
      icon: BarChart3,
      color: "#3498db",
      status: "live"
    },
    {
      id: 6,
      title: "Social Connect",
      description: "Social media platform with real-time messaging, content sharing, and community features.",
      image: "https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fHwxNzU3NjYwMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      icon: Users,
      color: "#e74c3c",
      status: "live"
    },
    {
      id: 7,
      title: "AI Finance Tracker",
      description: "Smart financial management app with AI-powered insights, budget forecasting, and expense categorization.",
      image: "https://images.unsplash.com/photo-1614787296891-d1b2b1aced36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1NzU3ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AI/ML", "Python", "TensorFlow", "Coming Soon"],
      icon: Clock,
      color: "#f39c12",
      status: "coming-soon"
    },
    {
      id: 8,
      title: "Gaming Portal",
      description: "Interactive gaming hub with tournaments, leaderboards, and real-time multiplayer functionality.",
      image: "https://images.unsplash.com/photo-1673350808686-209dc177c898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzY4OTc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "WebGL", "Coming Soon"],
      icon: Clock,
      color: "#8e44ad",
      status: "coming-soon"
    },
    {
      id: 9,
      title: "EduLearn Platform",
      description: "Comprehensive learning management system with interactive courses, progress tracking, and virtual classrooms.",
      image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHBsYXRmb3JtJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1NzY4OTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "Laravel", "WebRTC", "Coming Soon"],
      icon: Clock,
      color: "#27ae60",
      status: "coming-soon"
    }
  ];

  const handleDragStart = (e: React.DragEvent, projectId: number) => {
    setDraggedProject(projectId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedProject(null);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // Filter projects into live and coming soon
  const liveProjects = projects.filter(project => project.status === 'live');
  const comingSoonProjects = projects.filter(project => project.status === 'coming-soon');
  const displayedProjects = showComingSoon ? projects : liveProjects;

  return (
    <section className="h-screen dark:bg-transparent py-8 relative overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 relative z-20 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 flex-shrink-0"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900 dark:text-white" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
            <motion.span
              style={{
                background: "linear-gradient(45deg, #f093fb, #f5576c, #4facfe, #00f2fe)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              My Projects
            </motion.span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-neutral-200 font-medium">
            Drag the cards around and click to explore! ✨
          </p>
        </motion.div>

        {/* Draggable Project Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto flex-1 ${
            showComingSoon ? 'overflow-y-auto pr-2 custom-scrollbar' : 'overflow-hidden'
          } p-4`}
          onDragOver={handleDragOver}
          style={{ 
            overflowX: 'visible',
            margin: '0 auto',
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative ${project.status === 'coming-soon' ? 'cursor-default' : 'cursor-move'} ${
                selectedProject === project.id ? "z-30" : "z-10"
              }`}
              initial={{ opacity: 0, y: 100, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1
                }
              }}
              layout
              draggable={project.status !== 'coming-soon'}
              onDragStart={(e) => project.status !== 'coming-soon' && handleDragStart(e as any, project.id)}
              onDragEnd={handleDragEnd}
              whileHover={{ 
                scale: 1.05,
                rotate: project.status === 'coming-soon' ? [0, 2, -2, 0] : Math.random() * 6 - 3,
                zIndex: 20
              }}
              whileDrag={{ 
                scale: 1.1,
                rotate: 15,
                zIndex: 30
              }}
              animate={project.status === 'coming-soon' ? {
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
                y: [0, -5, 0]
              } : {
                scale: draggedProject === project.id ? 1.1 : 1,
                opacity: draggedProject && draggedProject !== project.id ? 0.7 : 1
              }}
              transition={project.status === 'coming-soon' ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              } : { duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`${
                project.status === 'coming-soon' 
                  ? 'bg-gray-100/95 dark:bg-neutral-900/95 border-gray-300/70 dark:border-neutral-700/70' 
                  : 'bg-white/95 dark:bg-black/95 border-white/70 dark:border-neutral-800/70'
              } rounded-2xl overflow-hidden shadow-xl border-2 hover:shadow-2xl transition-all duration-300 relative h-full flex flex-col`}>
                
                {/* Coming Soon Overlay */}
                {project.status === 'coming-soon' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-20 flex items-center justify-center rounded-3xl"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="bg-white/90 px-6 py-3 rounded-2xl border-2 border-purple-300 shadow-lg"
                      animate={{
                        scale: [0.95, 1.05, 0.95],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          🚀
                        </motion.div>
                        <span className="text-purple-600 font-mono font-bold">Coming Soon</span>
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Project Icon */}
                <motion.div
                  className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                  style={{ backgroundColor: project.color }}
                  animate={project.status === 'coming-soon' ? {
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                    y: [0, -5, 0]
                  } : { 
                    rotate: 360 
                  }}
                  transition={project.status === 'coming-soon' ? {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : { 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {project.status === 'coming-soon' ? (
                    <Clock className="w-5 h-5 text-white" />
                  ) : (
                    <project.icon className="w-5 h-5 text-white" />
                  )}
                </motion.div>

                {/* Project Image - Takes 50% of card height */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      project.status === 'coming-soon' ? 'filter grayscale opacity-60' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Floating sparkles for coming soon projects */}
                  {project.status === 'coming-soon' && (
                    <>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-yellow-400 text-lg"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 40}%`
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5],
                            y: [0, -20, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          ✨
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>

                {/* Project Content - Takes remaining space */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg mb-1 font-bold text-gray-900 dark:text-white" style={{ 
                      color: project.color,
                      textShadow: `0 0 20px ${project.color}40`
                    }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 leading-tight text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-0.5 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 rounded-full text-xs text-gray-700 dark:text-gray-200"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {project.status === 'coming-soon' ? (
                      <motion.div
                        className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed opacity-70"
                        animate={{
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Clock size={16} />
                        <span className="text-sm">Coming Soon</span>
                      </motion.div>
                    ) : (
                      <>
                        <motion.button
                          className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleProjectClick(project)}
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">View</span>
                        </motion.button>
                        <motion.button
                          className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />

        {/* View More Button */}
        {!showComingSoon && comingSoonProjects.length > 0 && (
          <motion.div
            className="flex justify-center mt-6 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowComingSoon(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                🚀
              </motion.span>
              <span>View More Projects</span>
              <motion.span
                className="text-sm bg-white/20 px-2 py-1 rounded-full"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                +{comingSoonProjects.length}
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {/* Collapse Button */}
        {showComingSoon && (
          <motion.div
            className="flex justify-center mt-6 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowComingSoon(false)}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(107, 114, 128, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  rotate: [0, -180, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⬆️
              </motion.span>
              <span>Show Less</span>
            </motion.button>
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default ProjectsScene;