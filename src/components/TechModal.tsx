// @ts-nocheck
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  tech: {
    name: string;
    icon: string;
    color: string;
    category: string;
    level: number;
    description: string;
    funFact: string;
    yearStarted: number;
    projectsBuilt: number;
    favoriteFeature: string;
  } | null;
}

const TechModal = ({ isOpen, onClose, tech }: TechModalProps) => {
  if (!tech) return null;

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
              className="bg-white/95 dark:bg-black/95 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border-2 border-white/50 dark:border-neutral-800/50 relative overflow-hidden"
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
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}, transparent)`
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
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Tech icon and name */}
              <div className="text-center mb-6 relative z-10">
                <motion.div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    margin: "0 auto"
                  }}
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotateY: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                    }}
                    onError={(e) => {
                      // Fallback to a simple colored circle if image fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-full hidden items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                </motion.div>
                <h2 
                  className="text-3xl mb-2 text-playful relative z-10"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </h2>
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-sm relative z-10"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    color: tech.color,
                    border: `1px solid ${tech.color}40`
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.category}
                </motion.span>
              </div>

              {/* Fun fact section */}
              <motion.div
                className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-4 mb-6 relative z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg mb-2 text-purple-600 dark:text-purple-400">
                  🎉 Fun Fact
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-playful">
                  {tech.funFact}
                </p>
              </motion.div>

              {/* Stats grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl mb-1"
                    style={{ color: tech.color }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {tech.yearStarted}
                  </motion.div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Year Started
                  </div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-2xl mb-1"
                    style={{ color: tech.color }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    {tech.projectsBuilt}+
                  </motion.div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Projects Built
                  </div>
                </div>
              </motion.div>

              {/* Skill level */}
              <motion.div
                className="mb-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Skill Level
                  </span>
                  <span className="text-sm" style={{ color: tech.color }}>
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Favorite feature */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-sm mb-2" style={{ color: tech.color }}>
                  💖 What I Love Most:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-playful">
                  {tech.favoriteFeature}
                </p>
              </motion.div>

              {/* Floating elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full opacity-40"
                  animate={{
                    x: [0, 30, -30, 0],
                    y: [0, -40, 20, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7
                  }}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 25}%`,
                    backgroundColor: tech.color
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

export default TechModal;