import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Download } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import logo from '@/assets/logo.png';

const LANGUAGES = ['PT', 'ES', 'EN'] as const;
type Lang = (typeof LANGUAGES)[number];

/** Compact language pill – used in both desktop and mobile header */
function LangSelector({
  active,
  onChange,
}: {
  active: Lang;
  onChange: (l: Lang) => void;
}) {
  return (
    <div
      className="flex items-center gap-0.5 bg-surface-card border border-surface-border rounded-lg p-0.5"
      title="Seletor de idioma (em breve)"
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`px-2 py-1 text-xs font-semibold rounded transition-all duration-200 ${
            active === lang
              ? 'bg-brand-purple text-white'
              : 'text-white/40 hover:text-white/70'
          }`}
          aria-label={`Idioma: ${lang}`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const scrolled = useScrolled(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { language: activeLang, setLanguage: handleLangChange, t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();

    if (href === '/projetos') {
      navigate('/projetos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 180);
      }
    }
  }

  function handleMobileNav(href: string) {
    setMobileOpen(false);
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>;
      handleNavClick(fakeEvent, href);
    }, 300);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
          scrolled
            ? 'bg-surface-base/95 backdrop-blur-md'
            : 'bg-surface-base/30 backdrop-blur-sm'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex-shrink-0 group" aria-label="Ir para início">
              <img
                src={logo}
                alt="ABOSET – Alfredo Bose Rodriguez"
                className="h-8 lg:h-10 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity duration-200"
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                >
                  {t(item.label as any)}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-purple group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* ── Desktop Right: Lang selector + CV button ── */}
            <div className="hidden lg:flex items-center gap-4">
              <LangSelector active={activeLang} onChange={handleLangChange} />
              <Button
                href={siteConfig.cvPath}
                download
                variant="outline"
                size="sm"
                icon={<Download size={14} />}
              >
                {t('hero.btn.cv')}
              </Button>
            </div>

            {/* ── Mobile: lang selector + hamburger ── */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Language selector visible in mobile header */}
              <LangSelector active={activeLang} onChange={handleLangChange} />
              <button
                className="p-2 text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavClick={handleMobileNav}
      />
    </>
  );
}
