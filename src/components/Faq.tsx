import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#15171B] border-b border-[#202329] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090A0C] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Dúvidas Comuns de Empresários
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Respostas diretas e transparentes sobre nosso modelo de atuação e os 5 canais de captação nos EUA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#090A0C] border border-[#202329] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#15171B] border border-[#202329] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FFDF00]' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#202329]/60 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp card */}
        <div className="p-6 rounded-2xl bg-[#090A0C] border border-[#202329] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white mb-1">
              Ainda tem alguma pergunta sobre sua operação?
            </h4>
            <p className="text-xs text-zinc-400">
              Nossa equipe está disponível para esclarecer como os canais se aplicam ao seu estado.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#009C3B] hover:bg-[#008532] transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
