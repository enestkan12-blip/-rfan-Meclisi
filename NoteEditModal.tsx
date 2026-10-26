import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PersonalNote } from '../../types';
import { X, Check } from 'lucide-react';

export const NoteEditModal: React.FC = () => {
  const { noteModalTarget, closeNoteModal, addNote } = useApp();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<PersonalNote['tag']>('Genel');

  useEffect(() => {
    if (noteModalTarget) {
      setTitle(noteModalTarget.title || '');
      setTag(noteModalTarget.tag || 'Genel');
      setContent('');
    }
  }, [noteModalTarget]);

  if (!noteModalTarget) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote({
      title: title.trim(),
      content: content.trim(),
      tag,
      referenceTitle: noteModalTarget.referenceTitle
    });

    closeNoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#FFFDF8] dark:bg-[#17251F] border border-[#C7A45D]/40 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#E5E0D5] dark:border-[#334238] flex items-center justify-between bg-[#F8F5ED] dark:bg-[#101B17]">
          <span className="font-serif-title font-bold text-sm tracking-wide text-[#123D32] dark:text-[#E5D2A1]">
            KİŞİSEL İLİM NOTU
          </span>
          <button
            onClick={closeNoteModal}
            className="p-1 rounded-full text-[#74776F] dark:text-[#B9C3B8] hover:bg-stone-200 dark:hover:bg-stone-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {noteModalTarget.referenceTitle && (
            <div className="text-[11px] text-[#92713B] dark:text-[#E5D2A1] bg-[#EDF3EC] dark:bg-[#1D2D25] p-2 rounded-xl border border-[#C7A45D]/30">
              <span className="font-semibold">İlişkili Kaynak: </span>
              {noteModalTarget.referenceTitle}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5] mb-1">
              Not Başlığı
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Örn: Bu ayetten aldığım ders..."
              className="w-full text-xs px-3 py-2.5 rounded-xl bg-white dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] text-[#26342D] dark:text-[#F5F0E5] focus:outline-none focus:ring-1 focus:ring-[#C7A45D]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5] mb-1">
              Kategori / Etiket
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(['Ayet', 'Hadis', 'Ders', 'Kavram', 'Tefekkür', 'Genel'] as PersonalNote['tag'][]).map(t => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    tag === t
                      ? 'bg-[#123D32] text-[#E5D2A1] dark:bg-[#D6B76F] dark:text-[#101B17]'
                      : 'bg-white dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] text-[#74776F] dark:text-[#B9C3B8]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#26342D] dark:text-[#F5F0E5] mb-1">
              Not İçeriği
            </label>
            <textarea
              required
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Düşüncelerini, tefekkür notlarını ve öğrenme hedeflerini buraya kaydet..."
              className="w-full text-xs p-3 rounded-xl bg-white dark:bg-[#101B17] border border-[#E5E0D5] dark:border-[#334238] text-[#26342D] dark:text-[#F5F0E5] focus:outline-none focus:ring-1 focus:ring-[#C7A45D] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={closeNoteModal}
              className="px-4 py-2 rounded-xl text-xs text-[#74776F] hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#123D32] text-[#E5D2A1] text-xs font-semibold shadow-xs active:scale-95 transition"
            >
              <Check className="w-3.5 h-3.5" />
              Notu Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
