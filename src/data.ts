import { ChannelItem, IndustryProfile } from './types';

export const CHANNELS: ChannelItem[] = [
  {
    id: 'portais-privados',
    number: '01',
    title: 'Captação por Portais Privados',
    shortTitle: 'Portais Privados',
    tagline: 'Oportunidades que muitas empresas nem sabem onde procurar.',
    description: 'Pesquisamos portais e plataformas privadas onde empresas, property managers, facility managers, contractors e grandes organizações publicam demandas e buscam novos fornecedores qualificados.',
    opportunityTypes: [
      'Contratos comerciais recorrentes',
      'Demandas de facilities e manutenção',
      'Cadastro de fornecedores homologados (Vendor)',
      'Subcontratações comerciais',
      'Cotações e propostas fechadas (Private Bids)',
    ],
    audienceOrPlatforms: [
      'Redes de Property Management',
      'Plataformas de Facilities Corporativas',
      'Sistemas privados de contratação de fornecedores',
      'Marketplaces restritos para prestadores de serviços B2B',
    ],
    ctaText: 'Quero acessar novas oportunidades',
    color: '#009C3B', // Brazil green
    accentColor: '#FFDF00',
  },
  {
    id: 'parcerias-b2b',
    number: '02',
    title: 'Parcerias B2B e Conexões Comerciais',
    shortTitle: 'Parcerias B2B',
    tagline: 'Sua próxima oportunidade pode começar com uma parceria.',
    description: 'Buscamos empresas e organizações que contratam, indicam ou subcontratam serviços regularmente no mercado americano. Em vez de esperar o cliente bater na porta, colocamos sua empresa no radar de parceiros estratégicos.',
    opportunityTypes: [
      'Parcerias com General Contractors (GCs)',
      'Contratos com Property Management Companies',
      'Atendimento a Facility Managers corporativos',
      'Subcontratação para projetos em andamento',
      'Indicações recorrentes entre parceiros B2B',
    ],
    audienceOrPlatforms: [
      'Property Managers & Real Estate Firms',
      'General Contractors & Construtoras',
      'Facility Management Organizations',
      'Empresas comerciais e escritórios regionais',
    ],
    ctaText: 'Quero ampliar minhas conexões B2B',
    color: '#002776', // Brazil blue
    accentColor: '#009C3B',
  },
  {
    id: 'prospeccao-email',
    number: '03',
    title: 'Prospecção Ativa por E-mail',
    shortTitle: 'Prospecção por E-mail',
    tagline: 'Coloque sua empresa diante de quem toma decisões.',
    description: 'Criamos estratégias de contato direto estruturadas para apresentar sua empresa a potenciais clientes corporativos e parceiros comerciais com foco em tomadores de decisão — longe de abordagens de spam em massa.',
    opportunityTypes: [
      'Apresentação corporativa direta a tomadores de decisão',
      'Abertura de diálogo comercial com administradores',
      'Agendamento de reuniões e apresentações de propostas',
      'Follow-up estruturado de relacionamento B2B',
    ],
    audienceOrPlatforms: [
      'Donos e diretores de empresas americanas',
      'Gerentes de Operações e Facilities',
      'Departamentos de compras e suprimentos (Procurement)',
      'Administradores prediais e de condomínios comerciais',
    ],
    ctaText: 'Quero prospectar empresas',
    color: '#3C3B6E', // USA blue
    accentColor: '#FFDF00',
  },
  {
    id: 'trafego-pago',
    number: '04',
    title: 'Tráfego Pago Especializado',
    shortTitle: 'Tráfego Pago',
    tagline: 'Quando seu cliente procura, sua empresa precisa aparecer.',
    description: 'Campanhas de mídia de alta intenção para colocar sua empresa diante de pessoas e organizações que já estão ativamente pesquisando ou precisando dos serviços que você presta nos EUA.',
    opportunityTypes: [
      'Geração de leads com intenção de contratação imediata',
      'Visibilidade geográfica cirúrgica para sua área de atendimento',
      'Captação de solicitações de orçamento comercial e residencial',
      'Presença digital onde clientes americanos buscam fornecedores',
    ],
    audienceOrPlatforms: [
      'Google Ads (Rede de Pesquisa & Intenção Local)',
      'Meta Ads (Facebook & Instagram direcionados)',
      'Páginas de conversão e rastreamento analítico',
    ],
    ctaText: 'Quero gerar leads',
    color: '#FFDF00', // Gold/yellow accent
    accentColor: '#009C3B',
  },
  {
    id: 'licitacoes-governo',
    number: '05',
    title: 'Licitações e Oportunidades com o Governo',
    shortTitle: 'Oportunidades Governamentais',
    tagline: 'O governo americano também compra serviços todos os dias.',
    description: 'Pesquisamos oportunidades de contratação pública que podem fazer sentido para o perfil e capacidade da sua empresa nos níveis municipal, distrital (County), estadual e federal.',
    opportunityTypes: [
      'Demandas públicas municipais (City / Town bids)',
      'Editais de Condados e Departamentos Regionais (County)',
      'Oportunidades estaduais de serviços e manutenção',
      'Mapeamento de requisitos cadastrais para órgãos públicos',
    ],
    audienceOrPlatforms: [
      'Portais municipais e prefeituras americanas',
      'Departamentos distritais e escolares (School Districts, Parks)',
      'Sistemas de compras estaduais e agências públicas',
      'Diretrizes de conformidade e preparação cadastral',
    ],
    ctaText: 'Conhecer oportunidades governamentais',
    color: '#B22234', // USA Red accent
    accentColor: '#3C3B6E',
  },
];

