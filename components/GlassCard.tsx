import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <div className="w-full h-full sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden overflow-y-auto scrollbar-hide">
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        {children}
      </div>
    </div>
  );
};