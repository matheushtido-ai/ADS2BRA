import React from 'react';
import { MessageSquareQuote, ShieldCheck } from 'lucide-react';

export const TestimonialsPlaceholder: React.FC = () => {
  const placeholderCards = [
    {
      id: 1,
      title: 'Depoimento de Cliente',
      quote: 'Depoimento será adicionado aqui após validação do cliente.',
      author: 'Brazilian Business Owner',
      location: 'United States',
      industry: 'Commercial Cleaning & Services',
    },
    {
      id: 2,
      title: 'Depoimento de Cliente',
      quote: 'Depoimento será adicionado aqui após validação do cliente.',
      author: 'Brazilian Business Owner',
      location: 'United States',
      industry: 'General Contractor / Remodeling',
    },
    {
      id: 3,
      title: 'Depoimento de Cliente',
      quote: 'Depoimento será adicionado aqui após validação do cliente.',
      author: 'Brazilian Business Owner',
      location: 'United States',
      industry: 'Painting & Maintenance',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#15171B] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090A0C] border border-[#202329] text-xs font-semibold text-[#009C3B] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Casos & Referências
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Empresas que estão construindo novos caminhos.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Priorizamos a transparência e integridade: os relatos oficiais de empresários atendidos são atualizados continuamente nesta seção.
          </p>
        </div>

        {/* 3 Compliant Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderCards.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-[#090A0C] border border-[#202329] border-dashed hover:border-zinc-600 transition-all flex flex-col justify-between"
            >
              <div>
                <MessageSquareQuote className="w-7 h-7 text-zinc-600 mb-4" />
                <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-zinc-400 italic leading-relaxed mb-6">
                  “{card.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#202329]">
                <strong className="text-xs text-zinc-300 block">{card.author}</strong>
                <span className="text-[11px] text-zinc-500 block">{card.location}</span>
                <span className="text-[10px] text-[#009C3B] font-medium mt-1 inline-block">
                  {card.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
