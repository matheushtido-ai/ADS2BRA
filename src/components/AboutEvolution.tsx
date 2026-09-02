import React from 'react';
import { ArrowRight, Layers, TrendingUp, Sparkles, Shield, ChevronRight } from 'lucide-react';

export const AboutEvolution: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const timelineSteps = [
    {
      year: '2022',
      phase: 'ORIGEM',
      brand: 'ADS4BRAZILIANS',
      color: 'border-[#3C3B6E] text-[#93c5fd]',
      badgeColor: 'bg-[#3C3B6E]/20 text-blue-300 border-[#3C3B6E]/40',
      title: 'Foco em Publicidade Digital',
      desc: 'Começamos ajudando empresários brasileiros nos Estados Unidos através da publicidade digital no Google e Meta Ads.',
    },
    {
      year: '2023',
      phase: 'EXPANSÃO',
      brand: 'DIAGNÓSTICO DE MERCADO',
      color: 'border-[#FFDF00] text-[#FFDF00]',
      badgeColor: 'bg-[#FFDF00]/10 text-[#FFDF00] border-[#FFDF00]/30',
      title: 'Mais do que Anúncios',
      desc: 'Percebemos que depender apenas de anúncios não era suficiente. As oportunidades para prestadores de serviço e construtores vão muito além do clique.',
    },
    {
      year: '2024',
      phase: 'ECOSSISTEMA',
      brand: 'NOVOS CANAIS B2B',
      color: 'border-[#009C3B] text-[#4ade80]',
      badgeColor: 'bg-[#009C3B]/20 text-emerald-300 border-[#009C3B]/40',
      title: 'Captação Multicanal',
      desc: 'Portais privados, parcerias B2B com GCs e Property Managers, prospecção direta por e-mail e oportunidades públicas foram integrados à operação.',
    },
    {
      year: 'ATUAL',
      phase: 'EVOLUÇÃO',
      brand: 'SALES FOR BRAZILIANS',
      color: 'border-white text-white',
      badgeColor: 'bg-white/10 text-white border-white/30',
      title: 'A Nova Identidade da Captação',
      desc: 'Uma marca consolidada criada para representar a totalidade do que fazemos hoje: múltiplos caminhos para novas oportunidades de negócios nos EUA.',
    },
  ];

  return (
    <section id="sobre-nos" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171B] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nossa História & Posicionamento
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-6">
            Mais do que anúncios. <br />
            <span className="text-zinc-400">Uma estratégia completa de captação.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A nossa história começou em 2022 como <strong className="text-white">ADS4BRAZILIANS</strong>, com o objetivo de ajudar empresários brasileiros nos Estados Unidos através da publicidade digital.
          </p>
        </div>

        {/* Brand Evolution Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#15171B] via-[#1a1d24] to-[#15171B] border border-[#202329] mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#009C3B]/5 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#009C3B]/20 text-[#009C3B] border border-[#009C3B]/30">
                  Evolução de Marca
                </span>
                <span className="text-xs text-zinc-400 font-mono">2022 → Hoje</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                ADS4BRAZILIANS agora é SALES FOR BRAZILIANS.
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Com o tempo e a convivência diária com nossos clientes no mercado americano, percebemos com clareza: depender apenas de anúncios não era suficiente. As oportunidades para uma empresa podem estar em diferentes lugares: em um portal privado, em uma parceria com outra companhia, em um contato B2B direto, em uma campanha de anúncios ou até mesmo em uma oportunidade publicada pelo governo.
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                Foi dessa constatação que nasceu a <span className="text-white underline decoration-[#009C3B] decoration-2 underline-offset-4">SALES FOR BRAZILIANS</span>: uma empresa voltada para ampliar os caminhos de captação do empresário brasileiro dentro do mercado americano.
              </p>

              {/* Bold Slogans */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-bold">
                <span className="text-[#FFDF00] bg-[#FFDF00]/10 px-3 py-1.5 rounded-lg border border-[#FFDF00]/20">
                  “Mais do que Ads. Mais caminhos para Sales.”
                </span>
                <span className="text-white bg-[#202329] px-3 py-1.5 rounded-lg border border-zinc-700">
                  “ADS abriu o caminho. SALES representa a evolução.”
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[#090A0C] border border-[#202329] text-center">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                Transição Estrutural
              </span>
              <div className="font-heading text-lg font-extrabold text-zinc-400 line-through">
                ADS4BRAZILIANS
              </div>
              <div className="my-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#202329] text-[#FFDF00]">
                ↓
              </div>
              <div className="font-heading text-xl font-extrabold text-white">
                SALES FOR BRAZILIANS
              </div>
              <p className="text-[11px] text-zinc-400 mt-3">
                Mais caminhos. Mais oportunidades.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Phase Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#009C3B]" />
              Linha do Tempo de Evolução
            </h3>
            <span className="text-xs text-zinc-500">2022 — Presente</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.phase}
                className="relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#15171B] border border-[#202329] hover:border-zinc-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      {step.year}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${step.badgeColor}`}>
                      {step.phase}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-white block mb-1">
                    {step.brand}
                  </span>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFDF00] transition-colors mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#202329] flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Passo 0{idx + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-[#15171B]/50 border border-[#202329] gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#009C3B] flex-shrink-0" />
            <p className="text-sm text-zinc-300">
              Pronto para entender como o ecossistema funciona na prática para a sua empresa?
            </p>
          </div>
          <button
            onClick={() => scrollToSection('#ecossistema')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors flex-shrink-0 shadow"
          >
            <span>Conheça como trabalhamos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
