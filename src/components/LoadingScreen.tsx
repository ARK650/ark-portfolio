// @ts-nocheck
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [subText, setSubText] = useState("");
  const [mysteryText, setMysteryText] = useState("");

  // Random suspenseful loading messages - different each time
  const suspenseMessages = [
    {
      main: ["Connecting to server...", "Establishing connection...", "Syncing with mainframe..."],
      sub: ["Establishing secure connection", "Handshaking with servers", "Authenticating protocols"],
      mystery: ["Scanning neural pathways...", "Initializing quantum tunnels...", "Awakening digital consciousness..."]
    },
    {
      main: ["Drawing the pixels...", "Rendering graphics...", "Painting the canvas..."],
      sub: ["Rendering digital canvas", "Calibrating color matrices", "Weaving visual elements"],
      mystery: ["Weaving color symphonies...", "Orchestrating pixel dances...", "Harmonizing light frequencies..."]
    },
    {
      main: ["Loading portfolio data...", "Gathering projects...", "Compiling experiences..."],
      sub: ["Synchronizing creative matrices", "Indexing achievements", "Cataloging innovations"],
      mystery: ["Decrypting imagination protocols...", "Unlocking creative vaults...", "Channeling inspiration streams..."]
    },
    {
      main: "Hi there, I'm Ark 👋",
      sub: "Welcome to my portfolio",
      mystery: "Let's explore together...",
      duration: 2000,
    },
  ];

  // Generate random phases for each session
  const getRandomPhases = () => {
    const randomPhases = [];
    
    // First 3 phases are random from suspense messages
    for (let i = 0; i < 3; i++) {
      const messages = suspenseMessages[i];
      randomPhases.push({
        main: Array.isArray(messages.main) ? messages.main[Math.floor(Math.random() * messages.main.length)] : messages.main,
        sub: Array.isArray(messages.sub) ? messages.sub[Math.floor(Math.random() * messages.sub.length)] : messages.sub,
        mystery: Array.isArray(messages.mystery) ? messages.mystery[Math.floor(Math.random() * messages.mystery.length)] : messages.mystery,
        duration: 1000,
      });
    }
    
    // Final phase is always the greeting
    randomPhases.push(suspenseMessages[3]);
    
    return randomPhases;
  };

  const [phases] = useState(getRandomPhases());

  useEffect(() => {
    let phaseIndex = 0;
    let charIndex = 0;
    let subIndex = 0;
    let mysteryIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let phaseTimeout: NodeJS.Timeout;

    const typeText = () => {
      const currentPhaseData = phases[phaseIndex];

      typingInterval = setInterval(() => {
        // Type main text
        if (charIndex < currentPhaseData.main.length) {
          setLoadingText(currentPhaseData.main.slice(0, charIndex + 1));
          charIndex++;
        }
        // Type sub text with delay
        else if (subIndex < currentPhaseData.sub.length) {
          setSubText(currentPhaseData.sub.slice(0, subIndex + 1));
          subIndex++;
        }
        // Type mystery text with more delay
        else if (mysteryIndex < currentPhaseData.mystery.length) {
          setMysteryText(currentPhaseData.mystery.slice(0, mysteryIndex + 1));
          mysteryIndex++;
        }
        // Phase complete
        else {
          clearInterval(typingInterval);

          if (phaseIndex < phases.length - 1) {
            // Move to next phase
            phaseTimeout = setTimeout(() => {
              phaseIndex++;
              charIndex = 0;
              subIndex = 0;
              mysteryIndex = 0;
              setLoadingText("");
              setSubText("");
              setMysteryText("");
              setCurrentPhase(phaseIndex);
              typeText();
            }, 1000);
          } else {
            // Final phase - complete loading
            setTimeout(() => {
              console.log("LoadingScreen calling onComplete");
              onComplete();
            }, 2000);
          }
        }
      }, 80);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(phaseTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background:
          currentPhase < 3
            ? "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={{
        background:
          currentPhase < 3
            ? [
                "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
                "linear-gradient(135deg, #16213e 0%, #0f0f23 50%, #1a1a2e 100%)",
              ]
            : ["linear-gradient(135deg, #667eea 0%, #764ba2 100%)"],
      }}
    >
      {/* Matrix-style falling characters */}
      {currentPhase < 3 &&
        Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-green-400 font-mono text-sm opacity-30"
            style={{
              left: `${i * 7}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="block">
                {String.fromCharCode(33 + Math.random() * 94)}
              </div>
            ))}
          </motion.div>
        ))}

      {/* Animated background particles */}
      {Array.from({ length: currentPhase < 3 ? 30 : 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            background:
              currentPhase < 3
                ? `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
                : `hsl(${Math.random() * 60 + 200}, 70%, 80%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.3, 1.5, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Main content container */}
      <div className="text-center z-10 relative max-w-2xl px-6">
        {/* Loading spinner - more complex for mystery phases */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          animate={{ rotate: currentPhase < 3 ? 360 : 360 }}
          transition={{
            duration: currentPhase < 3 ? 3 : 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {currentPhase < 3 ? (
            <>
              {/* Mysterious glowing rings */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/50 border-t-cyan-400 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-3 border border-purple-400/50 border-r-purple-400 rounded-full"
                animate={{ rotate: 360, scale: [1, 0.9, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-6 border border-green-400/50 border-l-green-400 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </>
          ) : (
            <>
              <motion.div
                className="absolute inset-0 border-4 border-white/30 border-t-white rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-purple-300/50 border-r-purple-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </>
          )}
        </motion.div>

        {/* Typing text effect */}
        <motion.h1
          className={`text-3xl md:text-5xl mb-4 text-playful ${
            currentPhase < 3 ? "text-cyan-300" : "text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {loadingText}
          <motion.span
            className={`inline-block w-1 h-6 md:h-10 ml-1 ${
              currentPhase < 3 ? "bg-cyan-300" : "bg-white"
            }`}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.h1>

        {/* Subtitle */}
        {subText && (
          <motion.p
            className={`text-lg md:text-xl mb-4 text-playful ${
              currentPhase < 3 ? "text-cyan-200/80" : "text-white/90"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {subText}
          </motion.p>
        )}

        {/* Mystery text */}
        {mysteryText && (
          <motion.p
            className={`text-sm md:text-base font-mono ${
              currentPhase < 3 ? "text-green-400/70" : "text-purple-200/70"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {mysteryText}
          </motion.p>
        )}

        {/* Fun floating elements */}
        <div className="absolute -top-20 -left-20">
          <motion.div
            className="text-4xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🚀
          </motion.div>
        </div>

        <div className="absolute -top-16 -right-16">
          <motion.div
            className="text-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            ⚡
          </motion.div>
        </div>

        <div className="absolute -bottom-10 left-10">
          <motion.div
            className="text-3xl"
            animate={{
              x: [0, 20, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🎨
          </motion.div>
        </div>

        <div className="absolute -bottom-16 -right-8">
          <motion.div
            className="text-4xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            ✨
          </motion.div>
        </div>
      </div>

      {/* Progress dots */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-white/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
