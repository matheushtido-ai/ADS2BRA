import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Conhecemos sua empresa',
      description: 'Entendemos seus serviços, localização, área de atuação, estrutura operacional e objetivos de crescimento no mercado americano.',
      detail: 'Mapeamento de capacidade de atendimento, licenças e portfólio.',
    },
    {
      number: '02',
      title: 'Analisamos os canais',
      description: 'Identificamos quais formas de captação (portais privados, B2B, e-mail, anúncios ou governo) fazem mais sentido para o perfil da sua empresa.',
      detail: 'Diagnóstico de viabilidade regional e concorrência local.',
    },
    {
      number: '03',
      title: 'Criamos diferentes caminhos',
      description: 'Trabalhamos os canais definidos de maneira coordenada para colocar sua empresa ativamente diante de novas oportunidades.',
      detail: 'Execução técnica, posicionamento e conexões diretas.',
    },
    {
      number: '04',
      title: 'Expandimos sua presença comercial',
      description: 'O objetivo central é reduzir a dependência de uma única fonte de clientes e ampliar as possibilidades de faturamento sustentável.',
      detail: 'Construção de um ecossistema multicanal robusto nos EUA.',
    },
  ];

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#15171B] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090A0C] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            Passo a Passo Estruturado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Como começamos
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Um processo claro, transparente e orientado a resultados para integrar sua empresa ao ecossistema americano de oportunidades.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#090A0C] border border-[#202329] hover:border-zinc-700 transition-all flex flex-col justify-between group relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#202329] group-hover:bg-[#009C3B] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-black text-[#FFDF00]">
                    {step.number}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#15171B] border border-[#202329] text-[10px] text-zinc-400 font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#FFDF00] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#202329] text-[11px] text-zinc-500">
                <span className="text-[#009C3B] font-semibold block mb-0.5">Entregável:</span>
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFDF00] to-[#e6c800] hover:from-[#ffe633] hover:to-[#ffd700] shadow-lg shadow-[#FFDF00]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Quero analisar minha empresa</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
