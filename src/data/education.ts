// =====================================================
// Education & Languages
// =====================================================
import type { Education, Language as LangType } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

const educationsPT: Education[] = [
  {
    id: 'engenharia-sistemas',
    degree: 'Engenharia de Sistemas',
    institution: 'Instituto Universitário Politécnico Santiago Mariño',
    period: 'Concluído em Mar. 2023',
    status: 'Concluído',
    description: 'Formação em engenharia com foco em desenvolvimento de sistemas, algoritmos, redes e fundamentos de computação.',
  },
  {
    id: 'data-science-alura',
    degree: 'Formação em Data Science',
    institution: 'ONE / Alura',
    period: 'Concluído em 2025',
    status: 'Concluído',
    description: 'Aprofundamento em programação, análise de dados, estatística e validação de sistemas.',
  },
];

const educationsES: Education[] = [
  {
    id: 'engenharia-sistemas',
    degree: 'Ingeniería de Sistemas',
    institution: 'Instituto Universitario Politécnico Santiago Mariño',
    period: 'Finalizado en Mar. 2023',
    status: 'Finalizado',
    description: 'Formación en ingeniería con enfoque en desarrollo de sistemas, algoritmos, redes y fundamentos de computación.',
  },
  {
    id: 'data-science-alura',
    degree: 'Formación en Data Science',
    institution: 'ONE / Alura',
    period: 'Finalizado en 2025',
    status: 'Finalizado',
    description: 'Profundización en programación, análisis de datos, estadística y validación de sistemas.',
  },
];

export function useEducations(): Education[] {
  const { language } = useLanguage();
  return language === 'ES' ? educationsES : educationsPT;
}

const languagesPT: LangType[] = [
  { name: 'Espanhol',  level: 'Nativo',         flag: '🇪🇸', percentage: 100 },
  { name: 'Português', level: 'Intermediário',  flag: '🇧🇷', percentage: 60  },
  { name: 'Inglês',    level: 'Básico',         flag: '🇺🇸', percentage: 25  },
];

const languagesES: LangType[] = [
  { name: 'Español',  level: 'Nativo',         flag: '🇪🇸', percentage: 100 },
  { name: 'Portugués', level: 'Intermedio',  flag: '🇧🇷', percentage: 60  },
  { name: 'Inglés',    level: 'Básico',         flag: '🇺🇸', percentage: 25  },
];

export function useLanguagesData(): LangType[] {
  const { language } = useLanguage();
  return language === 'ES' ? languagesES : languagesPT;
}
