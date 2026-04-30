import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowDown, Download, Instagram } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';
import Button from '@/components/ui/Button';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const SOCIAL = [
  { icon: Github,        href: siteConfig.github,            label: 'GitHub'   },
  { icon: Linkedin,      href: siteConfig.linkedin,          label: 'LinkedIn' },
  { icon: Instagram,     href: siteConfig.instagram,         label: 'Instagram'},
  { icon: Mail,          href: `mailto:${siteConfig.email}`, label: 'Email'    },
  { icon: MessageCircle, href: getWhatsAppUrl(siteConfig),   label: 'WhatsApp' },
];

const ROLES = ['WordPress', 'React', 'Automatizações'];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse within the section for the glow effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}

      {/* 1. Very subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      {/* 2. Mouse-reactive glow (purple accent only at cursor) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120,62,244,0.07), transparent 70%)`,
        }}
      />

      {/* ── Content ── */}
      <div className="section-container relative z-10 text-center py-28 sm:py-32">
        {/* Availability badge */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-brand-purple/20 text-sm text-white/65 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
          Disponível para novos projetos
        </motion.div>

        {/* Name */}
        <motion.div variants={FADE_UP} initial="hidden" animate="visible" custom={0.1}>
          <p className="text-brand-purple-light font-medium text-base sm:text-lg mb-2 tracking-wide">
            Olá, sou
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-5 leading-[1.05]">
            Alfredo{' '}
            <span className="gradient-text">Rodriguez</span>
          </h1>
        </motion.div>

        {/* Roles */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mb-6"
        >
          {ROLES.map((role, i) => (
            <span key={role} className="flex items-center gap-2 text-white/55 font-medium text-sm sm:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              {role}
              {i < ROLES.length - 1 && (
                <span className="text-white/20 ml-2 hidden sm:inline">|</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="max-w-lg mx-auto text-white/55 text-base sm:text-lg leading-relaxed mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button href="/projetos" size="lg">
            Ver Projetos
          </Button>
          <Button
            href={siteConfig.cvPath}
            download
            variant="outline"
            size="lg"
            icon={<Download size={16} />}
          >
            Baixar CV
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex items-center justify-center gap-3"
        >
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-card border border-surface-border text-white/45 hover:text-brand-purple-light hover:border-brand-purple/40 hover:shadow-[0_0_20px_rgba(120,62,244,0.2)] transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
