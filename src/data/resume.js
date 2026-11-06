import todoImg from "../assets/todo-app-ss.png";
import stockImg from "../assets/stock-listing-app.png";
import webFishImg from "../assets/web-app-fish-silage-monitor.png";
import fishScreens from "../assets/Fish_Silage_3Screens.jpg";
import highLevel from "../assets/High-Level Diagram.png";
import ResumePDF from "../assets/RESUME-2025-Padual_E.pdf";
import CVPDF from "../assets/CDE CV - Enzo Padual.pdf";
import sysQuizImg from "../assets/sysQuiz.png";
import parkingHomeImg from "../assets/parking-home.png";
import parkingCreateImg from "../assets/parking-create-reservation.jpg";
import parkingReservationsImg from "../assets/parking-my-reservations.jpg";
import parkingApprovalsImg from "../assets/parking-approvals.jpg";
import parkingAvailabilityImg from "../assets/parking-slot-availability.jpg";

export const profile = {
  name: "Enzo Daren B. Padual",
  role: "Programmer Analyst Trainee",
  company: "Cognizant",
  email: "enzopadual@gmail.com",
  github: "https://github.com/Itanaki",
  bio: "Motivated full-stack developer with hands-on experience in enterprise web applications using React, TypeScript, and Node.js. Currently at Cognizant working on form management solutions with CliftonLarsonAllen, with a background in Computer Engineering and Linux systems administration. Continuously learning cloud infrastructure, microservices, and AI-assisted development.",
  status: "Online",
  resume: ResumePDF,
  cv: CVPDF,
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 4, yearsExp: 2, lastUsed: 2026 },
      { name: "TypeScript", level: 3, yearsExp: 0.1, lastUsed: 2026 },
      { name: "JavaScript", level: 4, yearsExp: 1, lastUsed: 2026 },
      { name: "HTML / CSS", level: 4, yearsExp: 1, lastUsed: 2026 },
      { name: "React Native", level: 3, yearsExp: 1, lastUsed: 2025 },
      { name: "MUI", level: 3, yearsExp: 0.4, lastUsed: 2026 },
      { name: "BoothStrap", level: 3, yearsExp: 0.4, lastUsed: 2026 },
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
      { name: "Python" },
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
      { name: "Postman", level: 3, yearsExp: 1, lastUsed: 2026 },
      { name: "Claude" },
      { name: "Github Copilot" },
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
    title: "PH Studio Parking Reservation System",
    year: 2026,
    description:
      "Leading the ongoing design, development, and testing of a parking reservation system using Microsoft Power Apps, SharePoint Lists, and Power Automate. Developing reservation and approval workflows, parking slot availability management, automated notifications, data validation, and a responsive interface. Using Microsoft 365 Copilot and Claude AI to support development, workflow design, and iterative improvements.",
    tech: [
      "Microsoft Power Apps",
      "SharePoint Lists",
      "Power Automate",
      "Microsoft 365 Copilot",
      "Claude AI",
    ],
    screenshots: [
      { src: parkingHomeImg, label: "Home dashboard" },
      { src: parkingCreateImg, label: "Create reservation" },
      { src: parkingReservationsImg, label: "My reservations" },
      { src: parkingApprovalsImg, label: "Reservation approvals" },
      { src: parkingAvailabilityImg, label: "Parking slot availability" },
    ],
  },
  {
    title: "System Design Quiz Application - With AI Gemini Integration",
    year: 2026,
    description:
      "SysQuiz is an interactive platform for practicing system design through quizzes, progress tracking, leaderboards, badges, and daily AI-generated challenges.",
    tech: [
      "React.js",
      "Supabase (PostgreSQL)",
      "Node.js",
      "Prisma ORM",
      "Zod",
      "Google Gemini API",
      "Vite",
      "Material UI",
      "TypeScript",
      "Vercel",
      "Render",
      "CORS and Dotenv"
    ],
    link: "https://github.com/Itanaki/system-design-quiz-app",
    demo: "https://system-design-quiz-app.vercel.app/",
    image: sysQuizImg,
  },
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
    image: todoImg,
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
    image: stockImg,
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
    image: webFishImg,
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
    image: fishScreens,
  },
  {
    title: "Portable Solar-Powered Desalination System",
    year: 2024,
    description:
      "Designed and built a modular, portable desalination unit with integrated ultra-filtration for safe drinking water. Led core design, integrated PPM sensors with real-time validation.",
    tech: ["Hardware design", "IoT", "Data logging", "PPM sensor logic"],
    link: "https://drive.google.com/file/d/1z3au0HN108CW0s3RKRtbrLBhzxD6dv2c/view?usp=drive_link",
    image: highLevel,
  },
];

