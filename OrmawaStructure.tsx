
import React from 'react';
import SectionWrapper from './SectionWrapper';

const OrgBox: React.FC<{ name: string, className?: string }> = ({ name, className }) => (
  <div className={`border-2 border-slate-800 bg-white shadow-md py-3 px-4 rounded-md text-center font-semibold text-brand-blue ${className}`}>
    {name}
  </div>
);

const LegendItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-4 text-sm md:text-base">{children}</div>
);

const OrmawaStructure: React.FC = () => {
  return (
    <SectionWrapper id="ormawa" title="Struktur Hubungan Ormawa" bgClass="bg-white">
      <div className="max-w-3xl mx-auto p-4 md:p-8 bg-slate-50 rounded-lg shadow-xl border-t-4 border-brand-gold">
        {/* Chart Area */}
        <div className="relative w-full h-[300px] sm:h-[350px]">
          {/* Organizations */}
          <OrgBox name="BLM" className="absolute top-0 left-[5%] w-[80px] sm:w-[100px]" />
          <OrgBox name="BEM" className="absolute top-0 right-[5%] w-[80px] sm:w-[100px]" />
          <OrgBox name="HMJ" className="absolute top-1/2 -translate-y-1/2 right-[25%] w-[80px] sm:w-[100px]" />
          <OrgBox name="UKM" className="absolute top-1/2 -translate-y-1/2 right-0 w-[80px] sm:w-[100px]" />
          <OrgBox name="HIMA Prodi" className="absolute bottom-0 right-[25%] w-[100px] sm:w-[120px]" />

          {/* Connecting Lines */}
          {/* BLM <--> BEM (LPJ - Solid) */}
          <div className="absolute top-[22px] left-[calc(5%+80px)] sm:left-[calc(5%+100px)] right-[calc(5%+80px)] sm:right-[calc(5%+100px)] h-px border-t-2 border-slate-800"></div>
          {/* BLM <--> BEM (Pengawasan - Dashed) */}
          <div className="absolute top-[28px] left-[calc(5%+80px)] sm:left-[calc(5%+100px)] right-[calc(5%+80px)] sm:right-[calc(5%+100px)] h-px border-t-2 border-dashed border-slate-800"></div>
          
          {/* BEM to HMJ/UKM main vertical */}
          <div className="absolute top-[48px] right-[calc(5%+40px)] sm:right-[calc(5%+50px)] w-px h-[calc(50%-48px)] bg-slate-800"></div>
          {/* BEM to HMJ/UKM horizontal */}
          <div className="absolute top-1/2 -translate-y-[28px] right-[calc(0%+40px)] sm:right-[calc(0%+50px)] w-[calc(30%)] h-px bg-slate-800"></div>
          {/* HMJ vertical connector */}
          <div className="absolute top-1/2 -translate-y-[28px] right-[calc(25%+40px)] sm:right-[calc(25%+50px)] w-px h-[28px] bg-slate-800"></div>
          {/* UKM vertical connector */}
          <div className="absolute top-1/2 -translate-y-[28px] right-[calc(0%+40px)] sm:right-[calc(0%+50px)] w-px h-[28px] bg-slate-800"></div>
          
          {/* HMJ to HIMA Prodi */}
          <div className="absolute bottom-[48px] right-[calc(25%+40px)] sm:right-[calc(25%+50px)] w-px h-[calc(50%-48px)] bg-slate-800"></div>
          
          {/* BLM to HMJ (Pengawasan - Dashed) */}
          <div className="absolute top-[48px] left-[calc(5%+40px)] sm:left-[calc(5%+50px)] w-px h-[calc(50%-75px)] border-l-2 border-dashed border-slate-800"></div>
          <div className="absolute top-1/2 -translate-y-[28px] left-[calc(5%+40px)] sm:left-[calc(5%+50px)] w-[calc(100%-5%-40px-25%-40px)] sm:w-[calc(100%-5%-50px-25%-50px)] h-px border-t-2 border-dashed border-slate-800"></div>
          
          {/* BLM to HIMA Prodi (Pengawasan - Dashed) */}
          <div className="absolute top-[48px] left-[calc(5%+40px)] sm:left-[calc(5%+50px)] w-px h-[calc(100%-75px)] border-l-2 border-dashed border-slate-800"></div>
          <div className="absolute bottom-[24px] left-[calc(5%+40px)] sm:left-[calc(5%+50px)] w-[calc(100%-5%-40px-25%-40px-10px)] sm:w-[calc(100%-5%-50px-25%-50px-20px)] h-px border-t-2 border-dashed border-slate-800"></div>
        </div>

        {/* Legend */}
        <div className="mt-12 pt-8 border-t-2 border-slate-200">
          <h3 className="text-xl font-bold text-brand-blue mb-6">Keterangan:</h3>
          <div className="space-y-4 text-slate-700">
            <LegendItem>
              <div className="w-12 h-6 border-2 border-slate-800 rounded bg-white"></div>
              <span>: Organisasi</span>
            </LegendItem>
            <LegendItem>
              <div className="w-12 h-px border-b-2 border-slate-800"></div>
              <span>: Laporan Pertanggung Jawaban</span>
            </LegendItem>
            <LegendItem>
              <div className="w-12 h-px border-b-2 border-dashed border-slate-800"></div>
              <span>: Pengawasan</span>
            </LegendItem>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OrmawaStructure;
