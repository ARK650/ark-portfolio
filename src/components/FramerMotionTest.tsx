import { motion } from "framer-motion";

const FramerMotionTest = () => {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", margin: "20px" }}>
      <h2>Framer Motion Test</h2>

      {/* Simple motion div */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          margin: "10px",
        }}
      >
        Test Box 1
      </motion.div>

      {/* Continuous animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "100px",
          height: "100px",
          background: "blue",
          margin: "10px",
        }}
      >
        Test Box 2
      </motion.div>

      {/* Hover animation */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: "100px",
          height: "100px",
          background: "green",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Test Box 3 (Hover me)
      </motion.div>
    </div>
  );
};

export default FramerMotionTest;
