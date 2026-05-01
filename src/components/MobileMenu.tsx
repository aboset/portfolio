import { useEffect } from 'react';
import { X, Download, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps) {
  const { t } = useLanguage();

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Slide-in panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-surface-card border-l border-surface-border flex flex-col lg:hidden"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-surface-border">
              <img
                src={logo}
                alt="ABOSET"
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="p-1.5 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1" aria-label="Menu mobile">
              {siteConfig.nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => onNavClick(item.href)}
                  className="w-full text-left px-4 py-3.5 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  {t(item.label as any)}
                </motion.button>
              ))}
            </nav>

            {/* Bottom actions (CV + WhatsApp) — lang selector moved to header */}
            <div className="px-4 pb-8 flex flex-col gap-3 border-t border-surface-border pt-4">
              <a
                href={siteConfig.cvPath}
                download
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-brand-purple text-white text-sm font-medium hover:bg-brand-purple-dark transition-all duration-200 shadow-[0_0_20px_rgba(120,62,244,0.3)]"
              >
                <Download size={16} />
                {t('hero.btn.cv')}
              </a>
              <a
                href={getWhatsAppUrl(siteConfig)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/10 transition-all duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
