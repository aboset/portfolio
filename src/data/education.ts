// =====================================================
// Education & Languages — Based on real CV
// Alfredo Bose Rodriguez Chacon
// =====================================================
import type { Education, Language } from '@/types';

export const educations: Education[] = [
  {
    id: 'engenharia-sistemas',
    degree: 'Engenharia de Sistemas',
    institution: 'Instituto Universitário Politécnico Santiago Mariño',
    period: 'Concluído em Mar. 2023',
    status: 'Concluído',
    description:
      'Formação em engenharia com foco em desenvolvimento de sistemas, algoritmos, redes e fundamentos de computação.',
  },
  {
    id: 'data-science-alura',
    degree: 'Formação em Data Science',
    institution: 'ONE / Alura',
    period: '2024 – Em andamento',
    status: 'Em andamento',
    description:
      'Aprofundamento em programação, análise de dados, estatística e validação de sistemas.',
  },
];

// Languages based exactly on the CV
export const languages: Language[] = [
  { name: 'Espanhol',  level: 'Nativo',         flag: '🇪🇸', percentage: 100 },
  { name: 'Português', level: 'Intermediário',   flag: '🇧🇷', percentage: 60  },
  { name: 'Inglês',    level: 'Básico',          flag: '🇺🇸', percentage: 25  },
];
