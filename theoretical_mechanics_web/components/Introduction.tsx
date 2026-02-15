import React from 'react';
import { ScreenProps } from '../types';

export const Introduction: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className="scene-root w-full min-h-screen bg-dark text-paper font-display flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:38px_38px] opacity-20 pointer-events-none"></div>
      <div className="absolute -top-10 -left-6 text-primary/30 text-[9rem] sm:text-[14rem] lg:text-[22rem] font-black select-none romantic-pulse">♥</div>
      <div className="absolute -bottom-12 -right-6 text-accent/20 text-[7rem] sm:text-[11rem] lg:text-[16rem] font-serif italic select-none romantic-pulse">∞</div>

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-28 flex items-center justify-center">
        <section className="w-full border-4 border-paper bg-charcoal/90 shadow-neo-primary p-5 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-primary rotate-45"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-accent rotate-12"></div>

          <p className="font-mono uppercase tracking-[0.35em] text-xs text-primary mb-5">Prologue</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
            Happy <span className="text-primary">Valentine&apos;s</span> Day
          </h1>
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl font-serif italic text-paper/90 max-w-3xl mx-auto leading-relaxed">
            Before the axioms and proofs begin, let the heart set the first condition:
            love is the only theorem we need tonight.
          </p>

          <div className="mt-8 md:mt-12 flex items-center justify-center gap-4">
            <button
              onClick={onNext}
              className="romantic-pulse w-full sm:w-auto justify-center bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-2xl font-black uppercase tracking-wide border-4 border-paper shadow-neo-paper hover:shadow-neo-lg transition-all flex items-center gap-3"
            >
              <span>Come here honey</span>
              <span className="material-icons">favorite</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
