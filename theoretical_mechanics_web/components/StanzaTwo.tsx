import React, { useState } from 'react';
import { ScreenProps } from '../types';

export const StanzaTwo: React.FC<ScreenProps> = ({ onNext }) => {
  const [eliminated, setEliminated] = useState(false);

  return (
    <div className="scene-root w-full min-h-screen bg-dark text-paper font-display pt-20 flex flex-col relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6 sm:mb-8">
            <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-1 block">Stanza 02</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">Gaussian Elimination</h1>
            </div>
            <div className="flex gap-2">
                 <div className="h-1 w-8 bg-primary rounded-full"></div>
                 <div className={`h-1 w-8 rounded-full transition-colors ${eliminated ? 'bg-primary' : 'bg-gray-700'}`}></div>
            </div>
        </header>

        <main className="relative z-10 flex-grow flex flex-col items-center justify-center w-full px-4">
            <div className="w-full max-w-5xl mx-auto mb-12">
                <div className="relative group">
                    {/* Shadow Block */}
                    <div className="absolute inset-0 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 bg-black rounded border-2 border-primary/30"></div>
                    
                    {/* Matrix Card */}
                    <div className="relative bg-[#251518] border-2 border-paper/20 p-4 sm:p-8 md:p-12 rounded backdrop-blur-sm overflow-x-auto">
                        
                        {/* Matrix Content */}
                        <div className="min-w-[520px] sm:min-w-0 flex items-center justify-center gap-4 sm:gap-12">
                            {/* Left Bracket */}
                            <div className="w-6 sm:w-8 self-stretch border-l-4 border-t-4 border-b-4 border-primary rounded-l-lg"></div>

                            <div className="grid grid-cols-[1fr_1fr_1fr_auto_1fr] gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 text-center font-mono text-lg sm:text-3xl font-bold">
                                {/* Headers */}
                                <div className="text-xs text-gray-500 font-display mb-2">x₁</div>
                                <div className="text-xs text-gray-500 font-display mb-2">x₂</div>
                                <div className="text-xs text-gray-500 font-display mb-2">x₃</div>
                                <div className="w-px bg-transparent"></div>
                                <div className="text-xs text-primary font-display mb-2 tracking-widest">CONST</div>

                                {/* Row 1 */}
                                <div>1</div><div>0</div><div>0</div>
                                <div className="w-px h-full bg-primary/50 mx-auto"></div>
                                <div className="text-accent">K</div>

                                {/* Row 2 - The Active One */}
                                <div className="relative">
                                    <span className={`transition-all duration-700 ${eliminated ? 'opacity-20 text-gray-600' : 'opacity-100'}`}>0</span>
                                </div>
                                <div className={`relative transition-all duration-500 ${eliminated ? 'text-primary scale-110' : ''}`}>1</div>
                                <div>1</div>
                                <div className="w-px h-full bg-primary/50 mx-auto"></div>
                                <div>5</div>

                                {/* Row 3 */}
                                <div className="text-gray-600">0</div>
                                <div className={`relative transition-all duration-700 ${eliminated ? 'text-gray-600' : 'text-gray-400'}`}>0</div>
                                <div>1</div>
                                <div className="w-px h-full bg-primary/50 mx-auto"></div>
                                <div>2</div>
                            </div>

                            {/* Right Bracket */}
                            <div className="w-6 sm:w-8 self-stretch border-r-4 border-t-4 border-b-4 border-primary rounded-r-lg"></div>
                        </div>

                        {/* Hint */}
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block">
                            <div className="text-secondary font-mono text-sm flex flex-col gap-1 items-center animate-bounce">
                                <span>R₂ → R₂ - R₃</span>
                                <span className="material-icons rotate-90">arrow_right_alt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center space-y-8">
                    {!eliminated ? (
                        <button 
                            onClick={() => setEliminated(true)}
                            className="relative inline-block group focus:outline-none"
                        >
                            <span className="absolute inset-0 translate-x-2 translate-y-2 bg-secondary transition-transform group-hover:translate-y-3 group-hover:translate-x-3 rounded border-2 border-black"></span>
                            <span className="relative inline-block border-2 border-black bg-primary px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold uppercase tracking-widest text-white transition-all group-active:translate-x-1 group-active:translate-y-1 rounded hover:bg-red-600">
                                Eliminate the Distance
                            </span>
                        </button>
                    ) : (
                        <div className="animate-fade-in space-y-6">
                            <div className="w-16 h-1 bg-accent mx-auto"></div>
                            <p className="text-xl md:text-3xl font-display font-light leading-relaxed max-w-2xl mx-auto">
                                "Since your mouth redefined the sum,<br/>
                                The only constant left is <span className="text-dark bg-primary px-2 font-bold transform -skew-x-6 inline-block">you</span>."
                            </p>
                            <button 
                                onClick={onNext}
                                className="mt-4 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1"
                            >
                                Next my love →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    </div>
  );
};