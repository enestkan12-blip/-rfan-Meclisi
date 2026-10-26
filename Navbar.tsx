import React from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../common/Logo';
import { Search, Sparkles, Moon, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    setIsSearchModalOpen,
    setIsDhikrModalOpen,
    appSettings,
    updateSettings,
    dhikrs,
    activeDhikrIndex
  } = useApp();

  const toggleTheme = () => {
    updateSettings({
      theme: appSettings.theme === 'dark' ? 'light' : 'dark'
    });
  };

  const currentDhikr = dhikrs[activeDhikrIndex] || dhikrs[0];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#F8F5ED]/95 dark:bg-[#101B17]/95 backdrop-blur-md border-b border-[#E5E0D5] dark:border-[#334238] transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-3.5 py-2.5 flex items-center justify-between">
        {/* Left: Brand & Slogan */}
        <div className="flex items-center gap-2.5">
          <Logo size={36} />
          <div className="flex flex-col text-left">
            <h1 className="font-serif-title font-bold text-base tracking-wide text-[#123D32] dark:text-[#F5F0E5] leading-tight">
              İRFAN MECLİSİ
            </h1>
            <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] font-medium leading-none mt-0.5 hidden xs:block">
              İlimle derinleş, hikmetle güzelleş.
            </p>
          </div>
        </div>

        {/* Right Action Icons: Zikirmatik quick count, Search, Theme toggle */}
        <div className="flex items-center gap-1.5">
          {/* Quick Dhikr Button with live count */}
          <button
            onClick={() => setIsDhikrModalOpen(true)}
            title="Zikirmatik Aç"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#EDF3EC] dark:bg-[#1D2D25] border border-[#C7A45D]/40 text-[#123D32] dark:text-[#E5D2A1] text-xs font-semibold shadow-xs active:scale-95 transition"
            aria-label="Zikirmatik Aç"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
            <span className="tabular-nums font-mono">{currentDhikr.currentCount}</span>
          </button>

          {/* Smart Search Button */}
          <button
            onClick={() => setIsSearchModalOpen(true)}
            title="Platformda Ara"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#26342D] dark:text-[#F5F0E5] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] active:scale-95 transition"
            aria-label="Arama"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={appSettings.theme === 'dark' ? "Açık Temaya Geç" : "Koyu Temaya Geç"}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] active:scale-95 transition"
            aria-label="Tema Değiştir"
          >
            {appSettings.theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#D6B76F]" />
            ) : (
              <Moon className="w-4 h-4 text-[#123D32]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
