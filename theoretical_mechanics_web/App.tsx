import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AppStage } from './types';
import { Navigation } from './components/Navigation';
import { Introduction } from './components/Introduction';
import { Landing } from './components/Landing';
import { StanzaOne } from './components/StanzaOne';
import { StanzaTwo } from './components/StanzaTwo';
import { StanzaThree } from './components/StanzaThree';
import { StanzaFour } from './components/StanzaFour';
import { FinalRevelation } from './components/FinalRevelation';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stageClass = useMemo(() => {
    if (stage === AppStage.INTRO) return 'page-intro';
    if (stage === AppStage.LANDING) return 'page-axioms';
    if (stage >= AppStage.STANZA_1 && stage <= AppStage.STANZA_4) return 'page-stanza';
    return 'page-qed';
  }, [stage]);

  const startMusic = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = 0.45;
      await audioRef.current.play();
      setMusicStarted(true);
      setMusicPlaying(true);
      setMusicError(false);
    } catch {
      setMusicError(true);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch {
        setMusicError(true);
      }
      return;
    }
    audioRef.current.pause();
    setMusicPlaying(false);
  };

  // Smooth transition handler
  const handleStageChange = (newStage: AppStage) => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setStage(newStage);
      setIsTransitioning(false);
    }, 300);
  };

  const nextStage = () => {
    if (stage === AppStage.INTRO && !musicStarted) {
      void startMusic();
    }

    if (stage < AppStage.CONCLUSION) {
      handleStageChange(stage + 1);
    } else {
      handleStageChange(AppStage.INTRO);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  return (
    <div className="min-h-screen bg-dark">
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/music/piledriver-waltz.mp3"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
        onError={() => setMusicError(true)}
      />

      {stage !== AppStage.INTRO && <Navigation currentStage={stage} setStage={handleStageChange} />}
      
      <div className={`${stageClass} transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {stage === AppStage.INTRO && <Introduction onNext={nextStage} isActive={stage === AppStage.INTRO} />}
        {stage === AppStage.LANDING && <Landing onNext={nextStage} isActive={stage === AppStage.LANDING} />}
        {stage === AppStage.STANZA_1 && <StanzaOne onNext={nextStage} isActive={stage === AppStage.STANZA_1} />}
        {stage === AppStage.STANZA_2 && <StanzaTwo onNext={nextStage} isActive={stage === AppStage.STANZA_2} />}
        {stage === AppStage.STANZA_3 && <StanzaThree onNext={nextStage} isActive={stage === AppStage.STANZA_3} />}
        {stage === AppStage.STANZA_4 && <StanzaFour onNext={nextStage} isActive={stage === AppStage.STANZA_4} />}
        {stage === AppStage.CONCLUSION && <FinalRevelation onNext={nextStage} isActive={stage === AppStage.CONCLUSION} />}
      </div>

      {stage !== AppStage.INTRO && (
        <button
          onClick={() => void toggleMusic()}
          className="fixed right-2 sm:right-3 bottom-2 sm:bottom-3 z-[70] bg-charcoal/90 text-paper border-2 border-primary px-2 py-1 sm:px-2.5 sm:py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wide shadow-neo-primary hover:border-paper hover:scale-[1.02]"
        >
          {musicPlaying ? 'Pause Music' : 'Play Music'}
        </button>
      )}

      {musicError && stage !== AppStage.INTRO && (
        <div className="fixed left-2 sm:left-4 bottom-10 sm:bottom-4 z-[70] max-w-[70vw] sm:max-w-xs bg-dark/95 border-2 border-accent text-accent px-2.5 sm:px-3 py-1.5 sm:py-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">
          Add music file at /public/music/piledriver-waltz.mp3
        </div>
      )}
    </div>
  );
};

export default App;