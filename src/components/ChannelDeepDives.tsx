import React, { useState } from 'react';
import { ArrowRight, Search, Users2, MailCheck, MousePointerClick, Landmark, ArrowDown, CheckCircle2 } from 'lucide-react';

export const ChannelDeepDives: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portais' | 'b2b' | 'email' | 'ads' | 'governo'>('portais');

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#15171B] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Selector for the 5 Deep Dives */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFDF00] block mb-2">
            Imersão Estratégica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            Como cada canal funciona na prática
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Selecione uma modalidade para entender o método de trabalho, público-alvo e fluxo de conexão.
          </p>

          {/* Tab Selector Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#090A0C] border border-[#202329] max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('portais')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'portais'
                  ? 'bg-[#202329] text-[#009C3B] border border-[#009C3B]/40 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Portais Privados</span>
            </button>

            <button
              onClick={() => setActiveTab('b2b')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'b2b'
                  ? 'bg-[#202329] text-[#93c5fd] border border-blue-500/40 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Users2 className="w-3.5 h-3.5" />
              <span>Parcerias B2B</span>
            </button>

            <button
              onClick={() => setActiveTab('email')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'email'
                  ? 'bg-[#202329] text-[#FFDF00] border border-[#FFDF00]/40 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MailCheck className="w-3.5 h-3.5" />
              <span>Prospecção por E-mail</span>
            </button>

            <button
              onClick={() => setActiveTab('ads')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'ads'
                  ? 'bg-[#202329] text-white border border-zinc-500/40 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MousePointerClick className="w-3.5 h-3.5 text-[#009C3B]" />
              <span>Tráfego Pago</span>
            </button>

            <button
              onClick={() => setActiveTab('governo')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'governo'
                  ? 'bg-[#202329] text-[#f87171] border border-red-500/40 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Licitações / Governo</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Portais Privados */}
        {activeTab === 'portais' && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090A0C] border border-[#202329] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#009C3B]/20 text-[#009C3B] border border-[#009C3B]/30">
                  Canal 01 • Portais e Plataformas Restritas
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Oportunidades que muitas empresas nem sabem onde procurar.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Um volume expressivo de demandas comerciais nos Estados Unidos não é publicado no Google ou em redes sociais abertas. Grandes empresas, administradoras e condomínios utilizam:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'Redes fechadas de fornecedores (Vendor Networks)',
                    'Portais privados de contratação comercial',
                    'Sistemas internos de Property Management',
                    'Plataformas de gestão de Facilities',
                    'Bancos de dados de prestadores homologados',
                    'Cotações e propostas fechadas (Private Bids)',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009C3B] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
                  A <strong>SALES FOR BRAZILIANS</strong> monitora e pesquisa esses canais de acordo com a área de atuação da sua empresa, identificando onde seu perfil possui real aderência e viabilidade operacional.
                </p>
                <div className="pt-3">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                  >
                    <span>Quero ampliar minha busca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#15171B] border border-[#202329] space-y-4">
                <span className="text-xs font-mono font-bold text-zinc-400 block">
                  Fluxo de Identificação de Portais
                </span>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <span className="text-[11px] font-bold text-[#FFDF00] block">
                      Etapa 1: Diagnóstico Territorial
                    </span>
                    <p className="text-xs text-zinc-400">
                      Mapeamento de condomínios, centros corporativos e redes na sua região.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <span className="text-[11px] font-bold text-[#009C3B] block">
                      Etapa 2: Acesso & Requisitos
                    </span>
                    <p className="text-xs text-zinc-400">
                      Verificação de seguros, escopos e compliance necessários para o portal.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <span className="text-[11px] font-bold text-white block">
                      Etapa 3: Monitoramento Contínuo
                    </span>
                    <p className="text-xs text-zinc-400">
                      Rastreamento de solicitações de serviço ativas para participação direta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Parcerias B2B */}
        {activeTab === 'b2b' && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090A0C] border border-[#202329] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/40">
                  Canal 02 • Parcerias B2B & Subcontratação
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Sua próxima oportunidade pode começar com uma parceria.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Nem todo novo contrato começa com um anúncio pago. Em muitos setores essenciais, empresas maiores, administradoras prediais, construtoras e facility companies precisam constantemente de fornecedores confiáveis e mão de obra subcontratada.
                </p>
                <div className="p-4 rounded-xl bg-[#15171B] border border-[#202329] space-y-2">
                  <span className="text-xs font-bold text-[#FFDF00] block">
                    Conexão Comercial em Cadeia:
                  </span>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-center">
                    <div className="px-3 py-2 rounded bg-[#090A0C] border border-zinc-700 text-white w-full sm:w-auto">
                      Sua Empresa
                    </div>
                    <div className="text-zinc-500 font-bold">→</div>
                    <div className="px-3 py-2 rounded bg-[#090A0C] border border-zinc-700 text-zinc-300 w-full sm:w-auto">
                      Property Manager / GC / Facility
                    </div>
                    <div className="text-zinc-500 font-bold">→</div>
                    <div className="px-3 py-2 rounded bg-[#009C3B]/20 border border-[#009C3B]/40 text-[#4ade80] font-bold w-full sm:w-auto">
                      Contrato / Subcontrato
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 pt-1 leading-relaxed">
                  A <strong>SALES FOR BRAZILIANS</strong> constrói pontes e posiciona sua empresa diante desses contratantes-chave, permitindo que você dispute demandas de alto volume.
                </p>
                <div className="pt-2">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                  >
                    <span>Quero desenvolver parcerias B2B</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#15171B] border border-[#202329] space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
                  Alvos Estratégicos de Parceria
                </span>
                {[
                  { role: 'Property Management Companies', value: 'Demanda recorrente de limpeza, pintura e manutenção predial' },
                  { role: 'General Contractors (GCs)', value: 'Pacotes de subcontratação em drywall, pintura, pisos e acabamento' },
                  { role: 'Facility Management Companies', value: 'Prestadores homologados para contratos corporativos regionais' },
                  { role: 'Empresas & Prédios Comerciais', value: 'Contratos diretos sem intermediários de agências' },
                ].map((item) => (
                  <div key={item.role} className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <strong className="text-xs text-white block mb-0.5">{item.role}</strong>
                    <span className="text-[11px] text-zinc-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Prospecção por E-mail */}
        {activeTab === 'email' && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090A0C] border border-[#202329] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFDF00]/20 text-[#FFDF00] border border-[#FFDF00]/30">
                  Canal 03 • Prospecção Focada em Decisores
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Coloque sua empresa diante de quem toma decisões.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Apresentamos sua empresa diretamente para os profissionais que assinam contratos e contratam fornecedores. Uma prospecção B2B séria, personalizada e profissional não tem qualquer relação com envio indiscriminado de e-mails em massa.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {['Pesquisa de Negócios', 'Identificação de Decisores', 'Apresentação Personalizada', 'Follow-up Estruturado'].map((step, idx) => (
                    <div key={step} className="p-3 rounded-lg bg-[#15171B] border border-[#202329] text-center">
                      <span className="text-[10px] font-mono text-[#FFDF00] block mb-1">0{idx + 1}</span>
                      <span className="text-xs font-bold text-white block">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
                  Trabalhamos com mensagens em inglês comercial impecável, respeitando as normas americanas e destacando a confiabilidade, licenças e portfólio da sua empresa.
                </p>
                <div className="pt-2">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                  >
                    <span>Quero iniciar uma prospecção</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#15171B] border border-[#202329] space-y-4">
                <span className="text-xs font-mono font-bold text-zinc-400 block">
                  Cargos Abordados nas Campanhas
                </span>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  {[
                    'Business Owners & Diretores Gerais',
                    'Property Managers & Condominium Supervisors',
                    'Facility Managers & Diretores de Operações',
                    'Procurement / Departamentos de Suprimentos',
                    'Project Managers de Construtoras e Empreiteiras',
                  ].map((cargo) => (
                    <li key={cargo} className="flex items-center gap-2.5 p-2 rounded bg-[#090A0C] border border-[#202329]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF00]"></span>
                      <span className="font-medium">{cargo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Tráfego Pago */}
        {activeTab === 'ads' && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090A0C] border border-[#202329] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                  Canal 04 • Mídia Paga & Intenção Local
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Quando seu cliente procura, sua empresa precisa aparecer.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  A publicidade digital permite que sua empresa seja encontrada exatamente no momento em que um cliente comercial ou residencial está buscando uma solução urgente na sua área de atendimento nos EUA.
                </p>
                <div className="p-4 rounded-xl bg-[#15171B] border border-[#202329] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FFDF00] uppercase tracking-wider">
                      Origem e Expertise Histórica:
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    A <strong>SALES FOR BRAZILIANS</strong> nasceu com profunda bagagem em anúncios através da ADS4BRAZILIANS. Dominamos campanhas de Google Ads (alta intenção de busca) e Meta Ads (geolocalização e engajamento).
                  </p>
                  <p className="text-xs font-bold text-white pt-1">
                    “Foi onde começamos. Não é onde paramos.”
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                  >
                    <span>Quero anunciar minha empresa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#15171B] border border-[#202329] space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
                  Pilares de Alta Conversão em Anúncios
                </span>
                {[
                  { name: 'Google Search Ads', detail: 'Palavras-chave de busca com altíssima intenção de contratação imediata.' },
                  { name: 'Segmentação Geográfica Cirúrgica', detail: 'Foco exclusivo nos ZIP Codes e cidades onde sua equipe atua.' },
                  { name: 'Páginas de Conversão Direcionadas', detail: 'Landing pages otimizadas para transformar cliques em chamadas e leads.' },
                  { name: 'Otimização Contínua de ROI', detail: 'Ajuste de lances negativos, público qualificado e custo por contato.' },
                ].map((item) => (
                  <div key={item.name} className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <strong className="text-xs text-white block mb-0.5">{item.name}</strong>
                    <span className="text-[11px] text-zinc-400">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Licitações / Governo */}
        {activeTab === 'governo' && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090A0C] border border-[#202329] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-950/30 text-red-300 border border-red-800/40">
                  Canal 05 • Contratação Pública & Licitações
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  O governo americano também compra serviços.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Órgãos federais, estaduais, condados (Counties), municípios e distritos escolares compram serviços contínuos de limpeza, manutenção, pintura, reformas e jardinagem. Ajudamos sua empresa a entender como esse mercado funciona e onde as demandas são publicadas.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {['Cidades & Municípios', 'Condados (Counties)', 'Distritos Escolares', 'Órgãos Estaduais', 'Departamentos de Parques', 'SAM.gov & Federal'].map((gov) => (
                    <div key={gov} className="p-2.5 rounded bg-[#15171B] border border-[#202329] text-center">
                      <span className="text-xs font-semibold text-white">{gov}</span>
                    </div>
                  ))}
                </div>

                {/* Important Disclaimer Box */}
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300 block mb-1">Princípio de Transparência Ética:</strong>
                  “Encontrar uma oportunidade não significa garantia de contratação.” Nosso objetivo é munir sua empresa com conhecimento, identificar as demandas disponíveis na sua região e estruturar os requisitos para que você explore um mercado que muitos empresários brasileiros ainda ignoram.
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                  >
                    <span>Quero entender esse mercado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#15171B] border border-[#202329] space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
                  Como Apoiamos Nesse Canal
                </span>
                {[
                  { step: 'Pesquisa de Oportunidades', desc: 'Monitoramento de editais públicos abertos e compatíveis com seu serviço.' },
                  { step: 'Identificação de Portais Oficiais', desc: 'Mapeamento dos sistemas de compras da sua prefeitura e condado.' },
                  { step: 'Análise de Requisitos & Escopo', desc: 'Verificação do que o órgão público está exigindo para habilitação.' },
                  { step: 'Orientação Cadastral', desc: 'Compreensão da documentação e registros formais necessários.' },
                ].map((item) => (
                  <div key={item.step} className="p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                    <strong className="text-xs text-white block mb-0.5">{item.step}</strong>
                    <span className="text-[11px] text-zinc-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
