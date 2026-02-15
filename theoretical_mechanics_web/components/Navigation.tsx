import React from 'react';
import { AppStage, NavProps } from '../types';

export const Navigation: React.FC<NavProps> = ({ currentStage, setStage }) => {
  const handleLoginHeart = () => {
    setStage(AppStage.LANDING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stages = [
    { id: AppStage.LANDING, label: 'AXIOMS' },
    { id: AppStage.STANZA_1, label: 'STZ_01' },
    { id: AppStage.STANZA_2, label: 'STZ_02' },
    { id: AppStage.STANZA_3, label: 'STZ_03' },
    { id: AppStage.STANZA_4, label: 'STZ_04' },
    { id: AppStage.CONCLUSION, label: 'Q.E.D.' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/95 border-b-4 border-paper backdrop-blur-sm h-16 flex items-center justify-between px-4 md:px-8">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setStage(AppStage.LANDING)}
      >
        <span className="material-icons text-primary group-hover:rotate-180 transition-transform duration-500">functions</span>
        <span className="font-bold tracking-tighter uppercase text-sm md:text-base hidden sm:block">Theorem v.3.0</span>
      </div>

      <div className="flex-1 mx-2 md:mx-4 max-w-[62vw] md:max-w-none flex gap-2 md:gap-4 font-mono text-[10px] md:text-xs tracking-widest uppercase overflow-x-auto no-scrollbar">
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setStage(stage.id)}
            className={`shrink-0 px-2 py-1 transition-all border border-transparent ${
              currentStage === stage.id 
                ? 'text-primary border-primary bg-primary/10' 
                : 'text-gray-400 hover:text-paper hover:border-paper'
            }`}
          >
            [{stage.label}]
          </button>
        ))}
      </div>

      <button
        onClick={handleLoginHeart}
        className="bg-primary text-paper px-3 py-1 md:px-4 md:py-1 font-bold text-xs uppercase tracking-widest border-2 border-transparent hover:border-paper hover:shadow-neo-paper transition-all hidden sm:block"
      >
        Log in my heart to yours
      </button>
    </nav>
  );
};