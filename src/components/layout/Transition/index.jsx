import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
