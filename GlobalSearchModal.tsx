import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SURAHS_INDEX, VERIFIED_SURAHS_DETAIL } from '../../data/quranData';
import { HADITH_LIST } from '../../data/hadithData';
import { ACADEMY_LESSONS } from '../../data/academyData';
import { ISLAMIC_CONCEPTS } from '../../data/dictionaryData';
import { WISDOM_QUOTES } from '../../data/hikmetData';
import { Search, X, BookOpen, Scroll, GraduationCap, Sparkles, BookA } from 'lucide-react';

type SearchFilter = 'all' | 'quran' | 'hadith' | 'academy' | 'dictionary' | 'wisdom';

// Helper for Turkish case normalization
function normalizeTr(str: string): string {
  return (str || '')
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setIsSearchModalOpen,
    jumpToQuranSurah,
    setSelectedAcademyLessonId,
    setActiveTab,
    setDiscoverSubTab
  } = useApp();

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<SearchFilter>('all');

  const normalizedQuery = normalizeTr(query.trim());

  const searchResults = useMemo(() => {
    if (!normalizedQuery || normalizedQuery.length < 2) return [];

    const results: Array<{
      id: string;
      category: 'quran' | 'hadith' | 'academy' | 'dictionary' | 'wisdom';
      title: string;
      arabic?: string;
      snippet: string;
      source: string;
      onClick: () => void;
    }> = [];

    // 1. Quran Surahs & Ayahs
    if (filter === 'all' || filter === 'quran') {
      SURAHS_INDEX.forEach(surah => {
        if (
          normalizeTr(surah.nameTr).includes(normalizedQuery) ||
          normalizeTr(surah.meaningTr).includes(normalizedQuery) ||
          surah.number.toString() === normalizedQuery
        ) {
          results.push({
            id: `surah_${surah.number}`,
            category: 'quran',
            title: `${surah.number}. ${surah.nameTr} Suresi (${surah.nameAr})`,
            snippet: `${surah.meaningTr} · ${surah.versesCount} Ayet · ${surah.revelationPlace}`,
            source: "Kur'an-ı Kerim",
            onClick: () => {
              jumpToQuranSurah(surah.number);
              setIsSearchModalOpen(false);
            }
          });
        }
      });

      // Search inside ayahs
      Object.values(VERIFIED_SURAHS_DETAIL).flat().forEach(ayah => {
        if (
          normalizeTr(ayah.translation).includes(normalizedQuery) ||
          (ayah.commentarySummary && normalizeTr(ayah.commentarySummary).includes(normalizedQuery))
        ) {
          const surah = SURAHS_INDEX.find(s => s.number === ayah.surahNumber);
          results.push({
            id: `ayah_${ayah.id}`,
            category: 'quran',
            title: `${surah?.nameTr || 'Sure'} ${ayah.ayahNumber}. Ayet`,
            arabic: ayah.arabic,
            snippet: ayah.translation,
            source: `${surah?.nameTr || ''} Suresi (Diyanet Meali)`,
            onClick: () => {
              jumpToQuranSurah(ayah.surahNumber, ayah.ayahNumber);
              setIsSearchModalOpen(false);
            }
          });
        }
      });
    }

    // 2. Hadiths
    if (filter === 'all' || filter === 'hadith') {
      HADITH_LIST.forEach(h => {
        if (
          normalizeTr(h.translation).includes(normalizedQuery) ||
          (h.narrator && normalizeTr(h.narrator).includes(normalizedQuery)) ||
          h.topicTags.some(t => normalizeTr(t).includes(normalizedQuery)) ||
          normalizeTr(h.sourceBook).includes(normalizedQuery)
        ) {
          results.push({
            id: h.id,
            category: 'hadith',
            title: `Hadis-i Şerif (${h.narrator || 'Rivayet'})`,
            arabic: h.arabic,
            snippet: h.translation,
            source: h.sourceBook,
            onClick: () => {
              setActiveTab('discover');
              setDiscoverSubTab('hadith');
              setIsSearchModalOpen(false);
            }
          });
        }
      });
    }

    // 3. Academy Lessons
    if (filter === 'all' || filter === 'academy') {
      ACADEMY_LESSONS.forEach(l => {
        if (
          normalizeTr(l.title).includes(normalizedQuery) ||
          normalizeTr(l.subtitle).includes(normalizedQuery) ||
          l.keyTerms.some(k => normalizeTr(k).includes(normalizedQuery))
        ) {
          results.push({
            id: l.id,
            category: 'academy',
            title: l.title,
            snippet: `${l.categoryName} · ${l.subtitle}`,
            source: "İlim Akademisi",
            onClick: () => {
              setActiveTab('academy');
              setSelectedAcademyLessonId(l.id);
              setIsSearchModalOpen(false);
            }
          });
        }
      });
    }

    // 4. Concepts Dictionary
    if (filter === 'all' || filter === 'dictionary') {
      ISLAMIC_CONCEPTS.forEach(c => {
        if (
          normalizeTr(c.termTr).includes(normalizedQuery) ||
          normalizeTr(c.shortDef).includes(normalizedQuery) ||
          normalizeTr(c.fullDef).includes(normalizedQuery)
        ) {
          results.push({
            id: c.id,
            category: 'dictionary',
            title: `${c.termTr} (${c.termAr})`,
            snippet: c.shortDef,
            source: c.source,
            onClick: () => {
              setActiveTab('discover');
              setDiscoverSubTab('dictionary');
              setIsSearchModalOpen(false);
            }
          });
        }
      });
    }

    // 5. Wisdom & Reflection
    if (filter === 'all' || filter === 'wisdom') {
      WISDOM_QUOTES.forEach(w => {
        if (
          normalizeTr(w.quote).includes(normalizedQuery) ||
          normalizeTr(w.author).includes(normalizedQuery) ||
          normalizeTr(w.theme).includes(normalizedQuery)
        ) {
          results.push({
            id: w.id,
            category: 'wisdom',
            title: `${w.author} - Hikmet`,
            snippet: `"${w.quote}"`,
            source: w.source,
            onClick: () => {
              setActiveTab('discover');
              setDiscoverSubTab('wisdom');
              setIsSearchModalOpen(false);
            }
          });
        }
      });
    }

    return results;
  }, [normalizedQuery, filter, jumpToQuranSurah, setSelectedAcademyLessonId, setActiveTab, setDiscoverSubTab, setIsSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-[#FFFDF8] dark:bg-[#17251F] border border-[#C7A45D]/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E5E0D5] dark:border-[#334238] bg-[#F8F5ED] dark:bg-[#101B17]">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#74776F] dark:text-[#B9C3B8]" />
            <input
              type="text"
              autoFocus
              placeholder="Sure, ayet, hadis, ders veya kavram ara..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] text-sm text-[#26342D] dark:text-[#F5F0E5] placeholder-[#74776F]/70 focus:outline-none focus:ring-2 focus:ring-[#C7A45D]"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 p-1 rounded-full text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: 'all', label: 'Tümü' },
              { id: 'quran', label: "Kur'an", icon: BookOpen },
              { id: 'hadith', label: 'Hadisler', icon: Scroll },
              { id: 'academy', label: 'Dersler', icon: GraduationCap },
              { id: 'dictionary', label: 'Kavramlar', icon: BookA },
              { id: 'wisdom', label: 'Hikmet', icon: Sparkles }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as SearchFilter)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition flex items-center gap-1 ${
                  filter === f.id
                    ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                    : 'bg-white dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8] border border-[#E5E0D5] dark:border-[#334238]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 no-scrollbar">
          {!query.trim() ? (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 mx-auto text-[#C7A45D]/60 mb-2" />
              <p className="font-serif-title font-medium text-sm text-[#26342D] dark:text-[#F5F0E5]">
                Akıllı İlim Arama
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] max-w-xs mx-auto mt-1">
                Aramak istediğin sureyi (örn: "Fâtiha", "Mülk"), kavramı (örn: "İhlas", "Tevekkül") veya hadisi yazmaya başla.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif-title text-sm text-[#26342D] dark:text-[#F5F0E5]">
                Sonuç bulunamadı
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] mt-1">
                "{query}" aramasıyla eşleşen içerik tespit edilemedi. Farklı kelimeler veya harf yazımları deneyebilirsiniz.
              </p>
            </div>
          ) : (
            <>
              <p className="text-[11px] font-semibold text-[#74776F] dark:text-[#B9C3B8] uppercase tracking-wider mb-2">
                {searchResults.length} sonuç bulundu
              </p>

              {searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={res.onClick}
                  className="w-full text-left p-3.5 rounded-2xl bg-white dark:bg-[#1D2D25]/60 hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] transition active:scale-[0.99] flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#123D32] dark:text-[#E5D2A1]">
                      {res.title}
                    </span>
                    <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] bg-[#F8F5ED] dark:bg-[#101B17] px-2 py-0.5 rounded-md border border-[#E5E0D5] dark:border-[#334238]">
                      {res.category.toUpperCase()}
                    </span>
                  </div>

                  {res.arabic && (
                    <p className="font-arabic text-sm text-[#123D32] dark:text-[#F5F0E5] line-clamp-1" dir="rtl">
                      {res.arabic}
                    </p>
                  )}

                  <p className="text-xs text-[#26342D] dark:text-[#F5F0E5] line-clamp-2">
                    {res.snippet}
                  </p>

                  <p className="text-[10px] text-[#92713B] dark:text-[#D6B76F] mt-0.5">
                    Kaynak: {res.source}
                  </p>
                </button>
              ))}
            </>
          )}
        </div>

        {/* Modal Close Footer */}
        <div className="p-3 border-t border-[#E5E0D5] dark:border-[#334238] bg-[#F8F5ED] dark:bg-[#101B17] flex justify-end">
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="px-4 py-1.5 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xs active:scale-95 transition"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
