'use client'; // Necessário para usar hooks como useState e useEffect

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Main() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full flex justify-center bg-transparent py-16 px-4">
      {/* Layout em coluna no mobile, linha no desktop (lg) */}
      <main className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full max-w-7xl">
        {/* Coluna de Texto */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left ">
          {/* Título com tamanhos de fonte responsivos e animação */}
          <h1 className={`text-c5 text-5xl md:text-7xl lg:text-[100px] xl:text-[110px] font-garamond italic font-medium leading-tight transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-200`}>
            HIGH-END WATER COLOR PENCILS.
          </h1>
          {/* Parágrafo com animação */}
          <p className={`text-c4 text-lg transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-300`}>
            Introducing Gansai, the premium brand of watercolor pencils that
            effortlessly blends the worlds of drawing and painting. With the
            perfect balance of vibrant colors and exceptional quality, Gansai
            empowers artists of all levels to create breathtaking watercolor
            masterpieces.
          </p>
          {/* Botão refatorado para um Link estilizado, com animação */}
          <div className={`transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-[400ms]`}>
            <Link
              href="#products"
              className='inline-block cursor-pointer bg-c5 text-xl lg:text-[28px] text-c0 px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105'
            >
              SEE MORE
            </Link>
          </div>
        </div>

        {/* Coluna da Imagem */}
        {/* ALTERAÇÃO CRUCIAL: 'justify-center' para mobile e 'lg:justify-end' para desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* Imagem com animação de escala e opacidade */}
          <div className={`transition-all duration-1000 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} delay-[500ms]`}>
            <Image
              src="/assets/main-home.png"
              alt="Main Image"
              width={495}
              height={700}
              className="w-full h-auto max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}