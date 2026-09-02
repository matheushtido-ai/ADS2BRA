import React, { useState } from 'react';
import { Search, Users, Mail, Target, Landmark, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export const OpportunitySimulator: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<number>(0);

  const sources = [
    {
      id: 'portais',
      name: 'Portais Privados',
      icon: Search,
      sourceType: 'Marketplaces Restritos & Vendor Portals',
      contractors: 'Property Management Firms, Redes Comerciais, Facilities',
      destinations: [
        'Contratos de Manutenção e Facilities',
        'Cadastro Homologado de Fornecedores',
        'Cotações Privadas com Pouca Concorrência',
      ],
      resultType: 'Contratos Comerciais Recorrentes',
      color: 'border-[#009C3B] text-[#009C3B]',
    },
    {
      id: 'b2b',
      name: 'Parcerias B2B',
      icon: Users,
      sourceType: 'Conexões Diretas entre Empresas',
      contractors: 'General Contractors, Construtoras, Building Managers',
      destinations: [
        'Pacotes de Subcontratação em Obras',
        'Parcerias com Administradoras de Condomínios',
        'Indicações Mútuas e Contratos de Terceirização',
      ],
      resultType: 'Parcerias B2B de Longo Prazo',
      color: 'border-[#002776] text-[#93c5fd]',
    },
    {
      id: 'email',
      name: 'Prospecção E-mail',
      icon: Mail,
      sourceType: 'Abordagem Corporativa Direcionada',
      contractors: 'Diretores de Operações, Procurement, Proprietários',
      destinations: [
        'Apresentação de Portfólio a Decisores',
        'Agendamento de Visitas Técnicas e Vistorias',
        'Envio de Propostas Personalizadas de Serviço',
      ],
      resultType: 'Novos Clientes B2B sem Intermediários',
      color: 'border-[#FFDF00] text-[#FFDF00]',
    },
    {
      id: 'ads',
      name: 'Tráfego Pago',
      icon: Target,
      sourceType: 'Google Ads & Meta Ads Localizados',
      contractors: 'Clientes com Intenção Imediata de Contratação',
      destinations: [
        'Solicitações de Orçamento Urgente',
        'Pesquisas Locais por Categoria de Serviço',
        'Visibilidade Geográfica nos Bairros Alvo',
      ],
      resultType: 'Leads Qualificados de Alta Intenção',
      color: 'border-[#009C3B] text-emerald-400',
    },
    {
      id: 'governo',
      name: 'Licitações / Governo',
      icon: Landmark,
      sourceType: 'Contratações Públicas Regionais',
      contractors: 'Prefeituras (City), Condados (County), Distritos',
      destinations: [
        'Editais de Prestação de Serviços Contínuos',
        'Demandas de Limpeza, Pintura e Manutenção Pública',
        'Participação em Chamadas Regionais de Suprimentos',
      ],
      resultType: 'Oportunidades com Órgãos Públicos',
      color: 'border-[#B22234] text-red-400',
    },
  ];

  const active = sources[selectedSource];
  const Icon = active.icon;

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009C3B] block mb-2">
            Mapeamento Interativo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Onde pode estar sua próxima oportunidade?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Veja como cada um dos cinco caminhos do leque conecta a sua empresa a diferentes contratantes e tipos de contratos nos EUA.
          </p>
        </div>

        {/* Interactive Fan Visualization Container */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#15171B] border border-[#202329] shadow-2xl">
          {/* Source Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {sources.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = idx === selectedSource;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSource(idx)}
                  className={`p-4 rounded-xl text-left transition-all border flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#090A0C] border-[#FFDF00] shadow-md shadow-[#FFDF00]/10 scale-[1.02]'
                      : 'bg-[#090A0C]/60 border-[#202329] hover:border-zinc-700 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-[#15171B] border border-[#202329] ${item.color}`}>
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                      Canal 0{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {item.name}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Interactive Conduit Diagram */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#090A0C] border border-[#202329]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left Column: Origin Channel */}
              <div className="p-5 rounded-xl bg-[#15171B] border border-[#202329]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  1. Ponto de Entrada (Canal)
                </span>
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-5 h-5 text-[#FFDF00]" />
                  <h3 className="text-base font-bold text-white">{active.name}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {active.sourceType}
                </p>
                <div className="mt-3 pt-3 border-t border-[#202329] text-[11px] text-zinc-500">
                  <span className="text-zinc-300 font-semibold block">Quem publica ou busca:</span>
                  <span>{active.contractors}</span>
                </div>
              </div>

              {/* Middle Column: Flow / Destinations */}
              <div className="p-5 rounded-xl bg-[#15171B] border border-[#202329] space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#009C3B] block mb-1">
                  2. Fluxo de Oportunidades
                </span>
                <div className="space-y-2">
                  {active.destinations.map((dest) => (
                    <div key={dest} className="flex items-center gap-2 text-xs text-zinc-300 p-1.5 rounded bg-[#090A0C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009C3B] flex-shrink-0" />
                      <span>{dest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Commercial Result */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#15171B] to-[#1d212b] border border-zinc-700 text-center space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFDF00] block">
                  3. Resultado para Sua Empresa
                </span>
                <Building className="w-6 h-6 text-[#009C3B] mx-auto" />
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {active.resultType}
                </h4>
                <p className="text-[11px] text-zinc-400">
                  Ampliação de receita e menor dependência de uma única fonte de trabalho.
                </p>
                <button
                  onClick={scrollToContact}
                  className="w-full py-2 px-3 rounded text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                >
                  Explorar Este Canal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