export const allCertifications = [
  { name: "Understanding Personality Types at Work", date: "Jan 2026" },
  { name: "How to Build Your Professional Network", date: "Jan 2026" },
  { name: "Accountability Training for Managers and Corporate Employees", date: "Jan 2026" },
  { name: "React 18 / 19 Course 2025 - Learn React JS the Fast Way", date: "Mar 2026" },
  { name: "React & TypeScript - The Practical Guide", date: "Mar 2026", highlighted: true },
  { name: "The Ultimate Redux Course 2026 - Latest Redux Toolkit", date: "Mar 2026" },
  { name: "The Complete Microservices & Event-Driven Architecture", date: "Mar 2026", highlighted: true },
  { name: "Microservices: Designing Highly Scalable Systems", date: "Mar 2026" },
  { name: "Microservices Architecture - The Complete Guide", date: "Mar 2026" },
  { name: "Python for Developers", date: "Aug 2026", highlighted: true },
  { name: "C# Setting Up Development Environment", date: "Sep 2026" },
  { name: "C# Fundamentals", date: "Sep 2026", highlighted: true },
  { name: "C# Output Lab: Console Creatures", date: "Sep 2026" },
  { name: "C# Data Types and Variables", date: "Sep 2026" },
  { name: "C# Data Types Lab: Galactic Travel Agency", date: "Sep 2026" },
  { name: "C# Numbers", date: "Sep 2026" },
  { name: "C# Numbers Lab: Money Maker Live", date: "Sep 2026" },
  { name: "C# Strings", date: "Sep 2026" },
  { name: "C# Strings Lab: Mad Libs", date: "Sep 2026" },
  { name: "C# Logic", date: "Oct 2026" },
  { name: "C# Logic Lab: Space Expedition Boolean Adventure", date: "Oct 2026" },
  { name: "C# Conditionals", date: "Oct 2026" },
  { name: "C# Conditionals Lab: Choose Your Own Adventure", date: "Oct 2026" },
  { name: "C# Conditionals Lab: Password Checker", date: "Oct 2026" },
  { name: "C# Arrays", date: "Oct 2026" },
  { name: "C# Arrays Lab: Space Mission Inventory", date: "Oct 2026" },
  { name: "C# Loops", date: "Oct 2026" },
  { name: "Machine Learning for Absolute Beginners - Level 1", date: "May 2026" },
  { name: "Executive Briefing: Deep Learning (DL)", date: "May 2026" },
  { name: "Executive Briefing: Natural Language Processing (NLP)", date: "May 2026" },
  { name: "AWS Cloud Practitioner 2025: ML, AI, & Data Analytics", date: "Aug 2026" },
  { name: "Generative AI, Prompting, and Ethics Awareness - Beginner", date: "Sep 2026" },
  { name: "Prompt Engineering Foundation", date: "Apr 2026" },
  { name: "Prompt Engineering - .NET", date: "Jun 2026" },
  { name: "Context Engineering 101", date: "Date not listed" },
  { name: "Intro to AI Agents: Build an Army of Digital Workers with AI", date: "Apr 2026" },
  { name: "AI Agents: Building Teams of LLM Agents that Work for You", date: "Apr 2026" },
  { name: "AI Agents - 101 Basics", date: "Apr 2026" },
  { name: "AI Agents and Workflows", date: "Aug 2026" },
  { name: "Claude AI: The AI Assistant You'll Actually Use", date: "Apr 2026" },
  { name: "Claude, Claude Code, Claude Cowork, and Claude in MS Office", date: "May 2026" },
  { name: "Claude Awareness Program", date: "May 2026" },
  { name: "AI-Assisted Developer: Claude Code Knowledge Based Assessment [201-Intermediate]", date: "Sep 2026", highlighted: true },
  { name: "Azure OpenAI Services - The Complete Guide", date: "May 2026", highlighted: true },
  { name: "OpenAI Technical Practitioner [201-Intermediate]", date: "Sep 2026", highlighted: true },
  { name: "Codex Deployment Practitioner Program [201-Intermediate]", date: "Sep 2026" },
  { name: "Codex Deployment Practitioner", date: "Sep 2026" },
  { name: "AI Assisted Developer: GitHub Copilot Knowledge Based Assessment [201-Intermediate]", date: "Sep 2026" },
  { name: "AI-Assisted Developer: GitHub Copilot On the Job Evaluation [201-Intermediate]", date: "Sep 2026", highlighted: true },
  { name: "AI-Assisted Development Using Gemini Assist: Knowledge Based Assessment [201-Intermediate]", date: "Oct 2026" },
  { name: "AI Augmented Software Engineer: Gemini Assist Knowledge Based Assessment [201-Intermediate]", date: "Oct 2026" },
  { name: "AI Assisted Developer: DA Pre-requisite", date: "Date not listed" },
  { name: "Build with Gemini Skill Badge", date: "Sep 2026" },
  { name: "Google Certified Partner Specialist: Gemini Enterprise Agent Development - Use Agents to Build Agents", date: "Sep 2026" },
  { name: "Google Certified Partner Specialist: Gemini Enterprise Agent Development - Agent Evaluation and Hill Climbing", date: "Sep 2026" },
  { name: "Google Certified Partner Specialist: Gemini Enterprise Agent Development - Build and Deploy Agents with Agent Development Kit (ADK)", date: "Oct 2026" },
  { name: "Google Cloud Partner Specialist Certification: Gemini Enterprise Agent Development", date: "Oct 2026", highlighted: true },
  { name: "Build with Gemini - Track 2: Platform IT Developer Badge", date: "Oct 2026", highlighted: true },
  { name: "AWS Cloud Quest: Cloud Practitioner - Training Badge", date: "Aug 2026", highlighted: true },
  { name: "AWS Certified Cloud Practitioner: Cloud Concepts Literacy - Beginner Level", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Benefits & Design Principles of the AWS Cloud", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Automation & Managed Services", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Migration to the AWS Cloud & Cloud Economics", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Deploying & Operating in the AWS Cloud", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Access Management", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Shared Responsibility & Compliance", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Components & Resources for Security", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Overview of Cloud Security", date: "Aug 2026" },
  { name: "AWS Certified Cloud Practitioner: Security and Compliance Literacy - Beginner Level", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: AWS Database Services", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: AWS Compute Services", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: AWS Storage Services", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: AWS Network Services", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: AWS Developer Services & Tools", date: "Aug 2026" },
  { name: "AWS Certified Cloud Practitioner: Cloud Technology and Services Literacy - Beginner Level", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Technical and Support Resources", date: "Aug 2026" },
  { name: "AWS Certified Cloud Practitioner: Billing, Pricing, and Support Literacy - Beginner Level", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner 2025: Pricing, Billing, Budgeting, & Cost Management", date: "Aug 2026" },
  { name: "CLF-C02: AWS Certified Cloud Practitioner - Practice Test", date: "Aug 2026" },
  { name: "AWS Cloud Practitioner - CLF-C02", date: "Sep 2026" },
  { name: "AWS Cloud Practitioner Bootcamp August 2025: Session 1 Replay", date: "Sep 2026" },
  { name: "AWS Certified Cloud Practitioner (CLF-C02) - Skill Labs", date: "Sep 2026" },
  { name: "AWS Cloud Practitioner Bootcamp August 2025: Session 2 Replay", date: "Sep 2026" },
  { name: "GitHub Foundations Part 1 of 2", date: "Sep 2026" },
  { name: "GitHub Foundations Part 2 of 2", date: "Sep 2026" },
  { name: "GitHub Fundamentals: Administration Basics and Product Features, Part 1 of 2", date: "Sep 2026" },
  { name: "GitHub Foundations Certification Program", date: "Oct 2026", highlighted: true },
];

export const curatedCertifications = allCertifications.filter(
  (cert) => cert.highlighted
);
 