import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Smartphone, Download, X, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isAndroid, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showApkInfoModal, setShowApkInfoModal] = useState(false);

  // If already installed or dismissed, hide banner
  if (isInstalled || isDismissed) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowApkInfoModal(true);
    }
  };

  const currentAppUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      {/* Mobile-first top install prompt banner */}
      <div className="mx-4 mt-2 mb-1 p-3 rounded-2xl bg-gradient-to-r from-[#123D32] via-[#0B2B24] to-[#235747] text-white border border-[#C7A45D]/60 shadow-md flex items-center justify-between gap-3 animate-in fade-in duration-200">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#C7A45D]/50 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-[#E5D2A1]" />
          </div>
          <div className="min-w-0">
            <h4 className="font-serif-title font-bold text-xs text-[#FFFDF8] truncate">
              Android Telefonuna Yükle
            </h4>
            <p className="text-[10px] text-stone-200 truncate">
              Tarayıcısız, tam ekran uygulama olarak çalıştır
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#C7A45D] to-[#E5D2A1] text-[#0B2B24] text-xs font-serif font-bold shadow-xs active:scale-95 transition"
          >
            Yükle
          </button>
          <button
            onClick={() => setShowApkInfoModal(true)}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white"
            title="APK / Kurulum Rehberi"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-lg text-stone-400 hover:text-white"
            title="Kapat"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Android Kurulum & APK Bilgi Penceresi */}
      {showApkInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#FFFDF8] dark:bg-[#17251F] border border-[#C7A45D]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between bg-[#F8F5ED] dark:bg-[#101B17]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#C7A45D]" />
                <span className="font-serif-title font-bold text-sm tracking-wide text-[#123D32] dark:text-[#E5D2A1]">
                  ANDROİD TELEFONA UYGULAMA KURULUMU
                </span>
              </div>
              <button
                onClick={() => setShowApkInfoModal(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 overflow-y-auto no-scrollbar text-xs text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
              
              {/* Yöntem 1: Doğrudan Android WebAPK (Önerilen) */}
              <div className="p-4 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#123D32] dark:text-[#E5D2A1]">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Yöntem 1: Android WebAPK Olarak Yükleme (En Kolayı)</span>
                </div>
                <p className="text-[#74776F] dark:text-[#B9C3B8]">
                  Google Android işletim sistemi, bu platform için otomatik olarak bir <strong>WebAPK</strong> (yerel uygulama paketi) oluşturur. Dosya indirip bilinmeyen kaynaklara izin vermenize gerek kalmaz:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 pl-1 font-medium">
                  <li>Telefonunuzda Chrome veya Samsung Internet tarayıcısını açın.</li>
                  <li>Sağ üstteki <strong>üç noktaya (⋮)</strong> dokunun.</li>
                  <li>Açılan menüde <strong>"Uygulamayı Yükle"</strong> veya <strong>"Ana Ekrana Ekle"</strong> butonuna basın.</li>
                  <li>Telefonunuz uygulamayı otomatik olarak diğer uygulamalarınızın yanına kuracaktır.</li>
                </ol>
              </div>

              {/* Yöntem 2: Bağımsız .APK Dosyası Oluşturma */}
              <div className="p-4 rounded-2xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#123D32] dark:text-[#E5D2A1]">
                  <Download className="w-4 h-4 text-[#C7A45D]" />
                  <span>Yöntem 2: Bağımsız .APK Dosyası Paketleme</span>
                </div>
                <p className="text-[#74776F] dark:text-[#B9C3B8]">
                  Bu web platformunu doğrudan bağımsız bir <code>.apk</code> veya Google Play <code>.aab</code> paketine dönüştürmek isterseniz, resmi Microsoft ve Google destekli <strong>PWABuilder</strong> servisini kullanabilirsiniz:
                </p>
                <div className="p-2.5 rounded-xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] space-y-1">
                  <span className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">Uygulama Adresiniz:</span>
                  <div className="font-mono text-[11px] text-[#123D32] dark:text-[#E5D2A1] break-all select-all">
                    {currentAppUrl}
                  </div>
                </div>
                <a
                  href={`https://www.pwabuilder.com?site=${encodeURIComponent(currentAppUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#123D32] text-[#E5D2A1] font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition text-center"
                >
                  <span>PWABuilder ile Doğrudan APK İndir</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Yöntem 3: Proje Kaynak Kodları ZIP */}
              <div className="p-3 rounded-2xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between">
                <div>
                  <span className="font-semibold block text-[#123D32] dark:text-[#E5D2A1]">Tüm Kaynak Kodları:</span>
                  <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8]">Android Studio veya Capacitor ile derlemek için</span>
                </div>
                <a
                  href="/irfan-meclisi.zip"
                  download="irfan-meclisi.zip"
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1D2D25] border border-[#C7A45D] text-[#123D32] dark:text-[#E5D2A1] font-semibold text-xs active:scale-95 transition"
                >
                  ZIP İndir
                </a>
              </div>

            </div>

            {/* Footer */}
            <div className="p-3 border-t border-[#E5E0D5] dark:border-[#334238] bg-[#F8F5ED] dark:bg-[#101B17] flex justify-end">
              <button
                onClick={() => setShowApkInfoModal(false)}
                className="px-4 py-1.5 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold"
              >
                Anladım
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
