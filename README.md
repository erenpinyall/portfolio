<div align="center">

# Eren Pinyal — Portfolio

**Personal portfolio website built with React, featuring smooth animations and a clean, modern design.**

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-05F?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## About

A responsive, interactive portfolio website showcasing my projects, experience, and skills as a Computer Engineering graduate. Built with a two-panel layout inspired by modern developer portfolios.

## Features

- **Two-Panel Layout** — Sticky sidebar with about/skills, scrollable main panel with experience and projects
- **Typing Animation** — Dynamic text effect cycling through roles and interests
- **Scroll Animations** — Staggered entrance animations powered by Framer Motion
- **Interactive Elements** — Hover effects on timeline dots, skill tags, project cards, and social links
- **Responsive Design** — Adapts from desktop two-panel to mobile single-column layout
- **Light Theme** — Clean, minimal design with a blue accent color

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite |
| Animations | Framer Motion |
| Styling | CSS (Custom Properties) |
| Font | Inter (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/erenpinyall/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

Output will be in the `dist/` folder.

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── TypingEffect.jsx    # Typing animation component
│   │   ├── SkillSection.jsx    # Skills grid with animated tags
│   │   ├── TimelineItem.jsx    # Experience timeline entry
│   │   └── ProjectCard.jsx     # Project card with GitHub link
│   ├── App.jsx                 # Main layout and data
│   ├── App.css                 # Component styles
│   ├── index.css               # Global styles and CSS variables
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── README.md
```

## Sections

- **About** — Name, bio, and typing animation
- **Skills** — Categorized tech stack with icon tags
- **Experience** — Timeline of work experience with interactive dots
- **Projects** — 6 projects with descriptions, tech tags, and GitHub links
- **Contact** — Email, LinkedIn, and GitHub links

## Contact

**Eren Pinyal**

- Email: [erenpinyal122@gmail.com](mailto:erenpinyal122@gmail.com)
- LinkedIn: [eren-pinyal](https://www.linkedin.com/in/eren-pinyal)
- GitHub: [erenpinyall](https://github.com/erenpinyall)

---

<div align="center">

Made with React

</div>
