// @ts-nocheck
import { motion } from "framer-motion";
import { Github, Instagram, Twitch } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ARK650",
      color: "#333",
      hoverColor: "#24292e",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ark_zl1",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "Twitch",
      icon: Twitch,
      url: "https://www.twitch.tv/garagejournaltv",
      color: "#9146FF",
      hoverColor: "#772CE8",
    },
  ];

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8, staggerChildren: 0.1 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 shadow-lg border-2 border-white/50 dark:border-neutral-800/50 flex items-center justify-center transition-all duration-300 hover:shadow-xl group cursor-pointer"
          style={
            {
              "--hover-color": social.hoverColor,
            } as React.CSSProperties
          }
          whileHover={{
            scale: 1.15,
            rotate: [0, -10, 10, 0],
            backgroundColor: social.hoverColor + "20",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50, rotate: -180 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            delay: 2 + index * 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <social.icon
              size={20}
              style={{ color: social.color }}
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </motion.div>

          {/* Hover effect ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: social.color + "40" }}
            whileHover={{
              scale: [1, 1.3, 1],
              opacity: [0, 0.6, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />

          {/* Floating particles on hover */}
          {Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs opacity-0 group-hover:opacity-100"
              style={{
                color: social.color,
                left: `${20 + i * 40}%`,
                top: `${10 + i * 30}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -15, -30],
                x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-60"
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            {social.name}
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-6 border-transparent border-r-gray-900 dark:border-r-white"></div>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
