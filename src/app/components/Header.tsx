'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`w-full flex justify-center sticky top-0 ${isMenuOpen ? 'z-70' : 'z-40'}`}>
        <header className="relative flex justify-between items-center p-4 md:px-6 w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 mt-4 bg-c0/80 backdrop-blur-lg rounded-xl">
          <div className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-100`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src="/assets/logo.svg" alt="Logo" width={180} height={63} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10 text-c4">
              <li className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-200`}>
                <a className='text-2xl hover:opacity-80' href="#about">About</a>
              </li>
              <li className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-300`}>
                <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
              </li>
              <li className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-[400ms]`}>
                <a className='text-2xl hover:opacity-80' href="#products">Products</a>
              </li>
              <li className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-[500ms]`}>
                <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
              </li>
              <li className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-[600ms]`}>
                <a className='text-2xl hover:opacity-80' href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden absolute top-1/2 right-6 -translate-y-1/2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="w-8 h-8 flex flex-col justify-center items-center gap-y-1.5">
              <span className={`block h-0.5 w-full bg-c4 rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-c4 rounded-full transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-c4 rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </header>
      </div>

      <div className={`md:hidden fixed inset-0 z-60 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-c0/70 backdrop-blur-xl"></div>
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image src="/assets/decoration.svg" alt="Decoração de fundo" width={400} height={400} className={`transition-all duration-700 animate-[slowRotate_40s_linear_infinite] opacity-10 ${isMenuOpen ? 'scale-100' : 'scale-125'}`} />
        </div>
        <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-10">
          <ul className="flex flex-col items-center gap-8">
            <li className={`transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'}`}><a className='text-4xl text-c4' href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li className={`transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-5'}`}><a className='text-4xl text-c4' href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li className={`transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 translate-y-5'}`}><a className='text-4xl text-c4' href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}