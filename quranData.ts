import { Surah, Ayah } from '../types';

// Helper to format EveryAyah MP3 URLs: e.g. 001001.mp3, 002255.mp3
export function getAyahAudioUrl(surahNumber: number, ayahNumber: number): string {
  const s = surahNumber.toString().padStart(3, '0');
  const a = ayahNumber.toString().padStart(3, '0');
  return `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`;
}

// Complete 114 Surahs Directory with verified details
export const SURAHS_INDEX: Omit<Surah, 'ayahs'>[] = [
  { number: 1, nameTr: "Fâtiha", nameAr: "الفاتحة", meaningTr: "Açılış, Başlangıç", versesCount: 7, revelationPlace: "Mekke", juzNumber: 1, pageNumber: 1, descriptionTr: "Kur'an-ı Kerim'in ilk suresidir. Her namazın her rekâtında okunan ve Ümmü'l-Kitap (Kitabın Anası) olarak bilinen mübarek suredir." },
  { number: 2, nameTr: "Bakara", nameAr: "البقرة", meaningTr: "Boğa / Sığır", versesCount: 286, revelationPlace: "Medine", juzNumber: 1, pageNumber: 2, descriptionTr: "Kur'an'ın en uzun suresidir. İslam hukukunun, ibadetlerin ve itikadın temellerini, Ayete'l-Kürsî ve Âmenerresûlü ayetlerini barındırır." },
  { number: 3, nameTr: "Âl-i İmrân", nameAr: "آل عمران", meaningTr: "İmran Ailesi", versesCount: 200, revelationPlace: "Medine", juzNumber: 3, pageNumber: 50, descriptionTr: "Hz. İsa'nın ve Hz. Meryem'in doğumunu, Uhud Gazvesini ve tevhidi detaylı anlatan suredir." },
  { number: 4, nameTr: "Nisâ", nameAr: "النساء", meaningTr: "Kadınlar", versesCount: 176, revelationPlace: "Medine", juzNumber: 4, pageNumber: 77, descriptionTr: "Toplum düzeni, aile hukuku, yetim hakları ve adaleti konu alan temel hukuk suresidir." },
  { number: 5, nameTr: "Mâide", nameAr: "المائدة", meaningTr: "Sofra", versesCount: 120, revelationPlace: "Medine", juzNumber: 6, pageNumber: 106, descriptionTr: "Helal ve haramlar, ahitler ve dinin kemale erdiğini bildiren ayeti içeren suredir." },
  { number: 6, nameTr: "En'âm", nameAr: "الأنعام", meaningTr: "Davarlar / Evcil Hayvanlar", versesCount: 165, revelationPlace: "Mekke", juzNumber: 7, pageNumber: 128, descriptionTr: "Tevhid inancını, Allah'ın varlığı ve birliğini gösteren kâinat delillerini konu edinir." },
  { number: 7, nameTr: "A'râf", nameAr: "الأعراف", meaningTr: "Yüksek Yerler / Sur", versesCount: 206, revelationPlace: "Mekke", juzNumber: 8, pageNumber: 151, descriptionTr: "Geçmiş peygamberlerin kıssalarını ve cennet ile cehennem arasındaki A'râf ehlini anlatır." },
  { number: 8, nameTr: "Enfâl", nameAr: "الأنفال", meaningTr: "Savaş Ganimetleri", versesCount: 75, revelationPlace: "Medine", juzNumber: 9, pageNumber: 177, descriptionTr: "Bedir Gazvesi ve zaferin manevi boyutlarını açıklar." },
  { number: 9, nameTr: "Tevbe", nameAr: "التوبة", meaningTr: "Tövbe", versesCount: 129, revelationPlace: "Medine", juzNumber: 10, pageNumber: 187, descriptionTr: "Başında besmele bulunmayan tek suredir; tövbe kapısının genişliğini ve münafıkların vasıflarını bildirir." },
  { number: 10, nameTr: "Yûnus", nameAr: "يونس", meaningTr: "Yunus Peygamber", versesCount: 109, revelationPlace: "Mekke", juzNumber: 11, pageNumber: 208, descriptionTr: "Yunus aleyhisselamın kavmi ve hidayet gerçeği üzerine odaklanır." },
  { number: 11, nameTr: "Hûd", nameAr: "هود", meaningTr: "Hud Peygamber", versesCount: 123, revelationPlace: "Mekke", juzNumber: 11, pageNumber: 221, descriptionTr: "Peygamber Efendimiz'in 'Beni Hûd suresi ihtiyarlattı' buyurduğu, istikamet emrini ihtiva eden suredir." },
  { number: 12, nameTr: "Yûsuf", nameAr: "يوسف", meaningTr: "Yusuf Peygamber", versesCount: 111, revelationPlace: "Mekke", juzNumber: 12, pageNumber: 235, descriptionTr: "Kur'an'da 'Ahsenü'l-Kasas' (kıssaların en güzeli) olarak nitelendirilen Hz. Yusuf'un ibretli kıssasını anlatır." },
  { number: 13, nameTr: "Ra'd", nameAr: "الرعد", meaningTr: "Gök Gürültüsü", versesCount: 43, revelationPlace: "Medine", juzNumber: 13, pageNumber: 249, descriptionTr: "Kâinattaki intizam ve kalplerin ancak Allah'ın zikriyle mutmain olacağı hakikati." },
  { number: 14, nameTr: "İbrâhîm", nameAr: "إبراهيم", meaningTr: "İbrahim Peygamber", versesCount: 52, revelationPlace: "Mekke", juzNumber: 13, pageNumber: 255, descriptionTr: "Hz. İbrahim'in tevhidi savunması ve Kabe duası." },
  { number: 15, nameTr: "Hicr", nameAr: "الحجر", meaningTr: "Hicr Bölgesi / Taşlık Yer", versesCount: 99, revelationPlace: "Mekke", juzNumber: 14, pageNumber: 262, descriptionTr: "Kur'an'ın bizzat Allah Teâlâ tarafından muhafaza edileceğini müjdeleyen suredir." },
  { number: 16, nameTr: "Nahl", nameAr: "النحل", meaningTr: "Bal Arısı", versesCount: 128, revelationPlace: "Mekke", juzNumber: 14, pageNumber: 267, descriptionTr: "Nimetler suresi olarak bilinir; arının mucizevi üretimini ve şükrü anlatır." },
  { number: 17, nameTr: "İsrâ", nameAr: "الإسراء", meaningTr: "Gece Yürüyüşü", versesCount: 111, revelationPlace: "Mekke", juzNumber: 15, pageNumber: 282, descriptionTr: "İsra ve Miraç mucizesi ile İslam ahlakının temel on iki esasını bildirir." },
  { number: 18, nameTr: "Kehf", nameAr: "الكهف", meaningTr: "Mağara", versesCount: 110, revelationPlace: "Mekke", juzNumber: 15, pageNumber: 293, descriptionTr: "Ashab-ı Kehf, Hz. Musa ile Hızır kıssası ve Zülkarneyn kıssalarını içerir." },
  { number: 19, nameTr: "Meryem", nameAr: "مريم", meaningTr: "Hz. Meryem", versesCount: 98, revelationPlace: "Mekke", juzNumber: 16, pageNumber: 305, descriptionTr: "Hz. Zekeriyya'nın duası, Hz. Yahya ve Hz. İsa'nın mucizevi doğumunu aktarır." },
  { number: 20, nameTr: "Tâhâ", nameAr: "طه", meaningTr: "Tâ-Hâ Harfleri", versesCount: 135, revelationPlace: "Mekke", juzNumber: 16, pageNumber: 312, descriptionTr: "Hz. Ömer'in hidayetine vesile olan, Hz. Musa'nın vahiy alışını ve tebliğini anlatan suredir." },
  { number: 21, nameTr: "Enbiyâ", nameAr: "الأنبياء", meaningTr: "Peygamberler", versesCount: 112, revelationPlace: "Mekke", juzNumber: 17, pageNumber: 322, descriptionTr: "On altı peygamberin dualarını ve tebliğ mücadelelerini konu edinir." },
  { number: 22, nameTr: "Hac", nameAr: "الحج", meaningTr: "Hac İbadeti", versesCount: 78, revelationPlace: "Medine", juzNumber: 17, pageNumber: 332, descriptionTr: "Haccın manevi boyutunu, Kabe'nin inşasını ve takvayı anlatır." },
  { number: 23, nameTr: "Mü'minûn", nameAr: "المؤمنون", meaningTr: "İnananlar", versesCount: 118, revelationPlace: "Mekke", juzNumber: 18, pageNumber: 342, descriptionTr: "Kurtuluşa eren müminlerin vasıflarını (huşû, iffet, emanete riayet) açıklar." },
  { number: 24, nameTr: "Nûr", nameAr: "النور", meaningTr: "Işık / Nûr", versesCount: 64, revelationPlace: "Medine", juzNumber: 18, pageNumber: 350, descriptionTr: "Meşhur Nûr Ayeti (35. ayet), iffet, tesettür ve aile ahlakını kapsar." },
  { number: 25, nameTr: "Furkân", nameAr: "الفرقان", meaningTr: "Hak ile Bâtılı Ayıran", versesCount: 77, revelationPlace: "Mekke", juzNumber: 19, pageNumber: 359, descriptionTr: "Rahman'ın has kullarının üstün ahlaki özelliklerini (İbadü'r-Rahmân) müjdeler." },
  { number: 26, nameTr: "Şuarâ", nameAr: "الشعراء", meaningTr: "Şairler", versesCount: 227, revelationPlace: "Mekke", juzNumber: 19, pageNumber: 367, descriptionTr: "Hak söz ile batıl söz arasındaki farkı ve peygamberlerin tebliğ sadakatini bildirir." },
  { number: 27, nameTr: "Neml", nameAr: "النمل", meaningTr: "Karınca", versesCount: 93, revelationPlace: "Mekke", juzNumber: 19, pageNumber: 377, descriptionTr: "Hz. Süleyman ile Saba Melikesi Belkıs ve karınca kıssasını konu edinir." },
  { number: 28, nameTr: "Kasas", nameAr: "القصص", meaningTr: "Kıssalar", versesCount: 88, revelationPlace: "Mekke", juzNumber: 20, pageNumber: 385, descriptionTr: "Hz. Musa'nın çocukluğu, Medyen dönemi ve Karun'un ibretli akıbetini anlatır." },
  { number: 29, nameTr: "Ankebût", nameAr: "العنكبوت", meaningTr: "Örümcek", versesCount: 69, revelationPlace: "Mekke", juzNumber: 20, pageNumber: 396, descriptionTr: "İmanın imtihanlarla sınanacağını ve sahte sığınakların örümcek ağı kadar dayanıksız olduğunu vurgular." },
  { number: 30, nameTr: "Rûm", nameAr: "الروم", meaningTr: "Romalılar / Bizans", versesCount: 60, revelationPlace: "Mekke", juzNumber: 21, pageNumber: 404, descriptionTr: "Tarihin dönüm noktalarını, geleceğe dair gayb haberini ve evlilikteki sükûnet mucizesini açıklar." },
  { number: 31, nameTr: "Lokmân", nameAr: "لقمان", meaningTr: "Lokman Hekim", versesCount: 34, revelationPlace: "Mekke", juzNumber: 21, pageNumber: 411, descriptionTr: "Hz. Lokman'ın oğluna verdiği altın değerindeki ahlak ve edep öğütlerini içerir." },
  { number: 32, nameTr: "Secde", nameAr: "السجدة", meaningTr: "Secde", versesCount: 30, revelationPlace: "Mekke", juzNumber: 21, pageNumber: 415, descriptionTr: "Yaratılış, diriliş ve geceleri teheccüdle Rablerine secde edenlerin mükâfatını açıklar." },
  { number: 33, nameTr: "Ahzâb", nameAr: "الأحزاب", meaningTr: "Gruplar / Hendek Gazvesi", versesCount: 73, revelationPlace: "Medine", juzNumber: 21, pageNumber: 418, descriptionTr: "Peygamber Efendimiz'in müminler için en güzel örnek (Üsve-i Hasene) olduğunu bildirir." },
  { number: 34, nameTr: "Sebe'", nameAr: "سبأ", meaningTr: "Sebe Halkı", versesCount: 54, revelationPlace: "Mekke", juzNumber: 22, pageNumber: 428, descriptionTr: "Şükreden Davud ile nankörlük edip helak olan Sebe yurdunun kıssası." },
  { number: 35, nameTr: "Fâtır", nameAr: "فاطر", meaningTr: "Yaratan / İlk Vareden", versesCount: 45, revelationPlace: "Mekke", juzNumber: 22, pageNumber: 434, descriptionTr: "Meleklerin vazifelerini ve âlimlerin Allah'tan hakkıyla korktuğunu ifade eden ayeti taşır." },
  { number: 36, nameTr: "Yâsîn", nameAr: "يس", meaningTr: "Yâ-Sîn Harfleri", versesCount: 83, revelationPlace: "Mekke", juzNumber: 22, pageNumber: 440, descriptionTr: "Peygamber Efendimiz'in 'Kur'an'ın Kalbi' buyurduğu, haşr ve diriliş hakikatini muazzam bir fesahatle ilan eden suredir." },
  { number: 37, nameTr: "Sâffât", nameAr: "الصافات", meaningTr: "Sıra Sıra Duranlar", versesCount: 182, revelationPlace: "Mekke", juzNumber: 23, pageNumber: 446, descriptionTr: "İbadet için saf tutan melekleri ve Hz. İbrahim'in oğluyla olan fedakarlık imtihanını anlatır." },
  { number: 38, nameTr: "Sâd", nameAr: "ص", meaningTr: "Sâd Harfi", versesCount: 88, revelationPlace: "Mekke", juzNumber: 23, pageNumber: 453, descriptionTr: "Hz. Davud, Hz. Süleyman ve Hz. Eyyub'un sabır ve şükür hallerini aktarır." },
  { number: 39, nameTr: "Zümer", nameAr: "الزمر", meaningTr: "Topluluklar", versesCount: 75, revelationPlace: "Mekke", juzNumber: 23, pageNumber: 458, descriptionTr: "Allah'ın rahmetinden ümit kesilmemesini emreden meşhur 53. ayeti ihtiva eder." },
  { number: 40, nameTr: "Mü'min (Gâfir)", nameAr: "غافر", meaningTr: "Bağışlayan", versesCount: 85, revelationPlace: "Mekke", juzNumber: 24, pageNumber: 467, descriptionTr: "Hâ-Mîm ile başlayan yedi surenin ilkidir; arşı taşıyan meleklerin müminler için istiğfarını anlatır." },
  { number: 41, nameTr: "Fussilet", nameAr: "فصلت", meaningTr: "Genişçe Açıklanmış", versesCount: 54, revelationPlace: "Mekke", juzNumber: 24, pageNumber: 477, descriptionTr: "Kötülüğe en güzel şekilde karşılık verme ahlakını öğretir." },
  { number: 42, nameTr: "Şûrâ", nameAr: "الشورى", meaningTr: "Danışma / İstişare", versesCount: 53, revelationPlace: "Mekke", juzNumber: 25, pageNumber: 483, descriptionTr: "Müminlerin işlerini aralarında istişare ile yürüttüklerini vurgular." },
  { number: 43, nameTr: "Zuhruf", nameAr: "الزخرف", meaningTr: "Yaldız / Altın Süs", versesCount: 89, revelationPlace: "Mekke", juzNumber: 25, pageNumber: 489, descriptionTr: "Dünya hayatının geçici süslerine aldanmamayı öğütler." },
  { number: 44, nameTr: "Duhân", nameAr: "الدخان", meaningTr: "Duman", versesCount: 59, revelationPlace: "Mekke", juzNumber: 25, pageNumber: 496, descriptionTr: "Kur'an'ın mübarek bir gecede (Kadir Gecesi) indirildiğini haber verir." },
  { number: 45, nameTr: "Câsiye", nameAr: "الجاثية", meaningTr: "Diz Üstü Çökenler", versesCount: 37, revelationPlace: "Mekke", juzNumber: 25, pageNumber: 499, descriptionTr: "Kıyamet gününde bütün milletlerin diz çökeceği dehşetli anı tasvir eder." },
  { number: 46, nameTr: "Ahkâf", nameAr: "الأحقاف", meaningTr: "Kum Tepeleri", versesCount: 35, revelationPlace: "Mekke", juzNumber: 26, pageNumber: 502, descriptionTr: "Anne babaya iyilik yapma emrini ve cinlerin Kur'an dinlemesini aktarır." },
  { number: 47, nameTr: "Muhammed", nameAr: "محمد", meaningTr: "Hz. Muhammed (s.a.v.)", versesCount: 38, revelationPlace: "Medine", juzNumber: 26, pageNumber: 507, descriptionTr: "Peygamber Efendimiz'e indirilen hakikate iman etmenin lütfunu ve cihadı anlatır." },
  { number: 48, nameTr: "Fetih", nameAr: "الفتح", meaningTr: "Fetih / Açılış", versesCount: 29, revelationPlace: "Medine", juzNumber: 26, pageNumber: 511, descriptionTr: "Hudeybiye Barışı ve Mekke'nin fethini apaçık bir fetih olarak müjdeleyen coşkulu suredir." },
  { number: 49, nameTr: "Hucurât", nameAr: "الحجرات", meaningTr: "Odalar / Hücreler", versesCount: 18, revelationPlace: "Medine", juzNumber: 26, pageNumber: 515, descriptionTr: "İslam ahlak ve adab-ı muaşeret beyannamesidir: gıybet, suizan, alay ve tecessüsün yasaklandığı suredir." },
  { number: 50, nameTr: "Kâf", nameAr: "ق", meaningTr: "Kâf Harfi", versesCount: 45, revelationPlace: "Mekke", juzNumber: 26, pageNumber: 518, descriptionTr: "İnsana şah damarından daha yakın olan Yüce Yaratıcı'yı ve dirilişi hatırlatır." },
  { number: 51, nameTr: "Zâriyât", nameAr: "الذاريات", meaningTr: "Tozutup Savuran Rüzgârlar", versesCount: 60, revelationPlace: "Mekke", juzNumber: 26, pageNumber: 520, descriptionTr: "'Ben cinleri ve insanları ancak bana kulluk etsinler diye yarattım' ayetini taşır." },
  { number: 52, nameTr: "Tûr", nameAr: "الطور", meaningTr: "Tûr Dağı", versesCount: 49, revelationPlace: "Mekke", juzNumber: 27, pageNumber: 523, descriptionTr: "Tûr Dağı üzerine yeminle başlayan, ahiret nimetlerini müjdeleyen suredir." },
  { number: 53, nameTr: "Necm", nameAr: "النجم", meaningTr: "Yıldız", versesCount: 62, revelationPlace: "Mekke", juzNumber: 27, pageNumber: 526, descriptionTr: "Peygamberimizin heva ve hevesinden konuşmadığını, Miraç'taki Sidretü'l-Münteha müşahedesini bildirir." },
  { number: 54, nameTr: "Kamer", nameAr: "القمر", meaningTr: "Ay", versesCount: 55, revelationPlace: "Mekke", juzNumber: 27, pageNumber: 528, descriptionTr: "Ayın yarılması mucizesi ve 'Andolsun biz Kur'an'ı öğüt alınsın diye kolaylaştırdık' nakaratını içerir." },
  { number: 55, nameTr: "Rahmân", nameAr: "الرحمن", meaningTr: "Sonsuz Merhamet Sahibi", versesCount: 78, revelationPlace: "Medine", juzNumber: 27, pageNumber: 531, descriptionTr: "'Artık Rabbinizin hangi nimetlerini yalanlayabilirsiniz?' ayetiyle yankılanan Kur'an'ın gelini (Arûsü'l-Kur'an)." },
  { number: 56, nameTr: "Vâkıa", nameAr: "الواقعة", meaningTr: "Kaçınılmaz Olay / Kıyamet", versesCount: 96, revelationPlace: "Mekke", juzNumber: 27, pageNumber: 534, descriptionTr: "İnsanların kıyametteki üç sınıfını (Öncüler, Sağdakiler, Soldakiler) tasvir eder." },
  { number: 57, nameTr: "Hadîd", nameAr: "الحديد", meaningTr: "Demir", versesCount: 29, revelationPlace: "Medine", juzNumber: 27, pageNumber: 537, descriptionTr: "Göklerde ve yerde ne varsa Allah'ı tesbih ettiğini ve demirin faydalarını açıklar." },
  { number: 58, nameTr: "Mücâdele", nameAr: "المجادلة", meaningTr: "Tartışan Kadın", versesCount: 22, revelationPlace: "Medine", juzNumber: 28, pageNumber: 542, descriptionTr: "Her ayetinde 'Allah' lafzı geçen tek suredir; gizli fısıldaşmaların Allah tarafından bilindiğini söyler." },
  { number: 59, nameTr: "Haşr", nameAr: "الحشر", meaningTr: "Toplama / Sürgün", versesCount: 24, revelationPlace: "Medine", juzNumber: 28, pageNumber: 545, descriptionTr: "Son üç ayetinde (Hüvallahüllezi) Allah'ın esmâ-i hüsnâsını zikreder." },
  { number: 60, nameTr: "Mümtehine", nameAr: "الممتحنة", meaningTr: "İmtihan Edilen Kadın", versesCount: 13, revelationPlace: "Medine", juzNumber: 28, pageNumber: 549, descriptionTr: "İnançları nedeniyle müminlerle savaşmayan kimselere iyilik ve adaletle muamele etmeyi emreder." },
  { number: 61, nameTr: "Saff", nameAr: "الصف", meaningTr: "Saf / Dizi", versesCount: 14, revelationPlace: "Medine", juzNumber: 28, pageNumber: 551, descriptionTr: "Yapılmayan şeylerin söylenmesinin Allah katında büyük bir gazap sebebi olduğunu ikaz eder." },
  { number: 62, nameTr: "Cuma", nameAr: "الجمعة", meaningTr: "Cuma Günü / Toplanma", versesCount: 11, revelationPlace: "Medine", juzNumber: 28, pageNumber: 553, descriptionTr: "Cuma namazına çağrıyı ve cuma vaktindeki ibadet edebini bildirir." },
  { number: 63, nameTr: "Münâfikûn", nameAr: "المنافقون", meaningTr: "Münafıklar", versesCount: 11, revelationPlace: "Medine", juzNumber: 28, pageNumber: 554, descriptionTr: "İki yüzlü münafıkların psikolojik ve ahlaki portresini çizer." },
  { number: 64, nameTr: "Tegâbün", nameAr: "التغابن", meaningTr: "Aldanma / Kâr-Zarar Günü", versesCount: 18, revelationPlace: "Medine", juzNumber: 28, pageNumber: 556, descriptionTr: "Kıyametin asıl kazanan ve kaybedenleri ortaya koyacağı hakikati." },
  { number: 65, nameTr: "Talâk", nameAr: "الطلاق", meaningTr: "Boşanma", versesCount: 12, revelationPlace: "Medine", juzNumber: 28, pageNumber: 558, descriptionTr: "Kim Allah'a karşı takva sahibi olursa ona bir çıkış yolu ihsan edeceğini müjdeler." },
  { number: 66, nameTr: "Tahrîm", nameAr: "التحريم", meaningTr: "Haram Kılma", versesCount: 12, revelationPlace: "Medine", juzNumber: 28, pageNumber: 560, descriptionTr: "Aile sorumluluğu ve Firavun'un eşi Hz. Âsiye ile Hz. Meryem'in örnek imanını zikreder." },
  { number: 67, nameTr: "Mülk (Tebâreke)", nameAr: "الملك", meaningTr: "Hükümranlık / Mülk", versesCount: 30, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 562, descriptionTr: "Kabir azabına kalkan olduğu rivayet edilen, hayat ve ölümün imtihan için yaratıldığını bildiren suredir." },
  { number: 68, nameTr: "Kalem", nameAr: "القلم", meaningTr: "Kalem", versesCount: 52, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 564, descriptionTr: "Kaleme ve yazdıklarına yeminle başlar; Peygamber Efendimiz'in yüce bir ahlak üzere olduğunu ilan eder." },
  { number: 69, nameTr: "Hâkka", nameAr: "الحاقة", meaningTr: "Gerçekleşecek Olan Kıyamet", versesCount: 52, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 566, descriptionTr: "Amel defterleri sağından ve solundan verilenlerin durumlarını tasvir eder." },
  { number: 70, nameTr: "Meâric", nameAr: "المعارج", meaningTr: "Yükselme Dereceleri", versesCount: 44, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 568, descriptionTr: "Namazlarına devam eden ve yoksulun hakkını gözetenlerin kurtuluşunu haber verir." },
  { number: 71, nameTr: "Nûh", nameAr: "نوح", meaningTr: "Nuh Peygamber", versesCount: 28, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 570, descriptionTr: "Hz. Nuh'un 950 yıllık sabır dolu tebliğini ve istiğfarın bereketini anlatır." },
  { number: 72, nameTr: "Cin", nameAr: "الجن", meaningTr: "Cinler", versesCount: 28, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 572, descriptionTr: "Cinlerin Kur'an'ı işitip iman ettiklerini ve mescidlerin sadece Allah'a ait olduğunu açıklar." },
  { number: 73, nameTr: "Müzzemmil", nameAr: "المزمل", meaningTr: "Örtünüp Bürünen", versesCount: 20, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 574, descriptionTr: "Gece ibadeti (Teheccüd) ve Kur'an'ı tertil ile tane tane okuma emrini verir." },
  { number: 74, nameTr: "Müddessir", nameAr: "المدثر", meaningTr: "Örtüsüne Sarınan", versesCount: 56, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 575, descriptionTr: "'Kalk ve uyar, Rabbini tekbir et ve elbiseni temiz tut' nidasıyla başlayan ilk vahiy surelerindendir." },
  { number: 75, nameTr: "Kıyâme", nameAr: "القيامة", meaningTr: "Kıyamet Günü", versesCount: 40, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 577, descriptionTr: "Kıyamet gününe ve kendini kınayan pişman nefse (Levvâme) yeminle başlar." },
  { number: 76, nameTr: "İnsân (Dehr)", nameAr: "الإنسان", meaningTr: "İnsan / Zaman", versesCount: 31, revelationPlace: "Medine", juzNumber: 29, pageNumber: 578, descriptionTr: "Yetimi, yoksulu ve esiri Allah rızası için karşılıksız doyuran ebrarın mükâfatını anlatır." },
  { number: 77, nameTr: "Mürselât", nameAr: "المرسلات", meaningTr: "Gönderilen Melekler/Rüzgârlar", versesCount: 50, revelationPlace: "Mekke", juzNumber: 29, pageNumber: 580, descriptionTr: "Ahiret gününü inkâr edenleri uyaran etkileyici bir hitaptır." },
  { number: 78, nameTr: "Nebe' (Amme)", nameAr: "النبأ", meaningTr: "Büyük Haber", versesCount: 40, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 582, descriptionTr: "Son cüzün (Amme Cüzü) ilk suresidir; diriliş ve mahkeme-i kübrâ haberini verir." },
  { number: 79, nameTr: "Nâziât", nameAr: "النازعات", meaningTr: "Söküp Çıkaran Melekler", versesCount: 46, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 583, descriptionTr: "Ruhları kabzeden melekleri ve Hz. Musa'nın Firavun'a davetini konu edinir." },
  { number: 80, nameTr: "Abese", nameAr: "عبس", meaningTr: "Yüzünü Ekşitti", versesCount: 42, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 585, descriptionTr: "Gözleri görmeyen sahabî Abdullah İbn Ümmi Mektûm hadisesi üzerinden kibirden sakındırır." },
  { number: 81, nameTr: "Tekvîr", nameAr: "التكوير", meaningTr: "Güneşin Dürülmesi", versesCount: 29, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 586, descriptionTr: "Kıyamet koptuğunda kâinattaki muazzam değişimi canlı tasvirlerle aktarır." },
  { number: 82, nameTr: "İnfitâr", nameAr: "الانفطار", meaningTr: "Göklerin Yarılması", versesCount: 19, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 587, descriptionTr: "'Ey insan! Seni o kerim Rabbine karşı aldatıp gururlandıran nedir?' uyarısını taşır." },
  { number: 83, nameTr: "Mutaffifîn", nameAr: "المطففين", meaningTr: "Ölçüde Hile Yapanlar", versesCount: 36, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 587, descriptionTr: "Ticarette eksik tartanların ahiretteki azabını ve dürüstlüğün önemini vurgular." },
  { number: 84, nameTr: "İnşikâk", nameAr: "الانشقاق", meaningTr: "Göklerin Yarılıp Parçalanması", versesCount: 25, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 589, descriptionTr: "İnsanın Rabbine doğru adım adım çabalamasını ve amel defterinin teslimini tasvir eder." },
  { number: 85, nameTr: "Bürûc", nameAr: "البروج", meaningTr: "Burçlar / Takımyıldızlar", versesCount: 22, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 590, descriptionTr: "Ashab-ı Uhdûd kıssası ve inançları uğruna ateşe atılan müminlerin sabrını zikreder." },
  { number: 86, nameTr: "Târık", nameAr: "الطارق", meaningTr: "Gece Çakan Yıldız", versesCount: 17, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 591, descriptionTr: "Her nefsin üzerinde gözetleyici bir muhafız olduğunu ve insanın yaratılışını hatırlatır." },
  { number: 87, nameTr: "A'lâ", nameAr: "الأعلى", meaningTr: "En Yüce Olan", versesCount: 19, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 591, descriptionTr: "Peygamber Efendimiz'in bayram ve cuma namazlarında sıkça okuduğu, tesbih emrini veren suredir." },
  { number: 88, nameTr: "Gâşiye", nameAr: "الغاشية", meaningTr: "Her Şeyi Kuşatan Kıyamet", versesCount: 26, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 592, descriptionTr: "Develere, göğe, dağlara ve yeryüzüne bakarak tefekkür etmeye davet eder." },
  { number: 89, nameTr: "Fecr", nameAr: "الفجر", meaningTr: "Tan Vakti / Şafak", versesCount: 30, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 593, descriptionTr: "On geceye yeminle başlar ve mutmainne olmuş nefse 'Dön Rabbine!' hitabıyla son bulur." },
  { number: 90, nameTr: "Beled", nameAr: "البلد", meaningTr: "Şehir / Mekke", versesCount: 20, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 594, descriptionTr: "Zorlu sarp yokuşun yetimi doyurmak ve hakkı, sabrı, merhameti tavsiye etmek olduğunu anlatır." },
  { number: 91, nameTr: "Şems", nameAr: "الشمس", meaningTr: "Güneş", versesCount: 15, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 595, descriptionTr: "Nefsini temizleyip arındıranın kurtulduğunu, onu kirletip örtenin ziyan ettiğini bildirir." },
  { number: 92, nameTr: "Leyl", nameAr: "الليل", meaningTr: "Gece", versesCount: 21, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 595, descriptionTr: "Cömertlik ve takva ehli ile cimrilik ve istiğna ehlinin yollarını karşılaştırır." },
  { number: 93, nameTr: "Duhâ", nameAr: "الضحى", meaningTr: "Kuşluk Vakti", versesCount: 11, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 596, descriptionTr: "'Rabbin seni ne terk etti ne de sana darıldı' tesellisini veren gönül ferahlatıcı suredir." },
  { number: 94, nameTr: "İnşirâh", nameAr: "الشرح", meaningTr: "Genişleme / Ferahlama", versesCount: 8, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 596, descriptionTr: "'Şüphesiz her güçlükle beraber bir kolaylık vardır' müjdesiyle kalpleri dinlendirir." },
  { number: 95, nameTr: "Tîn", nameAr: "التين", meaningTr: "İncir", versesCount: 8, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 597, descriptionTr: "İnsanın en güzel biçimde (ahsen-i takvîm) yaratıldığını beyan eder." },
  { number: 96, nameTr: "Alak", nameAr: "العلق", meaningTr: "Asılıp Tutunan / Kan Pıhtısı", versesCount: 19, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 597, descriptionTr: "Hira Mağarası'nda inen ilk vahiy olan 'Yaratan Rabbinin adıyla oku!' emrini taşır." },
  { number: 97, nameTr: "Kadir", nameAr: "القدر", meaningTr: "Kadir Gecesi / Değer", versesCount: 5, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 598, descriptionTr: "Kadir Gecesi'nin bin aydan daha hayırlı olduğunu ve o gece tan yeri ağarana kadar meleklerin indiğini anlatır." },
  { number: 98, nameTr: "Beyyine", nameAr: "البينة", meaningTr: "Açık Delil / Belge", versesCount: 8, revelationPlace: "Medine", juzNumber: 30, pageNumber: 598, descriptionTr: "Dini yalnız Allah'a has kılarak, hanîfler olarak ihlasla ibadet etme emrini verir." },
  { number: 99, nameTr: "Zilzâl", nameAr: "الزلزلة", meaningTr: "Deprem / Sarsıntı", versesCount: 8, revelationPlace: "Medine", juzNumber: 30, pageNumber: 599, descriptionTr: "Zerre ağırlığınca hayır yapanın karşılığını göreceğini, zerre ağırlığınca şer yapanın da karşılığını göreceğini haber verir." },
  { number: 100, nameTr: "Âdiyât", nameAr: "العاديات", meaningTr: "Hızlı Koşan Atlar", versesCount: 11, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 599, descriptionTr: "İnsanın nankörlüğünü ve kalplerde gizlenenlerin ortaya saçılacağı o dehşetli günü hatırlatır." },
  { number: 101, nameTr: "Kâria", nameAr: "القارعة", meaningTr: "Kapı Çalan / Çarpan Felaket", versesCount: 11, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 600, descriptionTr: "İnsanların saçılmış pervaneler gibi olacağı ve terazisi ağır gelenlerin mutlu olacağı gün." },
  { number: 102, nameTr: "Tekâsür", nameAr: "التكاثر", meaningTr: "Çoklukla Övünme", versesCount: 8, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 600, descriptionTr: "Mal ve mülk çokluğuyla övünmenin insanı aldattığını ve nimetlerden muhakkak hesaba çekileceğimizi bildirir." },
  { number: 103, nameTr: "Asr", nameAr: "العصر", meaningTr: "Zaman / Asır", versesCount: 3, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 601, descriptionTr: "İmam Şafii'nin 'Kur'an'da başka bir şey inmese bu sure insanlara yeterdi' dediği, iman, salih amel, hakkı ve sabrı tavsiye etmeyi emreden suredir." },
  { number: 104, nameTr: "Hümeze", nameAr: "الهمزة", meaningTr: "Arkadan Çekiştiren / Kınayıcı", versesCount: 9, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 601, descriptionTr: "İnsanları arkadan çekiştiren, ayıplayan ve malına güvenenleri ikaz eder." },
  { number: 105, nameTr: "Fîl", nameAr: "الفيل", meaningTr: "Fil Hadisesi", versesCount: 5, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 601, descriptionTr: "Kabe'yi yıkmaya gelen Ebrehe ordusunun Ebabil kuşlarıyla nasıl helak edildiğini aktarır." },
  { number: 106, nameTr: "Kureyş", nameAr: "قريش", meaningTr: "Kureyş Kabilesi", versesCount: 4, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 602, descriptionTr: "Kureyş'e bahşedilen kış ve yaz yolculuğu güvenliği ve bu Beyt'in (Kabe) Rabbine kulluk çağrısı." },
  { number: 107, nameTr: "Mâûn", nameAr: "الماعون", meaningTr: "Küçük Yardım / İyilik", versesCount: 7, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 602, descriptionTr: "Namazlarında gösteriş yapan ve en küçük bir yardımı dahi esirgeyenleri kınar." },
  { number: 108, nameTr: "Kevser", nameAr: "الكوثر", meaningTr: "Bol Nimet / Kevser Havuzu", versesCount: 3, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 602, descriptionTr: "Kur'an'ın en kısa suresidir. Peygamber Efendimiz'e Kevser'in verildiğini müjdeler." },
  { number: 109, nameTr: "Kâfirûn", nameAr: "الكافرون", meaningTr: "İnkârcılar", versesCount: 6, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 603, descriptionTr: "'Sizin dininiz size, benim dinim banadır' ilkesiyle tavizsiz tevhidi açıklar." },
  { number: 110, nameTr: "Nasr", nameAr: "النصر", meaningTr: "Yardım / Zafer", versesCount: 3, revelationPlace: "Medine", juzNumber: 30, pageNumber: 603, descriptionTr: "Allah'ın yardımı ve fetih geldiğinde istiğfar ve hamd ile tesbihte bulunmayı emreder." },
  { number: 111, nameTr: "Tebbet (Mesed)", nameAr: "المسد", meaningTr: "Kurumuş Lif / Tebbet", versesCount: 5, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 603, descriptionTr: "İslam'a düşmanlık eden Ebu Leheb ve eşinin akıbetini bildirir." },
  { number: 112, nameTr: "İhlâs", nameAr: "الإخلاص", meaningTr: "Samimiyet / Katışıksız Tevhid", versesCount: 4, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 604, descriptionTr: "Kur'an'ın üçte birine denk tutulan, Allah'ın birliğini ve hiçbir şeye muhtaç olmadığını bildiren tevhid suresidir." },
  { number: 113, nameTr: "Felak", nameAr: "الفلق", meaningTr: "Sabah Aydınlığı", versesCount: 5, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 604, descriptionTr: "Yaratılanların şerrinden, karanlık geceden ve hasetçinin şerrinden sabahın Rabbine sığınmayı öğretir." },
  { number: 114, nameTr: "Nâs", nameAr: "الناس", meaningTr: "İnsanlar", versesCount: 6, revelationPlace: "Mekke", juzNumber: 30, pageNumber: 604, descriptionTr: "İnsanların göğüslerine vesvese veren şeytanın ve sinsi vesvesecilerin şerrinden insanların Rabbine sığınma duasıdır." }
];

