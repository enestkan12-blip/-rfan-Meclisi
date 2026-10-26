import { IslamicConcept } from '../types';

export const ISLAMIC_CONCEPTS: IslamicConcept[] = [
  {
    id: "concept_1",
    termTr: "Takvâ",
    termAr: "التقوى",
    shortDef: "Allah'ın emir ve yasaklarına titizlikle riayet ederek O'nun rızasını kaybetmekten sakınmak, günahlardan korunma kalkanı kuşanmak.",
    fullDef: "Sözlükte 'korunmak, sakınmak, himaye altına girmek' manasına gelen vikaye kökünden türemiştir. Terim olarak; kulun, kendisini Allah'ın gazabından ve azabından koruyacak salih amellere sarılması ve haramlardan titizlikle kaçınmasıdır. Hz. Ömer takvayı, 'dikenli bir yolda eteklerini toplayarak dikkatle yürümeye' benzetmiştir. Kur'an'da üstünlüğün tek ölçüsü takva olarak bildirilmiştir (Hucurât 13).",
    quranReferences: [
      { surahName: "Hucurât", ayahNumber: 13, text: "Şüphesiz Allah katında en üstün olanınız, O'na karşı takvada en ileri olanınızdır." },
      { surahName: "Bakara", ayahNumber: 197, text: "Ahiret için azık edinin; kuşkusuz azıkların en hayırlısı takvâdır." }
    ],
    hadithReference: "Nerede olursan ol Allah'a karşı takva sahibi ol! (Tirmizî, Birr, 55)",
    source: "TDV İslâm Ansiklopedisi, Cilt 39, s. 484-486; Râgıb el-İsfahânî, el-Müfredât.",
    category: "Ahlak"
  },
  {
    id: "concept_2",
    termTr: "İhlâs",
    termAr: "الإخلاص",
    shortDef: "İbadet ve hayırları yalnızca Allah'ın rızasını gözeterek, gösterişten ve menfaatten arındırarak samimiyetle yapmak.",
    fullDef: "Sözlükte 'saf ve katışıksız olmak, kurtulmak' manasına gelir. Dinde ise ibadetleri halkın görmesinden, övgüsünden veya dünyevi bir menfaatten bütünüyle temizleyip yalnız Hak Teâlâ'ya has kılmaktır. İhlas, amelin ruhudur; ruhu olmayan beden nasıl cansız ise ihlassız amel de Allah katında öyle hükümsüzdür.",
    quranReferences: [
      { surahName: "Beyyine", ayahNumber: 5, text: "Oysa onlara, dini yalnızca Allah'a has kılarak, hanîfler olarak O'na kulluk etmeleri emredilmişti." },
      { surahName: "Zümer", ayahNumber: 2, text: "Öyleyse dini yalnız Allah'a has kılarak O'na kulluk et!" }
    ],
    hadithReference: "Allah ancak kendi rızası için yapılan ve sadece O'nun rızası gözetilen amelleri kabul eder. (Nesâî, Cihâd, 24)",
    source: "İmam Gazzâlî, İhyâu Ulûmi'd-Dîn; TDV İslâm Ansiklopedisi, 'İhlas' maddesi.",
    category: "Ahlak"
  },
  {
    id: "concept_3",
    termTr: "İhsân",
    termAr: "الإحسان",
    shortDef: "Allah'ı görüyormuşçasına kulluk etmek; her işi en güzel, en yetkin ve en sağlam şekilde yerine getirmek.",
    fullDef: "Meşhur Cibrîl hadisinde Peygamberimiz ihsanı şöyle tarif buyurmuştur: 'İhsan, Allah'ı görüyormuş gibi O'na kulluk etmendir. Her ne kadar sen O'nu görmüyorsan da O seni muhakkak görmektedir.' İhsan hem içsel manevi murakabe şuurunu, hem de insanın çevresine, mahlukata ve işine karşı en mükemmel kaliteyi sergilemesini ifade eder.",
    quranReferences: [
      { surahName: "Nahl", ayahNumber: 90, text: "Şüphesiz Allah adaleti, ihsanı (iyilik ve güzelliği) ve akrabaya vermeyi emreder." },
      { surahName: "Bakara", ayahNumber: 195, text: "İhsanda bulunun (güzel davranın); şüphesiz Allah muhsinleri (ihsan sahiplerini) sever." }
    ],
    hadithReference: "Cibril Hadisi (Buhârî, Îmân, 37; Müslim, Îmân, 1)",
    source: "TDV İslâm Ansiklopedisi, Cilt 21, s. 544-547.",
    category: "Tasavvuf"
  },
  {
    id: "concept_4",
    termTr: "Tevekkül",
    termAr: "التوكل",
    shortDef: "Maddi ve manevi sebeplere eksiksiz sarıldıktan sonra neticeyi Allah'a havale edip O'na güvenmek.",
    fullDef: "Tevekkül tembellik, tedbirsizlik veya pasiflik değildir. Hakiki tevekkül; kulun elinden gelen bütün meşru gayret ve tedbiri gösterdikten sonra, kalbini sebeplere değil, sebepleri yaratan Yüce Allah'a bağlamasıdır. Hz. Peygamber, devesini salıverip 'Allah'a tevekkül ettim' diyen bedeviye: 'Önce deveni bağla, sonra tevekkül et!' buyurmuştur.",
    quranReferences: [
      { surahName: "Âl-i İmrân", ayahNumber: 159, text: "Bir kere de karar verip azmettin mi, artık Allah'a tevekkül et. Şüphesiz Allah tevekkül edenleri sever." },
      { surahName: "Talâk", ayahNumber: 3, text: "Kim Allah'a tevekkül ederse O, ona yeter." }
    ],
    hadithReference: "Deveni bağla, sonra tevekkül et! (Tirmizî, Kıyâmet, 60)",
    source: "Kuşeyrî, er-Risâle, Tevekkül Babı; TDV İslâm Ansiklopedisi, Cilt 41, s. 2-5.",
    category: "İtikat"
  },
  {
    id: "concept_5",
    termTr: "Hikmet",
    termAr: "الحكمة",
    shortDef: "Eşyanın hakikatini kavramak, ilim ile ameli birleştirmek ve her şeyi yerli yerine koyma basireti.",
    fullDef: "Hikmet; hakkı hak bilip ona tabi olmak, batılı batıl bilip ondan sakınmaktır. İlim akıl ile öğrenilir; hikmet ise ilmin takva ve kalp tezkiyesiyle yoğrulup derin bir idrak haline dönüşmesidir. Kur'an'da 'Kime hikmet verilmişse, ona pek çok hayır verilmiştir' (Bakara 269) buyrulur.",
    quranReferences: [
      { surahName: "Bakara", ayahNumber: 269, text: "O, hikmeti dilediğine verir. Kime hikmet verilmişse, şüphesiz ona çok hayır verilmiştir." }
    ],
    hadithReference: "Hikmetli söz müminin yitiğidir; nerede bulursa onu almaya en layık olan odur. (Tirmizî, İlim, 19)",
    source: "Râgıb el-İsfahânî, Müfredâtü Elfâzi'l-Kur'ân; TDV İslâm Ansiklopedisi, 'Hikmet' maddesi.",
    category: "Tefekkür"
  },
  {
    id: "concept_6",
    termTr: "Fıtrat",
    termAr: "الفطرة",
    shortDef: "İnsanın yaratılışında var olan saf, temiz, hakikati ve tevhidi kabul etmeye hazır öz yapı.",
    fullDef: "Allah Teâlâ'nın varlıkları yaratırken onların tabiatına yerleştirdiği varoluş kanunu ve insanın ruhuna nakşettiği iman istidadıdır. Her doğan çocuk İslam fıtratı üzere, temiz bir vicdanla ve Allah'ı tanıma potansiyeliyle dünyaya gelir.",
    quranReferences: [
      { surahName: "Rûm", ayahNumber: 30, text: "Sen yüzünü dosdoğru bu dine, Allah'ın insanları üzerinde yarattığı fıtrata çevir." }
    ],
    hadithReference: "Her doğan çocuk fıtrat üzere doğar. Sonra anne babası onu Yahudileştirir, Hristiyanlaştırır veya Mecusileştirir. (Buhârî, Cenâiz, 92; Müslim, Kader, 22)",
    source: "TDV İslâm Ansiklopedisi, Cilt 13, s. 47-49.",
    category: "İtikat"
  },
  {
    id: "concept_7",
    termTr: "Emanet",
    termAr: "الأمانة",
    shortDef: "İnsana koruması ve hakkını vermesi için tevdi edilen din, akıl, beden, tabiat ve ahit sorumluluğu.",
    fullDef: "Müminin en temel ahlak vasfıdır. Yalnızca başkasına ait eşyayı korumak değil; konuşulan sır, verilen söz, idari vazife, helal kazanç ve insanın bizzat kendi bedeni ve ruhu da Allah'ın bir emanetidir.",
    quranReferences: [
      { surahName: "Ahzâb", ayahNumber: 72, text: "Şüphesiz biz emaneti göklere, yere ve dağlara teklif ettik de onlar bunu yüklenmekten çekindiler... Onu insan yüklendi." }
    ],
    hadithReference: "Emanete riayeti olmayanın imanı (kâmil) değildir; ahdine vefası olmayanın da dini (kâmil) değildir. (Ahmed b. Hanbel, Müsned, III, 135)",
    source: "İbn Kesîr, Tefsîru'l-Kur'âni'l-Azîm; TDV İslâm Ansiklopedisi.",
    category: "Ahlak"
  }
];
