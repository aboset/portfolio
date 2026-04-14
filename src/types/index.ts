// =====================================================
// Global TypeScript interfaces for the portfolio
// Edit this file to update any data structure
// =====================================================

/** Categories available for projects */
export type ProjectCategory = 'wordpress' | 'react' | 'crm' | 'automacoes';

/** Filter value including "all" option */
export type ProjectFilter = ProjectCategory | 'all';

/** Technology categories for the Tech section */
export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'cms'
  | 'tools'
  | 'automation'
  | 'database'
  | 'devops';

/** Language proficiency levels */
export type LanguageLevel = 'Nativo' | 'Avançado' | 'Intermediário' | 'Básico';

/** Work type */
export type ExperienceType = 'Remoto' | 'Presencial' | 'Híbrido' | 'Freelance';

// =====================================================
// Project
// =====================================================
export interface Project {
  id: string;
  name: string;
  /** Short description shown on the card */
  shortDescription: string;
  /** Full description shown in the modal */
  description: string;
  category: ProjectCategory;
  /** Tech stack tags */
  stack: string[];
  /** Cover image URL – leave empty to use gradient fallback */
  image: string;
  /** Live site URL */
  siteUrl?: string;
  /** GitHub repo URL – only shown if provided */
  githubUrl?: string;
  /** Show in the featured section on homepage */
  featured: boolean;
  /** Bullet-point highlights in the modal */
  highlights?: string[];
  year?: number;
}

// =====================================================
// Experience
// =====================================================
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: ExperienceType;
  /** Mark as current position */
  current?: boolean;
  description: string;
  technologies: string[];
  achievements?: string[];
}

// =====================================================
// Education
// =====================================================
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status?: string;
  description?: string;
}

// =====================================================
// Language
// =====================================================
export interface Language {
  name: string;
  level: LanguageLevel;
  flag: string;
  /** 0-100 for progress bar */
  percentage: number;
}

// =====================================================
// Technology
// =====================================================
export interface TechItem {
  name: string;
  /** Simple Icons slug (e.g. "react", "wordpress") */
  icon?: string;
  category: TechCategory;
}

// =====================================================
// Metrics
// =====================================================
export interface Metric {
  /** Display value e.g. "50+" or "3+" */
  value: string;
  label: string;
  description: string;
}

// =====================================================
// Navigation
// =====================================================
export interface NavItem {
  label: string;
  href: string;
}

// =====================================================
// Site Config
// =====================================================
export interface SiteConfig {
  /** Display name */
  name: string;
  tagline: string;
  description: string;
  whatsapp: string;
  whatsappMessage: string;
  github: string;
  linkedin: string;
  email: string;
  cvPath: string;
  nav: NavItem[];
}
