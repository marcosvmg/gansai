// app/components/DecorationParallax.tsx

'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function DecorationParallax() {
  useEffect(() => {
    const decorations = document.querySelectorAll<HTMLElement>('.parallax-decoration');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      decorations.forEach(decoration => {
        const rotationSpeed = parseFloat(decoration.getAttribute('data-speed-rotation') || '0.1');
        const rotationDirection = decoration.getAttribute('data-direction-rotation') === 'left' ? -1 : 1;
        const speedY = parseFloat(decoration.getAttribute('data-speed-y') || '-0.05');
        const speedX = parseFloat(decoration.getAttribute('data-speed-x') || '0');

        const rotation = scrollY * rotationSpeed * rotationDirection;
        const translateY = scrollY * speedY;
        const translateX = scrollY * speedX;

        decoration.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">

      {/* --- CAMADA DE PROFUNDIDADE (FUNDO) --- */}
      <Image
        src="/assets/decoration.svg"
        alt="Deep background decoration"
        width={400}
        height={400}
        className="parallax-decoration absolute top-[60%] left-[-150px] opacity-10 blur-lg"
        data-speed-rotation="0.04"
        data-direction-rotation="right"
        data-speed-y="-0.12"
      />
      <Image
        src="/assets/decoration.svg"
        alt="Deep background decoration"
        width={300}
        height={300}
        className="parallax-decoration absolute top-[150%] right-[-100px] opacity-10 blur-md"
        data-speed-rotation="0.06"
        data-direction-rotation="left"
        data-speed-y="-0.15"
      />

      {/* --- CAMADA MÉDIA --- */}
      <Image
        src="/assets/decoration.svg"
        alt="Mid-ground decoration"
        width={120}
        height={120}
        className="parallax-decoration absolute top-[15%] right-[15%] opacity-30 blur-sm"
        data-speed-rotation="0.12"
        data-direction-rotation="right"
        data-speed-y="-0.06"
      />
       <Image
        src="/assets/decoration.svg"
        alt="Mid-ground decoration"
        width={150}
        height={150}
        className="parallax-decoration absolute top-[90%] left-[5%] opacity-20 blur-sm"
        data-speed-rotation="0.09"
        data-direction-rotation="left"
        data-speed-y="-0.08"
        data-speed-x="0.02"
      />
       <Image
        src="/assets/decoration.svg"
        alt="Mid-ground decoration"
        width={90}
        height={90}
        className="parallax-decoration absolute top-[180%] left-[25%] opacity-40 blur-[2px]"
        data-speed-rotation="0.15"
        data-direction-rotation="right"
        data-speed-y="-0.1"
      />

      {/* --- CAMADA DE DESTAQUE (FRENTE) --- */}
      <Image
        src="/assets/decoration.svg"
        alt="Foreground decoration"
        width={50}
        height={50}
        className="parallax-decoration absolute top-[40%] left-[20%] opacity-80"
        data-speed-rotation="0.22"
        data-direction-rotation="left"
        data-speed-y="-0.03"
        data-speed-x="-0.04"
      />
      <Image
        src="/assets/decoration.svg"
        alt="Foreground decoration"
        width={70}
        height={70}
        className="parallax-decoration absolute top-[75%] right-[25%] opacity-90"
        data-speed-rotation="0.18"
        data-direction-rotation="right"
        data-speed-y="-0.05"
      />
       <Image
        src="/assets/decoration.svg"
        alt="Foreground decoration"
        width={45}
        height={45}
        className="parallax-decoration absolute top-[140%] left-[40%] opacity-95"
        data-speed-rotation="0.28"
        data-direction-rotation="left"
        data-speed-y="-0.07"
        data-speed-x="0.03"
      />
       <Image
        src="/assets/decoration.svg"
        alt="Foreground decoration"
        width={65}
        height={65}
        className="parallax-decoration absolute top-[200%] right-[10%] opacity-75"
        data-speed-rotation="0.15"
        data-direction-rotation="right"
        data-speed-y="-0.1"
      />

    </div>
  );
}