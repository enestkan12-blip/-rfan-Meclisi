import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ActiveTab,
  DiscoverSubTab,
  FavoriteItem,
  PersonalNote,
  DhikrItem,
  UserStats,
  AppSettings
} from '../types';

export const INITIAL_DHIKRS: DhikrItem[] = [
  {
    id: "dhikr_1",
    title: "Kelime-i Tevhid",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
    transcription: "Lâ ilâhe illallâh Muhammedü'r-Rasûlullâh",
    meaning: "Allah'tan başka hiçbir ilah yoktur; Muhammed O'nun elçisidir.",
    targetCount: 100,
    currentCount: 0,
    totalCount: 0,
    virtue: "Zikrin en faziletlisidir (Tirmizî)."
  },
  {
    id: "dhikr_2",
    title: "Sübhanallahi ve bihamdihi",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transcription: "Sübhânallâhi ve bi-hamdihî",
    meaning: "Allah'ı noksan sıfatlardan tenzih eder, O'na hamd ederim.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Günde 100 kez söyleyenin günahları deniz köpüğü kadar da olsa affolunur (Buhârî)."
  },
  {
    id: "dhikr_3",
    title: "İstiğfar (Estağfirullah)",
    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ",
    transcription: "Estağfirullâhe'l-Azîme ve etûbü ileyh",
    meaning: "Yüce Allah'tan bağışlanma diler ve O'na tövbe ederim.",
    targetCount: 100,
    currentCount: 0,
    totalCount: 0,
    virtue: "İstiğfara devam edene Allah her darlıktan bir çıkış verir (Ebû Dâvûd)."
  },
  {
    id: "dhikr_4",
    title: "Salavat-ı Şerife",
    arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
    transcription: "Allâhümme salli alâ seyyidinâ Muhammedin ve alâ âli seyyidinâ Muhammed",
    meaning: "Allah'ım! Efendimiz Muhammed'e ve onun ehl-i beytine salât ve selâm eyle.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Bana bir salavat getirene Allah on rahmet eder (Müslim)."
  },
  {
    id: "dhikr_5",
    title: "Elhamdülillah",
    arabic: "الْحَمْدُ لِلَّهِ",
    transcription: "Elhamdülillâh",
    meaning: "Bütün övgü ve teşekkürler Allah'a mahsustur.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Mizanı dolduran en yüce şükür zikridir."
  },
  {
    id: "dhikr_6",
    title: "Allahu Ekber",
    arabic: "اللَّهُ أَكْبَرُ",
    transcription: "Allâhu Ekber",
    meaning: "Allah en büyüktür.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Namaz tesbihatının üçüncü rüknüdür."
  },
  {
    id: "dhikr_7",
    title: "Lâ havle velâ kuvvete",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    transcription: "Lâ havle ve lâ kuvvete illâ billâhi'l-Aliyyi'l-Azîm",
    meaning: "Güç ve kuvvet ancak pek yüce ve pek büyük olan Allah'ın lütfuyladır.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Cennet hazinelerinden bir hazinedir (Buhârî)."
  },
  {
    id: "dhikr_8",
    title: "Hasbünallah",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transcription: "Hasbünallâhu ve ni'me'l-vekîl",
    meaning: "Allah bize yeter, O ne güzel vekildir.",
    targetCount: 33,
    currentCount: 0,
    totalCount: 0,
    virtue: "Hz. İbrahim ateşe atılırken söylediği teslimiyet duasıdır."
  }
];

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'light',
  fontSize: 'medium',
  quranTheme: 'cream',
  hapticFeedback: true,
  audioAutoPlay: false,
  showArabicText: true,
  showFootnotes: true
};

const DEFAULT_STATS: UserStats = {
  streakDays: 0,
  lastActiveDate: '',
  totalDhikrCount: 0,
  completedLessonIds: [],
  dailyGoalMinutes: 15,
  lastReadSurahNumber: 1,
  lastReadAyahNumber: 1,
  lastReadSurahName: "Fâtiha"
};

const STORAGE_SCHEMA_VERSION = 1;
const createId = (prefix: string): string => {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return `${prefix}_${crypto.randomUUID()}`;
  } catch { /* Fall back for older webviews. */ }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};
