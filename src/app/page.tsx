'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SurprisePage() {
  // Steps: 0=Box, 1=Song, 2=Messages, 3=Forgiveness, 4=Thankyou, 5=Permission, 6=Final Love
  const [step, setStep] = useState(0);
  const [currentMsg, setCurrentMsg] = useState(0);
  
  // "No" button ki position ke liye state (Dono pages par kaam aayega)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const specialAudioRef = useRef<HTMLAudioElement | null>(null);

  const openBox = () => {
    setStep(1);
    if (bgAudioRef.current) {
      bgAudioRef.current.volume = 0.5;
      bgAudioRef.current.play().catch(e => console.log("BG Audio Error:", e));
    }
  };

  const playSpecialSong = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
    }
    if (specialAudioRef.current) {
      specialAudioRef.current.currentTime = 0;
      specialAudioRef.current.volume = 1.0;
      specialAudioRef.current.play().catch(e => console.log("Special Audio Error:", e));
    }
  };

  const messages = [
    "Oye Meow Meow! 🐱 Meri pyari Jaan...",
    "Main tumhe kabhi bhi hurt nahi karna chahti, par galti se kar deti hu...",
    "Aapke sath spend kiya har ek pal yaad hai mujhe, main kabhi nahi bhool sakti. ✨",
    "Wo baar baar pyaar se tang karna, gaal kheechna... sab yaad hai.",
    "Main chahti hu ki hamesha tumhe pareshan karti rahu aur tumse kabhi door na hu. 🥰",
    "Tu sirf meri best friend nahi hai, tu meri life ka woh hissa hai jise main kisi bhi keemat par khona nahi chahti. ❤️",
    "Agar tujhe manane ke liye mujhe hazaar baar sorry bolna pade, toh main hazaar baar bolungi… bas tu mujhse naraz hokar door mat jaana. 🥺",
    "Meri life mein bohot log aaye aur jaayenge, par tu woh insaan hai jise main hamesha apne saath dekhna chahti hoon. 🫶🏻",
    "Kabhi meri kisi baat se tujhe hurt hua ho, toh dil se maaf kar dena… kyunki tera hurt hona mujhe khud se zyada hurt karta hai. ❤️‍🩹",
    "Tu mere liye kitni special hai, shayad main words mein kabhi explain na kar paun… bas itna samajh le, tujhe khona meri life ke sabse bade regrets mein se ek hoga. 🫂❤️",
  ];

  const nextMessage = () => {
    if (currentMsg < messages.length - 1) {
      setCurrentMsg(currentMsg + 1);
    } else {
      setStep(3); // Forgiveness Page
    }
  };

  const prevMessage = () => {
    if (currentMsg > 0) {
      setCurrentMsg(currentMsg - 1);
    }
  };

  const moveNoButton = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 overflow-hidden relative font-sans">
      
      <audio ref={bgAudioRef} src="/bg-music.mp3" loop preload="auto" />
      <audio ref={specialAudioRef} src="/special-song.mp3" preload="auto" />

      {/* STEP 0: GIFT BOX */}
      {step === 0 && (
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          onClick={openBox}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            className="text-9xl drop-shadow-2xl mb-4"
          >
            🎁
          </motion.div>
          <h1 className="text-2xl font-bold text-pink-600 animate-pulse text-center">
            Tap to Open for <br/> <span className="text-4xl text-rose-500 font-extrabold mt-2 block">My Everything ❤️</span>
          </h1>
        </motion.div>
      )}

      {/* STEP 1: SPECIAL SONG PAGE */}
      {step === 1 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-auto text-center bg-white p-8 rounded-3xl shadow-2xl border-4 border-pink-200"
        >
          <h2 className="text-3xl font-bold text-rose-500 mb-6">Hamara Special Gaana! 🎵</h2>
          <p className="text-gray-600 mb-8">Neeche click kar ke hamara favourite song chala, uske baad aage badhna...</p>
          
          <button 
            onClick={playSpecialSong}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full shadow-lg mb-8 transform transition hover:scale-105 active:scale-95 text-lg w-full"
          >
            ▶️ Play Favourite Song
          </button>

          <button 
            onClick={() => setStep(2)}
            className="text-rose-500 font-semibold underline hover:text-rose-700"
          >
            Aage Badho 👉
          </button>
        </motion.div>
      )}

      {/* STEP 2: THOUGHTS CAROUSEL */}
      {step === 2 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-lg mx-auto flex flex-col items-center"
        >
          <motion.img 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            src="/cat.png" 
            alt="Cute White Cat" 
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl mb-8"
          />

          <div className="w-full min-h-[200px] relative flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentMsg}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full bg-rose-500 text-white p-8 rounded-3xl shadow-2xl text-xl md:text-2xl font-medium text-center leading-relaxed"
              >
                {messages[currentMsg]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between w-full mt-6 px-4">
            <button 
              onClick={prevMessage}
              disabled={currentMsg === 0}
              className={`px-6 py-3 rounded-full font-bold transition-all ${currentMsg === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-rose-500 shadow-md hover:bg-pink-50'}`}
            >
              ⬅️ Peeche
            </button>
            
            <span className="text-gray-500 font-bold tracking-widest">
              {currentMsg + 1} / {messages.length}
            </span>

            <button 
              onClick={nextMessage}
              className="px-6 py-3 rounded-full font-bold bg-white text-rose-500 shadow-md hover:bg-pink-50 transition-all"
            >
              {currentMsg === messages.length - 1 ? 'Finish 🎁' : 'Aage ➡️'}
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 3: FORGIVENESS PAGE */}
      {step === 3 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-auto text-center bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200 relative min-h-[350px] flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold text-rose-600 mb-6">Toh batao Betu...</h2>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-10">Kya tumne mujhe maaf kiya? 🥺</h1>
          
          <div className="flex justify-center items-center gap-6 relative w-full h-[80px]">
            <button 
              onClick={() => { setStep(4); setNoPosition({x:0, y:0}); }} 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg z-10"
            >
              Haa, Maaf Kiya ❤️
            </button>

            <motion.button 
              animate={{ x: noPosition.x, y: noPosition.y }}
              onHoverStart={moveNoButton}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg absolute right-4"
            >
              Nahi! 😡
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* STEP 4: THANK YOU PAGE */}
      {step === 4 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
          className="text-center bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200 flex flex-col items-center"
        >
          <div className="text-6xl mb-6">🥹🫂❤️</div>
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 leading-tight">
            Thankyou for being <br/> my happiness ☺️❤️
          </h1>
          <p className="text-lg text-gray-600 mt-4 mb-8">Ab jaldi se mujhe text kar Meow Meow!</p>
          
          {/* Naya Button jo Permission page par le jayega */}
          <button 
            onClick={() => setStep(5)}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg animate-bounce"
          >
            Ek aakhri baat... 👉
          </button>
        </motion.div>
      )}

      {/* STEP 5: PERMISSION PAGE (Naya) */}
      {step === 5 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-auto text-center bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200 relative min-h-[350px] flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold text-rose-600 mb-6">Suno Betu...</h2>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-10">Kal main college nahi aaungi, kya tum mujhe permission deti ho? 🥺</h1>
          
          <div className="flex justify-center items-center gap-4 relative w-full h-[80px]">
            <button 
              onClick={() => setStep(6)} 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg z-10 text-sm md:text-base"
            >
              Haa, Chhutti Le Le ❤️
            </button>

            <motion.button 
              animate={{ x: noPosition.x, y: noPosition.y }}
              onHoverStart={moveNoButton}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute right-0 text-sm md:text-base"
            >
              Nahi! Chup-chap aa 😡
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* STEP 6: FINAL LOVE PAGE (Naya) */}
      {step === 6 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
          className="text-center bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200"
        >
          <div className="text-6xl mb-6">🥰💖🎉</div>
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 leading-tight">
            Thanks for giving permission betu ji! 🥺
          </h1>
          <h2 className="text-2xl font-bold text-rose-500 mt-4">
            I love you so much!!! ❤️💋
          </h2>
        </motion.div>
      )}

    </div>
  );
}