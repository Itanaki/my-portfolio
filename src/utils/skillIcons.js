import React from 'react';
import {
  DiReact,
  DiNodejs,
  DiJavascript,
  DiHtml5,
  DiDatabase,
  DiMsqlServer,
  DiMongodb,
  DiGit,
  DiDocker,
  DiLinux,
  DiTerminal,
  DiVisualstudio,
  DiCode,
} from 'react-icons/di';

import { BsTypescript } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { SiAnsible, SiPostman } from "react-icons/si";

import { Icon } from "@iconify/react";


const iconify = (name) => (props) => React.createElement(Icon, { icon: name, ...props });

// Color palette by category
const COLORS = {
  frontend: '#3B82F6', // Blue
  backend: '#10B981', // Green
  database: '#F59E0B', // Amber
  infrastructure: '#8B5CF6', // Purple
  ai: '#06B6D4', // Teal
};

// Icon mapping for all skills
export const SKILL_ICONS = {
  // Frontend
  React: { icon: DiReact, color: COLORS.frontend },
  TypeScript: { icon: BsTypescript, color: COLORS.frontend },
  JavaScript: { icon: iconify('tabler:brand-javascript'), color: COLORS.frontend },
  'HTML / CSS': { icon: DiHtml5, color: COLORS.frontend },
  'React Native': { icon: DiReact, color: COLORS.frontend },
  MUI: { icon: iconify('simple-icons:mui'), color: COLORS.frontend },
  BoothStrap: { icon: iconify('simple-icons:bootstrap'), color: COLORS.frontend },

  // Backend
  'Node.js': { icon: DiNodejs, color: COLORS.backend },
  'C#/.NET': { icon: iconify('bxl:c-sharp'), color: COLORS.backend },
  Fastify: { icon: iconify('devicon-plain:fastify-wordmark'), color: COLORS.backend },
  'REST API': { icon: iconify('dashicons:rest-api'), color: COLORS.backend },
  'Knex.js': { icon: iconify('simple-icons:knexdotjs'), color: COLORS.backend },
  'Python': { icon: iconify('simple-icons:python'), color: COLORS.backend },

  // Database
  MSSQL: { icon: DiMsqlServer, color: COLORS.database },
  Firestore: { icon: DiDatabase, color: COLORS.database },
  MongoDB: { icon: DiMongodb, color: COLORS.database },

  // Infrastructure & Tools
  Git: { icon: DiGit, color: COLORS.infrastructure },
  Azure: { icon: VscAzure, color: COLORS.infrastructure },
  Docker: { icon: DiDocker, color: COLORS.infrastructure },
  'Linux Admin': { icon: DiLinux, color: COLORS.infrastructure },
  Ansible: { icon: SiAnsible, color: COLORS.infrastructure },
  'Bash Scripting': { icon: DiTerminal, color: COLORS.infrastructure },
  'VS Code': { icon: DiVisualstudio, color: COLORS.infrastructure },
  'Postman': { icon: SiPostman, color: COLORS.infrastructure },
  'Claude': { icon: iconify('ri:claude-fill'), color: COLORS.infrastructure },
  'Github Copilot': { icon: iconify('simple-icons:githubcopilot'), color: COLORS.infrastructure },
};

// Get icon and color for a skill
export function getSkillIcon(skillName) {
  return SKILL_ICONS[skillName] || {
    icon: DiCode,
    color: COLORS.infrastructure,
  };
}
