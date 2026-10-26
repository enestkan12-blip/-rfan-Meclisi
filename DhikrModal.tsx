import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, RotateCcw, Plus, Minus, Volume2, VolumeX, List, Check } from 'lucide-react';

export const DhikrModal: React.FC = () => {
  const {
    isDhikrModalOpen,
    setIsDhikrModalOpen,
    dhikrs,
    activeDhikrIndex,
    setActiveDhikrIndex,
    incrementDhikr,
    decrementDhikr,
    resetDhikr,
    setDhikrTarget,
    addCustomDhikr,
    appSettings,
    updateSettings
  } = useApp();

  const [showDhikrList, setShowDhikrList] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customArabic, setCustomArabic] = useState('');
  const [customTarget, setCustomTarget] = useState(33);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isDhikrModalOpen) return null;

  const currentDhikr = dhikrs[activeDhikrIndex] || dhikrs[0];
  const progressPercent = Math.min(100, Math.round((currentDhikr.currentCount / currentDhikr.targetCount) * 100));

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;
    addCustomDhikr(customTitle.trim(), customArabic.trim(), customTitle.trim(), customTitle.trim(), customTarget);
    setCustomTitle('');
    setCustomArabic('');
    setShowCustomForm(false);
    setShowDhikrList(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#FFFDF8] dark:bg-[#17251F] border border-[#C7A45D]/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between bg-[#F8F5ED] dark:bg-[#101B17]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C7A45D]" />
            <span className="font-serif-title font-bold text-sm tracking-wide text-[#123D32] dark:text-[#E5D2A1]">
              GELİŞMİŞ ZİKİRMATİK
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => updateSettings({ hapticFeedback: !appSettings.hapticFeedback })}
              className={`p-1.5 rounded-full transition ${appSettings.hapticFeedback ? 'text-[#123D32] dark:text-[#E5D2A1]' : 'text-stone-400'}`}
              title={appSettings.hapticFeedback ? 'Titreşim Açık' : 'Titreşim Kapalı'}
            >
              {appSettings.hapticFeedback ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setShowDhikrList(!showDhikrList)}
              className="p-1.5 rounded-full text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
              title="Zikir Listesi"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsDhikrModalOpen(false)}
              className="p-1.5 rounded-full text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {showDhikrList ? (
          <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-[#74776F] dark:text-[#B9C3B8] uppercase tracking-wider">
                Kayıtlı Zikirler ({dhikrs.length})
              </h3>
              <button
                onClick={() => setShowCustomForm(!showCustomForm)}
                className="text-xs font-medium text-[#123D32] dark:text-[#D6B76F] flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                Özel Zikir Ekle
              </button>
            </div>

            {showCustomForm && (
              <form onSubmit={handleAddCustom} className="p-3 rounded-2xl bg-[#EDF3EC] dark:bg-[#1D2D25] border border-[#C7A45D]/40 space-y-2.5 mb-3">
                <input
                  type="text"
                  placeholder="Zikir Başlığı (örn: Ya Şâfî)"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] text-[#26342D] dark:text-[#F5F0E5] focus:outline-none focus:ring-1 focus:ring-[#C7A45D]"
                  required
                />
                <input
                  type="text"
                  placeholder="Arapça Metin (İsteğe bağlı)"
                  value={customArabic}
                  onChange={(e) => setCustomArabic(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] text-[#26342D] dark:text-[#F5F0E5] font-arabic focus:outline-none focus:ring-1 focus:ring-[#C7A45D]"
                />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#74776F] dark:text-[#B9C3B8]">Hedef Sayı:</span>
                  <div className="flex gap-1.5">
                    {[33, 99, 100, 500].map(cnt => (
                      <button
                        type="button"
                        key={cnt}
                        onClick={() => setCustomTarget(cnt)}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${customTarget === cnt ? 'bg-[#123D32] text-white border-[#123D32]' : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238]'}`}
                      >
                        {cnt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowCustomForm(false)}
                    className="px-3 py-1 text-xs text-[#74776F] hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs bg-[#123D32] text-[#E5D2A1] font-semibold rounded-lg active:scale-95 transition"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            )}

            {dhikrs.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveDhikrIndex(idx);
                  setShowDhikrList(false);
                }}
                className={`w-full text-left p-3 rounded-2xl border transition flex items-center justify-between ${
                  activeDhikrIndex === idx
                    ? 'border-[#C7A45D] bg-[#EDF3EC] dark:bg-[#1D2D25]'
                    : 'border-[#E5E0D5] dark:border-[#334238] bg-white dark:bg-[#101B17]/40 hover:bg-[#F8F5ED] dark:hover:bg-[#1D2D25]/50'
                }`}
              >
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-[#123D32] dark:text-[#F5F0E5]">{item.title}</span>
                    {activeDhikrIndex === idx && <Check className="w-3.5 h-3.5 text-[#C7A45D]" />}
                  </div>
                  <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] line-clamp-1 mt-0.5">{item.meaning}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#92713B] dark:text-[#E5D2A1]">
                    {item.currentCount}/{item.targetCount}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6 flex flex-col items-center justify-between flex-1">
            {/* Dhikr info */}
            <div className="text-center w-full mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#1D2D25] px-3 py-1 rounded-full border border-[#C7A45D]/30 inline-block">
                {currentDhikr.title}
              </span>
              <p className="font-arabic text-xl text-[#123D32] dark:text-[#F5F0E5] mt-2 mb-1 px-2 leading-relaxed" dir="rtl">
                {currentDhikr.arabic}
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] italic">
                "{currentDhikr.transcription}"
              </p>
            </div>

            {/* Central Round Dhikr Counter Button */}
            <div className="relative my-3 flex items-center justify-center">
              {/* Circular SVG Progress Ring */}
              <svg className="w-56 h-56 transform -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r="92"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-[#E5E0D5] dark:text-[#334238]"
                />
                <circle
                  cx="112"
                  cy="112"
                  r="92"
                  stroke="#C7A45D"
                  strokeWidth="8"
                  strokeDasharray={578}
                  strokeDashoffset={578 - (578 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-150"
                />
              </svg>

              {/* Big Touch Target Button (min 160px for effortless Android tapping) */}
              <button
                onClick={incrementDhikr}
                className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#123D32] via-[#0B2B24] to-[#235747] text-white shadow-xl flex flex-col items-center justify-center active:scale-95 select-none transition-transform duration-100 border-2 border-[#C7A45D]/50"
                aria-label="Zikri Say"
              >
                <span className="font-mono font-bold text-4xl text-[#E5D2A1] tracking-tight">
                  {currentDhikr.currentCount}
                </span>
                <span className="text-[11px] text-white/70 uppercase tracking-widest mt-0.5">
                  Hedef: {currentDhikr.targetCount}
                </span>
                <span className="text-[10px] text-[#C7A45D] font-medium mt-1">
                  %{progressPercent}
                </span>
              </button>
            </div>

            {/* Target Selector Pills */}
            <div className="flex items-center justify-center gap-2 mb-4 w-full">
              <span className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">Hedef:</span>
              {[33, 99, 100, 500].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setDhikrTarget(cnt)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition ${
                    currentDhikr.targetCount === cnt
                      ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                      : 'bg-[#EDF3EC] dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8]'
                  }`}
                >
                  {cnt}
                </button>
              ))}
            </div>

            {/* Secondary Controls: Minus 1, Reset, Total */}
            <div className="flex items-center justify-between w-full px-2 pt-2 border-t border-[#E5E0D5] dark:border-[#334238]">
              <button
                onClick={decrementDhikr}
                disabled={currentDhikr.currentCount <= 0}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#EDF3EC] dark:bg-[#1D2D25] text-[#26342D] dark:text-[#F5F0E5] text-xs font-medium disabled:opacity-40 active:scale-95 transition"
                title="1 Azalt"
              >
                <Minus className="w-3.5 h-3.5" />
                -1
              </button>

              <div className="text-center">
                <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] block">Toplam Çekilen</span>
                <span className="text-xs font-mono font-bold text-[#123D32] dark:text-[#E5D2A1]">
                  {currentDhikr.totalCount}
                </span>
              </div>

              {showResetConfirm ? (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      resetDhikr();
                      setShowResetConfirm(false);
                    }}
                    className="px-2 py-1 bg-red-600 text-white text-[11px] font-bold rounded-lg"
                  >
                    Sıfırla
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-2 py-1 bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-[11px] rounded-lg"
                  >
                    İptal
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#EDF3EC] dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8] hover:text-red-600 text-xs font-medium active:scale-95 transition"
                  title="Sayacı Sıfırla"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Sıfırla
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
