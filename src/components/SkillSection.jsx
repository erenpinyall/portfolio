import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

export default function SkillSection({ skills }) {
  return (
    <div className="skills-section">
      {skills.map((skill, i) => (
        <motion.div
          className="skill-row"
          key={skill.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
        >
          <dt className="skill-label">{skill.label}</dt>
          <dd className="skill-tags">
            {skill.items.map((item, j) => (
              <motion.span
                className="tag"
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.08 + j * 0.04,
                  duration: 0.3,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.12)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tag-icon"><TechIcon name={item} size={14} /></span>
                {item}
              </motion.span>
            ))}
          </dd>
        </motion.div>
      ))}
    </div>
  );
}
