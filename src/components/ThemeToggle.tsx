// @ts-nocheck
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  console.log("ThemeToggle render - Current theme:", theme, "isDark:", isDark);

  const handleToggle = () => {
    console.log("Theme toggle clicked! Current theme:", theme);
    toggleTheme();
  };

  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.button
        onClick={handleToggle}
        className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
            : 'bg-gradient-to-r from-yellow-400 to-orange-400'
        } shadow-lg hover:shadow-xl`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Toggle Ball */}
        <motion.div
          className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center ${
            isDark ? 'text-purple-600' : 'text-orange-500'
          }`}
          animate={{
            x: isDark ? 32 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </motion.div>
        
        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          <Sun 
            size={16} 
            className={`text-white transition-opacity ${isDark ? 'opacity-50' : 'opacity-100'}`} 
          />
          <Moon 
            size={16} 
            className={`text-white transition-opacity ${isDark ? 'opacity-100' : 'opacity-50'}`} 
          />
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;