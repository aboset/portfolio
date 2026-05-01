// =====================================================
// Experience Data
// =====================================================
import type { Experience } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

const experiencesPT: Experience[] = [
  {
    id: 'blackflag-2024',
    role: 'Desenvolvedor Web Jr.',
    company: 'BlackFlag',
    period: 'Abr. 2024 – Presente',
    type: 'Presencial',
    current: true,
    description: 'Desenvolvimento de soluções digitais completas — sites institucionais, landing pages de alta conversão e lojas virtuais em WordPress. Criação de landing pages e CRMs em React, automações de processos com Python e integração de ferramentas de IA para otimização de fluxos internos.',
    technologies: ['WordPress', 'React', 'PHP', 'Python', 'n8n', 'SEO', 'cPanel', 'Google Search Console'],
    achievements: [
      'Desenvolvimento de landing pages e interfaces em React focadas em performance, conversão e integração com APIs',
      'Criação de sistemas CRM personalizados para gestão de leads e processos internos',
      'Implementação de automações de processos utilizando Python e integração com ferramentas de IA',
      'Criação e customização avançada de sites em WordPress com uso de Elementor, além da edição de temas e plugins com PHP',
      'Gerenciamento de infraestrutura: DNS, cPanel, hospedagem, domínios e migrações de sites',
      'Otimização de performance e SEO técnico, com monitoramento via Google Search Console',
      'Validação funcional completa antes de cada publicação e acompanhamento pós-entrega',
    ],
  },
  {
    id: 'media-power-2023',
    role: 'Desenvolvedor Web',
    company: 'The Media Power',
    period: 'Jun. 2023 – Fev. 2024',
    type: 'Remoto',
    current: false,
    description: 'Desenvolvimento de sites personalizados em WordPress com foco em performance, usabilidade e responsividade. Implementação de layouts com Elementor, otimização para SEO on-page e garantia de qualidade entre navegadores e dispositivos.',
    technologies: ['WordPress', 'Elementor', 'SEO', 'Google Search Console', 'PHP', 'JavaScript'],
    achievements: [
      'Sites personalizados com foco em performance e responsividade',
      'Otimização de SEO on-page e acompanhamento no Google Search Console',
      'Testes funcionais e validação de formulários, logins e fluxos de navegação',
      'Correção de bugs, suporte técnico e ajustes pós-publicação',
      'Garantia de compatibilidade entre navegadores e dispositivos',
    ],
  },
  {
    id: 'omegatours-2023',
    role: 'Suporte Técnico Freelancer',
    company: 'OmegaTours Mexico',
    period: 'Jan. 2023 – Fev. 2024',
    type: 'Remoto',
    current: false,
    description: 'Criação de sites corporativos e landing pages em WordPress. Manutenção técnica, correções, suporte contínuo ao cliente e gerenciamento de hospedagem, domínios e DNS.',
    technologies: ['WordPress', 'DNS', 'Hospedagem', 'SEO', 'cPanel'],
    achievements: [
      'Criação de sites corporativos e landing pages em WordPress',
      'Manutenção técnica, correções e atualizações contínuas',
      'Suporte técnico ao cliente para ajustes, erros e melhorias',
      'Gerenciamento de hospedagem, domínios e ajustes de DNS',
    ],
  },
  {
    id: 'pl-solucoes-2022',
    role: 'Estagiário em Desenvolvimento',
    company: 'P&L Soluções C.A',
    period: 'Out. 2022 – Mar. 2023',
    type: 'Presencial',
    current: false,
    description: 'Teste e validação funcional de um sistema web para empresa de venda de autopeças. Verificação de login, formulários, fluxos de navegação e comportamento do sistema. Identificação de falhas e apoio na correção de erros.',
    technologies: ['Testes Funcionais', 'QA', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Validação funcional de sistema web de venda de autopeças',
      'Verificação de login, formulários e fluxos de navegação',
      'Identificação e reporte de falhas funcionais',
      'Participação no desenvolvimento de funcionalidades básicas',
    ],
  },
];

