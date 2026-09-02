import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark-only' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size = 'md' }) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 38;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon combining Brazil (Green/Gold/Blue) and USA (Blue/Red/White) & Leque/Converging Paths */}
      <div className="relative flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Subtle Outer Ring / Shield Frame */}
          <rect
            x="3"
            y="3"
            width="94"
            height="94"
            rx="18"
            fill="#15171B"
            stroke="#202329"
            strokeWidth="2"
          />

          {/* Left Wing - Brazil Synergy (Green & Yellow Diamond Facet) */}
          <path
            d="M 22 50 L 46 22 L 46 78 Z"
            fill="#009C3B"
            className="transition-all"
          />
          <path
            d="M 33 50 L 46 36 L 46 64 Z"
            fill="#FFDF00"
          />
          {/* Brazil Blue Center Core */}
          <circle cx="41" cy="50" r="4.5" fill="#002776" />

          {/* Right Wing - USA Synergy (American Blue Shield & Red/White Accents) */}
          <path
            d="M 78 50 L 54 22 L 54 78 Z"
            fill="#3C3B6E"
          />
          {/* USA Stripes within the right chevron */}
          <path
            d="M 54 34 L 70 50 L 54 54 Z"
            fill="#B22234"
          />
          <path
            d="M 54 60 L 64 50 L 54 64 Z"
            fill="#FFFFFF"
          />
          {/* Small Star Accent in US quadrant */}
          <path
            d="M 59 42 L 60 45 L 63 45 L 61 47 L 62 50 L 59 48 L 56 50 L 57 47 L 55 45 L 58 45 Z"
            fill="#FFFFFF"
            transform="scale(0.8) translate(14, 8)"
          />

          {/* Converging "Multiple Paths / Leque" dynamic central ray */}
          <path
            d="M 50 14 L 52 86"
            stroke="#E9ECF0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 3"
            opacity="0.8"
          />
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-extrabold tracking-tight text-white leading-none text-base sm:text-lg">
              SALES
            </span>
            <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#009C3B]/20 text-[#009C3B] border border-[#009C3B]/30 tracking-wider">
              FOR
            </span>
            <span className="font-heading font-extrabold tracking-tight text-[#FFDF00] leading-none text-base sm:text-lg">
              BRAZILIANS
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase mt-1 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#009C3B]"></span>
            Captação Multicanal nos EUA
          </span>
        </div>
      )}
    </div>
  );
};
