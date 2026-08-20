'use client';
import Link from 'next/link';
import { useMusic } from '../MusicContext';

export default function StoryPage() {
  const { toggleSpecialSong, isPlayingSpecial } = useMusic();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-6 py-12">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* Special Song Button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={toggleSpecialSong}
            className={`font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 ${
              isPlayingSpecial ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' : 'bg-indigo-500 hover:bg-indigo-600 text-white'
            }`}
          >
            {isPlayingSpecial ? '⏸️ Stop Special Song' : '🎵 Play Our Favourite Song'}
          </button>
        </div>

        {/* Aapki special baatein yahan aayengi (Ye sample hai) */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-400">
          <p className="text-lg text-gray-800">
            "Tu sirf meri best friend nahi hai, tu meri puri duniya hai. Mere din ki shuruat tere message se hoti hai aur raat tujhse baat kiye bina khatam nahi hoti."
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-pink-400 text-right">
          <p className="text-lg text-gray-800">
            "Meri aadat thodi kharab hai, gusse me kuch bhi bol deti hu. Par sach me, tujhe khone ka darr mera sabse bada darr hai."
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            href="/apology" 
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Aakhri Page Pe Chal... 🥺
          </Link>
        </div>

      </div>
    </div>
  );
}