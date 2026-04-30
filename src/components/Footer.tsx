import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageCircle, Mail, Instagram } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';
import logo from '@/assets/logo.png';

const SOCIAL_LINKS = [
  { icon: Github,        href: siteConfig.github,                label: 'GitHub'    },
  { icon: Linkedin,      href: siteConfig.linkedin,              label: 'LinkedIn'  },
  { icon: Instagram,     href: siteConfig.instagram,             label: 'Instagram' },
  { icon: MessageCircle, href: getWhatsAppUrl(siteConfig),       label: 'WhatsApp'  },
  { icon: Mail,          href: `mailto:${siteConfig.email}`,     label: 'Email'     },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-base">
      <div className="section-container py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
            <Link to="/" aria-label="Ir para início">
              <img
                src={logo}
                alt="ABOSET"
                className="h-9 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-card border border-surface-border text-white/40 hover:text-brand-purple-light hover:border-brand-purple/30 hover:shadow-[0_0_15px_rgba(120,62,244,0.2)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-white/25 text-xs">
              © {year} {siteConfig.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
    </footer>
  );
}
