import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  wordpress:
    'linear-gradient(135deg, rgba(33,117,155,0.3) 0%, rgba(26,16,64,0.9) 60%)',
  react:
    'linear-gradient(135deg, rgba(97,218,251,0.15) 0%, rgba(26,16,64,0.9) 60%)',
  crm:
    'linear-gradient(135deg, rgba(120,62,244,0.2) 0%, rgba(26,16,64,0.9) 60%)',
  automacoes:
    'linear-gradient(135deg, rgba(255,107,0,0.15) 0%, rgba(26,16,64,0.9) 60%)',
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Handle keyboard + body scroll
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
          aria-modal="true"
          role="dialog"
          aria-label={project.name}
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl bg-surface-card border border-surface-border overflow-hidden shadow-2xl my-8"
          >
            {/* ── Image / Cover ── */}
            <div className="relative aspect-video overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: CATEGORY_GRADIENTS[project.category] }}
                >
                  <span className="text-white/10 text-9xl font-heading font-bold select-none">
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* ── Content ── */}
            <div className="p-6 sm:p-8">
              {/* Year + Name */}
              {project.year && (
                <p className="text-brand-purple-light/60 text-xs font-semibold uppercase tracking-widest mb-1">
                  {project.year}
                </p>
              )}
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                {project.name}
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">
                    Destaques
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-white/60 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack */}
              <div className="mb-6">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">
                  Tecnologias
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Action buttons – GitHub only shown if URL exists */}
              <div className="flex flex-col sm:flex-row gap-3">
                {project.siteUrl && (
                  <Button
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink size={15} />}
                    className="flex-1 justify-center"
                  >
                    Ver Site
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={<Github size={15} />}
                    className="flex-1 justify-center"
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
