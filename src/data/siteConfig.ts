// =====================================================
// Site Configuration
// ← Edit this file to update global info
// =====================================================
import type { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Alfredo Bose Rodriguez',
  tagline: 'Desenvolvedor Web | WordPress · React · Automações',
  description:
    'Desenvolvedor web focado na construção de soluções digitais e automações — sites, landing pages e sistemas desenvolvidos com foco em performance, escalabilidade e resultado real.',
  whatsapp: '+5541985004244',
  whatsappMessage:
    'Olá Alfredo! Vi seu portfólio e gostaria de conversar sobre um projeto.',
  github: 'https://github.com/alfredobose',       // ← atualizar link real
  linkedin: 'https://linkedin.com/in/alfredobose', // ← atualizar link real
  email: 'hola@alfredobose.com',
  cvPath: '/cv/CV_Alfredo_Rodriguez.pdf',
  nav: [
    { label: 'Projetos',    href: '/projetos'      },
    { label: 'Sobre',       href: '/#sobre'        },
    { label: 'Experiência', href: '/#experiencia'  },
    { label: 'Tecnologias', href: '/#tecnologias'  },
    { label: 'Formação',    href: '/#formacao'     },
  ] satisfies NavItem[],
};

// -------------------------------------------------------
// Helper: build WhatsApp URL from config
// -------------------------------------------------------
export function getWhatsAppUrl(config: SiteConfig): string {
  const phone = config.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(config.whatsappMessage);
  return `https://wa.me/${phone}?text=${message}`;
}
