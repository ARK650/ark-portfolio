// @ts-nocheck
import { motion } from "framer-motion";
import { Star, Heart, Zap, Sparkles, Code, Palette, Rocket, Coffee, Music, Camera } from "lucide-react";

const FloatingElements = () => {
  // Position elements in safe zones that don't overlap main content
  const elements = [
    { Icon: Star, x: "5%", y: "10%", delay: 0, color: "#ff6b6b", size: 24 },
    { Icon: Heart, x: "92%", y: "8%", delay: 1, color: "#feca57", size: 20 },
    { Icon: Zap, x: "95%", y: "75%", delay: 2, color: "#48dbfb", size: 22 },
    { Icon: Sparkles, x: "8%", y: "85%", delay: 1.5, color: "#ff9ff3", size: 18 },
    { Icon: Code, x: "3%", y: "40%", delay: 0.5, color: "#54a0ff", size: 26 },
    { Icon: Palette, x: "97%", y: "35%", delay: 2.5, color: "#5f27cd", size: 20 },
    { Icon: Rocket, x: "7%", y: "65%", delay: 3, color: "#ff7675", size: 28 },
    { Icon: Coffee, x: "94%", y: "55%", delay: 1.8, color: "#fdcb6e", size: 22 },
    { Icon: Music, x: "4%", y: "25%", delay: 2.2, color: "#e17055", size: 20 },
    { Icon: Camera, x: "96%", y: "20%", delay: 0.8, color: "#00b894", size: 24 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, x, y, delay, color, size }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.6, 1.3, 0.6],
            rotate: [0, 360, 720],
            rotateY: [0, 180, 360],
            x: [0, 25, -25, 0],
            y: [0, -20, 20, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.5,
            rotate: 45,
            transition: { duration: 0.3 }
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md opacity-50"
            style={{ 
              background: color,
              width: `${size}px`,
              height: `${size}px`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Icon 
            size={size} 
            style={{ color }} 
            className="drop-shadow-2xl relative z-10"
          />
          
          {/* Sparkle trail */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs"
              style={{
                left: `${-5 + i * 8}px`,
                top: `${-5 + i * 8}px`,
                color: color
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                x: [0, -15, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3 + delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      ))}
      
      {/* Floating geometric shapes in safe zones */}
      {Array.from({ length: 18 }).map((_, i) => {
        // Create safe zones for shapes to avoid content areas
        const safeZones = [
          { x: [0, 15], y: [0, 25] },    // Top left
          { x: [85, 100], y: [0, 25] },  // Top right
          { x: [0, 15], y: [75, 100] },  // Bottom left
          { x: [85, 100], y: [75, 100] }, // Bottom right
          { x: [0, 10], y: [25, 75] },   // Left side
          { x: [90, 100], y: [25, 75] }  // Right side
        ];
        
        const zone = safeZones[i % safeZones.length];
        const x = zone.x[0] + Math.random() * (zone.x[1] - zone.x[0]);
        const y = zone.y[0] + Math.random() * (zone.y[1] - zone.y[0]);
        const isCircle = i % 3 === 0;
        const isTriangle = i % 3 === 1;
        
        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute opacity-30 ${
              isCircle ? 'rounded-full' : isTriangle ? '' : 'rounded-lg'
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              background: `hsl(${Math.random() * 360}, 80%, 65%)`,
              clipPath: isTriangle ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -40, 25, 0],
              rotate: [0, 360, 720],
              scale: [0.5, 1.5, 0.5],
              borderRadius: isCircle ? ["50%"] : isTriangle ? ["0%"] : ["0%", "50%", "0%"]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Floating text elements */}
      {['🚀', '💎', '🎨', '⚡', '🌟', '🔥', '💫', '✨'].map((emoji, i) => {
        const safeX = i % 2 === 0 ? 5 + Math.random() * 10 : 85 + Math.random() * 10;
        const safeY = 20 + Math.random() * 60;
        
        return (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl pointer-events-none"
            style={{
              left: `${safeX}%`,
              top: `${safeY}%`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;