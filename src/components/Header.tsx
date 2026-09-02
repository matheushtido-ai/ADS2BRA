import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data';
import { Menu, X, Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'O Ecossistema', href: '#ecossistema' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Para Quem É', href: '#para-quem-e' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Por Que Nós', href: '#por-que-nos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Brand Notification Bar */}
      <div className="bg-[#15171B] border-b border-[#202329] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#009C3B]/20 text-[#009C3B] border border-[#009C3B]/30">
              <ShieldCheck className="w-3 h-3" />
              Evolução da Marca
            </span>
            <span className="text-zinc-300 text-[11px] sm:text-xs">
              <strong className="text-white">ADS4BRAZILIANS</strong> agora é <strong className="text-[#FFDF00]">SALES FOR BRAZILIANS</strong> — Desde 2022 ampliando caminhos nos EUA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-zinc-300 text-xs flex-shrink-0">
            <a
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#009C3B]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#009C3B] hover:text-[#FFDF00] transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Comercial</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-[#202329] py-3 shadow-xl'
            : 'bg-[#090A0C] border-b border-[#202329]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group flex items-center">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009C3B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-200 hover:text-white border border-[#202329] hover:border-zinc-500 rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#009C3B]" />
              <span>+1 (470) 766-8598</span>
            </a>

            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFDF00] to-[#e6c800] hover:from-[#ffe633] hover:to-[#ffd700] shadow-md hover:shadow-[#FFDF00]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Quero encontrar oportunidades</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="sm:hidden inline-flex items-center px-2.5 py-1.5 text-xs font-bold text-black bg-[#FFDF00] rounded-md"
            >
              Oportunidades
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#15171B] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#15171B] border-b border-[#202329] px-4 pt-4 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-[#202329] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-[#202329] flex flex-col gap-2.5">
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="w-full text-center py-3 px-4 font-bold text-sm uppercase tracking-wider text-black bg-[#FFDF00] hover:bg-[#ffe633] rounded-lg shadow"
                >
                  Quero encontrar oportunidades
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#009C3B] hover:bg-[#008532] rounded-lg shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp: {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
