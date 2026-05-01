import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-brand-purple-light/70 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            {t('cta.label')}
          </motion.p>

          <h2 
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            dangerouslySetInnerHTML={{ __html: t('cta.title') }}
          />

          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10">
            {t('cta.subtitle')}
          </p>

          {/* WhatsApp CTA */}
          <motion.a
            href={getWhatsAppUrl(siteConfig)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 text-white font-semibold text-base hover:bg-emerald-600 shadow-[0_0_40px_rgba(52,211,153,0.3)] hover:shadow-[0_0_50px_rgba(52,211,153,0.45)] transition-all duration-300"
          >
            <MessageCircle size={20} />
            {t('cta.btn.whatsapp')}
          </motion.a>

          <p className="mt-5 text-white/30 text-sm">
            {t('cta.btn.email')}{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-purple-light/70 hover:text-brand-purple-light transition-colors underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
