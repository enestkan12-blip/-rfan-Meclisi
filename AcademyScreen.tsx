import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CATEGORIES, ACADEMY_LESSONS } from '../data/academyData';
import { AcademyLesson, QuizQuestion } from '../types';
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Clock,
  ArrowLeft,
  ChevronRight,
  FileText,
  Award,
  Sparkles,
  Bookmark,
  Share2
} from 'lucide-react';

export const AcademyScreen: React.FC = () => {
  const {
    selectedAcademyLessonId,
    setSelectedAcademyLessonId,
    userStats,
    toggleLessonCompleted,
    openNoteModalFor,
    isFavorite,
    addFavorite,
    removeFavorite
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);

  const activeLesson: AcademyLesson | undefined = ACADEMY_LESSONS.find(
    (l) => l.id === selectedAcademyLessonId
  );

  const filteredLessons = ACADEMY_LESSONS.filter((l) => {
    if (selectedCategory === 'all') return true;
    return l.categoryId === selectedCategory;
  });

  const handleSelectQuizOption = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleShareLesson = (lesson: AcademyLesson) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `[İrfan Meclisi - İlim Akademisi]\n\n${lesson.title}\n${lesson.subtitle}\n\nÖğrenme Hedefleri:\n${lesson.learningObjectives.map(o => `• ${o}`).join('\n')}`
      );
      setCopiedMsg("Ders özeti kopyalandı!");
      setTimeout(() => setCopiedMsg(null), 2000);
    }
  };

  // 1. Detailed Lesson Screen
  if (activeLesson) {
    const isCompleted = userStats.completedLessonIds.includes(activeLesson.id);
    const favId = `lesson_${activeLesson.id}`;
    const isLessonFav = isFavorite(favId);

    return (
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-5 pb-24 animate-in fade-in duration-150">
        {copiedMsg && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xl animate-in fade-in duration-200">
            {copiedMsg}
          </div>
        )}

        {/* Top bar with back button */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D5] dark:border-[#334238]">
          <button
            onClick={() => {
              setSelectedAcademyLessonId(null);
              setQuizSubmitted(false);
              setQuizAnswers({});
            }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#EDF3EC] dark:bg-[#1D2D25] text-[#123D32] dark:text-[#E5D2A1] hover:bg-[#DCE9DF] transition active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tüm Dersler</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                if (isLessonFav) removeFavorite(favId);
                else {
                  addFavorite({
                    type: 'lesson',
                    targetId: favId,
                    title: activeLesson.title,
                    preview: activeLesson.subtitle,
                    sourceInfo: activeLesson.categoryName
                  });
                }
              }}
              className={`p-2 rounded-xl transition ${
                isLessonFav
                  ? 'text-[#C7A45D] bg-[#FFF8E7] dark:bg-[#235747]'
                  : 'text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25]'
              }`}
              title="Dersi Kaydet"
            >
              <Bookmark className={`w-4 h-4 ${isLessonFav ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => openNoteModalFor({
                title: `${activeLesson.title} - Ders Notu`,
                tag: 'Ders',
                referenceTitle: activeLesson.title
              })}
              className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
              title="Ders Notu Ekle"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleShareLesson(activeLesson)}
              className="p-2 rounded-xl text-[#74776F] dark:text-[#B9C3B8] hover:bg-[#EDF3EC] dark:hover:bg-[#1D2D25] transition"
              title="Dersi Paylaş"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lesson Hero Header */}
        <div className="rounded-3xl bg-gradient-to-br from-[#123D32] to-[#0B2B24] text-white p-6 shadow-md border border-[#C7A45D]/40">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold text-[#E5D2A1] uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full">
              {activeLesson.categoryName}
            </span>
            <span className="text-[11px] text-stone-300">
              {activeLesson.level} Seviye
            </span>
            <span className="text-[11px] text-stone-300 ml-auto flex items-center gap-1">
              <Clock className="w-3 h-3" />
              ~{activeLesson.estimatedMinutes} dk
            </span>
          </div>

          <h2 className="font-serif-title font-bold text-xl sm:text-2xl text-[#FFFDF8] leading-tight">
            {activeLesson.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 mt-2 leading-relaxed">
            {activeLesson.subtitle}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-4">
            <button
              onClick={() => toggleLessonCompleted(activeLesson.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition active:scale-95 ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/15 text-[#E5D2A1] border border-white/20 hover:bg-white/20'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'fill-current' : ''}`} />
              <span>{isCompleted ? "Ders Tamamlandı" : "Dersi Tamamlandı Olarak İşaretle"}</span>
            </button>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-2">
          <h3 className="font-serif-title font-bold text-xs uppercase tracking-wider text-[#123D32] dark:text-[#E5D2A1] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C7A45D]" />
            <span>Öğrenme Hedefleri</span>
          </h3>
          <ul className="space-y-1.5 pt-1">
            {activeLesson.learningObjectives.map((obj, i) => (
              <li key={i} className="text-xs text-[#26342D] dark:text-[#F5F0E5] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] shrink-0 mt-1.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Structured Content Sections */}
        <div className="space-y-4">
          {activeLesson.sections.map((section) => (
            <section
              key={section.id}
              className="p-5 sm:p-6 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-3"
            >
              <h3 className="font-serif-title font-bold text-base text-[#123D32] dark:text-[#E5D2A1]">
                {section.title}
              </h3>
              <div className="text-xs sm:text-sm text-[#26342D] dark:text-[#F5F0E5] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>

              {section.sourceCitation && (
                <div className="pt-2 border-t border-[#E5E0D5]/70 dark:border-[#334238]/70 text-[11px] text-[#92713B] dark:text-[#D6B76F] italic">
                  Kaynak: {section.sourceCitation}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Key Terms */}
        <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238]">
          <span className="text-[11px] font-semibold text-[#74776F] dark:text-[#B9C3B8] uppercase tracking-wider block mb-2">
            Önemli Kavram ve Terimler
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeLesson.keyTerms.map((term, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-[#EDF3EC] dark:bg-[#101B17] text-[#123D32] dark:text-[#E5D2A1] text-xs font-medium"
              >
                {term}
              </span>
            ))}
          </div>
        </div>

        {/* Knowledge Check Quiz (BÖLÜM 18) */}
        {activeLesson.quiz && activeLesson.quiz.length > 0 && (
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#C7A45D]/50 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5] dark:border-[#334238]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C7A45D]" />
                <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1]">
                  DERS SONU BİLGİ KONTROLÜ
                </h3>
              </div>
              {quizSubmitted && (
                <button
                  onClick={handleResetQuiz}
                  className="text-xs font-semibold text-[#92713B] dark:text-[#E5D2A1] hover:underline"
                >
                  Yeniden Dene
                </button>
              )}
            </div>

            <div className="space-y-4">
              {activeLesson.quiz.map((q, qIndex) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;

                return (
                  <div key={q.id} className="space-y-2.5">
                    <p className="font-serif-title font-semibold text-xs sm:text-sm text-[#26342D] dark:text-[#F5F0E5]">
                      {qIndex + 1}. {q.question}
                    </p>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIndex) => {
                        const isChosen = selectedOpt === optIndex;
                        const isCorrect = q.correctOptionIndex === optIndex;

                        let btnStyle = "bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238]";
                        if (quizSubmitted) {
                          if (isCorrect) btnStyle = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold";
                          else if (isChosen && !isCorrect) btnStyle = "bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-200";
                        } else if (isChosen) {
                          btnStyle = "bg-[#EDF3EC] dark:bg-[#17251F] border-[#123D32] dark:border-[#C7A45D] font-semibold";
                        }

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleSelectQuizOption(q.id, optIndex)}
                            className={`w-full text-left p-3 rounded-2xl border text-xs transition flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] p-2.5 rounded-xl bg-[#F8F5ED] dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238]">
                        <span className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">Açıklama: </span>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <button
                disabled={Object.keys(quizAnswers).length !== activeLesson.quiz.length}
                onClick={() => setQuizSubmitted(true)}
                className="w-full py-2.5 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xs disabled:opacity-40 active:scale-95 transition"
              >
                Cevapları Kontrol Et
              </button>
            ) : (
              <div className="p-3 rounded-2xl bg-[#EDF3EC] dark:bg-[#101B17] text-center text-xs font-semibold text-[#123D32] dark:text-[#E5D2A1]">
                Tebrikler! Değerlendirme tamamlandı. Dersi tamamlandı olarak işaretleyebilirsiniz.
              </div>
            )}
          </div>
        )}

        {/* Bibliography */}
        <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-1">
          <span className="text-[11px] font-semibold text-[#74776F] dark:text-[#B9C3B8] uppercase tracking-wider block">
            Kaynakça ve Güvenilir Eserler
          </span>
          <ul className="text-xs text-[#74776F] dark:text-[#B9C3B8] space-y-1 pt-1">
            {activeLesson.bibliography.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // 2. All Lessons Directory
  return (
    <div className="max-w-2xl mx-auto px-4 py-4 space-y-4 pb-24">
      {/* Academy Title Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-[#123D32] to-[#0B2B24] text-white border border-[#C7A45D]/40 shadow-sm">
        <div className="flex items-center gap-2 mb-1.5">
          <GraduationCap className="w-5 h-5 text-[#E5D2A1]" />
          <h2 className="font-serif-title font-bold text-lg sm:text-xl text-[#FFFDF8]">
            İlim Akademisi
          </h2>
        </div>
        <p className="text-xs text-stone-200/90 leading-relaxed">
          Kur'an ilimlerinden hadis usulüne, fıkıhtan güzel ahlaka sistemli ve kaynaklı dijital öğrenme kütüphanesi.
        </p>
      </div>

      {/* Category filter pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
            selectedCategory === 'all'
              ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
              : 'bg-[#FFFDF8] dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8] border border-[#E5E0D5] dark:border-[#334238]'
          }`}
        >
          Tüm Kategoriler
        </button>

        {ACADEMY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat.id
                ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                : 'bg-[#FFFDF8] dark:bg-[#1D2D25] text-[#74776F] dark:text-[#B9C3B8] border border-[#E5E0D5] dark:border-[#334238]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Lesson List Cards */}
      <div className="space-y-3">
        {filteredLessons.map((lesson) => {
          const isCompleted = userStats.completedLessonIds.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => setSelectedAcademyLessonId(lesson.id)}
              className="w-full text-left p-4 sm:p-5 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] hover:border-[#C7A45D] transition active:scale-[0.99] flex items-center justify-between gap-4 shadow-xs"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                    {lesson.categoryName}
                  </span>
                  <span className="text-[10px] text-[#74776F] dark:text-[#B9C3B8]">
                    {lesson.level}
                  </span>
                  {isCompleted && (
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3 fill-current" />
                      Tamamlandı
                    </span>
                  )}
                </div>

                <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#26342D] dark:text-[#F5F0E5]">
                  {lesson.title}
                </h3>

                <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] line-clamp-1">
                  {lesson.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-3 text-[11px] text-[#74776F] dark:text-[#B9C3B8]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    ~{lesson.estimatedMinutes} dakika
                  </span>
                  <span>·</span>
                  <span>{lesson.sections.length} Bölüm</span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-[#C7A45D] shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
