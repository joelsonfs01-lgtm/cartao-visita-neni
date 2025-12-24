import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4 group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-gold-400 to-gold-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
          alt="Corretor de Imóveis" 
          className="relative w-28 h-28 rounded-full object-cover border-4 border-gold-500 shadow-lg"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-white tracking-wide mb-1">
        Ricardo Alencar
      </h1>
      
      <h2 className="text-sm font-medium text-gold-400 uppercase tracking-widest mb-3">
        Corretor de Imóveis de Luxo
      </h2>
      
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-light">
        "Transformando sonhos em endereços exclusivos."
      </p>
    </div>
  );
};