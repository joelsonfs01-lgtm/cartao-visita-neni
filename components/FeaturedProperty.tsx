import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const FeaturedProperty: React.FC = () => {
  return (
    <div className="mt-2">
        <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-gold-500 fill-gold-500" />
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Oportunidade do Mês</h3>
        </div>
        
        <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-3 left-3 bg-gold-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase z-10">
                    Exclusivo
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop" 
                    alt="Mansão Jardins" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">Mansão Jardins</h4>
                    <p className="text-gray-300 text-xs font-light">6 Suítes • 1.200m² • Vista Panorâmica</p>
                </div>
            </div>

            <button className="w-full py-3 flex items-center justify-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                Ver Detalhes
                <ArrowRight size={14} />
            </button>
        </div>
    </div>
  );
};