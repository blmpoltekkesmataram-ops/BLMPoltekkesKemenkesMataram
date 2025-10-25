import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  type: 'Berita' | 'Pengumuman' | 'Agenda';
  date: string;
}

const initialNews: NewsItem[] = [
    { id: 1, title: 'Pelatihan Kelegislatifan 2024', content: 'Pelatihan dasar mengenai fungsi dan tugas legislatif bagi seluruh anggota baru untuk meningkatkan pemahaman dan kinerja.', type: 'Agenda', date: '25 Agu 2024' },
    { id: 2, title: 'Hasil Kongres Mahasiswa', content: 'Telah ditetapkan Anggaran Dasar/Anggaran Rumah Tangga (AD/ART) dan Garis Besar Haluan Kerja (GBHK) baru untuk periode 2024/2025.', type: 'Berita', date: '18 Agu 2024' },
    { id: 3, title: 'Jadwal Ujian Akhir Semester Ganjil', content: 'Diberitahukan kepada seluruh mahasiswa bahwa Ujian Akhir Semester (UAS) akan dilaksanakan mulai tanggal 10 September 2024.', type: 'Pengumuman', date: '15 Agu 2024' },
];

const getTypeClass = (type: NewsItem['type']) => {
    switch (type) {
        case 'Berita': return 'bg-blue-100 text-blue-800';
        case 'Pengumuman': return 'bg-yellow-100 text-yellow-800';
        case 'Agenda': return 'bg-green-100 text-green-800';
        default: return 'bg-slate-100 text-slate-800';
    }
};

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        <div className="p-6 flex-grow">
            <div className="flex justify-between items-start mb-2">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getTypeClass(item.type)}`}>
                    {item.type}
                </span>
                <p className="text-sm text-slate-500">{item.date}</p>
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
        </div>
    </div>
);

const News: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>(initialNews);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({ title: '', content: '', type: 'Berita' as NewsItem['type'] });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    const handleAddItem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItem.title || !newItem.content) {
            alert('Judul dan Konten tidak boleh kosong.');
            return;
        }
        const newEntry: NewsItem = {
            id: Date.now(),
            ...newItem,
            date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
        };
        setNews([newEntry, ...news]);
        setIsModalOpen(false);
        setNewItem({ title: '', content: '', type: 'Berita' });
    };

    return (
        <SectionWrapper id="berita" title="Berita & Pengumuman">
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-gold text-brand-blue font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    + Tambah Baru
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map(item => <NewsCard key={item.id} item={item} />)}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300">
                    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative transform transition-all duration-300 scale-95 animate-fade-in-up">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 text-2xl">&times;</button>
                        <h3 className="text-2xl font-bold text-brand-blue mb-6">Tambah Berita/Pengumuman Baru</h3>
                        <form onSubmit={handleAddItem} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-slate-700">Judul</label>
                                <input type="text" name="title" id="title" value={newItem.title} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required />
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-slate-700">Konten</label>
                                <textarea name="content" id="content" rows={4} value={newItem.content} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required></textarea>
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-slate-700">Tipe</label>
                                <select name="type" id="type" value={newItem.type} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                                    <option>Berita</option>
                                    <option>Pengumuman</option>
                                    <option>Agenda</option>
                                </select>
                            </div>
                            <div className="flex justify-end pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg mr-2 hover:bg-slate-300 transition-colors">Batal</button>
                                <button type="submit" className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </SectionWrapper>
    );
};

export default News;