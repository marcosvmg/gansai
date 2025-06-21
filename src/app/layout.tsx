// app/layout.tsx

import type { Metadata } from 'next';
import { EB_Garamond, Merriweather } from 'next/font/google';
import './globals.css';

// 1. Importando todos os componentes de layout que criamos
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DecorationParallax from '@/app/components/DecorationParallax';
import BackToTopButton from '@/app/components/BackToTopButton';

// 2. Configuração das fontes
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

// 3. Metadata do site, incluindo os ícones (favicon)
export const metadata: Metadata = {
  title: 'Gansai',
  description: 'High-end watercolor pencils for artists.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

// 4. Estrutura do Layout Principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${ebGaramond.variable} ${merriweather.variable} bg-[#FFFFEE] scroll-smooth scroll-pt-[120px] select-none`}>
      <body>
        {/* Efeito parallax fica no fundo, atrás de todo o conteúdo */}
        <DecorationParallax />

        {/* Wrapper principal para o conteúdo, garantindo que ele fique acima do parallax */}
        {/* As classes flex garantem que o footer fique no final da página, mesmo em páginas com pouco conteúdo */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />

          {/* O conteúdo de cada página (page.tsx) será renderizado aqui */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>

        {/* Botão flutuante que fica acima de todo o conteúdo */}
        <BackToTopButton />
      </body>
    </html>
  );
}