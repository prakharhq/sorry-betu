"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LetterPage() {
  const [isForgiven, setIsForgiven] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPosition({
      x: Math.random() * 150 - 75,
      y: Math.random() * 150 - 75,
    });
  };

  return (
    <div className="min-h-screen bg-[#FCF8F7] flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-20 selection:bg-[#F2C6C2] selection:text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[440px] md:max-w-[650px] lg:max-w-[850px] bg-[#FDFDFD] border border-[#E8DCC4] rounded-[32px] md:rounded-[40px] lg:rounded-[48px] py-8 sm:py-10 md:py-16 lg:py-20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col relative"
      >
        {!isForgiven ? (
          <>
            <div className="text-center mb-4 md:mb-6 lg:mb-8">
              <span className="text-[#D87D85] text-[9px] md:text-[12px] lg:text-[14px] font-bold tracking-[0.25em] uppercase">
                ✦ A LETTER, JUST FOR YOU ✦
              </span>
            </div>

            <h1 className="text-[#D87D85] font-serif italic text-[28px] sm:text-[32px] md:text-[46px] lg:text-[56px] text-center mb-8 md:mb-12 lg:mb-16 font-normal px-4">
              To My Betu... 🤍
            </h1>

            <div className="w-[85%] mx-auto text-[#8C776B] text-[11.5px] sm:text-[12px] md:text-[16px] lg:text-[18px] leading-relaxed md:leading-[2] space-y-5 md:space-y-8 lg:space-y-10 font-medium text-left">
              <p>
                Tu mere liye kitni special hai, shayad main words mein kabhi explain na kar paun… bas itna samajh le, tujhe khona meri life ke sabse bade regrets mein se ek hoga. 🫂❤️
              </p>
              <p>
                Main tumhe kabhi bhi hurt nahi karna chahti, par galti se kar deti hu... Uske liye I am really sorry. Mera intention tumhe kabhi hurt karna nahi hota.
              </p>
              
              {/* Permission Twist Box */}
              <div className="bg-[#FAF5F4] p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-[#F2E3E0] text-center my-6 md:my-10 lg:my-12 shadow-sm">
                <p className="text-[#D87D85] font-bold text-[12px] md:text-[16px] lg:text-[18px] tracking-wide mb-6">
                  Ek aakhri baat puchni thi... Kal main college nahi aaungi, kya tum mujhe permission deti ho? 🥺
                </p>
                
                {/* The Interactive Yes/No Buttons */}
                <div className="flex justify-center items-center gap-4 md:gap-6 relative h-[60px] md:h-[70px]">
                  <button 
                    onClick={() => setIsForgiven(true)}
                    className="bg-[#D87D85] hover:bg-[#C96D75] text-white text-[11px] md:text-[14px] font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-md z-10 transition-colors"
                  >
                    Yes ❤️
                  </button>

                  <motion.button 
                    animate={{ x: noPosition.x, y: noPosition.y }}
                    onHoverStart={moveNoButton}
                    onTouchStart={moveNoButton}
                    onClick={moveNoButton}
                    className="bg-gray-400 text-white text-[11px] md:text-[14px] font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-md absolute right-0 md:right-10"
                  >
                    No 😡
                  </motion.button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* FINAL HAPPY SCREEN */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center px-6 py-10"
          >
            <div className="text-5xl md:text-7xl mb-6">🥰💖🎉</div>
            <h1 className="text-[#D87D85] font-serif italic text-[24px] md:text-[36px] lg:text-[44px] mb-6">
              Thanks for giving permission betu ji! 🥺
            </h1>
            <p className="text-[#8C776B] text-[16px] md:text-[20px] font-semibold mb-6">
              I love you so much!!! ❤️💋
            </p>
            <div className="bg-[#FAF5F4] p-4 rounded-xl border border-[#F2E3E0] mt-6">
              <p className="text-[#D87D85] font-bold text-[14px] md:text-[18px] tracking-widest uppercase">
                Thankyou for being my happiness ☺️❤️
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}