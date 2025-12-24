import React, { useState, useEffect } from 'react';
import { GlassCard } from './components/GlassCard';
import { ProfileHeader } from './components/ProfileHeader';
import { ActionGrid } from './components/ActionGrid';
import { SaveContactButton } from './components/SaveContactButton';
import { FeaturedProperty } from './components/FeaturedProperty';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Container - Mobile First Approach */}
      <main 
        className={`
          relative z-10 w-full max-w-md h-full min-h-screen sm:min-h-[90vh] sm:h-auto 
          flex flex-col p-4 sm:p-0 transition-opacity duration-1000 ease-out
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <GlassCard>
          <div className="flex flex-col gap-6 animate-fade-in-up">
            
            {/* 1. Topo (Perfil) */}
            <ProfileHeader />

            {/* 2. Botões de Ação Rápida */}
            <ActionGrid />

            {/* 3. Botão de Destaque "Salvar Contato" */}
            <SaveContactButton />

            {/* 4. Destaque de Imóvel */}
            <FeaturedProperty />

            {/* 5. Rodapé */}
            <Footer />

          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default App;