import { motion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  return (
    <motion.div
      className="timeline-group"
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="timeline-dot">
        <div className="dot-inner" />
      </div>
      <div className="timeline-content">
        <div className="exp-top">
          <div>
            <h3 className="company-name">{item.company}</h3>
            <span className="role-text">{item.role}</span>
          </div>
          <div className="exp-right">
            <span className="exp-date">{item.date}</span>
            <span className="exp-location">{item.location}</span>
          </div>
        </div>
        <ul className="exp-list">
          {item.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.08 + 0.2, duration: 0.4 }}
            >
              {detail}
            </motion.li>
          ))}
        </ul>
        <div className="exp-tags">
          {item.tech.map((t, i) => (
            <motion.span
              className="mini-tag"
              key={t}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.05 + 0.4, duration: 0.3 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