export const INDUSTRIES: IndustryProfile[] = [
  {
    id: 'commercial-cleaning',
    name: 'Commercial Cleaning & Janitorial',
    englishName: 'Commercial Cleaning & Facility Services',
    description: 'Empresas de limpeza comercial, pós-obra, escritórios e edifícios corporativos que buscam contratos recorrentes e oportunidades em portais de property management.',
    keyChannels: ['Portais Privados', 'Parcerias B2B', 'Prospecção por E-mail'],
    sampleOpportunities: ['Contratos mensais de limpeza corporativa', 'Demandas de facilities para property managers', 'Subcontratação em condomínios empresariais'],
  },
  {
    id: 'construction',
    name: 'Construction & Empreiteiras',
    englishName: 'General & Specialty Construction',
    description: 'Construtoras, instaladores estruturais e empreiteiros buscando pacotes de subcontratação com General Contractors e participações em concorrências.',
    keyChannels: ['Parcerias B2B', 'Portais Privados', 'Licitações Governamentais'],
    sampleOpportunities: ['Pacotes de subcontratação com GCs', 'Cotações em portais privados de obras', 'Obras de infraestrutura municipal'],
  },
  {
    id: 'painting',
    name: 'Pintura Comercial & Residencial',
    englishName: 'Commercial & Residential Painting',
    description: 'Pintores comerciais e residenciais com equipe nos EUA que precisam de um fluxo contínuo entre leads diretos e grandes contratos com administradoras.',
    keyChannels: ['Tráfego Pago', 'Parcerias B2B', 'Portais Privados'],
    sampleOpportunities: ['Contratos de repintura predial', 'Parcerias com reformadores e GCs', 'Leads de alta intenção via Google Ads'],
  },
  {
    id: 'remodeling',
    name: 'Remodeling & Reformas',
    englishName: 'Commercial & Residential Remodeling',
    description: 'Empresas de reforma de cozinhas, banheiros, acabamento e remodelação de espaços comerciais com foco em clientes de alto valor agregado.',
    keyChannels: ['Tráfego Pago', 'Prospecção por E-mail', 'Parcerias B2B'],
    sampleOpportunities: ['Reformas comerciais de escritórios', 'Projetos residenciais de alto padrão', 'Parcerias com designers e corretores comerciais'],
  },
  {
    id: 'flooring',
    name: 'Flooring & Pisos',
    englishName: 'Flooring Contractors',
    description: 'Especialistas em instalação e restauração de pisos de madeira, vinílico, epóxi e cerâmica buscando demandas contínuas de construtoras e property managers.',
    keyChannels: ['Parcerias B2B', 'Portais Privados', 'Tráfego Pago'],
    sampleOpportunities: ['Instalação de pisos em condomínios comerciais', 'Subcontratos em grandes complexos multifamiliares', 'Leads qualificados para piso epóxi'],
  },
  {
    id: 'facility-maintenance',
    name: 'Maintenance & Facility Services',
    englishName: 'Facility Maintenance & Building Services',
    description: 'Prestadores de serviços de manutenção preventiva, reparos elétricos/hidráulicos leves e gestão de instalações para imóveis comerciais.',
    keyChannels: ['Portais Privados', 'Parcerias B2B', 'Prospecção por E-mail'],
    sampleOpportunities: ['Contratos de manutenção predial recorrente', 'Chamados programados de property managers', 'Cadastro como fornecedor homologado'],
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Property Services',
    englishName: 'Commercial Landscaping & Groundskeeping',
    description: 'Empresas de jardinagem, manutenção de áreas externas e conservação de terrenos para condomínios, centros comerciais e propriedades industriais.',
    keyChannels: ['Portais Privados', 'Tráfego Pago', 'Licitações Governamentais'],
    sampleOpportunities: ['Contratos anuais de manutenção de gramados e jardins comerciais', 'Serviços sazonais para parques e prefeituras', 'Parcerias com administradores de condomínios'],
  },
  {
    id: 'professional-services',
    name: 'Serviços Profissionais & B2B',
    englishName: 'Professional B2B Services',
    description: 'Outros serviços corporativos prestados por brasileiros nos EUA, incluindo logística, segurança eletrônica, TI e consultorias locais.',
    keyChannels: ['Prospecção por E-mail', 'Parcerias B2B', 'Tráfego Pago'],
    sampleOpportunities: ['Conexões diretas com tomadores de decisão', 'Parcerias estratégicas no ecossistema local', 'Geração de oportunidades consultivas'],
  },
];

