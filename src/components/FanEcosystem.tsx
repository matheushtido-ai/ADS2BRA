import React, { useState } from 'react';
import { CHANNELS } from '../data';
import { Network, ArrowDown, Building2, Briefcase, FileCheck2, ArrowRight } from 'lucide-react';

export const FanEcosystem: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState(CHANNELS[0].id);

  const activeChannel = CHANNELS.find((c) => c.id === selectedChannel) || CHANNELS[0];

  const outcomes = [
    { label: 'Novos Clientes Comerciais', desc: 'Demandas diretas e orçamentos corporativos' },
    { label: 'Parcerias Estratégicas', desc: 'Indicações de GCs e Property Managers' },
    { label: 'Pacotes de Subcontratação', desc: 'Participação em projetos de terceiros' },
    { label: 'Contratos Recorrentes', desc: 'Prestação contínua de facilities e manutenção' },
    { label: 'Oportunidades Públicas', desc: 'Editais municipais e condados' },
  ];

  return (
    <section id="ecossistema" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171B] border border-[#202329] text-xs font-semibold text-[#009C3B] uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5" />
            Conceito Central da Marca
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Nossa captação funciona em formato de leque.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Não acreditamos que sua empresa deva depender de apenas um canal para encontrar novas oportunidades.
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Cada canal oferece uma possibilidade diferente de colocar sua empresa diante de novos clientes, parceiros ou contratantes. Quanto mais forte for o ecossistema de captação, menos dependente o negócio se torna de uma única fonte de oportunidades.
          </p>
        </div>

        {/* Interactive Fan / Multi-Path Flow Architecture */}
        <div className="bg-[#15171B] border border-[#202329] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden mb-12">
          {/* Top Level: Central Strategic Hub */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="px-6 py-3 rounded-xl bg-[#090A0C] border border-zinc-700 shadow-lg text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block mb-0.5">
                Núcleo Estratégico
              </span>
              <h3 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
                SALES FOR BRAZILIANS
                <span className="w-2 h-2 rounded-full bg-[#009C3B]"></span>
              </h3>
            </div>

            {/* Connecting Visual Lines */}
            <div className="flex flex-col items-center mt-2 text-zinc-500">
              <ArrowDown className="w-4 h-4 text-zinc-500 animate-bounce" />
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Distribuição dos 5 Caminhos de Aquisição
              </span>
            </div>
          </div>

          {/* Middle Level: 5 Acquisition Paths (Fan Channels) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
            {CHANNELS.map((channel) => {
              const isSelected = channel.id === selectedChannel;
              return (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`p-4 rounded-xl text-left transition-all relative border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#202329] border-[#FFDF00] shadow-lg shadow-[#FFDF00]/10 scale-[1.02]'
                      : 'bg-[#090A0C] border-[#202329] hover:border-zinc-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-zinc-500">
                        {channel.number}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#FFDF00]" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                      {channel.shortTitle}
                    </h4>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 mt-2">
                    {channel.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Channel Spotlight Drawer */}
          <div className="p-6 rounded-xl bg-[#090A0C] border border-[#202329] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#15171B] text-[#FFDF00] border border-[#202329]">
                    Canal {activeChannel.number}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeChannel.title}
                  </h4>
                </div>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  {activeChannel.description}
                </p>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-zinc-400 block">
                    Tipos de Oportunidades Conectadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeChannel.opportunityTypes.map((opp) => (
                      <span
                        key={opp}
                        className="text-xs px-2.5 py-1 rounded bg-[#15171B] border border-[#202329] text-zinc-300"
                      >
                        ✓ {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-lg bg-[#15171B] border border-[#202329]">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                  Público & Ecossistema
                </span>
                <ul className="text-xs text-zinc-300 space-y-2 mb-4">
                  {activeChannel.audienceOrPlatforms.map((aud) => (
                    <li key={aud} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009C3B]"></span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-bold text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors"
                >
                  <span>{activeChannel.ctaText}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Level: Converging into Real Business Opportunities & Growth */}
          <div className="border-t border-[#202329] pt-6">
            <div className="text-center mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#009C3B] block">
                Convergência em Oportunidades Reais
              </span>
              <h4 className="text-sm font-bold text-zinc-200">
                Todos os canais direcionados para o seu objetivo principal
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-lg bg-[#090A0C] border border-[#202329] text-center"
                >
                  <Briefcase className="w-4 h-4 text-[#FFDF00] mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-white block">
                    {item.label}
                  </span>
                  <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#090A0C] border border-emerald-900/60 text-xs text-zinc-300">
                <Building2 className="w-4 h-4 text-[#009C3B]" />
                <span>
                  Resultado Final: <strong className="text-white">Crescimento Sustentável do Negócio nos EUA</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
