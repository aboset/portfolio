// =====================================================
// Technologies Data
// ─────────────────────────────────────────────────
// icon: Simple Icons slug (https://simpleicons.org)
// Leave icon empty for text-only display
// =====================================================
import type { TechItem, TechCategory } from '@/types';

export const technologies: TechItem[] = [
  // CMS
  { name: 'WordPress',    icon: 'wordpress',    category: 'cms'        },
  { name: 'Elementor',    icon: 'elementor',    category: 'cms'        },
  { name: 'Shopify',      icon: 'shopify',      category: 'cms'        },

  // Frontend
  { name: 'React',        icon: 'react',        category: 'frontend'   },
  { name: 'Angular',      icon: 'angular',      category: 'frontend'   },
  { name: 'TypeScript',   icon: 'typescript',   category: 'frontend'   },
  { name: 'JavaScript',   icon: 'javascript',   category: 'frontend'   },
  { name: 'Tailwind CSS', icon: 'tailwindcss',  category: 'frontend'   },
  { name: 'HTML5',        icon: 'html5',        category: 'frontend'   },
  { name: 'CSS3',         icon: 'css3',         category: 'frontend'   },

  // Backend
  { name: 'Node.js',      icon: 'nodedotjs',    category: 'backend'    },
  { name: 'PHP',          icon: 'php',          category: 'backend'    },
  { name: 'Python',       icon: 'python',       category: 'backend'    },
  { name: 'REST API',                           category: 'backend'    },

  // Database
  { name: 'MySQL',        icon: 'mysql',        category: 'database'   },
  { name: 'PostgreSQL',   icon: 'postgresql',   category: 'database'   },
  { name: 'MongoDB',      icon: 'mongodb',      category: 'database'   },
  { name: 'Firebase',     icon: 'firebase',     category: 'database'   },

  // Automation
  { name: 'n8n',          icon: 'n8n',          category: 'automation' },
  { name: 'Zapier',       icon: 'zapier',       category: 'automation' },
  { name: 'Make (Integromat)', icon: 'make',    category: 'automation' },
  { name: 'Claude AI',    icon: 'claude',       category: 'automation' },
  { name: 'ChatGPT',      icon: 'chatbot',      category: 'automation' },

  // Tools
  { name: 'Git',          icon: 'git',          category: 'tools'      },
  { name: 'GitHub',       icon: 'github',       category: 'tools'      },
  { name: 'Jira',         icon: 'jira',         category: 'tools'      },
  { name: 'Asana',        icon: 'asana',        category: 'tools'      },
  { name: 'Figma',        icon: 'figma',        category: 'tools'      },
  { name: 'SEO',          icon: 'seo',          category: 'tools'      },
  { name: 'Google Search Console', category: 'tools' },
{ name: 'Google Analytics', icon: 'googleanalytics', category: 'tools' },

  // DevOps / Hosting
  { name: 'cPanel',                             category: 'devops'     },
  { name: 'DNS / Domínios',                     category: 'devops'     },
  { name: 'Hosting',      icon: 'hostinger',    category: 'devops'     },
  { name: 'VPS',                                category: 'devops'     },
  { name: 'Cloudflare',   icon: 'cloudflare',   category: 'devops'     },
];

/** Labels for each category shown in the UI */
export const techCategoryLabels: Record<TechCategory, string> = {
  cms:        'CMS',
  frontend:   'Frontend',
  backend:    'Backend',
  database:   'Banco de Dados',
  automation: 'Automação',
  tools:      'Ferramentas',
  devops:     'Hosting & DevOps',
};

/** Order in which categories are displayed */
export const categoryOrder: TechCategory[] = [
  'cms',
  'frontend',
  'backend',
  'database',
  'automation',
  'tools',
  'devops',
];
