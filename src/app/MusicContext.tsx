'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const MusicContext = createContext<any>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const specialAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingSpecial, setIsPlayingSpecial] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Gaane initialize kar rahe hain
    bgAudioRef.current = new Audio('/bg-music.mp3');
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.4; // Background music ki volume thodi kam rakhi hai

    specialAudioRef.current = new Audio('/special-song.mp3');
    specialAudioRef.current.volume = 1.0;
    
    // Jab special song khatam ho, toh background wapas chalu ho jaye
    specialAudioRef.current.onended = () => {
      setIsPlayingSpecial(false);
      bgAudioRef.current?.play();
    };

    return () => {
      bgAudioRef.current?.pause();
      specialAudioRef.current?.pause();
    };
  }, []);

  const startMusic = () => {
    if (!hasStarted) {
      bgAudioRef.current?.play().catch(e => console.log("Audio play blocked"));
      setHasStarted(true);
    }
  };

  const toggleSpecialSong = () => {
    if (!specialAudioRef.current || !bgAudioRef.current) return;

    if (isPlayingSpecial) {
      // Special band karo, Background chalu karo
      specialAudioRef.current.pause();
      setIsPlayingSpecial(false);
      bgAudioRef.current.play();
    } else {
      // Background band karo, Special chalu karo
      bgAudioRef.current.pause();
      specialAudioRef.current.currentTime = 0;
      specialAudioRef.current.play();
      setIsPlayingSpecial(true);
    }
  };

  return (
    <MusicContext.Provider value={{ startMusic, toggleSpecialSong, isPlayingSpecial }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);