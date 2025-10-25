
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import VisiMisi from './components/VisiMisi';
import Tupoksi from './components/Tupoksi';
import Structure from './components/Structure';
import LeadershipStructure from './components/LeadershipStructure';
import OrmawaStructure from './components/OrmawaStructure';
import News from './components/News';
import Aspirasi from './components/Aspirasi';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'Beranda':
        return <Home setPage={setCurrentPage} />;
      case 'Profil':
        return (
          <>
            <Profile />
            <VisiMisi />
            <Tupoksi />
          </>
        );
      case 'Struktur':
        return (
          <>
            <Structure />
            <LeadershipStructure />
            <OrmawaStructure />
          </>
        );
      case 'Berita':
        return <News />;
      case 'Aspirasi':
        return <Aspirasi />;
      case 'Galeri':
        return <Gallery />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;