const MAX_TEXT_LENGTH = 10000;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const safeText = (value: unknown, fallback = '', max = MAX_TEXT_LENGTH): string =>
  typeof value === 'string' ? value.trim().slice(0, max) : fallback;

const safeNumber = (value: unknown, fallback: number, min: number, max: number): number =>
  typeof value === 'number' && Number.isFinite(value)
    ? Math.min(max, Math.max(min, Math.floor(value)))
    : fallback;

const persistValue = (key: string, value: unknown): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`${key} kaydedilemedi. Depolama alanı dolu veya erişilemiyor olabilir.`, error);
    try {
      window.dispatchEvent(new CustomEvent('irfan-storage-error', { detail: { key } }));
    } catch { /* Non-browser environments may not support CustomEvent. */ }
    return false;
  }
};

const readStoredValue = (key: string): unknown => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as unknown : null;
  } catch (error) {
    console.warn(`${key} verisi okunamadı; varsayılan değer kullanılacak.`, error);
    return null;
  }
};

const normalizeSettings = (value: unknown): AppSettings => {
  const data = isRecord(value) ? value : {};
  return {
    theme: ['light', 'dark', 'system'].includes(String(data.theme)) ? data.theme as AppSettings['theme'] : DEFAULT_SETTINGS.theme,
    fontSize: ['small', 'medium', 'large', 'xlarge'].includes(String(data.fontSize)) ? data.fontSize as AppSettings['fontSize'] : DEFAULT_SETTINGS.fontSize,
    quranTheme: ['cream', 'white', 'dark'].includes(String(data.quranTheme)) ? data.quranTheme as AppSettings['quranTheme'] : DEFAULT_SETTINGS.quranTheme,
    hapticFeedback: typeof data.hapticFeedback === 'boolean' ? data.hapticFeedback : DEFAULT_SETTINGS.hapticFeedback,
    audioAutoPlay: typeof data.audioAutoPlay === 'boolean' ? data.audioAutoPlay : DEFAULT_SETTINGS.audioAutoPlay,
    showArabicText: typeof data.showArabicText === 'boolean' ? data.showArabicText : DEFAULT_SETTINGS.showArabicText,
    showFootnotes: typeof data.showFootnotes === 'boolean' ? data.showFootnotes : DEFAULT_SETTINGS.showFootnotes
  };
};

const normalizeStats = (value: unknown): UserStats => {
  const data = isRecord(value) ? value : {};
  const completed = Array.isArray(data.completedLessonIds)
    ? data.completedLessonIds.filter((id): id is string => typeof id === 'string').slice(0, 5000)
    : [];
  return {
    streakDays: safeNumber(data.streakDays, 0, 0, 1000000),
    lastActiveDate: safeText(data.lastActiveDate, '', 10),
    totalDhikrCount: safeNumber(data.totalDhikrCount, 0, 0, Number.MAX_SAFE_INTEGER),
    completedLessonIds: [...new Set(completed)],
    dailyGoalMinutes: safeNumber(data.dailyGoalMinutes, DEFAULT_STATS.dailyGoalMinutes, 1, 1440),
    lastReadSurahNumber: safeNumber(data.lastReadSurahNumber, 1, 1, 114),
    lastReadAyahNumber: safeNumber(data.lastReadAyahNumber, 1, 1, 300),
    lastReadSurahName: safeText(data.lastReadSurahName, DEFAULT_STATS.lastReadSurahName, 100)
  };
};

const normalizeDhikrs = (value: unknown): DhikrItem[] => {
  if (!Array.isArray(value)) return INITIAL_DHIKRS;
  const valid = value.filter(isRecord).slice(0, 500).map((item, index): DhikrItem => ({
    id: safeText(item.id, `dhikr_recovered_${index}`, 100),
    title: safeText(item.title, 'İsimsiz zikir', 120),
    arabic: safeText(item.arabic, 'ذِكْر', 1000),
    transcription: safeText(item.transcription, '', 500),
    meaning: safeText(item.meaning, '', 2000),
    targetCount: safeNumber(item.targetCount, 33, 1, 100000),
    currentCount: safeNumber(item.currentCount, 0, 0, Number.MAX_SAFE_INTEGER),
    totalCount: safeNumber(item.totalCount, 0, 0, Number.MAX_SAFE_INTEGER),
    virtue: safeText(item.virtue, '', 2000)
  })).filter(item => item.id && item.title);
  return valid.length ? valid : INITIAL_DHIKRS;
};

