import React, { useState } from 'react';
import { INDUSTRIES } from '../data';
import { Building, Sparkles, Briefcase, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

interface WhoWeHelpProps {
  onSelectIndustry?: (industryName: string) => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onSelectIndustry }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleIndustryClick = (indName: string) => {
    setSelectedIndustry(indName);
    if (onSelectIndustry) {
      onSelectIndustry(indName);
    }
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="para-quem-e" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171B] border border-[#202329] text-xs font-semibold text-[#009C3B] uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            Perfil de Clientes & Segmentos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Feito para brasileiros que empreendem nos Estados Unidos.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-2">
            Construir uma empresa em outro país exige muito mais do que prestar um bom serviço. É preciso entender como o mercado funciona, onde as oportunidades aparecem e como chegar até quem contrata.
          </p>
        </div>

        {/* Vital Distinction Banner: Business / Contract Opportunities vs Employment */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#15171B] to-[#1e222b] border border-[#202329] mb-12 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF00] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#FFDF00]" />
                Posicionamento Exclusivo: Oportunidades de Negócios e Contratos
              </span>
              <p className="text-sm text-zinc-300">
                A <strong>SALES FOR BRAZILIANS</strong> atende exclusivamente <strong>donos de empresas (Business Owners)</strong> que buscam novos clientes, subcontratos e contratos comerciais nos EUA.
              </p>
            </div>
            <div className="flex-shrink-0 px-3.5 py-1.5 rounded-lg bg-[#090A0C] border border-[#202329] text-xs text-zinc-400">
              <span className="text-rose-400 font-bold">✕ Não somos agência de empregos</span>
              <span className="block text-emerald-400 font-bold">✓ Foco em Contratos B2B & Clientes</span>
            </div>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INDUSTRIES.map((industry) => {
            const isSelected = selectedIndustry === industry.name;
            return (
              <div
                key={industry.id}
                onClick={() => handleIndustryClick(industry.name)}
                className={`p-6 rounded-2xl bg-[#15171B] border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#FFDF00] bg-[#1e222a] shadow-lg shadow-[#FFDF00]/10 -translate-y-1'
                    : 'border-[#202329] hover:border-zinc-600 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      {industry.englishName}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#FFDF00]"></span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFDF00] transition-colors mb-2">
                    {industry.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202329]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#009C3B] block mb-2">
                    Canais Recomendados:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {industry.keyChannels.map((ch) => (
                      <span
                        key={ch}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#090A0C] border border-[#202329] text-zinc-300"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] text-zinc-400 group-hover:text-white flex items-center gap-1 font-medium transition-colors">
                    <span>Selecionar para análise</span>
                    <ArrowRight className="w-3 h-3 text-[#FFDF00]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Brazilian-Owned Business Callout */}
        <div className="p-6 rounded-2xl bg-[#15171B]/60 border border-[#202329] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Sua área de atuação não está listada acima?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Atendemos diversas empresas de prestação de serviços B2B fundadas por brasileiros nos EUA. Avaliamos a viabilidade de canais para o seu nicho específico.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] transition-colors flex-shrink-0"
          >
            <span>Consultar viabilidade da minha empresa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
