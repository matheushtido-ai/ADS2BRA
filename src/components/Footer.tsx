import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data';
import { Phone, MessageCircle, Globe, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Ecossistema (Leque)', href: '#ecossistema' },
    { label: 'Portais Privados', href: '#servicos' },
    { label: 'Parcerias B2B', href: '#servicos' },
    { label: 'Prospecção por E-mail', href: '#servicos' },
    { label: 'Tráfego Pago', href: '#servicos' },
    { label: 'Licitações / Governo', href: '#servicos' },
    { label: 'Para Quem É', href: '#para-quem-e' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Por Que Nós', href: '#por-que-nos' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Analisar Minha Empresa', href: '#contato' },
  ];

  return (
    <footer className="bg-[#090A0C] border-t border-[#202329] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#202329]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm pt-2">
              Desde 2022 ajudando empresários brasileiros a encontrar novos caminhos e oportunidades no mercado americano.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#15171B] border border-[#202329] text-[11px] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#009C3B]"></span>
              <span>Evolução oficial de <strong>ADS4BRAZILIANS</strong></span>
            </div>
            <div className="pt-2">
              <p className="text-[11px] text-zinc-500 font-mono">
                salesforbrazilians.com • Foco Exclusivo em Negócios B2B nos EUA
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação Estratégica
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#FFDF00] transition-colors py-1 truncate"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Canais de Atendimento
            </h4>
            <div className="space-y-2.5">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#15171B] border border-[#202329] hover:border-[#009C3B] text-zinc-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#009C3B] flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-zinc-500 block">WhatsApp</span>
                  <span className="font-semibold text-xs">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`tel:+${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#15171B] border border-[#202329] hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFDF00] flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-zinc-500 block">Ligação Direta (EUA)</span>
                  <span className="font-semibold text-xs">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#15171B] border border-[#202329] text-zinc-300">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-zinc-500 block">Website</span>
                  <span className="font-semibold text-xs">{CONTACT_INFO.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-8 border-b border-[#202329]">
          <div className="p-4 sm:p-5 rounded-xl bg-[#15171B]/70 border border-[#202329] space-y-2">
            <div className="flex items-center gap-2 text-zinc-300 font-bold text-xs">
              <Shield className="w-3.5 h-3.5 text-[#FFDF00]" />
              <span>Aviso Legal e Informações Regulatórias</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              A <strong>SALES FOR BRAZILIANS</strong> é uma empresa privada de desenvolvimento de negócios e captação de clientes. Não garantimos contratos, aprovações, contratações ou resultados específicos. A SALES FOR BRAZILIANS não é um órgão público e não possui afiliação governamental. A identificação de oportunidades públicas e privadas faz parte dos nossos serviços de pesquisa e estratégia comercial.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2022 - 2026 SALES FOR BRAZILIANS. Todos os direitos reservados.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFDF00]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
