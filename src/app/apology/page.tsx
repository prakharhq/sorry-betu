'use client';
import { useState } from 'react';

export default function ApologyPage() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isForgiven, setIsForgiven] = useState(false);

  const moveNoButton = () => {
    // Button ko screen par random jagah bhejna
    const newX = Math.random() * 200 - 100; // -100px se 100px tak
    const newY = Math.random() * 200 - 100; // -100px se 100px tak
    setNoPosition({ x: newX, y: newY });
  };

  if (isForgiven) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4 text-center">
        <div className="text-6xl mb-6 animate-bounce">🎉😭🫂</div>
        <h1 className="text-4xl font-bold text-green-600 mb-4">THANK YOU BETU! ❤️</h1>
        <p className="text-xl text-gray-700 max-w-md">
          I promise aage se aisi galti nahi hogi. Tu meri duniya ki sabse best friend hai! Ab jaldi se mujhe call kar aur baat kar!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 p-4">
      <div className="text-center bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        <h2 className="text-2xl font-bold text-rose-600 mb-6">Toh batao Betu...</h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-10">Kya tu apni Riya ko maaf karegi? 🥺</h1>
        
        <div className="flex justify-center items-center gap-6 relative min-h-[100px]">
          <button 
            onClick={() => setIsForgiven(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg z-10"
          >
            Haa, Maaf Kiya ❤️
          </button>

          <button 
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg absolute right-10 transition-all duration-200 ease-out"
            style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
          >
            Nahi! 😡
          </button>
        </div>
      </div>
    </div>
  );
}