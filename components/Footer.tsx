import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-2 pt-4 border-t border-white/10">
      <div className="flex gap-6">
        <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110">
            <Instagram size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110">
            <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110">
            <Facebook size={20} />
        </a>
      </div>
      
      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
        © 2024 LuxEstate. All Rights Reserved.
      </p>
    </div>
  );
};