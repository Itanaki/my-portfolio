export const profile = {
  name: "Enzo Daren B. Padual",
  role: "Programmer Analyst Trainee",
  company: "Cognizant",
  email: "enzopadual@gmail.com",
  github: "https://github.com/Itanaki",
  bio: "Motivated full-stack developer with hands-on experience in enterprise web applications using React, TypeScript, and Node.js. Currently at Cognizant working on form management solutions with CliftonLarsonAllen, with a background in Computer Engineering and Linux systems administration. Continuously learning cloud infrastructure, microservices, and AI-assisted development.",
  status: "Online",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 4, yearsExp: 2, lastUsed: 2026 },
      { name: "TypeScript", level: 3, yearsExp: 0.1, lastUsed: 2026 },
      { name: "JavaScript", level: 4, yearsExp: 4, lastUsed: 2026 },
      { name: "HTML / CSS", level: 4, yearsExp: 4, lastUsed: 2026 },
      { name: "React Native", level: 3, yearsExp: 1, lastUsed: 2025 },
      { name: "MUI", level: 3, yearsExp: 0.4, lastUsed: 2026 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 4, yearsExp: 1, lastUsed: 2026 },
      { name: "C#/.NET", level: 3, yearsExp: 0.5, lastUsed: 2026 },
      { name: "Fastify", level: 3, yearsExp: 0.5, lastUsed: 2026 },
      { name: "REST API", level: 3, yearsExp: 0.4, lastUsed: 2026 },
      { name: "Knex.js", level: 3, yearsExp: 0.4, lastUsed: 2026 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MSSQL", level: 4, yearsExp: 1, lastUsed: 2026 },
      { name: "Firestore", level: 3, yearsExp: 1, lastUsed: 2025 },
      { name: "MongoDB", level: 2, yearsExp: 0.5, lastUsed: 2026 },
    ],
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "Git", level: 4, yearsExp: 3, lastUsed: 2026 },
      { name: "Azure", level: 3, yearsExp: 0.3, lastUsed: 2026 },
      { name: "Docker", level: 2, yearsExp: 1, lastUsed: 2026 },
      { name: "Linux Admin", level: 4, yearsExp: 3, lastUsed: 2024 },
      { name: "Ansible", level: 3, yearsExp: 2, lastUsed: 2024 },
      { name: "Bash Scripting", level: 3, yearsExp: 2, lastUsed: 2024 },
      { name: "VS Code", level: 4, yearsExp: 4, lastUsed: 2026 },
    ],
  },
];

export const experience = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant GenC (StackRoute Bootcamp)",
    period: "2026 – Present",
    description:
      "Full-stack development fundamentals through Cognizant's intensive bootcamp program. Developed responsive UIs, built and optimized front-end components, and implemented interactive features using React, JavaScript, and Node.js.",
    highlights: [
      "HTML / CSS / Bootstrap",
      "JavaScript / React",
      "Node.js / Express",
      "Git workflow",
    ],
  },
  {
    role: "FullStack Developer (Client: CliftonLarsonAllen)",
    company: "Cognizant",
    period: "Apr 2026 – Jul 2026",
    description:
      "Developed and maintained enterprise web applications for form management solutions. Implemented features, debugged defects, and collaborated with QA and business stakeholders on a React + TypeScript stack.",
    highlights: [
      "React / TypeScript / JavaScript",
      "REST APIs / SQL Server",
      "Azure DevOps / Git",
      "Agile Scrum",
      "Code reviews & PRs",
    ],
  },
  {
    role: "Hardware & Technical Support Intern",
    company: "Twireless Inc.",
    period: "Mar 2025 – Jun 2025",
    description:
      "Diagnosed and resolved hardware/software issues, performed system maintenance, and provided technical support across departments. Managed inventory and quality checks.",
    highlights: [
      "Troubleshooting",
      "System maintenance",
      "Network concepts",
      "Inventory management",
    ],
  },
];

