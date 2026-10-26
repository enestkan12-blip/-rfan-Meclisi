import React from 'react';
import { useApp } from '../../context/AppContext';
import { ActiveTab } from '../../types';
import { Home, BookOpen, GraduationCap, Compass, User } from 'lucide-react';

interface NavItem {
  id: ActiveTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Ana Sayfa', icon: Home },
  { id: 'quran', label: "Kur'an", icon: BookOpen },
  { id: 'academy', label: 'İlim', icon: GraduationCap },
  { id: 'discover', label: 'Keşfet', icon: Compass },
  { id: 'profile', label: 'Profil', icon: User }
];

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 bg-[#FFFDF8]/95 dark:bg-[#17251F]/95 backdrop-blur-md border-t border-[#E5E0D5] dark:border-[#334238] transition-colors duration-200"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 6px)' }}
      aria-label="Ana Navigasyon"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 px-1 pt-1.5 pb-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-150 active:scale-95 ${
                isActive
                  ? 'text-[#123D32] dark:text-[#E5D2A1] font-semibold'
                  : 'text-[#74776F] dark:text-[#B9C3B8] hover:text-[#26342D] dark:hover:text-[#F5F0E5]'
              }`}
            >
              {/* Active Tab indicator pill/dot */}
              {isActive && (
                <span className="absolute -top-1 w-6 h-1 rounded-full bg-gradient-to-r from-[#123D32] to-[#C7A45D] dark:from-[#D6B76F] dark:to-[#E5D2A1]" />
              )}

              <div className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-110' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
              </div>
              <span className="text-[11px] leading-tight tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
