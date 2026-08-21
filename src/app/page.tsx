"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    const bgAudio = document.getElementById("global-bgm") as HTMLAudioElement;
    if (bgAudio) {
      bgAudio.volume = 0.4;
      bgAudio.play().catch((e) => console.log("BGM error:", e));
    }
    setIsOpen(true);
    setTimeout(() => { setIsExiting(true); }, 1800);
    setTimeout(() => { router.push("/intro"); }, 2400);
  };

  return (
    <motion.div 
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#FCF8F7] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 selection:bg-[#F2C6C2] selection:text-white overflow-hidden relative"
    >
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center z-10 w-full max-w-[90vw]"
      >
        <div className="flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-1 md:py-1.5 bg-[#F5EBE9] rounded-full mb-8 md:mb-12 lg:mb-16 shadow-sm">
          <span className="text-[#D87D85] text-[10px] md:text-[14px]">♥</span>
          <span className="text-[#A69996] text-[8px] md:text-[11px] lg:text-[12px] font-medium tracking-[0.2em] uppercase mt-[1px]">
            A Special Surprise
          </span>
        </div>

        <h2 className="text-[#4A3F3F] font-serif text-[22px] md:text-[32px] lg:text-[42px] tracking-wide mb-1 md:mb-2 text-center">
          a little something for you
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-10 md:mb-16 lg:mb-24 text-[#D87D85]">
          <h3 className="font-serif italic text-lg md:text-2xl lg:text-3xl tracking-wide">i am so sorry</h3>
          <Heart className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] shrink-0 text-[#D87D85]" strokeWidth={2} />
        </div>

        <div className="transform scale-100 md:scale-125 lg:scale-150 xl:scale-175 flex flex-col items-center transition-transform duration-500 ease-in-out">
          <div className="relative mb-6 z-20 flex justify-center items-center w-16 h-12">
            <div className="text-4xl">🐱</div>
            <motion.div 
              animate={{ y: [0, -35], opacity: [0, 1, 0], scale: [0.6, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute top-0 right-0"
            >
              <Heart className="w-4 h-4 text-[#D87D85] fill-[#D87D85]" />
            </motion.div>
          </div>

          <motion.div 
            onClick={handleOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative mt-2 w-[240px] h-[140px] cursor-pointer"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -left-5 top-2 w-8 h-8 rounded-full bg-[#E5B5B9] border-[3px] border-dashed border-[#FCF8F7] opacity-90 z-0"></motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute -right-3 top-8 w-7 h-7 rounded-full bg-[#EAC9A7] border-[2px] border-dotted border-[#FCF8F7] opacity-90 z-0"></motion.div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 h-3 bg-[#EADCDC] rounded-[50%] blur-[2px]"></div>
            <div className="absolute inset-0 bg-[#F5EBE0] border border-[#8C776B] rounded z-0"></div>

            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: isOpen ? -75 : 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-2 left-4 right-4 bottom-2 bg-[#FFFDF9] border border-[#E8DCC4] rounded shadow-sm z-20 flex flex-col items-center pt-4"
            >
              <Heart className="w-5 h-5 text-[#E08D93] fill-[#E08D93]/20 mb-2" strokeWidth={1.5} />
              <div className="w-12 h-1 bg-[#F0E6D8] rounded-full mb-1.5"></div>
              <div className="w-20 h-1 bg-[#F0E6D8] rounded-full"></div>
            </motion.div>

            <motion.div 
              className="absolute top-0 left-0 w-full origin-top z-10"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <svg width="240" height="80" viewBox="0 0 240 80" fill="none">
                <path d="M0 0 L120 75 L240 0 Z" fill="#FCF5EB" stroke="#8C776B" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M30 20 L75 20" stroke="#8C776B" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"/>
              </svg>
            </motion.div>

            <svg className="absolute inset-0 z-30 pointer-events-none drop-shadow-sm" width="240" height="140" viewBox="0 0 240 140" fill="none">
              <path d="M0 0 L120 75 L0 140 Z" fill="#FCF5EB" stroke="#8C776B" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M240 0 L120 75 L240 140 Z" fill="#FCF5EB" stroke="#8C776B" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M0 140 L120 75 L240 140 Z" fill="#FCF5EB" stroke="#8C776B" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M120 105 C120 105 116 101 116 98 C116 95 119 94 120 97 C121 94 124 95 124 98 C124 101 120 105 120 105 Z" fill="#E2949B"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}