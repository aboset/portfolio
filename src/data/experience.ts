// =====================================================
// Experience Data — Based on real CV
// Alfredo Bose Rodriguez Chacon
// =====================================================
import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'blackflag-2024',
    role: 'Desenvolvedor Web Jr.',
    company: 'BlackFlag',
    period: 'Abr. 2024 – Presente',
    type: 'Presencial',
    current: true,
    description:
      'Desenvolvimento de soluções digitais completas — sites institucionais, landing pages de alta conversão e lojas virtuais em WordPress. Criação de landing pages e CRMs em React, automações de processos com Python e integração de ferramentas de IA para otimização de fluxos internos.',
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
    description:
      'Desenvolvimento de sites personalizados em WordPress com foco em performance, usabilidade e responsividade. Implementação de layouts com Elementor, otimização para SEO on-page e garantia de qualidade entre navegadores e dispositivos.',
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
    description:
      'Criação de sites corporativos e landing pages em WordPress. Manutenção técnica, correções, suporte contínuo ao cliente e gerenciamento de hospedagem, domínios e DNS.',
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
    description:
      'Teste e validação funcional de um sistema web para empresa de venda de autopeças. Verificação de login, formulários, fluxos de navegação e comportamento do sistema. Identificação de falhas e apoio na correção de erros.',
    technologies: ['Testes Funcionais', 'QA', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Validação funcional de sistema web de venda de autopeças',
      'Verificação de login, formulários e fluxos de navegação',
      'Identificação e reporte de falhas funcionais',
      'Participação no desenvolvimento de funcionalidades básicas',
    ],
  },
];
