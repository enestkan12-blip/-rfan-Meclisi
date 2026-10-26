import { Hadith } from '../types';

export const HADITH_LIST: Hadith[] = [
  {
    id: "hadith_1",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: "Ameller ancak niyetlere göredir ve her bir kimse için niyet ettiği şey vardır.",
    sourceBook: "Sahih-i Buhârî (Bed'ü'l-Vahy, 1) & Sahih-i Müslim (İmâre, 155)",
    hadithNumber: "Buhârî No: 1, Müslim No: 1907",
    authenticity: "Sahih (Müttefekun Aleyh)",
    narrator: "Hz. Ömer b. el-Hattâb (r.a.)",
    topicTags: ["Niyet & İhlas", "İbadet", "Temel İlimler"]
  },
  {
    id: "hadith_2",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    translation: "Kim ilim tahsil etmek için bir yola girerse, Allah ona cennete giden yolu kolaylaştırır.",
    sourceBook: "Sahih-i Müslim (Zikr, 38) & Sünen-i Ebî Dâvûd (İlim, 1)",
    hadithNumber: "Müslim No: 2699",
    authenticity: "Sahih",
    narrator: "Ebû Hüreyre (r.a.)",
    topicTags: ["İlim Öğrenme", "Maneviyat", "Cennet Yolu"]
  },
  {
    id: "hadith_3",
    arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الأَخْلَاقِ",
    translation: "Ben ancak güzel ahlakı tamamlamak için gönderildim.",
    sourceBook: "el-Muvatta (Hüsnü'l-Huluk, 8) & el-Müsned (Ahmed b. Hanbel)",
    hadithNumber: "Muvatta No: 1614, Müsned No: 8952",
    authenticity: "Sahih (Hâkim ve Zehebî onaylı)",
    narrator: "Ebû Hüreyre (r.a.)",
    topicTags: ["Güzel Ahlak", "Siyer", "Karakter"]
  },
  {
    id: "hadith_4",
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation: "Sizden biriniz, kendisi için arzu ettiğini mümin kardeşi için de arzu etmedikçe (kâmil manada) iman etmiş olmaz.",
    sourceBook: "Sahih-i Buhârî (Îmân, 7) & Sahih-i Müslim (Îmân, 71)",
    hadithNumber: "Buhârî No: 13, Müslim No: 45",
    authenticity: "Sahih (Müttefekun Aleyh)",
    narrator: "Enes b. Mâlik (r.a.)",
    topicTags: ["Kardeşlik", "Merhamet", "İman Esasları"]
  },
  {
    id: "hadith_5",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    translation: "Merhamet edenlere Rahmân olan Allah da merhamet eder. Siz yeryüzündekilere merhamet edin ki göktekiler de size merhamet etsin.",
    sourceBook: "Sünen-i Ebî Dâvûd (Edeb, 58) & Sünen-i Tirmizî (Birr, 16)",
    hadithNumber: "Tirmizî No: 1924 (Hadîs-i Hasen-Sahih)",
    authenticity: "Sahih",
    narrator: "Abdullah b. Amr b. el-Âs (r.a.)",
    topicTags: ["Merhamet", "Şefkat", "İlahi Rahmet"]
  },
  {
    id: "hadith_6",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    translation: "Allah'a ve ahiret gününe iman eden kimse, ya hayır söylesin ya da sussun.",
    sourceBook: "Sahih-i Buhârî (Edeb, 31) & Sahih-i Müslim (Îmân, 74)",
    hadithNumber: "Buhârî No: 6018, Müslim No: 47",
    authenticity: "Sahih (Müttefekun Aleyh)",
    narrator: "Ebû Hüreyre (r.a.)",
    topicTags: ["Dilin Muhafazası", "Güzel Ahlak", "Huzur"]
  },
  {
    id: "hadith_7",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    translation: "Müslüman, diğer Müslümanların elinden ve dilinden güvende olduğu kimsedir.",
    sourceBook: "Sahih-i Buhârî (Îmân, 4) & Sahih-i Müslim (Îmân, 64)",
    hadithNumber: "Buhârî No: 10, Müslim No: 40",
    authenticity: "Sahih (Müttefekun Aleyh)",
    narrator: "Abdullah b. Amr (r.a.)",
    topicTags: ["Güvenilirlik", "Kul Hakkı", "Güzel Ahlak"]
  },
  {
    id: "hadith_8",
    arabic: "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ؛ إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
    translation: "Müminin durumu ne kadar hayret vericidir! Zira onun her işi hayırdır. Kendisine bir sevinç ve bolluk isabet etse şükreder, bu onun için hayır olur. Bir darlık veya sıkıntı isabet etse sabreder, bu da onun için hayır olur.",
    sourceBook: "Sahih-i Müslim (Zühd, 64)",
    hadithNumber: "Müslim No: 2999",
    authenticity: "Sahih",
    narrator: "Suheyb b. Sinân (r.a.)",
    topicTags: ["Sabır & Şükür", "Tevekkül", "Gönül Huzuru"]
  },
  {
    id: "hadith_9",
    arabic: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    translation: "Dile hafif, mizanda ağır, Rahmân'a çok sevimli iki kelime vardır: 'Sübhânallâhi ve bi-hamdihî, Sübhânallâhi'l-Azîm' (Allah'ı hamd ile tesbih ederim, Yüce Allah her türlü eksiklikten münezzehtir).",
    sourceBook: "Sahih-i Buhârî (Daavât, 65) & Sahih-i Müslim (Zikr, 31)",
    hadithNumber: "Buhârî No: 6406, Müslim No: 2694",
    authenticity: "Sahih (Buhârî'nin son hadisi)",
    narrator: "Ebû Hüreyre (r.a.)",
    topicTags: ["Zikir & Tesbih", "Mizan", "Faziletli Ameller"]
  },
  {
    id: "hadith_10",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    translation: "Nerede olursan ol Allah'tan sakın (takvâ üzere ol). Bir kötülüğün ardından hemen bir iyilik yap ki onu silsin. Ve insanlara karşı güzel bir ahlakla muamele et.",
    sourceBook: "Sünen-i Tirmizî (Birr, 55)",
    hadithNumber: "Tirmizî No: 1987",
    authenticity: "Hasen-Sahih",
    narrator: "Ebû Zer el-Gıfârî ve Muâz b. Cebel (r.a.)",
    topicTags: ["Takva", "Tevbe", "Güzel Ahlak"]
  }
];
