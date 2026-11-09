import { motion, useReducedMotion } from 'framer-motion';
import Plate from './Plate';

const EASE = [0.2, 0.7, 0.2, 1];

export default function ExhibitFrame({ project, index, lang, t, variant = 'wall' }) {
  const reduce = useReducedMotion();
  const number = String(index + 1).padStart(2, '0');
  const primary = project.live || project.repo;
  const primaryLabel = project.live ? t.ui.live : t.ui.repo;
  const isWall = variant === 'wall';

  return (
    <motion.article
      className={`exhibit exhibit--${variant}${project.layout?.drop && isWall ? ' is-dropped' : ''}`}
      style={isWall ? { '--span': project.layout?.span ?? 4 } : undefined}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <div className="exhibit-frame">
        <a
          href={primary}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — ${primaryLabel}`}
        >
          <div className="plate">
            <Plate kind={project.plate} />
          </div>
          <span className="plate-open">
            {primaryLabel} <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>

      <div className="wall-label">
        <div className="wall-label-top">
          <span>{number}</span>
          <span>{project.year}</span>
        </div>
        {isWall ? (
          <h3 className="wall-title">{project.name}</h3>
        ) : (
          <p className="wall-title">{project.name}</p>
        )}
        <p className="wall-medium">{project.medium[lang]}</p>
        {isWall ? <p className="wall-desc">{project.desc[lang]}</p> : null}
        <div className="wall-links">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} — ${t.ui.live}`}
            >
              {t.ui.live} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} — ${t.ui.repo}`}
            >
              {t.ui.repo} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
