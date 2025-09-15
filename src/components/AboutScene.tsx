// @ts-nocheck
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const AboutScene = () => {
  const timelineItems = [
    {
      year: "2020-2024",
      title: "Bachelor's Degree",
      description: "Computer Science & Software Engineering",
      icon: GraduationCap,
      color: "#ff6b6b"
    },
    {
      year: "2024-2025",
      title: "Humber Postgraduate",
      description: "Web Development & Advanced Programming",
      icon: BookOpen,
      color: "#4ecdc4"
    },
    {
      year: "Present",
      title: "Building Amazing Things",
      description: "Creating interactive web experiences",
      icon: Award,
      color: "#feca57"
    }
  ];

  return (
    <section className="min-h-screen dark:bg-transparent py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 font-bold text-gray-900 dark:text-white">
            <motion.span
              style={{
                background: "linear-gradient(45deg, #667eea, #764ba2)",
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
              My Journey
            </motion.span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-neutral-200 font-medium">
            From student to developer, here's how I got here
          </p>
        </motion.div>

        {/* Illustrated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - extends to the yellow icon */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-blue-300 to-yellow-300 dark:from-pink-400 dark:via-blue-400 dark:to-yellow-400 rounded-full"
            style={{ height: "calc(100% + 2rem)", zIndex: 1 }}
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% + 2rem)" }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.8 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                scale: 1 
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <motion.div
                  className="bg-white/90 dark:bg-black/90 rounded-3xl p-6 shadow-lg border-2 border-white/50 dark:border-neutral-800/50"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: index % 2 === 0 ? -2 : 2
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl mb-2 text-accent font-semibold" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-300 mb-2 text-accent">{item.year}</p>
                  <p className="text-gray-700 dark:text-neutral-200 text-body leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Connecting line from previous icon (if not first item) */}
              {index > 0 && (
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b"
                  style={{
                    background: `linear-gradient(to bottom, ${timelineItems[index - 1].color}, ${item.color})`,
                    height: "4rem",
                    top: "-4rem",
                    zIndex: 2
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                />
              )}

              {/* Animated connecting dots */}
              {index > 0 && (
                <>
                  {Array.from({ length: 3 }).map((_, dotIndex) => (
                    <motion.div
                      key={`dot-${index}-${dotIndex}`}
                      className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: item.color,
                        top: `${-3.5 + dotIndex * 1.2}rem`,
                        zIndex: 3
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.7 }}
                      viewport={{ once: true, margin: "-50px" }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.3 + dotIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 2
                      }}
                    />
                  ))}
                </>
              )}

              {/* Icon */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                style={{ 
                  backgroundColor: item.color,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: "3s",
                  animationIterationCount: "infinite"
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  boxShadow: `0 0 30px ${item.color}60`
                }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{
                  y: [0, -8, 0],
                }}
              >
                <item.icon className="w-8 h-8 text-white" />
                
                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 opacity-40"
                  style={{ borderColor: item.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 rotate-45 opacity-60"
          animate={{
            rotate: [45, 225, 45],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default AboutScene;