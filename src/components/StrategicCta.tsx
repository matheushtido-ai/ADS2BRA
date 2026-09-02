import React from 'react';
import { CONTACT_INFO } from '../data';
import { ArrowRight, MessageCircle, Phone, HelpCircle } from 'lucide-react';

export const StrategicCta: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#090A0C] via-[#15171B] to-[#090A0C] border-b border-[#202329] relative overflow-hidden">
      {/* Decorative colored edge lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#009C3B] via-[#FFDF00] to-[#3C3B6E]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090A0C] border border-[#202329] text-xs font-semibold text-[#FFDF00] uppercase tracking-wider mb-6">
          <HelpCircle className="w-3.5 h-3.5" />
          Diagnóstico Comercial
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-6">
          Quantos caminhos sua empresa utiliza hoje para encontrar novos clientes?
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Se sua empresa depende apenas de indicação, Google, Facebook ou uma única plataforma, talvez existam oportunidades valiosas que você ainda não está explorando nos Estados Unidos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFDF00] to-[#e6c800] hover:from-[#ffe633] hover:to-[#ffd700] shadow-lg shadow-[#FFDF00]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Quero ampliar minha captação</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#009C3B] hover:bg-[#008532] shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp: {CONTACT_INFO.phone}</span>
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-[#090A0C] px-4 py-2 rounded-full border border-[#202329]">
          <Phone className="w-3 h-3 text-[#009C3B]" />
          <span>Atendimento direto pelo telefone e WhatsApp corporativo: {CONTACT_INFO.phone}</span>
        </div>
      </div>
    </section>
  );
};
