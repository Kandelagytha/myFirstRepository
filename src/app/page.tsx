'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [name, setName] = useState('');
  const [result, setResult] = useState<{
    expressionNumber: number;
    soulUrgeNumber: number;
    expressionInterpretation: string;
    soulUrgeInterpretation: string;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const letterValues: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
  };

  const expressionInterpretations: { [key: number]: string } = {
    1: "You are a natural leader with a strong drive to achieve your goals. Independence and innovation are your strengths.",
    2: "You are a peacemaker, sensitive and intuitive, with a talent for cooperation and diplomacy.",
    3: "You are creative and expressive, with a love for communication, art, and social connections.",
    4: "You are practical and hardworking, with a strong sense of structure, discipline, and reliability.",
    5: "You are adventurous and freedom-loving, always seeking new experiences and embracing change.",
    6: "You are nurturing and responsible, with a deep love for family, community, and harmony.",
    7: "You are a seeker of truth, with a deep, analytical mind and a spiritual, introspective nature.",
    8: "You are ambitious and powerful, with a talent for business, leadership, and material success.",
    9: "You are a humanitarian, compassionate and idealistic, with a desire to help others and make a difference.",
    11: "You are the Master Intuitive, a visionary with heightened intuition and spiritual insight. You inspire others with your ideals.",
    22: "You are The Master Builder, capable of turning big dreams into reality. You have the power to create lasting impact.",
    33: "You are The Master Teacher, a rare soul driven by selflessness, compassion, and a mission to uplift others through love and service."
  };

  const soulUrgeInterpretations: { [key: number]: string } = {
    1: "Your heart craves independence and leadership. You desire to stand out and forge your own path.",
    2: "You yearn for harmony, love, and connection. Your soul seeks peace and emotional intimacy.",
    3: "Your inner desire is to express yourself creatively. You long for joy, beauty, and social interaction.",
    4: "You desire stability and structure. Your soul seeks security and a sense of order.",
    5: "Your heart craves freedom and adventure. You long for variety, excitement, and new experiences.",
    6: "Your soul desires love, family, and responsibility. You yearn to nurture and care for others.",
    7: "You seek spiritual and intellectual growth. Your soul desires truth, wisdom, and inner understanding.",
    8: "Your heart craves power and success. You desire recognition, achievement, and material abundance.",
    9: "Your soul yearns to serve humanity. You desire to make a difference and live with compassion and idealism.",
    11: "As the Master Intuitive, your soul craves spiritual awakening and enlightenment. You desire to inspire and uplift others.",
    22: "As The Master Builder, your heart desires to create something monumental. You yearn to manifest your grand visions.",
    33: "As The Master Teacher, your soul seeks to heal and teach. You desire to spread love, compassion, and wisdom to the world"
  };

  const reduceNumber = (total: number): number => {
    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
      total = String(total).split("").reduce((sum, digit) => sum + Number(digit), 0);
    }
    return total;
  };

  const calculateNumbers = (event: React.FormEvent) => {
    event.preventDefault();
    
    const fullName = name.toUpperCase().replace(/[^A-Z]/g, "");
    
    // Calculate Expression Number (all letters)
    let expressionTotal = 0;
    for (let i = 0; i < fullName.length; i++) {
      expressionTotal += letterValues[fullName[i]] || 0;
    }
    const expressionNumber = reduceNumber(expressionTotal);

    // Calculate Soul Urge Number (vowels only)
    let soulUrgeTotal = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < fullName.length; i++) {
      const letter = fullName[i];
      const isYVowel = letter === 'Y' && (i === fullName.length - 1 || !vowels.includes(fullName[i + 1]));
      if (vowels.includes(letter) || isYVowel) {
        soulUrgeTotal += letterValues[letter];
      }
    }
    const soulUrgeNumber = reduceNumber(soulUrgeTotal);

    setResult({
      expressionNumber,
      soulUrgeNumber,
      expressionInterpretation: expressionInterpretations[expressionNumber],
      soulUrgeInterpretation: soulUrgeInterpretations[soulUrgeNumber]
    });
    setShowResult(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-r from-transparent to-black/20"></div>
        
        {/* Middle Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 bg-black/10 backdrop-blur-sm">
          <div className="text-center max-w-md w-full">
            <h1 className="text-6xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Sacramento, cursive' }}>
              Blue Rose
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 mb-8" style={{ fontFamily: 'Sacramento, cursive' }}>
              Numerology
            </h2>
            
            <p className="text-white text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
              Discover your destiny with Pythagorean Numerology. Enter your full name below to reveal your Expression and Soul Urge Numbers.
            </p>
            
            <form onSubmit={calculateNumbers} className="mb-8">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-green-400 bg-white/90 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-green-600 mb-4"
                style={{ fontFamily: 'Lora, serif' }}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Calculate
              </button>
            </form>
            
            {/* Result Container */}
            {showResult && result && (
              <div className={`relative transition-all duration-1000 ease-out transform ${showResult ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative bg-amber-50 border-4 border-amber-800 rounded-lg p-6 shadow-2xl">
                  <div className="absolute inset-0 opacity-20">
                    <Image
                      src="/parchment.jpg"
                      alt="Parchment"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative z-10 text-amber-900" style={{ fontFamily: 'Lora, serif' }}>
                    <p className="mb-4">
                      <strong>Your Expression Number is {result.expressionNumber}:</strong> {result.expressionInterpretation}
                    </p>
                    <p>
                      <strong>Your Soul Urge Number is {result.soulUrgeNumber}:</strong> {result.soulUrgeInterpretation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <footer className="mt-12 text-center text-white/80 text-sm" style={{ fontFamily: 'Lora, serif' }}>
            <p>by Kandela Gytha Dharanawati, 2025</p>
            <p>Built with the help of Grok from xAI</p>
          </footer>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 bg-gradient-to-l from-transparent to-black/20"></div>
      </div>
      
      {/* Lucky Number */}
      <div className="absolute bottom-4 right-4 text-yellow-400 text-2xl font-bold" style={{ fontFamily: 'Sacramento, cursive' }}>
        088
      </div>
    </div>
  );
}

