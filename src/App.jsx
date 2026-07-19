import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import TypingEffect from './components/TypingEffect';
import SkillSection from './components/SkillSection';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard';

const skills = [
  { label: 'languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C#', 'SQL'] },
  { label: 'frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design'] },
  { label: 'backend', items: ['Spring Boot', 'Node.js', 'Express', 'REST API', 'JWT Auth'] },
  { label: 'databases', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Prisma ORM'] },
  { label: 'tools', items: ['Git', 'GitHub', 'Vite', 'Maven', 'VS Code'] },
];

const experience = [
  {
    company: 'demiraysoft',
    role: 'web developer intern',
    date: 'aug – sep 2025',
    location: 'TR',
    details: [
      'Developed responsive web pages using HTML, CSS, JavaScript and React.',
      'Contributed to the development of a Family Association Center Management System.',
      'Participated in the development of a Teknokent web project.',
      'Worked collaboratively with the development team on frontend improvements and content integration.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'],
  },
  {
    company: 'enel enerji',
    role: 'it support intern',
    date: 'aug – sep 2024',
    location: 'TR',
    details: [
      'Assisted in UPS diagnostics, motherboard repair and maintenance procedures.',
      'Performed firmware updates and hardware testing.',
      'Supported troubleshooting processes for electronic devices.',
      'Gained practical experience in hardware and software integration.',
    ],
    tech: ['C (Embedded)', 'UPS Systems', 'Firmware Tools', 'Diagnostics'],
  },
];

const projects = [
  {
    name: 'freshy',
    year: '2026',
    desc: 'Instacart / Blinkit benzeri full-stack market sipariş ve teslimat uygulaması. JWT auth, Stripe ödeme, canlı sipariş takibi, admin paneli ve delivery partner sistemi.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/erenpinyall/freshy',
  },
  {
    name: 'rag-pdf',
    year: '2026',
    desc: 'PDF dosyalarını yükleyip vektörel olarak indeksleyen, soruları doğrudan belgelere dayanarak cevaplandıran yerel RAG asistanı. ChromaDB, SentenceTransformers ve Ollama ile çalışıyor.',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'SentenceTransformers', 'Ollama', 'LangChain'],
    github: 'https://github.com/erenpinyall/rag-pdf',
  },
  {
    name: 'gitstats',
    year: '2026',
    desc: 'GitHub kullanıcılarının profillerini derinlemesine analiz eden interaktif web uygulaması. Profil skoru, teknoloji dağılımı, aktivite ısı haritası ve AI destekli analiz.',
    tech: ['React', 'JavaScript', 'Recharts', 'Chart.js', 'GitHub API'],
    github: 'https://github.com/erenpinyall/gitstats',
  },
  {
    name: 'portfolio',
    year: '2026',
    desc: 'React ve Framer Motion ile hazırlanmış, iki panelli interaktif kişisel portfolio sitesi. Scroll animasyonları, typing efekti ve responsive tasarım.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/erenpinyall/portfolio',
  },
  {
    name: 'vehicle rental management system',
    year: '2025',
    desc: 'Araçlar, müşteriler ve kiralama işlemleri için normalize edilmiş veritabanına sahip full-stack kiralama yönetim uygulaması. CRUD işlemleri ve kiralama yönetim fonksiyonları geliştirildi.',
    tech: ['C#', 'Microsoft SQL Server', 'ADO.NET', 'OOP'],
  },
  {
    name: 'turkish cyberbullying detection',
    year: '2025',
    desc: 'Türkçe siber zorbalık içeriklerini sınıflandırmak için NLP teknikleri kullanan makine öğrenmesi modeli. Stemming, stopword kaldırma ve TF-IDF vektörizasyonu ile %85.39 doğruluk elde edildi.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NLTK', 'TF-IDF'],
  },
  {
    name: 'library management system',
    year: '2024',
    desc: 'Kitaplar, üyeler ve ödünç alma/iade işlemleri için RESTful API\'lere sahip Java tabanlı kütüphane yönetim sistemi. MySQL veritabanı şeması ve Hibernate ORM entegrasyonu.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven', 'JUnit'],
  },
];

const highlights = [
  'web developer intern at demiraysoft',
  '6 projects on github',
  'computer engineering graduate',
  'full-stack development enthusiast',
  'problem-solving oriented',
  'always learning new technologies',
];

const typingTexts = [
  'full stack developer',
  'building web applications',
  'learning new technologies',
  'solving complex problems',
  'writing clean code',
];

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="layout">
      {/* LEFT PANEL */}
      <aside className="left-panel">
        <nav className="nav">
          <motion.button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </motion.button>
          <motion.a
            href="#experience"
            className="nav-link"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            whileHover={{ y: -1 }}
          >
            experience
          </motion.a>
          <motion.span
            className="nav-sep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            ·
          </motion.span>
          <motion.a
            href="#projects"
            className="nav-link"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ y: -1 }}
          >
            projects
          </motion.a>
          <motion.span
            className="nav-sep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            ·
          </motion.span>
          <motion.a
            href="#contact"
            className="nav-link"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ y: -1 }}
          >
            contact
          </motion.a>
        </nav>

        <div className="left-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="hero-name">
              <span className="name-line">eren</span>
              <span className="name-line">pinyal</span>
            </h1>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              className="cv-hero-link"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              whileHover={{ y: -1 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              cv
            </motion.a>
            <motion.p
              className="hero-title"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              full stack developer
            </motion.p>
            <p className="hero-bio">
              computer engineering graduate with internship experience in web development
              and IT support. experienced in developing software using C#, JavaScript, SQL,
              HTML, CSS and React.
            </p>
            <TypingEffect
              texts={typingTexts}
              speed={70}
              deleteSpeed={35}
              pause={2500}
            />
          </motion.div>

          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />

          <SkillSection skills={skills} />
        </div>

        <div>
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="bottom-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="location-text">kütahya, turkey</p>
            <div className="social-col">
              <motion.a
                href="https://github.com/erenpinyall"
                target="_blank"
                className="social-pill"
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/eren-pinyal"
                target="_blank"
                className="social-pill"
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin
              </motion.a>
              <motion.a
                href="mailto:erenpinyal122@gmail.com"
                className="social-pill"
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                email
              </motion.a>
              <motion.a
                href="/cv.pdf"
                target="_blank"
                className="social-pill"
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                cv
              </motion.a>
            </div>
          </motion.div>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <main className="right-panel">
        <section id="experience" className="right-section">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            experience
          </motion.h2>
          <div className="timeline">
            {experience.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </div>
        </section>

        <section id="projects" className="right-section">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            projects
          </motion.h2>
          <div className="projects-list">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </section>

        <section id="contact" className="right-section">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            contact
          </motion.h2>
          <motion.p
            className="contact-desc"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Feel free to reach out. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </motion.p>
          <motion.div
            className="contact-pills"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.a
              href="mailto:erenpinyal122@gmail.com"
              className="contact-pill"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/eren-pinyal"
              target="_blank"
              className="contact-pill"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              linkedin
            </motion.a>
            <motion.a
              href="https://github.com/erenpinyall"
              target="_blank"
              className="contact-pill"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              github
            </motion.a>
          </motion.div>
        </section>

        <motion.div
          className="highlights"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <motion.div
                className="highlight-item"
                key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className="highlight-dot" />
                <span className="highlight-text">{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
