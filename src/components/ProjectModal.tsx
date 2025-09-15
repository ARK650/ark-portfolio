// @ts-nocheck
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    icon: any;
    color: string;
    status: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  // Extended project details for the modal
  const projectDetails = {
    1: {
      features: ["Real-time Collaboration", "Interactive Design Tools", "Color Palette Generator", "Export to Multiple Formats"],
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "WebSocket API", "Canvas API"],
      challenges: "Building real-time collaboration required implementing efficient WebSocket communication and conflict resolution for simultaneous editing.",
      timeline: "3 months",
      team: "Solo Project",
      learnings: "Mastered WebSocket implementation and learned advanced Canvas API techniques for interactive graphics."
    },
    2: {
      features: ["Gesture Recognition", "Smooth Animations", "Component Library", "Theme Customization"],
      technologies: ["React Native", "Expo SDK", "Reanimated 3", "Gesture Handler", "TypeScript"],
      challenges: "Creating smooth 60fps animations across different devices while maintaining performance and battery efficiency.",
      timeline: "4 months",
      team: "2 Developers",
      learnings: "Deep dive into mobile performance optimization and advanced React Native animation techniques."
    },
    3: {
      features: ["3D Particle Effects", "Interactive Portfolio", "WebGL Rendering", "Immersive Experience"],
      technologies: ["Three.js", "WebGL", "GSAP", "Canvas API", "Vanilla JavaScript"],
      challenges: "Optimizing 3D graphics performance for web browsers while maintaining visual quality across different devices.",
      timeline: "5 months",
      team: "Solo Project",
      learnings: "Gained expertise in 3D web graphics, shader programming, and advanced animation libraries."
    },
    4: {
      features: ["Advanced Filtering", "Real-time Inventory", "Payment Integration", "Admin Dashboard"],
      technologies: ["Laravel 10", "PHP 8", "MySQL", "Stripe API", "Vue.js"],
      challenges: "Handling high-traffic e-commerce transactions while maintaining data consistency and security.",
      timeline: "6 months",
      team: "4 Developers",
      learnings: "Mastered e-commerce architecture, payment processing, and large-scale database optimization."
    },
    5: {
      features: ["Real-time Charts", "Custom Reports", "Data Export", "Intelligent Insights"],
      technologies: ["Python Flask", "React", "D3.js", "PostgreSQL", "Redis"],
      challenges: "Processing and visualizing large datasets in real-time while maintaining responsive user interface.",
      timeline: "4 months",
      team: "3 Developers",
      learnings: "Advanced data visualization techniques and optimizing database queries for analytics workloads."
    },
    6: {
      features: ["Real-time Messaging", "Content Sharing", "Community Features", "Live Notifications"],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      challenges: "Scaling real-time messaging for thousands of concurrent users while maintaining low latency.",
      timeline: "7 months",
      team: "5 Developers",
      learnings: "Microservices architecture, real-time systems, and scalable backend development."
    }
  };

  const details = projectDetails[project.id as keyof typeof projectDetails] || {
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: project.tags,
    challenges: "This project involved solving complex technical challenges.",
    timeline: "3-6 months",
    team: "Development Team",
    learnings: "Gained valuable experience in modern web development."
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[70] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/95 dark:bg-black/95 rounded-3xl p-6 max-w-4xl w-full mx-4 shadow-2xl border-2 border-white/50 dark:border-neutral-800/50 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
              initial={{ 
                scale: 0.5, 
                y: 100,
                rotateX: -45
              }}
              animate={{ 
                scale: 1, 
                y: 0,
                rotateX: 0
              }}
              exit={{ 
                scale: 0.8, 
                y: 50,
                opacity: 0,
                rotateX: 45
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
              onClick={(e) => e.stopPropagation()}
            >
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
                }
              `}</style>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, transparent)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Header Section */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8 relative z-10">
                {/* Project Image */}
                <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className="lg:w-1/2 space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Project Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: project.color }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h2 
                        className="text-3xl mb-2 font-bold"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{details.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Details Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {/* Key Features */}
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5" style={{ color: project.color }} />
                    <h3 className="text-lg font-semibold" style={{ color: project.color }}>
                      Key Features
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {details.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5" style={{ color: project.color }} />
                    <h3 className="text-lg font-semibold" style={{ color: project.color }}>
                      Technologies Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-sm text-gray-700 dark:text-gray-300 border"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5" style={{ color: project.color }} />
                    <h3 className="text-lg font-semibold" style={{ color: project.color }}>
                      Project Details
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Timeline:</span>
                      <p className="text-gray-700 dark:text-gray-300">{details.timeline}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Team:</span>
                      <p className="text-gray-700 dark:text-gray-300">{details.team}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Challenges & Learnings */}
                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-lg font-semibold mb-4" style={{ color: project.color }}>
                    🚀 Challenges & Learnings
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Main Challenge:</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{details.challenges}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Key Learnings:</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{details.learnings}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full opacity-30"
                  animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -50, 30, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${20 + i * 20}%`,
                    backgroundColor: project.color
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