export const FAQS = [
  {
    question: 'A SALES FOR BRAZILIANS é uma agência de marketing?',
    answer: 'Não apenas. O tráfego pago faz parte das nossas estratégias, mas trabalhamos com diferentes canais de captação, incluindo portais privados, parcerias B2B, prospecção por e-mail e oportunidades governamentais. Acreditamos em uma estratégia multicanal — captação em formato de leque — para que sua empresa não dependa de uma única fonte de clientes.',
  },
  {
    question: 'Vocês garantem contratos?',
    answer: 'Não. Nosso trabalho é ajudar a ampliar os canais de captação, pesquisar e identificar oportunidades e posicionar sua empresa de forma competitiva para participar delas. A decisão final de contratação pertence exclusivamente ao cliente, empresa ou órgão responsável pela demanda.',
  },
  {
    question: 'Vocês conseguem clientes para qualquer tipo de empresa?',
    answer: 'As estratégias e oportunidades disponíveis variam conforme serviço prestado, localização nos EUA, estrutura da empresa e momento do mercado. Por isso, analisamos cada negócio individualmente para definir quais canais fazem mais sentido para o seu caso.',
  },
  {
    question: 'Vocês trabalham com licitações?',
    answer: 'Sim. A pesquisa e identificação de oportunidades de contratação pública (níveis municipal, distrital, estadual e federal) faz parte dos nossos canais de atuação, orientando sobre requisitos e plataformas oficiais.',
  },
  {
    question: 'Vocês fazem Google e Meta Ads?',
    answer: 'Sim. O tráfego pago continua sendo um dos nossos serviços e pode ser utilizado em conjunto com outras formas de captação. A diferença é que ele não precisa ser o seu único caminho.',
  },
  {
    question: 'O que são portais privados?',
    answer: 'São plataformas, redes de fornecedores e sistemas utilizados por grandes empresas, property managers, general contractors e facility companies para publicar demandas comerciais e homologar novos prestadores de serviço.',
  },
  {
    question: 'O que aconteceu com a ADS4BRAZILIANS?',
    answer: 'A ADS4BRAZILIANS evoluiu e agora é SALES FOR BRAZILIANS. A mudança representa a expansão dos nossos serviços: começamos em 2022 com forte foco em anúncios digitais e percebemos que o empresário brasileiro nos EUA precisava de uma estratégia completa de captação multicanal.',
  },
  {
    question: 'Desde quando vocês atuam?',
    answer: 'A nossa história começou em 2022, auxiliando empresários brasileiros a desbravar o mercado corporativo e de serviços nos Estados Unidos.',
  },
];

export const CONTACT_INFO = {
  name: 'SALES FOR BRAZILIANS',
  formerName: 'ADS4BRAZILIANS',
  website: 'salesforbrazilians.com',
  phone: '+1 (470) 766-8598',
  phoneRaw: '14707668598',
  whatsappUrl: 'https://wa.me/14707668598?text=Ol%C3%A1!%20Conheci%20a%20Sales%20For%20Brazilians%20pelo%20website%20e%20gostaria%20de%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20na%20capta%C3%A7%C3%A3o%20de%20oportunidades%20para%20minha%20empresa.',
  since: '2022',
  market: 'United States',
};
