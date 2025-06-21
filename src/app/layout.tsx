// app/layout.tsx

import type { Metadata } from 'next';
import { EB_Garamond, Merriweather } from 'next/font/google';
import './globals.css';

// ALTERAÇÃO: Importamos o novo componente de parallax
import DecorationParallax from '@/app/components/DecorationParallax'; // Ajuste o caminho se necessário

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Gansai',
  description: 'Descrição aqui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${ebGaramond.variable} ${merriweather.variable} bg-[#FFFFEE] scroll-smooth select-none`}>
      <body>
        {/* ALTERAÇÃO: Adicionamos o componente de parallax aqui. Ele ficará no fundo. */}
        <DecorationParallax />

        {/* ALTERAÇÃO: Envolvemos o {children} em uma tag <main> com posicionamento relativo. */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}