import React from 'react';
import { ScreenProps } from '../types';

export const Landing: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className="scene-root w-full min-h-screen bg-dark text-paper font-display flex flex-col pt-16">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] pointer-events-none opacity-20"></div>

      <main className="flex-grow w-full h-full p-3 sm:p-4 lg:p-12 overflow-y-auto relative z-10">
        <div className="w-full max-w-7xl mx-auto min-h-[80vh] grid grid-cols-1 lg:grid-cols-12 lg:border-4 lg:border-paper bg-dark relative shadow-neo-primary">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-8 lg:p-12 lg:border-r-4 lg:border-paper relative">
            <div className="absolute top-4 left-4 text-xs font-mono opacity-50 flex flex-col gap-1">
              <span>COORD: 0,0</span>
              <span>T-MINUS: <span className="text-primary animate-pulse">FOREVER</span></span>
            </div>

            <div className="mt-12 lg:mt-20 space-y-6">
              <div className="inline-block bg-primary/20 px-3 py-1 rounded-full border border-primary/40">
                <span className="text-primary font-mono text-xs font-bold tracking-widest">VOL. 3 ISSUE 3</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase mix-blend-screen">
                The <span className="text-primary">Theoretical</span> Mechanics of a <br/>
                <span className="italic font-serif">3x3 Heart</span>
              </h1>
              <p className="font-mono text-sm lg:text-base text-gray-400 border-l-2 border-primary pl-4 py-1 max-w-md">
                // A LINEAR TRANSFORMATION OF THE AFTERTHOUGHT //
              </p>
            </div>

            <div className="mt-12 lg:mt-auto space-y-8">
              <div className="p-4 sm:p-6 border-2 border-paper/20 bg-primary/5 backdrop-blur-sm relative group hover:border-primary/50 transition-colors">
                <span className="material-icons absolute -top-3 -left-3 text-primary bg-dark p-1">format_quote</span>
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-200">
                  "The rows are stacked against me now, <br/>
                  In determinants I cannot solve..."
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>pg. 142</span>
                  <span className="h-px w-8 bg-current"></span>
                  <span>stanza_01</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-8">
                <button 
                  onClick={onNext}
                  className="relative bg-paper text-dark px-8 py-4 font-bold text-lg uppercase tracking-wider shadow-neo-primary hover:shadow-neo hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200 border-2 border-transparent"
                >
                  Start Transformation
                </button>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="font-mono text-xs text-gray-400">STATUS: CALCULATING...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Matrix Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[500px] lg:min-h-full overflow-hidden border-t-4 lg:border-t-0 border-paper bg-dark">
            {/* Background Symbols */}
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none select-none">
              <span className="absolute top-10 right-10 text-6xl text-primary font-serif italic rotate-12">∫</span>
              <span className="absolute bottom-20 left-10 text-5xl text-primary font-serif italic -rotate-6">∂</span>
              <span className="absolute top-1/2 left-4 text-4xl text-primary font-serif opacity-50">Σ</span>
            </div>

            {/* Matrix */}
            <div className="relative z-10 p-6 sm:p-12">
              <div className="flex items-center">
                {/* Left Bracket */}
                <div className="w-6 sm:w-8 h-48 sm:h-64 lg:h-80 border-l-4 border-t-4 border-b-4 border-paper relative"></div>
                
                {/* Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-8 px-2 sm:px-4 lg:px-8">
                   {[1, 0, 0, 0, '♥', 0, 0, 0, 1].map((item, idx) => (
                     <div key={idx} className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center font-mono text-2xl sm:text-3xl">
                       {item === '♥' ? (
                         <div className="relative group cursor-pointer">
                           <span className="material-icons text-4xl sm:text-5xl text-primary animate-pulse romantic-pulse group-hover:scale-125 transition-transform duration-300">favorite</span>
                           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 whitespace-nowrap bg-dark px-2 border border-primary">VAR: LOVE</div>
                         </div>
                       ) : (
                         <span className={item === 1 ? 'text-primary' : 'text-gray-600'}>{item}</span>
                       )}
                     </div>
                   ))}
                </div>

                {/* Right Bracket */}
                <div className="w-6 sm:w-8 h-48 sm:h-64 lg:h-80 border-r-4 border-t-4 border-b-4 border-paper"></div>
              </div>
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">Fig 1.2: Identity Matrix of Emotion</p>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary"></div>
          </div>

        </div>
      </main>
    </div>
  );
};