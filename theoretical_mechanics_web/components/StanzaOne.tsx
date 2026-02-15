import React, { useState } from 'react';
import { ScreenProps } from '../types';

export const StanzaOne: React.FC<ScreenProps> = ({ onNext }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="scene-root w-full min-h-screen bg-dark flex flex-col lg:flex-row font-display pt-16 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 w-1 h-[200%] bg-primary/20 -translate-x-1/2 rotate-12 origin-top"></div>
      </div>

      {/* Left Panel: Cipher Input */}
      <section className="relative w-full lg:w-1/2 bg-charcoal border-b-4 lg:border-b-0 lg:border-r-4 border-paper p-4 sm:p-8 flex flex-col justify-center items-center z-10">
        <div className="max-w-md w-full">
          <div className="bg-paper text-charcoal font-black text-xs uppercase px-2 py-1 inline-block mb-4 shadow-neo-primary border-2 border-transparent">
            Input Vector C
          </div>
          
          <div className="relative bg-dark border-4 border-paper p-2 shadow-neo-paper">
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary"></div>

            <div className="grid grid-rows-3 gap-1 bg-paper">
              {[
                { label: 'c₁₁', val: '33', meaning: 'RAW_VAL: LONGING' },
                { label: 'c₂₁', val: '13', meaning: 'RAW_VAL: MEMORY' },
                { label: 'c₃₁', val: '05', meaning: 'RAW_VAL: TIME' }
              ].map((row, i) => (
                <div key={i} className="bg-charcoal p-4 sm:p-6 flex justify-between items-center group hover:bg-primary/10 transition-colors cursor-help relative overflow-hidden">
                  <span className="font-mono text-primary/50 text-sm">{row.label}</span>
                  <span className="text-4xl md:text-5xl font-black text-paper tracking-tighter group-hover:text-primary transition-colors">{row.val}</span>
                  <div className="absolute inset-0 bg-paper/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-charcoal text-xs font-bold">{row.meaning}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs sm:text-sm text-paper/60">
            <div><span className="text-primary font-bold">DIM:</span> 3x1</div>
            <div><span className="text-primary font-bold">TYPE:</span> COL_VEC</div>
            <div><span className="text-primary font-bold">STATUS:</span> ENCRYPTED</div>
          </div>
        </div>
      </section>

      {/* Right Panel: Operation */}
      <section className="relative w-full lg:w-1/2 bg-dark p-4 sm:p-8 lg:p-16 flex flex-col justify-center z-10">
         {/* Diagonal stripes CSS pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 10px, #222 10px, #222 20px)' }}></div>
        
        <div className="relative z-20 max-w-lg mx-auto w-full">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-2 leading-[0.85] uppercase text-paper">
            Stanza <span className="text-transparent" style={{ WebkitTextStroke: '1px #db143f' }}>I</span>
          </h2>
          <p className="text-base sm:text-xl font-bold text-primary mb-8 sm:mb-12 tracking-wide uppercase border-l-4 border-primary pl-4">
            The Inverse Operation
          </p>

          <div className="bg-charcoal border-4 border-paper p-4 sm:p-8 shadow-neo-paper relative mb-8">
            <div className="absolute -top-8 right-0 text-6xl font-serif italic text-white/5 select-none">K⁻¹</div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b-2 border-primary/30 pb-2">
                <span className="font-mono text-xs text-paper/70 uppercase">Operation</span>
                <span className="font-mono text-xs text-primary font-bold uppercase animate-pulse">
                  {revealed ? 'Calculation Complete' : 'Waiting for input...'}
                </span>
              </div>

              <div className="font-display text-3xl md:text-4xl font-bold flex items-center justify-center gap-4 py-4 select-none">
                <span className="text-paper/50">K⁻¹</span>
                <span className="text-primary">×</span>
                <span className="text-white">C</span>
                <span className="text-primary">=</span>
                <span className={`bg-primary text-white px-2 shadow-sm transition-all duration-500 ${revealed ? 'scale-110' : ''}`}>M</span>
              </div>

              {!revealed ? (
                <button 
                  onClick={() => setRevealed(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl font-black uppercase py-6 px-4 border-4 border-transparent hover:border-paper shadow-neo-paper transition-all group active:translate-y-1 active:shadow-none"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Multiply</span>
                    <span className="material-icons group-hover:rotate-90 transition-transform">functions</span>
                  </div>
                </button>
              ) : (
                <button 
                  onClick={onNext}
                  className="w-full bg-paper hover:bg-white text-dark text-xl md:text-2xl font-black uppercase py-6 px-4 border-4 border-transparent shadow-neo-primary transition-all group animate-fade-in"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Next mi amor</span>
                    <span className="material-icons">arrow_forward</span>
                  </div>
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Toggle switch visual (non-functional for demo) */}
             <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100">
                <div className="w-12 h-6 bg-charcoal border-2 border-paper relative">
                    <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-primary transition-transform ${revealed ? 'translate-x-6' : ''}`}></div>
                </div>
                <span className="text-xs font-mono text-paper font-bold">DEEP DIVE MODE</span>
             </div>
          </div>

          <div className="hidden sm:block absolute bottom-0 right-0 font-mono text-xs text-right opacity-30 text-paper">
             <div>MATRIX_STATE: {revealed ? 'SOLVED' : 'READY'}</div>
             <div>LOVE_COEFF: 1.618</div>
          </div>

        </div>
      </section>
    </div>
  );
};