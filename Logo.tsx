import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 40,
  showText = false,
  textColor = "text-[#123D32] dark:text-[#E5D2A1]"
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-[#123D32] via-[#0B2B24] to-[#123D32] p-2 shadow-sm border border-[#C7A45D]/40"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Islamic Arch outline */}
          <path
            d="M 20 82 L 20 46 C 20 28, 50 12, 50 12 C 50 12, 80 28, 80 46 L 80 82"
            stroke="#C7A45D"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized Open Book / Pages */}
          <path
            d="M 50 78 C 36 68, 22 72, 16 76 L 16 50 C 22 46, 36 42, 50 52 C 64 42, 78 46, 84 50 L 84 76 C 78 72, 64 68, 50 78 Z"
            fill="#EDF3EC"
            fillOpacity="0.95"
            stroke="#C7A45D"
            strokeWidth="2.5"
          />
          {/* Book Spine */}
          <line x1="50" y1="52" x2="50" y2="78" stroke="#123D32" strokeWidth="2.5" strokeLinecap="round" />

          {/* 8-pointed Islamic Star detail atop the arch */}
          <g transform="translate(50, 24) scale(0.65)">
            {/* Square 1 */}
            <rect x="-10" y="-10" width="20" height="20" fill="#E5D2A1" stroke="#92713B" strokeWidth="1.5" rx="1.5" />
            {/* Square 2 rotated 45 deg */}
            <rect
              x="-10"
              y="-10"
              width="20"
              height="20"
              fill="#E5D2A1"
              stroke="#92713B"
              strokeWidth="1.5"
              rx="1.5"
              transform="rotate(45)"
            />
            {/* Center dot */}
            <circle cx="0" cy="0" r="2.5" fill="#123D32" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif-title font-bold tracking-wider text-base leading-tight ${textColor}`}>
            İRFAN MECLİSİ
          </span>
          <span className="text-[10px] tracking-wide text-[#74776F] dark:text-[#B9C3B8] font-medium leading-none mt-0.5">
            İlim · Hikmet · Gönül
          </span>
        </div>
      )}
    </div>
  );
};
