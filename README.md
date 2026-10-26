# İrfan Meclisi

İslami ilimler, Kur'an okuma, dersler, kavramlar, kişisel notlar, favoriler ve zikir sayacı için istemci taraflı bir PWA.

## Gereksinimler
- Node.js 20.19+ veya 22.12+ (Vite 8 gereksinimi)
- npm

## Geliştirme
```bash
npm install
npm run dev
```

## Üretim derlemesi
```bash
npm run lint
npm run build
npm run preview
```

Üretim çıktısı `dist/` klasörüne yazılır. HTTPS veya localhost üzerinden servis edilmesi, PWA kurulum ve service worker özellikleri için önerilir.

## Kişisel veriler ve yedekleme
Notlar, favoriler, zikir sayaçları, ayarlar ve ilerleme bilgileri cihazdaki `localStorage` alanında tutulur. Tarayıcı verilerini silmek kayıtları silebilir. Profil > Ayarlar bölümünden JSON yedeği indirilebilir ve daha sonra geri yüklenebilir. Yedek dosyası kişisel içerik barındırabileceğinden güvenli saklanmalıdır. Veriler cihazlar arasında otomatik eşitlenmez.

## Önemli içerik notu
Uygulamadaki dinî metinler ve kaynak etiketleri yayın öncesinde yetkin bir editör tarafından birincil kaynaklarla karşılaştırılmalıdır. Uygulama içi kaynak gösterimi tek başına doğruluk veya sıhhat garantisi değildir.

## Güvenlik ve dağıtım notları
- Gerçek bir API anahtarı istemci tarafına gömülmemelidir. Yapay zekâ servisi eklenecekse anahtar sunucu tarafında saklanmalıdır.
- Harici yazı tipleri ve ses dosyaları internet bağlantısı kullanabilir; PWA önbelleği bunların tümünün çevrimdışı çalışacağını garanti etmez.
- Yayına almadan önce `npm run lint`, `npm run build`, Android/iOS gerçek cihaz testleri ve içerik denetimi yapılmalıdır.

## Bu geliştirme paketindeki sağlamlaştırmalar
- Yerel depolamadan okunan veriler tür ve sınır kontrollerinden geçirilir; bozuk/eski alanlar güvenli varsayılanlarla normalize edilir.
- Yedek dosyası, uygulama durumuna aktarılmadan önce doğrulanır; depolama yazımı başarısız olursa önceki değerler geri yüklenmeye çalışılır.
- Zikir hedefi, günlük hedef, okuma konumu ve kullanıcı metinlerine sınırlar uygulanır.
- Favori/not/zikir kayıtlarında çakışma olasılığı düşük kimlikler kullanılır.
- Depolama hatalarında kullanıcıya ekranda uyarı gösterilir.
- PWA yapılandırmasından projede bulunmayan `favicon.ico` girdisi çıkarılmıştır.

> **Doğrulama durumu:** Bu paketin hazırlandığı ortamda npm paketleri çevrimdışı önbellekte bulunmadığından `npm install`, `npm run lint` ve `npm run build` başarıyla çalıştırılamadı. Yayınlamadan önce internet erişimi olan geliştirme ortamında aşağıdaki komutları çalıştırıp Android gerçek cihaz testlerini tamamlayın.

```bash
npm install
npm run lint
npm run build
# Android klasörü ilk kez oluşturulacaksa:
npm run android:init
# Android klasörü zaten varsa:
npm run android:sync
npm run android:open
```