export const projects = [
  {
    title: "Todo Board Application",
    year: 2026,
    description:
      "A modern full-stack todo application with a Kanban-style board for organizing tasks, supporting drag-and-drop workflow management, authentication, search, due-date handling, and realtime updates.",
    tech: [
      "React.js",
      "Supabase (PostgreSQL)",
      "Fastify",
      "Knex",
      "Vite",
      "Material UI",
      "TypeScript",
      "Vercel",
      "Render",
    ],
    link: "https://github.com/Itanaki/todo-app",
    demo: "https://todo-app-nine-sandy-59.vercel.app/",
    image: "src/assets/todo-app-ss.png",
  },
  {
    title: "Stocks Listing App",
    year: 2026,
    description:
      "A full-stack web application for browsing and tracking stock market data in real time. Users can search and filter stocks, view interactive price charts with historical data, and save favorites synced to their account. The app includes a full authentication system with JWT-based sessions, a user profile page, dark/light theme support, and a role-based admin dashboard for user management. Built in collaboration with 2 teammates during the React-Node.js bootcamp.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Polygon.io",
      "Render",
      "Vercel",
    ],
    link: "https://github.com/Itanaki/Stock-Listing-App",
    demo: "https://stock-listing-app-black.vercel.app/",
    image: "src/assets/stock-listing-app.png",
  },
  {
    title:
      "Web-based Monitoring Application for Adaptive Fish Silage Fermentation",
    year: 2025,
    description:
      "Real-time data-driven monitoring dashboard for fermentation control. Collected pH, ammonia, and temperature sensor data from ESP32, processed through Firebase, and visualized with actionable indicators.",
    tech: ["React.js", "Firebase", "Koa", "ESP32", "ETL Pipeline"],
    link: "https://github.com/Itanaki/softdes-app",
    demo: "https://itanaki.github.io/softdes-app/#/monitoring",
    image: "src/assets/web-app-fish-silage-monitor.png",
  },
  {
    title: "Mobile App - Adaptive Fish Silage Fermentation Control System",
    year: 2025,
    description:
      "React Native mobile app for real-time monitoring and control. Calibrated and integrated IoT sensors (load-cell, pH, temperature, ammonia) with a reliable data pipeline.",
    tech: [
      "React Native",
      "Firebase",
      "Koa",
      "IoT / Arduino",
      "Real-time sync",
    ],
    link: "https://github.com/Itanaki/dynamic-app-with-notif",
    demo: "https://www.youtube.com/playlist?list=PLa_BGrugAPYU",
    image: "src/assets/Fish_Silage_3Screens.jpg",
  },
  {
    title: "Portable Solar-Powered Desalination System",
    year: 2024,
    description:
      "Designed and built a modular, portable desalination unit with integrated ultra-filtration for safe drinking water. Led core design, integrated PPM sensors with real-time validation.",
    tech: ["Hardware design", "IoT", "Data logging", "PPM sensor logic"],
    link: "https://drive.google.com/file/d/1z3au0HN108CW0s3RKRtbrLBhzxD6dv2c/view?usp=drive_link",
    image: "src/assets/High-Level Diagram.png",
  },
];

export const curatedCertifications = [
  { name: "React 18 / 19 Course", date: "Mar 2026" },
  { name: "React & TypeScript - The Practical Guide", date: "Mar 2026" },
  { name: "The Ultimate Redux Course 2026", date: "Mar 2026" },
  {
    name: "The Complete Microservices & Event-Driven Architecture",
    date: "Mar 2026",
  },
  { name: "Prompt Engineering Foundation", date: "Apr 2026" },
  { name: "Claude AI & Claude Code Integration", date: "May 2026" },
  { name: "Azure OpenAI Services - The Complete Guide", date: "May 2026" },
  { name: "AI Agents - Building Teams of LLM Agents", date: "Apr 2026" },
];

export const allCertifications = [
  { name: "Understanding Personality Types at Work", date: "Jan 2026" },
  { name: "How to Build Your Professional Network", date: "Jan 2026" },
  {
    name: "Accountability Training For Managers and Corporate Employees",
    date: "Jan 2026",
  },
  {
    name: "React 18 / 19 Course 2025 - Learn React JS the Fast Way",
    date: "Mar 2026",
  },
  { name: "React & TypeScript - The Practical Guide", date: "Mar 2026" },
  {
    name: "The Ultimate Redux Course 2026 - [LATEST Redux-toolkit]",
    date: "Mar 2026",
  },
  {
    name: "The Complete Microservices & Event-Driven Architecture",
    date: "Mar 2026",
  },
  {
    name: "Microservices: Designing Highly Scalable Systems",
    date: "Mar 2026",
  },
  { name: "Microservices Architecture - The Complete Guide", date: "Mar 2026" },
  { name: "Prompt Engineering Foundation", date: "Apr 2026" },
  {
    name: "Intro to AI Agents: Build an Army of Digital Workers with AI",
    date: "Apr 2026",
  },
  {
    name: "AI Agents: Building Teams of LLM Agents that Work For You",
    date: "Apr 2026",
  },
  { name: "AI Agents - 101 Basics", date: "Apr 2026" },
  { name: "Claude AI: The AI Assistant You'll Actually Use", date: "Apr 2026" },
  {
    name: "Claude, Claude Code, Claude Cowork, and Claude in MS Office",
    date: "May 2026",
  },
  { name: "Claude Awareness Program", date: "May 2026" },
  {
    name: "Machine Learning for Absolute Beginners - Level 1",
    date: "May 2026",
  },
  { name: "Executive Briefing: Deep Learning (DL)", date: "May 2026" },
  {
    name: "Executive Briefing: Natural Language Processing (NLP)",
    date: "May 2026",
  },
  { name: "Azure OpenAI Services - The Complete Guide", date: "May 2026" },
  { name: "Prompt Engineering - Dot Net", date: "Jun 2026" },
];
