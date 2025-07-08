'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-yellow-400 text-xl font-bold" style={{ fontFamily: 'Sacramento, cursive' }}>
              Blue Rose
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Numerology
              </Link>
              <Link
                href="/bazi"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Bazi Reading
              </Link>
              <Link
                href="/feng-shui"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Feng Shui
              </Link>
              <Link
                href="/charms"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Charms & Accessories
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ fontFamily: 'Lora, serif' }}
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md">
          <Link
            href="/"
            className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => setIsOpen(false)}
          >
            Numerology
          </Link>
          <Link
            href="/bazi"
            className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => setIsOpen(false)}
          >
            Bazi Reading
          </Link>
          <Link
            href="/feng-shui"
            className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => setIsOpen(false)}
          >
            Feng Shui
          </Link>
          <Link
            href="/charms"
            className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => setIsOpen(false)}
          >
            Charms & Accessories
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

