import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DAILY_AYAHS } from '../data/quranData';
import { DAILY_WISDOM } from '../data/hikmetData';
import { ACADEMY_CATEGORIES, ACADEMY_LESSONS } from '../data/academyData';
import { GoldDivider, IslamicStarIcon } from '../components/common/IslamicMotif';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Bookmark,
  Share2,
  FileText,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw
} from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const {
    setActiveTab,
    jumpToQuranSurah,
    setSelectedAcademyLessonId,
    setIsDhikrModalOpen,
    dhikrs,
    activeDhikrIndex,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    openNoteModalFor,
    userStats
  } = useApp();

  const [activeAyahIdx, setActiveAyahIdx] = useState(0);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  const currentAyah = DAILY_AYAHS[activeAyahIdx] || DAILY_AYAHS[0];
  const currentDhikr = dhikrs[activeDhikrIndex] || dhikrs[0];

  const handleCopyShare = (text: string, title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${title}\n\n"${text}"\n\n— İrfan Meclisi`);
      setCopiedNotice("Metin panoya kopyalandı!");
      setTimeout(() => setCopiedNotice(null), 2000);
    }
  };

  const handleAyahFavToggle = () => {
    if (isFavorite(currentAyah.id)) {
      removeFavorite(currentAyah.id);
    } else {
      addFavorite({
        type: 'ayah',
        targetId: currentAyah.id,
        title: `${currentAyah.surahNumber}. Sure, ${currentAyah.ayahNumber}. Ayet`,
        arabic: currentAyah.arabic,
        preview: currentAyah.translation,
        sourceInfo: currentAyah.footnote || "Kur'an-ı Kerim"
      });
    }
  };

  const handleWisdomFavToggle = () => {
    if (isFavorite(DAILY_WISDOM.id)) {
      removeFavorite(DAILY_WISDOM.id);
    } else {
      addFavorite({
        type: 'wisdom',
        targetId: DAILY_WISDOM.id,
        title: `${DAILY_WISDOM.author} - Hikmet`,
        preview: DAILY_WISDOM.quote,
        sourceInfo: DAILY_WISDOM.source
      });
    }
  };

  // Find active continue lesson
  const activeLesson = ACADEMY_LESSONS.find(l => !userStats.completedLessonIds.includes(l.id)) || ACADEMY_LESSONS[0];

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 space-y-5 pb-24">
      {/* Toast Notification */}
      {copiedNotice && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-lg animate-in fade-in duration-200">
          {copiedNotice}
        </div>
      )}

      {/* 1. Karşılama Kartı (Hero Card - BÖLÜM 6) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123D32] via-[#0B2B24] to-[#235747] text-white p-6 shadow-md border border-[#C7A45D]/40">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <IslamicStarIcon size={18} fill="#E5D2A1" />
            <span className="text-xs uppercase tracking-widest text-[#E5D2A1] font-semibold">
              Günün Başlangıcı
            </span>
          </div>

          <div>
            <h2 className="font-serif-title font-bold text-xl sm:text-2xl text-[#FFFDF8] leading-snug">
              İlim yolculuğuna hoş geldin.
            </h2>
            <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed mt-1.5 max-w-lg">
              Bugün bir ayet öğren, bir hikmet keşfet, gönlüne yeni bir güzellik kat.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab('academy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C7A45D] to-[#E5D2A1] text-[#0B2B24] font-serif-title font-bold text-xs shadow-sm hover:opacity-95 active:scale-95 transition"
            >
              <span>İlim Yolculuğuna Başla</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                jumpToQuranSurah(userStats.lastReadSurahNumber || 1, userStats.lastReadAyahNumber || 1);
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FFFDF8] text-xs font-semibold border border-white/20 active:scale-95 transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#E5D2A1]" />
              <span>Kaldığım Yer: {userStats.lastReadSurahName || "Fâtiha"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Günün Ayeti Kartı */}
      <div className="rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] p-5 sm:p-6 border border-[#E5E0D5] dark:border-[#334238] shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D5] dark:border-[#334238]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C7A45D]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1] tracking-wide">
              GÜNÜN AYETİ
            </h3>
          </div>

          {/* Cycle daily ayahs */}
          <button
            onClick={() => setActiveAyahIdx((prev) => (prev + 1) % DAILY_AYAHS.length)}
            className="flex items-center gap-1 text-[11px] font-medium text-[#74776F] dark:text-[#B9C3B8] hover:text-[#123D32] dark:hover:text-[#E5D2A1]"
            title="Başka Ayet Getir"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Yenile</span>
          </button>
        </div>

        {/* Arabic text with proper RTL & styling */}
        <div className="py-4">
          <p className="font-arabic text-xl sm:text-2xl text-[#123D32] dark:text-[#F5F0E5] leading-[2.2] tracking-wide" dir="rtl">
            {currentAyah.arabic}
          </p>
        </div>

        {/* Turkish Translation & Commentary */}
        <div className="space-y-2">
          <p className="text-sm text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
            "{currentAyah.translation}"
          </p>
          {currentAyah.commentarySummary && (
            <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] leading-relaxed bg-[#F8F5ED] dark:bg-[#101B17] p-2.5 rounded-xl border border-[#E5E0D5]/70 dark:border-[#334238]">
              <span className="font-semibold text-[#92713B] dark:text-[#E5D2A1]">Tefekkür: </span>
              {currentAyah.commentarySummary}
            </p>
          )}
          <p className="text-[11px] text-[#92713B] dark:text-[#D6B76F] font-medium pt-1">
            {currentAyah.footnote}
          </p>
        </div>

        {/* Action Buttons: Oku, Kaydet, Paylaş, Not Al */}
        <div className="mt-4 pt-3 border-t border-[#E5E0D5] dark:border-[#334238] flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => jumpToQuranSurah(currentAyah.surahNumber, currentAyah.ayahNumber)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] text-[#123D32] dark:text-[#E5D2A1] text-xs font-semibold hover:bg-[#DCE9DF] dark:hover:bg-[#17251F] active:scale-95 transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C7A45D]" />
            <span>Surede Oku</span>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={handleAyahFavToggle}
              className={`p-2 rounded-xl transition ${
                isFavorite(currentAyah.id)
                  ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                  : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
              }`}
              title="Kaydet / Favori"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite(currentAyah.id) ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => openNoteModalFor({
                title: `${currentAyah.surahNumber}. Sure ${currentAyah.ayahNumber}. Ayet Notu`,
                tag: 'Ayet',
                referenceTitle: currentAyah.footnote || "Kur'an Meali"
              })}
              className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
              title="Not Ekle"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleCopyShare(currentAyah.translation, `${currentAyah.footnote || "Günün Ayeti"}`)}
              className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
              title="Paylaş / Kopyala"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Öğrenmeye Devam Et Kartı */}
      <div className="rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] p-5 border border-[#E5E0D5] dark:border-[#334238] shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#123D32] dark:text-[#E5D2A1]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1] tracking-wide">
              ÖĞRENMEYE DEVAM ET
            </h3>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EDF3EC] dark:bg-[#101B17] text-[#123D32] dark:text-[#E5D2A1]">
            {activeLesson.level}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <span className="text-[11px] text-[#92713B] dark:text-[#D6B76F] font-medium block">
              {activeLesson.categoryName}
            </span>
            <h4 className="font-serif-title font-bold text-sm sm:text-base text-[#26342D] dark:text-[#F5F0E5] mt-0.5">
              {activeLesson.title}
            </h4>
            <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] mt-1 line-clamp-2">
              {activeLesson.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between">
          <span className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
            Tahmini Süre: ~{activeLesson.estimatedMinutes} dk
          </span>

          <button
            onClick={() => {
              setActiveTab('academy');
              setSelectedAcademyLessonId(activeLesson.id);
            }}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xs active:scale-95 transition"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Derse Başla</span>
          </button>
        </div>
      </div>

      {/* 4. Günün Hikmeti Kartı */}
      <div className="rounded-3xl bg-gradient-to-br from-[#FFFDF8] to-[#F8F5ED] dark:from-[#1D2D25] dark:to-[#17251F] p-5 border border-[#C7A45D]/40 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5] dark:border-[#334238]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C7A45D]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1] tracking-wide">
              GÜNÜN HİKMETİ
            </h3>
          </div>
          <span className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">
            {DAILY_WISDOM.theme}
          </span>
        </div>

        <div className="py-3">
          <blockquote className="font-serif-title italic text-sm sm:text-base text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
            "{DAILY_WISDOM.quote}"
          </blockquote>
          <p className="text-xs font-semibold text-[#92713B] dark:text-[#E5D2A1] mt-2">
            — {DAILY_WISDOM.author}
          </p>
          <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">
            Kaynak: {DAILY_WISDOM.source}
          </p>
        </div>

        {/* Practical reflection advice */}
        <div className="p-3 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/30 space-y-1">
          <p className="text-xs font-semibold text-[#123D32] dark:text-[#E5D2A1] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A45D]" />
            <span>Günün Tefekkürü ve Ameli</span>
          </p>
          <p className="text-xs text-[#26342D] dark:text-[#F5F0E5]">
            {DAILY_WISDOM.practicalAdvice}
          </p>
        </div>

        <div className="mt-3 pt-2 flex items-center justify-end gap-1">
          <button
            onClick={handleWisdomFavToggle}
            className={`p-2 rounded-xl transition ${
              isFavorite(DAILY_WISDOM.id)
                ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
            }`}
            title="Hikmeti Kaydet"
          >
            <Bookmark className={`w-4 h-4 ${isFavorite(DAILY_WISDOM.id) ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => handleCopyShare(DAILY_WISDOM.quote, `${DAILY_WISDOM.author} — ${DAILY_WISDOM.source}`)}
            className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
            title="Paylaş"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5. Zikir Sayacına Hızlı Erişim Teaser Kartı */}
      <div className="rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] p-4 sm:p-5 border border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#C7A45D]" />
          </div>
          <div>
            <h4 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1]">
              Zikirmatik: {currentDhikr.title}
            </h4>
            <p className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
              Bugünkü Çekilen: <span className="font-mono font-bold text-[#123D32] dark:text-[#F5F0E5]">{currentDhikr.currentCount}</span> / {currentDhikr.targetCount}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsDhikrModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xs active:scale-95 transition whitespace-nowrap"
        >
          Sayacı Aç
        </button>
      </div>

      {/* 6. İlim Akademisi Temel Kategorileri Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#123D32] dark:bg-[#C7A45D]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1] tracking-wide">
              İLİM KÜTÜPHANESİ KATEGORİLERİ
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('academy')}
            className="text-xs font-medium text-[#92713B] dark:text-[#E5D2A1] flex items-center gap-1 hover:underline"
          >
            <span>Tümü</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {ACADEMY_CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab('academy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-2xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] text-left hover:border-[#C7A45D] transition active:scale-98 flex flex-col justify-between min-h-[90px]"
            >
              <div>
                <h4 className="font-serif-title font-bold text-xs text-[#123D32] dark:text-[#E5D2A1] line-clamp-1">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] line-clamp-2 mt-1">
                  {cat.description}
                </p>
              </div>
              <span className="text-[10px] text-[#92713B] dark:text-[#D6B76F] font-semibold mt-2">
                {cat.lessonCount} Ders Hazır
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 7. Son Kaydedilenler / Favoriler Preview (BÖLÜM 6) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#C7A45D]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1] tracking-wide">
              SON KAYDEDİLENLER
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('profile')}
            className="text-xs font-medium text-[#92713B] dark:text-[#E5D2A1] hover:underline"
          >
            Tümünü Gör
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="p-6 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-dashed border-[#E5E0D5] dark:border-[#334238] text-center">
            <Bookmark className="w-8 h-8 mx-auto text-[#C7A45D]/40 mb-1.5" />
            <p className="font-serif-title text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5]">
              Henüz favori içeriğin yok.
            </p>
            <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] mt-0.5">
              Beğendiğin ayetleri, dersleri ve hikmetleri burada saklayabilirsin.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {favorites.slice(0, 2).map(fav => (
              <div
                key={fav.id}
                className="p-3.5 rounded-2xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                      {fav.type}
                    </span>
                    <h5 className="font-semibold text-xs text-[#26342D] dark:text-[#F5F0E5] line-clamp-1">
                      {fav.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] line-clamp-1 mt-1">
                    "{fav.preview}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <GoldDivider />
    </div>
  );
};
