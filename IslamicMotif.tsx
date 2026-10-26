import React from 'react';

export const IslamicStarIcon: React.FC<{ className?: string; size?: number; fill?: string; stroke?: string }> = ({
  className = "",
  size = 20,
  fill = "currentColor",
  stroke = "none"
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" fillOpacity="0.8" />
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        fillOpacity="0.8"
        transform="rotate(45 12 12)"
      />
      <circle cx="12" cy="12" r="3" fill="#123D32" />
    </svg>
  );
};

export const AyahEndMarker: React.FC<{ ayahNumber: number }> = ({ ayahNumber }) => {
  return (
    <span className="inline-flex items-center justify-center mx-1.5 px-2 py-0.5 rounded-full border border-[#C7A45D]/70 bg-[#FFFDF8] dark:bg-[#1D2D25] text-[#92713B] dark:text-[#E5D2A1] text-xs font-serif font-bold shadow-xs select-none">
      <span className="text-[10px] text-[#C7A45D] mr-0.5">۝</span>
      <span>{ayahNumber}</span>
    </span>
  );
};

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 my-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C7A45D]/40 to-[#C7A45D]/10" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] rotate-45" />
      <div className="w-2 h-2 rounded-full border border-[#C7A45D] bg-transparent rotate-45" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] rotate-45" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C7A45D]/40 to-[#C7A45D]/10" />
    </div>
  );
};
