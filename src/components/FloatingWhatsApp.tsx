import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#15171B] border border-[#202329] text-white py-2 px-3.5 rounded-xl shadow-2xl animate-fadeIn text-xs">
          <div className="w-2 h-2 rounded-full bg-[#009C3B] animate-pulse"></div>
          <span>Falar no WhatsApp: <strong>{CONTACT_INFO.phone}</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-200 ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 rounded-full bg-[#009C3B] text-white shadow-xl hover:bg-[#008532] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Conversar no WhatsApp da Sales For Brazilians"
      >
        {/* Pulsing rings */}
        <span className="absolute -inset-1 rounded-full bg-[#009C3B]/40 animate-ping opacity-75"></span>
        <MessageCircle className="w-6 h-6 relative z-10" />
      </a>
    </div>
  );
};