const experiencesES: Experience[] = [
  {
    id: 'blackflag-2024',
    role: 'Desarrollador Web Jr.',
    company: 'BlackFlag',
    period: 'Abr. 2024 – Presente',
    type: 'Presencial',
    current: true,
    description: 'Desarrollo de soluciones digitales completas: sitios institucionales, landing pages de alta conversión y tiendas online en WordPress. Creación de landing pages y CRMs en React, automatización de procesos con Python e integración de herramientas de IA para optimizar flujos internos.',
    technologies: ['WordPress', 'React', 'PHP', 'Python', 'n8n', 'SEO', 'cPanel', 'Google Search Console'],
    achievements: [
      'Desarrollo de landing pages e interfaces en React enfocadas en rendimiento, conversión e integración con APIs',
      'Creación de sistemas CRM personalizados para gestión de leads y procesos internos',
      'Implementación de automatizaciones de procesos utilizando Python e integración con IA',
      'Creación y personalización avanzada de sitios web en WordPress con Elementor, además de edición de temas y plugins en PHP',
      'Gestión de infraestructura: DNS, cPanel, hosting, dominios y migraciones de sitios web',
      'Optimización de rendimiento y SEO técnico, con monitoreo a través de Google Search Console',
      'Validación funcional completa antes de cada publicación y soporte post-entrega',
    ],
  },
  {
    id: 'media-power-2023',
    role: 'Desarrollador Web',
    company: 'The Media Power',
    period: 'Jun. 2023 – Feb. 2024',
    type: 'Remoto',
    current: false,
    description: 'Desarrollo de sitios web personalizados en WordPress con un enfoque en el rendimiento, usabilidad y capacidad de respuesta. Implementación de diseños con Elementor, optimización de SEO on-page y garantía de calidad en todos los navegadores y dispositivos.',
    technologies: ['WordPress', 'Elementor', 'SEO', 'Google Search Console', 'PHP', 'JavaScript'],
    achievements: [
      'Sitios personalizados con enfoque en rendimiento y diseño responsivo',
      'Optimización SEO on-page y monitoreo en Google Search Console',
      'Pruebas funcionales y validación de formularios, inicios de sesión y flujos de navegación',
      'Corrección de errores, soporte técnico y ajustes post-publicación',
      'Garantía de compatibilidad entre navegadores y dispositivos',
    ],
  },
  {
    id: 'omegatours-2023',
    role: 'Soporte Técnico Freelance',
    company: 'OmegaTours Mexico',
    period: 'Ene. 2023 – Feb. 2024',
    type: 'Remoto',
    current: false,
    description: 'Creación de sitios web corporativos y landing pages en WordPress. Mantenimiento técnico, correcciones, soporte continuo al cliente y gestión de alojamiento, dominios y DNS.',
    technologies: ['WordPress', 'DNS', 'Hosting', 'SEO', 'cPanel'],
    achievements: [
      'Creación de sitios corporativos y landing pages en WordPress',
      'Mantenimiento técnico, corrección de errores y actualizaciones constantes',
      'Soporte técnico al cliente para configuraciones y mejoras',
      'Gestión de hosting, dominios y configuraciones de DNS',
    ],
  },
  {
    id: 'pl-solucoes-2022',
    role: 'Pasante de Desarrollo',
    company: 'P&L Soluções C.A',
    period: 'Oct. 2022 – Mar. 2023',
    type: 'Presencial',
    current: false,
    description: 'Pruebas y validación funcional de un sistema web para una empresa de venta de repuestos. Verificación de inicio de sesión, formularios, flujos de navegación y comportamiento del sistema. Identificación de fallas y apoyo en la corrección de errores.',
    technologies: ['Pruebas Funcionales', 'QA', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Validación funcional del sistema web de venta de autopartes',
      'Verificación de inicio de sesión, formularios y flujos de navegación',
      'Identificación y reporte de errores funcionales',
      'Participación en el desarrollo de funcionalidades básicas',
    ],
  },
];

export function useExperiences(): Experience[] {
  const { language } = useLanguage();
  return language === 'ES' ? experiencesES : experiencesPT;
}
