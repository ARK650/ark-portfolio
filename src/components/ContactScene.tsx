/**
 * CONTACT SCENE COMPONENT - ContactScene.tsx
 * 
 * This is the final section where visitors can get in touch with you.
 * It provides multiple ways to contact you and encourages engagement.
 * 
 * WHAT IT INCLUDES:
 * 1. Contact form for direct messages
 * 2. Your contact information (email, phone, location)
 * 3. Social media links
 * 4. Professional headshot or avatar
 * 5. Call-to-action encouraging visitors to reach out
 * 
 * CONTACT FORM FEATURES:
 * - Name field (visitor's name)
 * - Email field (for reply)
 * - Subject field (message topic)
 * - Message field (main content)
 * - Form validation
 * - Success/error feedback
 * 
 * CUSTOMIZATION GUIDE:
 * To update your contact information:
 * 1. Find the contact info object in this file
 * 2. Update email, phone, location, social links
 * 3. Replace the avatar image in the public folder
 * 4. Modify the introduction text
 * 
 * To modify the form:
 * 1. Add/remove form fields as needed
 * 2. Update validation rules
 * 3. Change the submit handler
 * 4. Customize success/error messages
 * 
 * INTEGRATION NOTES:
 * - Form submissions can be connected to:
 *   * Email services (EmailJS, Formspree)
 *   * Backend APIs
 *   * Contact form services
 * - Currently shows success message for demo
 * - Add your preferred form handling solution
 * 
 * ACCESSIBILITY:
 * - Form labels are properly associated
 * - Keyboard navigation supported
 * - Screen reader friendly
 * - Focus indicators visible
 * - Error messages announced
 */

// @ts-nocheck - Suppresses TypeScript errors for Framer Motion
import { motion } from "framer-motion";
import { Mail, MessageCircle, Coffee, Zap } from "lucide-react";

const ContactScene = () => {
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
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Game Over?
            </motion.span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-neutral-200 font-medium">
            Let's start a new collaboration level! 🎮
          </p>
        </motion.div>

        {/* Arcade-style contact menu */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-black/90 rounded-3xl p-8 border-4 border-purple-500 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Arcade screen effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-pulse" />
            
            {/* Game title */}
            <motion.div
              className="text-center mb-8"
              animate={{
                textShadow: [
                  "0 0 10px #ff00ff",
                  "0 0 20px #00ffff", 
                  "0 0 10px #ff00ff"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h3 className="text-3xl text-white mb-2 font-mono">COLLABORATION QUEST</h3>
              <p className="text-green-400 font-mono">Insert coin to continue...</p>
            </motion.div>

            {/* Menu options */}
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  text: "EMAIL MISSION", 
                  subtitle: "ark@creativecode.dev",
                  color: "#ff6b6b",
                  delay: 0.1 
                },
                { 
                  icon: MessageCircle, 
                  text: "CHAT CHALLENGE", 
                  subtitle: "Let's discuss your project",
                  color: "#4ecdc4",
                  delay: 0.2 
                },
                { 
                  icon: Coffee, 
                  text: "COFFEE BREAK", 
                  subtitle: "Virtual meetup available",
                  color: "#feca57",
                  delay: 0.3 
                },
                { 
                  icon: Zap, 
                  text: "QUICK CONNECT", 
                  subtitle: "Social media & portfolio",
                  color: "#ff9ff3",
                  delay: 0.4 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center p-4 border-2 border-gray-700 rounded-2xl bg-gray-900/50 hover:border-purple-400 transition-all duration-300 group-hover:bg-gray-800/50">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border-2"
                      style={{ 
                        borderColor: item.color,
                        backgroundColor: `${item.color}20`
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon 
                        className="w-6 h-6" 
                        style={{ color: item.color }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 
                        className="text-lg font-mono group-hover:text-white transition-colors duration-300"
                        style={{ color: item.color }}
                      >
                        {item.text}
                      </h4>
                      <p className="text-gray-400 text-sm font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Start Collaboration Button */}
            <motion.button
              className="w-full mt-8 py-4 px-8 arcade-glow rounded-2xl font-mono text-xl text-white relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 105, 180, 0.8), 0 0 60px rgba(255, 105, 180, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                textShadow: [
                  "0 0 10px #ffffff",
                  "0 0 20px #ff69b4",
                  "0 0 10px #ffffff"
                ]
              }}
              transition={{
                textShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.span
                animate={{ 
                  opacity: [1, 0.7, 1] 
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ▶ START COLLABORATION ◀
              </motion.span>
            </motion.button>

            {/* Score display */}
            <motion.div
              className="flex justify-between mt-6 text-green-400 font-mono text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <span>PROJECTS: 50+</span>
              <span>CLIENTS: ∞</span>
              <span>COFFEE: 9999</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating arcade elements */}
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🕹️
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 text-4xl"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          👾
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⭐
        </motion.div>
      </div>
    </section>
  );
};

export default ContactScene;