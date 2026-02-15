import React, { useState } from 'react';
import { ScreenProps } from '../types';

export const FinalRevelation: React.FC<ScreenProps> = ({ onNext }) => {
    const [shareDone, setShareDone] = useState(false);

    const handleShareLogic = async () => {
        const message = [
            'From the heart of Lorenz Gabriel Velasco to your heart.',
            '',
            'The Theoretical Mechanics of a 3x3 Heart',
            'Love, transformed with linear algebra.'
        ].join('\n');

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(message);
                setShareDone(true);
                window.setTimeout(() => setShareDone(false), 2200);
                return;
            }

            const textArea = document.createElement('textarea');
            textArea.value = message;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setShareDone(true);
            window.setTimeout(() => setShareDone(false), 2200);
        } catch {
            setShareDone(false);
            window.alert(message);
        }
    };

  return (
    <div className="scene-root w-full min-h-screen bg-[#8B0000] text-paper font-display min-h-screen flex flex-col relative overflow-hidden selection:bg-accent selection:text-black">
      
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-10">
        <div className="text-[30vw] text-primary font-black select-none flex flex-col items-center justify-center leading-none tracking-tighter">
                         <span className="romantic-pulse">♥</span>
        </div>
      </div>

    <main className="relative z-10 flex-grow flex flex-col items-center justify-center py-14 md:py-20 px-4 md:px-8 pt-20 md:pt-24 pb-28 md:pb-20">
        
        <header className="mb-10 md:mb-16 text-center max-w-4xl mx-auto">
            <div className="inline-block border-b-2 border-paper/30 pb-2 mb-6">
                <span className="uppercase tracking-[0.3em] text-xs font-bold text-accent/80">Final Revelation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-paper mix-blend-hard-light drop-shadow-lg">
                The Theoretical<br/>
                Mechanics of a<br/>
                <span className="text-accent">3x3 Heart</span>
            </h1>
        </header>

        <article className="max-w-2xl w-full space-y-10 md:space-y-16 text-center">
            {/* Stanza I */}
            <section className="group transition-transform hover:scale-105 duration-700">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-black/20 inline-block px-2 py-1">Theorem I: The Variable Gaze</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic font-light leading-relaxed text-paper/90">
                    Let <span className="font-bold text-accent not-italic font-mono">x</span> be the variable of your gaze,<br/>
                    Approaching infinity in discrete arrays.<br/>
                    A vector uncharted, a slope undefined,<br/>
                    Mapping coordinates deep in my mind.
                </p>
            </section>

            {/* Stanza II */}
            <section className="group transition-transform hover:scale-105 duration-700">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-black/20 inline-block px-2 py-1">Proof II: The Intersection</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic font-light leading-relaxed text-paper/90">
                    If our intersection is strictly non-zero,<br/>
                    Then logic collapses, and you are the hero.<br/>
                    No matrix can solve for the thrill in my chest,<br/>
                    An outlier datum above all the rest.
                </p>
            </section>

            {/* Stanza III */}
            <section className="group transition-transform hover:scale-105 duration-700">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-black/20 inline-block px-2 py-1">Lemma III: The Integral</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic font-light leading-relaxed text-paper/90">
                    Integrating strictly o'er the curve of your smile,<br/>
                    The area beneath it extends for a mile.<br/>
                    Calculated softly, with precision and grace,<br/>
                    My constant is fixed when I look at your face.
                </p>
            </section>

            {/* Stanza IV */}
            <section className="group transition-transform hover:scale-105 duration-700">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-black/20 inline-block px-2 py-1">Conclusion: Q.E.D.</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic font-light leading-relaxed text-paper/90">
                    The limit exists as time goes to <span className="font-mono font-bold text-accent not-italic">t</span>,<br/>
                    Converging on us, for the whole world to see.<br/>
                    The proof is trivial, the logic is art—<br/>
                    Left as an exercise for the heart.
                </p>
            </section>

            <section className="group transition-transform hover:scale-105 duration-700">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-black/20 inline-block px-2 py-1">Midnight Chords</h2>
                <p className="text-lg md:text-xl font-serif italic font-light leading-relaxed text-paper/90">
                    Neon skies, soft static, city lights in tune,<br/>
                    You pull me closer like a chorus in June.<br/>
                    Four strings of thunder, one wild heartbeat glow,<br/>
                    I find my way home in the songs we both know.
                </p>
            </section>

            <div className="w-24 h-1 bg-paper/20 mx-auto my-12"></div>
            
            <div className="text-right mt-12 pr-4 md:pr-12 transform rotate-1">
                <p className="font-serif italic font-light text-lg md:text-xl text-accent/90 inline-block border-b border-accent/50 pb-1">
                    — From the heart of Lorenz Gabriel Velasco to your heart.
                </p>
            </div>
        </article>

      </main>

    <footer className="sticky bottom-0 z-30 w-full bg-charcoal/90 backdrop-blur-md border-t-4 border-black py-4 sm:py-6 px-4 sm:px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-xs uppercase tracking-widest text-gray-400 font-bold hidden md:block">
                 System Status: <span className="text-green-500">Love_Logic_Confirmed</span>
             </div>
             <div className="flex gap-4 w-full md:w-auto">
                 <button onClick={handleShareLogic} className="flex-1 md:flex-none px-6 py-3 bg-paper text-charcoal font-bold border-2 border-black shadow-neo hover:bg-accent transition-all flex items-center justify-center gap-2">
                     <span className="material-icons text-sm">share</span> {shareDone ? 'Copied to Heart' : 'Share Logic'}
                 </button>
                 <button onClick={onNext} className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold border-2 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
                     <span className="material-icons text-sm">replay</span> Restart
                 </button>
             </div>
         </div>
      </footer>
    </div>
  );
};