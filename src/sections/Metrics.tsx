import { useEffect, useRef } from 'react';
import { useInView, animate, useMotionValue, useTransform, motion } from 'framer-motion';
import { parseMetricValue } from '@/lib/utils';
import type { Metric } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

function AnimatedCounter({ value }: { value: string }) {
  const { num, suffix } = parseMetricValue(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (isInView) {
      const stop = animate(count, num, {
        duration: 2,
        ease: [0.0, 0.0, 0.2, 1.0],
      });
      return stop.stop;
    }
  }, [isInView, count, num]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Metrics() {
  const { t } = useLanguage();

  const metrics: Metric[] = [
    { value: '3+',  label: t('metrics.1.label'),   description: t('metrics.1.desc') },
    { value: '50+', label: t('metrics.2.label'),   description: t('metrics.2.desc') },
    { value: '25+', label: t('metrics.3.label'),   description: t('metrics.3.desc') },
    { value: '3',   label: t('metrics.4.label'),   description: t('metrics.4.desc') },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-purple/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,62,244,0.1)] overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-brand-purple/0 group-hover:bg-brand-purple/[0.03] transition-colors duration-300 pointer-events-none" />

              <div className="relative">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-white mb-1 tabular-nums">
                  <AnimatedCounter value={metric.value} />
                </p>
                <p className="font-semibold text-white/80 text-sm mb-1">{metric.label}</p>
                <p className="text-white/40 text-xs leading-snug">{metric.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
