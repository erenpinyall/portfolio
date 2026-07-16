import { motion } from 'framer-motion';

export default function Tag({ children, icon, delay = 0 }) {
  return (
    <motion.span
      className="tag"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="tag-icon">{icon}</span>}
      {children}
    </motion.span>
  );
}
