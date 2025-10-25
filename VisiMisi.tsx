import React from 'react';
import SectionWrapper from './SectionWrapper';

const VisiMisi: React.FC = () => {
  const missions = [
    "Menjalankan setiap tugas dan tanggung jawab BLM berlandaskan iman dan taqwa.",
    "Menjadikan BLM sebagai mediator dalam berkomunikasi, berdiskusi, serta menampung dan menyalurkan aspirasi.",
    "Mengembangkan BLM agar dapat menciptakan inovasi, menginspirasi, serta pelayanan terbaik secara konsisten memberikan keberkahan.",
    "Bersinergi bersama untuk mewujudkan aspirasi demi kemajuan Poltekkes Kemenkes Mataram.",
  ];

  return (
    <SectionWrapper id="visi-misi" title="Visi & Misi" bgClass="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-brand-blue text-white p-8 rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-brand-gold mb-4 text-center">Visi</h3>
          <p className="text-lg leading-relaxed text-center italic">
            Mengembangkan Badan Legislatif Mahasiswa sebagai organisasi pionir yang bersinergi menciptakan inovasi, dan menginspirasi melalui peningkatan kerja sama dan kekeluargaan.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-brand-blue mb-6 text-center">Misi</h3>
          <ul className="space-y-4">
            {missions.map((misi, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{misi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisiMisi;