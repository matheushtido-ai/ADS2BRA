import React, { useState } from 'react';
import { CHANNELS } from '../data';
import { ArrowRight, Check, ShieldAlert, Sparkles, Building, Briefcase, Mail, Target, Landmark } from 'lucide-react';

interface ServicesCardsProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (id: string) => {
    switch (id) {
      case 'portais-privados':
        return Building;
      case 'parcerias-b2b':
        return Briefcase;
      case 'prospeccao-email':
        return Mail;
      case 'trafego-pago':
        return Target;
      case 'licitacoes-governo':
        return Landmark;
      default:
        return Sparkles;
    }
  };

  const handleCtaClick = (channelTitle: string) => {
    if (onSelectService) {
      onSelectService(channelTitle);
    }
    const contactEl = document.querySelector('#contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171B] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nossos Serviços de Captação
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            5 caminhos para gerar novas oportunidades
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Utilizamos diferentes estratégias para ampliar os pontos de entrada da sua empresa no mercado americano.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="space-y-8">
          {CHANNELS.map((channel, index) => {
            const Icon = getIcon(channel.id);
            const isGov = channel.id === 'licitacoes-governo';
            const isAds = channel.id === 'trafego-pago';
            const isEmail = channel.id === 'prospeccao-email';
            const isB2B = channel.id === 'parcerias-b2b';
            const isPortals = channel.id === 'portais-privados';

            return (
              <div
                key={channel.id}
                id={`servico-${channel.id}`}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#15171B] border border-[#202329] hover:border-zinc-700 transition-all shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Description */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-[#090A0C] text-[#FFDF00] border border-[#202329]">
                        CANAL {channel.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#090A0C] border border-[#202329] flex items-center justify-center text-zinc-300">
                        <Icon className="w-4 h-4 text-[#009C3B]" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {channel.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {channel.description}
                    </p>

                    {/* Channel-Specific Authentic Statements */}
                    {isPortals && (
                      <div className="p-3.5 rounded-lg bg-[#090A0C] border border-[#202329] text-xs text-zinc-300">
                        <strong className="text-white">Critérios de Análise:</strong> Cada oportunidade em portais privados é minuciosamente analisada de acordo com seu serviço, localização, estrutura operacional, escopo e requisitos técnicos.
                      </div>
                    )}

                    {isB2B && (
                      <div className="p-3.5 rounded-lg bg-[#090A0C] border border-[#202329] text-xs text-zinc-300">
                        <strong className="text-white">Posicionamento Ativo:</strong> Em vez de esperar passivamente que o cliente encontre sua empresa, colocamos seu negócio diretamente no radar de potenciais parceiros comerciais e contratantes contínuos.
                      </div>
                    )}

                    {isEmail && (
                      <div className="p-3.5 rounded-lg bg-[#090A0C] border border-[#202329] text-xs text-zinc-300">
                        <strong className="text-white">Prospecção Qualificada:</strong> Foco absoluto em inteligência e personalização corporativa. Não fazemos disparos genéricos de spam; conectamos sua empresa com quem realmente tem poder de decisão e contratação.
                      </div>
                    )}

                    {isAds && (
                      <div className="p-3.5 rounded-lg bg-[#090A0C] border border-[#202329] text-xs text-zinc-300">
                        <strong className="text-white">Nosso Ponto de Origem:</strong> O tráfego pago continua sendo uma ferramenta fundamental e de alta precisão. A grande diferença estratégica é que ele não precisa e não deve ser seu único caminho de captação.
                      </div>
                    )}

                    {isGov && (
                      <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 flex items-start gap-2.5">
                        <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-300 block mb-0.5">Aviso de Integridade e Transparência:</strong>
                          Identificamos e ajudamos sua empresa a navegar oportunidades disponíveis. Encontrar uma oportunidade não significa garantia de contratação. A SALES FOR BRAZILIANS não é um órgão público e não possui afiliação governamental.
                        </div>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        onClick={() => handleCtaClick(channel.title)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-all shadow hover:shadow-[#FFDF00]/20"
                      >
                        <span>{channel.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Opportunities Breakdown & Audiences */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Opportunities Box */}
                    <div className="p-5 rounded-xl bg-[#090A0C] border border-[#202329] space-y-3">
                      <span className="text-[11px] font-bold text-[#009C3B] uppercase tracking-wider block">
                        Tipos de Oportunidades
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {channel.opportunityTypes.map((opp) => (
                          <li key={opp} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#009C3B] flex-shrink-0 mt-0.5" />
                            <span>{opp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Platforms / Target Audience Box */}
                    <div className="p-5 rounded-xl bg-[#090A0C] border border-[#202329] space-y-3">
                      <span className="text-[11px] font-bold text-[#FFDF00] uppercase tracking-wider block">
                        Público & Plataformas
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {channel.audienceOrPlatforms.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF00] flex-shrink-0 mt-1.5"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
