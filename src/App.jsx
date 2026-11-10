import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './App.css';
import { copy, experience, links, projects, skillGroups } from './content';
import Header from './components/Header';
import ExhibitFrame from './components/ExhibitFrame';
import SectionHead from './components/SectionHead';
import SkillIndex from './components/SkillIndex';
import Chronology from './components/Chronology';
import FloorPlan from './components/FloorPlan';
import ProfileCard from './components/ProfileCard';

const EASE = [0.2, 0.7, 0.2, 1];
const INITIAL_WORK_COUNT = 6;

function Reveal({ children, className = '', id }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      id={id}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState(() => (localStorage.getItem('lang') === 'tr' ? 'tr' : 'en'));
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [active, setActive] = useState('works');
  const [showAllWorks, setShowAllWorks] = useState(false);
  const t = copy[lang];
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#12100E' : '#F4F1EA');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.head.docTitle;
    localStorage.setItem('lang', lang);
  }, [lang, t.head.docTitle]);

  useEffect(() => {
    const ids = ['works', 'skills', 'experience', 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const initialProjects = projects.slice(0, INITIAL_WORK_COUNT);
  const moreProjects = projects.slice(INITIAL_WORK_COUNT);
  const visibleProjects = showAllWorks ? projects : initialProjects;

  return (
    <div className="page" id="top">
      <a className="skip" href="#works">
        {t.head.skip}
      </a>

      <Header
        lang={lang}
        onLang={setLang}
        dark={dark}
        onLights={() => setDark((value) => !value)}
        t={t}
        active={active}
      />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h1 className="hero-title" id="hero-title">
              <span>{t.head.title[0]}</span>
              <span>{t.head.title[1]}</span>
            </h1>
            <p className="hero-role">{t.head.role}</p>
            <p className="hero-intro">{t.head.intro}</p>
            <div className="hero-actions">
              <a className="action action--red" href="#contact">
                {t.ui.contact} <span aria-hidden="true">↗</span>
              </a>
              <a className="action" href={links.cv} target="_blank" rel="noreferrer">
                {t.ui.cv} <span aria-hidden="true">↓</span>
              </a>
              <a className="action action--quiet" href={links.github} target="_blank" rel="noreferrer">
                {t.ui.github} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card-hold"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <ProfileCard t={t} />
          </motion.div>

          <FloorPlan t={t} active={active} />
        </section>

        <section id="works" className="section">
          <SectionHead index={t.works.index} title={t.works.title} note={t.works.note} />
          <Reveal className="wall" id="works-wall">
            {visibleProjects.map((project) => (
              <ExhibitFrame
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
                lang={lang}
                t={t}
              />
            ))}
          </Reveal>
          {moreProjects.length > 0 ? (
            <div className="wall-more">
              <button
                type="button"
                className="wall-more-btn"
                aria-expanded={showAllWorks}
                aria-controls="works-wall"
                onClick={() => setShowAllWorks((value) => !value)}
              >
                <span>{showAllWorks ? t.works.less : t.works.more}</span>
                {!showAllWorks ? (
                  <span className="wall-more-count">({moreProjects.length})</span>
                ) : null}
                <span className="wall-more-arrow" aria-hidden="true">
                  {showAllWorks ? '↑' : '↓'}
                </span>
              </button>
              <p className="wall-more-note">
                {showAllWorks ? t.works.lessNote : t.works.moreNote}
              </p>
            </div>
          ) : null}
        </section>

        <section id="skills" className="section">
          <SectionHead index={t.skills.index} title={t.skills.title} note={t.skills.note} />
          <Reveal>
            <SkillIndex groups={skillGroups} lang={lang} />
          </Reveal>
        </section>

        <section id="experience" className="section">
          <SectionHead
            index={t.experience.index}
            title={t.experience.title}
            note={t.experience.note}
          />
          <Reveal>
            <Chronology items={experience} lang={lang} />
          </Reveal>
        </section>

        <section id="contact" className="section visit">
          <SectionHead index={t.contact.index} title={t.contact.title} note={t.contact.note} />
          <Reveal className="visit-grid">
            <div>
              <p className="visit-lede">{t.contact.lede}</p>
              <p className="visit-place">{t.footer.place}</p>
            </div>

            <div className="visit-doors">
              <a className="door" href={`mailto:${links.email}`}>
                <span className="door-label">{t.contact.email}</span>
                <span className="door-value">{links.email}</span>
                <span className="door-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="door" href={links.linkedin} target="_blank" rel="noreferrer">
                <span className="door-label">{t.contact.linkedin}</span>
                <span className="door-value">/in/eren-pinyal</span>
                <span className="door-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="door" href={links.github} target="_blank" rel="noreferrer">
                <span className="door-label">{t.contact.github}</span>
                <span className="door-value">@erenpinyall</span>
                <span className="door-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="door" href={links.cv} target="_blank" rel="noreferrer">
                <span className="door-label">{t.contact.cv}</span>
                <span className="door-value">cv.pdf · PDF</span>
                <span className="door-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-mark" aria-hidden="true">
          Eren Pinyal
        </div>
        <div className="footer-row">
          <span>{t.footer.place}</span>
          <span>{t.footer.colophon}</span>
          <a href="#top">
            {t.footer.top} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
