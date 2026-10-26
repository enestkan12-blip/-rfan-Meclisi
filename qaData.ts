import { QAItem } from '../types';

export const RELIABLE_QA_LIST: QAItem[] = [
  {
    id: "qa_1",
    question: "Namazda huşû nasıl elde edilir ve zihin dağınıklığı namazı bozar mı?",
    category: "İbadet ve Fıkıh",
    shortAnswer: "Zihne gelen vesvese ve düşünceler namazı fıkhen bozmaz; ancak huşû namazın manevi ruhudur. Namaza hazırlık, okunan ayetlerin manasını düşünmek ve aczini idrak etmek huşûyu artırır.",
    detailedAnswer: "Fıkıh âlimlerinin ittifakıyla, namaz kılarken irade dışı hatıra gelen vesvese ve dünyevi düşünceler namazın sıhhatine zarar vermez ve sehiv secdesi gerektirmez. Ancak Kur'an-ı Kerim, 'Onlar ki namazlarında derin bir saygı (huşû) içindedirler' (Mü'minûn, 2) buyurarak huşûyu müminin temel vasfı saymıştır.\n\nHuşûyu artırmak için âlimler şu adımları tavsiye eder:\n1. Abdesti sünnete uygun ve sükûnetle almak.\n2. Namaza başlamadan evvel dünyanın geçiciliğini ve Yüce Yaratıcı'nın huzurunda durulduğunu bir an tefekkür etmek.\n3. Namazda okunan Fâtiha, sure ve zikirlerin manalarını öğrenip dil ile söylerken kalple tasdik etmek.\n4. Bakışları secde mahallinden ayırmamak.",
    ayatsCited: ["Mü'minûn Suresi, 1-2. Ayetler", "Bakara Suresi, 45. Ayet"],
    hadithsCited: ["'Kişiye namazından ancak şuuruyla kıldığı kadarı yazılır.' (Ebû Dâvûd, Salât, 124)"],
    scholarlyViews: "Hanefî, Şâfiî, Mâlikî ve Hanbelî mezheplerinde huşû namazın farz rükünlerinden değil, ruhu ve fazileti olarak kabul edilmiştir. Gazzâlî, ilk tekbir anındaki kalp huzurunun asgari şart olduğunu vurgulamıştır.",
    source: "Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu Fetvaları; İmam Gazzâlî, İhyâu Ulûmi'd-Dîn."
  },
  {
    id: "qa_2",
    question: "Kaza namazı borcu olan bir kimse nafile veya sünnet namaz kılabilir mi?",
    category: "Fıkıh ve İbadet",
    shortAnswer: "Vakit namazlarıyla birlikte kılınan müekked sünnetler terk edilmemelidir. Bunun haricinde nafile kılmak yerine farz kazaları ödemek Hanefî ve diğer mezheplerce daha evla görülmüştür.",
    detailedAnswer: "Bu meselede mezhepler arasında içtihadi nüanslar bulunmaktadır:\n\n- Hanefî Mezhebi: Beş vakit namazın öncesinde ve sonrasında kılınan müekked sünnetlerin (sabah, öğle, akşam ve yatsının son sünneti) kılınmaya devam edilmesi gerektiğini ifade ederler. Zira Peygamber Efendimiz bu sünnetleri terk etmemiştir. Ancak bunların dışındaki müstakil nafileler yerine kaza namazı kılmak daha hayırlıdır.\n- Şâfiî ve Mâlikî Mezhepleri: Üzerinde kaza namazı borcu bulunan bir kimsenin, vakit namazlarının sünnetleri de dahil olmak üzere nafilelerle meşgul olmayıp bir an önce borcunu kaza etmesi gerektiğini belirtmişlerdir.",
    ayatsCited: ["Tâhâ Suresi, 14. Ayet ('Beni anmak için namaz kıl!')"],
    hadithsCited: ["'Kim bir namazı unutur veya uyuyup geçirirse, onu hatırladığı vakit kılsın.' (Buhârî, Mevâkît, 37; Müslim, Mesâcid, 314)"],
    scholarlyViews: "Bütün fakihler bir an önce farz borcunu ödemenin ehemmiyetinde müttefiktir; sünnetlerin kılınıp kılınmayacağı konusunda ise yukarıdaki usul farkı mevcuttur.",
    source: "TDV İslâm Ansiklopedisi, 'Kaza' maddesi; İbn Âbidîn, Reddü'l-Muhtâr."
  },
  {
    id: "qa_3",
    question: "Kader nedir ve insanın cüz-i iradesi kaderle nasıl bağdaşır?",
    category: "Akaid ve Kelam",
    shortAnswer: "Kader, Allah'ın her şeyi ezeli ilmiyle bilmesi ve takdir etmesidir. Allah'ın bilmesi zorlayıcı (cebrî) değildir; insan kendi cüz-i iradesiyle tercih eder, Allah da o tercihi yaratır.",
    detailedAnswer: "Ehl-i Sünnet akidesine göre (Mâtürîdiyye ve Eş'ariyye):\n\n- İlim Sıfatı: Allah Teâlâ geçmişi, şimdiyi ve geleceği zamandan münezzeh ezeli ilmiyle bilir. Bir şeyi Allah bildiği için insan yapmaz; insan hür iradesiyle yapacağı için Allah bunu ezelde bilmiştir. Tıpkı bir astronomun ay tutulmasını önceden hesaplamasının tutulmaya sebep olmaması gibi.\n- Cüz-i İrade ve Kesb: İnsana hayır veya şer arasında seçim yapma kabiliyeti (irade) verilmiştir. Fiili yaratan Allah'tır (Hâlık), fiili tercih edip kesbeden ise insandır. Bu sebeple insan sevap veya cezadan bizzat sorumludur.",
    ayatsCited: ["İnsan Suresi, 3. Ayet ('Şüphesiz biz ona doğru yolu gösterdik; ister şükreder ister nankörlük eder.')", "Kehf Suresi, 29. Ayet"],
    hadithsCited: ["'Çalışınız! Zira herkes ne için yaratılmışsa o amel kendisine kolaylaştırılır.' (Buhârî, Tefsîr, 92; Müslim, Kader, 6)"],
    scholarlyViews: "İmam Mâtürîdî ve İmam Eş'arî, cebriye (insanın rüzgar önündeki yaprak gibi iradesiz olduğu iddiası) ile mutezile (insanın kendi fiilinin yaratıcısı olduğu iddiası) arasındaki orta yolu Ehl-i Sünnet çizgisi olarak tesis etmiştir.",
    source: "İmam Mâtürîdî, Kitâbü't-Tevhîd; Prof. Dr. Bekir Topaloğlu, Kelâm İlmi."
  },
  {
    id: "qa_4",
    question: "Kur'an meali okurken abdestli olmak şart mıdır?",
    category: "Kur'an ve Adab",
    shortAnswer: "Arapça Kur'an metninin bizzat kendisine dokunmak için abdestli olmak cumhur ulemaya göre şarttır. Sadece Türkçe meal içeren kitaplara abdestsiz dokunulabilir; ancak hürmeten abdestli olmak müstehaptır.",
    detailedAnswer: "Fakihlerin çoğunluğu Vâkıa Suresi 79. ayeti ('Ona ancak arınmış olanlar dokunabilir') delil alarak mushaf-ı şerife abdestsiz dokunulamayacağını hükme bağlamıştır.\n\nEğer bir kitapta hem Arapça metin hem meal varsa:\n- Arapça metin çoğunlukta veya denk ise dokunmak için abdest gerekir.\n- Sadece meal veya tefsir ise dokunmak caiz görülmüş, fakat ilahi kelamın tercümesine de saygı gereği abdestli olmak edep olarak tavsiye edilmiştir. Dijital ekran üzerinden okumada ise ekrana dokunmak caizdir.",
    ayatsCited: ["Vâkıa Suresi, 77-79. Ayetler"],
    hadithsCited: ["'Kur'an'a ancak temiz olan dokunsun.' (Muvatta, Kur'an, 1)"],
    scholarlyViews: "Cumhur-ı fukaha (dört mezhep) mushafa abdestsiz dokunmayı caiz görmez; İbn Abbas ve bazı tâbiîn âlimleri ayetin melekler hakkında olduğunu belirtmiştir.",
    source: "Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu; el-Fetâva'l-Hindiyye."
  }
];
