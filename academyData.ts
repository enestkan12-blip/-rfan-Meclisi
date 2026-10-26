import { AcademyCategory, AcademyLesson } from '../types';

export const ACADEMY_CATEGORIES: AcademyCategory[] = [
  {
    id: "cat_quran",
    name: "Kur'an İlimleri ve Tefsir",
    description: "Vahyin nüzulü, toplanması, mushaf haline gelişi ve ayetlerin derin anlam incelikleri.",
    iconName: "BookOpen",
    lessonCount: 4
  },
  {
    id: "cat_hadith",
    name: "Hadis Usulü ve Sünnet",
    description: "Sünnetin dindeki yeri, hadis ıstılahları, sahih ve zayıf rivayetleri anlama usulü.",
    iconName: "Scroll",
    lessonCount: 3
  },
  {
    id: "cat_fiqh",
    name: "Fıkıh ve İlmihal",
    description: "Günlük ibadetler, amellerde niyet, helal-haram sınırları ve kul hakkı şuuru.",
    iconName: "Scale",
    lessonCount: 3
  },
  {
    id: "cat_akaid",
    name: "Akaid ve Kelam",
    description: "İman esasları, tevhidin manevi boyutları, kader ve insanın irade sorumluluğu.",
    iconName: "ShieldCheck",
    lessonCount: 3
  },
  {
    id: "cat_siyer",
    name: "Siyer-i Nebî ve İslam Tarihi",
    description: "Hz. Peygamber'in (s.a.v.) örnek hayatı, tebliğ metodu, ashab-ı kiramın fedakarlıkları.",
    iconName: "Compass",
    lessonCount: 3
  },
  {
    id: "cat_ahlak",
    name: "İslam Ahlakı ve Maneviyat",
    description: "Kalp tasfiyesi, nefis muhasebesi, ihlas, sabır, şükür ve hüsn-i ahlak terbiyesi.",
    iconName: "Heart",
    lessonCount: 3
  }
];

