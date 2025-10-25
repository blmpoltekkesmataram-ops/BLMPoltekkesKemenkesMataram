import React from 'react';
import Hero from './Hero';
import SectionWrapper from './SectionWrapper';

interface NewsItem {
  id: number;
  title: string;
  type: 'Berita' | 'Pengumuman' | 'Agenda';
  date: string;
}

const latestNews: NewsItem[] = [
    { id: 1, title: 'Pelatihan Kelegislatifan 2024', type: 'Agenda', date: '25 Agu 2024' },
    { id: 2, title: 'Hasil Kongres Mahasiswa', type: 'Berita', date: '18 Agu 2024' },
    { id: 3, title: 'Jadwal Ujian Akhir Semester Ganjil', type: 'Pengumuman', date: '15 Agu 2024' },
];

const functions = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6M7 8h6" /></svg>,
        title: 'Legislasi',
        description: 'Menyusun dan menetapkan peraturan dan perundang-undangan organisasi mahasiswa.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h4m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        title: 'Anggaran',
        description: 'Mengawasi dan mengelola alokasi serta penggunaan anggaran kegiatan mahasiswa.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
        title: 'Pengawasan',
        description: 'Mengevaluasi kinerja lembaga eksekutif dan memastikan program berjalan sesuai rencana.'
    }
];

const Home: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {

    const getTypeClass = (type: NewsItem['type']) => {
        switch (type) {
            case 'Berita': return 'bg-blue-100 text-blue-800';
            case 'Pengumuman': return 'bg-yellow-100 text-yellow-800';
            case 'Agenda': return 'bg-green-100 text-green-800';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <>
            <Hero />

            {/* Welcome Section */}
             <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">Selamat Datang di Website Resmi BLM</h2>
                            <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg text-slate-600">
                                Badan Legislatif Mahasiswa (BLM) adalah pilar demokrasi di tingkat mahasiswa Poltekkes Kemenkes Mataram, berfungsi sebagai jembatan aspirasi dan pengawas jalannya organisasi.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Campus Life" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Main Functions Section */}
            <SectionWrapper id="home-fungsi" title="Tiga Fungsi Utama">
                 <div className="grid md:grid-cols-3 gap-8 text-center">
                    {functions.map(func => (
                        <div key={func.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex justify-center items-center h-20 w-20 mx-auto bg-brand-gold/20 text-brand-gold rounded-full mb-6">
                                {func.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">{func.title}</h3>
                            <p className="text-slate-600">{func.description}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Latest News Section */}
            <SectionWrapper id="home-berita" title="Berita & Agenda Terbaru" bgClass="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {latestNews.map(item => (
                        <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getTypeClass(item.type)}`}>
                                        {item.type}
                                    </span>
                                    <p className="text-sm text-slate-500">{item.date}</p>
                                </div>
                                <h3 className="text-lg font-bold text-brand-blue mb-2">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <button onClick={() => setPage('Berita')} className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-900 transition-colors duration-300">
                        Lihat Semua Berita
                    </button>
                </div>
            </SectionWrapper>

            {/* CTA Aspirasi */}
            <section className="py-20 bg-brand-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Punya Ide atau Keluhan?
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-slate-300">
                        Suara Anda penting bagi kami. Mari bersama membangun Poltekkes Mataram yang lebih baik.
                    </p>
                    <button
                        onClick={() => setPage('Aspirasi')}
                        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-brand-blue bg-brand-gold hover:bg-yellow-400 sm:w-auto transition-colors duration-300"
                    >
                        Sampaikan Aspirasi Anda
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;