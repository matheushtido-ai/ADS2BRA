import React from 'react';
import { Network, Flag, HeartHandshake, Briefcase, Sliders, RefreshCw, Calendar, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: Network,
      title: 'Captação Multicanal',
      highlight: 'Não dependemos de apenas uma estratégia.',
      description: 'A captação em formato de leque protege seu faturamento contra oscilações de algoritmos ou períodos de baixa em um único canal.',
      accent: 'border-[#009C3B]',
    },
    {
      icon: Flag,
      title: 'Mercado Americano',
      highlight: 'Nossa atuação é direcionada às oportunidades nos EUA.',
      description: 'Conhecimento prático sobre os padrões de contratação, certificações, seguros (COI), portais de vendors e compliance exigidos nos Estados Unidos.',
      accent: 'border-[#3C3B6E]',
    },
    {
      icon: HeartHandshake,
      title: 'Comunicação para Brasileiros',
      highlight: 'Entendemos a realidade de quem empreende nos EUA sendo brasileiro.',
      description: 'Alinhamos a comunicação no seu idioma materno enquanto estruturamos abordagens comerciais em inglês impecável para seus contratantes americanos.',
      accent: 'border-[#FFDF00]',
    },
    {
      icon: Briefcase,
      title: 'Estratégia B2B',
      highlight: 'O foco vai além de seguidores e curtidas. Buscamos oportunidades comerciais.',
      description: 'Não nos preocupamos com métricas de vaidade. Nossa prioridade absoluta é gerar orçamentos, conexões com tomadores de decisão e contratos.',
      accent: 'border-[#009C3B]',
    },
    {
      icon: Sliders,
      title: 'Análise Personalizada',
      highlight: 'Serviço, localização, estrutura e objetivo influenciam cada estratégia.',
      description: 'Não aplicamos fórmulas genéricas. Um prestador de commercial cleaning em Atlanta tem necessidades diferentes de um pintor em Boston.',
      accent: 'border-[#FFDF00]',
    },
    {
      icon: RefreshCw,
      title: 'Evolução Constante',
      highlight: 'O mercado muda e os canais de captação também.',
      description: 'Acompanhamos as novas plataformas de property management, portais privados e mudanças no comportamento de compra comercial.',
      accent: 'border-[#3C3B6E]',
    },
    {
      icon: Calendar,
      title: 'Desde 2022',
      highlight: 'História que começou como ADS4BRAZILIANS e evoluiu para SALES FOR BRAZILIANS.',
      description: 'Anos de experiência contínua apoiando empresários brasileiros nos EUA a conquistar espaço e respeito no mercado corporativo americano.',
      accent: 'border-white',
    },
  ];

  return (
    <section id="por-que-nos" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171B] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            Diferenciais Competitivos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Por que trabalhar com a SALES FOR BRAZILIANS?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Uma abordagem séria, corporativa e personalizada para empresas brasileiras que querem crescer com consistência no mercado dos Estados Unidos.
          </p>
        </div>

        {/* 7 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isWide = idx === 6; // Last item spans cleanly if desired
            return (
              <div
                key={benefit.title}
                className={`p-6 sm:p-7 rounded-2xl bg-[#15171B] border border-[#202329] hover:border-zinc-700 transition-all flex flex-col justify-between group ${
                  isWide ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#15171B] via-[#1c1f27] to-[#15171B]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#090A0C] border border-[#202329] flex items-center justify-center text-[#FFDF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#FFDF00] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 mb-2">
                    “{benefit.highlight}”
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#202329]/60 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="text-[#009C3B] font-semibold">Compromisso B2B</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009C3B]"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
