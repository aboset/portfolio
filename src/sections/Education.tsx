import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { useEducations, useLanguagesData } from '@/data/education';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Education() {
  const educations = useEducations();
  const languages = useLanguagesData();
  const { t } = useLanguage();

  return (
    <section id="formacao" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <SectionTitle
            title={t('edu.title')}
            subtitle={t('edu.subtitle')}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ── Education cards ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-brand-purple-light" />
              <h3 className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Educação
              </h3>
            </div>
            <div className="space-y-4">
              {educations.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-purple/25 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="font-heading font-semibold text-white text-sm leading-snug">
                      {edu.degree}
                    </h4>
                    {edu.status && (
                      <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-brand-purple-light/70 text-sm mb-1">{edu.institution}</p>
                  <p className="text-white/35 text-xs">{edu.period}</p>
                  {edu.description && (
                    <p className="text-white/45 text-xs mt-2 leading-relaxed">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Languages ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Languages size={18} className="text-brand-purple-light" />
              <h3 className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Idiomas
              </h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-surface-card border border-surface-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{lang.flag}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{lang.name}</p>
                        <p className="text-white/40 text-xs">{lang.level}</p>
                      </div>
                    </div>
                    <span className="text-brand-purple-light text-sm font-semibold">
                      {lang.percentage}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 w-full bg-surface-elevated rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-purple-light"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
