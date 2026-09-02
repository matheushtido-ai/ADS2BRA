import React from 'react';
import { Calendar, Network, Flag, Users } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Calendar,
      title: 'Desde 2022',
      subtitle: 'Histórico e evolução contínua',
      accent: 'border-l-2 border-[#009C3B]',
    },
    {
      icon: Network,
      title: 'Captação Multicanal',
      subtitle: 'Estratégia em formato de leque',
      accent: 'border-l-2 border-[#FFDF00]',
    },
    {
      icon: Flag,
      title: 'Foco no Mercado Americano',
      subtitle: 'Oportunidades em território dos EUA',
      accent: 'border-l-2 border-[#3C3B6E]',
    },
    {
      icon: Users,
      title: 'Feito para Empresários Brasileiros',
      subtitle: 'Compreensão real da sua operação',
      accent: 'border-l-2 border-[#009C3B]',
    },
  ];

  return (
    <div className="w-full bg-[#15171B] border-y border-[#202329] py-6 sm:py-7 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#090A0C]/80 border border-[#202329] ${item.accent} transition-all hover:bg-[#202329]/40`}
              >
                <div className="p-2 rounded-lg bg-[#15171B] text-zinc-300 border border-[#202329] flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#FFDF00]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