const normalizeFavorites = (value: unknown): FavoriteItem[] => {
  if (!Array.isArray(value)) return [];
  const types = ['ayah', 'hadith', 'lesson', 'concept', 'wisdom'];
  return value.filter(isRecord).slice(0, 10000).map((item, index) => ({
    id: safeText(item.id, `fav_recovered_${index}`, 100),
    type: (types.includes(String(item.type)) ? item.type : 'ayah') as FavoriteItem['type'],
    targetId: safeText(item.targetId, '', 200),
    title: safeText(item.title, 'Favori', 300),
    arabic: safeText(item.arabic, '', 2000),
    preview: safeText(item.preview, '', 2000),
    sourceInfo: safeText(item.sourceInfo, '', 500),
    addedAt: safeText(item.addedAt, new Date(0).toISOString(), 40)
  })).filter(item => item.id && item.targetId && item.title);
};

const NOTE_TAGS: PersonalNote['tag'][] = ['Ayet', 'Hadis', 'Ders', 'Kavram', 'Tefekkür', 'Genel'];
const normalizeNotes = (value: unknown): PersonalNote[] => {
  if (!Array.isArray(value)) return [];
  return value.filter(isRecord).slice(0, 10000).map((item, index) => {
    const now = new Date().toISOString();
    const tag = NOTE_TAGS.includes(item.tag as PersonalNote['tag']) ? item.tag as PersonalNote['tag'] : 'Genel';
    return {
      id: safeText(item.id, `note_recovered_${index}`, 100),
      title: safeText(item.title, 'Başlıksız not', 300),
      content: safeText(item.content, '', MAX_TEXT_LENGTH),
      tag,
      referenceTitle: safeText(item.referenceTitle, '', 300),
      createdAt: safeText(item.createdAt, now, 40),
      updatedAt: safeText(item.updatedAt, now, 40)
    };
  }).filter(item => item.id && item.title);
};

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  discoverSubTab: DiscoverSubTab;
  setDiscoverSubTab: (subTab: DiscoverSubTab) => void;

  // Quran state
  activeQuranSurahNumber: number;
  setActiveQuranSurahNumber: (surahNumber: number) => void;
  jumpToQuranSurah: (surahNumber: number, ayahNumber?: number) => void;

  // Academy state
  selectedAcademyLessonId: string | null;
  setSelectedAcademyLessonId: (lessonId: string | null) => void;

  // Favorites
  favorites: FavoriteItem[];
  addFavorite: (item: Omit<FavoriteItem, 'id' | 'addedAt'>) => void;
  removeFavorite: (targetId: string) => void;
  isFavorite: (targetId: string) => boolean;

  // Notes
  notes: PersonalNote[];
  addNote: (note: Omit<PersonalNote, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, title: string, content: string) => void;
  deleteNote: (id: string) => void;

  // Dhikr
  dhikrs: DhikrItem[];
  activeDhikrIndex: number;
  setActiveDhikrIndex: (index: number) => void;
  incrementDhikr: () => void;
  decrementDhikr: () => void;
  resetDhikr: () => void;
  setDhikrTarget: (target: number) => void;
  addCustomDhikr: (title: string, arabic: string, transcription: string, meaning: string, targetCount: number) => void;

  // Stats & Progress
  userStats: UserStats;
  toggleLessonCompleted: (lessonId: string) => void;
  setLastReadAyah: (surahNumber: number, ayahNumber: number, surahName: string) => void;
  updateDailyGoalMinutes: (minutes: number) => void;

  // Settings
  appSettings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  resetAllUserData: () => void;
  exportUserData: () => { schemaVersion: number; exportedAt: string; userStats: UserStats; favorites: FavoriteItem[]; notes: PersonalNote[]; dhikrs: DhikrItem[]; appSettings: AppSettings };
  importUserData: (raw: unknown) => { ok: boolean; message: string };

  // Modals
  isDhikrModalOpen: boolean;
  setIsDhikrModalOpen: (open: boolean) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  noteModalTarget: { title: string; tag: PersonalNote['tag']; referenceTitle?: string } | null;
  openNoteModalFor: (target: { title: string; tag: PersonalNote['tag']; referenceTitle?: string } | null) => void;
  closeNoteModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [discoverSubTab, setDiscoverSubTab] = useState<DiscoverSubTab>('hadith');
  const [activeQuranSurahNumber, setActiveQuranSurahNumber] = useState<number>(1);
  const [selectedAcademyLessonId, setSelectedAcademyLessonId] = useState<string | null>(null);

  // Modals
  const [isDhikrModalOpen, setIsDhikrModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [noteModalTarget, setNoteModalTarget] = useState<{ title: string; tag: PersonalNote['tag']; referenceTitle?: string } | null>(null);

  // Persisted state initializers: parse defensively and normalize older/corrupt values.
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() =>
    normalizeFavorites(readStoredValue('irfan_favorites'))
  );

  const [notes, setNotes] = useState<PersonalNote[]>(() =>
    normalizeNotes(readStoredValue('irfan_notes'))
  );

  const [dhikrs, setDhikrs] = useState<DhikrItem[]>(() =>
    normalizeDhikrs(readStoredValue('irfan_dhikrs'))
  );

  const [activeDhikrIndex, setActiveDhikrIndex] = useState<number>(0);

  const [userStats, setUserStats] = useState<UserStats>(() =>
    normalizeStats(readStoredValue('irfan_stats'))
  );

  const [appSettings, setAppSettings] = useState<AppSettings>(() =>
    normalizeSettings(readStoredValue('irfan_settings'))
  );

  // Save to localStorage when state changes
  useEffect(() => {
    persistValue('irfan_favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    persistValue('irfan_notes', notes);
  }, [notes]);

  useEffect(() => {
    persistValue('irfan_dhikrs', dhikrs);
  }, [dhikrs]);

  useEffect(() => {
    persistValue('irfan_stats', userStats);
  }, [userStats]);

  useEffect(() => {
    persistValue('irfan_settings', appSettings);
    try {
      // Apply dark mode class to root HTML
      const root = document.documentElement;
      if (appSettings.theme === 'dark') {
        root.classList.add('dark');
      } else if (appSettings.theme === 'light') {
        root.classList.remove('dark');
      } else {
        // System preference
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    } catch (e) { console.error(e); }
  }, [appSettings]);

  useEffect(() => {
    if (appSettings.theme !== 'system' || typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => document.documentElement.classList.toggle('dark', media.matches);
    apply();
    media.addEventListener?.('change', apply);
    return () => media.removeEventListener?.('change', apply);
  }, [appSettings.theme]);

  // Favorites handlers
  const addFavorite = (item: Omit<FavoriteItem, 'id' | 'addedAt'>) => {
    if (favorites.some(f => f.targetId === item.targetId)) return;
    const newFav: FavoriteItem = {
      ...item,
      id: createId("fav"),
      addedAt: new Date().toISOString()
    };
    setFavorites(prev => [newFav, ...prev]);
  };

  const removeFavorite = (targetId: string) => {
    setFavorites(prev => prev.filter(f => f.targetId !== targetId));
  };

  const isFavorite = (targetId: string) => {
    return favorites.some(f => f.targetId === targetId);
  };

  // Notes handlers
  const addNote = (note: Omit<PersonalNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newNote: PersonalNote = {
      ...note,
      title: safeText(note.title, 'Başlıksız not', 300) || 'Başlıksız not',
      content: safeText(note.content, '', MAX_TEXT_LENGTH),
      id: createId("note"),
      createdAt: now,
      updatedAt: now
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, title: string, content: string) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, title, content, updatedAt: new Date().toISOString() } : n));
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  // Dhikr actions
  const triggerHaptic = () => {
    if (appSettings.hapticFeedback && typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(25);
      } catch {
        // Ignore if unsupported
      }
    }
  };

  const incrementDhikr = () => {
    const current = dhikrs[activeDhikrIndex];
    if (!current) return;
    triggerHaptic();
    setDhikrs(prev => prev.map((item, index) => index === activeDhikrIndex
      ? { ...item, currentCount: Math.min(Number.MAX_SAFE_INTEGER, item.currentCount + 1), totalCount: Math.min(Number.MAX_SAFE_INTEGER, item.totalCount + 1) }
      : item));
    if (current.currentCount + 1 === current.targetCount && appSettings.hapticFeedback && typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate([40, 60, 40]); } catch { /* vibration is optional */ }
    }
    const today = new Date();
    const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    setUserStats(prev => {
      if (prev.lastActiveDate === todayKey) return { ...prev, totalDhikrCount: Math.min(Number.MAX_SAFE_INTEGER, prev.totalDhikrCount + 1) };
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      const streakDays = prev.lastActiveDate === yesterdayKey ? prev.streakDays + 1 : 1;
      return { ...prev, totalDhikrCount: Math.min(Number.MAX_SAFE_INTEGER, prev.totalDhikrCount + 1), lastActiveDate: todayKey, streakDays };
    });
  };

  const decrementDhikr = () => {
    setDhikrs(prev => prev.map((item, index) => index === activeDhikrIndex
      ? { ...item, currentCount: Math.max(0, item.currentCount - 1) }
      : item));
  };

  const resetDhikr = () => {
    setDhikrs(prev => prev.map((item, index) => index === activeDhikrIndex ? { ...item, currentCount: 0 } : item));
  };

  const setDhikrTarget = (target: number) => {
    const safeTarget = Number.isFinite(target) ? Math.max(1, Math.min(100000, Math.floor(target))) : 33;
    setDhikrs(prev => prev.map((item, index) => index === activeDhikrIndex ? { ...item, targetCount: safeTarget } : item));
  };

  const addCustomDhikr = (title: string, arabic: string, transcription: string, meaning: string, targetCount: number) => {
    const safeTitle = safeText(title, '', 120);
    if (!safeTitle) return;
    const newDhikr: DhikrItem = {
      id: createId("dhikr_custom"),
      title: safeTitle,
      arabic: safeText(arabic, "ذِكْر", 1000) || "ذِكْر",
      transcription: safeText(transcription, safeTitle, 500),
      meaning: safeText(meaning, safeTitle, 2000),
      targetCount: safeNumber(targetCount, 33, 1, 100000),
      currentCount: 0,
      totalCount: 0
    };
    setActiveDhikrIndex(dhikrs.length);
    setDhikrs(prev => [...prev, newDhikr]);
  };

  // Lesson & Reading Progress
  const toggleLessonCompleted = (lessonId: string) => {
    if (typeof lessonId !== 'string' || !lessonId.trim()) return;
    setUserStats(prev => {
      const completedLessonIds = Array.isArray(prev.completedLessonIds) ? prev.completedLessonIds : [];
      const isAlready = completedLessonIds.includes(lessonId);
      const next = isAlready
        ? completedLessonIds.filter(id => id !== lessonId)
        : [...completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: next
      };
    });
  };

  const setLastReadAyah = (surahNumber: number, ayahNumber: number, surahName: string) => {
    const safeSurah = safeNumber(surahNumber, 1, 1, 114);
    const safeAyah = safeNumber(ayahNumber, 1, 1, 300);
    setUserStats(prev => ({
      ...prev,
      lastReadSurahNumber: safeSurah,
      lastReadAyahNumber: safeAyah,
      lastReadSurahName: safeText(surahName, 'Fâtiha', 100)
    }));
  };

  const updateDailyGoalMinutes = (minutes: number) => {
    const safeMinutes = safeNumber(minutes, DEFAULT_STATS.dailyGoalMinutes, 1, 1440);
    setUserStats(prev => ({ ...prev, dailyGoalMinutes: safeMinutes }));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setAppSettings(prev => normalizeSettings({ ...prev, ...newSettings }));
  };

  const exportUserData = () => ({
    schemaVersion: STORAGE_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    userStats, favorites, notes, dhikrs, appSettings
  });

  const importUserData = (raw: unknown): { ok: boolean; message: string } => {
    if (!isRecord(raw)) return { ok: false, message: 'Yedek dosyası geçerli bir nesne değil.' };
    if (raw.schemaVersion !== STORAGE_SCHEMA_VERSION ||
        !Array.isArray(raw.favorites) || !Array.isArray(raw.notes) ||
        !Array.isArray(raw.dhikrs) || !isRecord(raw.userStats) || !isRecord(raw.appSettings)) {
      return { ok: false, message: 'Yedek biçimi tanınmadı veya zorunlu alanlar eksik. Mevcut veriler değiştirilmedi.' };
    }

    const rawFavorites = raw.favorites;
    const rawNotes = raw.notes;
    const rawDhikrs = raw.dhikrs;
    const rawStats = raw.userStats;
    const rawSettings = raw.appSettings;

    // Validate before changing any state so a bad backup cannot partially replace user data.
    const favoritesValid = rawFavorites.length <= 10000 && rawFavorites.every((item) =>
      isRecord(item) && typeof item.id === 'string' && typeof item.targetId === 'string' &&
      typeof item.title === 'string' && typeof item.preview === 'string' &&
      ['ayah', 'hadith', 'lesson', 'concept', 'wisdom'].includes(String(item.type))
    );
    const notesValid = rawNotes.length <= 10000 && rawNotes.every((item) =>
      isRecord(item) && typeof item.id === 'string' && typeof item.title === 'string' &&
      typeof item.content === 'string' && NOTE_TAGS.includes(item.tag as PersonalNote['tag'])
    );
    const dhikrsValid = rawDhikrs.length > 0 && rawDhikrs.length <= 500 &&
      rawDhikrs.every((item) => isRecord(item) && typeof item.id === 'string' &&
        typeof item.title === 'string' && typeof item.targetCount === 'number' &&
        Number.isFinite(item.targetCount) && item.targetCount >= 1 && item.targetCount <= 100000 &&
        typeof item.currentCount === 'number' && Number.isFinite(item.currentCount) &&
        item.currentCount >= 0 && typeof item.totalCount === 'number' &&
        Number.isFinite(item.totalCount) && item.totalCount >= 0);
    const statsValid = Array.isArray(rawStats.completedLessonIds) &&
      rawStats.completedLessonIds.length <= 5000 &&
      rawStats.completedLessonIds.every(id => typeof id === 'string') &&
      typeof rawStats.totalDhikrCount === 'number' && Number.isFinite(rawStats.totalDhikrCount) && rawStats.totalDhikrCount >= 0 &&
      typeof rawStats.dailyGoalMinutes === 'number' && Number.isFinite(rawStats.dailyGoalMinutes) && rawStats.dailyGoalMinutes >= 1 && rawStats.dailyGoalMinutes <= 1440 &&
      typeof rawStats.streakDays === 'number' && Number.isFinite(rawStats.streakDays) && rawStats.streakDays >= 0 &&
      typeof rawStats.lastReadSurahNumber === 'number' && Number.isFinite(rawStats.lastReadSurahNumber) &&
      rawStats.lastReadSurahNumber >= 1 && rawStats.lastReadSurahNumber <= 114 &&
      typeof rawStats.lastReadAyahNumber === 'number' && Number.isFinite(rawStats.lastReadAyahNumber) &&
      rawStats.lastReadAyahNumber >= 1 && rawStats.lastReadAyahNumber <= 300;
    const settingsValid = ['light', 'dark', 'system'].includes(String(rawSettings.theme)) &&
      ['small', 'medium', 'large', 'xlarge'].includes(String(rawSettings.fontSize)) &&
      ['cream', 'white', 'dark'].includes(String(rawSettings.quranTheme)) &&
      typeof rawSettings.hapticFeedback === 'boolean' && typeof rawSettings.audioAutoPlay === 'boolean' &&
      typeof rawSettings.showArabicText === 'boolean' && typeof rawSettings.showFootnotes === 'boolean';

    if (!favoritesValid || !notesValid || !dhikrsValid || !statsValid || !settingsValid) {
      return { ok: false, message: 'Yedek dosyasında geçersiz veya sınır dışı alanlar var. Mevcut veriler değiştirilmedi.' };
    }

    try {
      const nextFavorites = normalizeFavorites(rawFavorites);
      const nextNotes = normalizeNotes(rawNotes);
      const nextDhikrs = normalizeDhikrs(rawDhikrs);
      const nextStats = normalizeStats(rawStats);
      const nextSettings = normalizeSettings(rawSettings);

      // Check storage quota before committing state; current data remains untouched on failure.
      const entries: [string, unknown][] = [
        ['irfan_favorites', nextFavorites],
        ['irfan_notes', nextNotes],
        ['irfan_dhikrs', nextDhikrs],
        ['irfan_stats', nextStats],
        ['irfan_settings', nextSettings]
      ];
      const previous = entries.map(([key]) => [key, localStorage.getItem(key)] as const);
      try {
        for (const [key, value] of entries) localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        for (const [key, value] of previous) {
          try {
            if (value === null) localStorage.removeItem(key);
            else localStorage.setItem(key, value);
          } catch { /* Best-effort rollback. */ }
        }
        throw error;
      }

      setFavorites(nextFavorites);
      setNotes(nextNotes);
      setDhikrs(nextDhikrs);
      setUserStats(nextStats);
      setAppSettings(nextSettings);
      setActiveDhikrIndex(0);
      return { ok: true, message: 'Yedek başarıyla doğrulandı ve geri yüklendi.' };
    } catch (error) {
      console.error('Yedek içe aktarılamadı.', error);
      return { ok: false, message: 'Yedek kaydedilemedi. Depolama alanını kontrol edin; mevcut veriler korunmaya çalışıldı.' };
    }
  };

  const resetAllUserData = () => {
    try {
      ['irfan_favorites', 'irfan_notes', 'irfan_dhikrs', 'irfan_stats', 'irfan_settings']
        .forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error('Kayıtlı veriler temizlenemedi.', error);
    }
    setFavorites([]);
    setNotes([]);
    setDhikrs(INITIAL_DHIKRS);
    setUserStats(DEFAULT_STATS);
    setAppSettings(DEFAULT_SETTINGS);
  };

  const jumpToQuranSurah = (surahNumber: number, ayahNumber?: number) => {
    const safeSurahNumber = safeNumber(surahNumber, 1, 1, 114);
    const safeAyahNumber = ayahNumber === undefined ? undefined : safeNumber(ayahNumber, 1, 1, 300);
    setActiveQuranSurahNumber(safeSurahNumber);
    setActiveTab('quran');
    if (safeAyahNumber) {
      setTimeout(() => {
        const el = document.getElementById(`ayah-${safeSurahNumber}-${safeAyahNumber}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  const openNoteModalFor = (target: { title: string; tag: PersonalNote['tag']; referenceTitle?: string } | null) => {
    setNoteModalTarget(target);
  };

  const closeNoteModal = () => {
    setNoteModalTarget(null);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        discoverSubTab,
        setDiscoverSubTab,
        activeQuranSurahNumber,
        setActiveQuranSurahNumber,
        jumpToQuranSurah,
        selectedAcademyLessonId,
        setSelectedAcademyLessonId,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        notes,
        addNote,
        updateNote,
        deleteNote,
        dhikrs,
        activeDhikrIndex,
        setActiveDhikrIndex,
        incrementDhikr,
        decrementDhikr,
        resetDhikr,
        setDhikrTarget,
        addCustomDhikr,
        userStats,
        toggleLessonCompleted,
        setLastReadAyah,
        updateDailyGoalMinutes,
        appSettings,
        updateSettings,
        resetAllUserData,
        exportUserData,
        importUserData,
        isDhikrModalOpen,
        setIsDhikrModalOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        noteModalTarget,
        openNoteModalFor,
        closeNoteModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
