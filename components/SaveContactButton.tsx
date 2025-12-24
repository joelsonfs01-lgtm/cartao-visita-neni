import React from 'react';
import { UserPlus } from 'lucide-react';

export const SaveContactButton: React.FC = () => {
  const handleSaveContact = () => {
    // Basic vCard generation simulation
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Ricardo Alencar
TITLE:Corretor de Imóveis de Luxo
TEL;TYPE=CELL:+5511999999999
EMAIL:ricardo@luxestate.com
END:VCARD
    `;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'RicardoAlencar.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleSaveContact}
      className="w-full relative overflow-hidden group bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 active:scale-98"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      <div className="flex items-center justify-center gap-2 relative z-10">
        <UserPlus size={20} className="text-black" />
        <span className="uppercase tracking-widest text-sm">Salvar na Agenda</span>
      </div>
    </button>
  );
};