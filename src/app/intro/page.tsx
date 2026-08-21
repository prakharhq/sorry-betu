"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function Intro() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const favoriteAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    const bgAudio = document.getElementById("global-bgm") as HTMLAudioElement;
    const favAudio = favoriteAudioRef.current;

    if (!isPlaying) {
      if (bgAudio) bgAudio.pause();
      if (favAudio) {
        favAudio.currentTime = 0;
        favAudio.play().catch((e) => console.log(e));
      }
      setIsPlaying(true);
    } else {
      if (favAudio) favAudio.pause();
      if (bgAudio) bgAudio.play().catch((e) => console.log(e));
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (favoriteAudioRef.current) favoriteAudioRef.current.pause();
    const bgAudio = document.getElementById("global-bgm") as HTMLAudioElement;
    if (bgAudio) bgAudio.play().catch((e) => console.log(e));
    router.push("/album");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#FCF8F7] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 selection:bg-[#F2C6C2] selection:text-white relative"
    >
      <audio ref={favoriteAudioRef} src="/special-song.mp3" onEnded={() => {
          setIsPlaying(false);
          const bgAudio = document.getElementById("global-bgm") as HTMLAudioElement;
          if (bgAudio) bgAudio.play().catch((e) => console.log(e));
        }} 
      />

      <div className="flex flex-col items-center z-10 w-full max-w-[320px] md:max-w-[450px] lg:max-w-[600px]">
        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10">
          <span className="text-[#D87D85] text-[10px] md:text-[12px] lg:text-[14px]">●</span>
          <span className="text-[#A69996] text-[9px] md:text-[11px] lg:text-[13px] font-medium tracking-[0.2em] uppercase">
            Only For You...
          </span>
        </div>

        <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] rounded-full border-2 md:border-4 border-white shadow-md mb-6 md:mb-8 lg:mb-10 relative bg-[#F6EBEA]">
          <img src="/cat.png" alt="Cute Cat" className="w-full h-full object-cover rounded-full" />
          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-white rounded-full p-[3px] md:p-[5px] shadow-sm flex items-center justify-center">
            <span className="text-[12px] md:text-[16px] lg:text-[20px] leading-none">💕</span>
          </div>
        </div>

        <h1 className="text-[#4A3F3F] font-serif text-[26px] md:text-[36px] lg:text-[46px] tracking-wide mb-1 md:mb-2 lg:mb-3">
          My Everything
        </h1>
        <h2 className="text-[#D87D85] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
          Jaan ♡
        </h2>

        <div className="text-[#E08D93] text-[10px] md:text-[14px] lg:text-[18px] mb-6 md:mb-8 lg:mb-10">☆</div>

        <p className="text-[#8C776B] text-[11px] md:text-[14px] lg:text-[16px] leading-[1.8] md:leading-[2] text-center mb-10 md:mb-12 lg:mb-16 px-2 font-medium">
          Aapke sath spend kiya har ek pal yaad hai mujhe, main kabhi nahi bhool sakti. Pause for a beat, aur gaana chalao.
        </p>

        {/* Music Player */}
        <div className="w-full bg-[#FDF9F6] border border-[#F0E6D8] rounded-xl p-3 md:p-4 lg:p-5 shadow-sm flex items-center gap-3 md:gap-4 lg:gap-5 mb-6 md:mb-8 lg:mb-10 relative">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#F6EBEA] rounded-md flex flex-col items-center justify-center shrink-0 border border-white">
            <span className="text-[6px] md:text-[8px] lg:text-[10px] uppercase tracking-widest text-[#A69996] mb-1">Play</span>
            <span className="text-[14px] md:text-[20px] lg:text-[24px]">🎵</span>
          </div>
          <div className="flex-1">
            <h4 className="text-[#4A3F3F] text-[11px] md:text-[14px] lg:text-[16px] font-bold mb-[2px] md:mb-1">A song for your day</h4>
            <p className="text-[#A69996] text-[8px] md:text-[10px] lg:text-[12px] tracking-[0.1em] uppercase mb-2 md:mb-3">With Love</p>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[#A69996] text-[8px] md:text-[10px] lg:text-[12px]">0:00</span>
              <div className="flex-1 h-[2px] md:h-[3px] bg-[#EADCDC] rounded-full relative">
                <motion.div className="absolute top-0 left-0 h-full bg-[#D87D85] rounded-full" animate={{ width: isPlaying ? "100%" : "0%" }} transition={{ duration: 180, ease: "linear" }} />
                <motion.div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-[#D87D85] rounded-full" animate={{ left: isPlaying ? "100%" : "0%" }} transition={{ duration: 180, ease: "linear" }} />
              </div>
            </div>
          </div>
          <button onClick={handlePlay} className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#D87D85] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
            {isPlaying ? <Pause className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white fill-white" /> : <Play className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white fill-white ml-0.5 md:ml-1" />}
          </button>
        </div>

        <motion.button onClick={handleNext} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="bg-[#D87D85] text-white text-[9px] md:text-[12px] lg:text-[14px] font-bold tracking-[0.15em] uppercase px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-full shadow-sm hover:bg-[#C96D75] transition-colors flex items-center gap-2 md:gap-3">
          Our Memories <span className="text-lg md:text-xl lg:text-2xl leading-none mb-[2px]">➝</span>
        </motion.button>
      </div>
    </motion.div>
  );
}