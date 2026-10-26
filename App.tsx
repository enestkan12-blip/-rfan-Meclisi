import React, { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { QuranScreen } from './screens/QuranScreen';
import { AcademyScreen } from './screens/AcademyScreen';
import { DiscoverScreen } from './screens/DiscoverScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { DhikrModal } from './components/modals/DhikrModal';
import { GlobalSearchModal } from './components/modals/GlobalSearchModal';
import { NoteEditModal } from './components/modals/NoteEditModal';
import { PWAInstallBanner } from './components/common/PWAInstallBanner';


const StorageWarning: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showWarning = () => setVisible(true);
    window.addEventListener('irfan-storage-error', showWarning);
    return () => window.removeEventListener('irfan-storage-error', showWarning);
  }, []);

  if (!visible) return null;
  return (
    <div role="alert" className="fixed left-3 right-3 top-20 z-[100] mx-auto flex max-w-xl items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950 shadow-lg dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
      <AlertTriangle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p className="flex-1">Bazı değişiklikler cihazınıza kaydedilemedi. Depolama alanını kontrol edin ve önemli verilerinizin yedeğini alın.</p>
      <button type="button" onClick={() => setVisible(false)} aria-label="Uyarıyı kapat" className="rounded p-1 hover:bg-amber-200 dark:hover:bg-amber-900">
        <X size={18} aria-hidden="true" />
      </button>
    </div>
  );
};

const MainLayout: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F5ED] dark:bg-[#101B17] text-[#26342D] dark:text-[#F5F0E5] transition-colors duration-200 flex flex-col font-sans selection:bg-[#C7A45D]/30 selection:text-[#123D32]">
      {/* Top sticky brand navbar */}
      <Navbar />

      <StorageWarning />

      {/* Android PWA Install Banner */}
      <PWAInstallBanner />

      {/* Main Screen Content */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'quran' && <QuranScreen />}
        {activeTab === 'academy' && <AcademyScreen />}
        {activeTab === 'discover' && <DiscoverScreen />}
        {activeTab === 'profile' && <ProfileScreen />}
      </main>

      {/* Bottom 5-Tab Navigation Bar */}
      <BottomNav />

      {/* Universal Floating Modals */}
      <DhikrModal />
      <GlobalSearchModal />
      <NoteEditModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
