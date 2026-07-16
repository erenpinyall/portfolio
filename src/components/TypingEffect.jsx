import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypingEffect({ texts, speed = 80, deleteSpeed = 40, pause = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return (
    <motion.div
      className="typing-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <span className="typing-prefix">I'm </span>
      <span className="typing-text">{displayText}</span>
      <span className="typing-cursor" />
    </motion.div>
  );
}
