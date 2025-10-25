
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavLinkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? 'text-white bg-brand-gold/20'
        : 'text-slate-300 hover:text-white hover:bg-white/10'
    }`}
  >
    {label}
  </button>
);

interface NavbarProps {
    currentPage: string;
    setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Beranda' },
    { label: 'Profil' },
    { label: 'Struktur' },
    { label: 'Berita' },
    { label: 'Aspirasi' },
    { label: 'Galeri' },
  ];
  
  const handleNavigate = (page: string) => {
      setPage(page);
      setIsOpen(false);
      window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navBgClass = scrolled || isOpen ? 'bg-brand-blue shadow-lg' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <button onClick={() => handleNavigate('Beranda')} className="flex items-center gap-2 text-white text-xl font-bold font-serif tracking-wider">
              <Logo className="h-10 w-10" />
              <span className="hidden sm:inline">BLM POLTEKKES MTR</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.label} 
                  label={link.label}
                  isActive={currentPage === link.label}
                  onClick={() => handleNavigate(link.label)}
                />
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-blue">
            {navLinks.map((link) => (
               <NavLink 
                  key={link.label} 
                  label={link.label}
                  isActive={currentPage === link.label}
                  onClick={() => handleNavigate(link.label)}
                />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;