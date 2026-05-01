import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useFeaturedProjects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import SectionTitle from '@/components/ui/SectionTitle';
import type { Project } from '@/types';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = useFeaturedProjects();
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title={t('proj.title')}
            subtitle={t('proj.subtitle')}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-12">
          {featuredProjects.slice(0, 9).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* "Ver todos" CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-purple/30 text-brand-purple-light font-medium hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-300 group"
          >
            {t('proj.btn.all')}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
