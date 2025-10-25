import React from 'react';
import SectionWrapper from './SectionWrapper';

const Gallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/event1/600/400',
    'https://picsum.photos/seed/meeting2/600/400',
    'https://picsum.photos/seed/campus3/600/400',
    'https://picsum.photos/seed/team4/600/400',
    'https://picsum.photos/seed/activity5/600/400',
    'https://picsum.photos/seed/official6/600/400',
  ];

  return (
    <SectionWrapper id="galeri" title="Galeri Kegiatan" bgClass="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={src} 
              alt={`Kegiatan BLM ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;