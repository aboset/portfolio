import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, getProjectsByCategory } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import Footer from '@/components/Footer';
import type { Project, ProjectFilter } from '@/types';

const FILTERS: { label: string; value: ProjectFilter }[] = [
  { label: 'Todos',            value: 'all'        },
  { label: 'WordPress',        value: 'wordpress'  },
  { label: 'React',            value: 'react'      },
  { label: 'CRM / Dashboards', value: 'crm'        },
  { label: 'Automatizações',   value: 'automacoes' },
];

const ITEMS_PER_LOAD = 6;
const LOAD_MORE_STEP  = 3;

export default function Projects() {
  const [activeFilter, setActiveFilter]       = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount]       = useState(ITEMS_PER_LOAD);
  const sentinelRef                           = useRef<HTMLDivElement>(null);

  const filtered = getProjectsByCategory(activeFilter);
  const visible  = filtered.slice(0, visibleCount);
  const hasMore  = visibleCount < filtered.length;

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeFilter]);

  // Infinite scroll via IntersectionObserver
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasMore) {
        setVisibleCount((prev) => prev + LOAD_MORE_STEP);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <>
      <main className="min-h-screen pt-20 pb-20">
        {/* ── Hero banner ── */}
        <div className="relative overflow-hidden border-b border-surface-border">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 600px 300px at 50% 100%, rgba(120,62,244,0.15), transparent)',
            }}
          />
          <div className="section-container relative py-16 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-purple-light/70 text-sm font-semibold uppercase tracking-widest mb-3">
                Portfólio completo
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3">
                Projetos
              </h1>
              <p className="text-white/50 text-base max-w-xl leading-relaxed">
                {projects.length} projetos em WordPress, React, CRM e Automatizações.
                Filtre por categoria ou explore todos.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="section-container mt-10">
          {/* ── Filter pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filtrar projetos por categoria"
          >
            {FILTERS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                aria-pressed={activeFilter === value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 ${
                  activeFilter === value
                    ? 'bg-brand-purple text-white shadow-[0_0_20px_rgba(120,62,244,0.4)]'
                    : 'bg-surface-card border border-surface-border text-white/55 hover:border-brand-purple/40 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* ── Results count ── */}
          <p className="text-white/30 text-xs mb-6">
            Mostrando <span className="text-white/60">{visible.length}</span> de{' '}
            <span className="text-white/60">{filtered.length}</span> projetos
          </p>

          {/* ── Grid ── */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── Infinite scroll sentinel / loader ── */}
          {hasMore && (
            <div
              ref={sentinelRef}
              className="flex justify-center items-center h-20 mt-6"
              aria-label="Carregando mais projetos"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className="w-6 h-6 border-2 border-brand-purple border-t-transparent rounded-full"
              />
            </div>
          )}

          {!hasMore && visible.length > 0 && (
            <p className="text-center text-white/25 text-sm mt-10">
              Todos os {filtered.length} projetos exibidos
            </p>
          )}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
