import React from 'react';
import { MessageCircle, MapPin, Mail, Globe } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  colorClass?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, colorClass }) => (
  <button 
    onClick={onClick}
    className="group flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
  >
    <div className={`mb-2 p-2 rounded-full bg-white/10 ${colorClass || 'text-white'}`}>
      {icon}
    </div>
    <span className="text-xs text-gray-200 font-medium tracking-wide group-hover:text-white">
      {label}
    </span>
  </button>
);

export const ActionGrid: React.FC = () => {
  const handleWhatsapp = () => window.open('https://wa.me/', '_blank');
  const handleLocation = () => window.open('https://maps.google.com', '_blank');
  const handleEmail = () => window.location.href = 'mailto:contato@exemplo.com';
  const handleSite = () => window.open('https://example.com', '_blank');

  return (
    <div className="grid grid-cols-2 gap-4">
      <ActionButton 
        icon={<MessageCircle size={24} />} 
        label="WhatsApp" 
        onClick={handleWhatsapp}
        colorClass="text-green-400"
      />
      <ActionButton 
        icon={<MapPin size={24} />} 
        label="Localização" 
        onClick={handleLocation}
        colorClass="text-red-400"
      />
      <ActionButton 
        icon={<Mail size={24} />} 
        label="E-mail" 
        onClick={handleEmail}
        colorClass="text-blue-400"
      />
      <ActionButton 
        icon={<Globe size={24} />} 
        label="Portfólio" 
        onClick={handleSite}
        colorClass="text-gold-400"
      />
    </div>
  );
};