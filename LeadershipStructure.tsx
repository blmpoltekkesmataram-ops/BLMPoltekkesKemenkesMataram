import React from 'react';
import SectionWrapper from './SectionWrapper';

const MemberCard: React.FC<{ role: string, name: string, imageUrl: string, isTopLevel?: boolean }> = ({ role, name, imageUrl, isTopLevel }) => (
  <div className="bg-white text-center p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center">
    <img src={imageUrl} alt={name} className={`w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md border-4 ${isTopLevel ? 'border-brand-gold/50' : 'border-slate-200'}`} />
    <h4 className={`font-bold ${isTopLevel ? 'text-brand-blue text-lg' : 'text-slate-800'}`}>{role}</h4>
    <p className="text-slate-600 text-sm">{name}</p>
  </div>
);

const ConnectingLine: React.FC<{ height?: string }> = ({ height = 'h-12' }) => (
  <div className={`w-px bg-slate-300 mx-auto ${height}`}></div>
);

const HorizontalLine: React.FC = () => (
    <div className="w-full h-px bg-slate-300"></div>
)

const members = {
    top: [
        { role: "Ketua Umum", name: "Muhammad Al-Fatih", imageUrl: "https://i.pravatar.cc/150?u=ketua" },
        { role: "Wakil Ketua Umum", name: "Aisha Nuraini", imageUrl: "https://i.pravatar.cc/150?u=wakil" }
    ],
    mid: [
        { role: "Sekretaris", name: "Citra Dewi", imageUrl: "https://i.pravatar.cc/150?u=sekretaris" },
        { role: "Bendahara", name: "Budi Santoso", imageUrl: "https://i.pravatar.cc/150?u=bendahara" }
    ],
    commissions: [
        { role: "Koordinator Komisi I", name: "Putu Gede", imageUrl: "https://i.pravatar.cc/150?u=komisi1" },
        { role: "Koordinator Komisi II", name: "Siti Aminah", imageUrl: "https://i.pravatar.cc/150?u=komisi2" },
        { role: "Koordinator Komisi III", name: "Eka Wijaya", imageUrl: "https://i.pravatar.cc/150?u=komisi3" },
        { role: "Koordinator Komisi IV", name: "Rizky Pratama", imageUrl: "https://i.pravatar.cc/150?u=komisi4" }
    ]
}


const LeadershipStructure: React.FC = () => {
  return (
    <SectionWrapper id="leadership" title="Struktur Kepemimpinan" bgClass="bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center flex-col">
          {/* Top Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-md">
             {members.top.map(member => <MemberCard key={member.role} {...member} isTopLevel />)}
          </div>

          <ConnectingLine />

           {/* Mid Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-md">
            {members.mid.map(member => <MemberCard key={member.role} {...member} />)}
          </div>

          <ConnectingLine />

          {/* Connection to Commissions */}
          <div className="w-full max-w-3xl relative">
            <HorizontalLine />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-300"></div>
          </div>
          
          <ConnectingLine height="h-8"/>
          
          {/* Commissions Level */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-5xl relative">
            {/* Vertical lines from horizontal bar */}
             <div className="absolute top-0 left-[12.5%] -translate-x-1/2 w-px h-8 bg-slate-300 hidden lg:block"></div>
             <div className="absolute top-0 left-[37.5%] -translate-x-1/2 w-px h-8 bg-slate-300 hidden lg:block"></div>
             <div className="absolute top-0 left-[62.5%] -translate-x-1/2 w-px h-8 bg-slate-300 hidden lg:block"></div>
             <div className="absolute top-0 left-[87.5%] -translate-x-1/2 w-px h-8 bg-slate-300 hidden lg:block"></div>
             <div className="absolute top-0 left-[25%] -translate-x-1/2 w-px h-8 bg-slate-300 lg:hidden"></div>
             <div className="absolute top-0 left-[75%] -translate-x-1/2 w-px h-8 bg-slate-300 lg:hidden"></div>

            {members.commissions.map(member => <MemberCard key={member.role} {...member} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LeadershipStructure;