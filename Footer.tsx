
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-blue text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
            <Logo className="h-20 w-20 mb-4" />
            <p className="font-semibold text-white text-lg">Badan Legislatif Mahasiswa</p>
            <p className="font-semibold text-white text-lg mb-8">Poltekkes Kemenkes Mataram</p>

            <div className="mb-8">
              <h3 className="font-bold text-white tracking-wider mb-4">HUBUNGI KAMI</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="mailto:blmpoltekkesmtr@gmail.com" className="group flex items-center text-slate-300 hover:text-brand-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  blmpoltekkesmtr@gmail.com
                </a>
                <a href="https://www.instagram.com/blmpoltekkesmtr" target="_blank" rel="noopener noreferrer" className="group flex items-center text-slate-300 hover:text-brand-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 21.172a4 4 0 01-5.656 0l-4.242-4.242a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0L10 16.172l4.828-4.828a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-4.242 4.242zM12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
                  @blmpoltekkesmtr
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              &copy; {currentYear} BLM Poltekkes Kemenkes Mataram. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
