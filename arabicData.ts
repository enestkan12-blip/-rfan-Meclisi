import { ArabicLetter } from '../types';

export const ARABIC_ALPHABET: ArabicLetter[] = [
  { id: "al_1", letter: "ا", name: "Elif", transcription: "E / A", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", exampleWord: "أَمَل", exampleMeaning: "Ümit / Emel" },
  { id: "al_2", letter: "ب", name: "Bâ", transcription: "B", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", exampleWord: "بَيْت", exampleMeaning: "Ev" },
  { id: "al_3", letter: "ت", name: "Tâ", transcription: "T", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", exampleWord: "تَمْر", exampleMeaning: "Hurma" },
  { id: "al_4", letter: "ث", name: "Sâ (Peltik)", transcription: "Se", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", exampleWord: "ثَمَر", exampleMeaning: "Meyve" },
  { id: "al_5", letter: "ج", name: "Cîm", transcription: "C", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", exampleWord: "جَنَّة", exampleMeaning: "Cennet / Bahçe" },
  { id: "al_6", letter: "ح", name: "Hâ (Noktasız)", transcription: "H (Boğazdan)", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", exampleWord: "حَمْد", exampleMeaning: "Övgü / Şükür" },
  { id: "al_7", letter: "خ", name: "Hı (Hırıltılı)", transcription: "Hı", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", exampleWord: "خَيْر", exampleMeaning: "Hayır / İyilik" },
  { id: "al_8", letter: "د", name: "Dâl", transcription: "D", isolated: "د", initial: "د", medial: "ـد", final: "ـد", exampleWord: "دِين", exampleMeaning: "Din / İnanç" },
  { id: "al_9", letter: "ذ", name: "Zâl (Peltik)", transcription: "Z (Peltik)", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", exampleWord: "ذِكْر", exampleMeaning: "Hatırlama / Anma" },
  { id: "al_10", letter: "ر", name: "Râ", transcription: "R", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", exampleWord: "رَحْمَة", exampleMeaning: "Merhamet" },
  { id: "al_11", letter: "ز", name: "Zâ (Keskin)", transcription: "Z", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", exampleWord: "زَكَاة", exampleMeaning: "Zekat / Arınma" },
  { id: "al_12", letter: "س", name: "Sîn", transcription: "S", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", exampleWord: "سَلَام", exampleMeaning: "Esenlik / Barış" },
  { id: "al_13", letter: "ش", name: "Şîn", transcription: "Ş", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", exampleWord: "شُكْر", exampleMeaning: "Teşekkür / Minnet" },
  { id: "al_14", letter: "ص", name: "Sâd (Kalın)", transcription: "S (Dolgun)", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", exampleWord: "صَبْر", exampleMeaning: "Sabır / Direnç" },
  { id: "al_15", letter: "ض", name: "Dâd (Kalın)", transcription: "D (Yan diş)", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", exampleWord: "ضِيَاء", exampleMeaning: "Işık / Aydınlık" },
  { id: "al_16", letter: "ط", name: "Tâ (Kalın)", transcription: "T (Kalın)", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", exampleWord: "طَيِّب", exampleMeaning: "Temiz / Helal" },
  { id: "al_17", letter: "ظ", name: "Zâ (Peltik Kalın)", transcription: "Z (Kalın peltik)", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", exampleWord: "ظِلّ", exampleMeaning: "Gölge" },
  { id: "al_18", letter: "ع", name: "Ayn", transcription: "'A (Gırtlaktan)", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", exampleWord: "عِلْم", exampleMeaning: "İlim / Bilgi" },
  { id: "al_19", letter: "غ", name: "Gayn", transcription: "G / Ğ", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", exampleWord: "غَفُور", exampleMeaning: "Çok Bağışlayan" },
  { id: "al_20", letter: "ف", name: "Fâ", transcription: "F", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", exampleWord: "فَجْر", exampleMeaning: "Tan Vakti / Şafak" },
  { id: "al_21", letter: "ق", name: "Kâf (Kalın)", transcription: "K (Kalın dip)", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", exampleWord: "قَلْب", exampleMeaning: "Gönül / Yürek" },
  { id: "al_22", letter: "ك", name: "Kef (İnce)", transcription: "K", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", exampleWord: "كِتَاب", exampleMeaning: "Kitap / Yazı" },
  { id: "al_23", letter: "ل", name: "Lâm", transcription: "L", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", exampleWord: "لَيْل", exampleMeaning: "Gece" },
  { id: "al_24", letter: "م", name: "Mîm", transcription: "M", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", exampleWord: "مَسْجِد", exampleMeaning: "Mescid / Secde yeri" },
  { id: "al_25", letter: "ن", name: "Nûn", transcription: "N", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", exampleWord: "نُور", exampleMeaning: "Işık / Nûr" },
  { id: "al_26", letter: "و", name: "Vâv", transcription: "V / W", isolated: "و", initial: "و", medial: "ـو", final: "ـو", exampleWord: "وَقْت", exampleMeaning: "Zaman / Vakit" },
  { id: "al_27", letter: "ه", name: "He", transcription: "H (Hafif)", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", exampleWord: "هُدًى", exampleMeaning: "Hidayet / Rehberlik" },
  { id: "al_28", letter: "ي", name: "Yâ", transcription: "Y", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", exampleWord: "يَقِين", exampleMeaning: "Kesin Bilgi / İman" }
];

export interface QuranicWord {
  id: string;
  arabic: string;
  transcription: string;
  meaning: string;
  frequencyInQuran: string;
  exampleAyahSnippet: string;
}

export const QURANIC_WORDS: QuranicWord[] = [
  { id: "qw1", arabic: "اللَّه", transcription: "Allah", meaning: "Kâinatın Yaratıcısı ve Yegâne Rabbi", frequencyInQuran: "2699 kez", exampleAyahSnippet: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
  { id: "qw2", arabic: "رَبّ", transcription: "Rabb", meaning: "Terbiye eden, sahipsiz bırakmayan, efendi", frequencyInQuran: "975 kez", exampleAyahSnippet: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
  { id: "qw3", arabic: "قَوْل / قَالَ", transcription: "Kavil / Kâle", meaning: "Söz / Dedi", frequencyInQuran: "1722 kez", exampleAyahSnippet: "قُلْ هُوَ اللَّهُ أَحَدٌ" },
  { id: "qw4", arabic: "عِلْم", transcription: "'İlim", meaning: "Bilgi, hakikati idrak etme", frequencyInQuran: "854 kez", exampleAyahSnippet: "وَقُل رَّبِّ زِدْنِي عِلْمًا" },
  { id: "qw5", arabic: "إِيمَان / آمَنَ", transcription: "Îmân / Âmene", meaning: "İnanmak, güven duymak", frequencyInQuran: "879 kez", exampleAyahSnippet: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ" },
  { id: "qw6", arabic: "قَلْب / قُلُوب", transcription: "Kalb / Kulûb", meaning: "Yürek, can evi, basiret mahalli", frequencyInQuran: "168 kez", exampleAyahSnippet: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ" },
  { id: "qw7", arabic: "حَقّ", transcription: "Hakk", meaning: "Gerçek, doğru, adalet, sabit olan", frequencyInQuran: "287 kez", exampleAyahSnippet: "وَتَوَاصَوْا بِالْحَقِّ" },
  { id: "qw8", arabic: "صَبْر", transcription: "Sabr", meaning: "Direnç, metanet, nefsi günahtan tutmak", frequencyInQuran: "103 kez", exampleAyahSnippet: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ" }
];
