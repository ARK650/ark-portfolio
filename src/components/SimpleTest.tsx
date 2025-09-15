import { motion } from "framer-motion";

const SimpleTest = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        zIndex: 9999,
        background: "red",
        color: "white",
        padding: "10px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Test Animation Working!
      </motion.div>
    </div>
  );
};

export default SimpleTest;
