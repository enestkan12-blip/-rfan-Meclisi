import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DiscoverSubTab } from '../types';
import { HADITH_LIST } from '../data/hadithData';
import { ISLAMIC_CONCEPTS } from '../data/dictionaryData';
import { WISDOM_QUOTES } from '../data/hikmetData';
import { ARABIC_ALPHABET, QURANIC_WORDS } from '../data/arabicData';
import { RELIABLE_QA_LIST } from '../data/qaData';
import {
  Scroll,
  BookA,
  Sparkles,
  Languages,
  HelpCircle,
  Search,
  Bookmark,
  Share2,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCw
} from 'lucide-react';

export const DiscoverScreen: React.FC = () => {
  const {
    discoverSubTab,
    setDiscoverSubTab,
    isFavorite,
    addFavorite,
    removeFavorite,
    openNoteModalFor
  } = useApp();

  const [searchWord, setSearchWord] = useState('');
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);

  // Hadith Filter
  const [hadithTopicFilter, setHadithTopicFilter] = useState('all');

  // Arabic Learning Mode
  const [arabicMode, setArabicMode] = useState<'alphabet' | 'vocab'>('alphabet');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [flippedWordId, setFlippedWordId] = useState<string | null>(null);

  // Q&A expanded items
  const [expandedQaId, setExpandedQaId] = useState<string | null>(null);

  const handleCopy = (text: string, title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${title}\n\n"${text}"\n\n— İrfan Meclisi`);
      setCopiedMsg("Panoya kopyalandı!");
      setTimeout(() => setCopiedMsg(null), 2000);
    }
  };

  const SUB_TABS: { id: DiscoverSubTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'hadith', label: 'Hadisler', icon: Scroll },
    { id: 'dictionary', label: 'Kavramlar', icon: BookA },
    { id: 'wisdom', label: 'Hikmet', icon: Sparkles },
    { id: 'arabic', label: 'Arapça', icon: Languages },
    { id: 'qa', label: 'Soru-Cevap', icon: HelpCircle }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 space-y-4 pb-24">
      {copiedMsg && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xl animate-in fade-in duration-200">
          {copiedMsg}
        </div>
      )}

      {/* Sub-Tabs Selector Header */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#EDF3EC] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] overflow-x-auto no-scrollbar">
        {SUB_TABS.map((tab) => {
          const isActive = discoverSubTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => {
                setDiscoverSubTab(tab.id);
                setSearchWord('');
              }}
              className={`flex-1 min-w-[76px] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition active:scale-95 whitespace-nowrap ${
                isActive
                  ? 'bg-[#123D32] text-[#E5D2A1] shadow-xs'
                  : 'text-[#74776F] dark:text-[#B9C3B8] hover:text-[#26342D] dark:hover:text-[#F5F0E5]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Input for Current Tab */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#74776F]" />
        <input
          type="text"
          placeholder={
            discoverSubTab === 'hadith' ? "Hadis metni, râvi veya kaynak ara..." :
            discoverSubTab === 'dictionary' ? "Kavram adı veya açıklama ara..." :
            discoverSubTab === 'wisdom' ? "Hikmetli söz veya müellif ara..." :
            discoverSubTab === 'arabic' ? "Harf veya kelime ara..." :
            "Dinî soru veya konu ara..."
          }
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] text-xs text-[#26342D] dark:text-[#F5F0E5] focus:outline-none focus:ring-1 focus:ring-[#C7A45D]"
        />
      </div>

      {/* 1. HADITH LIBRARY (BÖLÜM 9) */}
      {discoverSubTab === 'hadith' && (
        <div className="space-y-3">
          {/* Topic filter chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {['all', 'Niyet & İhlas', 'İlim Öğrenme', 'Güzel Ahlak', 'Merhamet', 'Zikir & Tesbih', 'Sabır & Şükür'].map((topic) => (
              <button
                key={topic}
                onClick={() => setHadithTopicFilter(topic)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  hadithTopicFilter === topic
                    ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                    : 'bg-white dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8] border border-[#E5E0D5] dark:border-[#334238]'
                }`}
              >
                {topic === 'all' ? 'Tüm Konular' : topic}
              </button>
            ))}
          </div>

          <div className="space-y-3.5">
            {HADITH_LIST
              .filter(h => {
                const q = searchWord.toLowerCase();
                const matchesSearch = !searchWord ||
                  h.translation.toLowerCase().includes(q) ||
                  (h.narrator && h.narrator.toLowerCase().includes(q)) ||
                  h.sourceBook.toLowerCase().includes(q);
                const matchesTopic = hadithTopicFilter === 'all' || h.topicTags.includes(hadithTopicFilter);
                return matchesSearch && matchesTopic;
              })
              .map((hadith) => {
                const favId = `hadith_${hadith.id}`;
                const isFav = isFavorite(favId);

                return (
                  <article
                    key={hadith.id}
                    className="p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5]/70 dark:border-[#334238]/70">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#123D32] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                          {hadith.authenticity}
                        </span>
                        <span className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                          Râvi: {hadith.narrator}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            if (isFav) removeFavorite(favId);
                            else {
                              addFavorite({
                                type: 'hadith',
                                targetId: favId,
                                title: `Hadis: ${hadith.narrator || 'Rivayet'}`,
                                arabic: hadith.arabic,
                                preview: hadith.translation,
                                sourceInfo: hadith.sourceBook
                              });
                            }
                          }}
                          className={`p-1.5 rounded-xl transition ${
                            isFav
                              ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                              : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
                          }`}
                          title="Favoriye Ekle"
                        >
                          <Bookmark className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                        </button>

                        <button
                          onClick={() => openNoteModalFor({
                            title: `Hadis Notu (${hadith.sourceBook})`,
                            tag: 'Hadis',
                            referenceTitle: hadith.sourceBook
                          })}
                          className="p-1.5 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
                          title="Not Ekle"
                        >
                          <FileText className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleCopy(hadith.translation, `Hadis-i Şerif (${hadith.sourceBook})`)}
                          className="p-1.5 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
                          title="Paylaş"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {hadith.arabic && (
                      <p className="font-arabic text-lg sm:text-xl text-[#123D32] dark:text-[#F5F0E5] leading-[2.2]" dir="rtl">
                        {hadith.arabic}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
                      "{hadith.translation}"
                    </p>

                    <div className="pt-2 border-t border-[#E5E0D5]/60 dark:border-[#334238]/60 flex items-center justify-between text-[11px] text-[#92713B] dark:text-[#D6B76F]">
                      <span>{hadith.sourceBook}</span>
                      <span>{hadith.hadithNumber}</span>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      )}

      {/* 2. ISLAMIC CONCEPTS DICTIONARY (BÖLÜM 10) */}
      {discoverSubTab === 'dictionary' && (
        <div className="space-y-3">
          {ISLAMIC_CONCEPTS
            .filter(c => {
              const q = searchWord.toLowerCase();
              return !searchWord ||
                c.termTr.toLowerCase().includes(q) ||
                c.shortDef.toLowerCase().includes(q) ||
                c.fullDef.toLowerCase().includes(q);
            })
            .map((concept) => (
              <div
                key={concept.id}
                className="p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5]/70 dark:border-[#334238]/70">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-title font-bold text-base text-[#123D32] dark:text-[#E5D2A1]">
                      {concept.termTr}
                    </h3>
                    <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                      {concept.category}
                    </span>
                  </div>

                  <span className="font-arabic text-xl text-[#92713B] dark:text-[#D6B76F]" dir="rtl">
                    {concept.termAr}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
                  {concept.shortDef}
                </p>

                <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] leading-relaxed whitespace-pre-line">
                  {concept.fullDef}
                </p>

                {concept.quranReferences.length > 0 && (
                  <div className="pt-2 border-t border-[#E5E0D5]/70 dark:border-[#334238]/70 space-y-1.5">
                    <span className="text-[11px] font-semibold text-[#123D32] dark:text-[#E5D2A1] block">
                      İlgili Ayetler:
                    </span>
                    {concept.quranReferences.map((ref, i) => (
                      <p key={i} className="text-xs text-[#26342D] dark:text-[#F5F0E5] italic bg-[#F8F5ED] dark:bg-[#101B17] p-2.5 rounded-xl border border-[#E5E0D5]/50 dark:border-[#334238]">
                        "{ref.text}" — <span className="font-semibold">{ref.surahName} {ref.ayahNumber}</span>
                      </p>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#92713B] dark:text-[#D6B76F]">
                  <span>Kaynak: {concept.source}</span>
                  <button
                    onClick={() => openNoteModalFor({
                      title: `${concept.termTr} Kavram Notu`,
                      tag: 'Kavram',
                      referenceTitle: concept.termTr
                    })}
                    className="hover:underline flex items-center gap-1 font-semibold"
                  >
                    <FileText className="w-3 h-3" />
                    Not Ekle
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* 3. WISDOM & REFLECTION (BÖLÜM 11) */}
      {discoverSubTab === 'wisdom' && (
        <div className="space-y-3.5">
          {WISDOM_QUOTES
            .filter(w => {
              const q = searchWord.toLowerCase();
              return !searchWord ||
                w.quote.toLowerCase().includes(q) ||
                w.author.toLowerCase().includes(q) ||
                w.theme.toLowerCase().includes(q);
            })
            .map((w) => {
              const favId = `wisdom_${w.id}`;
              const isFav = isFavorite(favId);

              return (
                <article
                  key={w.id}
                  className="p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#C7A45D]/40 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5]/70 dark:border-[#334238]/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                      {w.theme}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          if (isFav) removeFavorite(favId);
                          else {
                            addFavorite({
                              type: 'wisdom',
                              targetId: favId,
                              title: `${w.author} - Hikmet`,
                              preview: w.quote,
                              sourceInfo: w.source
                            });
                          }
                        }}
                        className={`p-1.5 rounded-xl transition ${
                          isFav
                            ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                            : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17]'
                        }`}
                        title="Favoriye Ekle"
                      >
                        <Bookmark className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                      </button>

                      <button
                        onClick={() => handleCopy(w.quote, `${w.author} — ${w.source}`)}
                        className="p-1.5 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#101B17] transition"
                        title="Paylaş"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <blockquote className="font-serif-title italic text-sm sm:text-base text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
                    "{w.quote}"
                  </blockquote>

                  <div className="text-xs">
                    <span className="font-bold text-[#123D32] dark:text-[#E5D2A1] block">{w.author}</span>
                    <span className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">{w.source}</span>
                  </div>

                  {/* Reflection question */}
                  <div className="p-3 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/30 space-y-1">
                    <p className="text-xs font-semibold text-[#123D32] dark:text-[#E5D2A1] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
                      <span>Tefekkür Sorusu:</span>
                    </p>
                    <p className="text-xs text-[#26342D] dark:text-[#F5F0E5]">
                      {w.reflectionQuestion}
                    </p>
                  </div>

                  {/* Practical suggestion */}
                  <div className="p-3 rounded-2xl bg-[#FFFDF8] dark:bg-[#17251F] border border-[#E5E0D5] dark:border-[#334238] space-y-1">
                    <p className="text-xs font-semibold text-[#92713B] dark:text-[#E5D2A1] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A45D]" />
                      <span>Günün Ameli / Uygulama:</span>
                    </p>
                    <p className="text-xs text-[#26342D] dark:text-[#F5F0E5]">
                      {w.practicalAdvice}
                    </p>
                  </div>
                </article>
              );
            })}
        </div>
      )}

      {/* 4. ARABIC LEARNING (BÖLÜM 12) */}
      {discoverSubTab === 'arabic' && (
        <div className="space-y-4">
          {/* Sub switch: Alphabet vs Vocabulary Flashcards */}
          <div className="flex gap-2">
            <button
              onClick={() => setArabicMode('alphabet')}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                arabicMode === 'alphabet'
                  ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                  : 'bg-white dark:bg-[#1D2D25] border-[#E5E0D5] dark:border-[#334238] text-[#74776F]'
              }`}
            >
              Elif-Bâ (Harfler ve Yazılış)
            </button>
            <button
              onClick={() => setArabicMode('vocab')}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                arabicMode === 'vocab'
                  ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                  : 'bg-white dark:bg-[#1D2D25] border-[#E5E0D5] dark:border-[#334238] text-[#74776F]'
              }`}
            >
              Kur'an Kelime Kartları
            </button>
          </div>

          {arabicMode === 'alphabet' ? (
            <div className="space-y-3">
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                Arap alfabesinde 28 harf bulunur ve sağdan sola yazılır. Harfe dokunarak başta, ortada ve sondaki yazılış biçimlerini inceleyebilirsiniz.
              </p>

              {/* 28 Letter Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {ARABIC_ALPHABET.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedLetter(selectedLetter === item.id ? null : item.id)}
                    className={`p-3 rounded-2xl border text-center transition active:scale-95 flex flex-col items-center justify-center ${
                      selectedLetter === item.id
                        ? 'border-[#C7A45D] bg-[#EDF3EC] dark:bg-[#1D2D25] ring-2 ring-[#C7A45D]'
                        : 'bg-white dark:bg-[#1D2D25] border-[#E5E0D5] dark:border-[#334238] hover:border-[#C7A45D]/50'
                    }`}
                  >
                    <span className="font-arabic text-3xl text-[#123D32] dark:text-[#F5F0E5]" dir="rtl">
                      {item.letter}
                    </span>
                    <span className="text-[11px] font-semibold text-[#26342D] dark:text-[#E5D2A1] mt-1">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Letter detail popup/drawer */}
              {selectedLetter && (() => {
                const letter = ARABIC_ALPHABET.find(l => l.id === selectedLetter);
                if (!letter) return null;

                return (
                  <div className="p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#C7A45D] shadow-md space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5] dark:border-[#334238]">
                      <div>
                        <h4 className="font-serif-title font-bold text-base text-[#123D32] dark:text-[#E5D2A1]">
                          {letter.name} Harfi
                        </h4>
                        <span className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                          Okunuş: {letter.transcription}
                        </span>
                      </div>
                      <span className="font-arabic text-4xl text-[#123D32] dark:text-[#E5D2A1]">
                        {letter.letter}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                        <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] block">Yalın</span>
                        <span className="font-arabic text-2xl text-[#123D32] dark:text-[#F5F0E5]">{letter.isolated}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                        <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] block">Başta</span>
                        <span className="font-arabic text-2xl text-[#123D32] dark:text-[#F5F0E5]">{letter.initial}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                        <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] block">Ortada</span>
                        <span className="font-arabic text-2xl text-[#123D32] dark:text-[#F5F0E5]">{letter.medial}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                        <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] block">Sonda</span>
                        <span className="font-arabic text-2xl text-[#123D32] dark:text-[#F5F0E5]">{letter.final}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8]">Örnek Kelime:</span>
                        <p className="text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5]">{letter.exampleMeaning}</p>
                      </div>
                      <span className="font-arabic text-2xl text-[#123D32] dark:text-[#E5D2A1]" dir="rtl">
                        {letter.exampleWord}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            /* Quran Vocabulary Flashcards */
            <div className="space-y-3">
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                Kur'an-ı Kerim'de en sık geçen temel kelimeler. Kartın üzerine dokunarak Türkçe anlamını ve ayet örneğini görebilirsiniz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QURANIC_WORDS.map((w) => {
                  const isFlipped = flippedWordId === w.id;

                  return (
                    <button
                      key={w.id}
                      onClick={() => setFlippedWordId(isFlipped ? null : w.id)}
                      className="p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] text-left hover:border-[#C7A45D] transition active:scale-[0.99] flex flex-col justify-between min-h-[140px] shadow-xs"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-semibold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                          Kur'an'da {w.frequencyInQuran}
                        </span>
                        <RotateCw className="w-3.5 h-3.5 text-[#74776F]" />
                      </div>

                      <div className="py-2 text-center w-full">
                        <span className="font-arabic text-3xl text-[#123D32] dark:text-[#F5F0E5] block" dir="rtl">
                          {w.arabic}
                        </span>
                        <span className="text-xs font-mono text-[#74776F] dark:text-[#B9C3B8]">
                          {w.transcription}
                        </span>
                      </div>

                      {isFlipped ? (
                        <div className="pt-2 border-t border-[#E5E0D5] dark:border-[#334238] text-center w-full animate-in fade-in">
                          <p className="text-xs font-bold text-[#123D32] dark:text-[#E5D2A1]">
                            {w.meaning}
                          </p>
                          <p className="font-arabic text-xs text-[#74776F] dark:text-[#B9C3B8] mt-1" dir="rtl">
                            {w.exampleAyahSnippet}
                          </p>
                        </div>
                      ) : (
                        <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] text-center italic">
                          Anlamını görmek için dokunun
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. RELIABLE Q&A (BÖLÜM 13) */}
      {discoverSubTab === 'qa' && (
        <div className="space-y-3.5">
          <div className="p-4 rounded-3xl bg-[#EDF3EC] dark:bg-[#101B17] border border-[#C7A45D]/40 text-xs text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
            <span className="font-bold text-[#123D32] dark:text-[#E5D2A1] block mb-1">
              Güvenilir Dinî Soru-Cevap İlkesi:
            </span>
            Cevaplar Diyanet Din İşleri Yüksek Kurulu ve TDV İslâm Ansiklopedisi kaynaklarına dayandırılmıştır. Fıkhî içtihat farklılıkları tarafsızca belirtilmiştir; fetva yerine ilmi rehberlik sunar.
          </div>

          <div className="space-y-3">
            {RELIABLE_QA_LIST
              .filter(item => {
                const q = searchWord.toLowerCase();
                return !searchWord ||
                  item.question.toLowerCase().includes(q) ||
                  item.shortAnswer.toLowerCase().includes(q) ||
                  item.detailedAnswer.toLowerCase().includes(q);
              })
              .map((item) => {
                const isExpanded = expandedQaId === item.id;

                return (
                  <div
                    key={item.id}
                    className="rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setExpandedQaId(isExpanded ? null : item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                          {item.category}
                        </span>
                        <h4 className="font-serif-title font-bold text-sm text-[#26342D] dark:text-[#F5F0E5]">
                          {item.question}
                        </h4>
                        <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] line-clamp-2">
                          {item.shortAnswer}
                        </p>
                      </div>

                      <div className="p-1 rounded-full text-[#74776F] shrink-0 mt-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-[#E5E0D5]/70 dark:border-[#334238]/70 space-y-3 text-xs animate-in fade-in">
                        <div className="space-y-1">
                          <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Detaylı Açıklama:</span>
                          <p className="text-[#26342D] dark:text-[#F5F0E5] leading-relaxed whitespace-pre-line">
                            {item.detailedAnswer}
                          </p>
                        </div>

                        {item.ayatsCited.length > 0 && (
                          <div className="p-2.5 rounded-xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                            <span className="font-semibold text-[#92713B] dark:text-[#E5D2A1]">Dayanak Ayetler: </span>
                            <span className="text-[#26342D] dark:text-[#F5F0E5]">{item.ayatsCited.join(', ')}</span>
                          </div>
                        )}

                        {item.hadithsCited.length > 0 && (
                          <div className="p-2.5 rounded-xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                            <span className="font-semibold text-[#92713B] dark:text-[#E5D2A1]">Dayanak Hadisler: </span>
                            <span className="text-[#26342D] dark:text-[#F5F0E5]">{item.hadithsCited.join(', ')}</span>
                          </div>
                        )}

                        <div className="text-[11px] text-[#74776F] dark:text-[#B9C3B8] pt-1">
                          <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Mezhep & Âlim Değerlendirmesi: </span>
                          <span>{item.scholarlyViews}</span>
                        </div>

                        <div className="pt-2 border-t border-[#E5E0D5]/60 dark:border-[#334238]/60 text-[11px] text-[#92713B] dark:text-[#D6B76F] flex items-center justify-between">
                          <span>Kaynak: {item.source}</span>
                          <button
                            onClick={() => handleCopy(item.detailedAnswer, item.question)}
                            className="hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Share2 className="w-3 h-3" />
                            Paylaş
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
