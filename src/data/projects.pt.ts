// =====================================================
// Projects Data
// ─────────────────────────────────────────────────
// Add new projects by appending to this array.
// Set featured: true to show on the homepage.
// Set image: '' to use the gradient fallback.
// GitHubUrl is optional — button is hidden if absent.
// =====================================================
import type { Project, ProjectFilter } from '@/types';

export const projects: Project[] = [
  // ── WORDPRESS ─────────────────────────────────
  {
  id: 'adsbaja',
  name: 'Adsbaja Marketing Digital',
  shortDescription:
    'Website institucional para agência de marketing digital com foco em serviços, conversão e presença online.',
  description:
    'Desenvolvimento de site institucional para uma agência de marketing digital no México, focado na apresentação de serviços como design, desenvolvimento web, branding e publicidade. A estrutura foi pensada para guiar o usuário até a conversão, com seções estratégicas, organização clara dos serviços, integração de formulários de contato e otimização SEO para melhorar o posicionamento nos buscadores.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SEO'],
  image: '/projects/adsbaja.png',
  siteUrl: 'https://adsbaja.com/',
  featured: true,
  highlights: [
    'Estrutura otimizada para conversão de clientes',
    'Organização clara e escalável dos serviços',
    'Otimização SEO para posicionamento local',
    'Integração de formulários para captação de leads',
  ],
  year: 2024,
},
{
  id: 'icarus',
  name: 'Icarus Agência Digital',
  shortDescription:
    'Site institucional para agência de marketing com foco em serviços digitais e captação de clientes.',
  description:
    'Desenvolvimento de site para agência de marketing digital voltada à oferta de serviços como design, desenvolvimento web, gestão de redes sociais e publicidade online. O projeto foi estruturado para destacar os serviços principais, melhorar a experiência do usuário e facilitar a geração de leads através de chamadas estratégicas e formulários otimizados.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  image: '/projects/icarus.png',
  siteUrl: 'https://icarus.mx/',
  featured: false,
  highlights: [
    'Estrutura orientada à captação de clientes',
    'Organização modular dos serviços digitais',
    'Melhoria de performance e tempo de carregamento',
    'Integração de formulários e chamadas para ação',
  ],
  year: 2023,
}, 
{
  id: 'blacklion',
  name: 'BlackLion Agência Criativa',
  shortDescription:
    'Website para agência criativa com foco em branding, design e apresentação de serviços.',
  description:
    'Desenvolvimento de site para uma agência criativa especializada em branding, design gráfico e desenvolvimento web. O projeto foi construído com foco na apresentação visual dos serviços, navegação fluida e estrutura moderna, reforçando a identidade da marca e proporcionando uma experiência mais envolvente para o usuário.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/blacklion.png',
  siteUrl: 'https://blacklion.com.br/',
  featured: false,
  highlights: [
    'Design visual alinhado com identidade de marca',
    'Apresentação clara dos serviços criativos',
    'Navegação fluida e estrutura moderna',
    'Otimização para dispositivos móveis',
  ],
  year: 2024,
},
{
  id: 'jbelotto',
  name: 'JBelotto Portfolio',
  shortDescription:
    'Website portfólio para estúdio criativo com foco em apresentação visual e projetos de design.',
  description:
    'Desenvolvimento de website portfólio para profissional da área criativa, estruturado para apresentar projetos de design, branding e comunicação visual. O projeto foi pensado para destacar o trabalho visual através de um layout em grid, navegação fluida e organização clara dos conteúdos, proporcionando uma experiência moderna e imersiva.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/jbelotto.png',
  siteUrl: 'http://jbelotto.com.br/',
  featured: false,
  highlights: [
    'Layout em grid para exibição de projetos visuais',
    'Navegação fluida e foco na experiência do usuário',
    'Estrutura otimizada para apresentação de portfólio',
    'Design responsivo adaptado para diferentes dispositivos',
  ],
  year: 2025,
},
{
  id: 'vialogic',
  name: 'ViaLogic Plataforma Logística',
  shortDescription:
    'Website institucional para empresa de tecnologia logística com foco em serviços e geração de leads.',
  description:
    'Desenvolvimento de site institucional para empresa de tecnologia voltada à gestão logística. O projeto foi estruturado para apresentar soluções, funcionalidades da plataforma e diferenciais do serviço, com foco na geração de leads através de chamadas estratégicas, integração com formulários e comunicação clara dos benefícios para o cliente.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  image: '/projects/vialogic.png',
  siteUrl: '',
  featured: true,
  highlights: [
    'Estrutura orientada à geração de leads',
    'Apresentação clara de soluções e funcionalidades',
    'Integração com formulários e canais de contato',
    'Otimização de performance e experiência do usuário',
  ],
  year: 2025,
},
{
  id: 'sublime',
  name: 'Sublime High Luxury Residence',
  shortDescription:
    'Landing page de alto padrão para empreendimento imobiliário com foco em apresentação visual e conversão.',
  description:
    'Desenvolvimento de landing page para empreendimento imobiliário de alto padrão, com foco em apresentação visual, experiência do usuário e valorização do produto. O projeto destaca imagens, localização, características do empreendimento e integra formulários de contato para captação de leads, com estrutura pensada para conversão.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/lpsublime.png',
  siteUrl: 'https://construtorabouw.com.br/sublime',
  featured: true,
  highlights: [
    'Design focado na valorização visual do empreendimento',
    'Estrutura otimizada para conversão de leads',
    'Apresentação clara de informações e localização',
    'Layout responsivo e adaptado para mobile',
  ],
  year: 2025,
},
{
  id: 'virago',
  name: 'Virago Cursos Odontológicos',
  shortDescription:
    'Plataforma institucional para cursos odontológicos com foco em captação de alunos e apresentação de programas.',
  description:
    'Desenvolvimento de website institucional para uma plataforma de cursos na área odontológica, estruturado para apresentar formações, professores e benefícios dos programas. O projeto foi pensado para facilitar a jornada do usuário, com foco na captação de alunos, organização clara dos cursos e integração de formulários para inscrição e contato.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/virago.png',
  siteUrl: 'https://virago.cl/',
  featured: true,
  highlights: [
    'Estrutura focada na captação de alunos',
    'Organização clara dos cursos e conteúdos',
    'Integração de formulários para inscrição',
    'Design otimizado para experiência do usuário',
  ],
  year: 2024,
},
{
  id: 'talenteo',
  name: 'Talenteo Plataforma de Talentos',
  shortDescription:
    'Website institucional para empresa de outsourcing com foco em apresentação de serviços e geração de leads.',
  description:
    'Desenvolvimento de site institucional para empresa especializada em outsourcing e gestão de talentos. O projeto foi estruturado para comunicar serviços, planos e diferenciais de forma clara, com foco na geração de leads através de seções estratégicas, chamadas para ação e formulários de contato.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/talenteo.png',
  siteUrl: '',
  featured: true,
  highlights: [
    'Estrutura orientada à geração de leads',
    'Apresentação clara de planos e serviços',
    'Integração de formulários e chamadas para ação',
    'Design responsivo e otimizado para conversão',
  ],
  year: 2024,
},
{
  id: 'associacao-sara',
  name: 'Associação Sara',
  shortDescription:
    'Website institucional para projeto social com foco em acolhimento, informação e captação de voluntários.',
  description:
    'Desenvolvimento de site institucional para uma associação voltada ao apoio de mulheres em sua jornada de maternidade e fertilidade. O projeto foi estruturado para comunicar a missão da organização, apresentar iniciativas, facilitar o contato e incentivar a participação de voluntários através de uma navegação clara e acessível.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/sara.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Estrutura voltada à comunicação institucional',
    'Captação de voluntários através de formulários',
    'Organização clara de conteúdos e iniciativas',
    'Design acessível e responsivo',
  ],
  year: 2025,
},
{
  id: 'comerciantes-unidos',
  name: 'Comerciantes Unidos Todos Santos',
  shortDescription:
    'Website institucional para associação comercial com foco em comunidade, informação e captação de membros.',
  description:
    'Desenvolvimento de site institucional para uma associação de comerciantes e empresários voltada ao fortalecimento da economia local. O projeto foi estruturado para comunicar a missão da organização, apresentar objetivos coletivos, incentivar a participação da comunidade e facilitar a captação de novos membros através de chamadas para ação e formulários de contato.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/comerciantes.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Estrutura voltada à captação de novos membros',
    'Comunicação clara da missão e objetivos da associação',
    'Seções institucionais organizadas para melhor navegação',
    'Layout responsivo com foco em acessibilidade',
  ],
  year: 2023,
},
{
  id: 'triathlon-parana',
  name: 'Triathlon Paraná',
  shortDescription:
    'Portal institucional para federação esportiva com foco em notícias, transparência e comunicação com atletas.',
  description:
    'Desenvolvimento de portal institucional para federação esportiva, estruturado para centralizar notícias, resultados, documentos oficiais, informações de eventos e conteúdos administrativos. O projeto foi pensado para facilitar o acesso à informação, melhorar a organização do conteúdo e oferecer uma navegação clara para atletas, organizadores e público em geral.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  image: '/projects/triatlon.png',
  siteUrl: 'https://triathlonparana.com.br/',
  featured: false,
  highlights: [
    'Centralização de notícias, resultados e documentos oficiais',
    'Estrutura pensada para alto volume de conteúdo institucional',
    'Navegação otimizada para atletas e organizadores',
    'Layout responsivo com foco em usabilidade',
  ],
  year: 2024,
},
{
  id: 'white-hall',
  name: 'White Hall Eventos',
  shortDescription:
    'Website institucional para espaço de eventos com foco em apresentação de ambientes e geração de contatos.',
  description:
    'Desenvolvimento de site institucional para espaço de eventos, projetado para apresentar ambientes, serviços e programação de forma clara e visualmente atrativa. A estrutura foi pensada para valorizar o espaço, facilitar o contato comercial e melhorar a experiência do usuário através de seções organizadas, destaque para salões e navegação intuitiva.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/whitehall.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação visual dos ambientes e serviços do espaço',
    'Estrutura orientada à geração de contatos comerciais',
    'Organização clara de salões, programação e informações',
    'Experiência responsiva e navegação intuitiva',
  ],
  year: 2024,
},
{
  id: 'world-installation',
  name: 'World Installation Services',
  shortDescription:
    'Website corporativo para empresa de instalações e reformas com foco em serviços, credibilidade e captação de clientes.',
  description:
    'Desenvolvimento de site corporativo para empresa especializada em instalações, mudanças corporativas e reformas de ambientes. O projeto foi estruturado para apresentar os serviços de forma objetiva, reforçar a credibilidade da empresa e gerar novos contatos através de chamadas estratégicas, seções informativas e formulários integrados.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/worlds.png',
  siteUrl: 'https://worldinstallation.com/',
  featured: false,
  highlights: [
    'Estrutura focada na apresentação clara dos serviços',
    'Seções estratégicas para reforço de credibilidade',
    'Layout orientado à geração de contatos e orçamento',
    'Design responsivo com boa organização visual',
  ],
  year: 2022,
},
{
  id: 'sou-sublime',
  name: 'Sou Sublime Estética',
  shortDescription:
    'Website institucional para clínica de estética com foco em serviços, planos e experiência da marca.',
  description:
    'Desenvolvimento de site institucional para uma marca de estética e bem-estar, estruturado para apresentar tratamentos, planos de assinatura e diferenciais da experiência oferecida. O projeto foi pensado para valorizar a identidade visual da marca, organizar os serviços de forma clara e incentivar o agendamento através de chamadas estratégicas e navegação fluida.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/sousublime.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Estrutura voltada à apresentação de tratamentos e planos',
    'Design alinhado com o posicionamento visual da marca',
    'Seções estratégicas para incentivo ao agendamento',
    'Experiência responsiva com navegação fluida',
  ],
  year: 2024,
},
{
  id: 'rocio-de-luna',
  name: 'Rocio de Luna Advocacia',
  shortDescription:
    'Website institucional para escritório jurídico com foco em áreas de atuação, autoridade e captação de clientes.',
  description:
    'Desenvolvimento de site institucional para escritório de advocacia, estruturado para apresentar áreas de atuação, diferenciais do atendimento e conteúdos informativos. O projeto foi pensado para transmitir credibilidade, organizar os serviços jurídicos de forma clara e facilitar o contato de potenciais clientes através de chamadas para ação e formulários estratégicos.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/rocio.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação clara das áreas de atuação jurídica',
    'Estrutura pensada para reforçar autoridade e credibilidade',
    'Seções estratégicas para captação de clientes',
    'Layout responsivo com foco em usabilidade',
  ],
  year: 2023,
},
{
  id: 'pereira-gionedis',
  name: 'Pereira Gionedis Advogados',
  shortDescription:
    'Portal institucional para escritório jurídico com foco em autoridade, conteúdo e apresentação da equipe.',
  description:
    'Desenvolvimento de portal institucional para escritório de advocacia, com estrutura robusta para apresentar sócios, áreas de atuação, artigos, notícias, livros, vídeos e demais conteúdos institucionais. O projeto foi pensado para fortalecer a presença digital do escritório, comunicar autoridade no segmento e organizar grande volume de informação de forma clara e acessível.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  image: '/projects/pereira.png',
  siteUrl: 'https://pereiragionedis.com.br/',
  featured: false,
  highlights: [
    'Portal com alto volume de conteúdo institucional',
    'Apresentação estratégica de sócios e áreas de atuação',
    'Organização clara de artigos, notícias, livros e vídeos',
    'Estrutura voltada ao fortalecimento de autoridade digital',
  ],
  year: 2024,
},
{
  id: 'erva-mate-parana',
  name: 'Erva Mate Paraná',
  shortDescription:
    'Website institucional e comercial para marca de erva-mate com foco em produtos, benefícios e presença digital.',
  description:
    'Desenvolvimento de site para marca de erva-mate, estruturado para apresentar produtos, benefícios da marca e fortalecer sua presença digital. O projeto foi pensado para valorizar a identidade visual da empresa, organizar o catálogo de produtos e criar uma experiência clara para o usuário, com foco em posicionamento de marca e apoio à divulgação comercial.',
  category: 'wordpress',
  stack: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/ervamate.png',
  siteUrl: 'https://ervamateparana.com.br/',
  featured: false,
  highlights: [
    'Apresentação visual do catálogo de produtos',
    'Estrutura pensada para reforço de marca e divulgação comercial',
    'Seções voltadas a benefícios, depoimentos e presença digital',
    'Layout responsivo com foco em experiência do usuário',
  ],
  year: 2025,
},
{
  id: 'rocasa-reformas',
  name: 'Rocasa Reformas',
  shortDescription:
    'Website institucional para empresa de reformas com foco em serviços, portfólio e captação de clientes.',
  description:
    'Desenvolvimento de site institucional para empresa de reformas e reabilitação de imóveis, estruturado para apresentar serviços, portfólio de projetos e diferenciais da empresa. O projeto foi pensado para transmitir confiança, destacar resultados visuais (antes e depois) e facilitar o contato com potenciais clientes.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/rocossa.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação clara dos serviços de reformas',
    'Seção de projetos com foco em resultados visuais',
    'Estrutura pensada para captação de clientes',
    'Layout responsivo e navegação intuitiva',
  ],
  year: 2023,
},
{
  id: 'chacha-ecommerce',
  name: 'Chácha Store',
  shortDescription:
    'E-commerce desenvolvido com foco em catálogo de produtos, navegação e experiência de compra.',
  description:
    'Desenvolvimento de loja virtual com estrutura completa de e-commerce, incluindo catálogo de produtos, sistema de busca, carrinho e navegação otimizada. O projeto foi pensado para facilitar a jornada de compra, destacar os produtos e oferecer uma experiência clara e eficiente para o usuário.',
  category: 'wordpress',
  stack: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/chacha.png',
  siteUrl: 'tiendachacha.cl',
  featured: false,
  highlights: [
    'Estrutura completa de e-commerce com WooCommerce',
    'Catálogo de produtos organizado e escalável',
    'Experiência de compra otimizada',
    'Integração de carrinho e navegação eficiente',
  ],
  year: 2024,
},
{
  id: 'odis-space',
  name: 'ODIS Design Studio',
  shortDescription:
    'Website institucional para estúdio de design com foco em posicionamento, serviços e identidade visual.',
  description:
    'Desenvolvimento de site institucional para estúdio de design com foco em posicionamento de marca e apresentação de serviços. O projeto foi estruturado para destacar a proposta criativa, os pilares da empresa e reforçar a identidade visual através de uma experiência moderna e interativa.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/odispace.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Design moderno com foco em identidade visual',
    'Apresentação estratégica de serviços e posicionamento',
    'Seções interativas e bem estruturadas',
    'Experiência responsiva e fluida',
  ],
  year: 2023,
},
{
  id: 'leiriane-santos',
  name: 'Leiriane Santos Estética',
  shortDescription:
    'Website institucional para clínica estética com foco em tratamentos, autoridade e conversão.',
  description:
    'Desenvolvimento de site institucional para clínica de estética integrativa, estruturado para apresentar tratamentos, benefícios e diferenciais da marca. O projeto foi pensado para transmitir autoridade, organizar os serviços e incentivar o agendamento através de uma experiência clara e estratégica.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/lerianis.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação clara dos tratamentos e serviços',
    'Estrutura focada em conversão e agendamentos',
    'Design alinhado ao posicionamento da marca',
    'Experiência responsiva e otimizada',
  ],
  year: 2024,
},
{
  id: 'jusimed',
  name: 'Jusimed',
  shortDescription:
    'Website institucional para empresa do setor médico com foco em autoridade, portfólio e relacionamento comercial.',
  description:
    'Desenvolvimento de site institucional para empresa especializada em dispositivos médicos implantáveis, estruturado para comunicar autoridade, apresentar áreas de atuação e reforçar a relação comercial com clientes e parceiros. O projeto foi pensado para organizar informações técnicas, destacar diferenciais da empresa e fortalecer sua presença digital no setor da saúde.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/jusimed.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Estrutura institucional voltada à credibilidade e autoridade',
    'Apresentação clara de produtos e especialidades médicas',
    'Seções estratégicas para relacionamento comercial',
    'Layout responsivo com foco em usabilidade',
  ],
  year: 2024,
},
{
  id: 'harmony-residencial',
  name: 'Harmony Residencial',
  shortDescription:
    'Landing page imobiliária para empreendimento residencial com foco em apresentação visual e geração de leads.',
  description:
    'Desenvolvimento de landing page para empreendimento residencial, estruturada para valorizar a proposta do projeto, destacar diferenciais arquitetônicos e incentivar o agendamento de visitas. O projeto foi pensado para oferecer uma navegação clara, reforçar o apelo visual do imóvel e facilitar a captação de leads por meio de formulários estratégicos.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/harmony.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Estrutura orientada à geração de leads',
    'Apresentação visual dos diferenciais do empreendimento',
    'Integração de formulários para agendamento de visitas',
    'Layout responsivo com foco em conversão',
  ],
  year: 2024,
},
{
  id: 'gecabial',
  name: 'Gecabial Construcciones',
  shortDescription:
    'Website institucional para empresa de construção e manutenção com foco em serviços, portfólio e captação de clientes.',
  description:
    'Desenvolvimento de site institucional para empresa do setor de construção, reformas e manutenção integral. O projeto foi estruturado para apresentar serviços, destacar projetos realizados e facilitar o contato com novos clientes, combinando organização visual, clareza na comunicação e navegação orientada à conversão.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/gecabial.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação clara de serviços e soluções da empresa',
    'Seção de projetos voltada à prova visual do trabalho',
    'Estrutura pensada para solicitação de orçamento',
    'Layout responsivo e navegação intuitiva',
  ],
  year: 2023,
},
{
  id: 'mahana-viajes',
  name: 'Mahana Viajes',
  shortDescription:
    'Plataforma web para agência de viagens focada na venda de tours e experiências no Chile.',
  description:
    'Desenvolvimento de website para Mahana Viajes com foco em conversão e apresentação de experiências turísticas. O projeto foi estruturado para facilitar a navegação por destinos, exibir tours com informações claras e otimizar o processo de decisão do usuário. A interface prioriza organização, hierarquia visual e confiança na compra.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'WooCommerce', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/mahana.png',
  siteUrl: 'mahanaviajes.com',
  featured: true,
  highlights: [
    'Estrutura de tours organizada por destino (Atacama, Santiago, etc)',
    'Cards de produtos com preço, duração e informações claras',
    'Seção de prova social com imagens reais de clientes',
    'Layout otimizado para conversão e tomada de decisão',
    'Design focado em experiência e confiança do usuário',
  ],
  year: 2026,
},
{
  id: 'fisio-agua-abdo',
  name: 'Fisioterapia Aquática',
  shortDescription:
    'Website institucional para clínica especializada em fisioterapia aquática com foco em serviços e credibilidade.',
  description:
    'Desenvolvimento de site institucional para clínica de fisioterapia aquática, estruturado para apresentar tratamentos, metodologia e diferenciais do atendimento. O projeto foi pensado para transmitir confiança, explicar os benefícios da terapia e facilitar o contato com novos pacientes.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS'],
  image: '/projects/fisionagua.png',
  siteUrl: 'fisionagua.com.br',
  featured: false,
  highlights: [
    'Apresentação clara dos tratamentos e benefícios',
    'Estrutura institucional focada em credibilidade',
    'Seções informativas sobre metodologia e experiência',
    'Integração com mapa e contato direto',
  ],
  year: 2024,
},
{
  id: 'clinica-dental',
  name: 'Clínica Dental',
  shortDescription:
    'Website para clínica odontológica com foco em serviços, equipe e captação de pacientes.',
  description:
    'Desenvolvimento de website para clínica odontológica, estruturado para apresentar especialidades, equipe profissional e tratamentos oferecidos. O projeto foi pensado para transmitir confiança, organizar os serviços e incentivar o agendamento de consultas.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS'],
  image: '/projects/clinicadental.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação de serviços odontológicos estruturados',
    'Seção de equipe para gerar confiança',
    'Organização de tratamentos mais populares',
    'Layout focado em conversão de pacientes',
  ],
  year: 2024,
},
{
  id: 'edy-joshimar-v1',
  name: 'Edy Joshimar (Versão 1)',
  shortDescription:
    'Website artístico para músico com foco em portfólio musical e identidade visual.',
  description:
    'Desenvolvimento de website para artista musical com foco na apresentação de projetos, músicas e identidade pessoal. Esta versão prioriza uma estrutura mais editorial, com destaque para lançamentos, biografia e integração com plataformas musicais.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/edyv1.png',
  siteUrl: 'edyjoshimar.com',
  featured: false,
  highlights: [
    'Apresentação de músicas e projetos do artista',
    'Integração com plataformas como Spotify',
    'Seção biográfica estruturada',
    'Layout com foco em identidade artística',
  ],
  year: 2023,
},
{
  id: 'edy-joshimar-v2',
  name: 'Edy Joshimar (Versão 2)',
  shortDescription:
    'Redesign de website artístico com foco em experiência visual e navegação moderna.',
  description:
    'Redesign do site do artista Edy Joshimar com foco em uma experiência mais moderna, visual e imersiva. Esta versão prioriza impacto visual, organização de álbuns, integração com conteúdo multimídia e uma navegação mais fluida para o usuário.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/edyv2.png',
  siteUrl: 'edyjoshimar.com',
  featured: true,
  highlights: [
    'Redesign completo com foco em experiência do usuário',
    'Apresentação de álbuns e conteúdos multimídia',
    'Layout moderno e mais visual',
    'Melhoria na navegação e organização de conteúdo',
  ],
  year: 2025,
},
  {
  id: 'optica-malave',
  name: 'Óptica Malavé',
  shortDescription:
    'E-commerce de óculos com catálogo organizado por categorias e foco em conversão.',
  description:
    'Desenvolvimento de loja virtual para ótica, focada na venda de óculos com navegação clara por categorias como feminino, masculino e infantil. O projeto prioriza a experiência do usuário, apresentação de produtos e facilidade de compra.',
  category: 'wordpress',
  stack: ['WordPress', 'WooCommerce', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/opticapmalave.png',
  siteUrl: 'opticamalave.com',
  featured: true,
  highlights: [
    'Catálogo de produtos organizado por categorias',
    'Design focado em conversão',
    'Integração com WooCommerce',
    'Seções promocionais e em destaque',
  ],
  year: 2026,
},
{
  id: 'paulo-celles',
  name: 'Paulo Celles Imóveis',
  shortDescription:
    'Landing page de recrutamento para captação de corretores imobiliários.',
  description:
    'Desenvolvimento de landing page focada na captação de novos corretores imobiliários. O projeto é orientado à conversão, com estrutura clara de benefícios, requisitos e formulário de contato direto.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/paulocelles.png',
  siteUrl: 'https://corretores.paulocellesimoveis.com.br/',
  featured: false,
  highlights: [
    'Estrutura otimizada para captação de leads',
    'Seção clara de benefícios e requisitos',
    'Formulário de contato estratégico',
    'Design focado em conversão',
  ],
  year: 2025,
},
{
  id: 'claudio-kuss',
  name: 'Claudio Kuss Leilões',
  shortDescription:
    'Landing page institucional para leilões online e presenciais.',
  description:
    'Desenvolvimento de página institucional para empresa de leilões, explicando o processo de participação tanto online quanto presencial. O foco está na clareza, confiança e guia passo a passo para o usuário.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/cluadiokuss.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Explicação clara do processo de leilão',
    'Seções passo a passo para o usuário',
    'Design institucional focado em confiança',
    'Integração de mapas e contato',
  ],
  year: 2025,
},
{
  id: 'barboza-ribas-contabilidade',
  name: 'Barboza Ribas Contabilidade',
  shortDescription:
    'Website corporativo para serviços contábeis com foco em confiança e autoridade.',
  description:
    'Desenvolvimento de site corporativo para empresa de contabilidade, focado na apresentação de serviços, soluções empresariais e captação de clientes. Priorizou-se uma estrutura clara e profissional.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/barbozaribas.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação estruturada de serviços contábeis',
    'Design profissional e corporativo',
    'Seção de soluções empresariais',
    'Foco na geração de confiança',
  ],
  year: 2026,
},
{
  id: 'galvao-75-anos',
  name: 'Galvão 75 Anos',
  shortDescription:
    'Landing page institucional com storytelling de marca e linha do tempo.',
  description:
    'Desenvolvimento de landing page comemorativa para os 75 anos da empresa Galvão, focada em storytelling, história da marca e evolução ao longo do tempo. O design combina conteúdo visual e narrativa.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/75anos.png',
  siteUrl: '',
  featured: true,
  highlights: [
    'Narrativa visual com linha do tempo',
    'Design focado em branding',
    'Seções históricas bem estruturadas',
    'Uso de storytelling para conectar com o usuário',
  ],
  year: 2026,
},
{
  id: 'barboza-ribas-advogados',
  name: 'Barboza Ribas Advogados',
  shortDescription:
    'Website institucional para escritório de advocacia com foco estratégico.',
  description:
    'Desenvolvimento de site para escritório de advocacia, com foco em posicionamento profissional, apresentação de áreas de atuação e geração de confiança. Design limpo e orientado a serviços jurídicos.',
  category: 'wordpress',
  stack: ['WordPress', 'Elementor', 'HTML', 'CSS'],
  image: '/projects/barbozaabogados.png',
  siteUrl: '',
  featured: false,
  highlights: [
    'Apresentação clara de áreas legais',
    'Design institucional e profissional',
    'Foco em credibilidade',
    'Estrutura orientada a serviços',
  ],
  year: 2026,
},

