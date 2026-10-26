import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Bookmark,
  FileText,
  Settings,
  Shield,
  Trash2,
  Download,
  Flame,
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Volume2,
  Type,
  Sun,
  Moon,
  Smartphone,
  Plus
} from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const {
    favorites,
    dhikrs,
    exportUserData,
    importUserData,
    removeFavorite,
    notes,
    deleteNote,
    openNoteModalFor,
    userStats,
    updateDailyGoalMinutes,
    appSettings,
    updateSettings,
    resetAllUserData,
    jumpToQuranSurah,
    setSelectedAcademyLessonId,
    setActiveTab
  } = useApp();

  const [activeSubSection, setActiveSubSection] = useState<'notes' | 'favs' | 'settings' | 'privacy'>('notes');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  // Backup includes all personal state, including the dhikr counters.
  const handleExportData = () => {
    try {
      const jsonStr = JSON.stringify(exportUserData(), null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `irfan_meclisi_yedek_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setExportNotice('Yedek dosyası indirildi. Güvenli bir yerde saklayın.');
    } catch {
      setExportNotice('Yedek oluşturulamadı. Cihazınızda yeterli alan olduğundan emin olun.');
    }
    window.setTimeout(() => setExportNotice(null), 4000);
  };

  const handleImportData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setExportNotice('Dosya çok büyük (en fazla 10 MB).');
      event.target.value = '';
      return;
    }
    if (!window.confirm('Bu yedek mevcut not, favori, zikir ve ayarların üzerine yazabilir. Önce mevcut verilerini yedeklediğinden emin ol. Devam edilsin mi?')) {
      event.target.value = '';
      return;
    }
    setIsImporting(true);
    try {
      const raw: unknown = JSON.parse(await file.text());
      const result = importUserData(raw);
      setExportNotice(result.message);
    } catch {
      setExportNotice('Dosya okunamadı. Geçerli bir JSON yedeği seçin.');
    } finally {
      setIsImporting(false);
      event.target.value = '';
      window.setTimeout(() => setExportNotice(null), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 space-y-5 pb-28">
      {exportNotice && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xl animate-in fade-in duration-200">
          {exportNotice}
        </div>
      )}

      {/* 1. Profile & Learning Journey Header */}
      <div className="rounded-3xl bg-gradient-to-br from-[#123D32] to-[#0B2B24] text-white p-6 border border-[#C7A45D]/40 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-[#C7A45D]/60 flex items-center justify-center text-[#E5D2A1]">
              <User className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#E5D2A1] uppercase block">
                İlim Yolculuğum
              </span>
              <h2 className="font-serif-title font-bold text-lg sm:text-xl text-[#FFFDF8]">
                İlim Yolcusu
              </h2>
              <p className="text-xs text-stone-300 mt-0.5">
                Kişisel Öğrenme Alanı
              </p>
            </div>
          </div>
        </div>

        {/* 4 Key Metrics Bar */}
        <div className="relative z-10 grid grid-cols-4 gap-2 pt-5 mt-4 border-t border-white/15 text-center">
          <div className="p-2 rounded-xl bg-white/5">
            <Flame className="w-4 h-4 mx-auto text-amber-400 mb-0.5" />
            <span className="font-mono font-bold text-sm text-[#E5D2A1] block">{userStats.streakDays} Gün</span>
            <span className="text-[10px] text-stone-300">İstikamet</span>
          </div>

          <div className="p-2 rounded-xl bg-white/5">
            <Award className="w-4 h-4 mx-auto text-[#E5D2A1] mb-0.5" />
            <span className="font-mono font-bold text-sm text-[#E5D2A1] block">{userStats.completedLessonIds.length}</span>
            <span className="text-[10px] text-stone-300">Ders Bitti</span>
          </div>

          <div className="p-2 rounded-xl bg-white/5">
            <Sparkles className="w-4 h-4 mx-auto text-[#C7A45D] mb-0.5" />
            <span className="font-mono font-bold text-sm text-[#E5D2A1] block">{userStats.totalDhikrCount}</span>
            <span className="text-[10px] text-stone-300">Zikir</span>
          </div>

          <div className="p-2 rounded-xl bg-white/5">
            <Bookmark className="w-4 h-4 mx-auto text-emerald-400 mb-0.5" />
            <span className="font-mono font-bold text-sm text-[#E5D2A1] block">{favorites.length}</span>
            <span className="text-[10px] text-stone-300">Favori</span>
          </div>
        </div>
      </div>

      {/* Sub navigation pills */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#EDF3EC] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238]">
        {[
          { id: 'notes', label: `Notlarım (${notes.length})`, icon: FileText },
          { id: 'favs', label: `Favoriler (${favorites.length})`, icon: Bookmark },
          { id: 'settings', label: 'Ayarlar', icon: Settings },
          { id: 'privacy', label: 'Gizlilik', icon: Shield }
        ].map(item => {
          const isActive = activeSubSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSubSection(item.id as any)}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition ${
                isActive
                  ? 'bg-[#123D32] text-[#E5D2A1] shadow-xs'
                  : 'text-[#74776F] dark:text-[#B9C3B8]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Personal Notes View */}
      {activeSubSection === 'notes' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1]">
              Kişisel Notlarım
            </h3>
            <button
              onClick={() => openNoteModalFor({ title: '', tag: 'Genel' })}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold active:scale-95 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Yeni Not</span>
            </button>
          </div>

          {notes.length === 0 ? (
            <div className="p-8 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-dashed border-[#E5E0D5] dark:border-[#334238] text-center space-y-1">
              <FileText className="w-8 h-8 mx-auto text-[#C7A45D]/40 mb-1" />
              <p className="font-serif-title text-sm font-semibold text-[#26342D] dark:text-[#F5F0E5]">
                İlk notunu oluştur.
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                Okuduğun ayetlerden, hadislerden veya aldığın derslerden sana dokunan hususları buraya kaydedebilirsin.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                        {note.tag}
                      </span>
                      <h4 className="font-serif-title font-bold text-sm text-[#26342D] dark:text-[#F5F0E5]">
                        {note.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 transition"
                      title="Notu Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {note.referenceTitle && (
                    <p className="text-[11px] text-[#92713B] dark:text-[#D6B76F] italic">
                      İlişkili: {note.referenceTitle}
                    </p>
                  )}

                  <p className="text-xs text-[#26342D] dark:text-[#F5F0E5] leading-relaxed whitespace-pre-line">
                    {note.content}
                  </p>

                  <div className="text-[10px] text-[#74776F] dark:text-[#B9C3B8] pt-1 border-t border-[#E5E0D5]/60 dark:border-[#334238]/60">
                    {new Date(note.updatedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. Favorites View */}
      {activeSubSection === 'favs' && (
        <div className="space-y-3">
          <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1]">
            Kaydedilenler ve Favoriler
          </h3>

          {favorites.length === 0 ? (
            <div className="p-8 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-dashed border-[#E5E0D5] dark:border-[#334238] text-center space-y-1">
              <Bookmark className="w-8 h-8 mx-auto text-[#C7A45D]/40 mb-1" />
              <p className="font-serif-title text-sm font-semibold text-[#26342D] dark:text-[#F5F0E5]">
                Henüz favori içeriğin yok.
              </p>
              <p className="text-xs text-[#74776F] dark:text-[#B9C3B8]">
                Beğendiğin ayetleri, dersleri ve hikmetleri yer imi olarak burada saklayabilirsin.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {favorites.map((fav) => (
                <div
                  key={fav.id}
                  className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#101B17] px-2 py-0.5 rounded-md">
                      {fav.type}
                    </span>

                    <button
                      onClick={() => removeFavorite(fav.targetId)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 transition"
                      title="Favorilerden Çıkar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h4 className="font-serif-title font-bold text-sm text-[#26342D] dark:text-[#F5F0E5]">
                    {fav.title}
                  </h4>

                  {fav.arabic && (
                    <p className="font-arabic text-sm text-[#123D32] dark:text-[#F5F0E5] line-clamp-1" dir="rtl">
                      {fav.arabic}
                    </p>
                  )}

                  <p className="text-xs text-[#74776F] dark:text-[#B9C3B8] line-clamp-2">
                    "{fav.preview}"
                  </p>

                  {fav.sourceInfo && (
                    <p className="text-[10px] text-[#92713B] dark:text-[#D6B76F] pt-1">
                      Kaynak: {fav.sourceInfo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. Settings View */}
      {activeSubSection === 'settings' && (
        <div className="space-y-3.5">
          {/* Theme Settings */}
          <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-3">
            <span className="font-serif-title font-bold text-xs uppercase text-[#123D32] dark:text-[#E5D2A1] block">
              Görsel Tema Tercihi
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'light', label: 'Açık Tema', icon: Sun },
                { id: 'dark', label: 'Koyu Tema', icon: Moon },
                { id: 'system', label: 'Sistem', icon: Smartphone }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => updateSettings({ theme: t.id as any })}
                  className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition ${
                    appSettings.theme === t.id
                      ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                      : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238] text-[#74776F]'
                  }`}
                >
                  <t.icon className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Settings */}
          <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-3">
            <span className="font-serif-title font-bold text-xs uppercase text-[#123D32] dark:text-[#E5D2A1] block">
              Yazı Boyutu
            </span>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'small', label: 'Küçük' },
                { id: 'medium', label: 'Normal' },
                { id: 'large', label: 'Büyük' },
                { id: 'xlarge', label: 'Ekstra' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => updateSettings({ fontSize: s.id as any })}
                  className={`py-2 rounded-xl border text-xs font-semibold transition ${
                    appSettings.fontSize === s.id
                      ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                      : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238] text-[#74776F]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Learning Goal */}
          <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] space-y-2">
            <span className="font-serif-title font-bold text-xs uppercase text-[#123D32] dark:text-[#E5D2A1] block">
              Günlük İlim Hedefi
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#74776F] dark:text-[#B9C3B8]">Günde ayrılacak süre:</span>
              <div className="flex gap-1.5">
                {[10, 15, 20, 30].map(m => (
                  <button
                    key={m}
                    onClick={() => updateDailyGoalMinutes(m)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                      userStats.dailyGoalMinutes === m
                        ? 'bg-[#123D32] text-[#E5D2A1] border-[#123D32]'
                        : 'bg-white dark:bg-[#101B17] border-[#E5E0D5] dark:border-[#334238] text-[#74776F]'
                    }`}
                  >
                    {m} dk
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vibration and Haptic feedback */}
          <div className="p-4 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between">
            <div>
              <span className="font-semibold text-xs text-[#26342D] dark:text-[#F5F0E5] block">
                Zikirmatik Titreşimi
              </span>
              <p className="text-[11px] text-[#74776F] dark:text-[#B9C3B8]">
                Sayaç artırıldığında hafif dokunsal titreşim geri bildirimi
              </p>
            </div>
            <input
              type="checkbox"
              checked={appSettings.hapticFeedback}
              onChange={(e) => updateSettings({ hapticFeedback: e.target.checked })}
              className="accent-[#123D32] w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Data Export & Reset Buttons */}
          <div className="pt-2 space-y-2">
            <a
              href="/irfan-meclisi.zip"
              download="irfan-meclisi.zip"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#123D32] to-[#235747] border border-[#C7A45D]/60 text-[#E5D2A1] text-xs font-semibold flex items-center justify-center gap-2 active:scale-98 transition shadow-sm text-center"
            >
              <Download className="w-4 h-4 text-[#C7A45D]" />
              <span>Tüm Projeyi ZIP Olarak İndir (Kaynak Kodları)</span>
            </a>

            <button
              onClick={handleExportData}
              className="w-full py-3 rounded-2xl bg-[#EDF3EC] dark:bg-[#1D2D25] border border-[#C7A45D]/40 text-[#123D32] dark:text-[#E5D2A1] text-xs font-semibold flex items-center justify-center gap-2 active:scale-98 transition"
            >
              <Download className="w-4 h-4" />
              <span>Kişisel Verilerimi Yedekle (JSON)</span>
            </button>

            <label className={`w-full py-3 rounded-2xl border border-[#E5E0D5] dark:border-[#334238] text-[#123D32] dark:text-[#E5D2A1] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer ${isImporting ? 'opacity-60 pointer-events-none' : ''}`}>
              <FileText className="w-4 h-4" />
              <span>{isImporting ? 'Yedek yükleniyor…' : 'Yedekten Geri Yükle (JSON)'}</span>
              <input type="file" accept="application/json,.json" onChange={handleImportData} disabled={isImporting} className="sr-only" />
            </label>

            {showResetConfirm ? (
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 space-y-2 text-center">
                <p className="text-xs text-red-900 dark:text-red-200 font-semibold">
                  Notların, favorilerin, zikirlerin, ilerlemen ve ayarların sıfırlanacak. Önce yedek almanı öneririz. Emin misin?
                </p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => {
                      resetAllUserData();
                      setShowResetConfirm(false);
                    }}
                    className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-xl"
                  >
                    Evet, Tümünü Sil
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-4 py-1.5 bg-stone-200 dark:bg-stone-800 text-xs font-semibold rounded-xl"
                  >
                    Vazgeç
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full py-2.5 rounded-2xl text-red-600 dark:text-red-400 text-xs font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kişisel Verileri Sıfırla</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 5. Privacy & Security Statement (BÖLÜM 22) */}
      {activeSubSection === 'privacy' && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#FFFDF8] dark:bg-[#1D2D25] border border-[#E5E0D5] dark:border-[#334238] shadow-xs space-y-3.5 text-xs text-[#26342D] dark:text-[#F5F0E5] leading-relaxed">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E5E0D5] dark:border-[#334238]">
            <Shield className="w-5 h-5 text-[#C7A45D]" />
            <h3 className="font-serif-title font-bold text-sm text-[#123D32] dark:text-[#E5D2A1]">
              Gizlilik, Güvenlik ve Veri Politikası
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">1. Sıfır Telemetri ve Yerel Depolama:</h4>
            <p className="text-[#74776F] dark:text-[#B9C3B8]">
              Kişisel notlar, favoriler, zikir sayaçları ve ilerleme bilgileri bu sürümde cihazınızın tarayıcı belleğinde (localStorage) tutulur; uygulama bunlar için kendi hesabınızı veya veritabanını kullanmaz. Tarayıcı verilerini silmek bu kayıtları kaldırabilir. Yedek dosyası hassas kişisel bilgiler içerebileceğinden güvenli saklayın. Yazı tipleri ve ses gibi bazı içerikler internet bağlantısı kullanabilir.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">2. Kaynak Güvenilirliği:</h4>
            <p className="text-[#74776F] dark:text-[#B9C3B8]">
              İçeriklerde kaynak bilgileri gösterilmeye çalışılır; ancak bu uygulamadaki her ayet meali, hadis numarası, sıhhat hükmü ve ilmî açıklama bağımsız olarak doğrulanmış kabul edilmemelidir. Dinî hüküm ve atıfları güvenilir birincil kaynaklardan ayrıca kontrol edin.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-[#123D32] dark:text-[#E5D2A1]">3. Hesap Açma Zorunluluğu Yoktur:</h4>
            <p className="text-[#74776F] dark:text-[#B9C3B8]">
              Uygulamayı kullanmak için e-posta, şifre veya kimlik bilgisi paylaşmanız gerekmez. İstediğiniz an ayarlar sekmesinden verilerinizi tek bir tıkla yedekleyebilir veya tamamen silebilirsiniz.
            </p>
          </div>

          <div className="pt-2 border-t border-[#E5E0D5]/60 dark:border-[#334238]/60 text-[11px] text-[#92713B] dark:text-[#D6B76F]">
            İrfan Meclisi · İlimde derinlik, hikmette incelik, gönülde güzellik.
          </div>
        </div>
      )}
    </div>
  );
};
