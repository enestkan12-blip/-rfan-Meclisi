import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SURAHS_INDEX, getSurahData } from '../data/quranData';
import { AyahEndMarker } from '../components/common/IslamicMotif';
import {
  Search,
  BookOpen,
  Bookmark,
  Share2,
  FileText,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  ArrowLeft,
  ChevronRight,
  Info
} from 'lucide-react';

export const QuranScreen: React.FC = () => {
  const {
    activeQuranSurahNumber,
    setActiveQuranSurahNumber,
    isFavorite,
    addFavorite,
    removeFavorite,
    openNoteModalFor,
    setLastReadAyah,
    appSettings,
    updateSettings,
    userStats
  } = useApp();

  const [viewMode, setViewMode] = useState<'reader' | 'list'>('reader');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [showTefsirDetail, setShowTefsirDetail] = useState<string | null>(null);
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);

  // Audio Player state
  const [playingAyahId, setPlayingAyahId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSurah = getSurahData(activeQuranSurahNumber);

  // Filter surahs
  const filteredSurahs = SURAHS_INDEX.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.nameTr.toLowerCase().includes(q) ||
      s.meaningTr.toLowerCase().includes(q) ||
      s.number.toString() === q
    );
  });

  const handleSelectSurah = (surahNumber: number) => {
    setActiveQuranSurahNumber(surahNumber);
    setViewMode('reader');
    setPlayingAyahId(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    // Update last read position
    const s = SURAHS_INDEX.find(x => x.number === surahNumber);
    setLastReadAyah(surahNumber, 1, s?.nameTr || `Sure ${surahNumber}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Audio playback handler
  const playAyahAudio = (ayahId: string, url?: string) => {
    if (!url) return;

    if (playingAyahId === ayahId && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(e => console.error("Audio play error", e));
        setPlayingAyahId(ayahId);
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleCopyAyah = (ayahNumber: number, arabic: string, translation: string) => {
    const text = `[${currentSurah.nameTr} Suresi, ${ayahNumber}. Ayet]\n\n${arabic}\n\n"${translation}"\n\n— Kaynak: Diyanet İşleri Meali`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedMsg("Ayet ve meali panoya kopyalandı!");
      setTimeout(() => setCopiedMsg(null), 2000);
    }
  };

  const getFontSizeClass = () => {
    switch (appSettings.fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      case 'xlarge': return 'text-xl';
      default: return 'text-base';
    }
  };

  const getArabicSizeClass = () => {
    switch (appSettings.fontSize) {
      case 'small': return 'text-xl';
      case 'large': return 'text-3xl';
      case 'xlarge': return 'text-4xl';
      default: return 'text-2xl sm:text-3xl';
    }
  };

  // Quran book reading themes
  const getThemeContainerClass = () => {
    if (appSettings.quranTheme === 'dark') {
      return 'bg-[#101B17] text-[#F5F0E5]';
    }
    if (appSettings.quranTheme === 'white') {
      return 'bg-white text-[#26342D]';
    }
    // Cream Book Theme (default)
    return 'bg-[#F8F5ED] text-[#26342D]';
  };

  const getCardBgClass = () => {
    if (appSettings.quranTheme === 'dark') {
      return 'bg-[#17251F] border-[#334238]';
    }
    if (appSettings.quranTheme === 'white') {
      return 'bg-[#FDFDFD] border-[#EAE6DE]';
    }
    return 'bg-[#FFFDF8] border-[#E5E0D5]';
  };

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-200 ${getThemeContainerClass()}`}>
      <audio
        ref={audioRef}
        onEnded={() => {
          setIsPlaying(false);
          setPlayingAyahId(null);
        }}
      />

      {/* Copy Notification Toast */}
      {copiedMsg && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xl animate-in fade-in duration-200">
          {copiedMsg}
        </div>
      )}

      {/* Reader Mode Top Bar Controls */}
      <div className="sticky top-12 z-20 backdrop-blur-md border-b border-[#E5E0D5]/80 dark:border-[#334238]/80 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {viewMode === 'reader' ? (
            <button
              onClick={() => setViewMode('list')}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-[#EDF3EC] dark:bg-[#1D2D25] text-[#123D32] dark:text-[#E5D2A1] hover:bg-[#DCE9DF] active:scale-95 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Sureler</span>
            </button>
          ) : (
            <span className="font-serif-title font-bold text-sm tracking-wide text-[#123D32] dark:text-[#E5D2A1]">
              SURE LİSTESİ (114)
            </span>
          )}

          {viewMode === 'reader' && (
            <div className="flex items-center gap-1.5 ml-1">
              <span className="font-serif-title font-bold text-sm">
                {currentSurah.number}. {currentSurah.nameTr}
              </span>
              <span className="text-xs font-arabic text-[#92713B] dark:text-[#D6B76F] hidden xs:inline" dir="rtl">
                ({currentSurah.nameAr})
              </span>
            </div>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          {viewMode === 'reader' && (
            <button
              onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
              className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
              title="Okuma Ayarları"
            >
              <Sliders className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'reader' : 'list')}
            className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
            title={viewMode === 'list' ? "Okuma Ekranı" : "Sure Listesi"}
          >
            <BookOpen className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reader Settings Drawer */}
      {showSettingsDrawer && viewMode === 'reader' && (
        <div className="max-w-2xl mx-auto p-4 border-b border-[#E5E0D5] dark:border-[#334238] bg-[#F0EBDD] dark:bg-[#17251F] text-xs space-y-3 animate-in slide-in-from-top duration-150">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Okuma Teması:</span>
            <div className="flex gap-1.5">
              {[
                { id: 'cream', label: 'Krem Kitap' },
                { id: 'white', label: 'Beyaz' },
                { id: 'dark', label: 'Gece' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => updateSettings({ quranTheme: t.id as any })}
                  className={`px-3 py-1 rounded-lg font-medium border ${
                    appSettings.quranTheme === t.id
                      ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                      : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Yazı Boyutu:</span>
            <div className="flex gap-1.5">
              {[
                { id: 'small', label: 'A-' },
                { id: 'medium', label: 'Standart' },
                { id: 'large', label: 'A+' },
                { id: 'xlarge', label: 'A++' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => updateSettings({ fontSize: s.id as any })}
                  className={`px-2.5 py-1 rounded-lg font-medium border ${
                    appSettings.fontSize === s.id
                      ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                      : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Arapça Metin Görünsün:</span>
            <input
              type="checkbox"
              checked={appSettings.showArabicText}
              onChange={(e) => updateSettings({ showArabicText: e.target.checked })}
              className="accent-[#123D32] w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Main Content: Either Surah List or Digital Book Reader */}
      {viewMode === 'list' ? (
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#74776F]" />
            <input
              type="text"
              placeholder="Sure adı, numarası veya anlamı ile ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] text-xs text-[#26342D] dark:text-[#F5F0E5] focus:outline-none focus:ring-1 focus:ring-[#C7A45D]"
            />
          </div>

          {/* Quick jump to last read */}
          <div className="p-3.5 rounded-2xl bg-[#EDF3EC] dark:bg-[#17251F] border border-[#C7A45D]/40 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#92713B] dark:text-[#E5D2A1]">Kaldığım Yer</span>
              <p className="font-serif-title font-bold text-xs text-[#123D32] dark:text-[#F5F0E5]">
                {userStats.lastReadSurahNumber}. {userStats.lastReadSurahName} (Ayet: {userStats.lastReadAyahNumber})
              </p>
            </div>
            <button
              onClick={() => handleSelectSurah(userStats.lastReadSurahNumber || 1)}
              className="px-3 py-1.5 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold active:scale-95 transition"
            >
              Devam Et
            </button>
          </div>

          {/* Surahs index list */}
          <div className="space-y-2">
            {filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => handleSelectSurah(surah.number)}
                className={`w-full text-left p-3.5 rounded-2xl border transition active:scale-[0.99] flex items-center justify-between gap-3 ${
                  activeQuranSurahNumber === surah.number
                    ? 'border-[#C7A45D] bg-[#EDF3EC] dark:bg-[#1D2D25]'
                    : `${getCardBgClass()} hover:border-[#C7A45D]/50`
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 flex items-center justify-center font-serif-title font-bold text-xs text-[#123D32] dark:text-[#E5D2A1] shrink-0">
                    {surah.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif-title font-bold text-sm text-[#26342D] dark:text-[#F5F0E5]">
                        {surah.nameTr}
                      </h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#EDF3EC] dark:bg-[#101B17] text-[#74776F] dark:text-[#B9C3B8]">
                        {surah.revelationPlace}
                      </span>
                    </div>
                    <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] line-clamp-1 mt-0.5">
                      {surah.meaningTr} · {surah.versesCount} Ayet
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-arabic text-lg text-[#123D32] dark:text-[#E5D2A1]" dir="rtl">
                    {surah.nameAr}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#74776F]" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Digital Book Reader Mode */
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
          {/* Surah Header Banner (Manuscript style) */}
          <div className="relative overflow-hidden rounded-3xl p-5 text-center border border-[#C7A45D]/50 bg-gradient-to-b from-[#123D32] to-[#0B2B24] text-white shadow-sm">
            <div className="absolute inset-0 islamic-pattern opacity-25 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[11px] font-mono tracking-widest text-[#E5D2A1] uppercase">
                {currentSurah.number}. SURE · {currentSurah.revelationPlace} · {currentSurah.versesCount} AYET
              </span>
              <h2 className="font-serif-title font-bold text-2xl text-[#FFFDF8] mt-1">
                {currentSurah.nameTr} Suresi
              </h2>
              <p className="font-arabic text-3xl text-[#E5D2A1] mt-2 mb-1" dir="rtl">
                {currentSurah.nameAr}
              </p>
              <p className="text-xs text-stone-200/90 max-w-md mx-auto leading-relaxed mt-1">
                {currentSurah.descriptionTr}
              </p>
            </div>
          </div>

          {/* Besmele (Except for Surah 9 Tevbe) */}
          {currentSurah.number !== 9 && currentSurah.number !== 1 && (
            <div className="py-4 text-center border-b border-[#E5E0D5] dark:border-[#334238]">
              <p className="font-arabic text-2xl text-[#123D32] dark:text-[#E5D2A1]" dir="rtl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] italic mt-1">
                Rahmân ve Rahîm olan Allah'ın adıyla.
              </p>
            </div>
          )}

          {/* Ayah Cards */}
          {currentSurah.ayahs.length === 0 ? (
            <div className="p-8 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-dashed border-[#E5E0D5] dark:border-[#334238] text-center space-y-2">
              <Info className="w-8 h-8 mx-auto text-[#C7A45D]" />
              <h4 className="font-serif-title font-bold text-sm text-[#26342D] dark:text-[#F5F0E5]">
                Sure Metinleri Hazırlanıyor
              </h4>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] max-w-sm mx-auto">
                Fâtiha (1), Bakara (2), Yâsîn (36), Mülk (67), Duhâ (93), İnşirâh (94), Asr (103), İhlâs (112), Felak (113) ve Nâs (114) sureleri tam tefsir ve sesli kıraat ile hazırdır.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                {[1, 2, 36, 67, 93, 94, 103, 112, 113, 114].map(sNum => (
                  <button
                    key={sNum}
                    onClick={() => handleSelectSurah(sNum)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#EDF3EC] dark:bg-[#101B17] text-[#123D32] dark:text-[#E5D2A1] font-semibold hover:bg-[#C7A45D]/20"
                  >
                    {SURAHS_INDEX.find(s => s.number === sNum)?.nameTr}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {currentSurah.ayahs.map((ayah) => {
                const favId = `ayah_${ayah.surahNumber}_${ayah.ayahNumber}`;
                const isAyahFav = isFavorite(favId);
                const isCurrentlyPlaying = playingAyahId === ayah.id && isPlaying;

                return (
                  <article
                    key={ayah.id}
                    id={`ayah-${ayah.surahNumber}-${ayah.ayahNumber}`}
                    className={`rounded-3xl p-5 border transition-all duration-150 ${getCardBgClass()} ${
                      isCurrentlyPlaying ? 'ring-2 ring-[#C7A45D] shadow-md' : 'shadow-xs'
                    }`}
                  >
                    {/* Ayah Top Meta: Ayah number badge & audio playback button */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5]/70 dark:border-[#334238]/70">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 font-mono text-xs font-bold text-[#123D32] dark:text-[#E5D2A1] flex items-center justify-center">
                          {ayah.ayahNumber}
                        </span>
                        <span className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">
                          {currentSurah.nameTr} : {ayah.ayahNumber}
                        </span>
                      </div>

                      {ayah.audioUrl && (
                        <button
                          onClick={() => playAyahAudio(ayah.id, ayah.audioUrl)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition active:scale-95 ${
                            isCurrentlyPlaying
                              ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                              : 'bg-[#EDF3EC] dark:bg-[#101B17] text-[#123D32] dark:text-[#E5D2A1]'
                          }`}
                          title="Ayet Kıraatini Dinle"
                        >
                          {isCurrentlyPlaying ? (
                            <>
                              <Pause className="w-3.5 h-3.5" />
                              <span>Dinleniyor</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Dinle</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Arabic Text (Amiri font with authentic glyphs and end marker) */}
                    {appSettings.showArabicText && (
                      <div className="py-4">
                        <p className={`font-arabic text-[#123D32] dark:text-[#F5F0E5] leading-[2.3] ${getArabicSizeClass()}`} dir="rtl">
                          {ayah.arabic}
                          <AyahEndMarker ayahNumber={ayah.ayahNumber} />
                        </p>
                      </div>
                    )}

                    {/* Turkish Meal (Diyanet) */}
                    <div className="pt-2">
                      <p className={`text-[#26342D] dark:text-[#F5F0E5] leading-relaxed ${getFontSizeClass()}`}>
                        {ayah.translation}
                      </p>
                    </div>

                    {/* Commentary Accordion if available */}
                    {ayah.commentarySummary && (
                      <div className="mt-3">
                        {showTefsirDetail === ayah.id ? (
                          <div className="p-3.5 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 text-xs space-y-1 animate-in fade-in">
                            <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Tefsir ve Açıklama Notu:</span>
                            <p className="text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
                              {ayah.commentarySummary}
                            </p>
                            <button
                              onClick={() => setShowTefsirDetail(null)}
                              className="text-[10px] text-[#92713B] dark:text-[#D6B76F] font-bold hover:underline block pt-1"
                            >
                              Kapat
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowTefsirDetail(ayah.id)}
                            className="text-[11px] font-medium text-[#92713B] dark:text-[#E5D2A1] hover:underline flex items-center gap-1"
                          >
                            <Info className="w-3 h-3" />
                            <span>Tefsir Açıklamasını Gör</span>
                          </button>
                        )}
                      </div>
                    )}

                    {/* Ayah Bottom Action Toolbar: Favorite, Note, Share, Mark as Last Read */}
                    <div className="mt-3.5 pt-2.5 border-t border-[#E5E0D5]/70 dark:border-[#334238]/70 flex items-center justify-between">
                      <button
                        onClick={() => setLastReadAyah(currentSurah.number, ayah.ayahNumber, currentSurah.nameTr)}
                        className={`text-[11px] font-medium px-2 py-1 rounded-lg transition ${
                          userStats.lastReadSurahNumber === currentSurah.number && userStats.lastReadAyahNumber === ayah.ayahNumber
                            ? 'bg-[#123D32] text-[#E5D2A1] font-bold'
                            : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
                        }`}
                      >
                        {userStats.lastReadSurahNumber === currentSurah.number && userStats.lastReadAyahNumber === ayah.ayahNumber
                          ? "✓ Son Okunan Yer"
                          : "Burayı İşaretle"}
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            if (isAyahFav) {
                              removeFavorite(favId);
                            } else {
                              addFavorite({
                                type: 'ayah',
                                targetId: favId,
                                title: `${currentSurah.nameTr} Suresi, ${ayah.ayahNumber}. Ayet`,
                                arabic: ayah.arabic,
                                preview: ayah.translation,
                                sourceInfo: `${currentSurah.nameTr} Suresi (Diyanet Meali)`
                              });
                            }
                          }}
                          className={`p-2 rounded-xl transition ${
                            isAyahFav
                              ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                              : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
                          }`}
                          title="Favorilere Ekle"
                        >
                          <Bookmark className={`w-4 h-4 ${isAyahFav ? 'fill-current' : ''}`} />
                        </button>

                        <button
                          onClick={() => openNoteModalFor({
                            title: `${currentSurah.nameTr} ${ayah.ayahNumber}. Ayet Notu`,
                            tag: 'Ayet',
                            referenceTitle: `${currentSurah.nameTr} Suresi ${ayah.ayahNumber}. Ayet`
                          })}
                          className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
                          title="Ayet Notu Ekle"
                        >
                          <FileText className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleCopyAyah(ayah.ayahNumber, ayah.arabic, ayah.translation)}
                          className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
                          title="Kopyala / Paylaş"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Surah Navigation Footer: Previous / Next Surah */}
          <div className="pt-4 flex items-center justify-between border-t border-[#E5E0D5] dark:border-[#334238]">
            <button
              disabled={currentSurah.number <= 1}
              onClick={() => handleSelectSurah(currentSurah.number - 1)}
              className="px-3.5 py-2 rounded-xl bg-[#EDF3EC] dark:bg-[#17251F] text-xs font-semibold text-[#123D32] dark:text-[#E5D2A1] disabled:opacity-30 active:scale-95 transition"
            >
              ← Önceki Sure
            </button>

            <span className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
              {currentSurah.number} / 114
            </span>

            <button
              disabled={currentSurah.number >= 114}
              onClick={() => handleSelectSurah(currentSurah.number + 1)}
              className="px-3.5 py-2 rounded-xl bg-[#EDF3EC] dark:bg-[#17251F] text-xs font-semibold text-[#123D32] dark:text-[#E5D2A1] disabled:opacity-30 active:scale-95 transition"
            >
              Sonraki Sure →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
