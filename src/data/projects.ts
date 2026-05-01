// =====================================================
// Projects Data
// =====================================================
import type { Project, ProjectFilter } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects as projectsPT } from './projects.pt';
import { projects as projectsES } from './projects.es';

export function useProjects(): Project[] {
  const { language } = useLanguage();
  return language === 'ES' ? projectsES : projectsPT;
}

export function useFeaturedProjects(): Project[] {
  const projects = useProjects();
  return projects.filter((p) => p.featured);
}

export function useProjectsByCategory(filter: ProjectFilter): Project[] {
  const projs = useProjects();
  if (filter === 'all') return projs;
  return projs.filter((p) => p.category === filter);
}

export function useProjectById(id: string): Project | undefined {
  const projects = useProjects();
  return projects.find((p) => p.id === id);
}