// react

{
  id: 'omega-tours-help-center',
  name: 'Omega Tours Help Center',
  shortDescription:
    'Central de ajuda interativa para clientes, com navegação por categorias, busca e acesso rápido a informações essenciais.',
  description:
    'Desenvolvimento de uma central de ajuda para Omega Tours, estruturada para organizar informações sobre veículos, reservas, pagamentos, segurança e transporte. O projeto foi pensado para facilitar o autoatendimento do usuário, com navegação lateral por categorias, sistema de busca, links rápidos e seções informativas que reduzem dúvidas e agilizam o contato com a equipe.',
  category: 'react',
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
  image: '/projects/OmegaHelp.png',
  githubUrl: 'https://github.com/aboset/help-omegatours.git',
  siteUrl: 'help.omegatours.mx',
  featured: true,
  highlights: [
    'Estrutura de help center com navegação por categorias',
    'Sistema de busca para localizar conteúdos rapidamente',
    'Organização de informações por tópicos como reservas, segurança e transporte',
    'Links rápidos para acesso direto aos temas mais consultados',
    'Integração estratégica com contato via WhatsApp',
  ],
  year: 2026,
},

];

// ── Helpers ───────────────────────────────────────────
export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectsByCategory(filter: ProjectFilter): Project[] {
  if (filter === 'all') return projects;
  return projects.filter((p) => p.category === filter);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
