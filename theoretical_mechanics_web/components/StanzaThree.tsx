import React, { useState } from 'react';
import { ScreenProps } from '../types';

export const StanzaThree: React.FC<ScreenProps> = ({ onNext }) => {
  const [bloomed, setBloomed] = useState(false);

  return (
    <div className="scene-root w-full min-h-screen bg-paper text-charcoal font-display pt-16 flex flex-col relative overflow-hidden">
      
      {/* Top Banner */}
    <div className="text-center mt-5 sm:mt-8 relative z-10 px-4">
        <div className="inline-block bg-charcoal text-paper px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-4 border-2 border-black shadow-neo-primary">
            Stanza 03
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 leading-none">
            Determinants & <span className="italic text-primary font-serif">Inversion</span>
        </h1>
      </div>

      {/* Decorative Floating Cards */}
      <div className="absolute top-32 left-10 w-64 bg-white border-4 border-black p-4 shadow-neo-lg transform -rotate-6 hidden xl:block z-0">
         <div className="font-mono text-sm border-b-2 border-black pb-2 mb-2 font-bold">FORMULA_REF_01</div>
         <p className="font-mono text-lg font-bold">det(A) ≠ 0</p>
         <p className="text-xs mt-2 italic">Non-singular requirement met.</p>
      </div>
      
      <div className="absolute bottom-20 right-10 w-72 bg-white border-4 border-black p-4 shadow-neo-lg transform rotate-3 hidden xl:block z-0">
         <div className="font-mono text-sm border-b-2 border-black pb-2 mb-2 font-bold">INVERSE_LAW</div>
         <p className="font-mono text-lg font-bold text-primary">K⁻¹ = (1/det) × adj(K)</p>
      </div>

      {/* Main Content Grid */}
    <div className={`flex-grow w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center p-4 sm:p-8 transition-opacity duration-500 ${bloomed ? 'opacity-20 pointer-events-none filter blur-sm' : 'opacity-100'}`}>
        
        {/* Circle Visualization */}
        <div className="flex justify-center lg:justify-end">
             <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-charcoal border-[6px] border-paper shadow-neo-xl flex items-center justify-center overflow-hidden">
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 animate-spin-slow opacity-30">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fontSize="8" fill="#FFF8F0" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
                            <textPath href="#circle">
                                3X3 HEART MATRIX LOGIC SNARE 3X3 HEART
                            </textPath>
                        </text>
                    </svg>
                </div>
                
                {/* Matrix Center */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-12 h-1 bg-primary"></div>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2 font-mono text-paper text-4xl font-bold">
                        <span>3</span><span>1</span><span>4</span>
                        <span>1</span><span>5</span><span>9</span>
                        <span>2</span><span>6</span><span>5</span>
                    </div>
                    <div className="w-12 h-1 bg-primary"></div>
                </div>
             </div>
        </div>

        {/* Action Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <p className="font-serif italic text-2xl sm:text-3xl max-w-md leading-tight">
                "The matrix is singular until observed. Apply the cofactor expansion."
            </p>
            <button 
                onClick={() => setBloomed(true)}
                className="bg-primary text-paper px-8 py-6 text-xl font-bold uppercase tracking-wider border-4 border-black shadow-neo-lg hover:bg-charcoal hover:shadow-neo-primary active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-4 group"
            >
                <span>Calculate Inverse</span>
                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                // Function: Inverse_Of_Longing()
            </div>
        </div>
      </div>

      {/* Bloom Overlay (Revealed State) */}
      {bloomed && (
           <div className="absolute inset-0 z-50 bg-paper/95 backdrop-blur-md flex flex-col items-center justify-center overflow-y-auto animate-fade-in p-4">
               <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                 {[
                    {k:'k₁₁', v:'-29', c:'bg-charcoal text-accent'}, {k:'k₁₂', v:'13', c:'bg-white text-charcoal'}, {k:'k₁₃', v:'-4', c:'bg-charcoal text-accent'},
                    {k:'k₂₁', v:'19', c:'bg-white text-charcoal'}, {k:'DET=1', v:'♥', c:'bg-primary text-white scale-110 shadow-neo-xl z-10', icon:true}, {k:'k₂₃', v:'-8', c:'bg-white text-charcoal'},
                    {k:'k₃₁', v:'-11', c:'bg-charcoal text-accent'}, {k:'k₃₂', v:'7', c:'bg-white text-charcoal'}, {k:'k₃₃', v:'14', c:'bg-charcoal text-accent'}
                 ].map((item, i) => (
                    <div key={i} className={`${item.c} border-4 border-black p-1.5 sm:p-2 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-neo hover:-translate-y-1 transition-transform cursor-default`}>
                        {item.icon ? (
                            <span className="material-icons text-3xl sm:text-4xl animate-pulse">favorite</span>
                        ) : (
                            <>
                                <span className="font-mono text-[10px] opacity-60 mb-1">{item.k}</span>
                                <span className="font-mono text-base sm:text-xl md:text-2xl font-bold">{item.v}</span>
                            </>
                        )}
                    </div>
                 ))}
             </div>

             <div className="bg-white border-4 border-black p-4 sm:p-8 shadow-neo-lg max-w-2xl text-center relative">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-12 bg-black"></div>
                 <p className="text-xl sm:text-2xl md:text-3xl italic font-serif leading-tight text-charcoal mb-6 sm:mb-8">
                    “I've mapped the steps, I've traced the line,<br/>
                    But logic's hit a sudden snare—”
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button onClick={() => setBloomed(false)} className="text-xs font-mono font-bold uppercase text-gray-500 hover:text-primary underline decoration-2 underline-offset-4">Reset Matrix</button>
                    <button onClick={onNext} className="bg-charcoal text-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors border-2 border-black shadow-neo active:shadow-none active:translate-y-1">
                        Next my thunderstorm
                    </button>
                 </div>
             </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full border-t-4 border-black bg-paper py-4 px-8 flex justify-between items-center mt-auto">
         <div className="text-xs font-mono uppercase tracking-widest text-charcoal">
             System: 3x3 Heart <br/> Status: Inverted
         </div>
         <div className="h-10 w-10 bg-primary text-white font-mono font-bold text-lg border-2 border-black flex items-center justify-center shadow-neo">
             3
         </div>
      </footer>
    </div>
  );
};