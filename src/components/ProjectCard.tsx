import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import type { Project, ProjectCategory } from '@/types';
import TechTag from '@/components/ui/TechTag';
import Badge from '@/components/ui/Badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  wordpress: 'WordPress',
  react: 'React',
  crm: 'CRM / Dashboard',
  automacoes: 'Automatizações',
};

const CATEGORY_GRADIENTS: Record<ProjectCategory, string> = {
  wordpress:
    'linear-gradient(135deg, rgba(33,117,155,0.25) 0%, rgba(26,16,64,0.8) 60%, rgba(120,62,244,0.1) 100%)',
  react:
    'linear-gradient(135deg, rgba(97,218,251,0.1) 0%, rgba(26,16,64,0.9) 60%, rgba(120,62,244,0.15) 100%)',
  crm:
    'linear-gradient(135deg, rgba(120,62,244,0.15) 0%, rgba(26,16,64,0.9) 60%, rgba(75,0,130,0.2) 100%)',
  automacoes:
    'linear-gradient(135deg, rgba(255,107,0,0.1) 0%, rgba(26,16,64,0.9) 60%, rgba(120,62,244,0.2) 100%)',
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Ver detalhes do projeto: ${project.name}`}
      className="group relative rounded-2xl bg-surface-card border border-surface-border overflow-hidden cursor-pointer hover:border-brand-purple/40 hover:shadow-[0_8px_40px_rgba(120,62,244,0.18)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
    >
      {/* ── Cover Image ── */}
      <div className="relative w-full aspect-video overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: CATEGORY_GRADIENTS[project.category] }}
          >
            {/* Large initial letter as visual placeholder */}
            <span className="text-white/8 text-9xl font-heading font-bold select-none leading-none">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-purple/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
            <Eye size={14} />
            {t('proj.btn.details')}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="category">{CATEGORY_LABELS[project.category]}</Badge>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-white text-base mb-1.5 leading-snug line-clamp-2">
          {project.name}
        </h3>
        <p className="text-white/50 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
          {project.stack.length > 4 && (
            <span className="tech-tag opacity-60">+{project.stack.length - 4}</span>
          )}
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.article>
  );
}
