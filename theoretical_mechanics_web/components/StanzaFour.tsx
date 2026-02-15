import React from 'react';
import { ScreenProps } from '../types';

export const StanzaFour: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className="scene-root w-full min-h-screen bg-paper text-charcoal font-display flex flex-col selection:bg-primary selection:text-white pt-16">
       
    <header className="w-full border-b-4 border-black bg-white p-3 sm:p-4 flex justify-between items-center z-40 sticky top-16">
          <div className="flex items-center gap-4">
             <span className="text-2xl font-bold tracking-tighter uppercase border-r-4 border-black pr-4 hidden sm:inline">III x III</span>
             <span className="text-sm font-mono uppercase tracking-widest bg-black text-white px-2 py-1">Stanza 4</span>
          </div>
          <div className="flex gap-6 font-mono text-sm border-2 border-black p-2 bg-paper shadow-neo hidden md:flex">
             <span>x: 14.2</span>
             <span>y: -0.9</span>
             <span>z: 3.1</span>
          </div>
       </header>

       <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <section className="lg:col-span-8 w-full flex flex-col gap-4">
             <div className="mb-2">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-2 uppercase leading-none">
                    Vector Space <br/><span className="text-primary">Transformation</span>
                </h1>
                <p className="font-mono text-sm md:text-base border-l-4 border-primary pl-4 py-2 mt-4 bg-white border-2 border-black shadow-neo max-w-2xl">
                    Observe the ciphertext vectors floating in ℝ³. Apply the transformation matrix T to map them to the origin.
                </p>
             </div>

             {/* Graph Visual */}
             <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-charcoal border-4 border-black shadow-neo-lg overflow-hidden group">
                {/* 3D Grid Effect */}
                <div className="absolute inset-0 opacity-30 transform perspective-[1000px] rotate-x-12 scale-125 bg-grid-pattern"></div>
                
                {/* Axes */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/30"></div>
                
                {/* Vectors */}
                <div className="absolute inset-0">
                    <div className="absolute top-[30%] left-[30%] flex flex-col items-center gap-1 opacity-90 animate-pulse">
                        <div className="w-3 h-3 bg-primary border-2 border-white rounded-full"></div>
                        <span className="text-[10px] font-mono text-white bg-black px-1">v₁</span>
                    </div>
                    <div className="absolute top-[60%] left-[70%] flex flex-col items-center gap-1 opacity-90 animate-pulse" style={{animationDelay: '1s'}}>
                        <div className="w-3 h-3 bg-secondary border-2 border-white rounded-full"></div>
                        <span className="text-[10px] font-mono text-white bg-black px-1">v₂</span>
                    </div>
                     <div className="absolute top-[40%] left-[50%] flex flex-col items-center gap-1 opacity-90 animate-pulse" style={{animationDelay: '0.5s'}}>
                        <div className="w-3 h-3 bg-accent border-2 border-white rounded-full"></div>
                        <span className="text-[10px] font-mono text-white bg-black px-1">v₃</span>
                    </div>
                    
                    {/* SVG Lines connecting them roughly */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                         <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="#db143f" strokeWidth="2" strokeDasharray="4"/>
                         <line x1="50%" y1="50%" x2="70%" y2="60%" stroke="#4169E1" strokeWidth="2" strokeDasharray="4"/>
                    </svg>

                    <div className="absolute top-[15%] right-[20%] text-white/10 font-serif italic text-8xl">T</div>
                </div>

                <div className="absolute bottom-4 left-4 p-3 bg-black border border-white font-mono text-xs text-green-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                    <div>MATRIX: T [3x3]</div>
                    <div>STATUS: MAPPING...</div>
                </div>
             </div>
             
             {/* Stanza Text */}
             <div className="mt-6 p-4 sm:p-8 bg-white border-4 border-black shadow-neo relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-yellow-200 to-accent"></div>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-center italic leading-relaxed text-charcoal">
                    "The thought of us is the missing breath,<br/>
                    When you slip and find the stairs."
                </p>
                <div className="mt-4 flex justify-center">
                    <span className="material-icons text-accent animate-bounce">keyboard_double_arrow_down</span>
                </div>
             </div>
          </section>

          <aside className="lg:col-span-4 w-full flex flex-col gap-6 lg:sticky lg:top-24">
             {/* Controls */}
             <div className="bg-white p-4 sm:p-6 border-4 border-black shadow-neo flex flex-col gap-6">
                 <div className="flex items-center justify-between border-b-2 border-black pb-2">
                     <span className="font-mono font-bold uppercase text-xs sm:text-sm">Operation</span>
                     <span className="w-3 h-3 rounded-full bg-green-500 border border-black animate-pulse"></span>
                 </div>
                 <p className="text-sm font-sans text-gray-600">
                     Initiate linear transformation to collapse the vector space to the kernel.
                 </p>
                      <button 
                    onClick={onNext}
                          className="w-full py-4 sm:py-6 bg-primary text-white font-grotesk font-black text-lg sm:text-xl uppercase tracking-wider border-4 border-black shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 group"
                 >
                    <span>Transform</span>
                    <span className="material-icons group-hover:rotate-180 transition-transform duration-700">all_inclusive</span>
                 </button>
             </div>

             {/* Theorem Card */}
             <div className="bg-accent/20 p-6 border-4 border-black relative">
                 <div className="absolute -top-3 -right-3 bg-accent text-black font-bold px-3 py-1 border-2 border-black shadow-sm text-xs uppercase transform rotate-2">
                     Theorem Active
                 </div>
                 <h3 className="font-serif italic text-2xl mb-4 border-b-2 border-black pb-2">Rank-Nullity</h3>
                 <div className="space-y-4">
                     <div className="font-mono text-sm bg-white border-2 border-black p-3 text-center">
                         dim(V) = rank(T) + nullity(T)
                     </div>
                     <div className="flex items-center justify-center gap-4 text-xl font-bold font-mono">
                         <span>3</span><span>=</span><span className="text-primary">3</span><span>+</span><span className="text-gray-500">0</span>
                     </div>
                 </div>
             </div>
             
             {/* Status Footer */}
             <div className="bg-charcoal text-white p-4 border-4 border-black shadow-neo mt-auto">
                 <div className="flex justify-between items-center font-mono text-xs uppercase tracking-widest">
                     <span>Variant 1/1</span>
                     <span>System: Stable</span>
                 </div>
             </div>
          </aside>

       </main>
    </div>
  );
};