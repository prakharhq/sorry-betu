"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const memories = [
  {
    id: 1,
    type: "chat",
    text1: "Oye Meow Meow! 🐱",
    text2: "Kya hai? Kyu tang kar rhi hai?",
    text3: "Gaal kheechna hai tumhara! 🥰",
    caption: "Wo baar baar pyaar se tang karna, gaal kheechna... sab yaad hai mujhe.",
  },
  {
    id: 2,
    type: "quote",
    caption: "Main chahti hu ki hamesha tumhe pareshan karti rahu aur tumse kabhi door na hu. 🥰🤍",
  },
  {
    id: 3,
    type: "end",
    caption: "Aapke sath spend kiya har ek pal yaad hai mujhe, main kabhi nahi bhool sakti. Ready for next? ✨",
  }
];

export default function Album() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < memories.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="min-h-screen bg-[#FCF8F7] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 selection:bg-[#F2C6C2] selection:text-white relative overflow-hidden">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-16 left-12 md:top-24 md:left-24 lg:top-32 lg:left-32 opacity-50 text-[#E5B5B9] text-xl md:text-3xl lg:text-4xl">🌸</motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute bottom-24 right-16 md:bottom-32 md:right-28 lg:bottom-40 lg:right-40 opacity-50 text-[#EAC9A7] text-lg md:text-2xl lg:text-3xl">🌼</motion.div>

      <div className="flex flex-col items-center z-10 w-full max-w-[350px] md:max-w-[600px] lg:max-w-[800px] transform scale-100 md:scale-110 lg:scale-125 origin-center transition-all duration-300">
        <h1 className="text-[#4A3F3F] font-serif text-[26px] md:text-[36px] lg:text-[46px] tracking-wide mb-1 md:mb-2 lg:mb-3 text-center">
          our little collection
        </h1>
        <p className="text-[#A69996] text-[10px] md:text-[14px] lg:text-[16px] italic tracking-wide mb-10 md:mb-14 lg:mb-16 text-center">
          a few of my favourite moments with you ♡
        </p>

        <div className="flex items-center justify-between w-full gap-2 md:gap-8 lg:gap-16">
          <button onClick={prevSlide} disabled={currentIndex === 0} className={`w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 border border-[#E8DCC4] bg-white transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 hover:shadow-sm text-[#D87D85]'}`}>
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          <div className="relative w-[220px] h-[280px] md:w-[340px] md:h-[420px] lg:w-[420px] lg:h-[520px] perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, x: 20, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: -20, rotate: -2 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-[#FDFDFD] border border-[#F0E6D8] rounded-xl md:rounded-2xl lg:rounded-[24px] p-3 md:p-5 lg:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col">
                <div className="w-full flex-1 bg-[#F6EBEA] rounded-lg md:rounded-xl border border-[#FDFDFD] shadow-inner flex flex-col items-center justify-center p-3 md:p-5 lg:p-6 relative overflow-hidden">
                  
                  {memories[currentIndex].type === "chat" && (
                    <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
                      <div className="self-end bg-white px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 rounded-2xl rounded-tr-sm text-[10px] md:text-[13px] lg:text-[15px] text-[#4A3F3F] shadow-sm border border-[#F0E6D8] max-w-[85%] leading-relaxed">{memories[currentIndex].text1}</div>
                      <div className="self-start bg-[#D87D85] px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 rounded-2xl rounded-tl-sm text-[10px] md:text-[13px] lg:text-[15px] text-white shadow-sm max-w-[85%]">{memories[currentIndex].text2}</div>
                      <div className="self-end bg-white px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 rounded-2xl rounded-tr-sm text-[10px] md:text-[13px] lg:text-[15px] text-[#4A3F3F] shadow-sm border border-[#F0E6D8] max-w-[85%]">{memories[currentIndex].text3}</div>
                    </div>
                  )}
                  {memories[currentIndex].type === "quote" && <div className="text-4xl md:text-6xl lg:text-7xl text-center drop-shadow-sm">✨🕊️</div>}
                  {memories[currentIndex].type === "end" && <div className="text-4xl md:text-6xl lg:text-7xl text-center">💌</div>}
                </div>

                <div className="h-[80px] md:h-[120px] lg:h-[140px] flex flex-col items-center justify-center text-center px-1 md:px-4 lg:px-6 mt-2 md:mt-3 lg:mt-4">
                  <p className="text-[#A69996] text-[8px] md:text-[11px] lg:text-[13px] tracking-[0.2em] uppercase mb-2 md:mb-3 lg:mb-4">MEMORY 0{currentIndex + 1} / 0{memories.length}</p>
                  <p className="text-[#8C776B] text-[10px] md:text-[14px] lg:text-[16px] font-medium leading-relaxed italic">{memories[currentIndex].caption}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={currentIndex === memories.length - 1 ? () => router.push("/bouquet") : nextSlide} className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 border border-[#E8DCC4] bg-white hover:scale-105 hover:shadow-sm text-[#D87D85] transition-all">
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}