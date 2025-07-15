'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface BaziResult {
  compatibility: number;
  strengths: string[];
  challenges: string[];
  advice: string;
}

export default function BaziPage() {
  const [person1, setPerson1] = useState({ name: '', birthDate: '', birthTime: '' });
  const [person2, setPerson2] = useState({ name: '', birthDate: '', birthTime: '' });
  const [result, setResult] = useState<BaziResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateBaziCompatibility = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Simplified Bazi compatibility calculation
    const date1 = new Date(person1.birthDate);
    const date2 = new Date(person2.birthDate);
    
    const yearDiff = Math.abs(date1.getFullYear() - date2.getFullYear());
    const monthDiff = Math.abs(date1.getMonth() - date2.getMonth());
    
    // Simple compatibility score based on birth dates
    let compatibility = 85;
    if (yearDiff % 12 === 0 || yearDiff % 12 === 6) compatibility += 10;
    if (monthDiff === 0) compatibility += 5;
    if (yearDiff < 5) compatibility -= 5;
    
    compatibility = Math.min(100, Math.max(60, compatibility));

    const strengths = [
      "Strong emotional connection and understanding",
      "Complementary energy patterns that support growth",
      "Shared values and life goals alignment",
      "Natural harmony in communication styles"
    ];

    const challenges = [
      "Different approaches to handling stress",
      "Need for better balance in decision-making",
      "Occasional conflicts in lifestyle preferences",
      "Importance of maintaining individual identity"
    ];

    const advice = compatibility > 85 
      ? "Your Bazi charts show excellent compatibility! Focus on nurturing your natural harmony while respecting each other's individual paths."
      : compatibility > 75
      ? "Good compatibility with room for growth. Work on understanding each other's elemental nature and find balance in your differences."
      : "Moderate compatibility that requires conscious effort. Focus on communication and finding common ground in your shared goals.";

    setResult({
      compatibility,
      strengths: strengths.slice(0, Math.floor(compatibility / 25) + 1),
      challenges: challenges.slice(0, Math.floor((100 - compatibility) / 20) + 1),
      advice
    });
    setShowResult(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Sacramento, cursive' }}>
              Bazi Compatibility Reading
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'Lora, serif' }}>
              Discover the harmony between two souls through ancient Chinese Bazi astrology. 
              Enter both birth details to reveal your compatibility and relationship insights.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
            <form onSubmit={calculateBaziCompatibility} className="space-y-8">
              {/* Person 1 */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Sacramento, cursive' }}>
                  First Person
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={person1.name}
                      onChange={(e) => setPerson1({...person1, name: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-yellow-400 focus:outline-none"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Birth Date
                    </label>
                    <input
                      type="date"
                      value={person1.birthDate}
                      onChange={(e) => setPerson1({...person1, birthDate: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-yellow-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Birth Time
                    </label>
                    <input
                      type="time"
                      value={person1.birthTime}
                      onChange={(e) => setPerson1({...person1, birthTime: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-yellow-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Person 2 */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Sacramento, cursive' }}>
                  Second Person
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={person2.name}
                      onChange={(e) => setPerson2({...person2, name: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-yellow-400 focus:outline-none"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Birth Date
                    </label>
                    <input
                      type="date"
                      value={person2.birthDate}
                      onChange={(e) => setPerson2({...person2, birthDate: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-yellow-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2" style={{ fontFamily: 'Lora, serif' }}>
                      Birth Time
                    </label>
                    <input
                      type="time"
                      value={person2.birthTime}
                      onChange={(e) => setPerson2({...person2, birthTime: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-yellow-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Calculate Compatibility
                </button>
              </div>
            </form>

            {/* Results */}
            {showResult && result && (
              <div className="mt-8 bg-white/10 rounded-lg p-6 animate-fade-in">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center" style={{ fontFamily: 'Sacramento, cursive' }}>
                  Compatibility Analysis
                </h3>
                
                {/* Compatibility Score */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-yellow-400 text-black rounded-full w-24 h-24 flex items-center justify-center">
                    <span className="text-2xl font-bold">{result.compatibility}%</span>
                  </div>
                  <p className="text-white mt-2" style={{ fontFamily: 'Lora, serif' }}>
                    Compatibility Score
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                      Relationship Strengths
                    </h4>
                    <ul className="space-y-2">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="text-white/90 flex items-start" style={{ fontFamily: 'Lora, serif' }}>
                          <span className="text-green-400 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-xl font-bold text-orange-400 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                      Areas for Growth
                    </h4>
                    <ul className="space-y-2">
                      {result.challenges.map((challenge, index) => (
                        <li key={index} className="text-white/90 flex items-start" style={{ fontFamily: 'Lora, serif' }}>
                          <span className="text-orange-400 mr-2">⚠</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Advice */}
                <div className="mt-6 bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3" style={{ fontFamily: 'Lora, serif' }}>
                    Relationship Guidance
                  </h4>
                  <p className="text-white/90" style={{ fontFamily: 'Lora, serif' }}>
                    {result.advice}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

