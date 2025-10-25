import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')` }}>
      <div className="absolute inset-0 bg-brand-blue/75"></div>
      <div className="relative z-10 p-4 overflow-hidden">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-serif uppercase tracking-widest animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          Badan Legislatif Mahasiswa
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-brand-gold font-serif animate-fade-in-down" style={{ animationDelay: '0.5s' }}>
          Poltekkes Kemenkes Mataram
        </h2>
      </div>
    </section>
  );
};

export default Hero;