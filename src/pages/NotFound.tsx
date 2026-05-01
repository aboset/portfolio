import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-heading text-8xl md:text-9xl font-bold mb-6 gradient-text">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
          {t('notfound.title')}
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          {t('notfound.subtitle')}
        </p>
        
        <div className="flex justify-center">
          <Button href="/" size="lg" icon={<ArrowLeft size={18} />}>
            {t('notfound.back')}
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
