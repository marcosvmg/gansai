// app/components/BackToTopButton.tsx

'use client';

import { useState, useEffect } from 'react';

// Ícone da seta para cima
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export default function BackToTopButton() {
  // Estado para controlar a visibilidade do botão
  const [isVisible, setIsVisible] = useState(false);

  // Função para mostrar ou esconder o botão com base na posição do scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // O botão aparece após rolar 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar a página suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Adiciona o 'escutador' de evento de scroll quando o componente monta
    window.addEventListener('scroll', toggleVisibility);

    // Remove o 'escutador' quando o componente desmonta para evitar vazamento de memória
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        // Aplica transição de opacidade e visibilidade
        className={`inline-flex items-center justify-center cursor-pointer w-8 h-8 rounded-full bg-c3 text-c0 shadow-lg transition-opacity duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c1 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Go to top"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}