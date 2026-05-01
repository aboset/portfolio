import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const STRENGTHS = [
    t('about.strengths.1'),
    t('about.strengths.2'),
    t('about.strengths.3'),
    t('about.strengths.4'),
    t('about.strengths.5'),
    t('about.strengths.6'),
  ];

  const BADGES = [
    { label: t('about.badges.loc'), value: t('about.badges.loc.val') },
    { label: t('about.badges.disp'), value: t('about.badges.disp.val') },
    { label: t('about.badges.mod'), value: t('about.badges.mod.val') },
    { label: t('about.badges.lang'), value: t('about.badges.lang.val') },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title={t('about.title')}
              subtitle={t('about.subtitle')}
            />

            <div className="mt-6 space-y-4 text-white/60 text-base leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
            </div>
          </motion.div>

          {/* Right column – strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Card header */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {t('about.strengths.title')}
              </p>
              <ul className="space-y-3">
                {STRENGTHS.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2 }}
                    className="flex items-start gap-3 text-white/65 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-brand-purple-light"
                    />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick-info badges */}
            <div className="grid grid-cols-2 gap-3">
              {BADGES.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-xl bg-surface-card border border-surface-border"
                >
                  <p className="text-white/35 text-xs mb-1">{label}</p>
                  <p className="text-white/80 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
