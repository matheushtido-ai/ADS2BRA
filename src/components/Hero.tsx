import React from 'react';
import { CONTACT_INFO } from '../data';
import { ArrowRight, MessageCircle, Layers, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const channelBadges = [
    { label: 'Portais Privados', desc: 'Plataformas & Redes de Fornecedores' },
    { label: 'Parcerias B2B', desc: 'Property Managers & General Contractors' },
    { label: 'Prospecção E-mail', desc: 'Tomadores de Decisão Corporativos' },
    { label: 'Tráfego Pago', desc: 'Google & Meta Ads com Intenção Local' },
    { label: 'Oportunidades com Governo', desc: 'Licitações Municipais, Condados & SAM' },
  ];

  return (
    <section id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#090A0C]">
      {/* Subtle Background Geometric Accents representing USA & Brazil synergy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Dark Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#E9ECF0 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#009C3B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#002776]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#3C3B6E]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Copy */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Authority Evolution Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15171B] border border-[#202329] text-xs text-zinc-300 mb-6 w-fit shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#009C3B] animate-pulse"></span>
              <span>
                <strong className="text-white">ADS4BRAZILIANS</strong> evoluiu. Agora somos{' '}
                <strong className="text-[#FFDF00]">SALES FOR BRAZILIANS</strong>
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">Desde 2022</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6">
              Mais Caminhos. <br />
              Mais Oportunidades. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFDF00] to-[#009C3B]">
                Mais Negócios nos EUA.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-zinc-200 font-medium mb-4 leading-snug">
              Sua empresa nos EUA não precisa depender de apenas uma fonte de clientes.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-4">
              Desde 2022, ajudamos empresários brasileiros a ampliar sua captação no mercado americano através de diferentes canais de oportunidades.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mb-8 p-3 rounded-lg bg-[#15171B]/70 border border-[#202329]">
              <strong className="text-zinc-200">Portais privados</strong>,{' '}
              <strong className="text-zinc-200">parcerias B2B</strong>,{' '}
              <strong className="text-zinc-200">e-mails</strong>,{' '}
              <strong className="text-zinc-200">tráfego pago</strong> e{' '}
              <strong className="text-zinc-200">oportunidades com o governo</strong> trabalhando em conjunto como caminhos complementares para o crescimento da sua empresa.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={() => scrollToSection('#contato')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-black uppercase tracking-wider bg-gradient-to-r from-[#FFDF00] to-[#e6c800] hover:from-[#ffe633] hover:to-[#ffd700] shadow-lg shadow-[#FFDF00]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Quero encontrar oportunidades</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => scrollToSection('#ecossistema')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-medium text-zinc-200 bg-[#15171B] hover:bg-[#202329] border border-[#202329] hover:border-zinc-600 transition-colors"
              >
                <Layers className="w-4 h-4 text-[#009C3B]" />
                <span>Conheça nossa estratégia</span>
              </button>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-[#202329] text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#009C3B]" />
                <span>Sem dependência de um único canal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#009C3B]" />
                <span>Foco exclusivo em contratos B2B e comerciais</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDF00]" />
                <span>Estratégia personalizada por estado/cidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Visual Diagram ("Formato de Leque" Ecosystem) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#15171B] border border-[#202329] p-6 sm:p-7 shadow-2xl overflow-hidden">
              {/* Top Accent Line with Brazil/USA Colors */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#009C3B] via-[#FFDF00] to-[#3C3B6E]" />

              <div className="flex items-center justify-between pb-4 border-b border-[#202329] mb-5">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#FFDF00] uppercase">
                    Estratégia Multicanal
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Captação em Formato de Leque
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#090A0C] border border-[#202329] text-[11px] text-zinc-400 font-mono">
                  5 Caminhos
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Em vez de arriscar todo o faturamento da sua empresa apostando em apenas uma fonte de contatos, criamos múltiplos caminhos para novas oportunidades nos EUA:
              </p>

              {/* 5 Channel Pathway Cards */}
              <div className="space-y-2.5">
                {channelBadges.map((badge, idx) => (
                  <div
                    key={badge.label}
                    className="group flex items-center justify-between p-3 rounded-lg bg-[#090A0C] border border-[#202329] hover:border-[#009C3B]/50 transition-all cursor-pointer"
                    onClick={() => scrollToSection('#servicos')}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-[#15171B] text-zinc-300 border border-[#202329] text-[11px] font-bold flex items-center justify-center font-mono">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FFDF00] transition-colors">
                          {badge.label}
                        </h4>
                        <p className="text-[11px] text-zinc-500">{badge.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#009C3B] transition-transform group-hover:translate-x-0.5" />
                  </div>
                ))}
              </div>

              {/* Converging Outcome Box */}
              <div className="mt-5 pt-4 border-t border-[#202329] flex items-center justify-between bg-[#090A0C]/70 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Compass className="w-4 h-4 text-[#009C3B]" />
                  <span>Resultado estratégico:</span>
                </div>
                <span className="text-xs font-bold text-white bg-[#202329] px-2.5 py-1 rounded border border-zinc-700">
                  Crescimento Comercial Consistente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
