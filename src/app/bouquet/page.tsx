"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const wishes = [
  { id: 1, title: "MY BEST FRIEND ❤️", flower: "🌸", text: "Tu sirf meri best friend nahi hai, tu meri life ka woh hissa hai jise main kisi bhi keemat par khona nahi chahti." },
  { id: 2, title: "SORRY 🥺", flower: "🌺", text: "Agar tujhe manane ke liye mujhe hazaar baar sorry bolna pade, toh main hazaar baar bolungi… bas tu mujhse naraz hokar door mat jaana." },
  { id: 3, title: "FOREVER 🫂", flower: "🌼", text: "Meri life mein bohot log aaye aur jaayenge, par tu woh insaan hai jise main hamesha apne saath dekhna chahti hoon." }
];

export default function Bouquet() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF8F7] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 selection:bg-[#F2C6C2] selection:text-white relative overflow-hidden">
      <div className="flex flex-col items-center z-10 w-full max-w-[340px] md:max-w-[500px] lg:max-w-[650px]">
        
        <h1 className="text-[#4A3F3F] font-serif text-[22px] md:text-[34px] lg:text-[42px] tracking-wide mb-1 md:mb-2 lg:mb-3 text-center">
          a tiny bouquet of thoughts
        </h1>
        <p className="text-[#A69996] text-[10px] md:text-[14px] lg:text-[16px] italic tracking-wide mb-8 md:mb-12 lg:mb-16 text-center">
          {step < 3 ? "tap each card to reveal what's inside ♡" : "a little note for you ♡"}
        </p>

        <div className="w-full min-h-[280px] md:min-h-[360px] lg:min-h-[420px] flex items-center justify-center mb-8 md:mb-12 lg:mb-16 relative">
          <AnimatePresence mode="wait">
            {step < 3 ? (
              <motion.div key={`wish-${step}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="w-full bg-[#FDFDFD] border border-[#E8DCC4] rounded-[28px] md:rounded-[36px] lg:rounded-[40px] p-6 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center relative">
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#F6EBEA] flex items-center justify-center text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8 shadow-inner border border-white">{wishes[step].flower}</div>
                <h3 className="text-[#A69996] text-[8.5px] md:text-[11px] lg:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 lg:mb-8">{wishes[step].title} ({step + 1}/3)</h3>
                {!revealed ? (
                  <motion.div onClick={() => setRevealed(true)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full py-8 md:py-12 lg:py-16 bg-[#F8F2EF] border border-dashed border-[#E5C9C4] rounded-2xl md:rounded-3xl cursor-pointer flex flex-col items-center justify-center transition-colors hover:bg-[#F3EBE7]">
                    <span className="text-xl md:text-3xl lg:text-4xl mb-1 md:mb-2 lg:mb-3">💌</span>
                    <span className="text-[#D87D85] text-[10px] md:text-[13px] lg:text-[15px] font-bold tracking-widest uppercase">Tap to open surprise ♡</span>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="w-full flex flex-col items-center">
                    <p className="w-[85%] mx-auto text-[#8C776B] text-[11px] md:text-[14px] lg:text-[16px] leading-[1.8] md:leading-[2] font-medium mb-6 md:mb-8 lg:mb-10 text-left">{wishes[step].text}</p>
                    <motion.button onClick={() => { setStep(step + 1); setRevealed(false); }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} className="bg-[#D87D85] text-white text-[9px] md:text-[12px] lg:text-[14px] font-bold tracking-[0.15em] uppercase px-7 py-3 md:px-9 md:py-4 lg:px-11 lg:py-5 rounded-full shadow-sm hover:bg-[#C96D75] transition-colors">Next ✨</motion.button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div key="final-card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="w-full bg-[#FDFDFD] border border-[#E8DCC4] rounded-[28px] md:rounded-[36px] lg:rounded-[40px] pt-9 pb-6 px-6 md:pt-14 md:pb-10 md:px-10 lg:pt-16 lg:pb-12 lg:px-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center relative mt-4 md:mt-8">
                <div className="absolute -top-6 md:-top-10 lg:-top-12 left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#FFF5F5] border-2 md:border-4 border-white shadow-md flex items-center justify-center text-2xl md:text-4xl lg:text-5xl">🐱💕</div>
                <h3 className="text-[#4A3F3F] font-serif text-[18px] md:text-[26px] lg:text-[34px] tracking-wide mb-3 md:mb-5 lg:mb-6 mt-1 md:mt-2">for my betu ♡</h3>
                <p className="w-[85%] mx-auto text-[#8C776B] text-[10.5px] md:text-[14px] lg:text-[16px] leading-relaxed md:leading-[2] font-medium mb-6 md:mb-8 lg:mb-10 text-center">Kabhi meri kisi baat se tujhe hurt hua ho, toh dil se maaf kar dena… kyunki tera hurt hona mujhe khud se zyada hurt karta hai. ❤️‍🩹</p>
                <motion.button onClick={() => router.push("/letter")} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} className="bg-[#D87D85] text-white text-[9px] md:text-[12px] lg:text-[14px] font-bold tracking-[0.15em] uppercase px-7 py-3 md:px-9 md:py-4 lg:px-11 lg:py-5 rounded-full shadow-sm hover:bg-[#C96D75] transition-colors">READ MY LETTER ➝</motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative flex justify-center w-full">
          <div className="z-10 relative transform scale-100 md:scale-125 lg:scale-150 origin-bottom transition-transform duration-300">
            <svg width="60" height="45" viewBox="0 0 90 70" fill="none" className="drop-shadow-sm opacity-90">
              <path d="M10 0 L80 0 L70 65 C68 70 22 70 20 65 L10 0 Z" fill="#FDFDFD" stroke="#E8DCC4" strokeWidth="2"/>
              <path d="M5 0 L85 0" stroke="#E8DCC4" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}