// Rich verified Ayah text datasets for key Surahs with authentic Diyanet Meali & Audio
export const VERIFIED_SURAHS_DETAIL: Record<number, Ayah[]> = {
  // 1: Fatiha
  1: [
    {
      id: "1_1",
      surahNumber: 1,
      ayahNumber: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "Rahmân ve Rahîm olan Allah'ın adıyla.",
      commentarySummary: "Her meşru ve hayırlı işe besmele ile başlamak Peygamberimiz'in sünnetidir. Besmele, kulun aczini itiraf edip her şeyi yaratan Yüce Rabbinin ismiyle hareket ettiğinin beyanıdır.",
      audioUrl: getAyahAudioUrl(1, 1)
    },
    {
      id: "1_2",
      surahNumber: 1,
      ayahNumber: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "Hamd, âlemlerin Rabbi olan Allah'a mahsustur.",
      commentarySummary: "Hamd; minnet, övgü ve teşekkürün en yücesidir. Âlemlerin Rabbi ifadesi; yaratılmış bütün kâinatın terbiye edicisi, besleyicisi ve koruyucusunun yalnız Allah olduğunu ifade eder.",
      audioUrl: getAyahAudioUrl(1, 2)
    },
    {
      id: "1_3",
      surahNumber: 1,
      ayahNumber: 3,
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "O, Rahmân'dır, Rahîm'dir.",
      commentarySummary: "Rahmân; dünyada mümin-kâfir ayırt etmeksizin bütün varlıklara merhamet eden; Rahîm ise ahirette sadece mümin kullarına hususi merhamet gösterendir.",
      audioUrl: getAyahAudioUrl(1, 3)
    },
    {
      id: "1_4",
      surahNumber: 1,
      ayahNumber: 4,
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      translation: "Ceza ve mükâfat gününün (hesap gününün) yegâne sahibidir.",
      commentarySummary: "Kıyamet gününde mülk ve hâkimiyet bütünüyle zahir olur; hiçbir sahte güç kalmaz. Adaletin mutlak tecelli edeceği hesap gününü hatırlatır.",
      audioUrl: getAyahAudioUrl(1, 4)
    },
    {
      id: "1_5",
      surahNumber: 1,
      ayahNumber: 5,
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "(Rabbimiz!) Yalnız sana kulluk eder ve yalnız senden yardım dileriz.",
      commentarySummary: "İslam'ın özü olan tevhidin zirvesidir. İbadet sadece Allah'a has kılınır ve hakiki yardım yalnız O'ndan beklenir.",
      audioUrl: getAyahAudioUrl(1, 5)
    },
    {
      id: "1_6",
      surahNumber: 1,
      ayahNumber: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Bizi doğru yola (Sırât-ı Müstakîm'e) ilet;",
      commentarySummary: "Doğru yol; ifrat ve tefritten uzak, itidal üzere olan, Kur'an ve sünnet rehberliğindeki İslam caddesidir.",
      audioUrl: getAyahAudioUrl(1, 6)
    },
    {
      id: "1_7",
      surahNumber: 1,
      ayahNumber: 7,
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      translation: "Kendilerine nimet verdiğin kimselerin yoluna; gazaba uğramışların ve sapmışların yoluna değil. (Âmin)",
      commentarySummary: "Nimet verilenler; peygamberler, sıddıklar, şehitler ve salihlerdir. Gazap ve sapkınlıktan Allah'a sığınmak müminin daimi duasıdır.",
      audioUrl: getAyahAudioUrl(1, 7)
    }
  ],

  // 2: Bakara (Selections: 1-5, 255 Ayetel Kürsi, 285-286 Amenerrasulu)
  2: [
    {
      id: "2_1",
      surahNumber: 2,
      ayahNumber: 1,
      arabic: "الم",
      translation: "Elif. Lâm. Mîm.",
      commentarySummary: "Hurûf-ı mukattaa; manasını yalnız Allah'ın bildiği müteşabih harflerdir. İnsan aklının sınırlarını hatırlatır.",
      audioUrl: getAyahAudioUrl(2, 1)
    },
    {
      id: "2_2",
      surahNumber: 2,
      ayahNumber: 2,
      arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
      translation: "İşte o Kitap; onda asla şüphe yoktur. O, takvâ sahipleri (Allah'a karşı gelmekten sakınanlar) için bir hidayet rehberidir.",
      commentarySummary: "Kur'an'ın ilahi kelam olduğunda hiçbir kuşku bulunmadığı ve ondan hakkıyla istifade etmenin kalpteki takvaya bağlı olduğu belirtilir.",
      audioUrl: getAyahAudioUrl(2, 2)
    },
    {
      id: "2_3",
      surahNumber: 2,
      ayahNumber: 3,
      arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
      translation: "Onlar ki gayba inanırlar, namazı dosdoğru kılarlar ve kendilerine rızık olarak verdiklerimizden infak ederler.",
      commentarySummary: "Müttakilerin üç temel vasfı: Gayba sarsılmaz iman, huşû ile kılınan namaz ve mallardan Allah rızası için cömertçe harcamak.",
      audioUrl: getAyahAudioUrl(2, 3)
    },
    {
      id: "2_4",
      surahNumber: 2,
      ayahNumber: 4,
      arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
      translation: "Onlar hem sana indirilene (Kur'an'a), hem senden önce indirilenlere inanırlar; ahirete de kesin olarak iman ederler.",
      commentarySummary: "Peygamberler zincirinin bütünlüğüne ve ahirete yakînen (şüphesizce) inanmak müminlerin şiarıdır.",
      audioUrl: getAyahAudioUrl(2, 4)
    },
    {
      id: "2_5",
      surahNumber: 2,
      ayahNumber: 5,
      arabic: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
      translation: "İşte onlar Rablerinden gelen bir hidayet üzeredirler ve kurtuluşa erenler de ancak onlardır.",
      commentarySummary: "Gerçek necat ve felaha erenler, bu iman ve salih amel sahibi kimselerdir.",
      audioUrl: getAyahAudioUrl(2, 5)
    },
    {
      id: "2_255",
      surahNumber: 2,
      ayahNumber: 255,
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translation: "Allah, O'ndan başka hiçbir ilâh olmayandır; Hayy'dır (daima diridir), Kayyûm'dur (bütün varlığı yönetip ayakta tutandır). O'nu ne bir uyuklama tutar ne de bir uyku. Göklerde ve yerde ne varsa hepsi O'nundur. O'nun izni olmaksızın katında şefaat edecek kimdir? O, kulların önlerindekini de arkalarındakini de (yaptıklarını da yapacaklarını da) bilir. Onlar ise O'nun dilediği kadarından başka, ilminden hiçbir şeyi kavrayamazlar. O'nun kürsüsü gökleri ve yeri kuşatmıştır. Onları koruyup gözetmek O'na asla ağır gelmez. O, çok yücedir, çok büyüktür. (Âyetü'l-Kürsî)",
      commentarySummary: "Kur'an-ı Kerim'in en faziletli ayetidir. Tevhidin, Allah'ın mutlak ilminin, kudretinin ve mülkünün en kapsamlı ifadesidir. Peygamberimiz her namazın peşinden okunmasını tavsiye buyurmuştur.",
      audioUrl: getAyahAudioUrl(2, 255)
    },
    {
      id: "2_285",
      surahNumber: 2,
      ayahNumber: 285,
      arabic: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ",
      translation: "Peygamber, Rabbinden kendisine indirilene iman etti, müminler de. Hepsi Allah'a, meleklerine, kitaplarına ve peygamberlerine inandılar. 'Biz O'nun peygamberleri arasında hiçbir ayrım yapmayız' dediler ve şöyle niyaz ettiler: 'İşittik ve itaat ettik! Bağışlamanı dileriz ey Rabbimiz, dönüş ancak sanadır!'",
      commentarySummary: "Âmenerresûlü'nün ilk ayetidir. Müminin teslimiyetini ve 'Semi'nâ ve ata'nâ' (işittik ve itaat ettik) ahlakını gösterir.",
      audioUrl: getAyahAudioUrl(2, 285)
    },
    {
      id: "2_286",
      surahNumber: 2,
      ayahNumber: 286,
      arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      translation: "Allah hiçbir kimseye gücünün yettiğinden fazlasını yüklemez. Herkesin kazandığı (iyilik) kendi lehine, yaptığı (kötülük) de kendi aleyhinedir. 'Ey Rabbimiz! Unutur veya yanılırsak bizi sorumlu tutma! Ey Rabbimiz! Bize, bizden öncekilere yüklediğin gibi ağır yük yükleme! Ey Rabbimiz! Bize gücümüzün yetmeyeceği şeyi taşıtma! Bizi affet, bizi bağışla, bize merhamet eyle! Sen bizim Mevlâmızsın; kâfirler topluluğuna karşı bize yardım eyle!'",
      commentarySummary: "İslam dininin kolaylık dini olduğunu ilan eden, Miraç gecesi hediye edilen muazzam bir mağfiret ve hidayet duasıdır.",
      audioUrl: getAyahAudioUrl(2, 286)
    }
  ],

  // 36: Yasin (Selections)
  36: [
    {
      id: "36_1",
      surahNumber: 36,
      ayahNumber: 1,
      arabic: "يس",
      translation: "Yâ. Sîn.",
      commentarySummary: "Kur'an'ın kalbi olan Yasin suresinin başındaki şifreli mukattaa harfleridir.",
      audioUrl: getAyahAudioUrl(36, 1)
    },
    {
      id: "36_2",
      surahNumber: 36,
      ayahNumber: 2,
      arabic: "وَالْقُرْآنِ الْحَكِيمِ",
      translation: "Hikmet dolu Kur'an'a andolsun ki,",
      commentarySummary: "Kur'an'ın hikmet kaynağı olduğu ve her hükmünün yerli yerinde bulunduğu ilan edilir.",
      audioUrl: getAyahAudioUrl(36, 2)
    },
    {
      id: "36_3",
      surahNumber: 36,
      ayahNumber: 3,
      arabic: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
      translation: "Şüphesiz sen, gönderilmiş peygamberlerdensin.",
      commentarySummary: "Peygamber Efendimiz'in (s.a.v.) risaletinin bizzat Allah tarafından teyididir.",
      audioUrl: getAyahAudioUrl(36, 3)
    },
    {
      id: "36_4",
      surahNumber: 36,
      ayahNumber: 4,
      arabic: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
      translation: "Dosdoğru bir yol üzerindesin.",
      commentarySummary: "Peygamberimizin tebliğ ettiği yolun hak ve dosdoğru olduğu tescil edilir.",
      audioUrl: getAyahAudioUrl(36, 4)
    },
    {
      id: "36_58",
      surahNumber: 36,
      ayahNumber: 58,
      arabic: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ",
      translation: "Çok merhametli olan Rab'den onlara bir de sözlü 'Selâm' vardır.",
      commentarySummary: "Cennet ehline Yüce Allah tarafından doğrudan bahşedilecek en büyük müjde ve ikram selamıdır.",
      audioUrl: getAyahAudioUrl(36, 58)
    },
    {
      id: "36_82",
      surahNumber: 36,
      ayahNumber: 82,
      arabic: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ",
      translation: "Bir şeyi dilediği zaman, O'nun buyruğu sadece 'Ol!' demektir; o da hemen oluverir.",
      commentarySummary: "Kün Fe Yekûn hakikati. Allah'ın sınırsız kudreti karşısında hiçbir şeyin güçlük arz etmediğinin beyanıdır.",
      audioUrl: getAyahAudioUrl(36, 82)
    }
  ],

  // 67: Mülk (Tebareke)
  67: [
    {
      id: "67_1",
      surahNumber: 67,
      ayahNumber: 1,
      arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "Hükümranlık elinde olan Allah yüceler yücesidir. O, her şeye hakkıyla gücü yetendir.",
      commentarySummary: "Mülk bütünüyle Allah'ındır. Bütün mevcudat O'nun kudret elindedir.",
      audioUrl: getAyahAudioUrl(67, 1)
    },
    {
      id: "67_2",
      surahNumber: 67,
      ayahNumber: 2,
      arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
      translation: "O, hanginizin daha güzel amel işleyeceğini sınamak için ölümü ve hayatı yarattı. O, mutlak güç sahibidir, çok bağışlayandır.",
      commentarySummary: "Hayat ve ölümün yaratılış gayesi: 'Ahsen-i amel' yani en ihlaslı, en güzel işi ortaya koymaktır.",
      audioUrl: getAyahAudioUrl(67, 2)
    }
  ],

  // 93: Duha
  93: [
    { id: "93_1", surahNumber: 93, ayahNumber: 1, arabic: "وَالضُّحَىٰ", translation: "Kuşluk vaktine andolsun,", audioUrl: getAyahAudioUrl(93, 1) },
    { id: "93_2", surahNumber: 93, ayahNumber: 2, arabic: "وَاللَّيْلِ إِذَا سَجَىٰ", translation: "Sükûnete erdiği zaman geceye andolsun ki,", audioUrl: getAyahAudioUrl(93, 2) },
    { id: "93_3", surahNumber: 93, ayahNumber: 3, arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", translation: "Rabbin seni ne terk etti ne de sana darıldı.", commentarySummary: "Vahyin bir müddet kesilmesi üzerine müşriklerin sevinmesine karşı inen, mümin yürekleri ferahlatan ilahi teselli.", audioUrl: getAyahAudioUrl(93, 3) },
    { id: "93_4", surahNumber: 93, ayahNumber: 4, arabic: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ", translation: "Elbette ahiret senin için dünyadan daha hayırlıdır.", audioUrl: getAyahAudioUrl(93, 4) },
    { id: "93_5", surahNumber: 93, ayahNumber: 5, arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", translation: "Ve pek yakında Rabbin sana verecek de sen hoşnut olacaksın.", audioUrl: getAyahAudioUrl(93, 5) }
  ],

  // 94: İnşirah
  94: [
    { id: "94_1", surahNumber: 94, ayahNumber: 1, arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", translation: "Biz senin göğsünü yarıp genişletmedik mi?", audioUrl: getAyahAudioUrl(94, 1) },
    { id: "94_2", surahNumber: 94, ayahNumber: 2, arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ", translation: "Belini büken ağır yükünü üzerinden indirmedik mi?", audioUrl: getAyahAudioUrl(94, 2) },
    { id: "94_3", surahNumber: 94, ayahNumber: 3, arabic: "الَّذِي أَنقَضَ ظَهْرَكَ", translation: "O yük ki belini bükmüştü.", audioUrl: getAyahAudioUrl(94, 3) },
    { id: "94_4", surahNumber: 94, ayahNumber: 4, arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ", translation: "Ve senin şanını yüceltmedik mi?", audioUrl: getAyahAudioUrl(94, 4) },
    { id: "94_5", surahNumber: 94, ayahNumber: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "Şüphesiz her güçlükle beraber bir kolaylık vardır.", commentarySummary: "Zorluk tekil, kolaylık ise çift gelir. Hiçbir zorluk iki kolaylığı yenemez.", audioUrl: getAyahAudioUrl(94, 5) },
    { id: "94_6", surahNumber: 94, ayahNumber: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "Evet, muhakkak güçlükle beraber bir kolaylık vardır.", audioUrl: getAyahAudioUrl(94, 6) },
    { id: "94_7", surahNumber: 94, ayahNumber: 7, arabic: "فَإِذَا فَرَغْتَ فَانصَبْ", translation: "Öyleyse bir işi bitirince hemen diğerine koyul (gayret et).", audioUrl: getAyahAudioUrl(94, 7) },
    { id: "94_8", surahNumber: 94, ayahNumber: 8, arabic: "وَإِلَىٰ رَبِّكَ فَارْغَب", translation: "Ve yalnız Rabbine yönelip yalvar.", audioUrl: getAyahAudioUrl(94, 8) }
  ],

  // 103: Asr
  103: [
    {
      id: "103_1",
      surahNumber: 103,
      ayahNumber: 1,
      arabic: "وَالْعَصْرِ",
      translation: "Asra (akıp giden zamana) andolsun ki,",
      commentarySummary: "Zaman sermayedir; her an insanın ömründen bir parça eksilmektedir.",
      audioUrl: getAyahAudioUrl(103, 1)
    },
    {
      id: "103_2",
      surahNumber: 103,
      ayahNumber: 2,
      arabic: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
      translation: "İnsan gerçekten ziyan içindedir.",
      commentarySummary: "Zamanını boş geçiren ve imandan mahrum kalan herkes hüsrandadır.",
      audioUrl: getAyahAudioUrl(103, 2)
    },
    {
      id: "103_3",
      surahNumber: 103,
      ayahNumber: 3,
      arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      translation: "Ancak iman edip salih ameller işleyenler, birbirlerine hakkı tavsiye edenler ve birbirlerine sabrı tavsiye edenler müstesnadır.",
      commentarySummary: "Kurtuluşun 4 altın esası: 1. İman, 2. Salih amel, 3. Hakkı tavsiye, 4. Sabrı tavsiye.",
      audioUrl: getAyahAudioUrl(103, 3)
    }
  ],

  // 112: İhlas
  112: [
    {
      id: "112_1",
      surahNumber: 112,
      ayahNumber: 1,
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "De ki: O Allah tektir.",
      commentarySummary: "Ehad: Eşi, benzeri, dengi ve ortağı olmayan, mutlak bir olan demektir.",
      audioUrl: getAyahAudioUrl(112, 1)
    },
    {
      id: "112_2",
      surahNumber: 112,
      ayahNumber: 2,
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah Samed'dir (her şey O'na muhtaçtır, O hiçbir şeye muhtaç değildir).",
      commentarySummary: "Bütün mahlukat ihtiyaçlarını O'na arz eder; O ise zâtında ve sıfatlarında hiçbir şeye ihtiyaç duymaz.",
      audioUrl: getAyahAudioUrl(112, 2)
    },
    {
      id: "112_3",
      surahNumber: 112,
      ayahNumber: 3,
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "O doğurmamış ve doğmamıştır.",
      commentarySummary: "Müşriklerin ve ehl-i kitabın tahrif edilmiş iddialarını kökünden reddeden katıksız tevhid esası.",
      audioUrl: getAyahAudioUrl(112, 3)
    },
    {
      id: "112_4",
      surahNumber: 112,
      ayahNumber: 4,
      arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      translation: "Hiçbir şey O'nun dengi ve benzeri olmamıştır.",
      commentarySummary: "Ne zâtında ne sıfatlarında ne de fiillerinde hiçbir varlık O'na denk olamaz.",
      audioUrl: getAyahAudioUrl(112, 4)
    }
  ],

  // 113: Felak
  113: [
    { id: "113_1", surahNumber: 113, ayahNumber: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", translation: "De ki: Sabahın Rabbine sığınırım,", audioUrl: getAyahAudioUrl(113, 1) },
    { id: "113_2", surahNumber: 113, ayahNumber: 2, arabic: "مِن شَرِّ مَا خَلَقَ", translation: "Yarattığı şeylerin şerrinden,", audioUrl: getAyahAudioUrl(113, 2) },
    { id: "113_3", surahNumber: 113, ayahNumber: 3, arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", translation: "Karanlığı çöktüğü zaman gecenin şerrinden,", audioUrl: getAyahAudioUrl(113, 3) },
    { id: "113_4", surahNumber: 113, ayahNumber: 4, arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", translation: "Düğümlere üfleyen büyücülerin şerrinden,", audioUrl: getAyahAudioUrl(113, 4) },
    { id: "113_5", surahNumber: 113, ayahNumber: 5, arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", translation: "Ve haset ettiği zaman hasetçinin şerrinden.", audioUrl: getAyahAudioUrl(113, 5) }
  ],

  // 114: Nas
  114: [
    { id: "114_1", surahNumber: 114, ayahNumber: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", translation: "De ki: İnsanların Rabbine sığınırım,", audioUrl: getAyahAudioUrl(114, 1) },
    { id: "114_2", surahNumber: 114, ayahNumber: 2, arabic: "مَلِكِ النَّاسِ", translation: "İnsanların Melikine (hükümranına),", audioUrl: getAyahAudioUrl(114, 2) },
    { id: "114_3", surahNumber: 114, ayahNumber: 3, arabic: "إِلَٰهِ النَّاسِ", translation: "İnsanların İlâhına;", audioUrl: getAyahAudioUrl(114, 3) },
    { id: "114_4", surahNumber: 114, ayahNumber: 4, arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", translation: "O sinsi vesvesecinin (Hannâs'ın) şerrinden,", audioUrl: getAyahAudioUrl(114, 4) },
    { id: "114_5", surahNumber: 114, ayahNumber: 5, arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", translation: "Ki o insanların göğüslerine vesvese fısıldar;", audioUrl: getAyahAudioUrl(114, 5) },
    { id: "114_6", surahNumber: 114, ayahNumber: 6, arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", translation: "Gerek cinlerden, gerekse insanlardan!", audioUrl: getAyahAudioUrl(114, 6) }
  ]
};

// Daily Ayah rotation
export const DAILY_AYAHS: Ayah[] = [
  {
    id: "daily_1",
    surahNumber: 2,
    ayahNumber: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    translation: "Allah, O'ndan başka ilah olmayandır; Hayy'dır (ebedi diridir), Kayyûm'dur (bütün varlığı yönetendir). O'nu ne bir uyuklama ne de bir uyku tutar.",
    footnote: "Kaynak: Bakara Suresi, 255. Ayet (Âyetü'l-Kürsî) - Diyanet İşleri Başkanlığı Meali",
    commentarySummary: "Tevhidin en yüce ilanı olan bu ayet, müminin kalbine mutlak bir güven ve huzur aşılar.",
    audioUrl: getAyahAudioUrl(2, 255)
  },
  {
    id: "daily_2",
    surahNumber: 94,
    ayahNumber: 5,
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Şüphesiz her güçlükle beraber bir kolaylık vardır. Evet, muhakkak her güçlükle beraber bir kolaylık vardır.",
    footnote: "Kaynak: İnşirâh Suresi, 5-6. Ayetler - Diyanet İşleri Başkanlığı Meali",
    commentarySummary: "Zorluk anlarında sabrı ve ümidi diri tutan ilahi bir müjdedir.",
    audioUrl: getAyahAudioUrl(94, 5)
  },
  {
    id: "daily_3",
    surahNumber: 103,
    ayahNumber: 1,
    arabic: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْa بِالْحَقِّ وَتَوَاصَوْa بِالصَّبْرِ",
    translation: "Asra andolsun ki insan ziyan içindedir. Ancak iman edip salih ameller işleyenler, birbirlerine hakkı tavsiye edenler ve sabrı tavsiye edenler müstesnadır.",
    footnote: "Kaynak: Asr Suresi, 1-3. Ayetler - Diyanet Meali",
    commentarySummary: "İnsan ömrünün ve vaktin kıymetini en özlü biçimde anlatan hikmet suresidir.",
    audioUrl: getAyahAudioUrl(103, 1)
  }
];

export function getSurahData(surahNumber: number): Surah {
  const indexItem = SURAHS_INDEX.find(s => s.number === surahNumber);
  const ayahs = VERIFIED_SURAHS_DETAIL[surahNumber] || [];

  if (indexItem) {
    return {
      ...indexItem,
      ayahs
    };
  }

  return {
    number: surahNumber,
    nameTr: "Sure " + surahNumber,
    nameAr: "سورة",
    meaningTr: "",
    versesCount: ayahs.length,
    revelationPlace: "Mekke",
    juzNumber: 1,
    pageNumber: 1,
    descriptionTr: "",
    ayahs
  };
}
