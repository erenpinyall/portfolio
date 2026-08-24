import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiOllama,
  SiLangchain,
  SiChartdotjs,
  SiGithub,
  SiVite,
  SiFramer,
  SiCss,
  SiOpenjdk,
  SiSpringboot,
  SiSpring,
  SiJunit5,
  SiApachemaven,
  SiScikitlearn,
  SiPandas,
  SiHibernate,
  SiMysql,
  SiDotnet,
  SiJsonwebtokens,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiRedis,
  SiC,
} from 'react-icons/si';

const CSharpIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z" />
  </svg>
);

const VSCodeIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);

const brandColors = {
  React: '#61DAFB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  'JavaScript (ES6+)': '#F7DF1E',
  'Node.js': '#5FA04E',
  PostgreSQL: '#4169E1',
  'Tailwind CSS': '#06B6D4',
  Python: '#3776AB',
  FastAPI: '#009688',
  'Chart.js': '#FF6384',
  Vite: '#646CFF',
  CSS: '#663399',
  Java: '#437291',
  'Spring Boot': '#6DB33F',
  'Spring Data JPA': '#6DB33F',
  'JUnit 5': '#25A162',
  JUnit: '#25A162',
  Maven: '#C71A36',
  'C#': '#68217A',
  'ASP.NET Core': '#512BD4',
  'Entity Framework Core': '#512BD4',
  Docker: '#2496ED',
  'Scikit-learn': '#F7931E',
  Hibernate: '#59666C',
  MySQL: '#4479A1',
  Git: '#F05032',
  'VS Code': '#007ACC',
  Redis: '#FF4438',
  C: '#A8B9CC',
};

const icons = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'JavaScript (ES6+)': SiJavascript,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Prisma: SiPrisma,
  'Prisma ORM': SiPrisma,
  PostgreSQL: SiPostgresql,
  'Tailwind CSS': SiTailwindcss,
  Python: SiPython,
  FastAPI: SiFastapi,
  Ollama: SiOllama,
  LangChain: SiLangchain,
  'Chart.js': SiChartdotjs,
  'GitHub API': SiGithub,
  GitHub: SiGithub,
  Vite: SiVite,
  'Framer Motion': SiFramer,
  CSS: SiCss,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  'Spring Data JPA': SiSpring,
  'JUnit 5': SiJunit5,
  JUnit: SiJunit5,
  Maven: SiApachemaven,
  'C#': CSharpIcon,
  'ASP.NET Core': SiDotnet,
  'Entity Framework Core': SiDotnet,
  JWT: SiJsonwebtokens,
  'JWT Auth': SiJsonwebtokens,
  Docker: SiDocker,
  'Scikit-learn': SiScikitlearn,
  Pandas: SiPandas,
  Hibernate: SiHibernate,
  MySQL: SiMysql,
  Git: SiGit,
  'Next.js': SiNextdotjs,
  Redis: SiRedis,
  C: SiC,
  'VS Code': VSCodeIcon,
};

export default function TechIcon({ name, size = 12 }) {
  const Icon = icons[name];
  if (!Icon) {
    return <span className="tech-dot" style={{ width: size, height: size }} />;
  }
  const color = brandColors[name];
  return <Icon size={size} style={color ? { color } : undefined} />;
}