export const ACADEMY_LESSONS: AcademyLesson[] = [
  {
    id: "lesson_1",
    categoryId: "cat_quran",
    categoryName: "Kur'an İlimleri ve Tefsir",
    title: "Vahiy Nedir ve Kur'an Nasıl İndirildi?",
    subtitle: "Vahyin Mahiyeti, Geliş Şekilleri ve İlk Vahiy Tecrübesi",
    estimatedMinutes: 8,
    level: "Başlangıç",
    learningObjectives: [
      "Vahyin lügat ve ıstılah manalarını kavramak",
      "Kur'an-ı Kerim'in nüzul sürecini ve hikmetlerini anlamak",
      "Mekkî ve Medenî ayetlerin temel farklarını öğrenmek"
    ],
    sections: [
      {
        id: "s1",
        title: "1. Vahiy Kavramı ve Çeşitleri",
        content: "Sözlükte gizli ve süratli bir şekilde bildirmek, ilham etmek ve fısıldamak manalarına gelen vahiy; ıstılahta Allah Teâlâ'nın kullarına ulaştırmak istediği emir, yasak ve hakikatleri peygamberlerine bildirmesidir.\n\nKur'an-ı Kerim Şûrâ Suresi 51. ayette vahyin üç şekilde gerçekleştiğini bildirir: Doğrudan kalbe ilham edilerek, perde arkasından hitap ile veya bir elçi melek (Cebrail a.s.) vasıtasıyla. Peygamber Efendimiz'e (s.a.v.) vahiy bazen çıngırak sesine benzer şiddetli bir ağırlıkla, bazen Cebrail'in insan suretinde görünmesiyle, bazen de sadık rüyalar şeklinde gelmiştir.",
        sourceCitation: "TDV İslâm Ansiklopedisi, 'Vahiy' maddesi, Cilt 42, s. 440-444."
      },
      {
        id: "s2",
        title: "2. Kur'an'ın Tedrîcî (Parça Parça) İndirilişi",
        content: "Kur'an-ı Kerim diğer bazı ilahi kitaplar gibi tek seferde bir levha halinde değil, 23 senelik bir zaman diliminde peyderpey indirilmiştir. Bunun pek çok hikmeti vardır:\n\n1. Peygamberimizin ve müminlerin kalbini takviye etmek ve zorluklar karşısında sabrı pekiştirmek (Furkan 32).\n2. Hükümlerin topluma sindirilerek, tedricen öğretilmesini sağlamak.\n3. Yaşanan hadiseler ve sorulan sorular üzerine inerek hayatla doğrudan irtibat kurmak.\n4. Ezberlenmesini ve yazıyla tespitini kolaylaştırmak.",
        sourceCitation: "Celâleddin es-Süyûtî, el-İtkân fî Ulûmi'l-Kur'ân, Cilt 1, s. 120."
      },
      {
        id: "s3",
        title: "3. Mekkî ve Medenî Ayetlerin Karakteristiği",
        content: "Hicretten önce inen ayetlere 'Mekkî', hicretten sonra inenlere ise nerede indiğine bakılmaksızın 'Medenî' denir.\n\n- Mekkî Ayetler: İnancın inşasına, tevhide, ahiret gününe, şirk ile mücadeleye ve ahlaki erdemlere odaklanır. Hitap genellikle 'Ey İnsanlar!' şeklindedir.\n- Medenî Ayetler: Toplum nizamına, ibadetlerin tafsilatına, aile hukukuna, muamelata ve toplumsal adalete odaklanır. Hitap ekseriyetle 'Ey İman Edenler!' şeklindedir.",
        sourceCitation: "Zerkeşî, el-Bürhân fî Ulûmi'l-Kur'ân, Cilt 1, s. 187."
      }
    ],
    keyTerms: ["Vahiy", "Nüzul", "Mekkî", "Medenî", "Hurûf-ı Mukattaa", "Tedrîc"],
    bibliography: [
      "TDV İslâm Ansiklopedisi, 'Vahiy' ve 'Kur'an' maddeleri.",
      "Celâleddin es-Süyûtî, el-İtkân fî Ulûmi'l-Kur'ân.",
      "Prof. Dr. İsmail Cerrahoğlu, Tefsir Usûlü, Diyanet Vakfı Yayınları."
    ],
    quiz: [
      {
        id: "q1",
        question: "Kur'an-ı Kerim'in tek seferde değil de 23 yılda parça parça indirilmesinin temel hikmetlerinden biri nedir?",
        options: [
          "Sadece Arap kabilelerinin rekabetini engellemek için",
          "Müminlerin kalbini pekiştirmek ve hükümlerin hazmedilerek yaşanmasını sağlamak",
          "Kâğıt bulunamadığı için zamana yaymak",
          "Yalnızca Medine dönemindeki savaşları beklemek"
        ],
        correctOptionIndex: 1,
        explanation: "Furkan Suresi 32. ayette belirtildiği üzere Kur'an, müminlerin kalbini kuvvetlendirmek ve hükümleri tedricen hayata geçirmek için peyderpey inmiştir."
      },
      {
        id: "q2",
        question: "Hicretten önce Mekke döneminde inen ayetlerin başlıca konusu nedir?",
        options: [
          "Miras hukuku ve devletlerarası anlaşmalar",
          "Tevhid, ahiret inancı ve ahlaki erdemler",
          "Cuma namazının farziyeti",
          "Zekat oranlarının tespiti"
        ],
        correctOptionIndex: 1,
        explanation: "Mekke döneminde vahyin ana ekseni tevhid, iman, putperestliğin reddi ve yüce ahlaki erdemlerin yerleşmesidir."
      }
    ]
  },
  {
    id: "lesson_2",
    categoryId: "cat_hadith",
    categoryName: "Hadis Usulü ve Sünnet",
    title: "Hadis İlimlerinde Sahih, Hasen ve Zayıf Kavramları",
    subtitle: "Rivayetlerin Sıhhat Kriterleri ve Hadis Tenkid Usulü",
    estimatedMinutes: 10,
    level: "Orta",
    learningObjectives: [
      "Hadisin iki temel unsuru olan sened ve metni ayırt etmek",
      "Sahih hadisin beş şartını kavramak",
      "Zayıf hadis ile mevzu (uydurma) söz arasındaki hayati farkı öğrenmek"
    ],
    sections: [
      {
        id: "h1",
        title: "1. Hadisin İki Unsuru: Sened ve Metin",
        content: "Bir hadis iki ana kısımdan meydana gelir:\n- Sened (İsnad): Hadisi Peygamber Efendimiz'den (s.a.v.) bize kadar rivayet eden râviler zinciridir. 'İsnad dindendir; eğer isnad olmasaydı herkes aklına eseni din diye söylerdi' (Abdullah b. el-Mübarek).\n- Metin: Senedin bittiği yerde başlayan ve bizzat Peygamberimiz'in sözünü, fiilini veya takririni nakleden ifadedir.",
        sourceCitation: "İbnü's-Salâh, Mukaddimetü İbni's-Salâh, s. 11-15."
      },
      {
        id: "h2",
        title: "2. Sahih Hadisin Beş Temel Şartı",
        content: "Muhaddislere göre bir hadisin 'Sahih' kabul edilebilmesi için şu beş şartın eksiksiz bulunması gerekir:\n1. İttisâlü's-sened: Râviler zincirinin baştan sona kesintisiz olması.\n2. Adâlet: Bütün râvilerin dürüst, takvalı ve güvenilir olması.\n3. Zabt: Râvilerin ezber veya yazılı muhafaza kabiliyetinin kusursuz olması.\n4. Şâzz olmaması: Güvenilir bir râvinin kendisinden daha güvenilir râvilere zıt bir rivayette bulunmaması.\n5. Muallel olmaması: Dıştan sağlam görünmekle birlikte uzmanlarınca fark edilen gizli bir kusur (illet) taşımaması.",
        sourceCitation: "İmam Nevevî, et-Takrîb ve't-Teysîr, Hadis Usulü."
      },
      {
        id: "h3",
        title: "3. Zayıf Hadis ile Mevzu Söz Arasındaki Fark",
        content: "Zayıf hadis; sahih veya hasen hadisin şartlarından birini taşımayan ancak râvisinin yalancı olduğu sabit olmayan rivayetlerdir. Zayıf hadisler akide ve helal-haram konularında delil olmaz; ancak faziletli amellerde (tergib ve terhib) bazı şartlarla dikkate alınabilir.\n\nMevzu (uydurma) ise aslında Peygamberimiz'e ait olmadığı halde kasıtlı olarak O'na nispet edilmiş ifadedir. Mevzu sözler hadis değildir ve kesinlikle dinî kaynak olarak kabul edilemez.",
        sourceCitation: "Prof. Dr. Talat Koçyiğit, Hadis Usûlü, TDV Yayınları."
      }
    ],
    keyTerms: ["Sened", "Metin", "Râvi", "Sahih", "Hasen", "Zayıf", "Mevzu"],
    bibliography: [
      "İbnü's-Salâh eş-Şehrezûrî, Ulûmu'l-Hadîs.",
      "İmam Nevevî, Riyâzü's-Sâlihîn Mukaddimesi.",
      "TDV İslâm Ansiklopedisi, 'Hadis' ve 'Sened' maddeleri."
    ],
    quiz: [
      {
        id: "qh1",
        question: "Bir hadis metnini bize ulaştıran güvenilir râviler zincirine ne ad verilir?",
        options: ["Metin", "Sened (İsnad)", "Fıkıh", "Tefsir"],
        correctOptionIndex: 1,
        explanation: "Hadisi nakleden raviler silsilesine Sened veya İsnad denir."
      }
    ]
  },
  {
    id: "lesson_3",
    categoryId: "cat_fiqh",
    categoryName: "Fıkıh ve İlmihal",
    title: "Amellerde Niyet ve İbadet Şuuru",
    subtitle: "Fıkıhta Niyetin Şartları, İhlasın Yeri ve İbadetlerin Ruhu",
    estimatedMinutes: 7,
    level: "Başlangıç",
    learningObjectives: [
      "İbadet ile örfi adet arasındaki farkı belirleyen unsuru anlamak",
      "Fıkıh ilminde niyetin yerini ve geçerlilik şartlarını öğrenmek",
      "Gösterişten (riya) uzak halis amelin değerini kavramak"
    ],
    sections: [
      {
        id: "f1",
        title: "1. Fıkıhta Niyetin Fonksiyonu",
        content: "Fıkıh usulünün en meşhur beş külli kaidesinden ilki şudur: 'el-Umûru bi-makâsıdihâ' (Bir işten maksat ne ise hüküm ona göredir).\n\nNiyetin iki büyük vazifesi vardır:\n1. Âdet olan bir davranışı ibadetten ayırt etmek: Mesela serinlemek için yıkanmak sıradan bir adettir; fakat cünüplükten temizlenmek veya cuma sünneti niyetiyle gusletmek sevap kazandıran bir ibadettir.\n2. İbadetlerin mertebelerini birbirinden ayırmak: Mesela kılınan iki rekât namazın sabah namazının sünneti mi yoksa nafile mi olduğunu kalpteki niyet belirler.",
        sourceCitation: "Mecelle-i Ahkâm-ı Adliye, 2. Madde; İbn Nüceym, el-Eşbâh ve'n-Nezâir."
      },
      {
        id: "f2",
        title: "2. Niyetin Mahalli: Kalp ve Dil",
        content: "Bütün İslam fıkıh mezheplerinin ittifakıyla niyetin asıl yeri kalptir. Bir kimse kalbinde öğle namazını kılmaya azmettiğinde niyet gerçekleşmiş olur; diliyle bunu telaffuz etmese bile namazı sahihtir.\n\nDil ile 'Niyet ettim...' şeklinde söylemek ise kalpteki azmi pekiştirmek için fakihlerin çoğunluğunca müstehap görülmüştür. Ancak kalbinde başka bir niyet varken dille başka şey söylenirse kalpteki niyet muteberdir.",
        sourceCitation: "Ömer Nasuhi Bilmen, Büyük İslam İlmihali, Namaz Kitabı."
      }
    ],
    keyTerms: ["Niyet", "İhlas", "Riya", "Külli Kaide", "Müstehap"],
    bibliography: [
      "Ömer Nasuhi Bilmen, Büyük İslam İlmihali.",
      "İmam Gazzâlî, İhyâu Ulûmi'd-Dîn, 'Niyet, İhlas ve Sıdk' bahsi.",
      "TDV İslâm Ansiklopedisi, 'Niyet' maddesi."
    ]
  },
  {
    id: "lesson_4",
    categoryId: "cat_akaid",
    categoryName: "Akaid ve Kelam",
    title: "Tevhid İnancı ve Şirkin Reddi",
    subtitle: "Zâtında, Sıfatlarında ve Fiillerinde Allah'ın Birliği",
    estimatedMinutes: 9,
    level: "Başlangıç",
    learningObjectives: [
      "Tevhid-i zâtî, tevhid-i sıfâtî ve tevhid-i ef'âlî mefhumlarını öğrenmek",
      "İhlas suresinin tevhid manifestosunu kavramak",
      "Gizli şirkten (riya) korunma yollarını bilmek"
    ],
    sections: [
      {
        id: "ak1",
        title: "1. Tevhidin Anlamı ve Kapsamı",
        content: "Tevhid, Allah Teâlâ'nın zâtında, sıfatlarında ve fiillerinde tek ve benzersiz olduğuna, hiçbir ortağı ve dengi bulunmadığına inanmaktır.\n\nKelam âlimleri tevhidi üç ana başlıkta açıklar:\n- Zâtta Tevhid: Allah'ın cisim ve cevher olmaması, parçalardan oluşmaması ve birden fazla ilahın muhal (imkânsız) olması.\n- Sıfatlarda Tevhid: Hayat, İlim, Semî, Basar, İrade, Kudret, Kelâm ve Tekvîn gibi sıfatlarının ezeli ve ebedi olması, yaratılmışların sıfatlarına benzememesi.\n- Fiillerde Tevhid: Kâinattaki bütün hâdiselerin, yaratmanın ve rızıklandırmanın yalnızca Allah'a ait olması.",
        sourceCitation: "İmam Mâtürîdî, Kitâbü't-Tevhîd; İmam el-Eş'arî, el-İbâne."
      }
    ],
    keyTerms: ["Tevhid", "Şirk", "Kelam", "Esma-i Hüsna", "Zât ve Sıfat"],
    bibliography: [
      "İmam Mâtürîdî, Kitâbü't-Tevhîd.",
      "Prof. Dr. Bekir Topaloğlu, Kelâm İlmi, Damla Yayınevi.",
      "TDV İslâm Ansiklopedisi, 'Tevhid' maddesi."
    ]
  },
  {
    id: "lesson_5",
    categoryId: "cat_ahlak",
    categoryName: "İslam Ahlakı ve Maneviyat",
    title: "Sıdk (Doğruluk) ve Kalbî İstikamet",
    subtitle: "Özü ve Sözü Bir Olmanın Mümin Ahlakındaki Merkezî Yeri",
    estimatedMinutes: 8,
    level: "Başlangıç",
    learningObjectives: [
      "Sıdk kavramının Kur'an ve Sünnet'teki temelini anlamak",
      "Dilde, niyette ve amelde doğruluk mertebelerini kavramak",
      "Doğruluğun insana kazandırdığı iç huzuru keşfetmek"
    ],
    sections: [
      {
        id: "ah1",
        title: "1. Sıdk: İmanın Temel Taşı",
        content: "Sıdk; yalandan, hileden ve ikiyüzlülükten uzak durarak sözde, işte ve niyette hakikate uygun hareket etmektir. Kur'an-ı Kerim Tevbe Suresi 119. ayette: 'Ey iman edenler! Allah'a karşı gelmekten sakının ve doğrularla (sâdıklarla) beraber olun' buyurur.\n\nPeygamber Efendimiz (s.a.v.) ise şöyle ferman buyurmuştur: 'Doğruluktan ayrılmayınız. Zira doğruluk iyiliğe götürür, iyilik de cennete iletir... Yalandan sakınınız, zira yalan fücura (günaha) götürür, günah da cehenneme iletir' (Buhârî, Edeb, 69; Müslim, Birr, 105).",
        sourceCitation: "Sahih-i Buhârî, Kitâbü'l-Edeb, Bab 69."
      }
    ],
    keyTerms: ["Sıdk", "Kizb (Yalan)", "İstikamet", "Emanet", "İhlas"],
    bibliography: [
      "İmam Gazzâlî, İhyâu Ulûmi'd-Dîn, 'Sıdk ve Niyet' cildi.",
      "Kuşeyrî, Risâle-i Kuşeyriyye, Sıdk bahsi.",
      "TDV İslâm Ansiklopedisi, 'Sıdk' maddesi."
    ]
  }
];
